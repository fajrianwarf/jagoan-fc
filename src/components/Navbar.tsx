import { date } from "../helper";

function Navbar() {
	return (
		<div className='flex justify-between px-6 py-4 text-gray-600 bg-sky-300'>
			<div className='font-medium uppercase'>Jagoan FC - APP</div>
			<div>Date : {date}</div>
		</div>
	);
}

export default Navbar;
