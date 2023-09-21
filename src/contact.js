const contact = ()=>{    
    content.innerHTML = "";

    //info
    const info = document.createElement('div');
    info.classList.add("info")
    content.appendChild(info);

    const hAdress = document.createElement('h3');
    info.appendChild(hAdress);
    hAdress.innerText = "Address:";

    const pAddress = document.createElement('p');
    info.appendChild(pAddress);
    pAddress.innerText = "123 Main Street \nRome Italy 12345"

    const hPhone = document.createElement('h3');
    info.appendChild(hPhone);
    hPhone.innerText = "Phone:";

    const pPHone = document.createElement('p');
    info.appendChild(pPHone);
    pPHone.innerText = "(555) 333-7777"

    const hEmail = document.createElement('h3');
    info.appendChild(hEmail);
    hEmail.innerText = "Email:";

    const pEmail = document.createElement('p');
    info.appendChild(pEmail);
    pEmail.innerText = "info@pizzaparadiso.com"

    const hSocial = document.createElement('h3');
    info.appendChild(hSocial);
    hSocial.innerText = "Social Media:";

    const Facebook = document.createElement('a');
    info.appendChild(Facebook);
    Facebook.innerText = "facebook.com/pizzaparadiso"
    Facebook.href="https://facebook.com/pizzaparadiso";

    const Instagram = document.createElement('a');
    info.appendChild(Instagram);
    Instagram.innerText = "\ninstagram.com/pizzaparadiso"
    Instagram.href="https://instagram.com/pizzaparadiso";

    const Twitter = document.createElement('a');
    info.appendChild(Twitter);
    Twitter.innerText = "\ntwitter.com/pizzaparadiso"
    Twitter.href="https://twitter.com/pizzaparadiso";

    const hHours = document.createElement('h3');
    info.appendChild(hHours);
    hHours.innerText = "Hours of operation:";

    const pHours = document.createElement('p');
    info.appendChild(pHours);
    pHours.innerText = "Monday to Thursday: 11:00 AM - 9:00 PM \nFriday and Saturday: 11:00 AM - 10:00 PM \nSunday: 12:00 PM - 8:00 PM";

}

export {contact};