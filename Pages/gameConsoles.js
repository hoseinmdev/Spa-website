const productsData = [
  {
    id: 1,
    title: "کنسول بازی Play Station 5",
    price: 22399000,
    imageURL: "../Accets/images/Playstation-5.webp",
    Specifications: {
      cpu: "پردازنده / 8 هسته ای ذن",
      ram: "حافظه رم / 16 گیگابایت رم",
      camera: "خروجی تصویر / 4K , 8K",
      storage: "حافظه داخلی / 825 گیگابایت",
      Weight: "وزن / 4.5 کیلوگرم",
    },
  },
  {
    id: 2,
    title: "کنسول بازی Xbox Seires s",
    price: 10170000,
    imageURL: "../Accets/images/Xbox-Series-S.webp",
    Specifications: {
      cpu: "پردازنده / شخصی سازی شده Zen2",
      ram: "حافظه رم / 10 گیگابایت رم",
      camera: "خروجی تصویر / QHD",
      storage: "حافظه داخلی / 500 گیگابایت SSD",
      Weight: "وزن / 1.93 کیلوگرم",
    },
  },
  {
    id: 3,
    title: "کنسول بازی Play Station 4",
    price: 15750000,
    imageURL: "../Accets/images/Playstation-4.png",
    Specifications: {
      cpu: "پردازنده / 8 هسته ای AMD",
      ram: "حافظه رم / 8 گیگابایت رم",
      camera: "خروجی تصویر / 1080p",
      storage: "حافظه داخلی / 500 گیگابایت",
      Weight: "وزن / 2.08 کیلوگرم",
    },
  },
  {
    id: 4,
    title: "کنسول بازی Xbox وان اس",
    price: 8300000,
    imageURL: "../Accets/images/Xbox-one-s.png",
    Specifications: {
      cpu: "پردازنده / 8 هسته ای AMD",
      ram: "حافظه رم / 8 گیگابایت رم",
      camera: "خروجی تصویر / 4K",
      storage: "حافظه داخلی / 1 ترابایت",
      Weight: "وزن / 2.9 کیلوگرم",
    },
  },
];
const backdrop = document.querySelector(".backdrop");
const productsDOM = document.querySelector(".products-block");
const infoProductDOM = document.querySelector(".infoProduct-block");

const gameConsoles = () => {
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
        <p>${item.Specifications.cpu}</p>
        <p>${item.Specifications.camera}</p>
        <p>${item.Specifications.ram}</p>
        <p>${item.Specifications.Weight}</p>
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
export { gameConsoles };
