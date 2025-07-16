import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
	{
		fullName: { type: String, required: true, trim: true },
		email: { type: String, required: true, trim: true, lowercase: true, unique: true },
		password: { type: String, required: true, minlength: 6 },

		verificationCode: { type: String },
		verificationCodeExpiresAt: { type: Date },
		isVerified: { type: Boolean, default: false },

		resetPasswordToken: { type: String },
		resetPasswordTokenExpiresAt: { type: Date },
	},
	{ timestamps: true },
)

const User = new mongoose.model("User", userSchema)
export default User
