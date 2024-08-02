import React from 'react';
import './App.css';

const data = {
  "m1": { "description": "Chicken Fried Rice", "name": "FriedRice", "price": 150.00 },
  "m2": { "description": "Mutton Briyani", "name": "Briyani", "price": 175.00 },
  "m3": { "description": "Idly with Vada", "name": "Idly", "price": 50.00 },
  "m4": { "description": "Dosai with potato masala", "name": "Dosai", "price": 55.00 }
};


const ItemList = ({ items }) => {
  return (
    <div className="item-list">
      {Object.keys(items).map(key => {
        const item = items[key];
        return (  
          <div className="item" key={key}>
            <h3>{item.name}</h3>
            <p className='gtr'>{item.description}</p>
            <p className='col'>Price: ₹{item.price.toFixed(2)}</p>
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      {/* <h1>Menu</h1> */}
      <ItemList items={data} />
    </div>
  );
};

export default App;
