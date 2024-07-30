export function load({ cookies, params }) {
	const locale = params.locale
	const locales = ['en', "de","es","ru","fr","pt","it","nl"];
	if (!locales.includes(locale)) {
		return
	}

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
