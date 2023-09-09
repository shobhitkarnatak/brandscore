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
		icon: <HomeIcon className='w-4 h-4' />,
	},
	{
		label: 'Group',
		href: '/group',
		icon: <UserGroupIcon className='w-4 h-4' />,
	},
	{
		label: 'Industry',
		href: '/industry',
		icon: <FolderIcon className='w-4 h-4' />,
	},
	{
		label: 'Company',
		href: '/company',
		icon: <FolderIcon className='w-4 h-4' />,
	},
	{
		label: 'User Control',
		href: '/user-control',
		icon: <FolderIcon className='w-4 h-4' />,
	},
	{
		label: 'Source',
		href: '/source',
		icon: <FolderIcon className='w-4 h-4' />,
	},
	{
		label: 'Source Global',
		href: '/sourceglobal',
		icon: <FolderIcon className='w-4 h-4' />,
	},
	{
		label: 'Twitter Handler',
		href: '/twitterhandle',
		icon: <CalendarIcon className='w-4 h-4' />,
	},
];
