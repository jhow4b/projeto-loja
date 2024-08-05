const sliderWrapper = document.querySelector(".sliderWrapper")
const menuItem = document.querySelectorAll(".menuItem")

const products = [
    {
      id: 1,
      title: "AIR FORCE",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "AIR JORDAN",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "BLAZER",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "CRATER",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "HIPPIE",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg")
const currentProductTitle = document.querySelector(".productTitle")
const currentProductPrice = document.querySelector(".productPrice")
const currentProductColors = document.querySelectorAll(".color")
const currentProductSizes = document.querySelectorAll(".size")

menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        //muda o slide
        sliderWrapper.style.transform = `translateX(-${100 * index}vw)`
    
        //muda o produto escolhido
        choosenProduct = products[index]

        //muda os textos dos produtos
        currentProductTitle.textContent = choosenProduct.title
        currentProductPrice.textContent = "R$" + choosenProduct.price
        currentProductImg.src = choosenProduct.colors[0].img

        //muda as cores
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code
        })
    })
})

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    })
})

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})

const productButton = document.querySelector(".buyProduct")
const payment = document.querySelector(".payment")
const close = document.querySelector(".close")

productButton.addEventListener("click", () => {
  payment.style.display = "flex"
})

close.addEventListener("click", () => {
  payment.style.display = "none"
})