/** @format */
import  { useState } from 'react';
import { Outlet } from '@remix-run/react';
import classNames from 'classnames';
import Sidebar from '~/components/Sidebar';

const Layout = (props: any) => {
	const [collapsed, setSidebarCollapsed] = useState(false);
	const [showSidebar] = useState(true);
	return (
		<div
			className={classNames({
				'flex bg-white min-h-screen': true,
				'grid-cols-sidebar': !collapsed,
				'grid-cols-sidebar-collapsed': collapsed,
				'transition-[grid-template-columns] duration-300 ease-in-out': true,
			})}>
			<Sidebar
				collapsed={collapsed}
				setCollapsed={setSidebarCollapsed}
				shown={showSidebar}
			/>
			<div className='w-full px-10 py-4 bg-gray-50 overflow-hidden'>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
