import { foo } from './foo.js';
import '../styles/app.scss';

const CURRENT_VERSION = '{{version}}';
const myPhoto = document.querySelector('my-photo');
const myName = document.querySelector('my-name');

async function go () {
    const cache = await caches.open(CURRENT_VERSION);
    await cache.addAll(['src/static/images/thumbnail.png']);
}

function init () {
    const name = addName(foo());
    myName.appendChild(name);
    caches.open(CURRENT_VERSION).then(function(cache) {
        return cache.match('src/static/images/thumbnail.png').then(function(response) {
            if (response) {
                const photo = addImg(response.url, 'Image 1');
                myPhoto.appendChild(photo);
            }
        }).catch(function(error) {
            console.error('Error in fetch handler:', error);
            throw error;
        });
    })
}

function addName(value) {
     const name = document.createElement('div');
     name.innerText = value;
     return name;
}

function addImg (url, title) {
    const img = document.createElement('img');
    img.src = url;
    img.title = title;
    return img;
}

go().then(() => {
    init();
});
