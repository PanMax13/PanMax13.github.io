class Menu {
    constructor() {
        this.classNameActive = 'menu-element__btn_active';
        this.labelAdd = '+ Добавить';
        this.labelRemove = '- Удалить';
    }

    handelSetLocationStorage(element, id) {
        const { pushProducts, products } = localStorageUtil.putProducts(id);
        console.log('element ', element);
        if (pushProducts) {
            element.classList.add(this.classNameActive);
            element.innerHTML = this.labelRemove;
        } else {
            element.classList.remove(this.classNameActive);
            element.innerHTML = this.labelAdd;
        }
        headerPage.render(products.length);
    }

    render() {
        const productsStore = localStorageUtil.getProducts();
        let htmlCatalog = '';

        CATALOG.forEach(({ id, name, price, src, discription }) => {
            let activeClass = '';
            let activeText = '';
            
            if (productsStore.indexOf(id) === -1) {
                activeText = this.labelAdd;
            } else {
                activeClass = ' ' + this.classNameActive;
                activeText = this.labelRemove;
            }

            htmlCatalog += `
                <li class="menu-element">    
                    <img class="menu-element__img" src="${src}" />
                    <span class="menu-element__name">${name}</span>
                    <div class="menu-element__discription">${discription}</div>
                    <div class="menu-element__buy-block">
                        <span class="menu-element__price buy">${price} &#8381;</span>
                        <button class="menu-element__btn${activeClass} buy" onclick="menuPage.handelSetLocationStorage(this, '${id}');" data-add>${activeText}</button>
                    </div>
                </li>
            `;
        });

        const html = `
            <ul class="menu-container">
                ${htmlCatalog}
            </ul>
        `;
        ROOT_MENU.innerHTML = html;
    }
}

const menuPage = new Menu();

menuPage.render();