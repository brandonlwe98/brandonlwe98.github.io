import { Center } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Tile = ({ text, color }) => {
	const [oldColor, setColor] = useState('gray');
	
	useEffect(() => {
		if (!color || oldColor === color) return
		setColor(color)
	}, [color, oldColor]);

	return (
		<Center
			id='0'
			w='60px'
			h='60px'
			className='text-4xl font-bold'
			color='black'
			backgroundColor={color ? color : 'lightgray'}
			borderRadius='md'
		>
			{text}
		</Center>
	)
}

export default Tile
