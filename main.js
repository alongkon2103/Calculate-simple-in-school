function circle(value){
    let result = (value * value)*3.14159
   document.getElementById('result_circle').innerHTML = `Area of Circle is : ${result.toFixed(2)}`
}
function Triangle(value,value2){
    let result = ( 0.5 * value * value2)
    document.getElementById('result_triangle').innerHTML = `Area of Triangle is : ${result.toFixed(2)}`
}
function Squre(value,value2){
    let result = value * value2
    document.getElementById('result_square').innerHTML = `Area of Squre is : ${result.toFixed(2)}`
}
function Parallelogram(value,value2){
    let result = value * value2
    document.getElementById('result_parallelogram').innerHTML = `Area of Parallelogram is : ${result.toFixed(2)}`
}
function Trapezoid(value,value2){
    let result = 0.5 * value * value2
    document.getElementById('result_trapezoid').innerHTML = `Area of Trapezoid is : ${result.toFixed(2)}`
}

function squreroot(value){
    document.getElementById('result_squareroot').innerHTML = `The square root of ${value} is ${Math.sqrt(value).toFixed(2)}`
}

function Basenumber(value){
    var table
    table='<table countsubject class= "table table text-center"> <tr><th>Binary(Base2)</th><th>Sesary(Base6)</th><th>Octal(Base8)</th><th>Decimal(Base10)</th></tr>'
    let number = value
    let base2 = parseInt(value).toString(2)
    let base6 = parseInt(value).toString(6)
    let base8 = parseInt(value).toString(8)
    let base10 = parseInt(value).toString(10)
    table+=`<tr><td>${base2}</td><td>${base6}</td><td>${base8}</td><td>${base10}</td></tr>`
    table+='</table>'
    document.getElementById("Basenumber_table").innerHTML += table
    
}



function Multiplication(value){
    let table
    table=`<h4 class="text-center mb-2">Multiplication Table of ${value}</h4> <table countsubject class= "table table-striped mb-5">`
    if(value==null || value==""){
        alert("กรอกแม่สูตรคูณ")
        return 0
    }
       for(i=1;i<=12;i++){
          table+=`<tr><td>${value} x ${i}</td><td>${value * i}</td></tr>`
       }
    table+='</table>'
    document.getElementById("result_multiplication").innerHTML += table
}

function createForm(value) {
    if(value == '' || value==NaN){
        alert("กรุณากรอกจำนวนวิชา")
        return 0
    }
    let inputscore = ''
    let btn ='<button type="button" class="btn btn-primary" onclick="calculateGrades()">Calculate</button> <button type="button" class="btn btn-danger" onclick="Clear()">Clear</button><br>'
    
    for (let i = 1; i <= (value); i++) {
        inputscore += `<p >Subject name: <input class="form-control form-control-sm shadow-none w-25" type="text" id="subject${i}" /></p><p>Score : <input class="form-control form-control-sm shadow-none w-25" type="number" id="score${i}" /></p><hr>`
    }
    document.getElementById('gradeForms').innerHTML = inputscore + btn
}
function calculateGrades() {
    const countsubject = parseInt(document.getElementById('countsubject').value)
    let score = []
    let subject = []
    let grade =[]
    
    for (let i = 1; i <= countsubject; i++) {
        score[i] = parseFloat(document.getElementById('score' + i).value)
        subject[i] = document.getElementById('subject' + i).value
        if(score[i] == '' || score[i] == NaN || subject[i] == ''){
            alert ("กรุณากรอกคะแนนหรือชื่อวิชาให้ครบทุกช่อง")
            return 0;
        }

    }
    console.log(score,subject)
    
    for(let i =1;i<=countsubject;i++){
        if (score[i] >= 80) {
            grade[i] = 4.00;
        } else if (score[i] >= 75) {
            grade[i] = 3.50;
        } else if (score[i] >= 70) {
            grade[i] = 3.00;
        } else if (score[i] >= 65) {
            grade[i] = 2.50;
        } else if (score[i] >= 60) {
            grade[i] = 2.00;
        } else if (score[i] >= 55) {
            grade[i] = 1.50;
        } else if (score[i] >= 50) {
            grade[i] = 1.00;
        } else {
            grade[i] = 0.00;
        }

    }
    let table
    table=`<h4 class="text-center mb-2">Grade</h4> <table  class= "text-center table table-striped mb-5">`
    for(i=1;i<=countsubject;i++){
        table+=`<th>${subject[i]}</th>`
     }
     table+='<tr>'
    for(i=1;i<=countsubject;i++){
          table+=`<td>${grade[i]}</td>`
       }
    table+='</tr></table>'
    document.getElementById("result_grade").innerHTML += table
}

function Clear(){
  
    document.getElementById("gradeForms").innerHTML = ""
    document.getElementById("result_grade").innerHTML = ""
    document.getElementById("countsubject").value = ""
   
}

