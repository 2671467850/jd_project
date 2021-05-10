/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-08 21:20:30
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-10 09:34:27
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
ajax({
    url: "./assets/data/shoplist.json",
    dataType: "json",
    callback: function (res) {
        // console.log(res);
        // renderSquare(res)
        renderShopList(res)
    }
});
{/* <li class="icon" data="100101"><img src="${item.imgaddress}" /></li> */}
function renderShopList(data){
    // console.log(data);
    let elems = document.querySelector('.shoplist')
    data.forEach(function (item,index){
        elems.innerHTML += `<div class="goods">
                                <div class="imgshow">
                                <a href="https://https://item.jd.com/100015769748.html">
                                <img src="${item.imgaddress}" data="${index}"/>
                                </a>
                                <div class="news" style='display:block'></div>
                                </div>
                                <ul class="iconList clear" data="${index}">
                                ${(() => {
                                    return item.bigimg.reduce((value, item) => {
                                        return value + '<li class="icon" data="100101"><img src="' + item.bigimgAddress + '" /></li>'
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
                                <a class="spu-href" href="https://https://item.jd.com/100015769748.html">去看二手</a>
                                <strong><a href="https://https://item.jd.com/100015769748.html">200万</a>条评价</strong>
                                </div>
                                <div class="shop">
                                <span class="J_im_icon">
                                    <a href="https://https://mall.jd.com/index-1000164941.html?from=pc" title="realme真我京东自营旗舰店">realme真我京东自营旗舰店</a>
                                    <b title="联系客服"></b>
                                </span>
                                </div>
                            </div>`
    })
    var iconLists=document.querySelectorAll(".iconList");
    iconLists.forEach(function(item,index){
        changePrev(item.children[0].firstElementChild);
        item.addEventListener("mouseover",mouseHandler);
        item.addEventListener("mouseout",mouseHandler);
    })
}
function mouseHandler(e){
    if(e.target.nodeName!=="IMG") return;
    // console.log(e.target)
    changePrev(e.target);
    // var imgshows=document.querySelectorAll(".imgshow img");
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
function changePrev(elem){
    if(prev){
        prev.style.borderColor="transparent";
    }
    prev=elem;
    prev.style.borderColor="#e4393c";
}