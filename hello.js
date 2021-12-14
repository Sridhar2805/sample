/*
1. Create an Object named 'personalComputer' which will have 4 properties - 'brand', 'price', 'processor' and 'hardDisk'. The object will also have a method named 'returnPCdetails' which will return a dynamic string "This is a DELL PC. It has an Intel i7 processor and 500GB internal memory. It costs 50000 rupees."
b. Add a new property 'operatingSystem' to the 'personalComputer' object.
c. Delete the newly added property 'operatingSystem' from the 'personalComputer' object.
*/
/*
const personalComputer={
  brand:"DELL",price:"50,000", processor:"intel i7",hardDisk:"500 GB",
  returnPCdetails:function(){
    
    return this.brand,this.price,this.processor,this.hardDisk;
  }
}

document.write("This is a ", personalComputer.brand, " PC. It has an ", 
personalComputer.processor, " processor and ",personalComputer.hardDisk," internal memory. It costs ",
 personalComputer.price," rupees.")


document.write("<br>")


personalComputer["operatingSystem"]="Windows 10"
personalComputer.RAM="16GB"  //best practice


document.write(JSON.stringify(personalComputer))

document.write("<br>")

delete personalComputer.operatingSystem;
document.write(personalComputer.operatingSystem)

document.write("<br>")

/*
2. Create a function named 'findMaxNumber' which will accept one array (numbers) parameter. It should return the maximum number in the array.
a. Implement using 'for' loop
b. Implement using 'Math' JS object



const number=[10,2,8,3,6]
document.write(Math.max.apply(null,number))
document.write("<br>")

function findMaxNumber(number){
  let max= number[0]
  for(let i=1;i<number.length;i++){
    if(number[i]>max){
      max=number[i];
    }
  }
  return max;
}
document.write(findMaxNumber(number))

document.write("<br>")


/*
3. Create a class named 'avergeMarks' which will have 3 initial properties - 'English', 'Maths' and 'Science'. Your 'Person' class will also have a method to calculate Average of the 3 marks.
a. Now use the 'avergeMarks'  class to create 2 objects.



class AvergeMarks{
  constructor(english, maths, science){
    this.english=english;
    this.maths=maths;
    this.science=science;
    this.calcAvg=(english+science+maths)/3
  }
}

const a=new AvergeMarks(77,88,90)
const b=new AvergeMarks(88,67,56)
document.write(a.calcAvg)
document.write("<br>")
document.write(b.calcAvg)

document.write("<br>")


/*
4. Create a function named 'area' which will accept a parameter 'radius' and returns the area.
Create a function named 'Circumference' which will accept a parameter 'radius' and return the Circumference (2* 3.14*radius).
Now create a function named 'calculateResult' that will accept 2 parameters - 'radius' and a function (either area or circumference) and return the result.



function area(radius){
   return 3.14 * radius * radius;
  
}

function circumference(radius){
  return 2* 3.14 * radius;
}


function calculateResult(radius,callbackFn){
  callbackFn(radius);
}
console.log(area(5))
console.log(calculateResult(5,area))

*/



const fruit = "apple";
function operation(fruit){
  console.log(fruit);
}


const operation2 = function(fruit){
  const vege="carrot";
  console.log(fruit);
}

function result(flowers){
  return `fruit ${fruit} operation2.vege ${vege} flowers ${flowers}`
}

console.log(result("sunflower"));