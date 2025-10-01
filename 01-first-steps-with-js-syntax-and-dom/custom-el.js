const TEMPLATE = `
    <div class="info-card">
        <h2 class="info-card__title">Your title</h2>
        <p class="info-card__description">Your description</p>
        <button class="info-card__read-btn">Mark as read</button>
    </div>
`;

class InfoCard extends HTMLElement {

    // Mandatory constructor
    constructor() {
        super(); // init the HTMLElement
        this.attachShadow({ mode: 'open' }); // Create a shadow DOM
    }

    // Called when the element is added to the DOM
    connectedCallback() {
        this.bindElements();
        this.display(this.getAttribute('info-title'), this.getAttribute('info-description'));
        this.bindEvents();
    }

    bindElements()  {
        this.titleElement = this.querySelector('.info-card__title');
        this.descriptionElement = this.querySelector('.info-card__description');
        this.readButton = this.querySelector('.info-card__read-btn');
    }

    display(title, description) {
        this.shadowRoot.innerHTML = TEMPLATE;
        this.shadowRoot.querySelector('.info-card__title').textContent = title;
        this.shadowRoot.querySelector('.info-card__description').textContent = description;
    }

    bindEvents() {
        this.shadowRoot.querySelector('.info-card__read-btn').addEventListener('click', () => {
            this.markAsRead();
        });
    }

    markAsRead() {
        this.classList.add('info-card--read');
        this.shadowRoot.querySelector('.info-card__read-btn').disabled = true;
        this.shadowRoot.querySelector('.info-card__read-btn').textContent = "Read";
        this.hidden = true;
    }
}

customElements.define('info-card', InfoCard);