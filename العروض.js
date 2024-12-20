
function card (img,titel,price){
    let tb=document.getElementById('al');
    m=`
    <div class="a">
            <img src="albimg/عروض/${img}" alt="#" class="im1">
            <p class="p1">البيارق للموازين</p>
            <p class="p11">${titel}</p>
            <a id="b1" href="#"  onclick="alert('${titel} | ${price}$')" >التفاصيل</a>
        </div>
    `
    tb.innerHTML+=m
    
    
    }
card("1.jpeg","العرض1",100)
card("2.jpeg","العرض2",30)
card("3.jpeg","العرض3",40)
card("4.jpg","العرض4",50)
card("5.jpeg","العرض5",60)
card("6.jpg","6العرض",70)
