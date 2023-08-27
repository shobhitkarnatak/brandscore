/** @format */

import { json } from '@remix-run/node';
import type { MetaFunction } from '@remix-run/node';
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	useTransition,
	ScrollRestoration,
	useLoaderData,
} from '@remix-run/react';
import toastStyles from 'react-toastify/dist/ReactToastify.css';
import styles from './styles/app.css';
// import Nprogress from 'nprogress';
import nprogressStyles from 'nprogress/nprogress.css';
import { useEffect } from 'react';

export async function loader() {
	return json({
		ENV: {
			BROWSER_ENV: process.env.ENV,
		},
	});
}

export function links() {
	return [
		{
			rel: 'stylesheet preload prefetch',
			href: styles,
			as: 'style',
			type: 'text/css',
		},
		{
			rel: 'stylesheet preload prefetch',
			href: toastStyles,
			as: 'style',
			type: 'text/css',
		},
		{
			rel: 'stylesheet preload prefetch',
			href: nprogressStyles,
			as: 'style',
			type: 'text/css',
		},
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Nunito&family=Nunito+Sans:opsz@6..12&display=swap',
		},
		{
			rel: 'icon',
			type: 'image/svg+xml',
			sizes: '16x16',
			href: 'http://brandscore.in/assets/images/Incight_favicon.png',
		},
	];
}

export const meta: MetaFunction = () => ({
	charset: 'utf-8',
	title: 'Brandscore',
	viewport: 'width=device-width,initial-scale=1',
});

export default function App() {
	const transition = useTransition();
	const data = useLoaderData<typeof loader>();
	useEffect(() => {
		if (transition.state === 'loading' || transition.state === 'submitting') {
			// Nprogress.start();
		} else {
			// Nprogress.done();
		}
	}, [transition.state]);

	return (
		<html lang='en'>
			<head>
				<Meta />
				<Links />
			</head>
			<body className='mx-auto max-w-screen-2xl font-Nunito'>
				<Outlet />
				<ScrollRestoration />
				<script
					dangerouslySetInnerHTML={{
						__html: `window.ENV=${JSON.stringify(data.ENV)}`,
					}}
				/>
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
