import React from 'react'
import dog from "../img/dog.png"
import { useThemecontext } from './../provider/ModeProvider';

export const Modal = ({ isModal }) => {
	// const { isModal } = useThemecontext();
	// console.log(isModal)

	return (
		<div>
			{isModal ? (<div className='w-9 h-9 bg-black'><h1>랄라랄</h1></div>) : (<></>)}
		</div>
	)
}
