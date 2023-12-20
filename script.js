    //Here the page loading div script is GIVEN
    document.querySelector("body").style.transition = "visibility 0.5s";
    document.querySelector("#loader").style.transition = "visibility 0.5s";

    document.onreadystatechange = function () {
      if (document.readyState !== "complete") {
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector("#loader").style.visibility = "visible";
      } else {
        document.querySelector("#loader").style.visibility = "hidden";
        document.querySelector("body").style.visibility = "visible";
      }
    };


    //Scroll to top whenever the page is refresh
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };

    //Get the button
    var mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
      scrollFunction()
    };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
