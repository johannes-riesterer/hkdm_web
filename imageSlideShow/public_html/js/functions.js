/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var canvas;
var context;


var dict = {};
var image;
var d;

dict["#image_1"] = 'images/image1.jpg'
dict["#image_2"] = 'images/image2.jpg'


//on document ready
$(function() {
    canvas = document.getElementById('slideshow'),
    context = canvas.getContext('2d');

    image = new Image();
    image.src = "./images/image1.jpg";

    image.onload = function () {
            context.drawImage(image, 0, 0);
     }
    //var img=document.getElementById("img");
    
    /*
    img.src= "./images/image2.jpg";
   img.width = "100"
   img.height = "100"
    var foo = document.getElementById("cache");
    foo.appendChild(img);
    */
    
    //context.drawImage(img, 0, 0);
  
   window.requestAnimationFrame(zoomIn);
});


function zoomIn() {
    
}

//bind listeners dynamically to all nodes that implement class .menu
$(document).on( "click", ".menu", function( event ) {
        var hash = $(this).attr('data-hash-id');
        var path = dict[hash];
         d = new Date();
         context.globalAlpha = 0.1;
         draw(0, d.getTime(), path);
 });

function draw(counter, prevTime, path) {
        image.src = path;
        
        image.onload = function () {
    
    
              context.drawImage(image, 0, 0);
            if(counter < 80 ) {  
               counter++;
                d = new Date();
               var currentTime = d.getTime();
                var dt =   currentTime- prevTime;
                var dif = (1000/25) - dt;
                if(dif > 0) {
                    setTimeout(function(){
                         d = new Date();
                        draw(counter,currentTime, path);
                    }, dif);
                }
                else {
                     d = new Date();
                    draw(counter,currentTime, path);
                }
               
        }
    
          }
          
    
}