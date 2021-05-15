"use strict";

/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-08 21:20:30
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-15 20:45:03
 */
// let elems = document.querySelector('.shoplist')
// elems.innerHTML = `
// <div class="goods">
// <div class="imgshow">
// <a href="https://https://item.jd.com/100015769748.html">
// <img src="//img12.360buyimg.com/n7/jfs/t1/118064/27/12885/59959/5f17b7efE453f688d/5b33ac76b2aaea9b.jpg"/>
// </a>
// <div class="news" style='display:block'></div>
// </div>
// <ul class="iconList clear">
// <li class="icon" data="100101"><img src="//img12.360buyimg.com/n7/jfs/t1/118064/27/12885/59959/5f17b7efE453f688d/5b33ac76b2aaea9b.jpg" /></li>
// </ul>
// <div class="priceCon">
// <strong class="price"> <em>￥</em><i>1238</i> </strong>
// </div>
// <div class="infoCon">
// <a
//     href="https://https://item.jd.com/100015769748.html"
//     title="【品质小金刚】骁龙665处理器，18W快充，4800万高清四摄【note95G火热抢购中】"
// >
//     <em>
//     <span class="tag0" style="display:block">京品手机</span>
//     Redmi Note8 4800万全场景四摄 4000mAh长续航 高通骁龙665 18W快充 小金刚品质保证 6GB+128GB 皓月白 游戏智能
//     </em>
// </a>
// </div>
// <div class="commit">
// <a class="spu-href" href="https://https://item.jd.com/100015769748.html">去看二手</a>
// <strong><a href="https://https://item.jd.com/100015769748.html">200万</a>条评价</strong>
// </div>
// <div class="shop">
// <span class="J_im_icon">
//     <a href="https://https://mall.jd.com/index-1000164941.html?from=pc" title="realme真我京东自营旗舰店">realme真我京东自营旗舰店</a>
//     <b title="联系客服"></b>
// </span>
// </div>
// </div>
// <div class="goods">
// <div class="imgshow">
// <a href="https://https://item.jd.com/100015769748.html">
// <img src="//img12.360buyimg.com/n7/jfs/t1/118064/27/12885/59959/5f17b7efE453f688d/5b33ac76b2aaea9b.jpg"/>
// </a>
// <div class="news" style='display:block'></div>
// </div>
// <ul class="iconList clear">
// <li class="icon" data="100101"><img src="//img12.360buyimg.com/n7/jfs/t1/118064/27/12885/59959/5f17b7efE453f688d/5b33ac76b2aaea9b.jpg" /></li>
// </ul>
// <div class="priceCon">
// <strong class="price"> <em>￥</em><i>1238</i> </strong>
// </div>
// <div class="infoCon">
// <a
//     href="https://https://item.jd.com/100015769748.html"
//     title="【品质小金刚】骁龙665处理器，18W快充，4800万高清四摄【note95G火热抢购中】"
// >
//     <em>
//     <span class="tag0" style="display:block">京品手机</span>
//     Redmi Note8 4800万全场景四摄 4000mAh长续航 高通骁龙665 18W快充 小金刚品质保证 6GB+128GB 皓月白 游戏智能
//     </em>
// </a>
// </div>
// <div class="commit">
// <a class="spu-href" href="https://https://item.jd.com/100015769748.html">去看二手</a>
// <strong><a href="https://https://item.jd.com/100015769748.html">200万</a>条评价</strong>
// </div>
// <div class="shop">
// <span class="J_im_icon">
//     <a href="https://https://mall.jd.com/index-1000164941.html?from=pc" title="realme真我京东自营旗舰店">realme真我京东自营旗舰店</a>
//     <b title="联系客服"></b>
// </span>
// </div>
// </div>
// <div class="goods">
// <div class="imgshow">
// <a href="https://https://item.jd.com/100015769748.html">
// <img src="//img12.360buyimg.com/n7/jfs/t1/118064/27/12885/59959/5f17b7efE453f688d/5b33ac76b2aaea9b.jpg"/>
// </a>
// <div class="news" style='display:block'></div>
// </div>
// <ul class="iconList clear">
// <li class="icon" data="100101"><img src="//img12.360buyimg.com/n7/jfs/t1/118064/27/12885/59959/5f17b7efE453f688d/5b33ac76b2aaea9b.jpg" /></li>
// </ul>
// <div class="priceCon">
// <strong class="price"> <em>￥</em><i>1238</i> </strong>
// </div>
// <div class="infoCon">
// <a
//     href="https://https://item.jd.com/100015769748.html"
//     title="【品质小金刚】骁龙665处理器，18W快充，4800万高清四摄【note95G火热抢购中】"
// >
//     <em>
//     <span class="tag0" style="display:block">京品手机</span>
//     Redmi Note8 4800万全场景四摄 4000mAh长续航 高通骁龙665 18W快充 小金刚品质保证 6GB+128GB 皓月白 游戏智能
//     </em>
// </a>
// </div>
// <div class="commit">
// <a class="spu-href" href="https://https://item.jd.com/100015769748.html">去看二手</a>
// <strong><a href="https://https://item.jd.com/100015769748.html">200万</a>条评价</strong>
// </div>
// <div class="shop">
// <span class="J_im_icon">
//     <a href="https://https://mall.jd.com/index-1000164941.html?from=pc" title="realme真我京东自营旗舰店">realme真我京东自营旗舰店</a>
//     <b title="联系客服"></b>
// </span>
// </div>
// </div>
// <div class="goods">
// <div class="imgshow">
// <a href="https://https://item.jd.com/100015769748.html">
// <img src="//img12.360buyimg.com/n7/jfs/t1/118064/27/12885/59959/5f17b7efE453f688d/5b33ac76b2aaea9b.jpg"/>
// </a>
// <div class="news" style='display:block'></div>
// </div>
// <ul class="iconList clear">
// <li class="icon" data="100101"><img src="//img12.360buyimg.com/n7/jfs/t1/118064/27/12885/59959/5f17b7efE453f688d/5b33ac76b2aaea9b.jpg" /></li>
// </ul>
// <div class="priceCon">
// <strong class="price"> <em>￥</em><i>1238</i> </strong>
// </div>
// <div class="infoCon">
// <a
//     href="https://https://item.jd.com/100015769748.html"
//     title="【品质小金刚】骁龙665处理器，18W快充，4800万高清四摄【note95G火热抢购中】"
// >
//     <em>
//     <span class="tag0" style="display:block">京品手机</span>
//     Redmi Note8 4800万全场景四摄 4000mAh长续航 高通骁龙665 18W快充 小金刚品质保证 6GB+128GB 皓月白 游戏智能
//     </em>
// </a>
// </div>
// <div class="commit">
// <a class="spu-href" href="https://https://item.jd.com/100015769748.html">去看二手</a>
// <strong><a href="https://https://item.jd.com/100015769748.html">200万</a>条评价</strong>
// </div>
// <div class="shop">
// <span class="J_im_icon">
//     <a href="https://https://mall.jd.com/index-1000164941.html?from=pc" title="realme真我京东自营旗舰店">realme真我京东自营旗舰店</a>
//     <b title="联系客服"></b>
// </span>
// </div>
// </div>
// <div class="goods">
// <div class="imgshow">
// <a href="https://https://item.jd.com/100015769748.html">
// <img src="//img12.360buyimg.com/n7/jfs/t1/118064/27/12885/59959/5f17b7efE453f688d/5b33ac76b2aaea9b.jpg"/>
// </a>
// <div class="news" style='display:block'></div>
// </div>
// <ul class="iconList clear">
// <li class="icon" data="100101"><img src="//img12.360buyimg.com/n7/jfs/t1/118064/27/12885/59959/5f17b7efE453f688d/5b33ac76b2aaea9b.jpg" /></li>
// </ul>
// <div class="priceCon">
// <strong class="price"> <em>￥</em><i>1238</i> </strong>
// </div>
// <div class="infoCon">
// <a
//     href="https://https://item.jd.com/100015769748.html"
//     title="【品质小金刚】骁龙665处理器，18W快充，4800万高清四摄【note95G火热抢购中】"
// >
//     <em>
//     <span class="tag0" style="display:block">京品手机</span>
//     Redmi Note8 4800万全场景四摄 4000mAh长续航 高通骁龙665 18W快充 小金刚品质保证 6GB+128GB 皓月白 游戏智能
//     </em>
// </a>
// </div>
// <div class="commit">
// <a class="spu-href" href="https://https://item.jd.com/100015769748.html">去看二手</a>
// <strong><a href="https://https://item.jd.com/100015769748.html">200万</a>条评价</strong>
// </div>
// <div class="shop">
// <span class="J_im_icon">
//     <a href="https://https://mall.jd.com/index-1000164941.html?from=pc" title="realme真我京东自营旗舰店">realme真我京东自营旗舰店</a>
//     <b title="联系客服"></b>
// </span>
// </div>
// </div>
// <div class="goods">
// <div class="imgshow">
// <a href="https://https://item.jd.com/100015769748.html">
// <img src="//img12.360buyimg.com/n7/jfs/t1/118064/27/12885/59959/5f17b7efE453f688d/5b33ac76b2aaea9b.jpg"/>
// </a>
// <div class="news" style='display:block'></div>
// </div>
// <ul class="iconList clear">
// <li class="icon" data="100101"><img src="//img12.360buyimg.com/n7/jfs/t1/118064/27/12885/59959/5f17b7efE453f688d/5b33ac76b2aaea9b.jpg" /></li>
// </ul>
// <div class="priceCon">
// <strong class="price"> <em>￥</em><i>1238</i> </strong>
// </div>
// <div class="infoCon">
// <a
//     href="https://https://item.jd.com/100015769748.html"
//     title="【品质小金刚】骁龙665处理器，18W快充，4800万高清四摄【note95G火热抢购中】"
// >
//     <em>
//     <span class="tag0" style="display:block">京品手机</span>
//     Redmi Note8 4800万全场景四摄 4000mAh长续航 高通骁龙665 18W快充 小金刚品质保证 6GB+128GB 皓月白 游戏智能
//     </em>
// </a>
// </div>
// <div class="commit">
// <a class="spu-href" href="https://https://item.jd.com/100015769748.html">去看二手</a>
// <strong><a href="https://https://item.jd.com/100015769748.html">200万</a>条评价</strong>
// </div>
// <div class="shop">
// <span class="J_im_icon">
//     <a href="https://https://mall.jd.com/index-1000164941.html?from=pc" title="realme真我京东自营旗舰店">realme真我京东自营旗舰店</a>
//     <b title="联系客服"></b>
// </span>
// </div>
// </div>
// <div class="goods">
// <div class="imgshow">
// <a href="https://https://item.jd.com/100015769748.html">
// <img src="//img12.360buyimg.com/n7/jfs/t1/118064/27/12885/59959/5f17b7efE453f688d/5b33ac76b2aaea9b.jpg"/>
// </a>
// <div class="news" style='display:block'></div>
// </div>
// <ul class="iconList clear">
// <li class="icon" data="100101"><img src="//img12.360buyimg.com/n7/jfs/t1/118064/27/12885/59959/5f17b7efE453f688d/5b33ac76b2aaea9b.jpg" /></li>
// </ul>
// <div class="priceCon">
// <strong class="price"> <em>￥</em><i>1238</i> </strong>
// </div>
// <div class="infoCon">
// <a
//     href="https://https://item.jd.com/100015769748.html"
//     title="【品质小金刚】骁龙665处理器，18W快充，4800万高清四摄【note95G火热抢购中】"
// >
//     <em>
//     <span class="tag0" style="display:block">京品手机</span>
//     Redmi Note8 4800万全场景四摄 4000mAh长续航 高通骁龙665 18W快充 小金刚品质保证 6GB+128GB 皓月白 游戏智能
//     </em>
// </a>
// </div>
// <div class="commit">
// <a class="spu-href" href="https://https://item.jd.com/100015769748.html">去看二手</a>
// <strong><a href="https://https://item.jd.com/100015769748.html">200万</a>条评价</strong>
// </div>
// <div class="shop">
// <span class="J_im_icon">
//     <a href="https://https://mall.jd.com/index-1000164941.html?from=pc" title="realme真我京东自营旗舰店">realme真我京东自营旗舰店</a>
//     <b title="联系客服"></b>
// </span>
// </div>
// </div>
// <div class="goods">
// <div class="imgshow">
// <a href="https://https://item.jd.com/100015769748.html">
// <img src="//img12.360buyimg.com/n7/jfs/t1/118064/27/12885/59959/5f17b7efE453f688d/5b33ac76b2aaea9b.jpg"/>
// </a>
// <div class="news" style='display:block'></div>
// </div>
// <ul class="iconList clear">
// <li class="icon" data="100101"><img src="//img12.360buyimg.com/n7/jfs/t1/118064/27/12885/59959/5f17b7efE453f688d/5b33ac76b2aaea9b.jpg" /></li>
// </ul>
// <div class="priceCon">
// <strong class="price"> <em>￥</em><i>1238</i> </strong>
// </div>
// <div class="infoCon">
// <a
//     href="https://https://item.jd.com/100015769748.html"
//     title="【品质小金刚】骁龙665处理器，18W快充，4800万高清四摄【note95G火热抢购中】"
// >
//     <em>
//     <span class="tag0" style="display:block">京品手机</span>
//     Redmi Note8 4800万全场景四摄 4000mAh长续航 高通骁龙665 18W快充 小金刚品质保证 6GB+128GB 皓月白 游戏智能
//     </em>
// </a>
// </div>
// <div class="commit">
// <a class="spu-href" href="https://https://item.jd.com/100015769748.html">去看二手</a>
// <strong><a href="https://https://item.jd.com/100015769748.html">200万</a>条评价</strong>
// </div>
// <div class="shop">
// <span class="J_im_icon">
//     <a href="https://https://mall.jd.com/index-1000164941.html?from=pc" title="realme真我京东自营旗舰店">realme真我京东自营旗舰店</a>
//     <b title="联系客服"></b>
// </span>
// </div>
// </div>
// `
// 账号登录状态
function getCookie(name) {
  var cookie_array = document.cookie.split("; "); // console.log(cookie_array);

  for (var i = 0; i < cookie_array.length; i++) {
    var cookie_item_array = cookie_array[i].split("=");

    if (name === cookie_item_array[0]) {
      return cookie_item_array[1];
    }
  }

  return "";
}

