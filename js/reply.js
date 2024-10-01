const commentInput = document.getElementById("comment-input");
const commentButton = document.getElementById("comment-button");
const commentList = document.getElementById("comment-list");

// 댓글 목록 로컬 스토리지에서 불러오기
function localComments() {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  comments.forEach((comment) => addCommentToList(comment));
}

// 댓글 목록 저장하기
function saveComment(comment) {
  const comments = JSON.parse(localStorage.getItem("comments")) || [];
  comment.push(comment);
  localStorage.setItem("comments", JSON.stringify(comments));
}

// 댓글을 리스트에 추가하는 함수
function addCommentToList(comment) {
  const li = document.createElement("li");
  li.textContent = comment;
  commentList.appendChild(li);
}

// 댓글 등록 버튼 클릭 이벤트
commentButton.addEventListener("click", function () {
  const comment = commentInput.value.trim();

  if (comment) {
    // 댓글 목록에 추가하고 로컬 스토리지에 저장
    addCommentToList(comment);
    saveComment(comment);

    // 입력 필드를 비우기
    commentInput.value = "";
  } else {
    alert("댓글을 입력하세요.");
  }
});

// 페이지 로드 시 댓글 로드
window.onload = function () {
  loadComments();
};
