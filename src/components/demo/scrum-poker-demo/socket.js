import { io } from 'socket.io-client';

const backend_url = "http://localhost:5000";
// const backend_url = "https://tranquil-journey-11987-ca1f5899f31e.herokuapp.com/";

export const socket = io(backend_url, {
    autoConnect: false,
    withCredentials: false,
    cors: {
        origin: "*"
    }
});

