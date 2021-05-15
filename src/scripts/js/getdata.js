/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-07 16:08:50
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-15 22:22:08
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
    elems.forEach(function (item, index) {
        // console.log(item,index)
        item.innerHTML = `
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

var data = {
    url: "https://rods.suning.com/rods-web/route.jsonp",
    dataType: "json",
    data: {
        apiCode: "J0184",
        sceneCode: "C0049",
        channelCode: 1,
    },
    callback: function (res) {
        // console.log(`第${data.data.channelCode}次加载`)
        renderRecommend(res)
        lazyLoad({
            el: ".recommend_box_item_pic img"
        });
    }
}
ajax(data);
ajax(data);
ajax(data);
ajax(data);
ajax(data);
ajax(data);
ajax(data);
ajax(data);
ajax(data);
ajax(data);
ajax(data);

//节流
function throttle(fn, wait = 500) {

    // 上一次执行时间
    let prevTime = 0
    // 定时器
    let timer = null
  
    return function (ev) {
      // 当前时间
      let nowTime = Date.now()
  
      // 计算当前是否达到了设置的执行时长
      let difftime = wait - (nowTime - prevTime)
      if (difftime <= 0) { // 到达设置的时长
        // 让上一次执行的时间设置为当前执行的时间
        prevTime = nowTime
        // 清除定时器
        clearTimeout(timer)
        timer = null
  
        // 执行回调函数，注意this指向
        fn.call(this, ev)
      } else if (!timer) {
        timer = setTimeout(() => {
          // 清除定时器
          clearTimeout(timer)
          timer = null
          // 执行回调函数，注意this指向
          fn.call(this, ev)
        }, wait);
      }
    }
  }

function lazyLoad(options) {
    var time = 0;
    var imgs = document.querySelectorAll(options.el);

    var imgs_top_list = [];
    for (var i = 0; i < imgs.length; i++) {
        imgs_top_list.push(_getAbsPosition(imgs[i]).top);
    }

    // 节流写法
    window.onscroll = throttle(_hanlderChangeHeight)
    window.addEventListener("resize", _hanlderChangeHeight)

    function _hanlderChangeHeight() {
        time--;
        if (time > 0) return
        time = 5;
        var ch = window.innerHeight;
        var st = document.body.scrollTop || document.documentElement.scrollTop;
        for (var index in imgs_top_list) {
            if (imgs_top_list[index] <= st + ch) {
                // 图片应该显示; 
                imgs[index].src = imgs[index].getAttribute("data-src");
                delete imgs_top_list[index]
            } else {
                break;
            }
        }
    }
    window.dispatchEvent(new Event("scroll"));
}

function _getAbsPosition(ele) {
    var abs = {
        left: ele.offsetLeft,
        top: ele.offsetTop
    }
    while (ele.offsetParent !== document.body) {
        ele = ele.offsetParent;
        abs.left += ele.offsetLeft;
        abs.top += ele.offsetTop;
    }
    return abs;
}











// ajax({
//     url: "https://rods.suning.com/rods-web/route.jsonp?snTerminal=284000002001&apiCode=J0184&sceneCode=C0049&channelCode=6",
//     dataType: "json",
//     callback: function (res) {
//         // console.log(res);
//         // renderSquare(res)
//         renderRecommend(res)
//         // console.log(res.skus);
//     }
// });
// ajax({
//     url: "https://rods.suning.com/rods-web/route.jsonp?snTerminal=284000002001&apiCode=J0184&sceneCode=C0049&channelCode=2",
//     dataType: "json",
//     callback: function (res) {
//         renderRecommend(res)
//     }
// });

// fetch("https://rods.suning.com/rods-web/route.jsonp?apiCode=J0184&sceneCode=C0049&channelCode=1")
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data)
//         renderRecommend(data)
//     })

function renderRecommend(data) {
    let elem = document.querySelector(".recommend_box")
    data.skus.forEach(function (item, index) {
        // console.log(item,index)
        elem.innerHTML += `
        <li class="recommend_box_item">
            <a href="" class="recommend_box_item_a">
                <div class="recommend_box_item_pic">
                    <img src="http://hbimg.b0.upaiyun.com/52a0d30a6b82876bc293a8672024fd781d8d379b63de8-tWho04_fw658" data-src="${item.pictureUrl}" alt="">
                </div>
                <div class="recommend_box_item_title">
                    <p>
                        <i class="item_info_self">${item.promotionInfo}</i>
                        ${item.gdsName}
                    </p>
                    <div class="recommend_box_item_price">
                        <div class="recommend_price">
                            <i>¥</i>
                            <span class="item_info_price_txt">${item.refPrice.slice(0, -2)}<span class="item_info_price_txt-decimal">${item.refPrice.slice(-2)}</span></span>
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
