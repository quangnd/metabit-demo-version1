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

    var userInfo = req.body.userInfo;
    var quizResult = req.body.quizResult.quizResult;
    //console.log(quizResult);
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
         console.log("Saved users");
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

                energyChar = Math.abs(intuitive) > Math.abs(observant)
                    ? 'N'
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

    var characterCode = mindChar + energyChar + natureChar + tacticsChar;// + '-' + identityChar;
    var characterName = '';
    var characterGroup = '';
    var quote = '';
    switch(characterCode) {
        case 'INTJ':
            characterName = 'Architect';
            characterGroup = 'Analysts';
            quote = 'Là những người giàu trí tưởng tượng. Từng suy nghĩ, tư tưởng của họ đều mang tính chiến lược và họ luôn luôn có kế hoạch cho những công việc trong cuộc sống của mình.';
            break;
        case 'INTP':
            characterName = 'Logician';
            characterGroup = 'Analysts';
            quote = 'Là những nhà phát minh với những phát kiến mang tính đột phá. Sự thèm khát được chạm tới tận cùng của tri thức trong mọi lĩnh vực của đời sống là phẩm chất ta có thể dễ nhận ra ở những người mang nét tính cách này.';
            break;
        case 'ENTJ':
            characterName = 'Commander';
            characterGroup = 'Analysts';
            quote = 'là những người táo bạo, cứng cỏi , kiên quyết nhưng cũng rất giàu tính sáng tạo. Nếu như trong một cuộc thám hiểm, những người mang nét tính cách này sẽ đóng vai trò là người dẫn đường, hoặc đôi khi chính họ sẽ khai phá ra một con đường mới cho cả đoàn.';
            break;
        case 'ENTP':
            characterName = 'Debater';
            characterGroup = 'Analysts';
            quote = 'Những người thuộc nhóm tính cách này rất thông minh và trí tò mò của họ là vô tận. Nếu có ý định làm bạn với những người có tính cách này thì tốt nhất nên rủ họ cùng tham gia những thử thách trí tuệ vì nó là thứ có sức cám dỗ vô cùng lớn đối với những ng giỏi tranh luận.';
            break;
        case 'INFJ':
            characterName = 'Advocate';
            characterGroup = 'Diplomats';
            quote = 'Họ rất kín tiếng và có nét gì nó bí ẩn. Tuy nhiên, những lời nói và hành động của họ rất dễ truyền cảm hứng với người khác. Đồng thời, những người có tính cách này cảm thấy không biết mệt mỏi trong việc đưa ra những ý tưởng của mình.';
            break;
         case 'INFP':
            characterName = 'Mediator';
            characterGroup = 'Diplomats';
            quote = 'Một nhóm tính cách hội tụ những con người tốt bụng, giàu lòng vị tha và đặc biệt là họ sở hữu một tâm hồn mộng mơ đầy thi vị. Bạn đang có ý định làm một việc gì đó với mục đích tốt cho con người xã hội và cần đến sự giúp đỡ? Đừng ngần ngại gọi cho những ng mang nét tính cách này.';
            break;
         case 'ENFJ':
            characterName = 'Protagonist';
            characterGroup = 'Diplomats';
            quote = 'Đúng như tên gọi, những người thuộc nhóm tính cách này được ví như quân vua trên bàn cờ. Họ rất có uy tín với mọi người và trên tất cả, những người lãnh đạo rất dễ dàng truyền cảm hứng và mê hoặc được quần chúng.';
            break;
        case 'ENFP':
            characterName = 'Campaigner';
            characterGroup = 'Diplomats';
            quote = 'Giàu lòng nhiệt huyết, giàu sức sáng tạo, phóng khoáng. Nụ cười luôn nở trên môi là đặc điểm ta có thể dễ nhận thấy ở những người có tính cách này';
            break;
        case 'ISTJ':
            characterName = 'Logistician';
            characterGroup = 'Sentinels';
            quote = 'Thực dụng và có lối suy nghĩ độc lập. Họ là những người mà bạn có thể không cần do dự để đặt trọn niềm tin của mình.';
            break;
        case 'ISFJ':
            characterName = 'Defender';
            characterGroup = 'Sentinels';
            quote = 'Một người bảo vệ tận tuỵ và vô cùng ấm áp. Họ luôn luôn trong tư thế sẵn sàng để bảo vệ những người họ yêu thương.';
            break;
        case 'ESTJ':
            characterName = 'Executive';
            characterGroup = 'Sentinels';
            quote = 'là những người xuất sắc trong lĩnh vực quản lý, không vượt trội trog khả năng kiểm soát công việc.';
            break;
         case 'ESFJ':
            characterName = 'Consul';
            characterGroup = 'Sentinels';
            quote = 'Một cá nhân luôn quan tâm, thích giao tiếp xã hội và thường được ngưỡng mộ và luôn mong muốn được giúp đỡ người khác.';
            break;
        case 'ISTP':
            characterName = 'Virtuoso';
            characterGroup = 'Explorers';
            quote = 'Vô cùng táo bạo và ưa thích những trải nghiệm thực tế. Thông thạo cách sử dụng của tất thảy các đồ dùng, dụng cụ.';
            break;
        case 'ISFP':
            characterName = 'Adventurer';
            characterGroup = 'Explorers';
            quote = 'Họ là những người nghệ sĩ vô cùng linh hoạt và rất đỗi duyên dáng. Họ không ngần ngại khám phá và trải nghiệm những điều mới mẻ trog cuộc sống.';
            break;
        case 'ESTP':
            characterName = 'Entrepreneur';
            characterGroup = 'Explorers';
            quote = 'Thông minh, năng động và vô cùng sâu sắc. Họ sẵn sàng chấp nhận muộn cuộc sống gắn liền với những sự mạo hiểm, rủi ro.';
            break;
        case 'ESFP':
            characterName = 'Entertainer';
            characterGroup = 'Explorers';
            quote = 'Một con người phóng khoáng, tràn trề năng lượng, nhiệt huyết, say mê. Họ có mặt ở đâu thì nơi đó được tô điểm bởi màu hồng của hạnh phúc và niềm vui.';
            break;
        
    }

    characterCode = characterCode + '-' + identityChar;
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
        yourGroup: characterGroup,
        yourQuote: quote,
        yourImageUrl: ''
    }

    return conclusion;
}
/**
 * GET /getResult/:userId
 */
