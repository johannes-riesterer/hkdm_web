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
    base_image.src = "images/image1.jpg";

    context.drawImage(base_image, 0, 0);
});
