document.addEventListener('DOMContentLoaded', function() {
    setTimeout(()=>{
        document.getElementsByClassName('left')[0].style.marginLeft='10px';
        document.getElementsByClassName('right')[0].style.right='5px';
    },200)
    setTimeout(()=>{
        document.getElementById('line').style.scale="0";
        setTimeout(()=>{
            document.getElementById('main-line').style.display="block";
        },900)
    },5000)

    const customCursor = document.querySelector('.custom-cursor');
    document.addEventListener('mousemove', function(e) {
        customCursor.style.display = 'block';
        customCursor.style.left = e.clientX + 'px';
        customCursor.style.top = e.clientY + 'px';
    });
});

let head = document.getElementById('head');
let num=0;
let interval = setInterval(()=>{
    num-=50;
    head.style.marginTop = num+"px";
    if(num<=-100) {
        clearInterval(interval);
        num=0;
    };
},1500);

// let location = document.getElementById('description').offsetTop;
// window.addEventListener("scroll", function (event) {
//     let scroll_y = this.scrollY;
//     console.log(scroll_y);
    
// });