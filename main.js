var img=document.querySelectorAll('.image')
var image=document.querySelectorAll('.img')
var show=document.querySelector('#show img')
var btnleft=document.querySelector('.btn-left')
var btnright=document.querySelector('.btn-right')
var a=0;
function anvaoanh(){
    for(let i=0;i<img.length;i++){
        img[i].onclick=function(){
            let link=image[i].src
            let cha=document.querySelector('.image.border')
            cha.classList.remove('border')
            img[i].classList.add('border')
            show.src=link
            a=i; 
        }
        
    }
}
anvaoanh()
btnright.onclick=function(){
    if(a==8){
        a=-1;
   }
    let char1=document.querySelector('.image.border')
    char1.classList.remove('border')
    img[a+1].classList.add('border')
    let links=image[a+1].src
    show.src=links
    if(0<a<8){
        a++;
   }
    
   console.log(a)
}
btnleft.onclick=function(){
    if(a-1<0){
        a=9;
    }
    let char1=document.querySelector('.image.border')
    char1.classList.remove('border')
    img[a-1].classList.add('border')
    let links=image[a-1].src
    show.src=links
    if(0<a<9){
        a--
    }
}