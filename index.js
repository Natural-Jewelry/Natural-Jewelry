
const toggle = document.querySelector(".toggle");
const toggleIcon = document.querySelector(".toggle .fa-bars")
const navbarMenu = document.querySelector(".menu")
const buttons = document.querySelectorAll("li.button-style")

toggle.addEventListener('click', () => {
    toggleIcon.classList.toggle("fa-xmark")
    navbarMenu.classList.toggle("show-menu")
})
buttons.forEach(button => {
    button.addEventListener('click', () => {
        toggleIcon.classList.remove("fa-xmark")
        navbarMenu.classList.remove("show-menu")
    })
});


/* show products Info */
let myIndex = 0;
getProduct()
function getProduct() {
    let buttons = document.getElementsByClassName('slideBtn')
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = "none";
        buttons[myIndex - 1].style.display = "block";
    }
    myIndex++;
    if (myIndex > buttons.length) { myIndex = 1 }
}
setTimeout(getProduct, 10)
setInterval(getProduct, 20000)
/* Get products Info */
const slideImage = document.querySelector('.slide-image')

fetch('./index.json')
    .then((response) => response.json())
    .then((products) => {
        products.forEach(product => {
            let slideBtn = document.createElement("div");
            slideBtn.classList.add("slideBtn")
            slideImage.appendChild(slideBtn);
            let slideImg = document.createElement("img");
            slideImg.classList.add("slide-img")
            slideImg.setAttribute("src", `${product.ProductImage}`);
            slideBtn.appendChild(slideImg);

            /* Get Products List */
            let productsList = document.querySelector(".products-list")
            let productItem =` <li class = "product-item"> 
            <img class ="product-img" src=" ${product.ProductImage}" alt="" /> 
            <h3 clsaa= "products-name ">${product.productName}</h3>
            <h4 class = "product-price">Price: ${product.ProductPrice} KR</h4>
            <button class = "desc-btn">View Details</button>
            <h5 class = "product-desc">${product.ProductDescription}</h5>
            </li>`
            productsList.innerHTML += productItem;


            /* Creat show Button */
            let descBtn = document.querySelector(".desc-btn");
            let productDescription = document.querySelector(".product-desc")
            /* descBtn.classList.add("desc-btn");
            descBtn.textContent = "View Details"
            productsList.appendChild(descBtn); */
            descBtn.addEventListener('click', (e) => {
                if (descBtn.textContent == "View Details") {
                    productDescription.style.display = "Block"
                    descBtn.textContent = "View Less"
                }
                else if (descBtn.textContent == "View Less") {
                    productDescription.style.display = "none"
                    descBtn.textContent = "View Details"
                }

            })



        });
    })







