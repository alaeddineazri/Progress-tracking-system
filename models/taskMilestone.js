const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const taskMilestoneSchema = new Schema(
    {
        milestone_id: {
            type: ObjectId,
            ref: "milestone",
        },
        task_id: {
            type: ObjectId,
            ref: "task",
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("TaskMilestone", taskMilestoneSchema);
