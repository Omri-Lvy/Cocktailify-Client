const defaultServer = 'http://127.0.0.1:5000'

export const fetcher = async (url, method = 'GET', body = null, headers = {}) => {
    try {
        const response = await fetch(`${defaultServer}${url}`, {
            method,
            body,
            headers
        });

        if (!response.ok) {
            throw new Error('Something went wrong');
        }

        return await response.json();
    } catch (e) {
        console.log(e);
    }
}