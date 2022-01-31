function calculateGPA(grades){

    var i = 0;
    var gpa = 0;
    var letterGPA = "";

    for(i=0; i<grades.length; i++)
    {
        if(grades[i]==="A"){
            gpa += 100;
        }
        else if(grades[i]==="B"){
            gpa += 80;
        }
        else if(grades[i]==="C"){
            gpa += 70;
        }
        else{
            gpa += 0;
        }
    }

    if(gpa != null && gpa != 0 && grades.length != 0){
        gpa = gpa/grades.length;  
    }  

    if(gpa == 100){
        letterGPA = "A";
    }
    else if(gpa >= 80 && gpa < 100){
        letterGPA = "B";
    }
    else if(gpa >= 70 && gpa < 80){
        letterGPA = "C";
    }
    else{
        letterGPA = "F";
    }

    displayArray(grades);
    document.write("Your GPA is " + letterGPA);
}

function displayArray(arr){
    var i = 0;
    var arraytoString = "";

    while(i<arr.length){
        if(i != arr.length-1){
            arraytoString += arr[i] + ", ";
        }
        else{
            arraytoString += arr[i];
        }
        i++;
    }
    document.write("Your grades are: " + arraytoString + "<br>");
}


calculateGPA(["B", "B", "A"]);