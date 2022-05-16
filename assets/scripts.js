function toggle_menu() {
    var element = document.getElementById("resp_menu");
    var el_header = document.getElementById("title");
    if (element.classList) { 
      element.classList.toggle("hidden");
      el_header.classList.toggle("hidden");
    } else {
      var classes = element.className.split(" ");
      var i = classes.indexOf("hidden");
  
      if (i >= 0) 
        classes.splice(i, 1);
      else 
        classes.push("hidden");
        element.className = classes.join(" "); 
    }
  }