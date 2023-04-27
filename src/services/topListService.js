import * as httpRequest from '~/utils/httpRequest';

export const list = async (type = 'movie', page, api_key = 'b0c4bb42fab5cdf6077bdc8cbee21e61') => {
    try {
        const res = await httpRequest.get(`${type}/top_rated`, {
            params: {
                api_key: api_key,
                page,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
