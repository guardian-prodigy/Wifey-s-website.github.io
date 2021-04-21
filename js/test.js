function buttonforimg(button) {

    let image = document.getElementById("test-img");

    if (button === "test") {
        
        image = document.getElementById("test-img").innerHTML;
        newImage = src="wifey-pics/cute.jpg";
        
    }
    document.getElementById("test-img").src = newImage;
}
function mode(button)  {
        let name;
        let age;
        let location;
        let paragraph;
    if (button === "wiraysha") {
        name = "Wiraysha"
        age = 16;
        location = "Suriname";
        paragraph = "hello"
    
}   else if  (button === "akash") {
        name = "Akash";
        age = 17;
        location = "Suriname";
        paragraph = document.getElementById("paragraph-element");
        paragraph = "test"

} else if (button === "testlol") {
    name = "test";
    age = "test";
    location = "Suriname";
    paragraph = "testlol"

}
    document.getElementById("if-id-id1").innerHTML = name;
    document.getElementById("if-id-id2").innerHTML = "Age: " + age;
    document.getElementById("if-id-id3").innerHTML = "I am from " + location;
    document.getElementById("if-id-id4").innerHTML = paragraph;
}


