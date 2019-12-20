import React, { useState } from "react";
import axios from 'axios';
import withAuth from "../axios";

const initialColor = {
  color: "",
  code: { hex: "" }
};

const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [colorToEdit, setColorToEdit] = useState(initialColor);

  const editColor = color => {
    setEditing(true);
    setColorToEdit(color);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    // Make a put request to save your updated color
    // think about where will you get the id from...
    // where is is saved right now?
    // setEditing(true);
  
    const token = localStorage.getItem('token');

    console.log(colorToEdit);
    withAuth()
    .put(`http://localhost:5000/api/colors/${colorToEdit.id}`, colorToEdit)
      .then( response => {
      updateColors(
        [...colors.filter(color => color.id !== colorToEdit.id),response.data]);

      setEditing(false);
    })
    .catch(error => {
      console.log('There is an error ' + error);
      }, [])
    };

  const deleteColor = color => {
    // make a delete request to delete this color
    const token = localStorage.getItem('token');
      axios.delete(`http://localhost:5000/api/colors/${color.id}`, {
      headers: {
        Authorization: token,
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log("There is an error  " + error);

      // REDIRECT
    })
  };

  return (
    <div className="colors-wrap">
    <p>colors</p>
    <ul>
      {colors.map(color => (
        <li key={color.color} onClick={() => editColor(color)}>
          <span>
            <span className="delete" onClick={e => {
                  e.stopPropagation();
                  deleteColor(color)
                }
              }>
                x
            </span>{" "}
            {color.color}
          </span>
          <div
            className="color-box"
            style={{ backgroundColor: color.code.hex }}
          />
        </li>
      ))}
    </ul>
    {editing && (
      <form onSubmit={ e => saveEdit(e)}>
        <legend>edit color</legend>
        <label>
          color name:
          <input
            onChange={e =>
              setColorToEdit({ ...colorToEdit, color: e.target.value })
            }
            value={colorToEdit.color}
          />
        </label>
        <label>
          hex code:
          <input
            onChange={e =>
              setColorToEdit({
                ...colorToEdit,
                code: { hex: e.target.value }
              })
            }
            value={colorToEdit.code.hex}
          />
        </label>
          <div className="button-row">
            <button type="submit">Save Edit</button>
            <button onClick={() => deleteColor(colorToEdit)} type="delete">Delete</button>
            <button onClick={() => setEditing(false)}>Cancel</button>
          </div>
        </form>
      )}
      <div className="spacer" />
      {/* stretch - build another form here to add a color */}
    </div>
  );
};

export default ColorList;
