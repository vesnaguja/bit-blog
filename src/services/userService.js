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
      return userPosts.slice(0, 3).map(post => {
        return {
          id: userPosts.id,
          title: userPosts.title
        }
      });
    });
};
