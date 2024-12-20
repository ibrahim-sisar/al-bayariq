
function card (img,titel,price){
    let tb=document.getElementById('al');
    m=`
    <div class="a">
            <img src="albimg/موازين/قبان/${img}" alt="#" class="im1">
            <p class="p1">البيارق للموازين</p>
            <p class="p11">${titel}</p>
            <a id="b1" href="#"  onclick="alert('${titel} | ${price}$')" >التفاصيل</a>
        </div>
    `
    tb.innerHTML+=m
    
    
    }
card("1.jpg","1 قبان",100)
card("2.jpg","2 قبان",30)
card("3.jpg","3 قبان",40)
card("4.png","4 قبان",50)
card("5.jpg","5 قبان",60)
card("6.jpg","6 قبان",100)
card("7.jpg","7 قبان",500)
card("8.jpg","8 قبان",60)
card("9.jpg","9 قبان",70)
card("10.jpeg"," قبان",90)
card("11.jpg","9 قبان",50)
card("12.jpg","9 قبان",60)

