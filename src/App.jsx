import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import {animals, birds, insects} from './routes/animalsList';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Root from './routes/Root';
import Birds from './routes/Birds';
import Animals from './routes/Animals';
import ErrorPage from './routes/ErrorPage';
import About from './routes/About';
import CategoryPage from './routes/CategoryPage';


function App() {
  const [zoo, setZoo]=useState({animals, birds, insects});

/*  
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
  */

const router = createBrowserRouter([
  {path:'/', element:<Home/>},
  {
    path:'/', 
    element:<Root/>,
    errorElement: <ErrorPage/>,
    children:[
    {path:':category', element: <CategoryPage {...zoo}/>},
    {path:'/about', element:<About/>},
  ],
},
]);
  return <RouterProvider router={router}/>;
}

export default App;
