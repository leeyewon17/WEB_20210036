// var close_time; // 시간 정보
// var close_time2 = 10; // 10초 설정

// clearTimeout(close_time); // 재호출 정지
// close_time= setTimeout("close_window()", 10000);  // 1/1000 초 지정, 바로 시작 
// show_time(); // 실시간 시간 보여주기

// function show_time(){
//         let divClock = document.getElementById('Time');
//         divClock.innerText = close_time2; // 10초 삽입 시작
//         close_time2--; // 1초씩 감소
//     setTimeout(show_time, 1000);  //1초마다 갱신
// }

// function close_window() { // 함수 정의
//    window.close(); // 윈도우 닫기
// }

// window.onload=show_clock;

var close_time; // 시간 정보
var close_time2 = 10; // 10초 설정

clearTimeout(close_time); // 재호출 정지
close_time = setTimeout(close_window, 10000); // 10초 후에 close_window() 함수 실행
show_time(); // 실시간 시간 보여주기

function show_time() {
    let divClock = document.getElementById('Time');
    let remainingMsg = "남은 시간은 " + close_time2 + "초 입니다.";
    divClock.innerText = remainingMsg; // 남은 시간 출력
    close_time2--; // 1초씩 감소

    setTimeout(show_time, 1000); // 1초마다 갱신
}

function close_window() { // 함수 정의
    window.close(); // 윈도우 닫기
}

window.onload = show_clock;

