import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header'
import Us from './components/us'
import Work from './components/work'
import Additional from './components/additional'

function App() {
  return (
    <div>
      <Header />
      <Us title="WHY CHOOSE US" category="us"/>
      <Work />
      <Us title="OUR CLIENTS" category="clients"/>
      <Additional />
      <Us title="OUR BRANDS" category="brands"/>
    </div>
  )
}

ReactDOM.render(<App />,  document.getElementById('root'),

);