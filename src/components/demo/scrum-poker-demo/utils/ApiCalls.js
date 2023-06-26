import axios from 'axios';
// generate unique id
import { v4 as genuuid } from 'uuid';

// const backend_url = "http://localhost:5000";
const backend_url = "https://tranquil-journey-11987-ca1f5899f31e.herokuapp.com";

axios.create({baseUrl:backend_url})

export const joinRoom = async (name, sessionID) => {
    const result = await axios.post(
        `${backend_url}/join`, {
            name: name,
            session: sessionID
        }
    ).then(function (res){
        console.log("JOIN RESPONSE ",res);
        return res.data;
    }).catch(function (err){
        console.log("JOIN ERROR", err);
        return err;
    })

    return result;
}

export const hostRoom = async (name) => {
    var sessionID = genuuid();
    // console.log("GENERATING SESSION ID: ", sessionID);
    const result = await axios.post(
        `${backend_url}/host`, {
            name: name,
            session: sessionID
        }
    ).then(function (res){
        res.data.session = sessionID;
        // console.log("RETURNING RES",res.data);

        return res.data;
    }).catch(function (err){
        console.log("HOST ROOM ERR ", err);
        return err;
    })

    return result;
}