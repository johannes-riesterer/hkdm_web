/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



var colors = [  "#B0D9E7", "#AEE2D0", "#ABEAB8", "#A9F2A0", "#A7FB89"];
var counter = 0;


//Warten, bis Document geladen wurde
$(function() {
    var test = document.getElementById("div_1");
    
    setInterval( function(){setColor(test, counter, colors); counter++;}, 1);
    
  
});



function setColor(element, index, theColors){
     if (element.children.length > 0) {
        setColor(element.children[0],  (index+1), theColors);
    };
    element.style.backgroundColor = theColors[index % theColors.length];  
}

