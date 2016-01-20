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

var latestTimeStamp;

var imgHeight;
var imgWidth

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
  
   //window.requestAnimationFrame(zoomIn);
   // setInterval(scroll, (1000/25));
});


function scroll() {
    
}

//bind listeners dynamically to all nodes that implement class .menu
$(document).on( "click", ".menu", function( event ) {
        var hash = $(this).attr('data-hash-id');
        var path = dict[hash];
         d = new Date();
         context.globalAlpha = 0.1;
         latestTimeStamp = d.getTime();
          image.src = path;
        
        image.onload = function () {
         draw(0, d.getTime(), latestTimeStamp);
     }
 });

function draw(counter, prevTime, timeStamp) {
        if(timeStamp >= latestTimeStamp) {
            context.drawImage(image,  0, 100, 800, 600, 0, 0, 1800, 1600);
            if(counter < 80) {  
               counter++;
                d = new Date();
               var currentTime = d.getTime();
                var dt =   currentTime- prevTime;
                var dif = (1000/25) - dt;
                if(dif > 0) {
                    setTimeout(function(){
                         d = new Date();
                        draw(counter,currentTime,timeStamp);
                    }, dif);
                }
                else {
                     d = new Date();
                    draw(counter,currentTime, timeStamp);
                }
               
             }
    
          }
      
    
}