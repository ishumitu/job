const mongoose = require('mongoose')

const jobSchema = mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    text:  {
        type: String,
        require: [true, 'please add a text value'],

    },
} ,{
    timestamps: true,
}
)


module.exports = mongoose.model('job ',jobSchema)