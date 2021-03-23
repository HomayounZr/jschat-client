import socketIOClient from 'socket.io-client';

let socket = socketIOClient('http://localhost:3001');

const connectSocket = () => {
    socket = socketIOClient('http://localhost:3001');
}

export {
    socket,
    connectSocket
};