console.log("Sanity!");







class GitHubRepository {
    constructor(userName, fileName, descriptionOfRepoistory, code){
        this.userName = userName; 
        this.fileName = fileName; 
        this.descriptionOfRepoistory = descriptionOfRepoistory;
        this.code = code; 

        
    }
    
    print(){
        console.log(`${this.userName}, ${this.fileName}, ${this.descriptionOfRepoistory}, ${this.code}`);
    }
   
  

}
exercise1 = () =>{
    let GitHubRepository1 = new GitHubRepository("Tommy", "The JS CW", "Tommy's js cw", true);
    GitHubRepository1.print(); 
}


//  Problem 2:



class Movie {
    constructor(movieName, rating, yearRelased){
        this.movieName = movieName;  
        this.rating = rating;  
        this.yearRelased = yearRelased;  
    }
    
    rating() 
    {
    this.rating = prompt("What is your rating from 0-10?"); 
    }

   
   YearRelased() {
this.yearRelased = prompt("What year was this movie released?"); 
   }


    print() {
        console.log(`${this.movieName}, ${this.rating}, ${this.yearRelased}`);
    }
    
}
part2 = () =>{

let movie1 = new Movie("Spiderman2", "2004 ",  " " ); 
movie1.rating(); 
movie1.YearRelased();  
movie1.print();  
}







let button = document.getElementById("update");


class Student {
constructor(studentName, codeCrew){
    this.studentName = studentName; 
    this.codeCrew = codeCrew; 
    this.grades = []; 
    
}

o
setStudentName () {
    this.studentName = prompt("What is your name, student?"); 
}

getGrades () {
    ss
let grade = { 
    assignmentName: prompt("What is the assignment name?"),
    assignmentScore: prompt("What is the assignment score?"),
}
this.grades.push(`${grade.assignmentName},  ${grade.assignmentScore}`); 
console.log(this.grades) 

}

print() {
    console.log(`${this.studentName}, ${this.codeSchoolCohort}, ${this.grades}`); 

}


}



exercise3 = () => {
let student1 = new Student(" ", " 2021", " " ,  " "); 
student1.setStudentName(); 
student1.getGrades();
student1.print();
let student2 = new Student(" ", "2021", " ", " "); 
student2.setStudentName();
student2.getGrades();
student2.print();
}
















