window.addEventListener("scroll", function(){

    let navHeader = document.querySelector('.navHeader');

    navHeader.classList.toggle("sticky", window.scrollY > 0);
});