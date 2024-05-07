const defaultServer = process.env.NODE_ENV === 'development' ? process.env.REACT_APP_BACKEND_ADDRESS_DEV : process.env.REACT_APP_BACKEND_ADDRESS_PROD
export const fetcher = async (url, method = 'GET', body = null, headers = {}) => {
    console.log(`${defaultServer}/${url}`)
    try {
        const response = await fetch(`${defaultServer}${url}`, {
            method,
            body,
            headers
        });

        if (!response.ok) {
            return []
        }

        return await response.json();
    } catch (e) {
        console.log(e);
    }
}