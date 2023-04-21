import * as httpRequest from '~/utils/httpRequest';

export const search = async (query, api_key = 'b0c4bb42fab5cdf6077bdc8cbee21e61') => {
    try {
        const res = await httpRequest.get('search/movie', {
            params: {
                api_key: api_key,
                query: query,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
