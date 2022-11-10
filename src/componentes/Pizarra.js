import React, { useRef } from "react"
import CanvasDraw from "react-canvas-draw"

const Pizarra = () => {
    const canvasDrawing = useRef(null)

    const handleSave = () =>{
      const data = canvasDrawing.current.getSaveData()
      console.log(data)
    }

    const canvasClear = () =>{
      canvasDrawing.current.clear()
    }

    const canvasUndo = () =>{
      canvasDrawing.current.undo()
    }

    return (
      <div className=" container " >
        <CanvasDraw
        className="elementCanvas"
        brushRadius = {2}
        canvasWidth= {1200}
        canvasHeight={ 500}
        ref={canvasDrawing}
        />

        <button
          onClick={handleSave}
        >Save</button>

        <button
          onClick={canvasClear}
        >Clear</button>

        <button
          onClick={canvasUndo}
        >Undo</button>

      </div>
  
    )
  }
  
  export default Pizarra 