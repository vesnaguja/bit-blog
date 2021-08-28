const url = 'https://jsonplaceholder.typicode.com';

// posts

export const getPosts = () => {
  return fetch(`${url}/posts`)
    .then(response => response.json())
    .then(posts => posts.slice(0, 4))
}

export const getPost = (id) => {
  return fetch(`${url}/posts/${id}`)
    .then(response => response.json())
    
}