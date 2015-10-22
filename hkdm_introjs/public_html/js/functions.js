/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


//Dies ist ein kommentar

/*
  alles kommentar
alles kommentar
sdsd

sdsd

 */

var n = 10;
//var sNumber =sum(n);
var lNumber = loopSum(n);

var field = [ [1,2,3] , [1,2,3], [1,2,3]];


//console.
//log(sNumber);
//console.log(lNumber);
logFieldToConsole(field);


function logNameToConsole(name, lastName) {
         var text = "Hello my name is " + name + " " + lastName;
         console.log(text);
}

function logFieldToConsole(field) {
    for(var i = 0; i < field.length; i++) {
        console.log(field[i]);
        field[i] = i;
        console.log(field[i]);
    }
}


function myFavoriteNumber() {
    return 5;
}

function square(n) {
    var squareNumber = n*n;
    return squareNumber;
}


/*
 * This functions computes the sum of integers from 1 to n. 
 * It accepts only positive integers.....
 */
function  sum(n) {
    if(n <0) {
        return -1;
    }
    if(n == 0) {
        return 0;
    }
    else {
        return n + sum(n-1);
    }
}

 
function  loopSum(n) {
    var theSum = 0;
    
    for(var j = 1; j <= n ; j++) {
        theSum = theSum + j;
    }
    
    return theSum;
}
