$(document).ready(function () {
  $("#fullpage").fullpage({
    //options here
    autoScrolling: true,
    // scrollHorizontally: true,
    // navigation: true,
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
