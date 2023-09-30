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

export const SourceColumn = [
	{
		header: 'S. NO',
		accessorKey: 'SNO',
	},
	{
		header: 'Source',
		accessorKey: 'SOURCE',
	},
	{
		header: 'Source Url',
		accessorKey: 'SOURCE_URL',
	},
	{
		header: 'Category',
		accessorKey: 'CATEGORY',
	},
	{
		header: 'Reach(Millions)',
		accessorKey: 'REACH',
	},
	{
		header: 'RPS',
		accessorKey: 'RPS',
	},
	{
		header: 'Publication Type',
		accessorKey: 'PUBLICATION_TYPE',
	},
	{
		header: 'Language',
		accessorKey: 'LANGUAGE',
	},
	
	{
		header: 'Action',
		cell: ({ row }: any) => IndustryDetails(row),
	},
];

export const SourceGlobalColumn = [
	{
		header: 'S. NO',
		accessorKey: 'SNO',
	},
	{
		header: 'Source',
		accessorKey: 'SOURCE',
	},
	{
		header: 'Source Url',
		accessorKey: 'SOURCE_URL',
	},
	{
		header: 'Reach(Millions)',
		accessorKey: 'REACH',
	},
	{
		header: 'RPS',
		accessorKey: 'RPS',
	},
	{
		header: 'Publication Type',
		accessorKey: 'PUBLICATION_TYPE',
	},
	{
		header: 'Language',
		accessorKey: 'LANGUAGE',
	},
	
	{
		header: 'Action',
		cell: ({ row }: any) => IndustryDetails(row),
	},
];
export const TwitterGlobalColumn = [
	{
		header: 'S. NO',
		accessorKey: 'SNO',
	},
	{
		header: 'Twitter Handle',
		accessorKey: 'TWITTER_HANDLE',
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

export const InputManagerCompanyColumn = [
	{
		header: 'NEW LAST UPDATE',
		accessorKey: 'NEW_LAST_UPDATE',
	},
	{
		header: 'TWITTER LAST mUPDATE',
		accessorKey: 'TWITTER_LAST_UPDATE',
	},
	{
		header: 'FACEBOOK LAST UPDATE',
		accessorKey: 'FACEBOOK_LAST_UPDATE',
	},
	{
		header: 'QUERY',
		accessorKey: 'QUERY_NAME',
	},
	{
		header: 'KEYWORDS',
		accessorKey: 'KEYWORDS',
	},
	{
		header: 'NEW KEYWORDS',
		accessorKey: 'NEW_KEYWORDS',
	},
	{
		header: 'TWITTER KEYWORDS',
		accessorKey: 'TWITTER_KEYWORDS',
	},
	{
		header: 'FACEBOOK_PAGE',
		accessorKey: 'FACEBOOK_PAGE',
	},
	
	{
		header: 'TWITTER HANDLE',
		accessorKey: 'TWITTER_HANDLE',
	},
];