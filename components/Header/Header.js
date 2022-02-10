class Header {
    handlerOpenCartPage() {
        cartPage.render();
    }
    
    render(count) {
        const html = `
            <div class="header-container">
                <div class="title-block">
                    <img class="title title-img" src="./images/image 1.png">
                    <div class="title title-text">
                        PIZZA<br><span class="title-subtext">Самая вкусная пицца</span>
                    </div>
                </div>
                <div class="header-counter" onclick="headerPage.handlerOpenCartPage();">
                    <img class="cart-button" src="./images/iconfinder_shopping-cart_2561279 1.svg"><span class="final-cost">${count}</span>
                </div>
            </div>
        `;
        ROOT_HEADER.innerHTML = html;
    }
}

const headerPage = new Header(); 

const productsStore = localStorageUtil.getProducts();


headerPage.render(productsStore.length);