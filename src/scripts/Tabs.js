class Tabs {

    selectors = {
        root: '[data-js-tabs]',
        btn: '[data-js-tabs-btn]',
        list: '[data-js-tabs-list]',
        filter: '[data-filter]',
        card: '[data-category]'
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
        this.filterButtons = this.rootElement.querySelectorAll(this.selectors.filter)
        this.cards = document.querySelectorAll(this.selectors.card)
        this.activeFilter = 'all'
        this.bindEvents()
    }

    // при клике меняем состояние и фильтруем
    onButtonClick = (event) => {
        const clickedBtn = event.currentTarget
        // получаем data атрибут фильтра
        const filterValue = clickedBtn.dataset.filter
        // снимаем активный класс с кнопок
        this.buttons.forEach(btn => {
            btn.classList.remove(this.stateClasses.isActive)
        })
        // Добавляем активный класс только нажатой кнопке
        clickedBtn.classList.add(this.stateClasses.isActive)

        this.filterCards(filterValue)

    }
    // фильтрация
    filterCards(filter) {
        this.activeFilter = filter
        this.cards.forEach(card => {
            // получаем категорию фильтра
            const category = card.dataset.category

            if (filter === 'all' || category === filter) {
                card.style.display = 'block'
            } else {
                card.style.display = 'none'
            }
        })
    }

    bindEvents() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', this.onButtonClick)
        })
    }

}

export default Tabs;
