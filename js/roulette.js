const results = [
  "Prize 1",
  "Prize 2",
  "Prize 3",
  "Prize 4",
  "Prize 5",
  "Prize 6",
]; // 룰렛 결과 목록
let spinning = false;

function spin() {
  if (spinning) return; // 이미 돌고 있으면 멈춤
  spinning = true;
  const arrow = document.getElementById("arrow");
  const button = document.getElementById("spinButton");
  const randomDegree = Math.floor(Math.random() * 360) + 3600; // 최소 3600도 (10바퀴) + 추가 회전

  // 화살표 회전 애니메이션 설정
  arrow.style.transition = "transform 4s ease-out";
  arrow.style.transform = `translate(-50%, -100%) rotate(${randomDegree}deg)`;

  // 버튼 비활성화
  button.disabled = true;

  // 멈추고 결과 알림창 띄우기
  setTimeout(() => {
    spinning = false;
    const index = Math.floor((randomDegree % 360) / 60); // 섹션이 6개로 가정
    alert(`You won: ${results[index]}`);
  }, 4000);
}
