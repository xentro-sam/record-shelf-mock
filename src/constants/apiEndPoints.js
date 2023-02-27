export const BACKEND_URL = 'http://localhost:8080';

export const GET_SONGS_DATA = {
  url: '/api/records',
  method: 'get',
};

export const GET_SONG_LIKES = (songId) => ({
  url: `/api/records/${songId}/likes`,
  method: 'get',
});

export const UPDATE_SONG_LIKES = (songId) => ({
  url: `/api/records/${songId}/likes`,
  method: 'patch',
});
