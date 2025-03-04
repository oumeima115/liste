function randomandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const listItems = document.querySelectorAll('#colorList li');

listItems.forEach(item => {
    item.addEventListener('click', function() {
        this.style.color = randomColor();
    });
});