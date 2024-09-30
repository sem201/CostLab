// 로컬 스토리지에서 상품 데이터 가져오기

const products = JSON.prase(localStorage.getItem(`productList`));

// URL에서 productId를 가져옴

const urlParams = new URLSearchParams(window.location.search);
const productId = praseInt(urlParams.get(`id`), 10);

// 상품 상세 정보 렌더링

function renderProductDetail(product) {
  const productDetail = document.getElementById("product-detail");
  productDetail.innerHTML = `<img src="${products.image}" alt="${products.name}">
  <h2>${products.name}</h2>
  <p>가격 : ${products.price.toLocaleString}원</p>
  <p>${products.description}</p>
  <button onclick="addToCart(${products.id})">장바구니</button>`;
}

// 페이지 로드 시 상품 이미지, 정보 렌더링

window.onload = () => {
  const product = products.find((p) => p.id === productId);
  if (product) {
    renderProductImg(product);
    renderProductDetail(product);
  } else {
    document.getElementById("product-detail").innerHTML =
      "이미지를 찾을 수 없습니다.";
  }
};
