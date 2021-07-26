/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-07 11:10:44
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-28 16:12:48
 */
var search_ele = document.getElementById("search_text");
var list_ele = document.getElementById("search_list");


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
function getUname(){
    if (getCookie("uname")){
        // console.log(getCookie("uname"));
        document.querySelector(".nav_title").innerHTML=getCookie("uname");
        document.querySelector(".name").innerHTML=getCookie("uname");
    }
}



//京东
search_ele.oninput = function () {
    ajax({
        url: "https://suggest.taobao.com/sug",
        data: {
            code: "utf-8",
            q: this.value
        },
        jsonp: "callback",
        dataType: "jsonp",
        callback: function (res) {
            // console.log(res);
            renderSearchResult(res.result);
        }
    })
}
function renderSearchResult(list) {
    if (list instanceof Array) {
        list_ele.innerHTML = list.map(function (item) {
            return `<a href=""><li>${item[0]}</li></a>`;
        }).join("");
    } else {
        list_ele.innerHTML = "";
    }
}