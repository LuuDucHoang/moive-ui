import * as httpRequest from '~/utils/httpRequest';

export const movielist = async (page = 1, type = 'movie', api_key = 'b0c4bb42fab5cdf6077bdc8cbee21e61') => {
    try {
        const res = await httpRequest.get(`${type}/popular`, {
            params: {
                api_key: api_key,
                page: page,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
