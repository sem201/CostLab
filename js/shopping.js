const product = JSON.parse(localStorage.getItem("productList"));
console.log(product);

const shopping = JSON.parse(localStorage.getItem("shoppingList"));

window.onload = () => {
  const ul = document.querySelector(".choose_list");
  console.log(ul);

  for (let item of product) {
    if (shopping.includes(String(item.id))) {
      const li = document.createElement("li");
      const img = document.createElement("img");
      img.setAttribute("src", `../img/${item.image}`);

      const goodsBox = document.createElement("div");
      goodsBox.classList.add("goods_box");
      const goodsDetail = document.createElement("div");
      goodsDetail.classList.add("goods_detail");
      goodsDetail.innerText = item.name;

      const goodsCount = document.createElement("div");
      goodsCount.classList.add("goods_count");
      goodsCount.innerText = 1;

      const goodsPrice = document.createElement("dvc");
      goodsPrice.classList.add("goods_price");
      goodsPrice.innerText = item.price;
      goodsBox.append(goodsDetail, goodsCount, goodsPrice);

      li.append(img, goodsBox);
      ul.append(li);
    }
  }
};
