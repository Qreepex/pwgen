import { redirect, type Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname !== '/') return await resolve(event);

	if(event.url.pathname.includes("robots")) return await resolve(event);

	const locale = event.request.headers.get('accept-language')?.split(',')[0].split('-')[0] || 'en';

	throw redirect(302, `/${locale}`);
};
