import React from 'react';
import ReactDOM from 'react-dom';
import Jsx from './Jsx';
import CJsx from './Complex-jsx';
import Comments from './Comments';
import RenDom from './RenderDom';
import AddClass from './AddClass';
import Self from './Self-Closing';
import MyComponent from './Stateless';
import Props from './Props';
import Child from './Child';
import Nested from './Nested';
import Compose from './Compose';



ReactDOM.render(
  <React.StrictMode>
    <Jsx />
  </React.StrictMode>,
  document.getElementById('Ex1')
);

ReactDOM.render(
    <React.StrictMode>
      <CJsx />
    </React.StrictMode>,
    document.getElementById('Ex2')
  );

  ReactDOM.render(
    <React.StrictMode>
      <Comments />
    </React.StrictMode>,
    document.getElementById('Ex3')
  );
  ReactDOM.render(
    <React.StrictMode>
      <RenDom />
    </React.StrictMode>,
    document.getElementById('Ex4')
  );
  ReactDOM.render(
    <React.StrictMode>
      <AddClass />
    </React.StrictMode>,
    document.getElementById('Ex5')
  );
  ReactDOM.render(
    <React.StrictMode>
      <Self />
    </React.StrictMode>,
    document.getElementById('Ex6')
  );
  ReactDOM.render(
    <React.StrictMode>
      <MyComponent />
    </React.StrictMode>,
    document.getElementById('Ex7')
  );
  ReactDOM.render(
    <React.StrictMode>
      <Props />
    </React.StrictMode>,
    document.getElementById('Ex8')
  );
  ReactDOM.render(
    <React.StrictMode>
      <Child />
    </React.StrictMode>,
    document.getElementById('Ex9')
  );
  ReactDOM.render(
    <React.StrictMode>
      <Nested />
    </React.StrictMode>,
    document.getElementById('Ex10')
  );
  ReactDOM.render(
    <React.StrictMode>
      <Compose />
    </React.StrictMode>,
    document.getElementById('Ex11')
  );


