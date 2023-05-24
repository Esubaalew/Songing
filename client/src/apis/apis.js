import songs from './songs';

const api = {
    fetchSongs: () => songs.get('/songs'),
    fetchSong: (id) => songs.get(`/songs/${id}`),
    createSong: (data) => songs.post('/songs', data),
    editSong: (id, data) => songs.patch(`/songs/${id}`, data),
    deleteSong: (id) => songs.delete(`/songs/${id}`)
};

export default api;
