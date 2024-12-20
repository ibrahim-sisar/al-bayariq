
function card (img,titel,price){
    let tb=document.getElementById('al');
    m=`
    <div class="a">
            <img src="albimg/موازين/موازين أشخاص/${img}" alt="#" class="im1">
            <p class="p1">البيارق للموازين</p>
            <p class="p11">${titel}</p>
            <a id="b1" href="#"  onclick="alert('${titel} | ${price}$')" >التفاصيل</a>
        </div>
    `
    tb.innerHTML+=m
    
    
    }
card("1.png","1 ميزان",100)
card("2.jpeg","2 ميزان",70)
card("3.jpeg","3 ميزان",80)
card("4.jpeg","4 ميزان",90)
card("5.jpeg","5 ميزان",100)
card("6.jpeg","6 ميزان",110)


