import data from './data.js';

function showAllDogs(dogsList){
    const root = document.getElementById('root');
    const container = document.createElement('div');
    container.className = 'container';

    dogsList.forEach(function(dog){

        const card = document.createElement('div');
        card.className = 'card';
        const content = document.createElement('div');
        content.className = 'content';

        const breed = document.createElement('h1');
        breed.className = 'breed';
        breed.innerText = dog.breed
        content.appendChild(breed);

        const img = document.createElement('img');
        img.className = 'img';
        content.appendChild(img);
        img.src = dog.image;

        card.append(content);
        container.append(card)
        root.append(container);
    });
}

showAllDogs(data.dogs);

