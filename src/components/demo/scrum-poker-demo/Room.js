import { Button, Input, VStack, HStack, Box, Text, Flex, Spacer, Icon, Tooltip, InputGroup, InputRightElement} from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { Link, useNavigate} from 'react-router-dom'
import { socket } from './socket';
import PlayerCard from './components/PlayerCard';
import { BsClipboard } from 'react-icons/bs';
import * as Toastr from 'toastr'
import './toastr.css'

const Room = () => {
    const [isConnected, setIsConnected] = useState(socket.connected);
    const [fooEvents, setFooEvents] = useState([]);
    const {state} = useLocation();
    const navigate = useNavigate();
    const [roundStart, setRoundStart] = useState(0);
    const [averageStory, setAverageStory] = useState(0);
    const [playerName, setPlayerName] = useState(state.name);
    const [playerInput, setPlayerInput] = useState(0);
    const [playerRoom, setPlayerRoom] = useState(state.session);
	const [players, setPlayers] = useState([])
    const [isScrumMaster, setIsScrumMaster] = useState(state.scrumMaster)
    const [highStory, setHighStory] = useState(0);
    const [lowStory, setLowStory] = useState(0);
    const [lowestPlayers, setLowestPlayers] = useState([]);
    const [highestPlayers, setHighestPlayers] = useState([]);
    const [textCopyRoom, setTextCopyRoom] = useState("Copy Room Code");
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        socket.connect();
        socket.emit("join", {
            username: state.name,
            room: state.session,
            scrumMaster: state.scrumMaster,
            story: 0
        })
    }, [])

    useEffect(() => {
        console.log("ROOM STATE", state);

        function onConnect() {
            setIsConnected(true);
        }
      
        function onDisconnect() {
            setIsConnected(false);
        }
      
        function onFooEvent(value) {
            setFooEvents(previous => [...previous, value]);
        }

        function onMessageJoin(value) {
            Toastr.success(value)
            setAverageStory(0);
            setHighStory(0);
            setLowStory(0);
        }

        function onDisband(value){
            alert(value);
            socket.disconnect();
            navigate('/projects/scrum-poker');
        }
      
        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        socket.on('foo', onFooEvent);

        socket.on('messageJoin', onMessageJoin);

        socket.on('messageLeave', (data) => {
            Toastr.error(data)
        })

        socket.on('roomData', (data) => {
            console.log("CLIENT RECEIVED ROOM DATA ", data)
            setPlayers(data.users)
        })

        socket.on('message', (data) => {
            if(data.roundStart == 0){ //end round
                Toastr.error(data.message);
                setPlayerInput(document.getElementById('playerInput').value);
                console.log("EMITTING UPDATE STORY " + playerName + " IN ROOM " + playerRoom + " WITH STORY " + playerInput)
                socket.emit("updateStory", {
                    username: playerName,
                    room: playerRoom,
                    story: parseInt(document.getElementById('playerInput').value) || 0
                })
                socket.emit("ready", {
                    username: playerName,
                    room: playerRoom,
                    ready: false
                })
                setIsReady(false);
            }
            else if(data.roundStart == 1){ //start round
                Toastr.success(data.message)
                setLowStory(0);
                setHighStory(0);
                setAverageStory(0);
            }
            setRoundStart(data.roundStart);
        })

        socket.on('disband', onDisband)

        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
            socket.off('foo', onFooEvent);
        };
    }, [])

    useEffect(() => {
        console.log("PLAYERS IN ROOM ARE NOW ",players)
        if(roundStart == 0)
            calculateAverage();
    }, [players])

    useEffect(() => {
        console.log("UPDATING PLAYER INPUT TO ",playerInput)
    }, [playerInput])

    function startRound(){
        socket.emit("sendMessage", {
            message: `Scrum Master has started the round for [${document.getElementById('playerInput').value}]`,
            roundStart: 1,
            room: playerRoom
        })
    }

    function endRound(){
        socket.emit("sendMessage", {
            message: `Scrum Master has ended the round!`,
            roundStart: 0,
            room: playerRoom
        })
    }

    function calculateAverage(){
        var sum = 0;
        var count = 0;
        var highest = -1;
        var lowest = 9999;
        if(players.length <= 2){
            setAverageStory(0); //skip calculating average until at least 2 other players arrive
        }
        else{ //calculate average
            for(const player of players){
                if(player.scrumMaster) //skip scrum master voting
                    continue;
                count++;
                var points = parseInt(player.story);
                console.log("PARSING INT OF " + player.username + " WITH RESULT " + points);
                sum+= points;
                if(parseInt(points) >= 0){ //update highest and lowest story points
                    if(parseInt(points) > highest){
                        highest = points;
                    }
                    if(parseInt(points) < lowest){
                        lowest = points;
                    }
                }
            }

            var highStories = [];
            var lowStories = [];

            for(const player of players){ //add players to list of highest/lowest story points
                if(player.scrumMaster) //skip scrum master
                    continue;
                var points = parseInt(player.story);
                if(points){ //update highest and lowest story points
                    if(points == highest){
                        highStories.push(player.username);
                    }
                    if(points == lowest){
                        lowStories.push(player.username);
                    }
                }
            }
            highest = (highest <= 0 ? 0 : highest); //set highest to 0 if default value (-1)
            lowest = (lowest >= 9999 ? 0 : lowest); //set lowest to 0 if default value (9999)
            console.log("HIGH STORIES",highStories);
            console.log("LOW STORIES",lowStories);
            setHighestPlayers(highStories);
            setLowestPlayers(lowStories);
            setHighStory(highest);
            setLowStory(lowest);
            setAverageStory(parseFloat(sum/count).toFixed(2));
        }

    }

    function copyRoom(){
        setTextCopyRoom("Copied!");
        navigator.clipboard.writeText(playerRoom)
    }

    function submitStory(){
        console.log("USER SUBMITTED WITH VALUE", document.getElementById('playerInput').value)
        if(document.getElementById('playerInput').value.trim() == ""){
            alert("Please enter a valid number");
            return;
        }
        socket.emit("ready", {
            username: playerName,
            room: playerRoom,
            ready: true
        })
        setIsReady(true);
    }

    function leaveRoom(){
        socket.disconnect();
        navigate('/projects/scrum-poker');
    }

    if(!state){ // unable to retrieve room state (refresh page/ etc...)
        alert("Room error")
		window.location.href = "/";
    }

	return (
        <Box py={4}>
            <Flex>
                <Text fontSize="20px" mb={10} pr={5}>
                    ROOM SESSION:
                </Text>
                <Tooltip label={textCopyRoom} fontSize='md' mb={10}>
                    <Button onClick={copyRoom}>
                        {state.session}
                        <Icon size='sm' ml={2} as={BsClipboard}/>
                    </Button>
                </Tooltip>
                <Spacer/>
                <Button colorScheme='red' onClick={leaveRoom}>
                    Leave Room
                </Button>
            </Flex>

            {
                state.scrumMaster ?
                    <HStack mb={5} spacing='20px'>
                        <Button colorScheme="blue" isDisabled={roundStart == 0 ? false : true}
                        onClick={startRound}>
                            Start round
                        </Button>
                        <Button colorScheme="blue" isDisabled={roundStart == 1 ? false : true}
                        onClick={endRound}>
                            End round
                        </Button>
                    </HStack>
                    :
                    <Text>

                    </Text>
            }
            <HStack>
                <VStack w='50%' alignItems='left'>
                    <Box w='80%'>
                        {
                            players.map((player, index) => (
                                <PlayerCard
                                    key={index}
                                    id={player.id}
                                    name={player.username}
                                    input={roundStart == 1 ? '-' : player.story}
                                    scrumMaster={player.scrumMaster}
                                    isCurrent={player.username == playerName}
                                    ready={player.ready}
                                />
                                // (player.username == playerName ? <Text>HI</Text> : <Text>Ho</Text>)
                            ))
                        }
                    </Box>
                </VStack>
                <Box w='50%'>
                    <HStack>                    
                        <Input id='playerInput' placeholder={isScrumMaster ? 'Enter story/issue name' : 'Enter story points'} 
                        size='lg' isDisabled={(roundStart == 0 && !isScrumMaster) || isReady ? true : false}/>
                        <Button onClick={submitStory} hidden={isScrumMaster} disabled={roundStart == 0 || isReady}>
                            Submit
                        </Button>
                    </HStack>
                    <HStack mt={5} spacing={5}>
                        <Text fontSize='18px' w='50%'>
                            Average Story Points:
                        </Text>
                        <Button fontSize='20px'> {averageStory} </Button>
                    </HStack>
                    <HStack mt={5} spacing={5}>
                        <Text fontSize='18px' w='50%'>
                            Lowest Point:
                        </Text>
                        <Tooltip label={lowestPlayers.join(", ")} fontSize='sm'>
                            <Button fontSize='20px'> {lowStory} </Button>
                        </Tooltip>
                    </HStack>
                    <HStack mt={5} spacing={5}>
                        <Text fontSize='18px' w='50%'>
                            Highest Point:
                        </Text>
                        <Tooltip label={highestPlayers.join(", ")} fontSize='sm'>
                            <Button fontSize='20px'> {highStory} </Button>
                        </Tooltip>
                    </HStack>
                </Box>

            </HStack>
            

        </Box>


	)
}

export default Room
