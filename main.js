"use strict";

const root = document.querySelector(".root");

async function getProductData() {
  const product = await fetch("http://test.api.weniv.co.kr/mall")
    .then((response) => {
      return response.json();
    })
    .catch((e) => {
      console.log(e);
    });

  return product;
}
