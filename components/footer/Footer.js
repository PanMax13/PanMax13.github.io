class Footer {
    render() {
        let footer = `
            <div class="footer-tilte">
                <img src="./images/image 1.png" class="footer-title inline">
                <div class="foter-title-text inline">
                    <div class="footer-upper-text">PIZZA</div>
                    <div class="foote-lower-text">Самая вкусная пицца</div>
                </div>
            </div>
            <div class="contacts">
                <div class="adress">ул. 40 Лет Победы 191/22</div>
                <div class="number" id="number">+7-901-202-11-23</div>
                <div class="email">thebestpizza@gmail.com</div>
            </div>
            <div class="social-nets">
                <ul>
                    <li class="net"><span class="net-img"><img src="./Untitled/facebook 1.png"></span><a href="https://about.facebook.com/meta/">Meta</a></li>
                    <li class="net"><span class="net-img"><img src="./Untitled/qqqqqqqqqqqqqqqqqqqqqqqqqqqq 1.png"></span> <a href="https://www.instagram.com">instagram</a></li>
                    <li class="net"><span class="net-img"><img src="./Untitled/twitter 1.png"></span> <a href="https://twitter.com/?lang=ru4">Twitter</a></li>
                </ul>
            </div>
        `;
        ROOT_FOOTER.innerHTML = footer;
    }
}

const footerPage = new Footer();
footerPage.render();