function createProductData() {
  const list = [
    {
      image: "image1.jpg",
      name: "상품 1",
      description: "이것은 상품 1의 설명입니다.",
      price: 10000,
      category: "전자제품",
    },
    {
      image: "image1.jpg",
      name: "상품 2",
      description: "이것은 상품 2의 설명입니다.",
      price: 20000,
      category: "가구",
    },
    {
      image: "image1.jpg",
      name: "상품 3",
      description: "이것은 상품 3의 설명입니다.",
      price: 30000,
      category: "의류",
    },
    {
      image: "image1.jpg",
      name: "상품 4",
      description: "이것은 상품 4의 설명입니다.",
      price: 40000,
      category: "식료품",
    },
    {
      image: "image1.jpg",
      name: "상품 5",
      description: "이것은 상품 5의 설명입니다.",
      price: 50000,
      category: "스포츠",
    },
    {
      image: "image1.jpg",
      name: "상품 6",
      description: "이것은 상품 6의 설명입니다.",
      price: 60000,
      category: "전자제품",
    },
    {
      image: "image1.jpg",
      name: "상품 7",
      description: "이것은 상품 7의 설명입니다.",
      price: 70000,
      category: "가구",
    },
    {
      image: "image1.jpg",
      name: "상품 8",
      description: "이것은 상품 8의 설명입니다.",
      price: 80000,
      category: "의류",
    },
    {
      image: "image1.jpg",
      name: "상품 9",
      description: "이것은 상품 9의 설명입니다.",
      price: 90000,
      category: "식료품",
    },
    {
      image: "image1.jpg",
      name: "상품 10",
      description: "이것은 상품 10의 설명입니다.",
      price: 100000,
      category: "스포츠",
    },
  ];
  console.log("ddd");

  localStorage.setItem("productList", JSON.stringify(list));
}
createProductData();
const products = JSON.parse(localStorage.getItem("productList"));
console.log(products);
console.log(products[0].image);

let ProductSlider = document.querySelector(".ProductSlider");

for (let i = 0; i < products.length; i++) {
  // 요소 생성
  const divBox = document.createElement("div");

  const img = document.createElement("img");
  img.setAttribute("src", `../img/${products[i].image}`);
  //요소.classlist.add(클래스명)
  const divBox2 = document.createElement("div");
  divBox2.innerHtml = products[i].name;
  const divBox3 = document.createElement("div");
  divBox3.innerHTML = products[i].description;
  const divBox4 = document.createElement("div");
  divBox4.innerHTML = products[i].price;
  const divBox5 = document.createElement("div");
  divBox5.innerHTML = products[i].category;

  divBox.append(img, divBox2, divBox3, divBox4, divBox5);
  console.log(divBox);
  ProductSlider.append(divBox);

  // 자식요소 추가 (요소.append(추가할 요소 ))
}
