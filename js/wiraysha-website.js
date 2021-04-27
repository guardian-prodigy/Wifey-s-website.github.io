function mode(nav) {
    let name;
    let information;
    let address;
    let phoneNumber;
    let instagram;
    let location;
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
    } else if (nav === "contact") {
        phoneNumber = "+597 897-9639";
        instagram = "Wiraysha_workshop";
        let Contact = `Phone Number: ${phoneNumber} <br> Instagram: ${instagram}`
        document.getElementById('ww-nav1-pp').innerHTML = Contact;
        location = document.getElementById('map').style.display = "none";
    } else if (nav === "location") {
        address = "";
        document.getElementById('map').style.display = "inline";
        let Location = `Pick up Address/afhaal plaats:  ${address}`
        document.getElementById("ww-nav1-pp").innerHTML = Location;
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
