// =====================================================
// HOME PAGE
// =====================================================

let startQuizBtn = document.getElementById("startQuizBtn");

if (startQuizBtn) {

    startQuizBtn.addEventListener("click", function () {

        window.location.href = "choices.html";

    });

}


// =====================================================
// CATEGORY PAGE
// =====================================================

let technologyCard = document.getElementById("technologyCard");
let scienceCard = document.getElementById("scienceCard");
let historyCard = document.getElementById("historyCard");
let sportsCard = document.getElementById("sportsCard");
let entertainmentCard = document.getElementById("entertainmentCard");
let geographyCard = document.getElementById("geographyCard");


function selectCategory(category) {

    localStorage.setItem("category", category);

    window.location.href = "quiz.html";

}


if (technologyCard) {

    technologyCard.addEventListener("click", function () {

        selectCategory("Technology");

    });

}


if (scienceCard) {

    scienceCard.addEventListener("click", function () {

        selectCategory("Science");

    });

}


if (historyCard) {

    historyCard.addEventListener("click", function () {

        selectCategory("History");

    });

}


if (sportsCard) {

    sportsCard.addEventListener("click", function () {

        selectCategory("Sports");

    });

}


if (entertainmentCard) {

    entertainmentCard.addEventListener("click", function () {

        selectCategory("Entertainment");

    });

}


if (geographyCard) {

    geographyCard.addEventListener("click", function () {

        selectCategory("Geography");

    });

}


// =====================================================
// QUESTION DATA
// =====================================================

