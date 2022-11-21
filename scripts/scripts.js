function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }
  
  
  // Toggle between showing and hiding the sidebar when clicking the menu icon
  var mySidebar = document.getElementById("mySidebar");
  
  function w3_open() {
    if (mySidebar.style.display === 'block') {
      mySidebar.style.display = 'none';
    } else {
      mySidebar.style.display = 'block';
    }
  }
  
  // Close the sidebar with the close button
  function w3_close() {
      mySidebar.style.display = "none";
  }
  var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 6000);    
}
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" w3-white", "");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " w3-white";
}
const navBar = document.getElementById("navbar");
const navCont = document.getElementById("navCont");

// buat function scroll
function scroll() {
  let calc = window.scrollY;
  if (calc > 0) {
    navBar.classList.replace("bg-transparent", "bg-dark");
    navBar.classList.replace("navbar-light", "navbar-dark");
    navCont.classList.replace("container-fluid", "container");
  } else if (calc <= 0) {
    navBar.classList.replace("bg-dark", "bg-transparent");
    navBar.classList.replace("navbar-dark", "navbar-light");
    navCont.classList.replace("container", "container-fluid");
  }
}

//panggil saat init
scroll();

// panggil saat discroll
window.onscroll = () => {
  scroll();
};

var backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
  if ( this.scrollY >= 400 ) {
    backToTop.classList.add('show');

    backToTop.addEventListener('click', () => {
      window.scrollTo({top: 0});
    })
  } else {
    backToTop.classList.remove('show');
  }
});


window.onscroll = function() {fungsiScrollnya()};
// tombol akan muncul setelah scroll barnya di turunkan 20 pixel
function fungsiScrollnya() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("tombolNya").style.display = "block";
    } else {
        document.getElementById("tombolNya").style.display = "none";
    }
}

function halamanBerGerakKeAtas() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; // 0 untuk kembali kepaling atas halaman, ubah jikalau perlu
}

