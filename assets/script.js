function toggleDrawer() {
    var drawer = document.getElementById("myDrawer");
    var menuBtn = document.querySelector(".menu-btn");

    if (drawer.style.left === "0px") {
        drawer.style.left = "-100%";
        menuBtn.innerHTML = "☰";
        menuBtn.style.fontSize = '30px'

    } else {
        drawer.style.left = "0";
        menuBtn.innerHTML = "×";
        menuBtn.style.fontSize = '45px'
    }
}