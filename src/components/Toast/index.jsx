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
	toast.error(<Toast message={message} icon={<GiMineExplosion className="text-4xl" />} />, {
		className: 'bg-red-900 text-red-200 border-l-8 border-red-500',
		progressClassName: 'bg-red-600'
	});

export const successToast = message =>
	toast.success(<Toast message={message} icon={<GiSave className="text-4xl" />} />, {
		className: 'bg-green-900 text-green-200 border-l-8 border-green-500',
		progressClassName: 'bg-green-600'
	});

export default Toast;