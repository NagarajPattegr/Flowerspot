document.addEventListener("DOMContentLoaded",()=>{
    let navbtn = document.getElementById("navbtn");
    const container=document.querySelector(".cartcontainer")

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

const items = JSON.parse(localStorage.getItem("tasks")) || [];

const orderId = `${pid}-${Date.now()}`;


if (name && type && pid && price && link) {
    items.push({ orderId: orderId, id: pid, name: name, type: type, price: price, link: link });

    localStorage.setItem("tasks", JSON.stringify(items));
}

let uniqueItems = items.reduce((acc, current) => {
    const x = acc.find(item => item.id === current.id);
    if (!x) {
        acc.push(current);
    }
    return acc;
}, []);

renderCart(uniqueItems)
container.addEventListener("click",(e)=>{
    if(e.target.classList.contains("remove")){
        uniqueItems=uniqueItems.filter((val)=>val.id!=e.target.parentElement.getAttribute('id'))
        renderCart(uniqueItems)
        localStorage.setItem("tasks", JSON.stringify(uniqueItems))
    }
})

container.addEventListener("click",(e)=>{
    if(e.target.classList.contains("view")){
        viewElement=uniqueItems.filter((val)=>val.id===e.target.parentElement.getAttribute('id'))
        window.location.href=`../Productpage/product.html?name=${encodeURIComponent(viewElement[0].name)}&price=${encodeURIComponent(viewElement[0].price)}&type=${encodeURIComponent(viewElement[0].type)}&link=${encodeURIComponent(viewElement[0].link)}&pid=${encodeURIComponent(viewElement[0].pid)}`;
    }
})

   
})

function renderCart(arr){
    const container=document.querySelector(".cartcontainer")
    const card = document.createElement("div");
    
   if(arr.length===0){
    container.innerHTML="Cart is empty"
   }
    arr.forEach(item =>{

        const card = document.createElement("div");
        card.classList.add("card");
        
        card.innerHTML = `
            <img src="${item.link}" alt="${item.name}" class="card-img">
            <div class="card-content" id=${item.id}>
                <h3 class="card-title">${item.name}</h3>
                <p class="card-type"> ${item.type}</p>
                <p class="card-price">Price: ${item.price}</p>
                <button class="view">View</button>
                <button class="remove">Remove</button>
            </div>
        `;
    
        container.appendChild(card);
    })
}
