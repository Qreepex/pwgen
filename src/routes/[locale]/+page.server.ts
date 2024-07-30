export function load({ cookies }) {
	const settings = cookies.get('settings'); // is base 64 encoded
	console.log(settings);

	if (settings) {
		return {
			settings: JSON.parse(atob(settings))
		};
	} else {
		return {};
	}
}
