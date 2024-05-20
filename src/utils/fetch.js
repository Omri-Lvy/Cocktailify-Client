const env = process.env.NODE_ENV || 'development';
const defaultServer = env === 'development' ? process.env.REACT_APP_BACKEND_ADDRESS_DEV || 'http://localhost:5000' : process.env.REACT_APP_BACKEND_ADDRESS_PROD;

export const fetcher = async (url, method = 'GET', body = null, headers = {}) => {
    try {
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                ...headers
            }
        };

        // Add the body to the request options if it's not null and the method is not GET
        if (body && method !== 'GET') {
            options.body = JSON.stringify(body);
        }

        const response = await fetch(`${defaultServer}${url}`, options);

        // Handle non-JSON responses gracefully
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return await response.json();
        } else {
            return await response.text();
        }
    } catch (e) {
        console.log('Fetch error:', e.message);
        return [];
    }
};
