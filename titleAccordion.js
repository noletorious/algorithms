const titles = document.getElementsByClassName("title");

for (let i = 0; i < titles.length; i++) {
  titles[i].addEventListener("click", () => {
    console.log(titles);
    titles[i].classList.toggle("active");
    let pre = titles[i].nextElementSibling;
    if (pre.style.maxHeight) {
      pre.style.maxHeight = null;
    } else {
      pre.style.maxHeight = pre.scrollHeight + "px";
    }
  });
}
