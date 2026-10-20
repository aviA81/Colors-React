const colorsContainer = document.getElementById('colors-container');

function colorDepth() {
    let depth = 0;


    return {
        getDepth: () => depth,
        setDepth: (newDepth) => {
            depth = newDepth;
        }
    };
}

const depth = colorDepth();

for (let i = 255; i >= 0; i--) {
    const row = document.createElement('div');
    row.className = 'row';
    colorsContainer.appendChild(row);
    for (let j = 0; j <= 255; j++) {
        const cell = document.createElement('div');
        cell.className = 'color-cell';
        cell.style.backgroundColor = `rgb(${i}, ${j}, ${depth.getDepth()})`;
        row.appendChild(cell);
    }
}


const colorSlider = document.getElementById('color-slider');

colorSlider.addEventListener('input', () => {
    depth.setDepth(Number(colorSlider.value));
    // const cells = document.querySelectorAll('.color-cell');
    // cells.forEach(cell => {
    //     const [r, g] = cell.style.backgroundColor.match(/\d+/g);
    //     depth.setDepth(Number(colorSlider.value));
    //     cell.style.backgroundColor = `rgb(${r}, ${g}, ${depth.getDepth()})`;
    //     console.log(`Updating color to rgb(${r}, ${g}, ${depth.getDepth()})`);
    // });
});