var Quiz = require('../models/Quiz');
var Results = require('../models/Results');

/**
 * POST /create
 */
exports.create = function (req, res, next) {
    var errors = req.validationErrors();

    if (errors) {
        return res.status(400).send(errors);
    }

    var quiz = new Quiz({
        name: 'Personality Test 2',
        description: 'Let\'s find your personality type!',
        quizType: [
            {
                name: 'Based on 16Personality',
                description: 'For demo',
                isActive: 'true'
            }
        ],

    });

    quiz.save().then(function (results) {
        res.json(quiz);
    }).catch(function (err) {
        console.log(err);
    })



};

/**
 * POST /create
 */
exports.createQuestions = function (req, res, next) {
    var errors = req.validationErrors();

    if (errors) {
        return res.status(400).send(errors);
    }


    Quiz.findOne({ name: 'Personality Test 2' }, function (err, quiz) {
        if (quiz) {
            console.log('found');
            var choices = [

                {
                    value: "-3",
                    text: "Mức -3"
                },
                {
                    value: "-2",
                    text: "Mức -2"
                },
                {
                    value: "-1",
                    text: "Mức -1"
                },
                {
                    value: "0",
                    text: "Mức 0"
                },
                {
                    value: "1",
                    text: "Mức 1"
                },
                {
                    value: "2",
                    text: "Mức 2"
                },
                {
                    value: "3",
                    text: "Mức 3"
                }
            ];

            var questions = [{
                questionType: 'radio',
                questionText: 'Bạn thấy khó để giao tiếp với người khác',
                questionImageUrl: '',
                choices: choices
            },
            {
                questionType: 'radio',
                questionText: 'Bạn chấp nhận sự phản bội của bạn trai/gái?',
                questionImageUrl: '',
                choices: choices
            },
            {
                questionType: 'radio',
                questionText: 'Bạn cảm thấy thoải mái ở mức độ nào khi có áp lực?',
                questionImageUrl: '',
                choices: choices
            }
            ]

            //update quiz
            quiz.questions = questions;
            quiz.save(function (err) {
                if (err) throw err;

                console.log('User successfully updated!');
            });
        }

    });
}

/**
 * POST /createUserInfo
 */
exports.createUserInfo = function (req, res, next) {
    //console.log('Hey called');
    var errors = req.validationErrors();

    if (errors) {
        return res.status(400).send(errors);
    }

    // let age = req.body.age;
    // let gender = req.body.gender;
    // let subjects = req.body["subjects[]"];
    // let userInfo = { age, gender, subjects};

    //console.log(req.body);
    // console.log(req.body.userInfo);
    // console.log(req.body.quizResult);
    var userInfo = req.body.userInfo;
    var quizResult = req.body.quizResult.quizResult;
    console.log(quizResult);
    var questions = [];
    quizResult.forEach(function (question) {
        questions.push({
            id: question.id,
            value: question.value,
            questionGroup: question.questionGroup
        })
    })

    var conclusion = calculateConclusion(questions);
    var result = new Results({
        userId: userInfo.userId,
        fullName: userInfo.fullName,
        email: userInfo.email,
        age: userInfo.age,
        gender: userInfo.gender,
        otherSubject: userInfo.otherSubject,
        otherSubjectScore: userInfo.otherSubjectScore,
        otherHobby: userInfo.otherHobby,
        subjects: userInfo.subjects,
        subjectScores: userInfo.subjectScores,
        hobbies: userInfo.hobbies,
        questions: questions,
        conclusion: conclusion
    });

    result.save().then(function (results) {
        console.log("Saved" + results);
         res.send({ msg: 'Save done' });
    }).catch(function (err) {
        console.log(err);
    })
}


