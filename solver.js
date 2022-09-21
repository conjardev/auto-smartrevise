// Global variables
const nextQuestion = document.getElementById("lnkNext")
var answerDictionary = [
//  {"question":x, "answers":["a","b","c"]}
]

function getAnswer(question) {
    for (x=0; x<answerDictionary.length; x++) {
        // Loop through all answers to return the answer

        if (answerDictionary[x]["question"] == question) {
            return answerDictionary[x]["answers"]
        }
    }

    // If nothing was returned, return false
    return false
}

function pushAnswer(question, answer) {
    let found = false

    for (q=0; q<answerDictionary.length; q++) {
        if (answerDictionary[q]["question"] == question) {
            // This is the question, add the answer
            found = true
            
            let answers = answerDictionary[q]["answers"]

            if (!answers.includes(answer)) {
                // Only add the answer if it has not been added before
                answers.push(answer)
            }

            // Add the new answer to the main dictionary
            answerDictionary[q] = {"question": question, "answers":answers}
        }
    }

    if (found == false) {
        answerDictionary.push({"question":question,"answers":[answer]})

        pushAnswer(question, answer)
    }
}

function processQuestion(question, option) {
    if (option) {
        let optionText = (option.textContent)

        if (!getAnswer(question)) {
            // Question not in DB, find answer and add it
            if (optionText == "I don't know") {
                // Select "I don't know"
                option.click()

                // Wait a bit for the click to register
                setTimeout(function(){
                    // Get correct answer
                    let correctAnswer = document.getElementsByClassName("btn-success")[0].children[0].children[1].textContent

                    pushAnswer(question, correctAnswer)
                }, 1500)
            }
        } else {
            // This answer has already been logged before
            let answers = getAnswer(question)
            let answerSelected = false

            for (a=0; a<answers.length; a++) {
                if (optionText == answers[a]) {
                    // If the option is any valid answer, select it
                    option.click()
                    answerSelected = true
                }
            }

            if (answerSelected == false) {
                // If no answer was selected, select "I don't know" and push the answer to the db
                if (optionText == "I don't know") {
                    // Select "I don't know"
                    option.click()
        
                    // Wait a bit for the click to register
                    setTimeout(function(){
                        // Get correct answer
                        let correctAnswer = document.getElementsByClassName("btn-success")[0].children[0].children[1].textContent
                        pushAnswer(question, correctAnswer)
                    }, 1500)
                }
            }
        }
    }
    // Go to the next question after 2.5 seconds
    setTimeout(function(){
        nextQuestion.click()
    }, 2500)
}
 
function run() {
    // Get question text and answering options
    let question = (document.getElementById("questiontext").textContent)
    let answerOptions =(document.getElementById("answercontainer").children)

    // Clear popups
    let popups = document.getElementsByClassName("swal2-confirm swal2-styled")
    for (y=0; y<popups.length; y++) {
        popups[y].click()
    }

    // Loop through options
    for (i=0; i<answerOptions.length; i++) {
        let option = answerOptions[i]
        if (option.children.length > 0) {
            option = (option.children[0].children[0].children[1])
            processQuestion(question, option)
        }
    }
}

// Function to initiate core functionalities
function init() {
    let urlPrefix = "https://raw.githubusercontent.com/conjardev/smartrevise-solver/main/datasets/"
    // This requires JQuery to work - luckily SmartRevise uses JQuery
    $.get((urlPrefix+"index.json"), function(index, status){
        index = jQuery.parseJSON(index)
        // Loop through an index of every dataset
        for (z=0; z<index.length; z++) {
            let name = index[z] + ".json"
            $.get((urlPrefix+name), function(data, status){
                // Get the latest data
                data = jQuery.parseJSON(data)
                for (d=0; d<data.length; d++) {
                    answerDictionary.push(data[d])
                }
            });
        }
    });
}

// Start function to easily startup the entire script
function start() {
    init()
    setInterval(function(){
        run()
    }, 3500)
}

start()
