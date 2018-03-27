function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
    document.getElementById("page").style = "transition: 1s;filter:blur(2px);"
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("page").style = "transition: 1s;filter:blur(0px);"
}

