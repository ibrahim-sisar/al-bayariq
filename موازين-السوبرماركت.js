
function card (img,titel,price){
    let tb=document.getElementById('al');
    m=`
    <div class="a">
            <img src="albimg/موازين/سوبر ماركت/${img}" alt="#" class="im1">
            <p class="p1">البيارق للموازين</p>
            <p class="p11">${titel}</p>
            <a id="b1" href="#"  onclick="alert('${titel} | ${price}$')" >التفاصيل</a>
        </div>
    `
    tb.innerHTML+=m
    
    
    }
card("1.jpg","ميزان بهرات",100)
card("2.jpeg","ميزان مع طابعة",100)
card("3.jpeg"," ميزان بوقوليات",100)