let questionsData = {

    Technology: [

        {
            question: "Which language is primarily used in web development?",
            options: ["Python", "JavaScript", "C++", "Java"],
            answer: "B"
        },

        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyperlinks Text Mark Language",
                "Home Tool Markup Language"
            ],
            answer: "A"
        },

        {
            question: "Which language is used to style a webpage?",
            options: ["HTML", "Python", "CSS", "C++"],
            answer: "C"
        },

        {
            question: "Which symbol is used for an ID selector in CSS?",
            options: [".", "#", "*", "@"],
            answer: "B"
        },

        {
            question: "Which keyword can declare a variable in JavaScript?",
            options: ["variable", "var", "define", "letvar"],
            answer: "B"
        },

        {
            question: "Which method selects an element by its ID?",
            options: [
                "getElementById()",
                "getElement()",
                "selectById()",
                "findId()"
            ],
            answer: "A"
        },

        {
            question: "Which company developed JavaScript?",
            options: ["Microsoft", "Google", "Netscape", "Apple"],
            answer: "C"
        },

        {
            question: "Which language runs directly in a web browser?",
            options: ["JavaScript", "C", "Java", "C++"],
            answer: "A"
        },

        {
            question: "What does CSS mainly control?",
            options: [
                "Database",
                "Webpage styling",
                "Server hardware",
                "Operating system"
            ],
            answer: "B"
        },

        {
            question: "Which HTML tag is used to create a button?",
            options: [
                "<button>",
                "<btn>",
                "<click>",
                "<buttonTag>"
            ],
            answer: "A"
        }

    ],


    Science: [

        {
            question: "What is the chemical symbol for water?",
            options: ["CO2", "O2", "H2O", "NaCl"],
            answer: "C"
        },

        {
            question: "What is the center of an atom called?",
            options: ["Electron", "Nucleus", "Proton", "Neutron"],
            answer: "B"
        },

        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Venus"],
            answer: "B"
        },

        {
            question: "What force pulls objects toward Earth?",
            options: ["Friction", "Magnetism", "Gravity", "Pressure"],
            answer: "C"
        },

        {
            question: "What gas do humans need for respiration?",
            options: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
            answer: "A"
        },

        {
            question: "What is the boiling point of water at sea level?",
            options: ["50°C", "75°C", "100°C", "150°C"],
            answer: "C"
        },

        {
            question: "Which organ pumps blood around the human body?",
            options: ["Lungs", "Brain", "Heart", "Kidney"],
            answer: "C"
        },

        {
            question: "What is the SI unit of force?",
            options: ["Joule", "Newton", "Watt", "Pascal"],
            answer: "B"
        },

        {
            question: "Which vitamin is produced when skin is exposed to sunlight?",
            options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
            answer: "D"
        },

        {
            question: "How many bones are there approximately in an adult human body?",
            options: ["106", "206", "306", "406"],
            answer: "B"
        }

    ],


    History: [

        {
            question: "Who was the first Prime Minister of India?",
            options: [
                "Mahatma Gandhi",
                "Jawaharlal Nehru",
                "Sardar Patel",
                "Rajendra Prasad"
            ],
            answer: "B"
        },

        {
            question: "Who was known as the Father of the Nation in India?",
            options: [
                "Subhas Chandra Bose",
                "Bhagat Singh",
                "Mahatma Gandhi",
                "Jawaharlal Nehru"
            ],
            answer: "C"
        },

        {
            question: "When did India gain independence?",
            options: ["1945", "1946", "1947", "1950"],
            answer: "C"
        },

        {
            question: "Who founded the Maurya Empire?",
            options: [
                "Ashoka",
                "Chandragupta Maurya",
                "Akbar",
                "Harsha"
            ],
            answer: "B"
        },

        {
            question: "Who built the Taj Mahal?",
            options: [
                "Akbar",
                "Shah Jahan",
                "Aurangzeb",
                "Babur"
            ],
            answer: "B"
        },

        {
            question: "Who was the first President of India?",
            options: [
                "Dr. Rajendra Prasad",
                "S. Radhakrishnan",
                "Jawaharlal Nehru",
                "Sardar Patel"
            ],
            answer: "A"
        },

        {
            question: "Which movement was launched by Gandhi in 1942?",
            options: [
                "Non-Cooperation Movement",
                "Quit India Movement",
                "Swadeshi Movement",
                "Civil Disobedience Movement"
            ],
            answer: "B"
        },

        {
            question: "Who was the founder of the Mughal Empire in India?",
            options: ["Akbar", "Babur", "Shah Jahan", "Humayun"],
            answer: "B"
        },

        {
            question: "The Battle of Plassey took place in which year?",
            options: ["1757", "1764", "1857", "1947"],
            answer: "A"
        },

        {
            question: "Who was known as Netaji?",
            options: [
                "Bhagat Singh",
                "Subhas Chandra Bose",
                "Bal Gangadhar Tilak",
                "Lal Bahadur Shastri"
            ],
            answer: "B"
        }

    ],


    Sports: [

        {
            question: "How many players are there in a cricket team?",
            options: ["9", "10", "11", "12"],
            answer: "C"
        },

        {
            question: "How many players are there in a football team on the field?",
            options: ["9", "10", "11", "12"],
            answer: "C"
        },

        {
            question: "Which country won the first Cricket World Cup?",
            options: ["India", "Australia", "West Indies", "England"],
            answer: "C"
        },

        {
            question: "How many rings are there in the Olympic symbol?",
            options: ["4", "5", "6", "7"],
            answer: "B"
        },

        {
            question: "Which sport uses a shuttlecock?",
            options: ["Tennis", "Badminton", "Hockey", "Football"],
            answer: "B"
        },

        {
            question: "How many players are on a basketball team on the court?",
            options: ["4", "5", "6", "7"],
            answer: "B"
        },

        {
            question: "Which country is famous for the sport of sumo wrestling?",
            options: ["China", "Japan", "India", "Brazil"],
            answer: "B"
        },

        {
            question: "In which sport is Wimbledon famous?",
            options: ["Cricket", "Football", "Tennis", "Golf"],
            answer: "C"
        },

        {
            question: "How many stumps are there at one end of a cricket pitch?",
            options: ["2", "3", "4", "5"],
            answer: "B"
        },

        {
            question: "Which sport is associated with the term 'checkmate'?",
            options: ["Boxing", "Chess", "Tennis", "Golf"],
            answer: "B"
        }

    ],


    Entertainment: [

        {
            question: "Which platform is famous for streaming movies and series?",
            options: ["Netflix", "Google Maps", "Gmail", "Calculator"],
            answer: "A"
        },

        {
            question: "Which industry is based in Mumbai and is famous for Hindi films?",
            options: ["Hollywood", "Bollywood", "Tollywood", "Kollywood"],
            answer: "B"
        },

        {
            question: "Which instrument has black and white keys?",
            options: ["Guitar", "Piano", "Drum", "Flute"],
            answer: "B"
        },

        {
            question: "Which fictional superhero is also known as the Dark Knight?",
            options: ["Superman", "Iron Man", "Batman", "Thor"],
            answer: "C"
        },

        {
            question: "Which movie series features the character Harry Potter?",
            options: [
                "Harry Potter",
                "Star Wars",
                "Avengers",
                "Jurassic Park"
            ],
            answer: "A"
        },

        {
            question: "Which device is commonly used to play video games?",
            options: ["Console", "Printer", "Scanner", "Router"],
            answer: "A"
        },

        {
            question: "Which art form involves acting in front of an audience?",
            options: ["Theatre", "Painting", "Sculpture", "Photography"],
            answer: "A"
        },

        {
            question: "Which superhero carries a shield with a star?",
            options: ["Batman", "Captain America", "Hulk", "Flash"],
            answer: "B"
        },

        {
            question: "Which fictional character lives in a pineapple under the sea?",
            options: [
                "Mickey Mouse",
                "SpongeBob SquarePants",
                "Tom",
                "Scooby-Doo"
            ],
            answer: "B"
        },

        {
            question: "Which genre usually involves fear and suspense?",
            options: ["Comedy", "Horror", "Romance", "Musical"],
            answer: "B"
        }

    ],


    Geography: [

        {
            question: "What is the capital of India?",
            options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
            answer: "C"
        },

        {
            question: "Which is the largest continent?",
            options: ["Africa", "Asia", "Europe", "Australia"],
            answer: "B"
        },

        {
            question: "Which is the largest ocean?",
            options: [
                "Atlantic Ocean",
                "Indian Ocean",
                "Pacific Ocean",
                "Arctic Ocean"
            ],
            answer: "C"
        },

        {
            question: "Which country is known as the Land of the Rising Sun?",
            options: ["China", "Japan", "India", "Thailand"],
            answer: "B"
        },

        {
            question: "Which is the highest mountain in the world?",
            options: [
                "K2",
                "Mount Everest",
                "Kangchenjunga",
                "Makalu"
            ],
            answer: "B"
        },

        {
            question: "Which desert is the largest hot desert in the world?",
            options: [
                "Gobi Desert",
                "Sahara Desert",
                "Thar Desert",
                "Kalahari Desert"
            ],
            answer: "B"
        },

        {
            question: "Which river is the longest river in India?",
            options: ["Yamuna", "Ganga", "Godavari", "Narmada"],
            answer: "B"
        },

        {
            question: "Which country has the city of Paris as its capital?",
            options: ["Italy", "France", "Germany", "Spain"],
            answer: "B"
        },

        {
            question: "Which is the smallest continent?",
            options: [
                "Europe",
                "Australia",
                "South America",
                "Antarctica"
            ],
            answer: "B"
        },

        {
            question: "Which imaginary line divides Earth into Northern and Southern Hemispheres?",
            options: [
                "Tropic of Cancer",
                "Equator",
                "Prime Meridian",
                "Tropic of Capricorn"
            ],
            answer: "B"
        }

    ]

};


