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

  localStorage.setItem("productList", JSON.stringify(list));
}
createProductData();
const products = JSON.parse(localStorage.getItem("productList"));
