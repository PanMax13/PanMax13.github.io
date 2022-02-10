class modal_window {
    render() {
        let html = `
            <div class="cookies-modal-window">
                <div class="cookies-modal-block" id="cookies">
                    <img class="cookies" src="./Untitled/cxookie.svg">
                    <div class="cookies-text-title">
                        Конфидициальность
                    </div>
                    <div class="cookies-text-subtitle">
                        Нажимая «Принять все файлы cookie», вы соглашаетесь с тем, что Stack Exchange может хранить файлы cookie на нашем устройстве и раскрывать информацию в соответствии с Политикой относительно файлов cookie.
                    </div>
                    <button class="accept-btn" onclick="accept()">Принять все cookies</button>
                </div>
            </div>
        `;  
        WINDOW_NOTICE.innerHTML = html;
    }
}

const modalPage = new modal_window();
modalPage.render();