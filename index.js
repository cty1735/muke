var download = document.getElementsByClassName("download")[0];
var appLoad = download.getElementsByClassName("app-load")[0];
var downloadSpan = download.getElementsByTagName("span")[0];
var shopCart = document.getElementsByClassName("shop-cart")[0];
var clearShopCart = document.getElementsByClassName("clear-shop-cart")[0];
var list=document.getElementsByClassName("list")[0];
var listUl=list.getElementsByTagName("ul")[0];
var listUlLi=listUl.getElementsByTagName('li');
var innerBox=document.getElementsByClassName("inner-box")[0];
var innerContent=innerBox.getElementsByClassName("inner-box-content");
downloadSpan.onmouseenter = function () {
    appLoad.style.display = "block";
}
downloadSpan.onmouseleave = function () {
    appLoad.style.display = "none";
}
appLoad.onmouseenter = function () {
    this.style.display = "block";
}
appLoad.onmouseleave = function () {
    this.style.display = "none";
}
shopCart.onmouseenter = function () {
    clearShopCart.style.display = "block";
}
shopCart.onmouseleave = function () {
    clearShopCart.style.display = "none";
}
clearShopCart.onmouseenter = function () {
    this.style.display = "block";
}
clearShopCart.onmouseleave = function () {
    this.style.display = "none";
}
for(var i=0;i<listUlLi.length;i++){
    listUlLi[i].index=i;
    listUlLi[i].onmouseenter=function(){
        innerBox.style.display="block";
       for(var j=0;j<innerContent.length;j++){
        innerContent[j].style.display="none";

       }
       innerContent[this.index].style.display="block";
    }
    listUlLi[i].onmouseleave=function(){
        innerBox.style.display="none";
    }
}
innerBox.onmouseenter=function(){
    innerBox.style.display="block";

}
innerBox.onmouseleave=function(){
    innerBox.style.display="none";

}
