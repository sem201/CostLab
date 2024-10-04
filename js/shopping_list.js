function createProductData() {
  const list = [
    {
      id: 1,
      image: "image1.webp",
      id: 1,
      image: "image1.webp",
      name: "아이배냇 한끼 영양밥 쇠고기시금치150g x 6",
      description:
        "영양 가득 소고기와 시금치로 맛있는 한 끼가 뚝딱 해결되고 국내산 원재료와 우리 콩 간장, 올리고당으로 더욱 맛있는 3세 이상 아이부터 어른까지 맛있게 드실 수 있는 한 끼 영양밥입니다.",
      price: "11,900원",
      category: "식료품",
    },
    {
      id: 2,
      image: "image2.webp",
      id: 2,
      image: "image2.webp",
      name: "동원 들깨 칼국수 258g x 4",
      description:
        "사골육수에 껍질을 제거한 들깨가루를 첨가한 부드러운 국물 맛의 들깨 칼국수입니다.",
      price: "11,990원",
      category: "식료품",
    },
    {
      id: 3,
      image: "image3.webp",
      id: 3,
      image: "image3.webp",
      name: "동원 양반 차돌 육개장 460g x 5",
      description: "재료가 살아 있는 동원F&B 양반 차돌 육개장입니다.",
      price: "12,490원",
      category: "식료품",
    },
    {
      id: 4,
      image: "image4.webp",
      id: 4,
      image: "image4.webp",
      name: "동원 양반 백합 미역국 460g x 5",
      description: "재료가 살아 있는 동원F&B 양반 백합미역국입니다.",
      price: "12,490원",
      category: "식료품",
    },
    {
      id: 5,
      image: "image5.webp",
      id: 5,
      image: "image5.webp",
      name: "동원 면발의신 해물칼국수 236g x 4",
      description:
        "멸치와 바지락으로 시원한 육수의 맛을 살린 해물칼국수입니다.",
      price: "13,990원",
      category: "식료품",
    },
    {
      id: 6,
      image: "image6.webp",
      name: "Apple 맥북 에어 15",
      description:
        "놀랍도록  얇고 엄청나게 빠른 MacBook Air를 이제 두 가지 사이즈와 네 가지 컬러로 만나볼 수 있습니다. 당시에게 꼭 맞는 Air를 선택하세요.",
      price: "1,609,000원",
      category: "가전",
    },
    {
      id: 7,
      image: "image7.webp",
      name: "삼성 QLED TV",
      description:
        "'공간과 잘 어우러지는 에어슬림 디자인' 첨단 기술을 담고도 얇고 슬립합니다. 덕분에 거실, 방 안 어디에 두어도 예술 작품처럼 공간에 조화롭게 어우러집니다.",
      price: "3,799,000원",
      category: "가전",
      id: 7,
      image: "image7.webp",
      name: "삼성 QLED TV",
      description:
        "'공간과 잘 어우러지는 에어슬림 디자인' 첨단 기술을 담고도 얇고 슬립합니다. 덕분에 거실, 방 안 어디에 두어도 예술 작품처럼 공간에 조화롭게 어우러집니다.",
      price: "3,799,000원",
      category: "가전",
    },
    {
      id: 8,
      image: "image8.webp",
      name: "엡손 잉크젯 복합기",
      description: "앱손 스마트 패널 앱을 통한 쉬운 연결, 다양한 활용",
      price: "233,900원",
      category: "가전",
      id: 8,
      image: "image8.webp",
      name: "엡손 잉크젯 복합기",
      description: "앱손 스마트 패널 앱을 통한 쉬운 연결, 다양한 활용",
      price: "233,900원",
      category: "가전",
    },
    {
      id: 9,
      image: "image9.webp",
      name: "엘지 오브제 더블매직스페이스 냉장고",
      description: "프리미엄 소재부터 컬러까지 어디에나 자연스럽게 아름답게",
      price: "3,449,000원",
      category: "가전",
      id: 9,
      image: "image9.webp",
      name: "엘지 오브제 더블매직스페이스 냉장고",
      description: "프리미엄 소재부터 컬러까지 어디에나 자연스럽게 아름답게",
      price: "3,449,000원",
      category: "가전",
    },
    {
      id: 10,
      image: "image10.webp",
      name: "러셀 홉스 전자동 커피 머신",
      description: "원터치로 시작하는 홈 카페",
      price: "369,900원",
      category: "가전",
      id: 10,
      image: "image10.webp",
      name: "러셀 홉스 전자동 커피 머신",
      description: "원터치로 시작하는 홈 카페",
      price: "369,900원",
      category: "가전",
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
  divBox.classList.add("card");
  console.log(products[i].name);
  const divBox1 = document.createElement("div");
  const img = document.createElement("img");
  img.setAttribute("src", `../img/${products[i].image}`);
  divBox1.append(img);
  divBox1.classList.add("image");
  //요소.classlist.add(클래스명)
  const divBox2 = document.createElement("div");
  divBox2.innerText = products[i].name;
  divBox2.classList.add("name");

  const divBox4 = document.createElement("div");
  divBox4.innerHTML = products[i].price;
  divBox4.classList.add("price");

  divBox.append(divBox1, divBox2, divBox4);
  divBox.addEventListener("click", function () {
    window.location.href = `html/particuler_page.html?id=${products[i].id}`;
  });
  ProductSlider.append(divBox);

  // 자식요소 추가 (요소.append(추가할 요소 ))
}
