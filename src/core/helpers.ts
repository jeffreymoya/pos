export const querystr = (obj: { [key: string]: any }) => {
	const params = []
	for (const prop in obj) {
		if (obj.hasOwnProperty(prop)) {
			params.push(`${encodeURIComponent(prop)}=${encodeURIComponent(obj[prop])}`)
		}
	}
	return params.join('&')
}

type FetchReturnType<T> = { data?: T; error?: any; isLoading: boolean }

export function promisify<T>({ data, error, isLoading }: FetchReturnType<T>): Promise<T | undefined> {
	return new Promise((resolve, reject) => {
		if (!isLoading) {
			if (error) {
				reject(error)
			} else {
				resolve(data)
			}
		}
	})
}
