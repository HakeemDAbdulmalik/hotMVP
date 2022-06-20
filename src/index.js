import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.jsx';

function Index()
{
  return (
    <div>
      Start of my project!
      <Nav/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<Index/>);