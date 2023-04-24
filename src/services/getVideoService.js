import * as httpRequest from '~/utils/httpRequest';

export const getVideo = async (movie_id, type, api_key = 'b0c4bb42fab5cdf6077bdc8cbee21e61') => {
    {
        console.log(type);
    }
    try {
        const res = await httpRequest.get(`/${type}/${movie_id}/videos`, {
            params: {
                api_key: api_key,
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};
