import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client'
import { Button, Typography, Input, Divider, Row, Col } from 'antd';
import "antd/dist/antd.css";

const { Title, Paragraph, Text, Link } = Typography;

const SERVER_URL = 'ws://localhost:5000'

function App() {
  const [message, setMessage] = useState()

  const socketRef = useRef(null)

  useEffect(() => {
    socketRef.current = io(SERVER_URL)
  }, [])

  return (
    <div className="App">
      <Row>
        <Typography>
          <Title>Set msg</Title>
        </Typography>
      </Row>
      <Row>
        <Col>
          <Input
            placeholder="Set new messages"
            onChange={(e) => setMessage(e.target.value)}
          />
        </Col>
        <Col>
          <Button
            type="primary"
            onClick={(e) => {
              socketRef.current.emit('message', message)
            }}
          >
            Submit
          </Button>
        </Col>
      </Row>

    </div>
  );
}

export default App;
