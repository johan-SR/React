import React from 'react';

const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
    
          <TypesOfFruit />
        
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
            <div >
                <div style = {{color: 'Red', fontSize:28}}>Ejercicio 10-Nested Components</div>
                <h1>Types of Food:</h1>
                    <Fruits />
            </div>
        </div>
      );
    }
  };
  export default TypesOfFood;