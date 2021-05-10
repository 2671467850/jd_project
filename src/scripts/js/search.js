/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-07 11:10:44
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-07 12:05:30
 */
var search_ele = document.getElementById("search_text");
var list_ele = document.getElementById("search_list");
// search_ele.oninput = function () {
//     ajax({
//         url: "https://www.baidu.com/sugrec",
//         data: {
//             prod: "pc",
//             wd: this.value
//         },
//         jsonp: "cb",
//         dataType: "jsonp",
//         callback: function (res) {
//             // console.log(res);
//             renderSearchResult(res.g);
//         }
//     })
// }
// function renderSearchResult(list) {
//     if (list instanceof Array) {
//         list_ele.innerHTML = list.map(function (item) {
//             return `<li><a href="">${item.q}</a></li>`;
//         }).join("");
//     } else {
//         list_ele.innerHTML = "";
//     }
// }

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