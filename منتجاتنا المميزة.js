
function card (img,titel,price){
    let tb=document.getElementById('ma');
    m=`
    <div class="a">
            <img src="albimg/منتجات مميزة/${img}" alt="#" class="im1">
            <p class="p1">البيارق للموازين</p>
            <p class="p11">${titel}</p>
            <a id="b1" href="#"  onclick="alert('${titel} | ${price}$')" >التفاصيل</a>
        </div>
    `
    tb.innerHTML+=m
    
    
    }
function des(txt){
    alert(txt)
}
card("1.png","1 خلية",40)
card("2.png","2 خلية",50)
card("3.jpg","3 خلية",60)
card("4.jpeg","4 خلية",70)

