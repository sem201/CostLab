// URL에서 productId를 가져옴

const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get(`id`), 10);

// 상품 상세 정보 렌더링

function renderProductDetail(product) {
  const productDetail = document.getElementById("product-detail");
  productDetail.innerHTML = `<div class="p-d-left"><img src="../img/${product.image}" alt="${product.name}"></div>
  </div>
  <div class="p-d-right">
  <h2>${product.name}</h2>
  <span>${product.description}</span>
  <p>가격 : <span id="price">${product.price}</span></p>
    <div class="quantity-container">
      <div class="quantity-inner">
        <button id="decrease"><i class="fa-solid fa-minus"></i></button>
        <input type="text" id="quantity" value="1" readonly>
        <button id="increase"><i class="fa-solid fa-plus"></i></button>
      </div>
      <p id="total-price">
      총 금액: <spa n id="total">${product.price}</spa></p>
    </div>
    <button onclick="addToCart(${product.id})" id="add-to-cart">장바구니</button>
  </div>`;
}

// 페이지 로드 시 상품 이미지, 정보 렌더링

window.onload = () => {
  const product = products.find((p) => p.id === productId);
  if (product) {
    // renderProductImg(product);
    renderProductDetail(product);
  } else {
    document.getElementById("product-detail").innerHTML =
      "이미지를 찾을 수 없습니다.";
  }

  // 클릭시 더하기, 빼기 및 +, -, 장바구니 추가 할 요소들 선언
  const decreaseBtn = document.getElementById("decrease");
  const increaseBtn = document.getElementById("increase");
  const quantityInput = document.getElementById("quantity");
  const totalPriceElement = document.getElementById("total");
  const priceElement = document.getElementById("price");
  const addToCartBtn = document.getElementById("add-to-cart");

  let productPrice = parseInt(product.price.replace(/[^0-9]/g, ""));
  // 초기 수량 설정
  let quantity = 1;
  console.log(productPrice);

  function updateTotalPrice() {
    totalPrice = productPrice * quantity;
    totalPriceElement.textContent = totalPrice.toLocaleString();
  }

  // - 버튼 클릭 시 수량 감소
  decreaseBtn.addEventListener("click", function () {
    if (quantity > 1) {
      quantity--;
      quantityInput.value = quantity;
      Number(updateTotalPrice());
    }
  });

  // + 버튼 클릭 시 수량 증가
  increaseBtn.addEventListener("click", function () {
    quantity++;
    quantityInput.value = quantity;
    `${Number(updateTotalPrice())}원`;
  });

  addToCartBtn.addEventListener("click", function () {
    Swal.fire("장바구니에 담았습니다!");
  });

  addToCartBtn.addEventListener("mousedown", function () {
    addToCartBtn.style.transform = "scale(0.9)";
  });

  // 버튼을 떼면 scale 원상복구
  addToCartBtn.addEventListener("mouseup", function () {
    addToCartBtn.style.transform = "scale(1)";
  });

  // 페이지 로드 시 총 가격 계산
  Number(updateTotalPrice());

  // 댓글을 추가 할 때 필요한 요소 선언
  const commentInput = document.getElementById("comment-input");
  const commentButton = document.getElementById("comment-button");
  const commentList = document.getElementById("comment-list");

  // 댓글을 리스트에 추가하는 함수
  function addCommentToList(comment) {
    const li = document.createElement("li");
    li.textContent = comment;
    commentList.appendChild(li);
  }

  // 댓글 등록 버튼 클릭 이벤트
  commentButton.addEventListener("click", function () {
    const comment = commentInput.value.trim();
    commentInput.value = "";

    // 버튼 클릭 시 scale 작아지게
    commentButton.addEventListener("mousedown", function () {
      commentButton.style.transform = "scale(0.9)";
    });

    // 버튼을 떼면 scale 원상복구
    commentButton.addEventListener("mouseup", function () {
      commentButton.style.transform = "scale(1)";
    });

    if (comment) {
      // 댓글 목록에 추가하고
      addCommentToList(comment);
    } else {
      alert("댓글을 입력하세요.");
    }
  });

  const commentTab = document.getElementById("comment-tab");
  const diliveryTab = document.getElementById("dilivery-tab");
  const commentContent = document.getElementById("comment");
  const diliveryContent = document.getElementById("dilivery");

  commentTab.addEventListener("click", function () {
    // 상품 후기 콘텐츠 표시
    commentContent.style.display = "block";
    diliveryContent.style.display = "none";
    commentTab.style.background = "#80c342";
    commentTab.style.color = "#ffffff";
    diliveryTab.style.background = "#f1f1f1";
    diliveryTab.style.color = "#000000";

    commentContent.classList.add("active");
    diliveryContent.classList.remove("active");
  });

  diliveryTab.addEventListener("click", function () {
    // 배송 안내 콘텐츠 표시
    diliveryContent.style.display = "block";
    commentContent.style.display = "none";
    diliveryTab.style.background = "#80c342";
    diliveryTab.style.color = "#ffffff";
    commentTab.style.background = "#f1f1f1";
    commentTab.style.color = "#000000";

    diliveryContent.classList.add("active");
    commentContent.classList.remove("active");
  });
};

// 장바구니 담기
function addToCart() {
  // 로컬스토리지에서 기존 장바구니 데이터를 가져옴
  let shoppingList = localStorage.getItem("shoppingList");

  shoppingList = shoppingList ? JSON.parse(shoppingList) : [];
  let id = urlParams.get("id");
  let productCount = document.querySelector("#quantity").value;

  // 상품이 이미 장바구니에 있는지 확인
  const existingProductIndex = shoppingList.findIndex((item) => item[0] === id);

  if (existingProductIndex !== -1) {
    // 상품이 이미 있는 경우, 수량 업데이트
    shoppingList[existingProductIndex][1] = productCount;
  } else {
    // 상품이 없는 경우, 새로 추가
    shoppingList.push([id, productCount]);
  }

  console.log(shoppingList);
  localStorage.setItem("shoppingList", JSON.stringify(shoppingList)); // 다시 로컬스토리지에 저장
}
