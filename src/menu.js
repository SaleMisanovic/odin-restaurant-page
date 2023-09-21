import AlesiaImage from "./assets/Alesia.jpg"
import FedericaImage from "./assets/Federica.jpg"
import ReneImage from "./assets/Rene.jpg"
import RomanImage from "./assets/Roman.jpg"
import SaahilImage from "./assets/Saahil.jpg"
import StrgarImage from "./assets/Strgar.jpg"

const menu = ()=>{

    const myAlesiaImage = new Image();
    myAlesiaImage.src = AlesiaImage;

    const myFedericaImage = new Image();
    myAlesiaImage.src = FedericaImage;

    const myReneImage = new Image();
    myAlesiaImage.src = ReneImage;

    const myRomanImage = new Image();
    myAlesiaImage.src = RomanImage;

    const mySaahilImage = new Image();
    myAlesiaImage.src = SaahilImage;

    const myStrgarImage = new Image();
    myAlesiaImage.src = StrgarImage;    

    content.innerHTML = "";

    const menu = document.createElement('div');
    content.appendChild(menu);
    menu.classList.add("menu");

    function createPizza(src,name,price) {
        const pizza = document.createElement('div');
        pizza.classList.add('food');
        const img = document.createElement('img');
        img.setAttribute('src',src);

        const pizzaDetails = document.createElement('div');
        pizzaDetails.classList.add('details');

        const pizzaName = document.createElement('h3');
        pizzaName.textContent = name;

        const pizzaPrice = document.createElement('h2');
        pizzaPrice.textContent = price;

        pizzaDetails.appendChild(pizzaName);
        pizzaDetails.appendChild(pizzaPrice);

        pizza.appendChild(img);
        pizza.appendChild(pizzaDetails);

        return pizza;
    }

        const pizzas = [
        createPizza(
            AlesiaImage,
            'Alesia',
            '10$'
        ),
        createPizza(
            FedericaImage,
            'Federica',
            '11$'
        ),
        createPizza(
            ReneImage,
            'Rene',
            '14$'
        ),
        createPizza(
            RomanImage,
            'Roman',
            '9$'
        ),
        createPizza(
            SaahilImage,
            'Saahil',
            '11$'
        ),
        createPizza(
            StrgarImage,
            'Strgar',
            '13$'
        )
        ];   

        pizzas.forEach((pizza)=>{
            menu.appendChild(pizza)
        })
    }
    

export {menu};