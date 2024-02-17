const mDropDownBtn = document.querySelector(".mobile_drop_down_btn");
const mDropDownArr = document.querySelector(".mobile_drop_down_arrow");
const mobileList = document.querySelector(".mobile_list");
const hamburgerIcon = document.querySelector(".icon-hamburger");
const mobileMenu = document.querySelector(".mobile_menu");
const dropDownArr = document.querySelectorAll(".desktop_drop_down_btn");
dropDownArr.forEach((arr, i) => {
  arr.addEventListener("click", (u) => {
    arr.lastElementChild.classList.toggle("show_desktop_list");
    if (arr.lastElementChild.classList.contains("show_desktop_list")) {
      arr.firstElementChild.firstElementChild.style.transform =
        "rotate(180deg)";
    } else {
      arr.firstElementChild.firstElementChild.style.transform = "rotate(0deg)";
    }
  });
});
dropDownArr.forEach((element) => {
  element.addEventListener("click", (e) => {
    dropDownArr.forEach((element) => {
      if (element !== e.target) {
        element.lastElementChild.classList.remove("show_desktop_list");
        element.firstElementChild.firstElementChild.style.transform =
          "rotate(0deg)";
      }
    });
  });
});

hamburgerIcon.addEventListener("click", () => {
  mobileMenu.classList.toggle("show_mobile_menu");
  if (mobileMenu.classList.contains("show_mobile_menu")) {
    hamburgerIcon.firstElementChild.src = "images/icon-close.svg";
  } else {
    hamburgerIcon.firstElementChild.src = "images/icon-hamburger.svg";
  }
});
mDropDownBtn.addEventListener("click", () => {
  mobileList.classList.toggle("show_mobile_list");
  if (mobileList.classList.contains("show_mobile_list")) {
    mDropDownArr.firstElementChild.style.transform = "rotate(180deg)";
  } else {
    mDropDownArr.firstElementChild.style.transform = "rotate(0deg)";
  }
});
mDropDownArr.addEventListener("click", () => {
  mobileList.classList.toggle("show_mobile_list");
  if (mobileList.classList.contains("show_mobile_list")) {
    mDropDownArr.firstElementChild.style.transform = "rotate(180deg)";
  } else {
    mDropDownArr.firstElementChild.style.transform = "rotate(0deg)";
  }
});
