var cast = [
    'lee',
    'regan',
    'marcus',
    'beau',
    'evelyn',
]
let imgs = document.querySelector(".cast-images");
let caption = document.querySelector(".caption")
var index = 4

function control(n){
if( n==0){
    if(index == 0){ index += 4 }
    else{ index -= 1 }
    imgs.setAttribute("src", "assets/images/" + cast[index % cast.length]+ ".jpg");
    caption.innerHTML = cast[index % cast.length].charAt(0).toUpperCase() + cast[index % cast.length].slice(1) + " Abbott";
}
else {
   if (index == 4){ index = 0 }
   else{ index += 1 }
   imgs.setAttribute("src", "assets/images/" + cast[index % cast.length]+ ".jpg");
    caption.innerHTML = cast[index % cast.length].charAt(0).toUpperCase() + cast[index % cast.length].slice(1) + " Abbott";
}
}

setInterval(function(){
let pos = (index += 1) % cast.length

imgs.setAttribute("src", "assets/images/" + cast[pos]+ ".jpg");
caption.innerHTML = cast[pos].charAt(0).toUpperCase() + cast[pos].slice(1) + " Abbott";
}, 2500)
