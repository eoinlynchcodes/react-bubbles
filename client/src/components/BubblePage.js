import React, { useState, useEffect } from "react";
import axios from "../axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import withAuth from "../axios";

export default function BubblePage(props){
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

useEffect(() => {

  const token = localStorage.getItem('token');

  axios()({
    url: 'http://localhost:5000/api/colors',
    method: 'get',
    headers: {
      Authorization: token,
    }
  })
  .then(response => {
    setColorList(response.data);
  })
  .catch(error => {
    alert(error);
  });
}, []);


  return (
    <>
    {/* <h3>This is inside the return from 'BubblePage.js'</h3> */}
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

