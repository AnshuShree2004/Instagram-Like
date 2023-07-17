const userModel = require("../model/user.model");
const emailValidator = require("email-validator");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");

const userSignUp = async (req, res) => {
  const { name, username, email, passsword, bio } = req.body;

  try {
    // validate email
    const validateEmail = emailValidator.validate(email);

    if (validateEmail) {
      res.status(200).send("email is validated");
    }

    // save the data
    const userInfo = await userModel.save(req.body);
    if (userInfo) {
      res.status(200).send("Successfully registered!");
    }
  } catch (e) {
    res.send(400).send("Oops! Failed to registered");
  }
};

const userLogin = async (res, req) => {
  const { username, password } = req.body;

  try {
    const userInfo = await userModel.findOne({ username }).select("+password");

    if (userInfo === userInfo.username) {
      const checkPassword = await bcrypt.compare(password, userInfo.passsword);
      if (checkPassword) {
        const token = userInfo.jwtToken();
        userInfo.password = undefined;

        const cookieOptions = {
          maxAge: 24 * 60 * 60 * 1000,
          httpOnly: true,
        };

        res.cookie("token", token, cookieOptions);
        res.status(201).send({
          msg: "User is logged in successfully!",
          data: userInfo,
        });
      } else {
        res.status(400).send("Password is not matched");
      }
    } else {
      res.status(400).send("No Account exists with this username");
    }
  } catch (error) {
    res.status(400).send("Failed to Login!", error);
  }
};



const getUser = async () => {
  const { id, username } = req.body
  try {
    const userInfo = await userModel.findOne({username});
     res.status(200).send({
      msg: " success",
      data: userInfo
     })
    
  } catch (error) {
      res.status(500).send('Internal Error')
  }
};

module.exports = { userSignUp, userLogin, getUser };
