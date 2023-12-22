import React, { useState } from 'react';

function App() {
  const [food, setFood] = useState([
    {
      id: 1,
      image: 'https://avatars.mds.yandex.net/i?id=5bf314461cc8b08aa85642ab9de533c50f8d3432-9852755-images-thumbs&n=13',
      name: 'Nagets',
      prise: 150
    },
    {
      id: 2,
      image: 'https://avatars.mds.yandex.net/i?id=2e55ad8daeafe3a9c3ac760967604d0a4cf06d26-5233748-images-thumbs&n=13',
      name:'Pizza',
      prise: 350
    },
    {
      id: 3,
      image: 'https://avatars.mds.yandex.net/i?id=350c7af734ba6983ae32d8d449a7d8769eb6319a-10767526-images-thumbs&n=13',
      name:'Fry',
      prise: 100
    },
    {
      id: 4,
      image: 'https://avatars.mds.yandex.net/i?id=c9af1347164f45a6f1a8a44cd275ba6609dc9b75-4471742-images-thumbs&n=13',
      name:'Burger',
      prise: 110
    }
  ]);

  const deleteFood = (id) => {
    const upFood = food.filter((item) => {
      if (item.id === id) {
        return false
      } return true
    });
    setFood(upFood);
  };

  return (
    <div className="container">
      <div className="Bloks-item">
        {food.map((foods) => (
          <div className="Bloks" key={foods.name}>
            <img src={foods.image} alt={foods.name} />
            <div className="title-block">
              <p>{foods.name}</p>
              <p>Prise: {foods.prise}P</p>
            </div>
            <button className="btn" onClick={() => deleteFood(foods.id)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
