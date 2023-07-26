const data = [
    {
      question: "Who is often referred to as the Father of Indian Cinema?",
      a: "Steven Spielberg",
      b: "Alfred Hitchcock",
      c: "Satyajit Ray",
      d: " Dadasaheb Phalke",
      correct: "d",
    },
    {
      question: "Which film won the Academy Award for Best Picture in 2020?",
      a: "Joker",
      b: "Parasite",
      c: "1917",
      d: "The Shape of Water",
      correct: "b",
    },
    {
      question: "Which actor portrayed the character of Tony Stark / Iron Man in the Marvel Cinematic Universe (MCU)?",
      a: "Chris Hemsworth",
      b: "Robert Downey Jr",
      c: "Chris Evans",
      d: "Mark Ruffalo",
      correct: "b",
    },
    {
      question: "Who directed the 1994 classic film 'The Shawshank Redemption'?",
      a: "Steven Spielberg",
      b: "Quentin Tarantino",
      c: "Frank Darabont",
      d: "Martin Scorsese",
      correct: "c",
    },
    {
      question: "In the 'Star Wars' franchise, what is the famous weapon wielded by Jedi Knights and Sith Lords?",
      a: "Lightsaber",
      b: "Phaser",
      c: "Blaster",
      d: "Laser Sword",
      correct: "a",
    },
    {
      question: "Which animated film features a young Chinese woman who disguises herself as a man to take her father's place in the Chinese army?",
      a: "Moana",
      b: "Mulan",
      c: "Frozen",
      d: "Brave",
      correct: "b",
    },
    {
      question: "Who won the Academy Award for Best Actor for his role in the movie 'The Revenant'?",
      a: "Brad Pitt",
      b: "Leonardo DiCaprio",
      c: "Tom Hanks",
      d: "Christian Bale",
      correct: "b",
    },
    {
      question: "Which film is known for the quote 'You can't handle the truth!'?",
      a: "A Few Good Men",
      b: "The Godfather",
      c: "The Dark Knight",
      d: "Gladiator",
      correct: "a",
    },
    {
      question: " In the movie 'The Lord of the Rings The Fellowship of the Ring' who is entrusted with the One Ring?",
      a: "Frodo Baggins",
      b: "Aragorn",
      c: "Legolas",
      d: "Gandalf",
      correct: "a",
    },
    {
      question: "Who won the Academy Award for Best Actress for her role in the movie 'La La Land'?",
      a: "Meryl Streep",
      b: "Cate Blanchett",
      c: "Natalie Portman",
      d: " Emma Stone",
      correct: "d",
    },
  ];

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const optionA = document.getElementById("optionA")
const optionB = document.getElementById("optionB")
const optionC = document.getElementById("optionC")
const optionD = document.getElementById("optionD")

const submitBtn = document.getElementById("submit")

let currentQuiz= 0
let score = 0

loadQuiz()

function loadQuiz(){
deselectAnswers()

const currentQuizData = data[currentQuiz]

questionEl.innerText = currentQuizData.question
optionA.innerText = currentQuizData.a
optionB.innerText = currentQuizData.b
optionC.innerText = currentQuizData.c
optionD.innerText = currentQuizData.d
}

function deselectAnswers(){
    answerEls.forEach((answerEl) =>(
        answerEl.checked = false
    ))
}

function getSelected(){
    let answer

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener("click", () => {
    const answer = getSelected()

    if(answer){
        if(answer === data[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz < data.length){
            loadQuiz()
            setTimeout(loadQuiz, 1000);
        }
        else{
            quiz.innerHTML = `
            
            
    <h2> You Answered ${score}/${data.length} Quetions Correctly</h2>
    <button onclick="location.reload()">Do it again</button>

            `
        }
    }
})

