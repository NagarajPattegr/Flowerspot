document.addEventListener("DOMContentLoaded", () => {
    let navbtn = document.getElementById("navbtn");
    const container=document.querySelector(".ordercontainer")

    navbtn.addEventListener("click", (e) => {
        const navlist = document.querySelector(".nav-list");
        if (navlist.classList.contains("active")) {
            navlist.classList.toggle("active");
            navbtn.innerHTML = "&#9776;";
            e.stopPropagation();
        } else {
            navlist.classList.toggle("active");
            navbtn.innerHTML = "&#9747;";
            e.stopPropagation();
        }
    })

    document.addEventListener("click", () => {
        const navlist = document.querySelector(".nav-list");
        if (navlist.classList.contains("active")) {
            navlist.classList.toggle("active");
            navbtn.innerHTML = "&#9776;";
        }
    })


let url = new URLSearchParams(window.location.search);
const name = url.get('name');
const type = url.get('type');
const pid = url.get('pid');
const price = url.get('price');
const link = url.get('link');

const items = JSON.parse(localStorage.getItem("products")) || [];

const orderId = `${pid}-${Date.now()}`;


if (name && type && pid && price && link) {
    items.push({ orderId: orderId, id: pid, name: name, type: type, price: price, link: link });

    localStorage.setItem("products", JSON.stringify(items));
}

const uniqueItems = items.reduce((acc, current) => {
    const x = acc.find(item => item.id === current.id);
    if (!x) {
        acc.push(current);
    }
    return acc;
}, []);

uniqueItems.forEach(item => {

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <img src="${item.link}" alt="${item.name}" class="card-img">
        <div class="card-content">
            <h3 class="card-title">${item.name}</h3>
            <p class="card-type"> ${item.type}</p>
            <p class="card-price">Price: ${item.price}</p>
        </div>
    `;

    container.appendChild(card);
});
})
