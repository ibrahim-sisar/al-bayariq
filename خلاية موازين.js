
function card (img,titel,price){
    let tb=document.getElementById('al');
    m=`
    <div class="a">
            <img src="albimg/موازين/خلايا موازين/${img}" alt="#" class="im1">
            <p class="p1">البيارق للموازين</p>
            <p class="p11">${titel}</p>
            <a id="b1" href="#"  onclick="alert('${titel} | ${price}$')" >التفاصيل</a>
        </div>
    `
    tb.innerHTML+=m
    
    
    }
card("1.jpeg","1 خلية",100)
card("2.jpeg","2 خلية",30)
card("3.jpeg","3 خلية",40)
card("4.jpeg","4 خلية",80)
card("5.jpeg","5 خلية",50)
card("6.jpeg","6 خلية",60)
card("7.jpeg","7 خلية",70)
card("8.jpeg","8 خلية",90)
card("9.jpeg","9 خلية",50)
card("10.jpeg","10 خلية",60)
