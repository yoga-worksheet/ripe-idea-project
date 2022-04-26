// Hamburger Menu Declaration Section
const menu = document.querySelector(".nav__items");
const menu_item = document.querySelectorAll(".nav__links");
const hamburger = document.querySelector(".hamburger-menu");
const on = document.querySelector(".on");
const off = document.querySelector(".off");

// Carousel Image Declaration Section
const slider_list = document.querySelectorAll(".products__wrapper");
const navigator_list = document.querySelectorAll(".navigator__item");
let current_slider = document.querySelector(".products__wrapper.selected");
let current_navigator = document.querySelector(".navigator__item.selected");

// Hamburger Menu Function Section
const toogle = () => {

	if(menu.classList.contains("show-menu")) {
		menu.classList.remove("show-menu");
		on.style.display = "block";
		off.style.display = "none";
	} else {
		menu.classList.add("show-menu");
		on.style.display = "none";
		off.style.display = "block";
	}

};

hamburger.addEventListener("click", toogle);

menu_item.forEach((menu_item) => {
	menu_item.addEventListener("click", toogle);
});

// Carousel Image Function Section

navigator_list.forEach((navigator_item, index) => {
	navigator_item.addEventListener("click", () => {
		if(!navigator_item.classList.contains("selected")){
			current_navigator.classList.remove("selected");
			current_navigator = navigator_item;
			current_navigator.classList.add("selected");
			current_slider.classList.remove("selected");
			current_slider = slider_list[index];
			current_slider.classList.add("selected");
		}
	});
});