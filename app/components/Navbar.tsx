/** @format */

import { Bars3Icon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
type Props = {
	/**
	 * Allows the parent component to modify the state when the
	 * menu button is clicked.
	 */
	onMenuButtonClick(): void;
};
const Navbar = (props: Props) => {
	return (
		<nav>
			<button className='md:hidden' onClick={props.onMenuButtonClick}>
				<Bars3Icon className='h-6 w-6' />
			</button>
		</nav>
	);
};

export default Navbar;
