$(document).ready(function () {
  $("#fullpage").fullpage({
    autoScrolling: true,
    scrollHorizontally: true,
    navigation: true,
    scrollOverflow: true, // 이 옵션을 추가
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
