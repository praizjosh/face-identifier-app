import React from 'react';
import './Navigation.css';

const Navigation = ({ onRouteChange, isSignedIn }) => {
		if (isSignedIn) {
			return (
			<nav className='trueRight'>
				<p className='f4 link dim black underline pa3 pointer' onClick={() => onRouteChange('signout')}>Sign Out</p>
			</nav>
		);
	} else {
			return (
				<nav className='trueRight'>
					<p className='f4 link dim black underline pa3 pointer' onClick={() => onRouteChange('signin')}>Sign In</p>
					<p className='f4 link dim black underline pa3 pointer' onClick={() => onRouteChange('register')}>Register</p>
				</nav>
			);
	}	
}

export default Navigation;