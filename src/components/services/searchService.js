import * as httpRequest from '~/utils/httpRequest';

export const search = async (q) => {
    try {
        const res = await httpRequest.get('auto-complete', {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/',
            params: {
                q: q,
            },
            headers: {
                'X-RapidAPI-Key': '46f5f5d3f5msh631aec3dffde13fp1ae3b3jsn67d84ecb3e73',
                'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
