/** @format */

import { CompanyDetails, GroupDetails, IndustryDetails } from "~/components/columnUi";



 

export const groupColumn = [
	{
		header: 'S. NO',
		accessorKey: 'SNO',
	},
	{
		header: 'Group',
		accessorKey: 'GROUP',
	},
	{
		header: 'Action',
		cell: ({ row }: any) => GroupDetails(row),
	},
];

export const industryColumn = [
	{
		header: 'S. NO',
		accessorKey: 'SNO',
	},
	{
		header: 'Group',
		accessorKey: 'GROUP',
	},
	{
		header: 'Industry',
		accessorKey: 'INDUSTRY',
	},
	{
		header: 'Industry Keywords',
		accessorKey: 'INDUSTRY_KEYWORDS',
	},
	{
		header: 'Seagments',
		accessorKey: 'SEAGMENTS',
	},
	{
		header: 'Action',
		cell: ({ row }: any) => IndustryDetails(row),
	},
];

export const companyColumn = [
	{
		header: 'S. NO',
		accessorKey: 'SNO',
	},
	{
		header: 'Group',
		accessorKey: 'GROUP',
	},
	{
		header: 'Industry',
		accessorKey: 'INDUSTRY',
	},
	{
		header: 'Category',
		accessorKey: 'CATEGORY',
	},
	{
		header: 'News Keywords	',
		accessorKey: 'NEWS_KEYWORDS',
	},
	{
		header: 'Twitter Keywords',
		accessorKey: 'Twitter_KEYWORDS',
	},
	{
		header: 'Internal Keywords',
		accessorKey: 'INTERNAL_KEYWORDS',
	},
	{
		header: 'Facebook Page',
		accessorKey: 'FACEBOOK_PAGE',
	},
	{
		header: 'Twitter Handler',
		accessorKey: 'TWITTER_HANDLER',
	},
	{
		header: 'Internal Keywords',
		accessorKey: 'INTERNAL_KEYWORDS',
	},
	{
		header: 'Seagments',
		accessorKey: 'SEAGMENTS',
	},
	{
		header: 'Action',
		cell: ({ row }: any) => CompanyDetails(row),
	},
];

export const userControlColumn = [
	{
		header: 'S. NO',
		accessorKey: 'SNO',
	},
	{
		header: 'Name',
		accessorKey: 'NAME',
	},
	{
		header: 'Email',
		accessorKey: 'EMAIL',
	},
	{
		header: 'Industry',
		accessorKey: 'INDUSTRY',
	},
	{
		header: 'Modules',
		accessorKey: 'MODULES',
	},
	{
		header: 'Type',
		accessorKey: 'TYPE',
	},
	{
		header: 'Created At',
		accessorKey: 'CREATED_AT',
	},
	{
		header: 'Action',
		cell: ({ row }: any) => IndustryDetails(row),
	},
];
