class Makale extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML=`<h2>`+this.getAttribute('baslik')+`</h2>`;
        this.innerHTML+="<p>konu ile alakali icerik</p>";
    }
}
customElements.define("makale-elementi",Makale);