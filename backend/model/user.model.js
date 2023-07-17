const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

 name: {
    type: String,
    required: [true, "Name is required"],
    maxLength: [50, "Name should be less than 50 character"],
    trim: true
 },

 username: {
    type: String,
    required: [true, "Username is required"],
    unique:true,
    maxLength: [30, "Name should be less than 30 character"],
    lowercase: true
 },

 email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    lowercase: true
 },

 password: {
    type: String,
    required: [true, "Password is required"]
 },

 bio: {
    type: String,
    required: [true, "Bio is required"]
 },

},{
    timestamps: true
})


userSchema.pre("save", async (next) => {

   if(!this.isModified('password')) {
      return next()
   }

   this.password = await bcrypt.hash(this.password, 8)
    return next()
})



userSchema.methods = {
   jwtToken() {
      return this.jwtToken.sign({id: this._id, username: this.username},
         process.env.SECRET,
         { expiresIn: '24h'})
   }
}
const userModel = mongoose.model("User",userSchema)

module.exports = userModel