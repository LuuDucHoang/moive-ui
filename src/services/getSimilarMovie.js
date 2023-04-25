import * as httpRequest from '~/utils/httpRequest';

export const similarMovie = async (movie_id, type = 'movie', api_key = 'b0c4bb42fab5cdf6077bdc8cbee21e61') => {
    try {
        const res = await httpRequest.get(`${type}/${movie_id}/similar`, {
            params: {
                api_key: api_key,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
