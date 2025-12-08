class CardSearch {

    selectors = {
        searchInput: '[data-search]',
        card: '.card',
        title: '.card__title'
    }

    constructor() {

        this.searchInput = document.querySelector(this.selectors.searchInput)
        this.cards = document.querySelectorAll(this.selectors.card)
        this.bindSearch()
    }

    searchCard = () => {
        // получаем текст из input, удаляем пробелы и приводим в нижний регистр
        const searchText = this.searchInput.value.trim().toLowerCase()
        // перебираем все карточки
        this.cards.forEach(card => {
            // находим заголовок
            const titleElement = card.querySelector(this.selectors.title)
            const titleText = titleElement ? titleElement.textContent.toLowerCase() : ''

            if (!searchText || titleText.includes(searchText)) {
                card.style.display = 'block'
            } else {
                card.style.display = 'none'
            }
        })

    }

    bindSearch() {
        this.searchInput.addEventListener('input', this.searchCard)
    }
}

export default CardSearch
