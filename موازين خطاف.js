
function card (img,titel,price){
    let tb=document.getElementById('al');
    m=`
    <div class="a">
            <img src="albimg/موازين/hook/${img}" alt="#" class="im1">
            <p class="p1">البيارق للموازين</p>
            <p class="p11">${titel}</p>
            <a id="b1" href="#"  onclick="alert('${titel} | ${price}$')" >التفاصيل</a>
        </div>
    `
    tb.innerHTML+=m
    
    
    }
card("1.jpg","1 ميزان",100)
card("2.jpg","2 ميزان",100)
card("3.jpg","3 ميزان",100)
card("4.jpg","4 ميزان",100)

