
//open when build beautiful website

// setTimeout(()=>{
//     var pre=document.querySelector(".preloader");
//     console.log(pre);
//     pre.classList.add("finish");
// },12*1000);




////for image chnage
// const imagearray=["./imp/500077100854_463110.jpg","./imp/thumbnail_(2).jpeg","./imp/500139000233_38126.jpg",
// "./imp/500138700447_138865.jpg","./imp/500140100264_67274.jpg","./imp/500077100854_463110.jpg",
// "./imp/-6174571721080811182_121.jpg","./imp/photo1637827431.jpeg"];
// var img1=document.querySelector(".sliimg1");
// img1.src=imagearray[0];
// var img2=document.querySelector(".sliimg2");
// img2.src=imagearray[1];
// var img3=document.querySelector(".sliimg3");
// img3.src=imagearray[2];
// var i=0;
// function func()
// {
    
//     var prev=(1+i)%(imagearray.length);
//     img1.src=imagearray[prev];
//     var current=(2+i)%(imagearray.length);
//     img2.src=imagearray[current];
//     var next=(3+i)%(imagearray.length);
//     img3.src=imagearray[next];
//     i++;
// }
// setInterval(func,4000);



///for preloader
var pre =document.querySelector(".preloadergif");
var pre2 =document.querySelector(".pre");
function f()
{
    console.log(pre);
    pre.style.display="none";
    pre2.style.display="none";
    
}
setTimeout(f,2000);
// var text;
// var i=1;
// window.addEventListener("scroll", () => {
//     var top = window.pageYOffset;
    




function ran()
{
    return Math.floor(Math.random()*color.length);
}
function ran2()
{
    return Math.floor(Math.random()*clr.length);
}
