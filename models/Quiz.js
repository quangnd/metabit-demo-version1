var mongoose = require('mongoose');

var quizSchema = new mongoose.Schema({
    name: String,
    description: String,
    quizType: [
        {
            name: String,
            description: String,
            isActive: Boolean
        }
    ],
    questions: [ {
        questionType: String,
        questionText: String,
        questionImageUrl: String,
        choices: [
            {
                value: String,
                text: String
            }
        ]
    }]
});

module.exports = mongoose.model('Quiz', quizSchema);