$(document).ready(function () {
  $("#fullpage").fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    scrollOverflow: true,
  });
});

function showAlert() {
  Swal.fire({
    title: "쿠폰이 발급되었습니다!",
    text: "보관함을 확인하세요!",
    icon: "success",
    backdrop: true,
  });
}

function showFireworks() {
  const fireworksContainer = document.createElement("div");
  fireworksContainer.className = "fireworks-container";
  document.body.appendChild(fireworksContainer);

  for (let i = 0; i < 100; i++) {
    const firework = document.createElement("div");
    firework.className = "firework";
    firework.style.width = `${Math.random() * 10 + 5}px`;
    firework.style.height = firework.style.width;
    firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    firework.style.left = `${Math.random() * 100}vw`;
    firework.style.top = `${Math.random() * 100}vh`;
    firework.style.animationDelay = `${Math.random() * 2}s`;
    firework.style.transform = `translate(-50%, -50%)`;
    fireworksContainer.appendChild(firework);

    // 애니메이션 후 불꽃 제거
    firework.addEventListener("animationend", () => {
      firework.remove();
    });
  }

  // Remove fireworks container after all fireworks are done
  setTimeout(() => {
    fireworksContainer.remove();
  }, 3000);
}

// 페이지가 로드되면 폭죽을 주기적으로 터트리기 시작
document.addEventListener("DOMContentLoaded", () => {
  setInterval(showFireworks, 1000); // 1초마다 폭죽 터지기
});

// 여기서부터
// 집 아이콘 만들기

document.querySelector(".home-icon a").addEventListener("click", (e) => {
  e.preventDefault(); // 기본 링크 동작 방지

  // 부드러운 스크롤 애니메이션
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });

  // 잠시 후에 홈 페이지로 이동
  setTimeout(() => {
    window.location.href = "../index.html"; // 원하는 홈 페이지 URL로 수정
  }, 800);
});
