import React, { useEffect } from "react";
import Card from "../../components/Card/Card";

import checkIsSame from "../../helpers/checkIsAdd";

const Home = ({
    searchValue, 
    onChangeImput,
    setSearchValue,
    items,
    cartItems,
    favorites,
    HandleOnAddFavorite,
    HandleOnAddCart,
    onDeleteCartItem,
    onDeleteFavoriteItem,
    isLoading
}) => {

  useEffect(() => {
    document.title = 'React | Home sneakers';
  }, []);

  useEffect(() => {
    const {arr1: newItems} = checkIsSame(items, cartItems);
    items = newItems
  }, [cartItems])

  const renderList = () => {
    return (
      isLoading 
        ? [...Array(10)]
        : items.filter(el => el.name.toUpperCase().includes(searchValue.toUpperCase()))
    ).map((el, index) => {
      return (
        <Card
          key={index}
          {...el}
          srcNum={index+1}
          onClickFavorite={HandleOnAddFavorite}
          onClickAdd={HandleOnAddCart}
          onRemove={onDeleteCartItem}
          onDeleteFavoriteItem={onDeleteFavoriteItem}
          isDelete={true}
          loading={isLoading}
        />
      )})
  }
  
  return (
      <section className="content">
        <div className="wrapp-search">
          <h1>{searchValue ? `Пошук за: "${searchValue}"` : 'Всі кросівки'}</h1>
          <div className="search">
            <img src="/img/loop.svg" alt="Search"/>
            <input onChange={onChangeImput} value={searchValue} placeholder="Пошук..." />
            {searchValue && <img onClick={() => setSearchValue('')} className="clear" src="/img/delete.svg" alt="clear" />}
          </div>
        </div>

        
        <div className="sneakers">
          { renderList() }
        </div>

      </section>
  )
}

export default Home