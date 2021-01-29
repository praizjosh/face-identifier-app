import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
	return (
		<div className='pa2'>
			<p className='f4'>
				Our magical Face Recognition App will find faces in your pictures. 
			</p>
			<p className='f4'>
				Give it a try!
			</p>
			<div className='center'>
				<div className='center form pa4 br3 shadow-5'>
					<input className='f5 pa2 w-75 center' type='text' placeholder='Paste image link here...' onChange={onInputChange} />
					<button className='w-25 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onPictureSubmit}>Find</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;