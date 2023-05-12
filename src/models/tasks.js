import mongoosePaginate from "mongoose-paginate-v2";
import { Schema, model } from "mongoose";

const taskSchema = new Schema(
	{
		tittle: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		done: {
			type: Boolean,
			default: false, // Set the property as 'false' by default
		},
	},
	{
		versionKey: false,
		timestamps: true,
	}
);

taskSchema.plugin(mongoosePaginate);
export default model("Task", taskSchema);