function calculateConclusion(questions) {
    var mindTotal = 0;
    var introverted = 0, extraverted = 0; //mind
    var observant = 0, intuitive = 0; //energy
    var feeling = 0, thinking = 0; //nature
    var prostecting = 0, judging = 0; //tactics
    var turbulent = 0, assertive = 0; //identity
    var mindChar, energyChar, natureChar, tacticsChar, identityChar;

    questions.forEach(function (question) {
        var quesValue = parseInt(question.value, 10);

        switch (question.questionGroup) {
            case 'mind':
                if (quesValue >= 0) {
                    extraverted += quesValue;
                }
                else {
                    introverted += quesValue;
                }

                mindChar = Math.abs(extraverted) > Math.abs(introverted)
                    ? 'E'
                    : 'I'
                break;
            case 'energy':
                if (quesValue >= 0) {
                    intuitive += quesValue;
                }
                else {
                    observant += quesValue;
                }

                energyChar = Math.abs(intuitive) > Math.abs(intuitive)
                    ? 'I'
                    : 'S'
                break;
            case 'nature':
                if (quesValue >= 0) {
                    thinking += quesValue;
                }
                else {
                    feeling += quesValue;
                }

                natureChar = Math.abs(thinking) > Math.abs(feeling)
                    ? 'T'
                    : 'F'
                break;
            case 'tactics':
                if (quesValue >= 0) {
                    prostecting += quesValue;
                }
                else {
                    judging += quesValue;
                }

                tacticsChar = Math.abs(prostecting) > Math.abs(judging)
                    ? 'P'
                    : 'J'
                break;
            case 'identity':
                if (quesValue >= 0) {
                    turbulent += quesValue;
                }
                else {
                    assertive += quesValue;
                }

                identityChar = Math.abs(turbulent) > Math.abs(assertive)
                    ? 'T'
                    : 'A'
                break;
        }

    });

    var characterCode = mindChar + energyChar + natureChar + tacticsChar + '-' + identityChar;
    var characterName = '';
    var quote = '';
    if (characterCode === 'ISFJ-A') {
        characterName = 'LOGICIAN';
        quote = '';
    }
    if (characterCode === 'ESFJ-A') {
        characterName = 'Adventurer';
        quote = '';
    }

    var conclusion = {
        mind: {
            introverted: introverted,
            extraverted: extraverted
        },
        energy: {
            observant: observant,
            intuitive: intuitive
        },
        nature: {
            thinking: thinking,
            feeling: feeling
        },
        tactics: {
            prostecting: prostecting,
            judging: judging
        },
        identity: {
            turbulent: turbulent,
            assertive: assertive
        },
        yourCharacter: characterName,
        yourCharacterCode: characterCode,
        yourQuote: quote,
        yourImageUrl: ''
    }

    return conclusion;
}
/**
 * GET /getResult/:name
 */
exports.getResult = function (req, res, next) {
    Results.findOne({ name: req.params.name }, function (err, result) {
        if (err) console.log(err);

        if (result) {
            console.log('Found result');

            var questions = result.questions;
            var mindTotal = 0;
            var introverted = 0, extraverted = 0; //mind
            var observant = 0, intuitive = 0; //energy
            var feeling = 0, thinking = 0; //nature
            var prostecting = 0, judging = 0; //tactics
            var turbulent = 0, assertive = 0; //identity
            var mindChar, energyChar, natureChar, tacticsChar, identityChar;

            questions.forEach(function (question) {
                var quesValue = parseInt(question.value, 10);

                switch (question.questionGroup) {
                    case 'mind':
                        if (quesValue >= 0) {
                            extraverted += quesValue;
                        }
                        else {
                            introverted += quesValue;
                        }

                        mindChar = Math.abs(extraverted) > Math.abs(introverted)
                            ? 'E'
                            : 'I'
                        break;
                    case 'energy':
                        if (quesValue >= 0) {
                            intuitive += quesValue;
                        }
                        else {
                            observant += quesValue;
                        }

                        energyChar = Math.abs(intuitive) > Math.abs(intuitive)
                            ? 'I'
                            : 'S'
                        break;
                    case 'nature':
                        if (quesValue >= 0) {
                            thinking += quesValue;
                        }
                        else {
                            feeling += quesValue;
                        }

                        natureChar = Math.abs(thinking) > Math.abs(feeling)
                            ? 'T'
                            : 'F'
                        break;
                    case 'tactics':
                        if (quesValue >= 0) {
                            prostecting += quesValue;
                        }
                        else {
                            judging += quesValue;
                        }

                        tacticsChar = Math.abs(prostecting) > Math.abs(judging)
                            ? 'P'
                            : 'J'
                        break;
                    case 'identity':
                        if (quesValue >= 0) {
                            turbulent += quesValue;
                        }
                        else {
                            assertive += quesValue;
                        }

                        identityChar = Math.abs(turbulent) > Math.abs(assertive)
                            ? 'T'
                            : 'A'
                        break;
                }

            });

            var characterCode = mindChar + energyChar + natureChar + tacticsChar + '-' + identityChar;
            var characterName = '';
            var quote = '';
            //change to switch
            if (characterCode === 'ISFJ-A') {
                characterName = 'LOGICIAN';
                quote = '';
            }
            if (characterCode === 'ESFJ-A') {
                characterName = 'Adventurer';
                quote = '';
            }

            var conclusion = {
                mind: {
                    introverted: introverted,
                    extraverted: extraverted
                },
                energy: {
                    observant: observant,
                    intuitive: intuitive
                },
                nature: {
                    thinking: thinking,
                    feeling: feeling
                },
                tactics: {
                    prostecting: prostecting,
                    judging: judging
                },
                identity: {
                    turbulent: turbulent,
                    assertive: assertive
                },
                yourCharacter: characterName,
                yourCharacterCode: characterCode,
                yourQuote: quote,
                yourImageUrl: ''
            }

            res.json(conclusion);
        }

    });
};
