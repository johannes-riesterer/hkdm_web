/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var canvas;
var context;
//on document ready
$(function() {
    canvas = document.getElementById('slideshow'),
    context = canvas.getContext('2d');

    base_image = new Image();
    base_image.src = "./images/image2.jpg";

    
    var img=document.getElementById("scream");
    
    /*
    img.src= "./images/image2.jpg";
   img.width = "100"
   img.height = "100"
    var foo = document.getElementById("cache");
    foo.appendChild(img);
    */
    
    context.drawImage(scream, 0, 0);

    
});
