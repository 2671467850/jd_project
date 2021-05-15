/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: Ankang
 * @Date: 2021-05-12 08:52:50
 * @LastEditors: Ankang
 * @LastEditTime: 2021-05-12 21:27:02
 */
init()
function init(){
    // console.log(cookie("shoplist"))
    var shopindex = cookie("shoplist")
    if(shopindex){
        // console.log(shopindex)
        ajax({
            url: "./assets/data/shoplist.json",
            dataType: "json",
            callback: function (res) {
            //     console.log(res[shopindex]);
                // renderSquare(res)
                // renderShopList(res)
                renderShop(res[shopindex])
            }
        });
    }
}
{/* <li class="current"><img src="assets/images/b1.jpg" alt="" width="56px"></li>
<li><img src="assets/images/b2.jpg" alt="" width="56px"></li>
<li><img src="assets/images/b3.jpg" alt="" width="56px"></li>
<li><img src="assets/images/b4.jpg" alt="" width="56px"></li>
<li><img src="assets/images/b5.jpg" alt="" width="56px"></li> */}

function renderShop(data){
      console.log(data);
      var shoppic = document.querySelector('#img1')
      var bigshoppic = document.querySelector('.bigimg')
      var shoppicList = document.querySelector('.list_item').querySelectorAll('li')
      var name = document.querySelector('.sku_name')
      var news = document.querySelector('.news')
      var price = document.querySelector('.price');
      var cx = document.querySelector('.summary_promotion em');
      var zc = document.querySelector('.summary_support dd')
      shoppic.src = bigshoppic.src = data.imgaddress;
      // console.log(shoppic.src)
      shoppicList.forEach((item,index)=>{
            // console.log(item.children[0].src)
            // console.log(data.bigimg[index].bigimgAddress)
            item.children[0].src=data.bigimg[index].bigimgAddress;
      })
      name.innerHTML = data.name;
      // $(name).attr["data"]=data.id;
      news.innerHTML = data.title1;
      price.innerHTML = "¥"+data.price;
      cx.innerHTML = data.elementDess;
      zc.innerHTML = data.title2;
}
function cookie( name , value , options ){
    if(typeof name === "string" && typeof value === "string"){
          options = options || {};
          if( typeof options.expires === "number" ){
                var d = new Date();
                d.setDate( d.getDate() + options.expires );
          }
          return document.cookie = [
                name , "=" , value,
                typeof options.path === "string" ? ";path=" + options.path : "",
                typeof options.domain === "string" ? ";domain=" + options.domain : "",
                typeof options.expires === "number" ? ";expires=" + d  : "" 
          ].join("");
    }
  
    if(typeof name === "string" && value === null){
          // removeCookie ; 
          var options = { expires : -1 };
          switch( typeof path ){
                case "string" : options.path = path;break;
                case "object" : 
                      if( path !== null && (path instanceof Array)){
                           Object.assign( options , path );
                      }
          }
          return cookie( name , "" , options );
    }
    if(arguments.length  === 1 && typeof name === "string"){
          var cookie_array = document.cookie.split("; ");
          for(var i = 0 ; i < cookie_array.length ; i ++){
                var cookie_item_array = cookie_array[i].split("=");
                if( name === cookie_item_array[0]){
                      return cookie_item_array[1];
                }
          }
          return "";
    }
}
