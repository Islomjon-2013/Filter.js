const menu = [
  {
    id: 1,
    title: "Tea",
    category: "drink",
    price: 19.0,
    img: "./images/drink.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        nobis cumque commodi quas itaque nemo excepturi nihil nam`,
  },
  {
    id: 2,
    title: "Salad",
    category: "salad",
    price: 20.0,
    img: "./images/salad1.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        nobis cumque commodi quas itaque nemo excepturi nihil nam`,
  },
  {
    id: 3,
    title: "Drink",
    category: "drink",
    price: 19.0,
    img: "./images/drink1.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        nobis cumque commodi quas itaque nemo excepturi nihil nam`,
  },
  {
    id: 4,
    title: "Drink",
    category: "drink2",
    price: 10.0,
    img: "./images/drink2.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        nobis cumque commodi quas itaque nemo excepturi nihil nam`,
  },
  {
    id: 5,
    title: "Salad",
    category: "salad",
    price: 14.0,
    img: "./images/salad2.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        nobis cumque commodi quas itaque nemo excepturi nihil nam`,
  },
  {
    id: 6,
    title: "Salad",
    category: "salad",
    price: 9.0,
    img: "./images/salad3.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        nobis cumque commodi quas itaque nemo excepturi nihil nam`,
  },
  {
    id: 7,
    title: "Tea",
    category: "drink",
    price: 19.0,
    img: "./images/drink3.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        nobis cumque commodi quas itaque nemo excepturi nihil nam`,
  },
  {
    id: 8,
    title: "salad",
    category: "Salad",
    price: 19.0,
    img: "./images/salad4.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        nobis cumque commodi quas itaque nemo excepturi nihil nam`,
  },
  {
    id: 9,
    title: "Fruit",
    category: "fruit",
    price: 3.0,
    img: "./images/fruid1.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        nobis cumque commodi quas itaque nemo excepturi nihil nam`,
  },
  {
    id: 10,
    title: "Fruit",
    category: "fruit",
    price: 19.0,
    img: "./images/fruit2.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        nobis cumque commodi quas itaque nemo excepturi nihil nam`,
  },
  {
    id: 11,
    title: "Sweet",
    category: "salad",
    price: 11.0,
    img: "./images/sweet.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        nobis cumque commodi quas itaque nemo excepturi nihil nam`,
  },
  {
    id: 12,
    title: "fruit",
    category: "fruit",
    price: 19.0,
    img: "./images/fruit3.jpeg",
    desc: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        nobis cumque commodi quas itaque nemo excepturi nihil nam`,
  },
];
const btnFilters = document.querySelectorAll(".filter-btn");

btnFilters.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const minuCategory = menu.filter(function (item) {
      if (item.category === category) {
        return item;
      }
    });
    if (category === "all") {
      displayMenuItem(menu);
    } else {
      displayMenuItem(minuCategory);
    }
  });
});

const sectionSenter = document.querySelector(".section-center");
window.addEventListener("DOMContentLoaded", function () {
  displayMenuItem(menu);
});

function displayMenuItem(menuItem) {
  let displayMenu = menuItem.map(function (item) {
    return ` <div class="col menu-item">
        <img class="photo" src=${item.img} alt=${item.title} />
        <h2>${item.title}</h2>
        <h4 class="price">$${item.price}</h4>
        <p class="item-text">
       ${item.desc}
        </p>
      </div>`;
  });
  displayMenu = displayMenu.join("");
  sectionSenter.innerHTML = displayMenu;
}
