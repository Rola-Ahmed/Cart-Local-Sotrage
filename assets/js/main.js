// created an aray of object that contains the prodcut
let products = [
  {
    id: 1,
    product_name: "HP Core I5",
    product_price: 500,
    product_image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNtYXJ0JTIwZGV2aWNlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    product_description:
      "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classica",
  },
  {
    id: 2,
    product_name: "Apple",
    product_price: 2000,
    product_image: "https://images.unsplash.com/photo-1598516802414-50a01bee818d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    product_description:
      "Is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    id: 3,
    product_name: "HP Core I7",
    product_price: 1500,
    product_image: "https://images.unsplash.com/photo-1469964117921-4b137ced3d4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    product_description:
      "Where does it come from? Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classica",
  },
  {
    id: 4,
    product_name: "Dell",
    product_price: 1800,
    //product_image: "../../assets/images/4-air_pods_3.jpg",
      product_image: "https://images.unsplash.com/photo-1587826154528-f1adec0a4653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=805&q=80",
    product_description:
      "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    id: 5,
    product_name: "Dell Version 5",
    product_price: 1200,
    product_image: "https://plus.unsplash.com/premium_photo-1682434334280-74509045a102?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
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
// created an aray of object that contains the products that will be added to cart only
let productList = [];

// created localstorage for all the product
localStorage.setItem("AllProducts", JSON.stringify(products));

// checking if the localstorage is empty or no
if (localStorage.getItem(" Products ") !== null) {
  productList = JSON.parse(localStorage.getItem(" Products "));
}

//display all my products  on the browser
function diplayProduct() {
  let container = ``;
  let value = "Add to Cart";
  let classname = "addToCart";
  for (const element of products) {
    if (productList.find((item) => item.id - 1 == element.id - 1)) {
      console.log("display-remove", element.id);
      value = "Remove from Cart";
      classname = "danger";
    }
    container += `<div class="collection-container">
      <img
        id="product_image"
        name="product_image"
        src="${element.product_image}"
        alt="${element.product_name}"
      />
      <h3 id="product_name">${element.product_name}</h3>
      <h4 id="product_price">${element.product_price} EGY</h4>
      
      <button   onclick='addToCart(${element.id})'  id="addToCart" class='addToCart ${classname}' type="submit">${value}</button>
  
      <button  onclick='ViewMore(${element.id})'id="quick_view" type="submit">Quick View</button>
     
    </div>`;
    value = "Add to Cart";
    classname = "addToCart";
  }
  document.getElementById("container").innerHTML = container;
  SavedProduct_LocalStorage();
}
diplayProduct();

//select all the buttons that addes the prodcut to the cart
let addToCartBtn = document.querySelectorAll(".addToCart");

//when the user adds or removes a prodact,
function addToCart(index) {
  let addToCartBtn = document.querySelectorAll(".addToCart")[index - 1];

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
  localStorage.setItem(" Products ", JSON.stringify(productList));
  SavedProduct_LocalStorage();
}

///when the user adds or removes a prodact, the cart should update in the cart and localstorage
function SavedProduct_LocalStorage() {
  let counter = document
    .querySelector(".fa-stack.fa-2x.has-badge")
    // .getAttribute("data-count");

    .setAttribute("data-count", productList.length);
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

  document.getElementById("dropdownContent").innerHTML = containers;
}
SavedProduct_LocalStorage();

//when the user clicks on view more the product will open in a new tab with more detials
function ViewMore(id, image) {
  window.open("quickmore.html?productid=" + id); ///, self
}
