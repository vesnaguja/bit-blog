const url = 'https://jsonplaceholder.typicode.com';


export const getAuthorName = (userId) => {
  return fetch(`${url}/users/${userId}`)
    .then(response => response.json())
    .then(userData => userData.name);
};

export const getMorePosts = (userId) => {
  return fetch(`${url}/users/${userId}/posts`)
    .then(response => response.json())
    .then(userPosts => {
      return userPosts.sort(() => 0.5 - Math.random()).slice(0, 3);
    });
};

export const getAuthors = () => {
  return fetch(`${url}/users`)
    .then(response => response.json())
    .then(authors => {
      return authors.sort(() => 0.5 - Math.random()).slice(0, 6);
    })
}

export const getAuthor = (userId) => {
  return fetch(`${url}/users/${userId}`)
    .then(response => response.json())
    .then(userData => userData);
};

