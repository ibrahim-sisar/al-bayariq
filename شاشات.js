
function card (img,titel,price){
    let tb=document.getElementById('al');
    m=`
    <div class="a">
            <img src="albimg/موازين/شاشات/${img}" alt="#" class="im1">
            <p class="p1">البيارق للموازين</p>
            <p class="p11">${titel}</p>
            <a id="b1" href="#"  onclick="alert('${titel} | ${price}$')" >التفاصيل</a>
        </div>
    `
    tb.innerHTML+=m
    
    
    }
card("1.jpg","1 شاشة",100)
card("2.jpg","2 شاشة",300)
card("3.jpg","3 شاشة",78)
card("4.jpg","4 شاشة",90)
card("5.jpg","5 شاشة",500)
card("6.jpg","6 شاشة",60)
card("7.jpg","7 شاشة",70)
card("8.jpg","8 شاشة",90)
card("9.jpg","9 شاشة",50)

