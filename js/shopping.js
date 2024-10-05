const product = JSON.parse(localStorage.getItem("productList"));

const shopping = JSON.parse(localStorage.getItem("shoppingList"));
let userDeliveryPrice;
window.onload = () => {
  const ul = document.querySelector(".choose_list");
  const empty = document.querySelector(".empty");
  const deliveryPrice = document.querySelector("#delivery_price");
  let sum = 0;
  const shopping = JSON.parse(localStorage.getItem("shoppingList")) || [];
  if (shopping.length > 0) {
    userDeliveryPrice = 3000;
    deliveryPrice.innerText = `${userDeliveryPrice.toLocaleString()}원`;
    shopping.forEach((shoppingItem) => {
      const shoppingId = parseInt(shoppingItem[0]); // 첫 번째 인덱스 값
      const item = product.find((p) => p.id === shoppingId); // 해당 id와 일치하는 상품 찾기
      const productCount = parseInt(shoppingItem[1]);
      if (item) {
        const li = document.createElement("li");
        li.setAttribute("data-id", shoppingId);
        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");
        input.checked = true;

        const img = document.createElement("img");
        img.src = `../img/${item.image}`;

        const goodsBox = document.createElement("div");
        goodsBox.classList.add("goods_box");

        const goodsDetail = document.createElement("div");
        goodsDetail.classList.add("goods_detail");
        goodsDetail.innerText = item.name;

        const goodsCount = document.createElement("div");
        goodsCount.classList.add("goods_count");
        goodsCount.innerText = `${productCount}개`;

        const goodsPrice = document.createElement("div");
        goodsPrice.classList.add("goods_price");

        const button = document.createElement("button");
        button.classList.add("goods_delete");
        button.innerText = "상품삭제";

        button.addEventListener("click", function () {
          const itemIndex = shopping.findIndex(
            (shoppingItem) => shoppingItem[0] === shoppingId.toString()
          );
          shopping.splice(itemIndex, 1);
          localStorage.setItem("shoppingList", JSON.stringify(shopping));
          li.remove();
          updateTotal();
        });

        let productPrice = parseInt(item.price.replace(/[^0-9]/g, ""));
        sum += productPrice;

        goodsPrice.innerText = `${(
          productPrice * productCount
        ).toLocaleString()}원`;
        goodsBox.append(goodsDetail, goodsCount, goodsPrice);
        li.append(input, img, goodsBox, button);
        ul.append(li);
        input.addEventListener("change", updateTotal);
      }
    });
  } else {
    empty.innerHTML = `<img src="../img/cart_no.gif" style="width:600px; height:auto; margin-top:60px;;"></img>`;
    userDeliveryPrice = 0;
    deliveryPrice.innerText = `${userDeliveryPrice}원`;
  }
  // 총 가격 가져오기
  const totalProductPrice = document.querySelector("#total_product_price");
  totalProductPrice.innerText = `${sum.toLocaleString()}원`;
  const totalPrice = document.querySelector("#total_price");

  totalPrice.innerText = `${(sum - userDeliveryPrice).toLocaleString()}원`;
  updateTotal();
  function updateTotal() {
    let sum = 0;
    let checkedCount = 0;
    document.querySelectorAll(".choose_list li").forEach((li) => {
      const checkbox = li.querySelector("input[type='checkbox']");

      if (checkbox.checked) {
        checkedCount++;
        const shoppingId = parseInt(li.getAttribute("data-id"));
        const item = product.find((p) => p.id === shoppingId);
        const productCount = shopping.find(
          (s) => parseInt(s[0]) === shoppingId
        )[1];

        const itemPrice = parseInt(item.price.replace(/[^0-9]/g, ""));
        sum += itemPrice * productCount;
        console.log(itemPrice);
        console.log(productCount);
        console.log(sum);
      }
    });
    if (checkedCount === 0) {
      userDeliveryPrice = 0;
      deliveryPrice.innerText = `${userDeliveryPrice}원`;
    } else {
      userDeliveryPrice = 3000;
      deliveryPrice.innerText = `${userDeliveryPrice}원`;
    }
    totalProductPrice.innerText = `${sum.toLocaleString()}원`;
    totalPrice.innerText = `${(sum + userDeliveryPrice).toLocaleString()}원`;
  }
  // 이전 코드
  // for (let item of product) {
  //   if (shopping.includes(String(item.id))) {
  //     const li = document.createElement("li");
  //     const img = document.createElement("img");
  //     img.setAttribute("src", `../img/${item.image}`);

  //     const goodsBox = document.createElement("div");
  //     goodsBox.classList.add("goods_box");
  //     const goodsDetail = document.createElement("div");
  //     goodsDetail.classList.add("goods_detail");
  //     goodsDetail.innerText = item.name;

  //     const goodsCount = document.createElement("div");
  //     goodsCount.classList.add("goods_count");
  //     goodsCount.innerText = 1;

  //     const goodsPrice = document.createElement("div");
  //     goodsPrice.classList.add("goods_price");
  //     goodsPrice.innerText = item.price;
  //     goodsBox.append(goodsDetail, goodsCount, goodsPrice);

  //     li.append(img, goodsBox);
  //     ul.append(li);
  //   }
  // }
};

const deliveryButtons = document.querySelectorAll(".deliveryBtn");

deliveryButtons.forEach((button) => {
  button.addEventListener("click", function () {
    if (this.classList.contains("choose")) {
      return;
    }

    this.classList.add("choose");
    this.classList.remove("none");

    deliveryButtons.forEach((btn) => {
      if (btn !== this) {
        btn.classList.remove("choose");
        btn.classList.add("none");
      }
    });
  });
});
