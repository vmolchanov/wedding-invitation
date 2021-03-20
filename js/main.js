(() => {
    const MAX_LENGTH_FOR_LARGE_FONT = 24;
    
    const urlParams = new URLSearchParams(location.search);
    const backHeader = document.querySelector('.back-header');
    const name = backHeader.querySelector('#name');
    const sex = backHeader.querySelector('#sex');
    const nameValue = urlParams.get('name');
    const sexValue = urlParams.get('sex');

    if (nameValue) {
        if (nameValue.length > MAX_LENGTH_FOR_LARGE_FONT) {
            backHeader.style.fontSize = '28px';
            backHeader.style.lineHeight = '48px'; 
        }
        name.textContent = nameValue;
    }

    if (sexValue) {
        switch (sexValue.toLowerCase()) {
            case 'male':
                sex.textContent = 'Дорогой';
                break;
            case 'female':
                sex.textContent = 'Дорогая';
                break;
            case 'both':
                sex.textContent = 'Дорогие';
                break;
        }
    }

    $("#card").flip();
})();