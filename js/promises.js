const baseURL = 'https://api.github.com';

function getUserLastPushEvent(username) {
    return fetch(baseURL + '/users/' + username + '/events/public', {headers: {'Authorization': 'token ${GIT_API}'}})
        .then(res => res.json())
        .then(events => {
            for (let event of events) {
                if (event.type === 'PushEvent') {

                }
            }
        });
}

getUserLastPushEvent('topfunky').then(lastEventDate => console.log(lastEventDate));