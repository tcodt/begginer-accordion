import { useState } from "react";
import data from "./data";
import "./Accordion.css";

export default function Accordion() {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (getCurrentId) => {
    console.log(getCurrentId);
    setSelected(getCurrentId);
  };

  return (
    <div className="wrapper">
      <button>Enable Multi Selection</button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                className="title"
                onClick={() => handleSingleSelection(dataItem.id)}
              >
                <h3>{dataItem.title}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ? (
                <div className="content">{dataItem.content}</div>
              ) : null}
            </div>
          ))
        ) : (
          <div>Data not found !</div>
        )}
      </div>
    </div>
  );
}
