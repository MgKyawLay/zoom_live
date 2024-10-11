import React from 'react'
import HostPanel from './components/HostPanel'

const App = () => {

  return (
    <div>
        <h1>Zoom Video Hosting App</h1>

        <HostPanel
         sessionName={'Testing Episode 1'}
         token={'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfa2V5IjoiVnEzYjdsUmhSdDdsTklLYjF3NlB6R0hqRU1odm9hMFAzVWFxIiwidHBjIjoiVGVzdGluZyBFcGlzb2RlIDEiLCJyb2xlX3R5cGUiOjEsInNlc3Npb25fa2V5IjoiVGVzdGluZyBFcGlzb2RlIDE1NzY5IiwidXNlcl9pZGVudGl0eSI6IkRvdWJsZSBUIiwidmVyc2lvbiI6MSwiaWF0IjoxNzI4NjM5MTA4LCJleHAiOjE3Mjg2NDYzMDh9.Kg9hy7DJ4v7cwtRRvmwV8rrj6MRkoi1pYkQIK4jKdGc'}
         password={'abc123'}
         userName={"user admin 1"}
         />
    </div>
  )
}

export default App