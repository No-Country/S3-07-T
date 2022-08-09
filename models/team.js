import mongoose from "mongoose";

const { Schema } = mongoose;

const teamSchema = new Schema({
  cohortType: {
    type: String,
  },
  cohortNumber: {
    type: String,
  },
  group: {
    type: String,
  },
  teamLeader: {
    type: String,
  },
  technologies: [
    {
      type: Schema.ObjectId,
      ref: "technology",
    },
  ],
  /**
   * devs: {
   *    type: Schema.Types.ObjectId
   * }
   */
});

const Team = mongoose.model("team", teamSchema);

export default Team;
