//prompts the user to input the grade.
let grade = prompt('Hi User! Kindly input student marks');

//function that is able to assign the given marks with a grade
function gradeGenerator(){
    //let grade = prompt('Hi there, input student marks');
    if (grade > 79){
        return 'A';
    }
    else if(grade >= 60 && grade <= 79){
        return 'B';
    }
    else if(grade >= 49 && grade <= 59){
        return 'C';
    }
    else if(grade >= 40 && grade <= 49){
        return 'D';
    }
    else if(grade < 40){
        return 'E';
    }else { 
        return 'Kindly put a number between 0-100';
    }
}

//printing the output
console.log(gradeGenerator());