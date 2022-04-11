import React, { useState, useEffect} from "react";
import axios from 'axios';
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import Order from "./pages/Order/Order";

import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";

import {searchID} from './helpers/forWorkSearch';
import {changeParam} from './helpers/changeParamArray';



// const Drawer = React.lazy(() => import('./components/Drawer/Drawer'));

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [onOpenCart, setOnOpenCart] = useState(false);


  useEffect(() => {
    try {
      axios.get('https://61f3f1b710f0f7001768c762.mockapi.io/items')
      .then(res => setItems(res.data))
      axios.get('https://61f3f1b710f0f7001768c762.mockapi.io/cart')
        .then(res => setCartItems(res.data))
      axios.get('https://61f3f1b710f0f7001768c762.mockapi.io/favorites')
      .then(res => setFavorites(res.data))

    } catch (error) {
      console.warn('Error in App first render', error.message);
    }
  }, [])

  const HandleOnAddCart = (props) => {
    axios.post('https://61f3f1b710f0f7001768c762.mockapi.io/cart', {...props, add: true})
      .then(res => {
        setCartItems((prev => [...prev, res.data]))

        let data = changeParam(items, props.name.split(' ').join(''), props.price.split(' ').join(''), {add:true})
        setItems([...data])

        data = changeParam(favorites, props.name.split(' ').join(''), props.price.split(' ').join(''), {add:true});
        setFavorites([...data])
      })
      .catch(e => {
        console.warn('Error in App:HandleOnAddCart', e.message);
      })
  }

  const HandleOnAddFavorite = (props) => {
    axios.post('https://61f3f1b710f0f7001768c762.mockapi.io/favorites', {...props})
    .then(res => setFavorites((prev => [...prev, res.data])))
    .catch(e => {
      console.warn('Error in App:HandleOnAddFavorite', e.message);
    })
  }


  const onChangeImput = (e) => {
    setSearchValue(e.target.value);
  }

  const onDeleteCartItem = async (name, price, ID) => {

    let data = changeParam(items, name.split(' ').join(''), price.split(' ').join(''), {add:false})
    setItems([...data])

    data = changeParam(favorites, name.split(' ').join(''), price.split(' ').join(''), {add:false});
    setFavorites([...data])

    if(ID) {
      setCartItems(prev => prev.filter(el => (el.id !== ID))) 
    } else {
      const id = await searchID('cart', name, price)
      setCartItems(prev => prev.filter(el => (el.id !== id))) 
    }

    const id = await searchID('cart', name, price)

    await axios.delete(`https://61f3f1b710f0f7001768c762.mockapi.io/cart/${id}`)
        .catch(e => {
          console.warn('Error in App:onDeleteCartItem', e.message);
        })
  }

  const onDeleteFavoriteItem = async ({id, ...props}) => {
    const ID = id ? id 
                  : await searchID('favorites', props.name, props.price)

    setFavorites(prev => prev.filter(el => el.id !== ID));

    await axios.delete(`https://61f3f1b710f0f7001768c762.mockapi.io/favorites/${ID}`)
        .catch(e => {
          console.warn('Error in App:onDeleteCartItem', e.message);
        })
  }

  const switchForDrawer = () => {
    setOnOpenCart(prev => !prev)
  }

  return (
    <div className="wrapper">
        {
          onOpenCart 
            && 
          <Drawer onClose={() => switchForDrawer()} onRemove={onDeleteCartItem} carts={cartItems}/>
        }
        
        <Header onClickOpenCart={() => switchForDrawer()}/>

        <Routes>
          <Route path='/' element={
            <Home
              searchValue={searchValue} 
              onChangeImput={onChangeImput}
              setSearchValue={setSearchValue}
              items={items}
              HandleOnAddFavorite={HandleOnAddFavorite}
              HandleOnAddCart={HandleOnAddCart}
              onDeleteCartItem={onDeleteCartItem}
              onDeleteFavoriteItem={onDeleteFavoriteItem}
            />} 
          />
          <Route path='favorites' exact element={
            <Favorites 
              items={favorites} 
              onDeleteFavoriteItem={onDeleteFavoriteItem}

              HandleOnAddCart={HandleOnAddCart}
              onDeleteCartItem={onDeleteCartItem}
            />} 
          />
          <Route path='order' element={<Order/>} />
          <Route path='*' element={<h2>Error</h2>} />
        </Routes>


    </div>
  );
}

export default App;
