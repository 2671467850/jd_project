"use strict";

/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-07 16:08:50
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-08 20:23:20
 */
//频道广场
ajax({
  url: "./assets/data/square.json",
  dataType: "json",
  callback: function callback(res) {
    // console.log(res);
    renderSquare(res);
  }
});

function renderSquare(data) {
  var elems = document.querySelector(".square_content").querySelectorAll('.box1');
  elems.forEach(function (item, index) {
    // console.log(item,index)
    item.innerHTML = "\n            <a href=\"\">\n                <span>".concat(data[index].elementDess, "</span>\n                <span>").concat(data[index].name, "</span>\n            </a>\n            <div class=\"box1_picbox\">\n                <a href=\"\" class=\"box1_pic\"><img src=\"").concat(data[index].img[0], "\" alt=\"\"></a>\n                <a href=\"\" class=\"box1_pic\"><img src=\"").concat(data[index].img[1], "\" alt=\"\"></a>\n            </div>\n        ");
  }); // 单个数据添加
  // let elem = document.querySelector(".square_content").querySelector('.box1')
  // elem.innerHTML = `
  // <a href="">
  // <span>${data[0].elementDess}</span>
  // <span>${data[0].name}</span>
  // </a>
  // <div class="box1_picbox">
  //     <a href="" class="box1_pic"><img src="${data[0].img[0]}" alt=""></a>
  //     <a href="" class="box1_pic"><img src="${data[0].img[1]}" alt=""></a>
  // </div>
  // `
}

ajax({
  url: "https://rods.suning.com/rods-web/route.jsonp?snTerminal=284000002001&apiCode=J0184&sceneCode=C0049&channelCode=6",
  dataType: "json",
  callback: function callback(res) {
    // console.log(res);
    // renderSquare(res)
    renderRecommend(res); // console.log(res.skus);
  }
});
ajax({
  url: "https://rods.suning.com/rods-web/route.jsonp?snTerminal=284000002001&apiCode=J0184&sceneCode=C0049&channelCode=2",
  dataType: "json",
  callback: function callback(res) {
    renderRecommend(res);
  }
});

function renderRecommend(data) {
  var elem = document.querySelector(".recommend_box");
  data.skus.forEach(function (item, index) {
    // console.log(item,index)
    elem.innerHTML += "\n        <li class=\"recommend_box_item\">\n            <a href=\"\" class=\"recommend_box_item_a\">\n                <div class=\"recommend_box_item_pic\">\n                    <img src=\"".concat(item.pictureUrl, "\" alt=\"\">\n                </div>\n                <div class=\"recommend_box_item_title\">\n                    <p>\n                        <i class=\"item_info_self\">").concat(item.promotionInfo, "</i>\n                        ").concat(item.gdsName, "\n                    </p>\n                    <div class=\"recommend_box_item_price\">\n                        <div class=\"recommend_price\">\n                            <i>\xA5</i>\n                            <span class=\"item_info_price_txt\">").concat(item.refPrice.slice(0, -2), "<span class=\"item_info_price_txt-decimal\">").concat(item.refPrice.slice(-2), "</span></span>\n                        </div>\n                        <div class=\"price_plus\">\n                            <div class=\"price_discount\">\u6EE1\u51CF</div>\n                        </div>\n                    </div>\n                </div>\n            </a>\n        </li>\n        ");
  });
} // 获取高度
// let h = document.querySelector(".jd_miaosha").offsetTop
// console.log(h)
// window.addEventListener("scroll",getHeight)
// function getHeight(e){
//     let h = document.documentElement.scrollTop
//     console.log(h)
// }