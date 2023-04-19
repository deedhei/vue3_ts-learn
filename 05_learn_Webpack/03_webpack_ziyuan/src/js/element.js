// import "css-loader!../css/style.css";
import "../css/style.css";
import "../css/image.css";

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "你好啊，李英河";
document.body.appendChild(divEl);

const bgDivEl = document.createElement("div");
bgDivEl.className = "image-bg";
document.body.appendChild(bgDivEl);
