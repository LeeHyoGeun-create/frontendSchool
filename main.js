"use strict";

const root = document.querySelector(".root");

async function getProductData() {
  const product = await fetch("http://test.api.weniv.co.kr/mall")
    .then((response) => response.json())
    .catch((e) => {
      console.log(e);
    });

  return product;
}

getProductData().then((product) => {
  // console.log(product);
  const mainElement = document.createElement("main");
  mainElement.classList.add("product");
  // console.log(mainElement);

  const productPageHeader = document.createElement("h1");
  productPageHeader.classList.add("ir");
  productPageHeader.innerText = "상품목록 페이지";
  mainElement.appendChild(productPageHeader);

  const productList = document.createElement("ul");
  productList.classList.add("product-list");
  mainElement.appendChild(productList);

  product.forEach((item) => {
    // console.log(item);
    const productDetailLink = document.createElement("a");
    productDetailLink.href = `/detail/${item.id}`;
    productDetailLink.innerHTML = `
      <li class='product-item'>
        <div className="product-img">
          <img src="http://test.api.weniv.co.kr/${item.thumbnailImg}">
        </div>
        <strong class="product-name">${item.productName}</strong>
        <button ><i class="fa-regular fa-thumbs-up"></i></button>  
        <div className="product-price">
          <strong>${item.price}<span>원</span></strong>
        </div>
      </li>
    `;
    productList.append(productDetailLink);
  });

  root.append(mainElement);
});
