/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var video;
var videocontainer;
//on document ready
$(function() {
    video = document.getElementById('video');   
   videocontainer =  document.getElementById('videocontainer');   
   onResize();
    
  var body = Document.body;  
  window.addEventListener('resize', onResize);
}
);

function onResize(event){
      var windowHeight = $(window).height();
      var windowWidth = $(window).width();
 
      
      if(windowWidth >  1.78 * windowHeight) {
          videocontainer.style.width =  windowWidth.toString() + "px";
          videocontainer.style.height = ((9/16)* windowWidth).toString() + "px";
          var deltah = (0.57* windowWidth - windowHeight)/2.0;
           videocontainer.style.top =  "-" +  deltah.toString() + "px";
           deltaw = 0.0;
          videocontainer.style.left =   deltaw.toString() + "px";
      }
      else if(windowHeight > 0.56* windowWidth) {
          videocontainer.style.height =  windowHeight.toString() + "px";
          videocontainer.style.width = (1.79* windowHeight).toString() + "px";
           var deltah = 0.0;
             videocontainer.style.top =   deltah.toString() + "px";
             var deltaw = (1.79 * windowHeight - windowWidth)/2.0;
             videocontainer.style.left =  "-" +  deltaw.toString() + "px";
          
          
      }
//      videocontainer.style.height = window.height;
//      videocontainer.style.width = 1.78* window.height;
 
}