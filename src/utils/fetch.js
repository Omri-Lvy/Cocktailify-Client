export const fetcher = async (url, method = 'GET', body = null, headers = {}) => {
    const defaultServer = process.env.REACT_APP_BACKEND_ADDRESS_PROD
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