// Soal 1
class Score {
    constructor(subject, points, email) {
        this.subject = subject;
        this.points = points;
        this.email = email;
    }
    avgscores() {
        if (this.points.length > 1) {
            return this.points.reduce((a,b) => (a+b)/this.points.length)
        }
        else {
            // Because only get 1 points
            return this.points 
        }
    }
}

// let testScore = new Score("Matematika", [20,20,15], "test@gmail.com")
// console.log(testScore.avgscores())

// Soal 2
const data = [
    ["email", "quiz-1", "quiz-2", "quiz-3"],
    ["abduh@mail.com", 78, 89, 90],
    ["khairun@mail.com", 95, 85, 88],
    ["bondra@mail.com", 70, 75, 78],
    ["regi@mail.com", 91, 89, 93]
  ]

const viewScores = (data, subject) => {
    let resultscores = []
    // indexOf subject should be equal to data (===)
    let idxsubject = data[0].indexOf(subject)
    for (let i = 1; i < data.length; i++) {
        // Starting i from 1 due to data in arr[0] just for information
        let onescore = new Score(subject, data[i][idxsubject], data[i][0])
        resultscores.push(onescore)
    }
    return resultscores
}
// TEST CASE
let testA = viewScores(data, "quiz-1")
// viewScores(data, "quiz-2")
// viewScores(data, "quiz-3")

// Soal 3
const recapScores = (data) => {
    for (let i = 0; i < data.length; i++) {
        // starting i from 0 due to data start from 0
        let {email, points} = data[i]
        let predikat = ""
        if (points > 90) {
            predikat = "Honour"
        } else if (points < 90 && points > 80) {
            predikat = "Graduate"
        } else {
            predikat = "participant"
            // Due to no info what should "Predikat" be if below 70, I will include it as participant
        }
        console.log(`${i+1}. Email: ${email}`)
        console.log(`Points: ${points}`)
        console.log(`Predikat: ${predikat}`)
    }
}
// Tested using data get from viewScores
recapScores(testA)