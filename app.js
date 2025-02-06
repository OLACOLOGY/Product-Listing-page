const menu = [
  {
    id: "one",
    image: {
      thumbnail: "./assets/images/image-waffle-thumbnail.jpg",
      mobile: "./assets/images/image-waffle-mobile.jpg",
      tablet: "./assets/images/image-waffle-tablet.jpg",
      desktop: "./assets/images/image-waffle-desktop.jpg",
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.5,
  },
  {
    id: "two",
    image: {
      thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
      mobile: "./assets/images/image-creme-brulee-mobile.jpg",
      tablet: "./assets/images/image-creme-brulee-tablet.jpg",
      desktop: "./assets/images/image-creme-brulee-desktop.jpg",
    },
    name: "Vanilla Bean Crème Brûlée",
    category: "Crème Brûlée",
    price: 7.0,
  },
  {
    id: "three",
    image: {
      thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
      mobile: "./assets/images/image-macaron-mobile.jpg",
      tablet: "./assets/images/image-macaron-tablet.jpg",
      desktop: "./assets/images/image-macaron-desktop.jpg",
    },
    name: "Macaron Mix of Five",
    category: "Macaron",
    price: 8.0,
  },
  {
    id: "four",
    image: {
      thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
      mobile: "./assets/images/image-tiramisu-mobile.jpg",
      tablet: "./assets/images/image-tiramisu-tablet.jpg",
      desktop: "./assets/images/image-tiramisu-desktop.jpg",
    },
    name: "Classic Tiramisu",
    category: "Tiramisu",
    price: 5.5,
  },
  {
    id: "five",
    image: {
      thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
      mobile: "./assets/images/image-baklava-mobile.jpg",
      tablet: "./assets/images/image-baklava-tablet.jpg",
      desktop: "./assets/images/image-baklava-desktop.jpg",
    },
    name: "Pistachio Baklava",
    category: "Baklava",
    price: 4.0,
  },
  {
    id: "six",
    image: {
      thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
      mobile: "./assets/images/image-meringue-mobile.jpg",
      tablet: "./assets/images/image-meringue-tablet.jpg",
      desktop: "./assets/images/image-meringue-desktop.jpg",
    },
    name: "Lemon Meringue Pie",
    category: "Pie",
    price: 5.0,
  },
  {
    id: "seven",
    image: {
      thumbnail: "./assets/images/image-cake-thumbnail.jpg",
      mobile: "./assets/images/image-cake-mobile.jpg",
      tablet: "./assets/images/image-cake-tablet.jpg",
      desktop: "./assets/images/image-cake-desktop.jpg",
    },
    name: "Red Velvet Cake",
    category: "Cake",
    price: 4.5,
  },
  {
    id: "eight",
    image: {
      thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
      mobile: "./assets/images/image-brownie-mobile.jpg",
      tablet: "./assets/images/image-brownie-tablet.jpg",
      desktop: "./assets/images/image-brownie-desktop.jpg",
    },
    name: "Salted Caramel Brownie",
    category: "Brownie",
    price: 4.5,
  },
  {
    id: "nine",
    image: {
      thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
      mobile: "./assets/images/image-panna-cotta-mobile.jpg",
      tablet: "./assets/images/image-panna-cotta-tablet.jpg",
      desktop: "./assets/images/image-panna-cotta-desktop.jpg",
    },
    name: "Vanilla Panna Cotta",
    category: "Panna Cotta",
    price: 6.5,
  },
];
const menuPage = document.querySelector(".menu-page");
const empty = document.querySelector(".empty");
const total = document.querySelector(".full");
const delivery = document.querySelector(".delivery");
const receipt = document.querySelector(".receipt");
const background = document.querySelector(".background");
const insert = document.querySelector(".insert");
const check = document.querySelector(".check");
const newOrder = document.querySelector(".new-order");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let displayMenu = () => {
  return (menuPage.innerHTML = menu
    .map((x) => {
      let { id, image, name, category, price } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `<div id=product-id-${id} class="picks">
                <picture>
                  <source
                    srcset=${image.mobile}
                    media="(max-width: 320px)"
                  />
                  <source
                    srcset=${image.tablet}
                    media="(max-width: 700px)"
                  />
                  <source
                    srcset=${image.desktop}
                    media="(max-width: 1500px)"
                  />
                  <img
                    class="food-pic"
                    src=${image.desktop}
                    alt=""
                  />
                </picture>
                <div class="action">
                  <button class="add-btn show">
                    <img
                      src="/assets/images/icon-add-to-cart.svg"
                      width="17px"
                      height="17px"
                      alt=""
                    />Add to Cart
                  </button>
                  <button class="num">
                  <p onclick="decrement(${id})" class="btn minus">&#8722;</p>
                  <div id=${id} class="value">
                  ${search.item === undefined ? 0 : search.item}</div>
                  <p onclick="increment(${id})" class="btn plus">&#43;</p>
                </button>
                </div>
                <p>${category}</p>
                <h3>${name}</h3>
                <h4>$ ${price}</h4>
          </div>`;
    })
    .join(""));
};

displayMenu();

let addcart = document.querySelectorAll(".add-btn");
let value = document.querySelectorAll(".value");

addcart.forEach((add) => {
  add.addEventListener("click", (e) => {
    let pick = e.currentTarget.classList;
    if (pick.contains("show")) {
      pick.remove("show");
    } else if (search.item === 0) {
      pick.add("show");
    }
  });
});

let increment = (id) => {
  let selecteditem = id;
  let search = basket.find((x) => x.id === selecteditem.id);
  if (search === undefined) {
    basket.push({
      id: selecteditem.id,
      item: 1,
    });
  } else {
    search.item += 1;
  }

  update(selecteditem.id);
  localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
  let selecteditem = id;
  let search = basket.find((x) => x.id === selecteditem.id);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(selecteditem.id);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
  let search = basket.find((x) => x.id === id);
  let value = document.getElementById(id);
  value.innerHTML = search.item;
  calculation();
  totalAmount();
};

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (empty.innerHTML = basket
      .map((x) => {
        let { id, item } = x;
        let search = menu.find((y) => y.id === id) || [];
        return `<div class="pre-order">
      <div class="food">
        <div class="food-info">
          <h3>${search.name}</h3>
          <div class="amount">
            <h4 style="font-size: 17px">${item}x</h4>
            <p style="font-size: 17px">@ $${search.price}</p>
            <h5>$${item * search.price}</h5>
          </div>
        </div>
        <img onclick= "removeItem(${id})" class="remove" src="/assets/images/icon-remove-item.svg" alt="" />
      </div>
      <hr />
      `;
      })
      .join(""));
  } else {
    empty.innerHTML = `<img
            src="/assets/images/illustration-empty-cart.svg"
            alt=""
            class="cake"
          />
          <p>Your added items will appear here</p>`;
  }
};
generateCartItems();

