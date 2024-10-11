import React, { useEffect } from 'react'
import ZoomVideo from '@zoom/videosdk'

const client = ZoomVideo.createClient(); 
client.init('en-US');

const HostPanel = ({sessionName, token, userName, password}) => {
    const [isConnected, setIsConnected] = useState(false);
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
      joinSession = async () => {
        try {
            await client.join(sessionName, token, userName, password)
            setIsConnected(true);
            client.on('user-added', (user) => {
                setParticipants((prev) => [...prev, user])
            })

            client.on('user-removed', (user) => {
                setParticipants((prev) => prev.filter((participants) => participants.userId !== user.userId))
            });
        } catch (error) {
            console.error("Couldn't join session", error)
        }
      };

      joinSession();
    
      return () => {
        client.leave();
        setIsConnected(false);
      }
    }, [sessionName, token, userName, password])
    
    return (
        <div>HostPanel</div>
    )
}

export default HostPanel