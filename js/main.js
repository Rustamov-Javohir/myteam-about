/***** MEET ITEM CODE START *****/
elAddBtn = document.querySelector(".add__btn");
elCloseBtn = document.querySelector(".add")
elAddImg = document.querySelector(".add__btn--img");
// elhdn = document.querySelector(".hdnshow");
elHdnMeet = document.querySelector(".hdnmeet");

elAddBtn.addEventListener("click", function () {
        elHdnMeet.classList.add("hdnshow");
        elAddImg.src = "./images/close-icon.svg";
        elAddBtn.style.backgroundColor = '#79C8C7';   
});


/***** MEET ITEM CODE END *****/