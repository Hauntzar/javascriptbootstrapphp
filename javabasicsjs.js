// Statements
document.write ("Hello World");
// Variables
var day;
years = 35; // you don't need to put var in javascript but it makes it nicer looking
var assignValue = 51232;
var someText = " years old";
var gameOver = true;

// Functions
//alert ( years + someText); // alert sends a message to the user
function saySomething() {
// all statements go inside curly braces

    alert("this is a function");
} 
// saySomething();

function addSomething (num, str, yr, as) {
    var add = num+str;
    var add2 = yr+as
    alert(add)
    alert(add2)
}
addSomething(years,someText,years,assignValue)

// conditional
/* 
if (food=="Apple") {
    alert("nah")
}
else {
    alert("yah")
}
*/
// get element by id
function changeStyle() {
    var text = document.getElementById ("para1").style.backgroundColor = "red"; // pull out hyphen for javascript except for -left -top -bottom -right
    var paragraph = document.getElementsByTagName("p");
    var ChangePara1Text = paragraph[1].style.backgroundColor = "Blue";

    for (var i =0; i < paragraph.length; i++){
        var ChangeParaText = paragraph[i].style.fontStyle = "italic";
    }
}
// change inner html
function changeStyle1() {
    var paragraphs = document.getElementsByClassName('para');
    var changeText = paragraph[0].innerHTML = "NEW TEXT 1";
} 
// reading content
function changeStyle1() {
    var paragraphs = document.getElementsByClassName('para');
    var firstParaText = paragraph[0].innerHTML;
    var secondParaText = paragraph[0].innterHTML;
    var changeText = paragraph[0].innerHTML = firstParaText+secondParaText;
}
// changing src property
function changeStyle1() {
    var paragraphs = document.getElementById('image1');
    document.getElementById("image1").src="Blastoise.png";
}

// create element
function newParagraph() {
    var element1 = document.createElement ("p");
    var main = document.getElementById("main");
    main.appendChild(element);

    var text = document.createTextNode("Text");
    element.appendChild(text);

    // create attribute
    var pAttribute = document.createAttribute("id"); // can be class, lang, etc
    pAttribute.value = "test";
    element.setAttributeNode(pAttribute)
}
// remove sections
function removeSection() {
    var element2 = document.getElementsByTagName("h2")[2];
    var parent2 = elementH.parentNode;
    parent2.removeChild(element2);

}
// childnodes
function targetChild() {
    var parent = document.getElementById("parent");
    var child = parent.childNodes[];
    var child = parent.firstElementChild;
}
// parentnodes
function targetParent() {
    var child = document.getElementById("child");
    var parent = child.parentNode[];
    var sibling = child.nextElementSibling;
    var sibling = child.previousElementSibling;
}

function confirmation1() {
    var confirmation = confirm("these changes are final");
    if (confirmation == true){
        //
    }
}

// objects

var car = (type: "compact", color: "Blue", miles: 5000);

function car(type, color, miles) {
    this.type = type;
    this.color = color;
    this.miles = miles;
}
var car1 = new car("Compact", "blue", 1232);

// change page
function changePage() {
    window.location="index2.html"
}