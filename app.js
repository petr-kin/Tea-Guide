const teas = [
    { name: 'Green Tea', time: '2-3 minutes', temp: '80°C', method: 'gaiwan', tips: 'Don’t use boiling water!' },
    { name: 'Black Tea', time: '3-5 minutes', temp: '100°C', method: 'teapot', tips: 'Boiling water is perfect.' },
    { name: 'Oolong Tea', time: '3-5 minutes', temp: '85-90°C', method: 'gaiwan', tips: 'Allow the leaves to unfurl properly.' },
    { name: 'White Tea', time: '4-5 minutes', temp: '75-85°C', method: 'gaiwan', tips: 'Delicate tea, avoid boiling water.' },
    { name: 'Herbal Tea', time: '5-7 minutes', temp: '100°C', method: 'teapot', tips: 'Longer steeping time for stronger flavor.' },
    { name: 'Pu-erh Tea', time: '3-4 minutes', temp: '95°C', method: 'gaiwan', tips: 'Rinse the leaves before steeping.' },
    { name: 'Chai Tea', time: '5-7 minutes', temp: '95°C', method: 'teapot', tips: 'Best served with milk and spices.' },
    { name: 'Matcha', time: 'Whisk for 1-2 minutes', temp: '75-80°C', method: 'bowl', tips: 'Whisk until frothy.' },
    { name: 'Jasmine Tea', time: '2-4 minutes', temp: '80-85°C', method: 'gaiwan', tips: 'Scented with jasmine blossoms.' },
    { name: 'Chamomile Tea', time: '5-6 minutes', temp: '95°C', method: 'teapot', tips: 'Great for relaxation.' },
    { name: 'Rooibos Tea', time: '5-6 minutes', temp: '100°C', method: 'teapot', tips: 'Naturally caffeine-free.' },
    { name: 'Peppermint Tea', time: '5-7 minutes', temp: '100°C', method: 'teapot', tips: 'Soothing and refreshing.' },
    { name: 'Lemongrass Tea', time: '5-7 minutes', temp: '100°C', method: 'teapot', tips: 'Best with a hint of honey.' },
    { name: 'Earl Grey', time: '4-5 minutes', temp: '95°C', method: 'teapot', tips: 'Flavored with bergamot oil.' },
    { name: 'Hibiscus Tea', time: '5-7 minutes', temp: '100°C', method: 'teapot', tips: 'Tart and refreshing, perfect iced.' },
    { name: 'Yerba Mate', time: '3-4 minutes', temp: '70-80°C', method: 'gourd', tips: 'Traditional South American drink.' },
    { name: 'Genmaicha', time: '2-3 minutes', temp: '80°C', method: 'gaiwan', tips: 'Toasty rice adds a unique flavor.' },
    { name: 'Lapsang Souchong', time: '3-5 minutes', temp: '95°C', method: 'teapot', tips: 'Smoky flavor, great for bold tea lovers.' },
    { name: 'Darjeeling', time: '3-4 minutes', temp: '85-90°C', method: 'teapot', tips: 'Known as the “Champagne of teas.”' },
    { name: 'Assam Tea', time: '3-5 minutes', temp: '95-100°C', method: 'teapot', tips: 'Strong and malty, perfect for breakfast.' },
    { name: 'Sencha', time: '1-2 minutes', temp: '70-80°C', method: 'gaiwan', tips: 'The most popular green tea in Japan.' },
    { name: 'Gunpowder Green Tea', time: '2-3 minutes', temp: '75-80°C', method: 'gaiwan', tips: 'Leaves are rolled into small pellets.' },
    { name: 'Ceylon Tea', time: '3-5 minutes', temp: '95°C', method: 'teapot', tips: 'Bright and bold, perfect with lemon.' },
    { name: 'Chrysanthemum Tea', time: '5-6 minutes', temp: '100°C', method: 'teapot', tips: 'Floral and fragrant, common in Asia.' },
    { name: 'Ginger Tea', time: '5-6 minutes', temp: '95-100°C', method: 'teapot', tips: 'Spicy and warming, great for colds.' },
    { name: 'Sage Tea', time: '5-7 minutes', temp: '100°C', method: 'teapot', tips: 'Herbal tea with a savory flavor.' },
    { name: 'Barley Tea', time: '5-10 minutes', temp: '100°C', method: 'teapot', tips: 'Popular in Korea and Japan, best served cold.' },
    { name: 'Rosehip Tea', time: '5-7 minutes', temp: '100°C', method: 'teapot', tips: 'High in vitamin C, tangy and tart.' },
    { name: 'Mint Tea', time: '5-7 minutes', temp: '100°C', method: 'teapot', tips: 'Naturally refreshing and soothing.' },
    { name: 'Butterfly Pea Flower Tea', time: '4-5 minutes', temp: '95-100°C', method: 'teapot', tips: 'Turns blue and purple with lemon.' },
    { name: 'Lavender Tea', time: '5-7 minutes', temp: '95°C', method: 'teapot', tips: 'Calming and floral, great for stress relief.' }
];

// Function to display the list of teas
const teaList = document.getElementById('tea-list');
const searchInput = document.getElementById('search');

function displayTeas(teaArray) {
    teaList.innerHTML = '';
    teaArray.forEach(tea => {
        const teaItem = document.createElement('div');
        teaItem.classList.add('tea-item');
        teaItem.innerHTML = `
            <h2>${tea.name}</h2>
            <p>Steeping Time: ${tea.time}</p>
            <p>Temperature: ${tea.temp}</p>
            <p>Brewing Method: ${tea.method.charAt(0).toUpperCase() + tea.method.slice(1)}</p>
            <p><strong>Tips:</strong> ${tea.tips}</p>
        `;
        teaList.appendChild(teaItem);
    });
}

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredTeas = teas.filter(tea => tea.name.toLowerCase().includes(searchTerm));
    displayTeas(filteredTeas);
});

// Initial display of all teas
displayTeas(teas);