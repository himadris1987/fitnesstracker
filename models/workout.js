const mongoose = require ("mongoose");

const Schema = mongoose.Schema;
              
const workoutSchema = new Schema (
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        excercies: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "Choose your excercies"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Choose a name for the excerices"
                },
                duration: {
                    type: Number,
                    required: "What is the duration in minutes of your excercise?"
                },
                weight: {
                    type: Number,
                    required: "What is your weight?"
                },
                reps: {
                    type: Number,
                    required: "How many reps per set?"
                },
                sets: {
                    type: Number,
                    required: "How many sets?"
                },
                distance: {
                    type: Number,
                    required: "How far do you plan to run, row, bike etc?"
                }
            }
        ]
    }
);

const Workout=mongoose.model("Workout", workoutSchema);

module.exports=Workout;



