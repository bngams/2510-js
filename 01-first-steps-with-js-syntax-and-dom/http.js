function loadTodosWithXMLHttpRequest() {
    const req = new XMLHttpRequest();
    req.open('GET', 'https://dummyjson.com/todos', false);
    // Request configuration
    // req.responseType = 'text'; // json is default
    // req.setRequestHeader('Content-Type', 'application/json');
    // ...
    // req.addEventListener('load', function() { .. });
    req.onload = function() {
        if (req.status >= 200 && req.status < 300) {
            console.log('Response received');
            const todos = JSON.parse(req.responseText);
            console.log(todos);
        } else {
            console.error('Error loading todos:', req.statusText);
        }
    };
    req.onerror = function() {
        console.error('Network error');
    };
    req.send();
    console.log('Request sent', req);
    //.. other code
    setTimeout(() => {
        console.log('Request object after 5 seconds', req);
    }, 5000);
}

loadTodosWithXMLHttpRequest();


function promiseSample() {
    const myAction = (resolve, reject) => {
    console.log('start async treatment');
    setTimeout(() => {
            console.log('done');
            if(true) {
            resolve("My result");
            } else {
            reject("Some error")
            }
    }, 10000);
    console.log('treatment started');  
    };

    // THEN / CATCH => En mode Asynchrone
    const myPromise = new Promise(myAction);

    myPromise
        .then(r => console.log("then result", r))
        .catch(e => console.log(e));

    // le traitement continue apres avoir déifnit les then / catch
    console.log("after then definition"); 

    // AWAIT => En mode synchrone
    const result = await (new Promise(myAction));
    // le traitement s'arrete jusqu'a la fin de l'objet Promise
    console.log("after await definition");
}

promiseSample();

function loadTodosWithFetch() {
    fetch('https://dummyjson.com/todos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(todos => {
            console.log('Todos loaded successfully:', todos);
        })
        .catch(error => {
            console.error('Error loading todos:', error);
        });
}

async function loadTodosWithFetchAndAwait() {
    try {
        const response = await fetch('https://dummyjson.com/todos');
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const todos = await response.json();
        console.log('Todos loaded successfully:', todos);
    } catch (error) {
        console.error('Error loading todos:', error);
    }
}