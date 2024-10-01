function createProductData() {
  const list = [
    {
      image: "image1.jpg",
      name: "아이배냇 한끼 영양밥 쇠고기시금치150g x 6",
      description:
        "영양 가득 소고기와 시금치로 맛있는 한 끼가 뚝딱 해결되고 국내산 원재료와 우리 콩 간장, 올리고당으로 더욱 맛있는 3세 이상 아이부터 어른까지 맛있게 드실 수 있는 한 끼 영양밥입니다.",
      price: 11900,
      category: "식료품",
    },
    {
      image: "image2.jpg",
      name: "동원 들깨 칼국수 258g x 4",
      description:
        "사골육수에 껍질을 제거한 들깨가루를 첨가한 부드러운 국물 맛의 들깨 칼국수입니다.",
      price: 11990,
      category: "식료품",
    },
    {
      image: "image3.jpg",
      name: "동원 양반 차돌 육개장 460g x 5",
      description: "재료가 살아 있는 동원F&B 양반 차돌 육개장입니다.",
      price: 12490,
      category: "식료품",
    },
    {
      image: "image4.jpg",
      name: "동원 양반 백합 미역국 460g x 5",
      description: "재료가 살아 있는 동원F&B 양반 백합미역국입니다.",
      price: 12490,
      category: "식료품",
    },
    {
      image: "image5.jpg",
      name: "동원 면발의신 해물칼국수 236g x 4",
      description:
        "멸치와 바지락으로 시원한 육수의 맛을 살린 해물칼국수입니다.",
      price: 13990,
      category: "식료품",
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

  localStorage.setItem("productList", JSON.stringify(list));
}
createProductData();
const products = JSON.parse(localStorage.getItem("productList"));

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
