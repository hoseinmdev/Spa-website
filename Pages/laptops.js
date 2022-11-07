const productsData = [
  {
    id: 1,
    title: "لپتاپ Asus ROG Strix",
    price: 39648000,
    imageURL: "../Accets/images/asus-rog-strix.png",
    Specifications: {
      cpu: "پردازنده / اینتل core i7",
      ram: "حافظه رم / 32 گیگابایت رم",
      gpu: "گرافیک / انویدیا GTX 1650Ti",
      storage: "حافظه داخلی / 1 ترابایت",
      Weight: "وزن / 2.39 کیلوگرم",
    },
  },
  {
    id: 2,
    title: "لپتاپ Macbook air 2020",
    price: 32599000,
    imageURL: "../Accets/images/macbook-air-2020.png",
    Specifications: {
      cpu: "پردازنده / 8 هسته ای Apple M1",
      ram: "حافظه رم / 8 گیگابایت رم",
      gpu: "گرافیک / 7 هسته ای",
      storage: "حافظه داخلی / 256 گیگابایت",
      Weight: "وزن / 1.29 کیلوگرم",
    },
  },
  {
    id: 3,
    title: "لپتاپ Asus TUF dash F15",
    price: 42899000,
    imageURL: "../Accets/images/asus-tuf-dash-F15.png",
    Specifications: {
      cpu: "پردازنده / اینتل core i7",
      ram: "حافظه رم / 16 گیگابایت رم",
      gpu: "گرافیک / انویدیا RTX 3060",
      storage: "حافظه داخلی / 1 ترابایت",
      Weight: "وزن / 2 کیلوگرم",
    },
  },
  {
    id: 4,
    title: "لپتاپ Asus TUF Gaming F15",
    price: 23899000,
    imageURL: "../Accets/images/Asus-TUF-Gaming-F15-FX506-idigi-768x768-1.png",
    Specifications: {
      cpu: "پردازنده / اینتل core i5",
      ram: "حافظه رم / 8 گیگابایت رم",
      gpu: "گرافیک / انویدیا GTX 1650 Ti",
      storage: "حافظه داخلی / 1256 گیگابایت",
      Weight: "وزن / 2.3 کیلوگرم",
    },
  },
  {
    id: 5,
    title: "لپتاپ Zenbook duo",
    price: 49199000,
    imageURL: "../Accets/images/zenbook.png",
    Specifications: {
      cpu: "پردازنده / اینتل core i7",
      ram: "حافظه رم / 16 گیگابایت رم",
      gpu: "گرافیک / انویدیا GeForce MX450",
      storage: "حافظه داخلی / 1 ترابایت",
      Weight: "وزن / 1.5 کیلوگرم",
    },
  },
  {
    id: 6,
    title: "لپتاپ Lenovo Thinkbook",
    price: 14800000,
    imageURL: "../Accets/images/lenovo-thinkbook.webp",
    Specifications: {
      cpu: "پردازنده / اینتل core i5",
      ram: "حافظه رم / 8 گیگابایت رم",
      gpu: "گرافیک / 2 گیگابایت از نوع GDDR5",
      storage: "حافظه داخلی / 1 ترابایت",
      Weight: "وزن / 1.7 کیلوگرم",
    },
  },
];
const backdrop = document.querySelector(".backdrop");
const productsDOM = document.querySelector(".products-block");
const infoProductDOM = document.querySelector(".infoProduct-block");

const laptops = () => {
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
        <p>${item.Specifications.ram}</p>
        <p>${item.Specifications.gpu}</p>
        <p>${item.Specifications.storage}</p>
        <p>${item.Specifications.Weight}</p>
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
export { laptops };
