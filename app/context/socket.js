import socketio from "socket.io-client";
import React from 'react';

export const socket = socketio.connect(process.env.SERVER_HOST_URL);
export const SocketContext = React.createContext();
