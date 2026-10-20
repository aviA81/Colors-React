import { useState } from 'react'
import './App.css'
import ColorGrid from './ColorGrid'

const views = {
  'Blue': {
        x: {
            'start': 0,
            'end': 255,
            'label': 'Green'
        },
        y: {
            'start': 255,
            'end': 0,
            'label': 'Red'
        },
        z: {
            'value': 0,
            'label': 'Blue'
        },
    },
    'Green': {
        x: {
            'start': 0,
            'end': 255,
            'label': 'Blue'
        },
        y: {
            'start': 255,
            'end': 0,
            'label': 'Red'
        },
        z: {
            'value': 0,
            'label': 'Green'
        }
    },
    'Red': {
        x: {
            'start': 0,
            'end': 255,
            'label': 'Blue'
        },
        y: {
            'start': 255,
            'end': 0,
            'label': 'Green'
        },
        z: {
            'value': 0,
            'label': 'Red'
        }
    }
}

function App() {
  const [view, setView] = useState(views['Blue']);

  return (
    <>
    <div id="app">
        <div id="graph-display">

            <div id="graph-height">
                <span>{view.y.start}</span>
                <span id="graph-height-label">{view.y.label}</span>
                <span>{view.y.end}</span>
            </div>

            <div id="colors-container">
                <ColorGrid 
                  view={view} />
            </div>
            
            <div></div>

            <div id="graph-width">
                <span>{view.x.start}</span>
                <span id="graph-width-label">{view.x.label}</span>
                <span>{view.x.end}</span>
            </div>

        </div>
        {/* <div id="slider-container">
            <input type="range" id="color-slider" min="0" max="255" value={depth} 
                onChange={(e) => setDepth(Number(e.target.value))} />
            <label htmlFor="color-slider">Blue Value</label>
        </div> */}

        <div id="graph-depth">
            <span id="graph-depth-label">{view.z.label} depth</span>
            <select id="graph-depth-select" value={view.z.value} 
                onChange={(e) => setView(prevView => ({ ...prevView, z: { ...prevView.z, value: e.target.value } }))}>
                <option value="0">0</option>
                <option value="128">128</option>
                <option value="255">255</option>
            </select>
        </div>

        <div id="angle-select">
            <label htmlFor="graph-angle-select">Angle</label> 
            <select id="graph-angle-select" value={view.z.label} 
                onChange={(e) => {
                    setView(views[e.target.value]);
                }}>
                <option value="Blue">Blue</option>
                <option value="Green">Green</option>
                <option value="Red">Red</option>
            </select>
        </div>
    </div>
    </>
  )
}

export default App
