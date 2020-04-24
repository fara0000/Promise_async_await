const promise = new Promise(function(resolve) {
    setTimeout(() => resolve("success"), 4000);
})
    promise.then(result => console.log(result));


const promise1 = Promise.resolve();
    setTimeout(() => promise1.then(() => console.log("success")),4000);


let promise2 = Promise.reject(new Error('faild'))
promise2.then(function(value){
    console.log(value)  
},
function (error) {
    error.message = 'Oooops something went wrong';
    console.log(error);
})

const urls = [
    'https://swapi.co/api/people/1',
    'https://swapi.co/api/people/2',
    'https://swapi.co/api/people/3',
    'https://swapi.co/api/people/4'
]
let promises = urls.map(urls => fetch(urls).then(y => y.text()));
Promise.all(promises).then(result => {
    console.log(result)
}).catch(function(error){
    console.log(error,'Somethin went wrong maaaan')
})

async function getChange(){
    let response = await fetch('https://swapi.co/api/starships/9/');
    let user = await response.json().then(resolve => console.log(resolve));
    return user;
}

