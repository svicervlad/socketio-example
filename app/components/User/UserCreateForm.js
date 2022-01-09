import React, { useContext, useState } from 'react';
import { SocketContext } from '../../context/socket';
import { Button, Typography, Input, Divider, Row, Col } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const UserCreateForm = () => {
  const [user, setUser] = useState()
  const socket = useContext(SocketContext);
  return (
    <>
      <Row>
        <Typography>
          <Title>Create user</Title>
        </Typography>
      </Row>
      <Row>
        <Col>
          <Input
            placeholder="User name"
            onChange={(e) => setUser(e.target.value)}
          />
        </Col>
        <Col>
          <Button
            type="primary"
            onClick={(e) => {
              socket.emit('user create', user)
            }}
          >
            Sumbit
          </Button>
        </Col>
      </Row>
    </>
  )
}

export default UserCreateForm
