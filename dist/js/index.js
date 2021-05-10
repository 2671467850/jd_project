"use strict";
/*
 * @Descripttion:
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-06 21:09:38
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-08 20:59:39
 */

var WIDTH = 5.9;
var imgCon, ul, prev;
var title = ["https://img11.360buyimg.com/pop/s1180x940_jfs/t1/184121/6/1341/99067/60893c43E327d507a/a0299be04ed70ab2.jpg.webp", "https://img14.360buyimg.com/pop/s1180x940_jfs/t1/186240/5/1625/73466/608baf7cE70902674/491ec2025e9b8063.jpg.webp", "https://img11.360buyimg.com/pop/s1180x940_jfs/t1/194326/26/1558/81762/6093907cE4cec54f7/8d0716de8eb930dd.jpg.webp", "https://imgcps.jd.com/ling4/56661272153/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5f3a47329785549f6bc7a6fa/7265ab0c/cr/s/q.jpg", "https://img13.360buyimg.com/pop/s1180x940_jfs/t1/141270/19/10355/77448/5f817d17Eb29195fc/d62881b7db8cd9d8.jpg.webp", "https://imgcps.jd.com/ling4/10043941797/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5f3a47329785549f6bc7a6e6/31aa8530/cr/s/q.jpg", "https://img13.360buyimg.com/pop/s1180x940_jfs/t1/171041/14/20767/86810/60827c59Eaf1e797c/66f9a7373d8b4b64.jpg.webp", "https://imgcps.jd.com/ling4/64132475327/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5f3a47329785549f6bc7a6fa/b958ac56/cr/s/q.jpg"];
var itemList = {};
var pos = 0,
    x = 0,
    speed = 50,
    bool = false,
    autoBool = true,
    time = 200,
    direction = "left";
init();

function init() {
  var _a;

  var carousel = document.createElement("div");
  carousel.className = "carousel";
  createImgCon(carousel);
  createDot(carousel);
  createBn(carousel);
  (_a = document.querySelector(".show1")) === null || _a === void 0 ? void 0 : _a.appendChild(carousel);
  prevChange();
  animation();
  carousel.addEventListener("mouseenter", mouseHandler);
  carousel.addEventListener("mouseleave", mouseHandler);
}

function mouseHandler(e) {
  autoBool = e.type === "mouseleave";
  time = 200;
}

function createImgCon(parent) {
  imgCon = document.createElement("div");
  imgCon.className = "imgCon";
  imgCon.appendChild(getItem(title[0]));
  parent.appendChild(imgCon);
}

function createDot(parent) {
  ul = document.createElement("ul");
  ul.innerHTML = title.reduce(function (value, item) {
    return value + "<li></li>";
  }, "");
  ul.addEventListener("click", dotClickhandler);
  parent.appendChild(ul);
}

function createBn(parent) {
  var src = ["left", "right"];
  src.forEach(function (item) {
    var img = new Image();
    img.src = "./assets/images/".concat(item, ".png");
    img.className = item;
    parent.appendChild(img); // console.log(img.src)

    img.addEventListener("click", bnClickHandler);
  });
}

function getItem(o) {
  // if (itemList[o.id]) return itemList[o.id];
  var div = document.createElement("div");
  div.className = "item"; // var arr = o.date.split(/(?=\/)/);

  div.innerHTML = "\n        <img  src=\"".concat(o, "\">\n    "); // itemList[o.id] = div;

  return div;
}

function dotClickhandler(e) {
  if (e.target.constructor !== HTMLLIElement) return;
  var index = Array.from(ul.children).indexOf(e.target);
  if (index === pos) return;
  if (index > pos) direction = "left";else direction = "right";
  pos = index;
  insertNextImg();
}

function bnClickHandler(e) {
  // console.log(this.src)
  if (this.src.includes("left")) {
    direction = "right";
    pos--; // console.log(title.length)

    if (pos < 0) pos = title.length - 1;
  } else {
    direction = "left";
    pos++;
    if (pos > title.length - 1) pos = 0;
  }

  insertNextImg();
}

function insertNextImg() {
  if (direction === "left") {
    imgCon.appendChild(getItem(title[pos]));
    x = 0;
    imgCon.style.left = x + "rem";
  } else {
    imgCon.insertBefore(getItem(title[pos]), imgCon.firstElementChild);
    x = -WIDTH;
    imgCon.style.left = x + "rem";
  }

  bool = true;
  prevChange();
}

function animation() {
  requestAnimationFrame(animation);
  imgMove();
  autoPlay();
}

function autoPlay() {
  var _a;

  if (!autoBool) return;
  time--; // console.log(time)

  if (time > 0) return; // console.log("1111")

  time = 200;
  var evt = new MouseEvent("click");
  (_a = document.querySelector(".right")) === null || _a === void 0 ? void 0 : _a.dispatchEvent(evt);
}

function imgMove() {
  var _a, _b; // console.log(bool)


  if (!bool) return; // console.log(imgCon.firstElementChild)

  if (direction === "left") {
    x -= speed;

    if (x <= -WIDTH) {
      (_a = imgCon.firstElementChild) === null || _a === void 0 ? void 0 : _a.remove();
      x = 0;
      bool = false;
    }
  } else {
    x += speed;

    if (x >= 0) {
      (_b = imgCon.lastElementChild) === null || _b === void 0 ? void 0 : _b.remove();
      x = 0;
      bool = false;
    }
  }

  imgCon.style.left = x + "rem";
}

function prevChange() {
  if (prev) {
    prev.style.backgroundColor = "rgba(255,0,0,0)";
  }

  prev = ul.children[pos];
  prev.style.backgroundColor = "#FF9d00";
}

getHeight();

function getHeight() {
  // 获取高度
  // 电梯导航与吸顶搜索
  var miaoshaH = document.querySelector('.jd_miaosha');
  var htmlH = document.documentElement;
  var nav = document.querySelector('.nav_list');
  var nav_ding = document.querySelector('.ding');
  window.addEventListener("scroll", getHeight);

  function getHeight(e) {
    // console.log(miaoshaH?.offsetTop)
    if (htmlH.scrollTop > miaoshaH.offsetTop) {
      nav.style.position = 'fixed';
      nav.style.top = "1.5rem";
      nav_ding.style.top = "0";
    } else {
      nav.style.position = 'absolute';
      nav.style.top = '6.87rem';
      nav_ding.style.top = "-52px";
    }
  }
}

moveToNewHtml();

function moveToNewHtml() {
  var _a;

  var elems = (_a = document.querySelector('.fir_menu')) === null || _a === void 0 ? void 0 : _a.querySelector('a'); // console.log(elems)

  elems.addEventListener("click", aclickHandler); // elems.forEach((item:any,index:any) => {
  //     console.log(item)
  //     // item.addEventListener('click',aclickHandler)
  // });
}

function aclickHandler(e) {
  // console.log(e.target)
  e.target.href = "./list.html";
}