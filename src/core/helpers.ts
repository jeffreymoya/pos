export const querystr = (obj: { [key: string]: any }) => {
	const params = []
	for (const prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			params.push(`${encodeURIComponent(prop)}=${encodeURIComponent(obj[prop])}`)
		}
	}
	return params.join('&')
}
