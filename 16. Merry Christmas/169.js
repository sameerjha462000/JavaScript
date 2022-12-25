// Resolving and Rejecting promises with values
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            const rand = Math.random();

            if (rand < 0.3) {
                reject({status : 404});
            } else {
                resolve();
            }
        }, 3000);
    });
}


fakeRequest()
    .then(() => { 
        console.log('REQUEST WORKED!');
    })
    .catch((err) => { 
        console.log(err.status);
        console.log('REQUEST FAILED!');
    })