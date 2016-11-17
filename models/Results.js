var mongoose = require('mongoose');

var ResultsSchema = new mongoose.Schema({
    userId: Number,
    fullName: String,
    email: String,
    age: String,
    gender: String,
    otherSubject: String,
    otherSubjectScore: String,
    otherHobby: String,
    subjects: Array,
    subjectScores: Array,
    hobbies: Array,
    questions: [
        {
            id: String,
            value: String,
            questionGroup: String //Mind, Energy, Tactic, Identity, Nature - need ràng buộc kiểu enum
        }
    ],
    conclusion: { 
        mind: {
             introverted: Number,
             extraverted: Number
        },
        energy: {
            observant: Number,
            intuitive: Number
        },
        nature: {
             feeling: Number,
             thinking: Number
        },
        tactics: {
            prostecting: Number,
            judging: Number
        },
        identity: {
            turbulent: Number,
            assertive: Number
        },
        yourCharacter: String,
        yourCharacterCode: String,
        yourQuote: String,
        yourImageUrl: String
       
    },
    createdOn: {type: Date, default: Date.now }
});

module.exports = mongoose.model('Results', ResultsSchema);