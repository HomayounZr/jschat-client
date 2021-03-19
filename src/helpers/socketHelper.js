import socketIOClient from 'socket.io-client';

class SocketHelper {
    static socket = null;

    static connectSocket = () => {
        this.socket = socketIOClient("http://localhost:3001");
    }

    static getSocket = () => {
        return this.socket;
    }
}

export default SocketHelper;