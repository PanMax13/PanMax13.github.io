class Cart {
    handleClear() {
        ROOT_CART.innerHTML = '';
    }
    clearCart() {
        localStorage.clear();
        window.location.reload();
    }

   
    errore() {
        ROOT_CART.innerHTML = `
            <div class="errore">
                <div class="errore-body">
                    <div class="errore_text">
                        ОШИБКА 505.
                    </div>
                    <div class="errore__subtext">Приносим свои извенения, но на данный момент сервер не отвеает. </div>
                    <button class="errore_btn" onclick="cartPage.handleClear()">Вернуться на главную</button>
                </div>
            </div>
        `
    }
    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';
        let buyCatalog = '';
        let buyTitle = ''; 
        let sumCatalog = 0;


        CATALOG.forEach(({ id, name, price, src}) => {


            if (productsStore.indexOf(id) !== -1) {
                console.log('корзина не пустая')
                htmlCatalog += `
                    <div class="cart-pizza">
                        <div>
                            <img src="${src}" class="cart__pizzaImg">
                        </div>
                        <div class="cart-pizza-style inline cart__pizzaName">${name}</div>
                        
                        <div class=" cart-pizza-style inline cost" id="price">${price + '&#8381;'}</div>

                    </div> 
                `;
                sumCatalog = sumCatalog + price;
                buyCatalog = `
                    <div class="values">
                        <div class="quintity buy">
                            Всего пицц: ${productsStore.length} <span class="bold"> шт </span>
                        </div>
                        <div class="quintity-money buy">
                            Сумма заказа: <span class="bold orange">${sumCatalog} руб</span>
                        </div>
                    </div>
                    <div class="buy_block">
                        <button class="buy_block_button buy_block__get-back" onclick="cartPage.handleClear()"><span class="left-arrow"><</span>Вернуться назад </button>
                        <button class="buy_block_button buy_block__clear" onclick="cartPage.clearCart()">Очистить</button>
                        <button class="buy_block_button buy_block__buy" onclick="cartPage.errore()"> Купить </button>
                    </div>
                `;
                buyTitle = `<div class="cart-title">Корзина</div>`;
                
            } else if (productsStore.length == 0) {

                console.log('корзина пустая');
                htmlCatalog = `
                    <div class="emptyBasket" >
                        <div class="emptyBasket-title">Ваша корзина пуста</div>
                        <div class="emptyBasket-subtext">Вероятней всего, вы не заказывали ещё пиццу.
                        Для того, чтобы заказать пиццу, перейди на главную страницу.</div>
                        <img src="./images/Layer 2.png" class="emptyBasket-img">
                        <button class="get-back" onclick="cartPage.handleClear()">Вернуться на главную</button>
                    </div>
                `;
            }
            
        });

        const html = `
            <div class="cart-container">
            ${buyTitle}
                <div class="cart-helper">
                    ${htmlCatalog}
                </div>
                <div class="buy-pizza">
                    ${buyCatalog}
                </div>
            </div>
        `;
        ROOT_CART.innerHTML = html;
    }
}

const cartPage = new Cart();

