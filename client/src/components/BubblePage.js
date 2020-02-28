import React, { useState, useEffect } from "react";
// import axios from "axios";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import withAuth from '../axiosWithAuth/index';

export const BubblePage = () => {

  const baseURL = 'http://localhost:5000';
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property


  useEffect(() => {
    withAuth().get('http://localhost:5000/api/colors')
    .then((response) => {
      console.log(response.data);
      setColorList(response.data);
    })
    .catch((error) => {
      alert('There has been an issue displaying the colour data. Please bear with us');
    })
  }, [])

  return (
    <>
    <h1>Here we are on the bubble page.</h1>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
