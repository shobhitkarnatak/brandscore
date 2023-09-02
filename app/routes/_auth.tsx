/** @format */

import { Outlet } from '@remix-run/react';
import classNames from 'classnames';
import React, { useState } from 'react';
import Navbar from '~/components/Navbar';
import Sidebar from '~/components/Sidebar';

const Layout = (props: any) => {
	const [collapsed, setSidebarCollapsed] = useState(false);
	const [showSidebar, setShowSidebar] = useState(true);
	return (
		<div
			className={classNames({
				'flex bg-[#f8f8f8] min-h-screen': true,
				'grid-cols-sidebar': !collapsed,
				'grid-cols-sidebar-collapsed': collapsed,
				'transition-[grid-template-columns] duration-300 ease-in-out': true,
			})}>
			<Sidebar
				collapsed={collapsed}
				setCollapsed={setSidebarCollapsed}
				shown={showSidebar}
			/>
			<div className='w-full px-10 py-4'>
				<Outlet />
			</div>
		</div>
	);
};

export default Layout;
