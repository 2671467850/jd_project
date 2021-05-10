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
    callback: function (res) {
        // console.log(res);
        renderSquare(res)
    }
});
function renderSquare(data) {
    let elems = document.querySelector(".square_content").querySelectorAll('.box1')
    elems.forEach(function (item,index){
        // console.log(item,index)
        item.innerHTML=`
            <a href="">
                <span>${data[index].elementDess}</span>
                <span>${data[index].name}</span>
            </a>
            <div class="box1_picbox">
                <a href="" class="box1_pic"><img src="${data[index].img[0]}" alt=""></a>
                <a href="" class="box1_pic"><img src="${data[index].img[1]}" alt=""></a>
            </div>
        `
    })
    // 单个数据添加
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
    callback: function (res) {
        // console.log(res);
        // renderSquare(res)
        renderRecommend(res)
        // console.log(res.skus);
    }
});
ajax({
    url: "https://rods.suning.com/rods-web/route.jsonp?snTerminal=284000002001&apiCode=J0184&sceneCode=C0049&channelCode=2",
    dataType: "json",
    callback: function (res) {
        renderRecommend(res)
    }
});
function renderRecommend(data){
    let elem = document.querySelector(".recommend_box")
    data.skus.forEach(function(item,index){
        // console.log(item,index)
        elem.innerHTML += `
        <li class="recommend_box_item">
            <a href="" class="recommend_box_item_a">
                <div class="recommend_box_item_pic">
                    <img src="${item.pictureUrl}" alt="">
                </div>
                <div class="recommend_box_item_title">
                    <p>
                        <i class="item_info_self">${item.promotionInfo}</i>
                        ${item.gdsName}
                    </p>
                    <div class="recommend_box_item_price">
                        <div class="recommend_price">
                            <i>¥</i>
                            <span class="item_info_price_txt">${item.refPrice.slice(0,-2)}<span class="item_info_price_txt-decimal">${item.refPrice.slice(-2)}</span></span>
                        </div>
                        <div class="price_plus">
                            <div class="price_discount">满减</div>
                        </div>
                    </div>
                </div>
            </a>
        </li>
        `
    })
}

// 获取高度
// let h = document.querySelector(".jd_miaosha").offsetTop
// console.log(h)

// window.addEventListener("scroll",getHeight)
// function getHeight(e){
//     let h = document.documentElement.scrollTop
//     console.log(h)
// }
