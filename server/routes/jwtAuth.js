const router = require("express").Router()
const pool = require("../db")
const bcrypt = require("bcrypt")
const jwtGenerator = require("../utils/jwtGenerator");


    //***Register user***//
//1. destructure req.body (name, email, password)
//2. check if user exists (if exist then throw error)
//3. bcrypt user password
//4. enter new user in db
//5. generate dwt token
router.post("/register", async (req, res) => {
    try {
        const { name, email, password} = req.body
        const user = await pool.query("SELECT * FROM users WHERE user_email = $1", [
            email
        ]);

       if (user.rows.length !== 0) {
           return res.status(401).send("This user already exists!")
       }

       const saltRound = 10
       const salt = await bcrypt.genSalt(saltRound)
       const bcryptPassword = await bcrypt.hash(password, salt)

       const newUser = await pool.query(
           "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
           [name, email, bcryptPassword]
       );
       
       const token = jwtGenerator(newUser.rows[0].user_id);

       res.json({ token })
    } catch (err) {
      console.error(err.message)
      res.status(500).send("Server Error Signing Up!")
    }
});

//Login Route
router.post("/login", async (req, res) => {
    try {
        
    } catch (err) {
        console.err(err.message)
        res.status(500).send("Server Error Logging In!")
    }
})

module.exports = router;