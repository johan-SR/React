import React from 'react';

const NonCitrus = () => {
    return (
    <div>
        <h4>Non-Citrus:</h4>
        <ul>
            <li>Apples</li>
            <li>Blueberries</li>
            <li>Strawberries</li>
            <li>Bananas</li>
        </ul>
    </div>
    );
  };
  const Citrus = () => {
    return (
    <div>
        <h4>Citrus:</h4>
            <ul><li>Lemon</li>
            <li>Lime</li>
            <li>Orange</li>
            <li>Grapefruit</li>
        </ul>
    </div>
    );
  };
  const Vegetables = () => {
    return (
    <div>
        <h2>Vegetables:</h2>
        <ul>
            <li>Brussel Sprouts</li>
            <li>Broccoli</li>
            <li>Squash</li>
            </ul>
    </div>
    );
  };



class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
            <NonCitrus />
            <Citrus />
        </div>
      );
    }
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
            <div >
                <div style = {{color: 'Red', fontSize:28}}>Ejercicio 11-Compose.</div>
                <h1>Types of Food:</h1>
                <Fruits />
                <Vegetables />
            </div>
        </div>
      );
    }
  };
  export default TypesOfFood;