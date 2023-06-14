// document.getElementById("search_btn").addEventListener('click', search_message);

// function search_message(){
//     let search_str = document.querySelector("#search_txt");
//     if(search_str.value.length === 0){ // 문자 길이, 엄격한 비교
//        alert("검색어가 비었습니다. 입력해주세요"); 
//     }
//     else{
//        alert("검색을 수행합니다!");
//        let text = document.getElementById("search_message").innerHTML = search_str.value;
//        document.querySelector("#form_main").submit();
//     }
// }


// document.getElementById("search_btn").addEventListener('click', search_message);

// function search_message() {
//    let search_str = document.querySelector("#search_txt");
   
//    // 필터링할 단어 초기화
//    const forbiddenWords = ["비속어1", "비속어2", "비속어3"];
   
//    if (search_str.value.length === 0) {
//       alert("검색어가 비었습니다. 입력해주세요"); 
//    } else if (containsForbiddenWord(search_str.value, forbiddenWords)) {
//       alert("검색어에 비속어가 포함되어 있거나 다른 문자가 포함되어 있습니다. 다른 검색어를 입력해주세요.");
//    } else {
//       alert("검색을 수행합니다!");
//       document.getElementById("search_message").innerHTML = search_str.value;
//       document.querySelector("#form_main").submit();
//    }
// }

// // 비속어나 다른 문자가 포함되었는지 확인하는 함수
// function containsForbiddenWord(search_str, forbiddenWords) {
//    for (let i = 0; i < forbiddenWords.length; i++) {
//       if (search_str.includes(forbiddenWords[i])) {
//          return true;
//       }
//    }
//    return false;
// }

// 필터링할 단어 초기화
const forbiddenWords = ["비속어1", "비속어2", "비속어3"];

// 검색어 목록 배열
let searchHistory = [];

document.getElementById("search_btn").addEventListener('click', search_message);

function search_message() {
   let search_str = document.querySelector("#search_txt");

   if (search_str.value.length === 0) {
      alert("검색어가 비었습니다. 입력해주세요"); 
   } else if (containsForbiddenWord(search_str.value, forbiddenWords)) {
      alert("검색어에 비속어가 포함되어 있거나 다른 문자가 포함되어 있습니다. 다른 검색어를 입력해주세요.");
   } else {
      alert("검색을 수행합니다!");
      document.getElementById("search_message").innerHTML = search_str.value;
      document.querySelector("#form_main").submit();

      // 검색어를 검색어 목록 배열에 추가
      searchHistory.push(search_str.value);

      // 검색어 목록이 10개를 초과하는 경우, 맨 앞의 검색어 삭제
      if (searchHistory.length > 10) {
         searchHistory.shift();
      }
   }
}

// 비속어나 다른 문자가 포함되었는지 확인하는 함수
function containsForbiddenWord(search_str, forbiddenWords) {
   for (let i = 0; i < forbiddenWords.length; i++) {
      if (search_str.includes(forbiddenWords[i])) {
         return true;
      }
   }
   return false;
}
