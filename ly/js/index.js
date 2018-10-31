;function slideClass(){
    init();
};
init = function () {
    this.bindEvent();
};
bindEvent = function () {
    var tnav = document.getElementById('nav');
    var lis = document.getElementsByClassName('nav_lis');
    var m_list = document.getElementsByClassName('main_list');
    var theTop = document.getElementsByClassName('backTop');
    var initOffsetArray = [];
    for (var i = 0; i < lis.length; i++) {
        initOffsetArray.push(m_list[i].offsetTop);
    };

    window.addEventListener('scroll',function (e) {
        var t = win('scrollTop');
        var h = win('clientHeight');
        if(t >= h/2){
            theTop[0].classList.add('comeTop');
        }else{
            theTop[0].classList.remove('comeTop');
        };
        if(t > 80){
            tnav.id=('fixed_top');
        }else if(t < 1){
            tnav.id=('nav');
        };
        
        var scTop = document.documentElement.scrollTop || document.body.scrollTop;
        var j = -1;
		for(var k = 0; k < initOffsetArray.length; k++){
			if(scTop >= initOffsetArray[k]-80){
				j = k;
				if(j != -1){
                    lis[j].classList.remove('nav_bg');
                    [].forEach.call(lis,function (item,index) {
                        item.classList.remove('nav_bg');
                        if (j === index) {
                            item.classList.add('nav_bg');
                        }
                    });
                    [].forEach.call(m_list,function (item,index) {
                        item.classList.remove('op');
                        if (j === index) {
                            item.classList.add('op');
                        }
                    });
				}
            }
		}
    },false);

    theTop[0].addEventListener('click',function (e) {
        var t = win('scrollTop');
        this.timer = setInterval(()=>{
            t -= 150;
            if(t <= 0){
                clearInterval(this.timer);
                win('scrollTop',0);
                return;
            }
            win('scrollTop',t);
            bok = false;
        },17)
    },false);

    for (let i = 0; i < lis.length; i++) {
        lis[i].addEventListener('click',function (e) {
            lis[i].classList.remove('nav_bg');
            lis[i].classList.add('nav_bg');
            [].forEach.call(lis,function (item,index) {
                item.classList.remove('nav_bg');
                if (i === index) {
                    item.classList.add('nav_bg');
                }
            });
            [].forEach.call(m_list,function (item,index) {
                item.classList.remove('op');
                if (i === index) {
                    item.classList.add('op');
                }
            });
            window.scrollTo(0, parseInt(initOffsetArray[i])-70);
        },false);
    };

    function win (key,value) {
        if(value == undefined){
            return document.documentElement[key] || document.body[key]
        }
        document.documentElement[key] = value;
        document.body[key] = value;
    }
}
new slideClass();