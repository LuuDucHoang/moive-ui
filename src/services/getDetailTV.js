import * as httpRequest from '~/utils/httpRequest';

export const detailItem = async (movie_id, api_key = 'b0c4bb42fab5cdf6077bdc8cbee21e61') => {
    try {
        const res = await httpRequest.get(`tv/${movie_id}`, {
            params: {
                api_key: api_key,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
