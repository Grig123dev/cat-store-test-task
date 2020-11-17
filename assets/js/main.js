const $catsList = document.querySelector('.cats__list');
const $sortByPrice = document.querySelector('.sort__price');
const $sortByOld = document.querySelector('.sort__old');

let cats = [
  {
    id: 1,
    name: "Кот полосатый",
    color: "Коричневый",
    old: 2,
    price: 30000,
    isDiscount: 40,
    isSold: false,
    img: "assets/media/images/cat1.png"
  },
  {
    id: 2,
    name: "Кот полосатый",
    color: "Коричневый",
    old: 2,
    price: 40000,
    isDiscount: false,
    isSold: true,
    img: "assets/media/images/cat2.png"
  },
  {
    id: 3,
    name: "Кот полосатый",
    color: "Коричневый",
    old: 4,
    price: 20000,
    isDiscount: false,
    isSold: false,
    img: "assets/media/images/cat3.png"
  },
  {
    id: 4,
    name: "Кот полосатый",
    color: "Коричневый",
    old: 3,
    price: 25000,
    isDiscount: false,
    isSold: false,
    img: "assets/media/images/cat1.png"
  },
  {
    id: 5,
    name: "Кот полосатый",
    color: "Коричневый",
    old: 5,
    price: 30000,
    isDiscount: 40,
    isSold: false,
    img: "assets/media/images/cat3.png"
  },
  {
    id: 6,
    name: "Кот полосатый",
    color: "Коричневый",
    old: 1,
    price: 10000,
    isDiscount: false,
    isSold: true,
    img: "assets/media/images/cat2.png"
  }
];

function renderData(data) {  
  $catsList.innerHTML = `
    ${data.map((cat) => {
      return `
        <div class="cats__list_cat">
          ${cat.isDiscount ? `<p class="cat__discount">-${cat.isDiscount}%</p>` : ''}
          <img src="./assets/media/icons/favourite.png" alt="favourite" class="cat__favourite">
          <div class="cat__imgContainer">
            <img src="${cat.img}" alt="cat" class="cat__img">
          </div>
          <div class="cat__info">
            <h3 class="cat__name">
              ${cat.name}
            </h3>
            <div class="cat__details">
              <p class="cat__details_color">
                <span class="cat__details_color_value">${cat.color}</span>
                <span class="cat__details_color_text">окрас</span>
              </p>
              <p class="cat__details_old">
                <span class="cat__details_old_value">${cat.old} мес.</span>
                <span class="cat__details_old_text">Возраст</span>
              </p>
              <p class="cat__details_paws">
                <span class="cat__details_paws_value">4</span>
                <span class="cat__details_paws_text">Кол-во лап</span>
              </p>
            </div>
            <p class="cat__price">
              ${cat.price} руб.
            </p>
          </div>
          <button class="${!cat.isSold ? "cat__buy" : "cat__sold"}" disabled="${cat.isSold}">
            ${!cat.isSold ? "Купить" : "Продано"}
          </button>
        </div>
      `
    }).join('')}
  `
}

document.addEventListener("DOMContentLoaded", () => {
  renderData(cats);
});

$sortByPrice.addEventListener('click', sortByPrice);

function sortByPrice() {
  cats.sort((a, b) => a.price - b.price);
  renderData(cats);
}

$sortByOld.addEventListener('click', sortByOld);

function sortByOld() {
  cats.sort((a, b) => a.old - b.old);
  renderData(cats);
}