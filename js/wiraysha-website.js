function mode(nav) {
    let name;
    let information;
    let address;
    let location;
    let prizes
    let items
    let Prize1 = document.getElementById("price1-example");
    let Prize2 = document.getElementById("price2-example");
    let Prize3 = document.getElementById("price3-example");
    let Prize4 = document.getElementById("price4-example");
    let Prize5 = document.getElementById("price5-example");
    let Prize6 = document.getElementById("price6-example");
    document.getElementById('ww-nav1-pp').style.display = "grid"
    if (nav === "home") {
        let content = "";
        document.getElementById('ww-nav1-pp').innerHTML = content;
        location = document.getElementById('map').style.display = "none";
        document.getElementById('ww-nav1-pp').style.display = "none"
        Prize1.style.display = "none"
            Prize2.style.display = "none"
            Prize3.style.display = "none"
            Prize4.style.display = "none"
            Prize5.style.display = "none"
            Prize6.style.display = "none"
    } else if (nav === "about") {
        name = "Wiraysha Sahebdin";
        information = "I make: <li>cute ponponetjes</li> <li>More things</li> <li>More things</li>";
        let About = `My name is ${name} <br> ${information}`;
        document.getElementById('ww-nav1-pp').innerHTML = About;
        location = document.getElementById('map').style.display = "none";
        Prize1.style.display = "none"
            Prize2.style.display = "none"
            Prize3.style.display = "none"
            Prize4.style.display = "none"
            Prize5.style.display = "none"
            Prize6.style.display = "none"
    } else if (nav === "prizes") {
        prizes = ['10srd', '12.50srd', '15srd', '12.50srd', '15srd', '17.50srd']
        items = `
        <p><button id="text-img-prizes1" onclick="Prize('prize1')" class="text-img-prizes"> Small Pon</button> = ${prizes[0]}</p><br>
        <p   ><button id="text-img-prizes2" onclick="Prize('prize2')" class="text-img-prizes">Medium Pon</button>  = ${prizes[1]}</p><br>
        <p   ><button id="text-img-prizes3" onclick="Prize('prize3')" class="text-img-prizes">Large Pon </button> = ${prizes[2]}</p><br>
        <p  ><button id="text-img-prizes4" onclick="Prize('prize4')" class="text-img-prizes">Small 2 coloured Pon </button> = ${prizes[3]}</p><br>
        <p  ><button id="text-img-prizes5" onclick="Prize('prize5')" class="text-img-prizes">Medium 2 coloured Pon </button> = ${prizes[4]}</p><br>
        <p  ><button id="text-img-prizes6" onclick="Prize('prize6')" class="text-img-prizes">Large 2 coloured Pon</button> = ${prizes[5]}</p>`
        items.textContent = ""
        document.getElementById("ww-nav1-pp").innerHTML = items;
        location = document.getElementById('map').style.display = "none";
    } 
      else if (nav === "location") {
        address = "";
        document.getElementById('map').style.display = "inline";
        let Location = `Pick up Address/afhaal plaats:  ${address}`
        document.getElementById("ww-nav1-pp").innerHTML = Location;
        Prize1.style.display = "none"
            Prize2.style.display = "none"
            Prize3.style.display = "none"
            Prize4.style.display = "none"
            Prize5.style.display = "none"
            Prize6.style.display = "none"
    }
}
function Prize(prizeParam) {
            let image;
            let bodyImg;
            let newButton;
            let newButton1;
            let newID;
            let Prize1 = document.getElementById("prize-pargraph")
            let Prize2 = document.getElementById("prize-pargraph")
            let Prize3 = document.getElementById("prize-pargraph")
            let Prize4 = document.getElementById("prize-pargraph")
            let Prize5 = document.getElementById("prize-pargraph")
            let Prize6 = document.getElementById("prize-pargraph")
            let Prize1Imp = document.getElementById("price1-example")
            let Prize2Imp = document.getElementById("price2-example")
            let Prize3Imp = document.getElementById("price3-example")
            let Prize4Imp = document.getElementById("price4-example")
            let Prize5Imp = document.getElementById("price5-example")
            let Prize6Imp = document.getElementById("price6-example")


        if (prizeParam === "prize1" ){
            bodyImg = document.getElementById('div-price-para');
            image = document.createElement('img');
            image.id = "price1-example"
            image.setAttribute('src', 'wifey-pics/cute.jpg')
            bodyImg.appendChild(image);

            Prize1Imp.style.display = "inline"
            Prize2Imp.style.display = "none"
            Prize3Imp.style.display = "none"
            Prize4Imp.style.display = "none"
            Prize5Imp.style.display = "none"
            Prize6Imp.style.display = "none"
            Prize1.style.display = "inline"
            Prize2.style.display = "none"
            Prize3.style.display = "none"
            Prize4.style.display = "none"
            Prize5.style.display = "none"
            Prize6.style.display = "none"

        }
        else if (prizeParam === "prize2" ){
            bodyImg = document.getElementById('div-price-para');
            image = document.createElement('img');
            image.id = "price2-example"
            image.setAttribute('src', 'wifey-pics/kissing.jpg')
            bodyImg.appendChild(image);
            Prize1Imp.style.display = "none"
            Prize2Imp.style.display = "inline"
            Prize3Imp.style.display = "none"
            Prize4Imp.style.display = "none"
            Prize5Imp.style.display = "none"
            Prize6Imp.style.display = "none"
            Prize1.style.display = "none"
            Prize2.style.display = "inline"
            Prize3.style.display = "none"
            Prize4.style.display = "none"
            Prize5.style.display = "none"
            Prize6.style.display = "none"
        }
        else if (prizeParam === "prize3" ){
            bodyImg = document.getElementById('div-price-para');
            image = document.createElement('img');
            image.id = "price3-example"
            image.setAttribute('src', 'wifey-pics/cute.jpg')
            bodyImg.appendChild(image);
            
            Prize1Imp.style.display = "none"
            Prize2Imp.style.display = "none"
            Prize3Imp.style.display = "inline"
            Prize4Imp.style.display = "none"
            Prize5Imp.style.display = "none"
            Prize6Imp.style.display = "none"
            Prize1.style.display = "none"
            Prize2.style.display = "none"
            Prize3.style.display = "inline"
            Prize4.style.display = "none"
            Prize5.style.display = "none"
            Prize6.style.display = "none"
        }
        else if (prizeParam === "prize4" ){
            bodyImg = document.getElementById('div-price-para');
            image = document.createElement('img');
            image.id = "price4-example"
            image.setAttribute('src', 'wifey-pics/2-colored-pon-small.jpg')
            bodyImg.appendChild(image);
            Prize1Imp.style.display = "none"
            Prize2Imp.style.display = "none"
            Prize3Imp.style.display = "none"
            Prize4Imp.style.display = "inline"
            Prize5Imp.style.display = "none"
            Prize6Imp.style.display = "none"
            Prize1.style.display = "none"
            Prize2.style.display = "none"
            Prize3.style.display = "none"
            Prize4.style.display = "inline"
            Prize5.style.display = "none"
            Prize6.style.display = "none"
        }
        else if (prizeParam === "prize5" ){
            bodyImg = document.getElementById('div-price-para');
            image = document.createElement('img');
            image.id = "price5-example"
            image.setAttribute('src', 'wifey-pics/cute.jpg')
            bodyImg.appendChild(image);
            Prize1Imp.style.display = "none"
            Prize2Imp.style.display = "none"
            Prize3Imp.style.display = "none"
            Prize4Imp.style.display = "none"
            Prize5Imp.style.display = "inline"
            Prize6Imp.style.display = "none"
            Prize1.style.display = "none"
            Prize2.style.display = "none"
            Prize3.style.display = "none"
            Prize4.style.display = "none"
            Prize5.style.display = "inline"
            Prize6.style.display = "none"
        }
        else if (prizeParam === "prize6" ){
            bodyImg = document.getElementById('div-price-para');
            image = document.createElement('img');
            image.id = "price6-example"
            image.setAttribute('src', 'wifey-pics/cute.jpg')
            bodyImg.appendChild(image);
            Prize1Imp.style.display = "none"
            Prize2Imp.style.display = "none"
            Prize3Imp.style.display = "none"
            Prize4Imp.style.display = "none"
            Prize5Imp.style.display = "none"
            Prize6Imp.style.display = "inline"
            Prize1.style.display = "none"
            Prize2.style.display = "none"
            Prize3.style.display = "none"
            Prize4.style.display = "none"
            Prize5.style.display = "none"
            Prize6.style.display = "inline"
        }
    } 


function modePic(Mode) {

    let image;
    if (Mode === "pics-show1") {
        document.getElementById('button-img1').style.display = "inline";
        document.getElementById('button-img2').style.display = "inline";
        document.getElementById('pics-button1').style.display = "none"
        document.getElementById('pics-button2').style.display = "inline"
    } else if (Mode === 'pics-show2') {
        document.getElementById('pics-button2').style.display = "none"
        document.getElementById('pics-button1').style.display = "inline"
        document.getElementById('button-img1').style.display = "none";
        document.getElementById('button-img2').style.display = "none";
    }
}
