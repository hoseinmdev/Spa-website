const productsData = [
  {
    id: 1,
    title: "موبایل اپل مدل iPhone 13",
    price: 52439000,
    imageURL: "../Accets/images/iphone-13.png",
    Specifications: {
      speaker: "اسپیکر / استریو ( دوگانه )",
      ram: "رم / 4 گیگابایت رم",
      camera: "دوربین اصلی / 12 مگاپیکسل",
      storage: "حافظه داخلی / 256 گیگابایت",
      battery: "باتری / 3240 میلی آمپر ساعت",
    },
  },
  {
    id: 2,
    title: " موبایل سامسونگ Galaxy s21",
    price: 37199000,
    imageURL: "../Accets/images/galaxy-s21.png",
    Specifications: {
      speaker: "اسپیکر / استریو ( دوگانه )",
      ram: "رم / 8 گیگابایت رم",
      camera: "دوربین اصلی / 12 مگاپیکسل",
      storage: "حافظه داخلی / 256 گیگابایت",
      battery: "باتری / 4000 میلی آمپر ساعت",
    },
  },
  {
    id: 3,
    title: "موبایل اپل مدل iPhone 14",
    price: 48000000,
    imageURL: "../Accets/images/iphone-14.png",
    Specifications: {
      speaker: "اسپیکر / استریو ( دوگانه )",
      ram: "رم / 6 گیگابایت رم",
      camera: "دوربین اصلی / 12 مگاپیکسل",
      storage: "حافظه داخلی / 512 گیگابایت",
      battery: "باتری / 3279 میلی آمپر ساعت",
    },
  },
  {
    id: 4,
    title: "موبایل شیائومی مدل Poco M4",
    price: 6799000,
    imageURL: "../Accets/images/poco-m4.webp",
    Specifications: {
      speaker: "اسپیکر / استریو ( دوگانه )",
      ram: "رم / 8 گیگابایت رم",
      camera: "دوربین اصلی / 50 مگاپیکسل",
      storage: "حافظه داخلی / 128 گیگابایت",
      battery: "باتری / 5000 میلی آمپر ساعت",
    },
  },
  {
    id: 5,
    title: "موبایل سامسونگ Galaxy A51",
    price: 8200000,
    imageURL: "../Accets/images/galaxy-A51.png",
    Specifications: {
      speaker: "اسپیکر / مونو",
      ram: "رم / 6 گیگابایت رم",
      camera: "دوربین اصلی / 48 مگاپیکسل",
      storage: "حافظه داخلی / 128 گیگابایت",
      battery: "باتری / 4000 میلی آمپر ساعت",
    },
  },
  {
    id: 6,
    title: "موبایل وان پلاس مدل Nord",
    price: 3399000,
    imageURL: "../Accets/images/oneplus-Nord.avif",
    Specifications: {
      speaker: "اسپیکر / مونو",
      ram: "رم / 6 گیگابایت رم",
      camera: "دوربین اصلی / 48 مگاپیکسل",
      storage: "حافظه داخلی / 128 گیگابایت",
      battery: "باتری / 4115 میلی آمپر ساعت",
    },
  },
  {
    id: 7,
    title: "موبایل سامسونگ Galaxy A12",
    price: 5550000,
    imageURL: "../Accets/images/galaxy-a12.png",
    Specifications: {
      speaker: "اسپیکر / مونو",
      ram: "رم / 6 گیگابایت رم",
      camera: "دوربین اصلی / 48 مگاپیکسل",
      storage: "حافظه داخلی / 128 گیگابایت",
      battery: "باتری / 5000 میلی آمپر ساعت",
    },
  },
  {
    id: 8,
    title: "موبایل هواوی Y9a",
    price: 4988000,
    imageURL: "../Accets/images/huawei-y9a.png",
    Specifications: {
      speaker: "اسپیکر / مونو",
      ram: "رم / 8 گیگابایت رم",
      camera: "دوربین اصلی / 64 مگاپیکسل",
      storage: "حافظه داخلی / 128 گیگابایت",
      battery: "باتری / 4200 میلی آمپر ساعت",
    },
  },
];
const backdrop = document.querySelector(".backdrop");
const productsDOM = document.querySelector(".products-block");
const infoProductDOM = document.querySelector(".infoProduct-block");

const mobiles = () => {
  let result = "";
  productsDOM.innerHTML = "";
  productsData.forEach((item) => {
    const productBlock = document.createElement("div");
    result = `
    <div class="product-block">
    <img src=${item.imageURL} alt="Playstation-5" />
    <h5>${item.title}</h5>
    <h4>قیمت : ${item.price.toLocaleString("en")} تومان</h4>
    <button class="info-btn" data-id=${item.id}>مشخصات</button>
    </div>`;
    productBlock.innerHTML = result;
    productsDOM.appendChild(productBlock);
  });
  getListeners();
};
const getListeners = () => {
  const infoBtn = document.querySelectorAll(".info-btn");
  const infoBtns = [...infoBtn];
  infoBtns.forEach((button) => {
    button.addEventListener("click", (e) => {
      findProductClicked(e.target.dataset.id);
    });
  });
};
const findProductClicked = (id) => {
  const findProduct = productsData.filter((item) => {
    return parseInt(item.id) === parseInt(id);
  });
  showProductInfo(findProduct);
};
const showProductInfo = (product) => {
  let result = "";
  infoProductDOM.innerHTML = "";
  product.forEach((item) => {
    const infoProductBlock = document.createElement("div");
    result = `
    <div class="infoProduct">
      <img src=${item.imageURL} alt="" />
      <div>
        <h3>${item.title}</h3>
        <p>${item.Specifications.battery}</p>
        <p>${item.Specifications.camera}</p>
        <p>${item.Specifications.ram}</p>
        <p>${item.Specifications.speaker}</p>
        <p>${item.Specifications.storage}</p>
      </div> 
    </div>
    <button class="close-btn">بستن</button>`;
    infoProductBlock.innerHTML = result;
    infoProductDOM.appendChild(infoProductBlock);
    infoProductDOM.classList.toggle("showInfoProductBlock");
    backdrop.classList.toggle("showBackdrop");
  });

  const closeBtn = document.querySelector(".close-btn");
  clsoeProductInfo(closeBtn);
};
const clsoeProductInfo = (button) => {
  button.addEventListener("click", () => {
    infoProductDOM.classList.remove("showInfoProductBlock");
    backdrop.classList.remove("showBackdrop");
  });
  backdrop.addEventListener("click", () => {
    infoProductDOM.classList.remove("showInfoProductBlock");
    backdrop.classList.remove("showBackdrop");
  });
};
export { mobiles };
