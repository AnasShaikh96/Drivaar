function expand() {
    $("#sidenav").removeClass(".is-collapsed")
  }
  
  function collapse() {
    $("#sidenav").addClass(".is-collapsed");
  }
  
  function toggle() {
    var element = document.getElementById("sidenav");
    element.classList.toggle("is-collapsed");
  }