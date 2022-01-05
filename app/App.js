import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client'

const SERVER_URL = 'http://localhost:5000'

function App() {
  const [message, setMessage] = useState()

  const socketRef = useRef(null)

  useEffect(() => {
    socketRef.current = io(SERVER_URL)
  }, [])

  return (
    <div className="App">
      <h1>Set msg</h1>
      <input type="text" aria-label='msg' onChange={(e) => setMessage(e.target.value)}/>
      <button
        onClick={(e) => {
          socketRef.current.emit('message', message)
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
