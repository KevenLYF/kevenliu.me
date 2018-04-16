function openNav(mySidenav) {
    document.getElementById(mySidenav).style.width = "50%";
    document.getElementById("page").style = "transition: 0.7s;filter:blur(2px);"
}

function closeNav(mySidenav) {
    document.getElementById(mySidenav).style.width = "0";
    document.getElementById("page").style = "transition: 0.7s;filter:blur(0px);"
}

function search() {
  var input, filter, project, p, i;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  project = document.getElementById("project");
  p = project.getElementsByTagName("P");
  for (i = 0; i < p.length; i++) {
      if (p[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
        p[i].style.display = "";
      } else {
        p[i].style.display = "none";
      }  
  }
}