exports.getResult = function (req, res, next) {
    var userId = parseInt(req.params.userid, 0);

    Results.findOne({ userId: userId }, function (err, result) {
        if (err) console.log(err);

        if (result) {
            console.log('Found user result');

            var conclusion = {};
            // var introverted = 0, extraverted = 0; //mind
            // var observant = 0, intuitive = 0; //energy
            // var feeling = 0, thinking = 0; //nature
            // var prostecting = 0, judging = 0; //tactics
            // var turbulent = 0, assertive = 0; //identity
            // var mindChar, energyChar, natureChar, tacticsChar, identityChar;

            var userResult = result.conclusion;
            conclusion.yourCharacterCode = userResult.yourCharacterCode;
            conclusion.yourCharacter = userResult.yourCharacter;
            conclusion.yourQuote = userResult.yourQuote;
            conclusion.yourImageUrl = userResult.yourImageUrl;
            conclusion.yourGroup = userResult.yourGroup;
            conclusion.identity = {
                turbulent: Math.abs(userResult.identity.turbulent),
                assertive: Math.abs(userResult.identity.assertive)
            };
            conclusion.tactics = {
                prostecting: Math.abs(userResult.tactics.prostecting),
                judging: Math.abs(userResult.tactics.judging)
            };
            conclusion.nature = {
                thinking: Math.abs(userResult.nature.thinking),
                feeling: Math.abs(userResult.nature.feeling)
            };
            conclusion.energy = {
                observant: Math.abs(userResult.energy.observant),
                intuitive: Math.abs(userResult.energy.intuitive)
            };
            conclusion.mind = {
                introverted: Math.abs(userResult.mind.introverted),
                extraverted: Math.abs(userResult.mind.extraverted)
            };

            res.json(conclusion);
        }
        else {
            res.status(400).send({ msg: 'User not found' });
        }

    });
};
