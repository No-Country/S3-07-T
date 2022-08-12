import mongoose from "mongoose"

const { Schema } = mongoose

const projectSchema = new Schema(
	{
		image: {
			type: Schema.Types.String,
			require: true
		},
		user: {
			type: Schema.Types.ObjectId,
			ref: "User"
		},
		teamLeader: {
			type: Schema.Types.String,
			require: true
		},
		title: {
			type: Schema.Types.String,
			require: true
		},
		video: {
			type: Schema.Types.String,
			require: true
		}
	},
	{
		timestamps: true
	}
)

export const Project = mongoose.model("project", projectSchema)

//queda la consulta por los members
