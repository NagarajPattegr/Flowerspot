const flowers = [
    { name: "Rainbow Floral Garland", type: "Decoration", link: "./floweres/dec1.jpg", price: '₹100', id: 0 },
    { name: "Pastel Flower Curtain", type: "Decoration", link: "./floweres/dec2 .jpg", price: '₹120', id: 1 },
    { name: "Vibrant Wedding Backdrop", type: "Decoration", link: "./floweres/dec3.jpg", price: '₹150', id: 2 },
    { name: "Ornate Floral Pedestals", type: "Decoration", link: "./floweres/dec4.jpg", price: '₹200', id: 3 },
    { name: "Elegant Wall Hanging", type: "Decoration", link: "./floweres/dec5.jpg", price: '₹180', id: 4 },
    { name: "Marigold Wall Decor", type: "Decoration", link: "./floweres/dec6.jpg", price: '₹130', id: 5 },
    { name: "Classic Floral Archway", type: "Decoration", link: "./floweres/dec7.jpg", price: '₹250', id: 6 },
    { name: "Green Leaf Garland", type: "Decoration", link: "./floweres/dec8.jpg", price: '₹100', id: 7 },
    { name: "Multicolor Festive Garland", type: "Decoration", link: "./floweres/dec9.jpg", price: '₹90', id: 8 },
    { name: "Red and White Floral Combo", type: "Decoration", link: "./floweres/dec10.jpg", price: '₹110', id: 9 },
    { name: "Charming Red Rose Bundle", type: "Gift", link: "./floweres/f4.jpg", price: '₹250', id: 10 },
    { name: "Lush Red Rose Arrangement", type: "Gift", link: "./floweres/f5.jpg", price: '₹650', id: 11 },
    { name: "Vibrant Red Rose Collection", type: "Gift", link: "./floweres/f6.jpg", price: '₹350', id: 12 },
    { name: "Majestic Red and Blue Rose Combo", type: "Gift", link: "./floweres/f7.jpg", price: '₹50', id: 13 },
    { name: "Radiant Red and White Rose Ensemble", type: "Gift", link: "./floweres/f8.jpg", price: '₹650', id: 14 },
    { name: "Blooming Mixed Flower Bouquet", type: "Gift", link: "./floweres/f9.jpg", price: '₹150', id: 15 },
    { name: "Graceful Pink and White Roses", type: "Gift", link: "./floweres/f10.jpg", price: '₹110', id: 16 },
    { name: "Stunning Red and White Rose Spray", type: "Gift", link: "./floweres/f11.jpg", price: '₹250', id: 17 },
    { name: "Colorful Mixed Rose Display", type: "Gift", link: "./floweres/f13.jpg", price: '₹350', id: 18 },
    { name: "Alluring Red Rose Arrangement", type: "Gift", link: "./floweres/f14.jpg", price: '₹150', id: 19 },
    { name: "Classic White and Red Rose Mix", type: "Gift", link: "./floweres/f15.jpg", price: '₹300', id: 20 },
    { name: "Golden Yellow Rose Bouquet", type: "Gift", link: "./floweres/f16.jpg", price: '₹300', id: 21 },
    { name: "Rich Red Rose Hand-tied", type: "Gift", link: "./floweres/f17.jpg", price: '₹30', id: 22 },
    { name: "Delicate White Rose Assembly", type: "Decoration", link: "./floweres/f20.jpg", price: '₹310', id: 23 },
    { name: "Sunflower Delight Bouquet", type: "Gift", link: "./floweres/f21.jpg", price: '₹200', id: 24 }
];
document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');
    renderProduct(flowers)

    let navbtn = document.getElementById("navbtn");

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
    document.getElementById("Decoration").addEventListener("click", () => {
        const DecorationFlowers = flowers.filter(val => val.type == "Decoration");
        document.getElementById("Decoration").style.transform="scale(1.1)"
        document.getElementById("Gift").style.transform="scale(1)"
        document.getElementById("All").style.transform="scale(1)"
        renderProduct(DecorationFlowers)
    })
    document.getElementById("Gift").addEventListener("click", () => {
        const DecorationFlowers = flowers.filter(val => val.type == "Gift");
        document.getElementById("Decoration").style.transform="scale(1)"
        document.getElementById("Gift").style.transform="scale(1.1)"
        document.getElementById("All").style.transform="scale(1)"
        renderProduct(DecorationFlowers)
    })
    document.getElementById("All").addEventListener("click", () => {
        document.getElementById("Decoration").style.transform="scale(1)"
        document.getElementById("Gift").style.transform="scale(1)"
        document.getElementById("All").style.transform="scale(1.1)"
        renderProduct(flowers)
    })
})

function renderProduct(flowers) {
    const container = document.querySelector('.container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
        for (let i = 0; i < flowers.length; i++) {
            let box = document.createElement('div');
            box.classList.add("card");
            box.setAttribute("id", flowers[i].id)
            box.innerHTML = `
                <a href="../Productpage/product.html?name=${encodeURIComponent(flowers[i].name)}&price=${encodeURIComponent(flowers[i].price)}&type=Type : ${encodeURIComponent(flowers[i].type)}&link=${encodeURIComponent(flowers[i].link)}&pid=${encodeURIComponent(flowers[i].id)}">
                    <img src="${flowers[i].link}" class="image" alt="Image">
                    <p class="name">${flowers[i].name}</p>
                    <p class="price">${flowers[i].price}</p>
                </a>
            `;
            container.appendChild(box);
        }
    }
