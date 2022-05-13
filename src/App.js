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
import checkIsSame from "./helpers/checkIsAdd";



// const Drawer = React.lazy(() => import('./components/Drawer/Drawer'));

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [orders, setOrders] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [onOpenCart, setOnOpenCart] = useState(false);
  const [priceCart, setPriceCart] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    try {
      axios.get('https://61f3f1b710f0f7001768c762.mockapi.io/items')
        .then(res => setItems(res.data))
      axios.get('https://61f3f1b710f0f7001768c762.mockapi.io/cart')
        .then(res => setCartItems(res.data))
        .catch(() => setCartItems([]))
      axios.get('https://61f3f1b710f0f7001768c762.mockapi.io/orders')
        .then((res) => setOrders(res.data))
        .catch(() => setOrders([]))
      axios.get('https://61f3f1b710f0f7001768c762.mockapi.io/favorites')
        .then(res => setFavorites(res.data))
        .catch(() => setFavorites([]))
    } catch (error) {
      console.warn('Error in App first render', error.message);
    }
    setIsLoading(false)
  },[]);

  useEffect(() => {
    setPriceCart(prev => {
      const value = cartItems.reduce((acc, el) => {
        return acc + +el.price.split(' ').join('')
      }, 0);

      return value
    })
  }, [cartItems]);


  const HandleOnAddCart = (props) => {
    axios.post('https://61f3f1b710f0f7001768c762.mockapi.io/cart', {...props, add: true})
      .then(res => {
        setCartItems((prev => [...prev, res.data]));

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
    .then(res => {
      setFavorites((prev => [...prev, res.data]))
      setItems(prev => {
        const newData = checkIsSame(prev, favorites, {favorites:true})
        return newData.arr1
      })
    })
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

    setItems(prev => {
      const newData = checkIsSame(prev, favorites, {favorites:false})
      return newData.arr1
    })
    setFavorites(prev => prev.filter(el => el.id !== ID));

    await axios.delete(`https://61f3f1b710f0f7001768c762.mockapi.io/favorites/${ID}`)
        .catch(e => {
          console.warn('Error in App:onDeleteCartItem', e.message);
        })
  }

  const switchForDrawer = () => {
    setOnOpenCart(prev => !prev)
  }

  const sendOrder = (carts) => {
    carts.forEach(el => {
      axios.post('https://61f3f1b710f0f7001768c762.mockapi.io/orders', el)
      axios.delete(`https://61f3f1b710f0f7001768c762.mockapi.io/cart/${el.id}`)
    });

    setOrders(prev => [...prev, ...carts]);
    setItems(prev => {
      const data = prev.map(el => {
        return {
          ...el,
          add: false,
        }
      })
      return data
    });
    
    setCartItems([]);
  }
  

  return (
    <div className="wrapper">
        <Drawer 
          onClose={() => switchForDrawer()} 
          onRemove={onDeleteCartItem} 
          carts={cartItems}
          sendOrder={sendOrder}
          open={onOpenCart}
        />
        
        <Header onClickOpenCart={() => switchForDrawer()} price={priceCart}/>

        <Routes>
          <Route path='/' element={
            <Home
              searchValue={searchValue} 
              onChangeImput={onChangeImput}
              setSearchValue={setSearchValue}
              items={items}
              cartItems={cartItems}
              favorites={favorites}
              HandleOnAddFavorite={HandleOnAddFavorite}
              HandleOnAddCart={HandleOnAddCart}
              onDeleteCartItem={onDeleteCartItem}
              onDeleteFavoriteItem={onDeleteFavoriteItem}
              isLoading={isLoading}
            />} 
          />
          <Route path='favorites' exact element={
            <Favorites 
              items={items}
              favorites={favorites} 
              onDeleteFavoriteItem={onDeleteFavoriteItem}

              HandleOnAddCart={HandleOnAddCart}
              onDeleteCartItem={onDeleteCartItem}
            />} 
          />
          <Route path='order' element={<Order orders={orders}/>} />
          <Route path='*' element={<h2>Error</h2>} />
        </Routes>


    </div>
  );
}

export default App;