;
getUname();

function getUname() {
  if (getCookie("uname")) {
    // console.log(getCookie("uname"));
    document.querySelector(".nav_title").innerHTML = getCookie("uname");
  }
}

ajax({
  url: "./assets/data/shoplist.json",
  dataType: "json",
  callback: function callback(res) {
    // console.log(res);
    // renderSquare(res)
    renderShopList(res);
  }
});
{
  /* <li class="icon" data="100101"><img src="${item.imgaddress}" /></li> */
}

function renderShopList(data) {
  // console.log(data);
  var elems = document.querySelector('.shoplist');
  data.forEach(function (item, index) {
    elems.innerHTML += "<div class=\"goods\" data=\"".concat(index, "\">\n                                <div class=\"imgshow\">\n                                <a href=\"javascript:void(0)\">\n                                <img src=\"").concat(item.imgaddress, "\" data=\"").concat(index, "\"/>\n                                </a>\n                                <div class=\"news\" style='display:block'></div>\n                                </div>\n                                <ul class=\"iconList clear\" data=\"").concat(index, "\">\n                                ").concat(function () {
      return item.bigimg.reduce(function (value, item) {
        return value + '<li class="icon"><img src="' + item.bigimgAddress + '" /></li>';
      }, "");
    }(), "\n                                </ul>\n                                <div class=\"priceCon\">\n                                <strong class=\"price\"> <em>\uFFE5</em><i>").concat(item.price, "</i> </strong>\n                                </div>\n                                <div class=\"infoCon\">\n                                <a\n                                    href=\"javascript:void(0)\"\n                                    title=\"").concat(item.title1, "\"\n                                >\n                                    <em>\n                                    <span class=\"tag0\" style=\"display:block\">").concat(item.elementDess, "</span>\n                                    ").concat(item.name, "\n                                    </em>\n                                </a>\n                                </div>\n                                <div class=\"commit\">\n                                <a class=\"spu-href\" href=\"javascript:void(0)\">\u53BB\u770B\u4E8C\u624B</a>\n                                <strong><a href=\"javascript:void(0)\">200\u4E07</a>\u6761\u8BC4\u4EF7</strong>\n                                </div>\n                                <div class=\"shop\">\n                                <span class=\"J_im_icon\">\n                                    <a href=\"javascript:void(0)\" title=\"realme\u771F\u6211\u4EAC\u4E1C\u81EA\u8425\u65D7\u8230\u5E97\">realme\u771F\u6211\u4EAC\u4E1C\u81EA\u8425\u65D7\u8230\u5E97</a>\n                                    <b title=\"\u8054\u7CFB\u5BA2\u670D\"></b>\n                                </span>\n                                </div>\n                            </div>");
  });
  var iconLists = document.querySelectorAll(".iconList");
  iconLists.forEach(function (item, index) {
    changePrev(item.children[0].firstElementChild);
    item.addEventListener("mouseover", mouseHandler);
    item.addEventListener("mouseout", mouseHandler);
  }); //跳转到详情列表

  var goods = document.querySelectorAll('.goods');
  goods.forEach(function (item, index) {
    // console.log(item.children[0])
    item.addEventListener('click', goodsClickHandler);
  });
}

function goodsClickHandler(e) {
  // console.log(e);
  if (e.target.nodeName === "IMG") {
    var index = e.target.getAttribute("data");

    if (index) {
      // console.log(index);
      document.cookie = "shoplist=".concat(index);
      location.href = 'detail.html';
    }
  }
}

function mouseHandler(e) {
  if (e.target.nodeName !== "IMG") return; // console.log(e.target)

  changePrev(e.target); // var imgshows=document.querySelectorAll(".imgshow img");
  // imgshows.forEach(function(item,index){
  // console.log(item.getAttribute("data"))
  // console.log(e.target.parentElement.style.data)
  // if(item.style.data == e.target.parentElement.style.data){
  //     item.src=e.target.src;
  // }
  // item.src=e.target.src;
  // })
  // imgshow.src=e.target.src;
  // var ids=e.target.parentElement.getAttribute("data");
  // var o=this.data.colors.filter(item=>item.ids==ids)[0];
  // var price=this.elem.querySelector(".price");
  // price.innerHTML=`<em>￥</em><i>${o.price}</i>`
}

var prev;

function changePrev(elem) {
  if (prev) {
    prev.style.borderColor = "transparent";
  }

  prev = elem;
  prev.style.borderColor = "#e4393c";
}