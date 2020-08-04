const mongoose = require ("moongoose");

const Schema = mongoose.Schema

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
),

{
    toJSON: {
      // include any virtual properties when data is requested
      virtuals: true
    }
  }
);

// adds a dynamically-created property to schema
workoutSchema.virtual("totalDuration").get(function() {
  // "reduce" array of exercises down to just the sum of their durations
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;