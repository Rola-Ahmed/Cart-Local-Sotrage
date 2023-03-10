let productList = [];
if (localStorage.getItem("AllProducts") !== null) {
  productList = JSON.parse(localStorage.getItem("AllProducts"));
}

function SavedProduct_LocalStorage() {
  productList = localStorage.getItem("AllProducts");
  productList = JSON.parse(productList);
  console.log(productList);

  const urlParams = new URLSearchParams(window.location.search);
  const idValue = urlParams.get("productid");
  console.log(idValue);

  let containers = ``;

  for (let i = 0; i < productList.length; i++) {
    console.log(productList[i].product_name);
    console.log(containers);
    if (productList[i].id == idValue) {
      containers += `<div class="collection-localstorage">
       <div class="image-container"> 
        <img
       id="product_image"
       name="product_image"
       src="${productList[i].product_image}"
       alt="${productList[i].product_name}"
     /></div>
        <div class="image-detials">
          <h1 id="product_name">${productList[i].product_name}</h1>
          <h4 id="product_price">${productList[i].product_price} EGY</h4>
          <h3 id='product_description'>${productList[i].product_description}</h3>
        </div>
        
      </div>`;
      //   break;
      console.log(containers);
      break;
    }
    document.getElementById("quickmore_container").innerHTML = containers;
  }
  //${element.product_image},${element.product_name},${element.product_price},${element.product_description}

  document.getElementById("quickmore_container").innerHTML = containers;
  // console.log("containers", containers);
}

SavedProduct_LocalStorage();
