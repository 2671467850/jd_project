/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-08 21:20:30
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-28 16:13:18
 */
// 账号登录状态
function getCookie(name) {
    var cookie_array = document.cookie.split("; ");
    // console.log(cookie_array);
    for (var i = 0; i < cookie_array.length; i++) {
        var cookie_item_array = cookie_array[i].split("=");
        if (name === cookie_item_array[0]) {
            return cookie_item_array[1];
        }
    }
    return "";
};
getUname()
function getUname() {
    if (getCookie("uname")) {
        // console.log(getCookie("uname"));
        document.querySelector(".nav_title").innerHTML = getCookie("uname");
    }
}
ajax({
    url: "./assets/data/shoplist.json",
    dataType: "json",
    callback: function (res) {
        // console.log(res);
        // renderSquare(res)
        renderShopList(res)
    }
});
{/* <li class="icon" data="100101"><img src="${item.imgaddress}" /></li> */ }
function renderShopList(data) {
    // console.log(data);
    let elems = document.querySelector('.shoplist')
    data.forEach(function (item, index) {
        elems.innerHTML += `<div class="goods" data="${index}">
                                <div class="imgshow">
                                <a href="javascript:void(0)">
                                <img src="${item.imgaddress}" data="${index}"/>
                                </a>
                                <div class="news" style='display:block'></div>
                                </div>
                                <ul class="iconList clear" data="${index}">
                                ${(() => {
                return item.bigimg.reduce((value, item) => {
                    return value + '<li class="icon"><img src="' + item.bigimgAddress + '" /></li>'
                }, "");
            })()}
                                </ul>
                                <div class="priceCon">
                                <strong class="price"> <em>￥</em><i>${item.price}</i> </strong>
                                </div>
                                <div class="infoCon">
                                <a
                                    href="javascript:void(0)"
                                    title="${item.title1}"
                                >
                                    <em>
                                    <span class="tag0" style="display:block">${item.elementDess}</span>
                                    ${item.name}
                                    </em>
                                </a>
                                </div>
                                <div class="commit">
                                <a class="spu-href" href="javascript:void(0)">去看二手</a>
                                <strong><a href="javascript:void(0)">200万</a>条评价</strong>
                                </div>
                                <div class="shop">
                                <span class="J_im_icon">
                                    <a href="javascript:void(0)" title="realme真我京东自营旗舰店">realme真我京东自营旗舰店</a>
                                    <b title="联系客服"></b>
                                </span>
                                </div>
                            </div>`
    })
    var iconLists = document.querySelectorAll(".iconList");
    iconLists.forEach(function (item, index) {
        changePrev(item.children[0].firstElementChild);
        item.addEventListener("mouseover", mouseHandler);
        item.addEventListener("mouseout", mouseHandler);
    })
    //跳转到详情列表
    var goods = document.querySelectorAll('.goods');
    goods.forEach(function (item, index) {
        // console.log(item.children[0])
        item.addEventListener('click', goodsClickHandler)
    })
}

function goodsClickHandler(e) {
    // console.log(e);
    if (e.target.nodeName === "IMG") {
        var index = e.target.getAttribute("data")
        if (index) {
            // console.log(index);
            document.cookie = `shoplist=${index}`;
            location.href = 'detail.html'
        }

    }
}
function mouseHandler(e) {
    if (e.target.nodeName !== "IMG") return;
    // console.log(e.target)
    changePrev(e.target);
}
var prev;
function changePrev(elem) {
    if (prev) {
        prev.style.borderColor = "transparent";
    }
    prev = elem;
    prev.style.borderColor = "#e4393c";
}