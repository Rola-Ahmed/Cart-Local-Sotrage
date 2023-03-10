// created an aray of object that contains the prodcut
let products = [
  {
    id: 1,
    product_name: "HP Core I5",
    product_price: 500,
    product_image: "../../assets/images/1-air_pods_2.jpg",
    product_description:
      "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classica",
  },
  {
    id: 2,
    product_name: "Apple",
    product_price: 2000,
    product_image: "../../assets/images/2-air_pods_1.jpg",
    product_description:
      "Is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    id: 3,
    product_name: "HP Core I7",
    product_price: 1500,
    product_image: "../../assets/images/3-camera_1.jpg",
    product_description:
      "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classica",
  },
  {
    id: 4,
    product_name: "Dell",
    product_price: 1800,
    product_image: "../../assets/images/4-air_pods_3.jpg",
    product_description:
      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    id: 5,
    product_name: "Dell Version 5",
    product_price: 1200,
    product_image: "../../assets/images/5-mobile_stand_1.jpg",
    product_description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t'ype specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 6,
    product_name: "Dell Version 5",
    product_price: 1200,
    product_image:
      "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=600",

    product_description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t'ype specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
  {
    id: 7,
    product_name: "Dell Version 5",
    product_price: 1200,
    product_image:
      "https://images.pexels.com/photos/1006293/pexels-photo-1006293.jpeg?auto=compress&cs=tinysrgb&w=600",

    product_description:
      "Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a t'ype specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
  },
];
let productList = [];

localStorage.setItem("AllProducts", JSON.stringify(products));

if (localStorage.getItem(" Products ") !== null) {
  productList = JSON.parse(localStorage.getItem(" Products "));
}

console.log(productList.length);
console.log(productList);
//display all my products  on the browser

function diplayProduct() {
  let container = ``;
  let value = "Add to Cart";
  let classname = "addToCart";
  for (let i = 0; i < products.length; i++) {
    if (productList.find((item) => item.id - 1 == products[i].id - 1)) {
      console.log("display-remove", products[i].id);
      value = "Remove from Cart";
      classname = "danger";
    }
    container += `<div class="collection-container">
      <img
        id="product_image"
        name="product_image"
        src="${products[i].product_image}"
        alt="${products[i].product_name}"
      />
      <h3 id="product_name">${products[i].product_name}</h3>
      <h4 id="product_price">${products[i].product_price} EGY</h4>
      
      <button   onclick='addToCart(${products[i].id})'  id="addToCart" class='addToCart ${classname}' type="submit">${value}</button>
  
      <button  onclick='ViewMore(${products[i].id})'id="quick_view" type="submit">Quick View</button>
     
    </div>`;
    value = "Add to Cart";
    classname = "addToCart";
  }
  document.getElementById("container").innerHTML = container;
  SavedProduct_LocalStorage();
}
diplayProduct();

// let addToCartBtn = document.getElementById("addToCart");
let addToCartBtn = document.querySelectorAll(".addToCart");
// console.log(addToCartBtn);

function addToCart(index) {
  let addToCartBtn = document.querySelectorAll(".addToCart")[index - 1];

  // console.log("addToCartBtn in the function ", addToCartBtn);
  // console.log(addToCartBtn.innerHTML);

  if (addToCartBtn.innerHTML === "Add to Cart") {
    productList.push(products[index - 1]);

    addToCartBtn.innerHTML = "Remove from Cart";
    addToCartBtn.classList.add("danger");

    console.log(" added index ", index);
  } else {
    productList.splice(
      productList.findIndex(function (i) {
        return i.id === index;
      }),
      1
    );

    addToCartBtn.innerHTML = "Add to Cart";
    addToCartBtn.classList.remove("danger");
    console.log(" removed index ", index - 1);
  }
  console.log(productList);
  console.log(productList[index - 1]);
  // console.log(productList[index].id);
  localStorage.setItem(" Products ", JSON.stringify(productList));
  SavedProduct_LocalStorage();
}

function SavedProduct_LocalStorage() {
  let counter = document
    .querySelector(".fa-stack.fa-2x.has-badge")
    // .getAttribute("data-count");

    .setAttribute("data-count", productList.length);
  // console.log(counter);
  // counter = productList.length;
  // console.log(counter);
  // counter.value = productList.length;
  let containers = ``;
  console.log("productList", productList.length);
  console.log("productList", productList);
  for (const element of productList) {
    containers += `<div class="collection-localstorage">
      <img
        id="product_image"
        name="product_image"
        src="${element.product_image}"
        alt="${element.product_name}"
      />
      <div class="image-detials">
        <h3 id="product_name">${element.product_name}</h3>
        <h4 id="product_price">${element.product_price} EGY</h4>
        <button onclick='addToCart(${element.id})' class='danger'  id="button_cart" type="submit">
        Remove from Cart
        </button>
        <button  onclick='ViewMore(${element.id})' id="quick_view" type="submit">
          Quick View
        </button>
      </div>
      
    </div>`;
  }
  //${element.product_image},${element.product_name},${element.product_price},${element.product_description}

  document.getElementById("dropdownContent").innerHTML = containers;
  // console.log("containers", containers);
}
SavedProduct_LocalStorage();

function isEmpty(obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) return false; //hass property
  }
  return true;
}

function ViewMore(id, image) {
  window.open("quickmore.html?productid=" + id); ///, self
}
