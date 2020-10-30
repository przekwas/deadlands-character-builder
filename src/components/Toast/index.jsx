import React from 'react';
import { GiMineExplosion, GiSave } from 'react-icons/gi';
import { toast } from 'react-toastify';

const Toast = ({ message, icon }) => {
	return (
		<div className="flex items-center">
			{icon}
			<span className="ml-6">{message}</span>
		</div>
	);
};

export const errorToast = message =>
	toast.error(<Toast message={message} icon={<GiMineExplosion className="text-4xl" />} />);

export const successToast = message =>
	toast.success(<Toast message={message} icon={<GiSave className="text-4xl" />} />);
	
export default Toast;
