import * as request from '~/utils/httpRequets';

export const search = async (q, type = 'less') => {
    try {
        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounced)}&type=less`)
        //     .then(res => res.json())
        const res = await request.get('users/search', {
            params: {
                q: q,
                type,
            },
        });
        return res.data;
    } catch {
        console.log(Error);
    }
};
