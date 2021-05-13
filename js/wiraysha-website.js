function mode(nav) {
    let name;
    let information;
    let address;
    let location;
    
    let item1; let body1;
    document.getElementById('ww-nav1-pp').style.display = "grid"

    if (nav === "home") {
        let content = "";
        document.getElementById('ww-nav1-pp').innerHTML = content;
        location = document.getElementById('map').style.display = "none";
        document.getElementById('ww-nav1-pp').style.display = "none"
        let paragraph = document.getElementById('ww-nav1-pp1').style.display = "none";
    } else if (nav === "about") {
        name = "Wiraysha Sahebdin";
        information = `I make: <li class="ponponetjes">Ponponetjes</li> <li>Pon Letters</li> <li>Pon Shapes</li>`;
        let About = `My name is ${name} <br> ${information}`;
        document.getElementById('ww-nav1-pp').innerHTML = About;
        location = document.getElementById('map').style.display = "none";
        let paragraph = document.getElementById('ww-nav1-pp1').style.display = "none";
            
    }
      else if (nav === "location") {
        address = "";
        document.getElementById('map').style.display = "inline";
        let Location = `Pick up Address/afhaal plaats:  ${address}`
        document.getElementById("ww-nav1-pp").innerHTML = Location;
        let paragraph = document.getElementById('ww-nav1-pp1').style.display = "none";
    }
}

function Item() {
    let home = document.getElementById('item-button-id1')
    
    let about = document.getElementById('item-button-id2')
    
    let location = document.getElementById('item-button-id3')
    
    let Items = document.getElementById('item-button-id4');
    let paragraph = document.getElementById('ww-nav1-pp1');
    
    let button = 1;

    let a1; let a2; let a3; let a4; let a5;
    let a = [a1, a2, a3, a4, a5]
 
    Items.addEventListener('click', function Button(e) {
        if (e.target == Items && button == 1) {
            document.getElementById('map').style.display = "none";
            button = 0;
            a1 = document.createElement('a');
            a1.id = "a1-id1"; a1.textContent = "PonPonetjes/Prizes";
            a1.className = "buttons";
            a1.setAttribute('href', 'ponponetjes.html');
            paragraph.appendChild(a1);
            a2 = document.createElement('a');
            a2.id = "a1-id2"; a2.textContent = "Pon Shapes/Prizes";
            a2.className = "buttons"
            paragraph.appendChild(a2);
            a3 = document.createElement('a');
            a3.id = "a1-id3"; a3.textContent = "Pon wristbands/Prizes";
            a3.className = "buttons"
            paragraph.appendChild(a3);
            a4 = document.createElement('a');
            a4.id = "a1-id4"; a4.textContent = "Pon Headbands/Prizes";
            a4.className = "buttons"
            paragraph.appendChild(a4);
            
            paragraph.style.display = "grid";document.getElementById('ww-nav1-pp').style.display = "none"
            location = document.getElementById('map').style.display = "none";
        }
         else if (e.target != Items || button == 0) {
            paragraph.removeChild(a1)
            paragraph.removeChild(a2)
            paragraph.removeChild(a3)
            paragraph.removeChild(a4)
            paragraph.style.display = "none"
            button = 1;
            document.getElementById('ww-nav1-pp').style.display = "none";
            location = document.getElementById('map').style.display = "none";
        }
    Items.addEventListener('click', function(e) {
        if (e.target == Items) {
            Button()
            document.getElementById('ww-nav1-pp').style.display = "none"
            location = document.getElementById('map').style.display = "none";
        } else if (e.target == home || about || location) {
            document.getElementById('ww-nav1-pp').style.display = "none"
            paragraph.style.display = "none";
            location = document.getElementById('map').style.display = "none";
            button = 1;
    }}, {once: true})
    Items.addEventListener('click', function (event) {
        if (event.target != Items ) {
            paragraph.style.display = "none";
            paragraph.removeChild(a1);
            paragraph.removeChild(a2);
            paragraph.removeChild(a3);
            paragraph.removeChild(a4);
            paragraph.removeChild(a5);
            button = 1;
        } else if (event.target == a) {
            document.getElementById('map').style.display = "none";
            button = 0;
            a1 = document.createElement('button');
            a1.id = "a1-id1"; a1.textContent = "PonPonetes";
            a1.className = "buttons"
            paragraph.appendChild(a1);
            a2 = document.createElement('button');
            a2.id = "a1-id2"; a2.textContent = "Pon Letters";
            a2.className = "buttons"
            paragraph.appendChild(a2);
            a3 = document.createElement('button');
            a3.id = "a1-id3"; a3.textContent = "Pon Shapes";
            a3.className = "buttons"
            paragraph.appendChild(a3);
            a4 = document.createElement('button');
            a4.id = "a1-id4"; a4.textContent = "Pon wristbands";
            a4.className = "buttons"
            paragraph.appendChild(a4);
            a5 = document.createElement('button');
            a5.id = "a1-id5"; a5.textContent = "Pon Headbands";
            a5.className = "buttons"
            paragraph.appendChild(a5);
            paragraph.style.display = "grid";document.getElementById('ww-nav1-pp').style.display = "none"
            location = document.getElementById('map').style.display = "none";
        }
    })
})
    
}
Item()

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
