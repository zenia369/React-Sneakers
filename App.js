function App() {
  return (
    <div className="wrapper">
        <div className="overlay">
          <div className="overlay-drawer">
   
            <h2>
              Корзина
              <img className="delete" src="/img/delete.svg" alt="delete" />
            </h2>

            <div className="items">
              <div className="cartItem">
                <div className='cartItem-img'
                  style={{backgroundImage: 'url(/img/shoes/1.jpg)'}}>
                </div>
                <div>
                  <p>
                    Мужские Кроссовки Nike Air Max 270
                  </p>
                  <b>12 999 руб.</b>
                </div>
                <img className="delete" src="/img/delete.svg" alt="delete" />
              </div>
            </div>

            <div className="cardTotal">
              <ul>
                <li>
                  <span>Всього на:</span>
                  <div></div>
                  <b>7 000 грн</b>
                </li>
                <li>
                  <span>ПДВ 7%</span>
                  <div></div>
                  <b>8 000 грн</b>
                </li>
              </ul>

              <button className="greenButton">
                Оформити замовлення
                <img src="/img/arrow.svg" alt="Arrow" />
              </button>
            </div>


          </div>
        </div>

        <header>
          <div className="headerLeft">
            <img width={40} height={40} src="/img/logo.png" alt='shoes'/>
            <div className="headerLeft-info">
              <h3>React Sneakes</h3>
              <p>Магазин коросівок</p>
            </div>
          </div>
          <ul className="headerRight">
            <li>
              <img width={18} height={18} src="/img/shops.svg" alt='shoes'/>
              <span>133 грн.</span>
            </li>
            <li>
              <img width={18} height={18} src="/img/user.svg" alt='shoes'/>
            </li>
          </ul>
        </header>

        <section className="content">
          <div className="wrapp-search">
            <h1>Всі кросівки</h1>
            <div className="search">
              <img src="/img/loop.svg" alt="Search"/>
              <input placeholder="Пошук..." />
            </div>
          </div>
          

          <div className="sneakers">

            <div className="card">
              <div className="like">
                <img src="/img/like.svg" alt="like-btn" />
              </div>
              <img width={133} height={112} src="/img/shoes/1.jpg" alt="Sneakers"/>
              <h5>Мужские Кроссовки Nike Air Max 270</h5>
              <div className="card__button">
                <div className="card__button-price">
                  <p>Ціна:</p>
                  <b>10 000грн</b>
                </div>
                <button className="card__button-btn"><img src="/img/plus.svg" alt="plus"/></button>
              </div>
            </div>

            <div className="card">
              <img width={133} height={112} src="/img/shoes/2.jpg" alt="Sneakers"/>
              <h5>Мужские Кроссовки Nike Air Max 270</h5>
              <div className="card__button">
                <div className="card__button-price">
                  <p>Ціна:</p>
                  <b>10 000грн</b>
                </div>
                <button className="card__button-btn"><img src="/img/plus.svg" alt="plus"/></button>
              </div>
            </div>

            <div className="card">
              <img width={133} height={112} src="/img/shoes/1.jpg" alt="Sneakers"/>
              <h5>Мужские Кроссовки Nike Air Max 270</h5>
              <div className="card__button">
                <div className="card__button-price">
                  <p>Ціна:</p>
                  <b>10 000грн</b>
                </div>
                <button className="card__button-btn"><img src="/img/plus.svg" alt="plus"/></button>
              </div>
            </div>

            <div className="card">
              <img width={133} height={112} src="/img/shoes/2.jpg" alt="Sneakers"/>
              <h5>Мужские Кроссовки Nike Air Max 270</h5>
              <div className="card__button">
                <div className="card__button-price">
                  <p>Ціна:</p>
                  <b>10 000грн</b>
                </div>
                <button className="card__button-btn"><img src="/img/plus.svg" alt="plus"/></button>
              </div>
            </div>

          </div>

        </section>
    </div>
  );
}

export default App;
