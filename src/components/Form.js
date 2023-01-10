import { useState } from "react";

function Form(props) {
  const [formData, setFormData] = useState("");

  function handleChange(e) {
    setFormData(e.target.value);
  }

  function submit(e) {
    e.preventDefault();
    if (!formData) return;
    props.addNew(formData);
    setFormData("");
  }
  //state for input
  //change handler for input
  //text input
  //import addnew
  //sumbit button
  //submit updates task state

  return (
    <form>
      <input
        type="text"
        name="formData"
        value={formData}
        onChange={handleChange}
        placeholder="add task"
      />
      <button onClick={submit}>add</button>
    </form>
  );
}

export { Form };