let calculation = () => {
  let cartNum = document.querySelector(".cartAmount");
  let num = basket.map((X) => X.item).reduce((x, y) => x + y, 0);
  cartNum.innerHTML = `Your Cart (${num})`;
  generateCartItems();
};
calculation();

let removeItem = (id) => {
  let selecteditem = id;
  basket = basket.filter((x) => x.id !== selecteditem.id);
  generateCartItems();
  totalAmount();
  calculation();
  localStorage.setItem("data", JSON.stringify(basket));
};

let confirmCart = () => {
  if (basket.length !== 0) {
    receipt.classList.add("show");
    background.classList.add("show") ;
    insert.innerHTML = basket.map((x) => {
      let { id, item } = x;
      let search = menu.find((y) => y.id === id) || [];
      let { image, name, price } = search;
      return `
      <div class="orders">
        <div class="foodlist">
          <img src=${image.thumbnail} alt="" />
          <div class="info">
            <h3>${name}</h3>
            <div class="amount">
              <h4 style="font-size: 17px">${item}x</h4>
              <h5 style="font-size: 17px">@ $${price}</h5>
            </div>
          </div>
          <div style="font-size: 17px" class="price">$${
            item * search.price
          }</div>
        </div><hr />
        
        `;
    }).join("");
  } else {
    receipt.classList.remove("show");
    background.classList.remove("show") ;
  }
};
confirmCart();

let totalAmount = () => {
  if (basket.length !== 0) {
    let amount = basket
      .map((x) => {
        let { item, id } = x;
        let search = menu.find((y) => y.id === id) || [];
        return item * search.price;
      })
      .reduce((x, y) => x + y, 0);
    check.innerHTML = `$${amount}`;
    console.log(check.classList);

    total.innerHTML = `
        <div class="total">
        <h5 style="color: hsl(12, 20%, 44%)">Order Total</h5>
        <h1 style="font-size: 25px">$${amount}</h1>
      </div>
      <div class="delivery">
        <img src="/assets/images/icon-carbon-neutral.svg" alt="" />
        <p style="color: hsl(12, 20%, 44%)">
          This is a <b>carbon-neutral</b> delivery
        </p>
      </div>
      <button onclick="confirmCart()" class="confirm">Confirm Order</button>
        `;
  } else {
    total.innerHTML = ``;
  }
};

totalAmount();

newOrder.addEventListener("click", () => {
  console.log("okay");
  basket = [];
  totalAmount();
  calculation();
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(basket));
  receipt.classList.remove("show");
  window.location.reload();
});
