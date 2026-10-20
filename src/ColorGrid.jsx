import { useRef, useEffect, useState } from "react";


function generateColor(x, y, z, option) {
    switch (option) {
        case 'Blue':
            return `rgb(${y}, ${x}, ${z})`;
        case 'Green':
            return `rgb(${y}, ${z}, ${x})`;
        case 'Red':
            return `rgb(${z}, ${x}, ${y})`;
        default:
            return `rgb(${y}, ${x}, ${z})`;
    }
}

const ColorGrid = ({ view }) => {

    const [grid, setGrid] = useState([]);
    const [loading, setLoading] = useState(true);

    const createGrid = () => {
        const newGrid = [];
        for (let y = 255; y >= 0; y--) {
            const row = [];
            console.log(`${y} ${view.z.label}`);
            for (let x = 0; x <= 255; x++) {
                const color = generateColor(x, y, view.z.value, view.z.label);
                const cell = (<div 
                                className="color-cell" 
                                style={{ backgroundColor: color }}
                                key={`${color} ${view.z.label}`}
                                >
                            </div>)
                row.push(cell);
            }
            newGrid.push(row);
        }
        setGrid(newGrid);
        setLoading(false);
    };
    useEffect(() => {
        createGrid();
    }, [view.z.value, view.z.label]);
    return (
        <>
        {loading && <div>Loading... {loading}</div>}

        {
            grid.map((row, yAxis) => (
                <div className="row" key={yAxis}>
                    {row}
                </div>
            ))
        }
        
        </>
    );
};

export default ColorGrid;