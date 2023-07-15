import { useState } from "react";

export default function Form({ addColor }) {
  const [color, setColor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addColor(color);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h4 htmlFor="color">color generator</h4>
      <div className="group">
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="preview"
        />
        <input
          onChange={(e) => setColor(e.target.value)}
          value={color}
          placeholder="#000000"
          type="text"
          id="text"
          name="text"
        />
        <button style={{ background: color }} className="btn">
          submit
        </button>
      </div>
    </form>
  );
}
