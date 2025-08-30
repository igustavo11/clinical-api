import mongoose from "mongoose";

const Schema = mongoose.Schema;

const doctorSchema = new Schema ({
    name: { type: String, required: [true, 'Name is required'] },
    login: { type: String, required: [true, 'Login is required'], unique: true },
    password: { type: String, required: [true, 'Password is required'] },
    specialty: { type: String, required: [true, 'Specialty is required']},
    crm: { type: String, required: [true, 'CRM is required'], unique: true },
    email: { type: String, required: [true, 'Email is required']},
    phone: { type: String, required: [true, 'Phone is required']},
    createdAt: { type: Date, default: Date.now },
});

const doctor = mongoose.model('doctor', doctorSchema);

export default doctor;