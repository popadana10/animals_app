import { useState } from 'react'
import './App.css'
import {animals, birds, insects, fishes} from './routes/animalsList';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './routes/Home';
import Root from './routes/Root';
import ErrorPage from './routes/ErrorPage';
import About from './routes/About';
import CategoryPage from './routes/CategoryPage';
import SinglePage from './routes/SinglePage';

function App() {

  const [zoo, setZoo]=useState({animals, birds, insects, fishes});

  const removeHandler = (name, category) => {
    setZoo((prevZoo)=>({
      ...prevZoo, 
      [category]: prevZoo[category].filter(el => el.name !== name),
    }));
  };

  const likesHandler = (name, category, action) => {
   setZoo((prevZoo)=>({
    ...prevZoo, 
    [category]: prevZoo[category].map((el) => 
    el.name === name 
    ? {...el, likes: el.likes + (action === 'add' ? 1: -1) }
    : el
    ),
  }));
  };

const router = createBrowserRouter([
  {path:'/', element:<Home/>},
  {
    path:'/', 
    element:<Root/>,
    errorElement: <ErrorPage/>,
    children:[
    {path:':category', 
    element: (
    <CategoryPage 
    addLikes={likesHandler} 
    removeCard={removeHandler} 
    removeLikes={likesHandler}
    {...zoo}
    />
    ),
  },
    {path:':category/:name', element:<SinglePage {...zoo}/>},
    {path:'/about', element:<About/>},
  ],
},
]);

  return <RouterProvider router={router}/>;
};

export default App;
