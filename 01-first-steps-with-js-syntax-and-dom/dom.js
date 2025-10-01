function handleChangeTitle() {
    const htmlHeadingObject = document.querySelector("#main-title");
    htmlHeadingObject.textContent = "Title Changed!";
}

function initialize() {
    console.log("Load change title button event listener");
    document.querySelector("#change-title-btn").addEventListener("click", handleChangeTitle);
}

document.addEventListener("DOMContentLoaded", initialize);