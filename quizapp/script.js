let allquestions = [
    {
        question: "ECM full form?",
        option: ["Exam Computer Management", "External Computer Managment", "Exam Course Material"],
        answer: "Exam Course Material"
    },
    {
        question: "Who is current prime minister?",
        option: ["Imran Khan", "Shehbaz Sharif", "Asif Ali Zardari"],
         answer: "Shehbaz Sharif"
    },
    {
        question: "HD stand for?",
        option: ["hard disk", "Human Drive", "Hard drive"],
        answer: "hard disk"
    },
    {
        question: "SSD full form?",
        option: ["Solid Solution drive", "Solid state drive", "Solid Solution driven"],
        answer: "Solid state drive"
    }
]


let index = 0
let score = 0

function loadQuestion (){

    let question = document.getElementById("question")
      question.innerHTML =  allquestions[index].question

       let myallbtn = ""
        
        allquestions[index].option.map(option=>{
            myallbtn += `
                <button onclick="checkAnswer('${option}')"> ${option} </button>
            `
            document.getElementById("btns").innerHTML = myallbtn
        })
}


function checkAnswer (select){
    correct = allquestions[index].answer
    // console.log(correct);
    if(select === correct){
        score ++
        console.log(score);     
    }
      index ++ 
      if(index < allquestions.length ){
          loadQuestion()
      }
      else{
        showresult()
      }
}

function showresult(){
    document.getElementById("question").innerHTML = "Quiz Completed!"
    document.getElementById("btns").innerHTML = `<h4> Your Score is ${score} out of ${allquestions.length} </h4>`
}


loadQuestion()