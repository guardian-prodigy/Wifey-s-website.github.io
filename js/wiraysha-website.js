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
    }
      else if (nav === "location") {
        let map = document.getElementById('map');
        map.style.display = "grid";
        let Location = `Pick up Address/afhaal plaats:`;
        document.getElementById("ww-nav1-pp").innerHTML = Location;
        let paragraph = document.querySelector('.ww-nav1-pp1').style.display = "none";
    }
}

function Item() {
    let home = document.getElementById('item-button-id1')
    
    let about = document.getElementById('item-button-id2')
    
    let location = document.getElementById('item-button-id3')
    
    let Items = document.getElementById('item-button-id4');
    let paragraph = document.querySelector('.ww-nav1-pp1');
    
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
            a2.id = "a1-id2"; a2.textContent = "Pon Headbands(coming soon)";
            a2.className = "buttons";
            a2.setAttribute('href', 'headbands.html');
            paragraph.appendChild(a2);
            a3 = document.createElement('a');
            a3.id = "a1-id3"; a3.textContent = "Pon wristbands(coming soon)";
            a3.className = "buttons"
            paragraph.appendChild(a3);
            a4 = document.createElement('a');
            a4.id = "a1-id4"; a4.textContent = "Pon Shapes(coming sooon)";
            a4.className = "buttons"
            paragraph.appendChild(a4);
            paragraph.style.display = "grid";document.getElementById('ww-nav1-pp').style.display = "none";
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

