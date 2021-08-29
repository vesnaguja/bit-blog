const url = 'https://jsonplaceholder.typicode.com';

// posts

export const getPosts = () => {
  return fetch(`${url}/posts`)
    .then(response => response.json())
    .then(posts => {
      // return posts.slice(0, 4) // ovo vraca prva 4 posta koja vrati api
      return posts.sort(() => 0.5 - Math.random()).slice(0, 4); // ovo vraca random 4 posta od svih koje vrati api
    })
}

export const getPost = (id) => {
  return fetch(`${url}/posts/${id}`)
    .then(response => response.json())

}