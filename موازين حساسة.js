
function card (img,titel,price){
    let tb=document.getElementById('al');
    m=`
    <div class="a">
            <img src="albimg/موازين/موازين حساسة/${img}" alt="#" class="im1">
            <p class="p1">البيارق للموازين</p>
            <p class="p11">${titel}</p>
            <a id="b1" href="#"  onclick="alert('${titel} | ${price}$')" >التفاصيل</a>
        </div>
    `
    tb.innerHTML+=m
    
    
    }
card("1.jpeg","1 ميزان",100)
card("2.jpeg","2 ميزان",100)
card("3.jpeg","3 ميزان",100)
card("4.jpeg","4 ميزان",100)
card("5.jpeg","5 ميزان",100)
card("6.jpg","6 ميزان",100)
card("7.jpg","7 ميزان",100)
card("8.jpeg","8 ميزان",100)
card("9.jpeg","9 ميزان",100)

