document.addEventListener("DOMContentLoaded",function(e){
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
    const url=new URLSearchParams(window.location.search)
    const nm = url.get('name')
    const price =  url.get('price')
    const type =url.get('type')
    const link=url.get('link')
    const pid=url.get('pid')
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault();

        let isValid = true;
        let errorMessage = "";

        const name = document.getElementById('name').value.trim();
        if (name === "") {
            errorMessage += "Please enter your full name.\n";
            isValid = false;
        }

        const email = document.getElementById('email').value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errorMessage += "Please enter a valid email address.\n";
            isValid = false;
        }

        const address = document.getElementById('address').value.trim();
        if (address === "") {
            errorMessage += "Please enter your address.\n";
            isValid = false;
        }

        const city = document.getElementById('city').value.trim();
        if (city === "") {
            errorMessage += "Please enter your city.\n";
            isValid = false;
        }

        const zip = document.getElementById('zip').value.trim();
        if (zip === "" || isNaN(zip) || zip.length !== 5) {
            errorMessage += "Please enter a valid 5-digit zip code.\n";
            isValid = false;
        }

        const cardNumber = document.getElementById('card-number').value.trim();
        const cardPattern = /^\d{16}$/;
        if (!cardPattern.test(cardNumber)) {
            errorMessage += "Please enter a valid 16-digit card number.\n";
            isValid = false;
        }

        const expiry = document.getElementById('expiry').value.trim();
        const expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
        if (!expiryPattern.test(expiry)) {
            errorMessage += "Please enter a valid expiry date in MM/YY format.\n";
            isValid = false;
        }

        const cvv = document.getElementById('cvv').value.trim();
        if (cvv.length !== 3 || isNaN(cvv)) {
            errorMessage += "Please enter a valid 3-digit CVV.\n";
            isValid = false;
        }

        if (!isValid) {
            alert(errorMessage);
        } else {
            window.location.href = `../Order/orderpage.html?name=${encodeURIComponent(nm)}&price=${encodeURIComponent(price)}&type=${encodeURIComponent(type)}&link=${encodeURIComponent(link)}&pid=${encodeURIComponent(pid)}`;
            alert("Thank you for purchase")
        }
    });
})