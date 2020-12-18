function BMI(){
    let h = document.getElementById('h').value
    let w = document.getElementById('w').value
    let bmi = w/(h/100*h/100);
    let finalBmi = (bmi.toFixed(2))

    if(finalBmi<18){
    document.getElementById("result").innerHTML=`Your BMI is ${finalBmi}, you are underweight`
    }else if(finalBmi>=18 && finalBmi<=25){
    document.getElementById("result").innerHTML=`Your BMI is ${finalBmi}, you are BMI is ideal`
    }else if(finalBmi>25){
    document.getElementById("result").innerHTML=`Your BMI is ${finalBmi}, you are overweight`
    }
}