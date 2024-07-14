import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const ExamSchema = new Schema({
    examname: { type: String, required: true },
    userid: { type: Schema.Types.ObjectId, required: true },
    examtext: { type: String, required: true },
    questions: [{
        question: String,
        answer: String,
        useranswer: String,
        score: { type: Number, default: 0 }
    }],
    examdate: { type: Date, default: Date.now },
    examduration: { type: String, required: true },
    exammarks: { type: Number, default: 0 },
    examstatus: { type: Boolean, default: false }
});

const Exam = mongoose.model('Exam', ExamSchema);

export default Exam;
