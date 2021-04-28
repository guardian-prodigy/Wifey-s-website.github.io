function mode(nav) {
    let name;
    let information;
    let address;
    let location;
    let prizes
    let items
    document.getElementById('ww-nav1-pp').style.display = "grid"
    if (nav === "home") {
        let content = "";
        document.getElementById('ww-nav1-pp').innerHTML = content;
        location = document.getElementById('map').style.display = "none";
        document.getElementById('ww-nav1-pp').style.display = "none"
    } else if (nav === "about") {
        name = "Wiraysha Sahebdin";
        information = "I make: <li>cute ponponetjes</li> <li>More things</li> <li>More things</li>";
        let About = `My name is ${name} <br> ${information}`;
        document.getElementById('ww-nav1-pp').innerHTML = About;
        location = document.getElementById('map').style.display = "none";
    } else if (nav === "prizes") {
        prizes = ['10srd', '12.50srd', '15srd', '12.50srd', '15srd', '17.50srd']
        items = `
        <li onclick="Prize('prize1')" id="text-img-prizes1" class="text-img-prizes"> Small Pon size = ${prizes[0]}</li>
        <li onclick="Prize('prize2')" id="text-img-prizes2" class="text-img-prizes">Medium Pon size = ${prizes[1]}</li>
        <li onclick="Prize('prize3')" id="text-img-prizes3" class="text-img-prizes">Large size = ${prizes[2]}</li>
        <li onclick="Prize('prize4')" id="text-img-prizes4" class="text-img-prizes">Small 2 coloured = ${prizes[3]}</li>
        <li onclick="Prize('prize5')" id="text-img-prizes5" class="text-img-prizes">Medium 2 coloured = ${prizes[4]}</li>
        <li onclick="Prize('prize6')" id="text-img-prizes6" class="text-img-prizes">Large 2 coloured = ${prizes[5]}</li>`
        items.textContent = ""
        document.getElementById("ww-nav1-pp").innerHTML = items;
        location = document.getElementById('map').style.display = "none";
    } 
      else if (nav === "location") {
        address = "";
        document.getElementById('map').style.display = "inline";
        let Location = `Pick up Address/afhaal plaats:  ${address}`
        document.getElementById("ww-nav1-pp").innerHTML = Location;
    }
}
function Prize(prize) {
            let image;
            let bodyImg;
            let Prize1 = document.getElementById("prize1-example");
            let Prize2 = document.getElementById("prize2-example");
            let Prize3 = document.getElementById("prize3-example");
            let Prize4 = document.getElementById("prize4-example");
            let Prize5 = document.getElementById("prize5-example");
            let Prize6 = document.getElementById("prize6-example");
        if (prize === "prize1" ){
            bodyImg = document.getElementById('prize-paragraph');
            image = document.createElement('img');
            image.id = "prize1-example"
            image.setAttribute('src', 'wifey-pics/cute.jpg')
            bodyImg.appendChild(image);
            Prize1.style.display = "inline"
            Prize2.style.display = "none"
            Prize3.style.display = "none"
            Prize4.style.display = "none"
            Prize5.style.display = "none"
            Prize6.style.display = "none"
        }
        else if (prize === "prize2" ){
            bodyImg = document.getElementById('prize-paragraph');
            image = document.createElement('img');
            image.id = "prize2-example"
            image.setAttribute('src', 'wifey-pics/kissing.jpg')
            bodyImg.appendChild(image);
            Prize1.style.display = "none"
            Prize2.style.display = "inline"
            Prize3.style.display = "none"
            Prize4.style.display = "none"
            Prize5.style.display = "none"
            Prize6.style.display = "none"
        }
        else if (prize === "prize3" ){
            bodyImg = document.getElementById('prize-paragraph');
            image = document.createElement('img');
            image.id = "prize3-example"
            image.setAttribute('src', 'wifey-pics/cute.jpg')
            bodyImg.appendChild(image);
            Prize1.style.display = "none"
            Prize2.style.display = "none"
            Prize3.style.display = "inline"
            Prize4.style.display = "none"
            Prize5.style.display = "none"
            Prize6.style.display = "none"
        }
        else if (prize === "prize4" ){
            bodyImg = document.getElementById('prize-paragraph');
            image = document.createElement('img');
            image.id = "prize4-example"
            image.setAttribute('src', 'wifey-pics/2-colored-pon-small.jpg')
            bodyImg.appendChild(image);
            Prize1.style.display = "none"
            Prize2.style.display = "none"
            Prize3.style.display = "none"
            Prize4.style.display = "inline"
            Prize5.style.display = "none"
            Prize6.style.display = "none"
        }
        else if (prize === "prize5" ){
            bodyImg = document.getElementById('prize-paragraph');
            image = document.createElement('img');
            image.id = "prize5-example"
            image.setAttribute('src', 'wifey-pics/cute.jpg')
            bodyImg.appendChild(image);
            Prize1.style.display = "none"
            Prize2.style.display = "none"
            Prize3.style.display = "none"
            Prize4.style.display = "none"
            Prize5.style.display = "inline"
            Prize6.style.display = "none"
        }
        else if (prize === "prize6" ){
            bodyImg = document.getElementById('prize-paragraph');
            image = document.createElement('img');
            image.id = "prize6-example"
            image.setAttribute('src', 'wifey-pics/cute.jpg')
            bodyImg.appendChild(image);
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
