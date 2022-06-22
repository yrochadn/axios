
const statusEl = document.getElementById('status');
const dataEl = document.getElementById('data');
const headersEl = document.getElementById('headers');
const configEl = document.getElementById('config');


//Metodo GET - Obter dados da API

const get = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts'

    axios.get(url, {params:{
        _limit:5
    }})
    .then((res)=>{
        renderOutput(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}


//Metodo POST - Enviar dados para o BackEND (Aqui é necessário criar uma cosntante data e referenciar na chamada do axios.post)

const post = () => {
    const url ='https://jsonplaceholder.typicode.com/posts';

    const data ={
        title: 'foo',
        body: 'bar',
        userId: 1
    }

    axios.post(url, data)
    .then((res)=> {
        renderOutput(res)
    })
    .catch((err)=> {
        console.log(err)
    })
}

//Metodo PUT - Colcoar informações no backend, aqui é encessário passar o ID do post na url, criar uma constante data e referenciar na chamada do axios.put ( substitui todos os campos)

const put = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1'

    data={
        id: 1,
        title: 'LaraVue',
        body: 'bar',
        userId: 1,
    }

    axios.put(url, data)
    .then((res)=> {
        renderOutput(res)
    })
    .catch((err)=> {
        console.log(err)
    })
}

//Metodo PATCH - Colocar informações no backend, aqui é necessário passar o ID do post na url, criar uma constante data e referenciar na chamada do axios.put ( substitui apenas alguns campos)

const patch = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1'

    data = {
        id: 1,
        title: 'LaraVue',
    }

    axios.patch(url, data)
    .then((res)=>{
        renderOutput(res)
    })
    .catch((err)=>{
        console.log(err)
    })
}

//Metodo DELETE - Deleta as informações no backend, aqui é nencessário passar o ID do post na url.

const del = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/2'


    axios.delete(url )
    .then((res)=>{
        renderOutput(res)
    })

    .catch((err)=>{
        console.log(err)
    })
}

const multiple = () => {
    console.log('multiple');
}

const transform = () => {
    console.log('transform');
}

const errorHandling = () => {
    console.log('errorHandling');
}

const cancel = () => {
    console.log('cancel');
}

const clear = () => {
    statusEl.innerHTML = '';
    statusEl.className = '';
    dataEl.innerHTML = '';
    headersEl.innerHTML = '';
    configEl.innerHTML = '';
}

const renderOutput = (response) => {
    // Status
    const status = response.status;
    statusEl.removeAttribute('class');
    let statusElClass = 'inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium';
    if (status >= 500) {
        statusElClass += ' bg-red-100 text-red-800';
    } else if (status >= 400) {
        statusElClass += ' bg-yellow-100 text-yellow-800';
    } else if (status >= 200) {
        statusElClass += ' bg-green-100 text-green-800';
    }

    statusEl.innerHTML = status;
    statusEl.className = statusElClass;

    // Data
    dataEl.innerHTML = JSON.stringify(response.data, null, 2);
    Prism.highlightElement(dataEl);

    // Headers
    headersEl.innerHTML = JSON.stringify(response.headers, null, 2);
    Prism.highlightElement(headersEl);

    // Config
    configEl.innerHTML = JSON.stringify(response.config, null, 2);
    Prism.highlightElement(configEl);
}

document.getElementById('get').addEventListener('click', get);
document.getElementById('post').addEventListener('click', post);
document.getElementById('put').addEventListener('click', put);
document.getElementById('patch').addEventListener('click', patch);
document.getElementById('delete').addEventListener('click', del);
document.getElementById('multiple').addEventListener('click', multiple);
document.getElementById('transform').addEventListener('click', transform);
document.getElementById('cancel').addEventListener('click', cancel);
document.getElementById('error').addEventListener('click', errorHandling);
document.getElementById('clear').addEventListener('click', clear);
