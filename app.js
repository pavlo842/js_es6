// AJAX

// Получение элемента кнопки и запись ее в пееременную => строка 30
const btn = document.querySelector('button');

const container = document.querySelector('.container');

function getPosts(cb) {
    // XMLHttpRequest - функция для создания запроса/ответа на BE
    const xhr = new XMLHttpRequest(); // создали экземпляр XMLHttpRequest()

    // открываем запрос
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');

    // подписываемся на получение данных с сервера
    xhr.addEventListener('load', () => {
        // console.log('request loaded', xhr.responseText); // xhr.responseText - ответ с сервера
        const response = JSON.parse(xhr.responseText); // запись ответа с сервера в переменную в JSON формате
        // console.log(response);
        cb(response); // callback функция в которую передается ответ
    });

    // обработка ошибок
    xhr.addEventListener('error', () => {
        console.log('error');
    });

    // отправляем запрос
    xhr.send();
}

// Вешаем событие на кнопку

// ====================================================================
// Вариант без отдельной функции


// btn.addEventListener('click', (e) => {
//     // получение ответа вне функции getPosts
//     getPosts(response => {
//         const fragment = document.createDocumentFragment();
//         console.log(response);
//         response.forEach(post => {
//             const card = document.createElement('div');
//             card.classList.add('card');
//             const cardBody = document.createElement('div');
//             cardBody.classList.add('card-body');
//             const title = document.createElement('h5');
//             title.classList.add('card-title');
//             title.textContent = post.title;
//             const article = document.createElement('p');
//             article.classList.add('card-text');
//             article.textContent = post.body;
//             cardBody.appendChild(title);
//             cardBody.appendChild(article);
//             card.appendChild(cardBody);
//             fragment.appendChild(card);
//         });
//         container.appendChild(fragment);
//     });
// });

// =====================================================================
// Вариант с отдельной функцией

function renderPosts(response) {
    const fragment = document.createDocumentFragment();
    console.log(response);
    response.forEach(post => {
        const card = document.createElement('div');
        card.classList.add('card');
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        const title = document.createElement('h5');
        title.classList.add('card-title');
        title.textContent = post.title;
        const article = document.createElement('p');
        article.classList.add('card-text');
        article.textContent = post.body;
        cardBody.appendChild(title);
        cardBody.appendChild(article);
        card.appendChild(cardBody);
        fragment.appendChild(card);
    });
    container.appendChild(fragment);
}


btn.addEventListener('click', (e) => {
    // получение ответа вне функции getPosts
    getPosts(renderPosts);
});
