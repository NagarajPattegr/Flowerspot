document.addEventListener("DOMContentLoaded", () => {
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
    const buy = document.getElementById("buyNowBtn");
    const d = new URLSearchParams(window.location.search)
    const name = document.getElementById("productName").innerHTML = d.get('name')
    const price = document.getElementById("productPrice").innerHTML = d.get('price')
    const type = document.getElementById("productType").innerHTML =`${d.get('type')}`
    const pid=d.get('pid')
   document.getElementById("productImage").setAttribute("src", d.get('link'))

    document.getElementById("buyNowBtn").setAttribute("href", `../Checkout/Checkout.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&type=${encodeURIComponent(type)}&link=${encodeURIComponent(d.get('link'))}&pid=${encodeURIComponent(pid)}`)
    document.getElementById("addToCartBtn").setAttribute("href", `../Cart/cart.html?name=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}&type=${encodeURIComponent(type)}&link=${encodeURIComponent(d.get('link'))}&pid=${encodeURIComponent(pid)}`)

    const commentSection = document.getElementById("review-section");
    const storedComments = JSON.parse(localStorage.getItem(pid)) || [];
    storedComments.forEach(comment => {
        const commentBox = document.createElement('div');
        commentBox.textContent = comment;
        commentSection.appendChild(commentBox);
    });

    document.getElementById("submit").addEventListener("click",()=>{
         const comment=document.getElementById("review-section");
        comment.innerHTML=''
        const text=document.getElementById("reviewText").value.trim();
        const data=localStorage.getItem(pid)
       const  arr=data?JSON.parse(data):[]
        if(text){
            arr.push(text)
        localStorage.setItem(pid,JSON.stringify(arr))
    }
        arr.forEach(element => {
            const box=document.createElement('div')
            box.innerHTML=element
            comment.appendChild(box)
        });
    })
})
