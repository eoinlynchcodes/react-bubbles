import React, { useState, useEffect } from "react";
import axios from "../axios/index";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import withAuth from "../axios/index";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

useEffect(() => {
  const token = localStorage.getItem('token');

  axios().get('http://localhost:5000/api/colors')
  .then(response => {
    console.log(response);
    setColorList(response.data);
  })
  .catch(error => {
    alert(error);
  });
}, []);


  return (
    <>
    <h3>Data from BubblePage will render below.</h3>
      {/* <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} /> */}
    </>
  );
};

export default BubblePage;
