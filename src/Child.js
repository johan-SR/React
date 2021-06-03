import React from 'react';

const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
            <div >
                <div style = {{color: 'Red', fontSize:28}}>Ejercicio9-Child y Parent</div>
                <h1>I am the parent</h1>
                <ChildComponent />
            </div>

          
        </div>
      );
    }
  };

  export default ParentComponent;