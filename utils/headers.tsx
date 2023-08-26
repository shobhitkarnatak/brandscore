/** @format */

import { groupDetails } from './columnUI';

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
		cell: ({ row }: any) => groupDetails(row),
	},
];
