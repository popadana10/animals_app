import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import {animals} from './animalsList';

function App() {
  const [animalsData, setAnimalsData]=useState(animals);
  
  const removeCard = (animal) => {
  const updatedArray = animalsData.filter(item=>item.name !== animal);
  setAnimalsData(updatedArray);
  };

  const likesHandler = (animal, action) => {
    const updatedArray =animalsData.map(item =>{
      if (item.name === animal) {
        if (action === 'add') {
          return {...item, likes: item.likes +1};
        } else {
          return {...item, likes: item.likes -1};
        }
      } else {
        return item;
      }
    });
    setAnimalsData(updatedArray);
  };

  return (
    <>
    <Header/>
      <main className='card'>
        {animalsData.map((animal) => (
        <Card 
        key={animal.name} 
        {...animal} 
        removeLikes={()=>likesHandler(animal.name, 'remove')} 
        addLikes = {likesHandler.bind(this, animal.name, 'add')} 
        removeCard={()=>removeCard(animal.name)}
        />
        ))};
      </main>
    <Footer/>
    </>
  );
}

export default App;
