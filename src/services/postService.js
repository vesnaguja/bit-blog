const url = 'https://jsonplaceholder.typicode.com';

// posts

export const getPosts = () => {
  return fetch(`${url}/posts`)
    .then(response => response.json())
    .then(posts => {
      return posts.map(post => {
        return {
          title: post.title,
          body: post.body
        }
      })
    })
}

export const getPost = (id) => {
  return fetch(`${url}/posts/${id}`)
    .then(response => response.json())
    .then(post => {
      return {
        id: post.id,
        userId: post.userId,
        title: post.title,       
        body: post.body
      }
    })
}