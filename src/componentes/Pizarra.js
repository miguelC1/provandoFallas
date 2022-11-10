import { useState } from "react";

const Pizarra = () => {
    const [canvas,setCanvas]=useState(null)
    
    function handleMouseDown(e) {
        setCanvas
        const mainCanvas = document.getElementById("pizarra");
        m = oMousePos(mainCanvas, e);
        x = m.x;
        y = m.y;
        dibujando = true;
    }
    function handleMouseMove(e) {
        if (dibujando === true) {
          const mainCanvas = document.getElementById("pizarra");
          m = oMousePos(mainCanvas, e);
          dibujar(x, y, m.x, m.y);
          x = m.x;
          y = m.y;
        }
    }
    function handleMouseUp(e) {
        if (dibujando === true) {
          const mainCanvas = document.getElementById("pizarra");
          m = oMousePos(mainCanvas, e);
          dibujar(x, y, m.x, m.y);
          x = 0;
          y = 0;
          dibujando = false;
        }
      }

    return (
   <div className="w3-container">
        <div className="w3-col s12">
            <canvas 
            className="w3-card-4 w3-border"
            id="pizarra"
            width="1350"
            height="600"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            ></canvas>
        </div>
   </div>
  
    )
  }
  
  export default Pizarra 