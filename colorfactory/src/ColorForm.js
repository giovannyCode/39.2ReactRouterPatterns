import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./ColorForm.css";

const ColorForm = ({ addColor }) => {
  const history = useHistory();
  const INITIAL_STATE = { name: "", color: "" };
  const [formData, setFormData] = useState(INITIAL_STATE);

  /** Send {name, quantity} to parent
   *    & clear form. */

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addColor(formData.name);
    setFormData(INITIAL_STATE);
    history.push("/");
  };

  /** Update local state w/curr state of input elem */

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  };

  /** render form */

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="color">Color:</label>
      <input
        type="color"
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
      />

      <button>Add a new Color!</button>
    </form>
  );
};

export default ColorForm;
