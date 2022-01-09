import React, { useCallback, useContext, useEffect, useState } from 'react';
import { SocketContext } from '../../context/socket';
import { Button, Typography, Input, Divider, Row, Col, Table } from 'antd';

const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'User name',
    dataIndex: 'username',
    key: 'username'
  }
]

const UserList = () => {
  const socket = useContext(SocketContext)
  const [users, setUsers] = useState([])

  const handleList = useCallback((data) => {
    setUsers(data)
  })

  useEffect(() => {
    socket.open();
    socket.emit("get users");
    socket.on("users list", handleList)
    console.log(users)
  }, [socket])

  return(
    <>
      <Table columns={columns} dataSource={users}/>
    </>
  )
}

export default UserList
