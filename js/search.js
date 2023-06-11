document.getElementById("search_btn").addEventListener('click', search_message);

function search_message(){

let search_str = document.querySelector("#search_txt");
    if(search_str.value.length === 0){ // 문자 길이, 엄격한 비교
       alert("검색어가 비었습니다. 입력해주세요"); 
    }
    else{
       alert("검색을 수행합니다!");
       let text = document.getElementById("search_message").innerHTML = search_str.value;
       document.querySelector("#form_main").submit();
    }
}

// document.getElementById("search_btn").addEventListener('click', search_message);

// function search_message() {
//    let search_str = document.querySelector("#search_txt");
   
//    if (search_str.value.length === 0) { // 문자 길이, 엄격한 비교
//       alert("검색어가 비었습니다. 입력해주세요"); 
//    } else {
//       alert("검색을 수행합니다!");
//       document.getElementById("search_message").innerHTML = search_str.value;
//       document.querySelector("#form_main").submit();
//    }
// }


// document.getElementById("search_btn").addEventListener('click', search_message);

// function search_message() {
//    let search_str = document.querySelector("#search_txt");
//    let restrictedWords = ["비속어1", "비속어2", "비속어3"]; // 검색 제한 단어 선언
   
//    // 공백 체크
//    if (search_str.value.trim().length === 0) {
//       alert("검색어가 비었습니다. 입력해주세요");
//       return;
//    }
   
//    // 필터링 기능 추가
//    for (let i = 0; i < restrictedWords.length; i++) {
//        if (search_str.value.includes(restrictedWords[i])) { // 검색어에 제한 단어가 포함되면
//            alert("검색어에 제한된 단어가 포함되어 있습니다. 다른 검색어를 입력해주세요.");
//            search_str.value = ''; // 검색어 필드 비우기
//            return; // 검색 중단
//        }
//    }
   
//    alert("검색을 수행합니다!");
//    let text = document.getElementById("search_message").innerHTML = search_str.value;
//    // 검색을 위한 추가적인 동작 수행
   
//    // 원래 페이지에 머무르도록 처리
//    event.preventDefault();
// }
