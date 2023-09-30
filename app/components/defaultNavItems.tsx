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
	isSelected:boolean,
	navItem?:any 
	parent:string
		
	
};
export const defaultNavItems: NavItem[] = [
	{
		label: 'Dashboard',
		href: '/dashboard',
		icon: <HomeIcon className='w-4 h-4' />,
		isSelected:true,
		parent:"dashboard",
		navItem:[]
	},
	{
		label: 'Group',
		href: '/group',
		icon: <UserGroupIcon className='w-4 h-4' />,
		isSelected:false,
		parent:"group",
		navItem:[]

	},
	{
		label: 'Industry',
		href: '/industry',
		icon: <FolderIcon className='w-4 h-4' />,
		isSelected:false,
		parent:"industry",
		navItem:[]
	},
	{
		label: 'Company',
		href: '/company',
		icon: <FolderIcon className='w-4 h-4' />,
		isSelected:false,
		parent:"company",
		navItem:[]
	},
	{
		label: 'Input Manager',
		href: '/input-manager',
		icon: <FolderIcon className='w-4 h-4' />,
		isSelected:false,
		parent:"input-manager",
		navItem:[
			{
				label:"Company",
				href:"/input-manager/company"
			},
			{
				label:"Brand",
				href:"/input-manager/brand"
			},
			{
				label:"Cxo",
				href:"/input-manager/cxo"
			}
		]
	},
	{
		label: 'User Control',
		href: '/user-control',
		icon: <FolderIcon className='w-4 h-4' />,
		isSelected:false,
		parent:"user-control",
		navItem:[]
	},
	{
		label: 'Source',
		href: '/source',
		icon: <FolderIcon className='w-4 h-4' />,
		isSelected:false,
		parent:"source",
		navItem:[]
	},
	{
		label: 'Source Global',
		href: '/sourceglobal',
		icon: <FolderIcon className='w-4 h-4' />,
		isSelected:false,
		parent:"sourceglobal",
		navItem:[]
	},
	{
		label: 'Twitter Handler',
		href: '/twitterhandle',
		icon: <CalendarIcon className='w-4 h-4' />,
		isSelected:false,
		parent:"twitterhandle",
		navItem:[]
	},
];
