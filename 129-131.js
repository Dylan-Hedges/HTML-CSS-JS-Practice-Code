var numList = [1,2,3,4];
var arrayList = [1,2,3];
var maxList = [1,2,3];

printReverse(numList);
printReverse(["a","b","c"]);

sumArray(arrayList);
sumArray([10,3,10,4]);
sumArray([-5,100]);

maxArray(maxList);
maxArray([10,3,10,4]);
maxArray([-5,100]);


//REVERSE PRINT
function printReverse(list){
    for (var i = list.length -1; i >= 0; i--){
        console.log(list[i]);
    }
}

//COMPARISON CHECK (does not display in console, enter value manually in console)
function isUniform(uniList){
    var first = uniList[0];
    for(var i = 1; i < uniList.length; i++){
        if(uniList[i] !== first){
            return false;
        }
    return true;
    }
}

////SUM
function sumArray(sumList){
    var totalNum = 0;
    sumList.forEach(function(number){
        totalNum += number;
    });
console.log(totalNum);
}

//MAX
function maxArray(maxList){
var highestNum = maxList[0];
    for(var i = 1; i < maxList.length; i++){
        if (maxList[i] > highestNum){
            highestNum = maxList[i];
            }
    };
console.log(highestNum);
}



//----------NOTES-----------------------
//var i = list.length -1;
//we want to start at the end of the array, therefore we take the length of the array and -1 (length is always +1 greater than last indexed value)

//MAX
//var i = 1;
//we start it at index 1 as we already have the value for index 0 stored


//----------MY SOLUTION-----------------------
//var numList = [1,2,3,4];
//var uniFormList =[1,1,1,1];
//var arrayList = [1,2,3];
//var maxList = [1,2,3];
//
//
////printReverse(numList);
////printReverse(["a","b","c"]);
////
//isUniform(uniFormList);
//isUniform([1,2,3,4,5,6,7]);
//
//sumArray(arrayList);
//sumArray([10,3,10,4]);
//sumArray([-5,100]);
//
//maxArray(maxList);
//maxArray([10,3,10,4]);
//maxArray([-5,100]);


//
////COMPARISON CHECK
//function isUniform(uniList){
//    var firstItem = uniList[0];
//    uniList.forEach(function(item){
//        if (firstItem == item){
//            console.log("True");
//            }
//        else {
//            console.log("False");
//            }
//    });
//}
//
////SUM
//function sumArray(sumList){
//    var totalNum = 0;
//    sumList.forEach(function(number){
//        totalNum = totalNum + number;
//    });
//console.log(totalNum);
//}
//
////MAX
//function maxArray(maxList){
//var highestNum = 0;
//    maxList.forEach(function(number){
//        if (highestNum < number){
//            highestNum = number;
//            }
//    });
//console.log(highestNum);
//}

