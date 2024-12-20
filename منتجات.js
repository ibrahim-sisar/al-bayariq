window.onscroll=function(){
    if(scrollY>99){
        let v=document.getElementById('rr')
        v.classList.add("ff");
        console.log("ljo")
    }else if(scrollY<99){
        let v=document.getElementById('rr')
        v.classList.remove("ff");
        console.log("ljo")
    }else{
        let v=document.getElementById('rr')
        v.classList.remove("ff");
        console.log("ljo")
    }
    
}
function card (img,titel,url){
    let tb=document.getElementById('al');
    m=`
    <div class="a">
            <img src="${img}" alt="#" class="im1">
            <p class="p1">البيارق للموازين</p>
            <p class="p11">${titel}</p>
            <a id="b1" href="${url}">رؤية المزيد</a>
        </div>
    `
    tb.innerHTML+=m
    
    
    }
card("albimg/موازين/سوبر ماركت/2.jpeg","موازين السوبر ماركت","موازين-السوبرماركت.html")
card("albimg/موازين/شاشات/1.jpg","شاشات موازين","شاشات.html")
card("albimg/موازين/قبان/1.jpg","قبانات","قبانات.html")
card("albimg/موازين/موازين أشخاص/2.jpeg","موازين أشخاص","موازين أشخاص.html")
card("albimg/موازين/موازين حساسة/2.jpeg","موازين حساسة","موازين حساسة.html")
card("albimg/موازين/موازين عجول/1.jpeg","موازين مواشي","موازين مواشي.html")
card("albimg/موازين/خلايا موازين/1.jpeg","خلايا موازين","خلاية موازين.html")

