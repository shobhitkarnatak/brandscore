/** @format */

import classNames from 'classnames';

import {
	ChevronDoubleLeftIcon,
	ChevronDoubleRightIcon,
} from '@heroicons/react/24/outline';
import { Link, useLocation } from '@remix-run/react';
import {  defaultNavItems } from './defaultNavItems';

export type NavItem = {
	label: string;
	href: string;
	icon: React.ReactNode;
};

// add NavItem prop to component prop
type Props = {
	collapsed: boolean;
	navItems?: NavItem[] ;
	setCollapsed(collapsed: boolean): void;
	shown: boolean;
};
const Sidebar = ({
	collapsed,
	navItems = defaultNavItems,
	shown,
	setCollapsed,
}: Props) => {
	const Icon = collapsed ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
	const {pathname} = useLocation()
 
	return (
		<div
			className={classNames({
				'bg-white fixed md:static md:translate-x-0 z-20 shadow-lg':
					true,
				'transition-all duration-300 ease-in-out': true,
				'w-[275px]': !collapsed,
				'w-16': collapsed,
				'-translate-x-full': !shown,
			})}>
			<div
				className={classNames({
					'flex flex-col justify-between h-screen md:h-full sticky inset-0':
						true,
				})}>
				{/* logo and collapse button */}
				<div
					className={classNames({
						'flex items-center border-b border-b-gray-300 transition-none':
							true,
						'p-4 justify-between': !collapsed,
						'py-4 justify-center': collapsed,
					})}>
					{!collapsed && <h2 className='whitespace-nowrap text-xl'>BRAND <span className='font-bold'>SCORE</span></h2>}
					<button
						className='grid place-content-center hover:bg-blue-600 w-10 h-10 rounded-full opacity-0 md:opacity-100 hover:text-white'
						onClick={() => setCollapsed(!collapsed)}>
						<Icon className='w-5 h-5' />
					</button>
				</div>
				<nav className='flex-grow'>
					<ul
						className={classNames({
							'my-2 flex flex-col gap-2 items-stretch': true,
						})}>
						{navItems.map((item, index) => {
							return (
								<li
									key={index}
									className={classNames({
										'text-gray-800 text-sm flex': true, //colors
										'transition-colors duration-300': true, //animation
										'rounded-md p-2 mx-3 gap-4 ': !collapsed,
										'rounded-full p-2 mx-3 w-10 h-10': collapsed,
										'bg-blue-600 text-white': pathname === item.href
										
									})}>
									<Link to={item.href} className='flex gap-2'>
										{item.icon} <span>{!collapsed && item.label}</span>
									</Link>
								</li>
							);
						})}
					</ul>
				</nav>
			</div>
		</div>
	);
};
export default Sidebar;
