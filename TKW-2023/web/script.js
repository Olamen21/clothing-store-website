$(document).ready(function () {
    $('#thanh').click(function () {
        $('nav').slideToggle();
    });
})

    const mota = document.querySelector(".mota")
    const dacbiet = document.querySelector(".dacbiet")
    const chinhsach = document.querySelector(".chinhsach")

    if (mota) {
        baoquan.addEventListener("click", function () {
            document.querySelector(".slider-content-right-bottom-content-mota").style.display = "block"
            document.querySelector(".slider-content-right-bottom-content-dacbiet").style.display = "none"
            document.querySelector(".slider-content-right-bottom-content-chinhsach").style.display = "none"
        })
    }
    if (dacbiet) {
        baoquan.addEventListener("click", function () {
            document.querySelector(".slider-content-right-bottom-content-mota").style.display = "none"
            document.querySelector(".slider-content-right-bottom-content-dacbiet").style.display = "block"
            document.querySelector(".slider-content-right-bottom-content-chinhsach").style.display = "none"
        })
    }
    if (chinhsach) {
        baoquan.addEventListener("click", function () {
            document.querySelector(".slider-content-right-bottom-content-mota").style.display = "none"
            document.querySelector(".slider-content-right-bottom-content-dacbiet").style.display = "none"
            document.querySelector(".slider-content-right-bottom-content-chinhsach").style.display = "block"
        })
    }

const butTon = document.querySelector(".slider-content-right-bottom-top")
if(butTon){
    butTon.addEventListener("click",function(){
        document.querySelector(".content-right-big").classList.toggle("activeB")
    })
}