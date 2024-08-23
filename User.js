const mongoose = requie('mongoose');

const userSchema = new mongoose.userSchema({
    name:{ 
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    dateReg: {
        type: Date,
        default: Date.now(),
    }
});

export default mongoose.model('User', userSchema);