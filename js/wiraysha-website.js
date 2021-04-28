function mode(nav, prize) {
    let name;
    let information;
    let address;
    let location;
    let prizes
    let items
    let image
    let bodyImg
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
        <li onclick="Prize('prize1')" id="text-img-prizes1" class="text-img-prizes"> Small size = ${prizes[0]}</li>
        <li id="text-img-prizes2" class="text-img-prizes">Medium size = ${prizes[1]}</li>
        <li id="text-img-prizes3" class="text-img-prizes">Large size = ${prizes[2]}</li>
        <li id="text-img-prizes4" class="text-img-prizes">Small 2 coloured = ${prizes[3]}</li>
        <li id="text-img-prizes5" class="text-img-prizes">Medium 2 coloured = ${prizes[4]}</li>
        <li id="text-img-prizes6" class="text-img-prizes">Large 2 coloured = ${prizes[5]}</li>`
        items.textContent = ""
        document.getElementById("ww-nav1-pp").innerHTML = items;
        location = document.getElementById('map').style.display = "none";
    } else if (prizes === "text-img-prizes1" ){
            let bodyImg = document.getElementById('nav-top');
            let image = document.createElement('img')
            image.setAttribute('src', 'https://www.bing.com/images/search?view=detailV2&ccid=zJufwwvI&id=4FF9F1487B510F3BAE7C8155D2D3C0C824EE6502&thid=OIP.zJufwwvIsPoEYwp9lXhizgHaFi&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fRcc9b9fc30bc8b0fa04630a7d957862ce%3frik%3dAmXuJMjA09JVgQ%26riu%3dhttp%253a%252f%252fwww.imgrus.ru%252fimages%252fIMG_logo.jpg%26ehk%3dzV1j80lSRgKMVpbdaWVaqeyuiyIBeH2S8KzB6VaKCec%253d%26risl%3d%26pid%3dImgRaw&exph=176&expw=235&q=img&simid=608003000801126065&ck=26F8EC31B646207A3E5C2CC8719B6CB8&selectedIndex=16&FORM=IRPRST')
            bodyImg.appendChild(image);
        } 
      else if (nav === "location") {
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
