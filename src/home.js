import BkImage from './assets/background.jpg'

const home = ()=>{

    content.innerHTML = "";

    const heroImage = document.createElement("section");
    heroImage.classList.add("hero_image");
    content.appendChild(heroImage);

    const myBkImage = new Image();
    myBkImage.src = BkImage;


    const imageLogo = document.createElement("p");
    imageLogo.innerText = "Pizza Paradiso";
    imageLogo.classList.add("imageLogo");
    heroImage.appendChild(imageLogo);

    const heroText = document.createElement("section");
    heroText.classList.add("hero_text");
    content.appendChild(heroText);

    const hFirst = document.createElement("h2");
    heroText.appendChild(hFirst);
    const pFirst = document.createElement("p");
    heroText.appendChild(pFirst);
    hFirst.innerText = "Welcome to Pizza Paradiso"
    pFirst.innerText = "At Pizza Paradiso, we invite you on a culinary journey to the heart of Italy, where the art of pizza-making has been perfected over generations. Nestled in the heart of Rome, our cozy pizzeria is a haven for pizza enthusiasts and food lovers alike."

    const hSecond = document.createElement("h2");
    heroText.appendChild(hSecond);
    const pSecond = document.createElement("p");
    heroText.appendChild(pSecond);
    hSecond.innerText = "Authentic Flavors, Artisan Craftsmanship"
    pSecond.innerText = "Our pizzas are a tribute to the rich traditions of Italian cuisine. Every pizza we serve is a masterpiece, created with the finest ingredients and a passion for the perfect pie. From our handcrafted dough, fired to perfection in our wood-burning oven, to the carefully selected toppings that burst with flavor, each slice is a true taste of Italy."

    const hThird = document.createElement("h2");
    heroText.appendChild(hThird);
    const pThird = document.createElement("p");
    heroText.appendChild(pThird);
    hThird.innerText = "A Place to Savor and Share"
    pThird.innerText = "Pizza Paradiso isn't just a restaurant; it's a place to gather, celebrate, and savor life's moments. Whether you're enjoying a romantic evening for two or a lively family dinner, our warm and inviting atmosphere sets the stage for unforgettable memories."

    const hFourth = document.createElement("h2");
    heroText.appendChild(hFourth);
    const pFourth = document.createElement("p");
    heroText.appendChild(pFourth);
    hFourth.innerText = "Join Us at Pizza Paradiso"
    pFourth.innerText = "We invite you to explore our menu, discover your new favorite pizza, and make yourself at home in our little slice of Italy. Buon appetito!"

}

export {home};