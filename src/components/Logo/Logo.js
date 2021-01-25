import React from 'react';
import Tilt from 'react-tilt';
import brain from './neuron.png';
import './Logo.css';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max: 65 }} style={{ height: 75, width: 75 }} > 
				 <div className="Tilt-inner imgTwea"><a href='/'><img src={brain} alt='Brain Logo' /></a></div>
			</Tilt>
		</div>
		)
}

export default Logo;