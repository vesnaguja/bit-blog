const url = 'https://jsonplaceholder.typicode.com';

export const getPhoto = (userId) => {
  return fetch(`${url}/photos/${userId}`)
    .then(response => response.json())
    .then(photoData => photoData.thumbnailUrl)
};

