import { useState } from "react";
import { Card } from "./Card";
import { Form } from "./Form";

function ListContainer(props) {
  //task state

  const [tasks, setTasks] = useState([]);

  const [completeTasks, setCompleteTasks] = useState([]);
  //add new

  function addNew(text) {
    let copy = [
      ...tasks,
      { name: text, complete: false, checked: false, id: tasks.length }
    ];
    setTasks(copy);
  }
  //mark done

  function completeArray() {
    const mapped = tasks.filter((ele) => ele.complete);

    return mapped.length;
  }

  function markDone(index) {
    let copy = [...tasks];
    copy[index].complete = !copy[index].complete;
    copy[index].checked = !copy[index].complete;

    setTasks(copy);
  }
  //remove one

  function removeOne(index) {
    let copy = [...tasks];
    copy.splice(index, 1);
    setTasks(copy);
  }
  //remove all

  function removeAll() {
    let copy = tasks.filter((element) => !element.complete);
    setTasks(copy);
  }

  let cardElements = tasks.map((element, index) => (
    <Card
      name={element.name}
      complete={element.complete}
      checked={element.complete}
      id={index}
      key={index}
      markDone={markDone}
      removeOne={removeOne}
    />
  ));
  return (
    <div className="container">
      <h1>To-Do List</h1>
      <Form addNew={addNew} />
      {cardElements}
      <button onClick={removeAll}>clear complete</button>
      <h2>Completed: {completeArray()}</h2>
    </div>
  );
}

export { ListContainer };
