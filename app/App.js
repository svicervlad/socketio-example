import React from 'react';
import { SocketContext, socket } from './context/socket';
import "antd/dist/antd.css";
import UserCreateForm from './components/User/UserCreateForm';
import UserList from './components/User/UserList';

function App() {
  return (
    <div className="App">
      <SocketContext.Provider value={socket}>
        <UserCreateForm/>
        <UserList/>
      </SocketContext.Provider>
    </div>
  );
}

export default App;