// =====================================================
// QUIZ LOGIC
// =====================================================

let questionNumber = document.getElementById("questionNumber");
let question = document.getElementById("question");

let optionA = document.getElementById("optionA");
let optionB = document.getElementById("optionB");
let optionC = document.getElementById("optionC");
let optionD = document.getElementById("optionD");

let nextBtn = document.getElementById("nextBtn");

let categoryName = document.getElementById("categoryName");
let feedback = document.getElementById("feedback");


if (question) {

    let selectedCategory = localStorage.getItem("category");

    let questions = questionsData[selectedCategory];

    let currentQuestionIndex = 0;

    let selectedAnswer = "";

    let score = 0;


    categoryName.textContent = selectedCategory;


    function loadQuestion() {

        let currentQuestion =
            questions[currentQuestionIndex];


        questionNumber.textContent =
            "Question " +
            (currentQuestionIndex + 1) +
            " / " +
            questions.length;


        question.textContent =
            currentQuestion.question;


        optionA.textContent =
            "A. " + currentQuestion.options[0];

        optionB.textContent =
            "B. " + currentQuestion.options[1];

        optionC.textContent =
            "C. " + currentQuestion.options[2];

        optionD.textContent =
            "D. " + currentQuestion.options[3];


        selectedAnswer = "";

        feedback.textContent = "";


        optionA.classList.remove("selected");
        optionB.classList.remove("selected");
        optionC.classList.remove("selected");
        optionD.classList.remove("selected");

    }


    loadQuestion();


    optionA.addEventListener("click", function () {

        selectedAnswer = "A";

        optionA.classList.add("selected");
        optionB.classList.remove("selected");
        optionC.classList.remove("selected");
        optionD.classList.remove("selected");

    });


    optionB.addEventListener("click", function () {

        selectedAnswer = "B";

        optionA.classList.remove("selected");
        optionB.classList.add("selected");
        optionC.classList.remove("selected");
        optionD.classList.remove("selected");

    });


    optionC.addEventListener("click", function () {

        selectedAnswer = "C";

        optionA.classList.remove("selected");
        optionB.classList.remove("selected");
        optionC.classList.add("selected");
        optionD.classList.remove("selected");

    });


    optionD.addEventListener("click", function () {

        selectedAnswer = "D";

        optionA.classList.remove("selected");
        optionB.classList.remove("selected");
        optionC.classList.remove("selected");
        optionD.classList.add("selected");

    });


    nextBtn.addEventListener("click", function () {

        if (selectedAnswer === "") {

            feedback.textContent =
                "Please select an answer.";

            return;

        }


        let currentQuestion =
            questions[currentQuestionIndex];


        if (selectedAnswer === currentQuestion.answer) {

            score++;

            feedback.textContent =
                "Correct! 🎉";

        }

        else {

            feedback.textContent =
                "Wrong answer ❌";

        }


        setTimeout(function () {

            currentQuestionIndex++;


            if (currentQuestionIndex >= questions.length) {

                localStorage.setItem("score", score);

                window.location.href = "result.html";

                return;

            }


            loadQuestion();

        }, 600);

    });

}


// =====================================================
// RESULT PAGE
// =====================================================

let scoreElement = document.getElementById("score");
let resultCategory = document.getElementById("resultCategory");
let resultMessage = document.getElementById("resultMessage");

let tryAgainBtn = document.getElementById("tryAgainBtn");
let homeBtn = document.getElementById("homeBtn");


if (scoreElement) {

    let finalScore =
        localStorage.getItem("score");

    let finalCategory =
        localStorage.getItem("category");


    scoreElement.textContent = finalScore;

    resultCategory.textContent =
        finalCategory;


    if (Number(finalScore) >= 8) {

        resultMessage.textContent =
            "Excellent work! 🏆";

    }

    else if (Number(finalScore) >= 5) {

        resultMessage.textContent =
            "Good job! Keep practicing! 💪";

    }

    else {

        resultMessage.textContent =
            "Keep learning and try again! 📚";

    }


    tryAgainBtn.addEventListener("click", function () {

        window.location.href = "quiz.html";

    });


    homeBtn.addEventListener("click", function () {

        window.location.href = "home.html";

    });

}