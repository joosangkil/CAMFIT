let iResizeWidth = 900;

function hiddenInfoPage() {
    if (window.innerWidth < iResizeWidth) {
        document.getElementsByClassName("wrap_info")[0].style.display = "none";
        // document.getElementsByClassName("wrap_info")[0].style.visibility = 'hidden';
    }
    else {
        document.getElementsByClassName("wrap_info")[0].style.display = "block";
        // document.getElementsByClassName("wrap_info")[0].style.visibility = 'visible';
    }
    //(1)   getElementsByClassName을 사용할 때는 클래스네임의 "."은 미사용.
    //(2)   배열로 받아오기 때문에 인덱스 숫자를 추가.
    //(3)   div로 추가된 갯수에 따라서 배열의 갯수가 증가
}
hiddenInfoPage();
window.addEventListener("resize", hiddenInfoPage);