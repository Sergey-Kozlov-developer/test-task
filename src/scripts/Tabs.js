class Tabs {

    selectors = {
        root: '[data-js-tabs]',
        btn: '[data-js-tabs-btn]',
        list: '[data-js-tabs-list]'
    }



    // изменение состояния активно/неактивно
    stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock'
    }

    constructor() {
        this.rootElement = document.querySelector(this.selectors.root)
        this.buttons = this.rootElement.querySelectorAll(this.selectors.btn)
        this.listElement = this.rootElement.querySelector(this.selectors.list)
        this.bindEvents()
    }

    // при клике меняем состояние
    onButtonClick = (event) => {
        const clickedBtn = event.currentTarget

        // снимаем активный класс с кнопок
        this.buttons.forEach(btn => {
            btn.classList.remove(this.stateClasses.isActive)
        })

        // Добавляем активный класс только нажатой кнопке
        clickedBtn.classList.add(this.stateClasses.isActive)


    }
    bindEvents() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', this.onButtonClick)
        })
    }

}

export default Tabs;
