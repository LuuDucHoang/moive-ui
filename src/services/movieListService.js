import * as httpRequest from '~/utils/httpRequest';

export const movielist = async (page, api_key = 'b0c4bb42fab5cdf6077bdc8cbee21e61', language = 'en-US') => {
    try {
        const res = await httpRequest.get('movie/popular', {
            params: {
                api_key: api_key,
                language,
                page: page,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
