import React from 'react'
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa'

const TraitButtons = ({ handleDecrease, handleIncrease, stat }) => {
	const [disabled, setDisabled] = React.useState({
		decrease: false,
		increase: false
	});

	React.useEffect(() => {
		if (stat === 4) {
			return setDisabled({ increase: false, decrease: true });
		} else if (stat === 12) {
			return setDisabled({ increase: true, decrease: false });
		} else {
			return setDisabled({ increase: false, decrease: false });
		}
	}, [stat]);

    return (
        <>
            <button
				disabled={disabled.decrease}
				onClick={handleDecrease}
				className={`mx-3 ${disabled.decrease ? 'invisible' : 'text-green-900'}`}>
				<FaMinusSquare className="text-4xl" />
			</button>
			<button
				disabled={disabled.increase}
				onClick={handleIncrease}
				className={`mx-3 ${disabled.increase ? 'invisible' : 'text-green-900'}`}>
				<FaPlusSquare className="text-4xl" />
			</button>
        </>
    )
}

export default TraitButtons