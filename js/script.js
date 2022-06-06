var more_btn = document.querySelector('.more-btn');
if(more_btn){
    more_btn.onclick = function(){
        var img = this.parentNode.querySelectorAll('img');
        img.forEach(function(key, value){
            if(!key.classList.contains('active')){
                key.classList.add('active');
            }
            
        })

    }
}

window.onscroll = function(){
    var y = window.scrollY;
    if(y>160){
        if(!document.querySelector('.aside').classList.contains('fixed')){
            document.querySelector('.aside').classList.add('fixed');
        }
        
    }else{
        document.querySelector('.aside').classList.remove('fixed');
    }
    if(y>300){
        if(!document.querySelector('.navbar__btn.upbtn').classList.contains('active')){
            document.querySelector('.navbar__btn.upbtn').classList.add('active');
        }
    }else{
        document.querySelector('.navbar__btn.upbtn').classList.remove('active');
    }
}

$('.navbar__btn.upbtn').on('click', function(){
    $('html, body').animate({scrollTop: 0});
})