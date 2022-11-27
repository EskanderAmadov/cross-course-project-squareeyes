const hamburgeMenu = () => {
	
	const burgerMenu = document.querySelector('.hamburger-menu');
	const navbar = document.querySelector('.nav-links');
	const navbarLinks = document.querySelectorAll('.nav-links li');

	
	[burgerMenu, navbar].forEach(item => {
		item.addEventListener("click", () => {

		navbar.classList.toggle('navbar-active');
	
		navbarLinks.forEach((link, index) => {
			if(navbar.contains(document.querySelector('.navbar-active'))) {
				link.style.animation = `linkAnimateIn 0.4s ease forwards ${index / 7 + 0.7}s`;
			} else {
				link.style.animation = `linkAnimateOut 0.8s 1s ease forwards 1s`;
		}
		})
		
		
	})

});

}
							
hamburgeMenu();


// To top button function:
let topButton = document.getElementById("toTopButton");

window.onscroll = function() {showButton()};

function showButton() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}