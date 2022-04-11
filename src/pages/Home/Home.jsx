import React from "react";
import Card from "../../components/Card/Card";


const Home = ({
    searchValue, 
    onChangeImput,
    setSearchValue,
    items,
    HandleOnAddFavorite,
    HandleOnAddCart,
    onDeleteCartItem,
    onDeleteFavoriteItem,
}) => {

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
            {
              items
                .filter(el => el.name.toUpperCase().includes(searchValue.toUpperCase()))
                .map((el, index) => {
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
                      />
                    )
              })
            }
          </div>

        </section>
    )
}

export default Home