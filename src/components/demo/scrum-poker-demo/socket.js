import { io } from 'socket.io-client';
import {backend_url} from './config';

export const socket = io(backend_url, {
    autoConnect: false,
    withCredentials: false,
    cors: {
        origin: "*"
    }
});

