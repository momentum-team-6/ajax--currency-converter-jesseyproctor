const getPosts = () => {
    return fetch(`https://exchangeratesapi.io/`)
        .then(res => res.json())
        .then(posts => console.log(posts))
}