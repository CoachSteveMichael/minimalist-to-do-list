import React from "react";

function Card(props) {
  const { name, complete, checked, id, key, markDone, removeOne } = props;
  const styles = {
    textDecorationLine: "line-through"
  };
  return (
    <div className="card">
      <input
        type="checkbox"
        name={name}
        id={id}
        onChange={() => markDone(id)}
      />
      <label htmlFor={name}>
        {checked ? <span style={styles}>{name}</span> : name}
      </label>
      <button onClick={() => removeOne(id)}>remove</button>
    </div>
  );
}

// name = {element.name}
// complete = {element.complete}
// checked = {element.complete}
// id = {index}
// key = {index}
// markDone = {markDone}
// removeOne = {removeOne}
export { Card };
