const githubPromise = fetch('https://api.github.com/users', {headers: {Authorization: 'token ${GIT_API}'}} )
    .then(response => response.json())
    .catch(error => console.error(error));
console.log(githubPromise)