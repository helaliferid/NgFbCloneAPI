const mongoose=require('mongoose');


const Schema= mongoose.Schema;

const MovieSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Movie Title is required'],
    },
    description: {
        type: String,
        trim: true,
        required: [true, 'description is required'],
    },
    cover: {
        type: String,
       
        required: [true,'cover is required']
    },
    featured:{
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports=mongoose.model('Movie',MovieSchema);