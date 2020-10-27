import React from 'react';
import { GiMineExplosion } from 'react-icons/gi';
import { toast } from 'react-toastify';

const Toast = ({ message }) => {
	return (
		<div className="flex items-center">
			<GiMineExplosion className="text-4xl" />
			<span className="ml-6">{message}</span>
		</div>
	);
};

export const errorToast = (message) => toast(<Toast message={message} />);
export default Toast;