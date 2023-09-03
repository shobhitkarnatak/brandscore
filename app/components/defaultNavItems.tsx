/** @format */

import React from 'react';
import {
	CalendarIcon,
	FolderIcon,
	HomeIcon,
	UserGroupIcon,
} from '@heroicons/react/24/outline';
// define a NavItem prop
export type NavItem = {
	label: string;
	href: string;
	icon: React.ReactNode;
};
export const defaultNavItems: NavItem[] = [
	{
		label: 'Dashboard',
		href: '/dashboard',
		icon: <HomeIcon className='w-6 h-6' />,
	},
	{
		label: 'Group',
		href: '/group',
		icon: <HomeIcon className='w-6 h-6' />,
	},

	{
		label: 'Industry',
		href: '/industry',
		icon: <UserGroupIcon className='w-6 h-6' />,
	},
	{
		label: 'Company',
		href: '/company',
		icon: <FolderIcon className='w-6 h-6' />,
	},
	{
		label: 'User Control',
		href: '/user-control',
		icon: <CalendarIcon className='w-6 h-6' />,
	},
	{
		label: 'Source',
		href: '/source',
		icon: <CalendarIcon className='w-6 h-6' />,
	},
	{
		label: 'Source Global',
		href: '/sourceglobal',
		icon: <CalendarIcon className='w-6 h-6' />,
	},
	{
		label: 'Twitter Handler',
		href: '/twitterhandle',
		icon: <CalendarIcon className='w-6 h-6' />,
	},
];
