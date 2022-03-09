const router = require("express").Router()
const pool = require("../db")
const bcrypt = require("bcrypt")
const jwtGenerator = require("../utils/jwtGenerator");
const validInfo = require("../middleware/validInfo")
const authorization = require("../middleware/authorization")

    //***Register user***//
//1. destructure req.body (name, email, password)
//2. check if user exists (if exist then throw error)
//3. bcrypt user password
//4. enter new user in db
//5. generate dwt token
router.post("/register", validInfo, async (req, res) => {
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

//***Login Route***//
// 1. destructure req.body
// 2. check if user doesNot exist (if not then throw error)
// 3. check if incoming password matched db password
// 4. give them token
router.post("/login", validInfo, async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await pool.query ("SELECT * FROM users WHERE user_email = $1", 
        [email]);

        if (user.rows.length === 0) {
           return res.status(401).json("Password or email is incorrect!") 
        }

        const validPassword = await bcrypt.compare(password, user.rows[0].user_password)
        
        if (!validPassword) {
            return res.status(401).json
            ("Password or Email is Incorrect!")
        }

        const token = jwtGenerator(user.rows[0].user_id)

        res.json({token})
    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error Logging In!")
    }
});

router.get("/is-verify", authorization, async (req, res) => {
    try {
        res.json(true)

    } catch (err) {
        console.error(err.message)
        res.status(500).send("Server Error!")
    }
});

module.exports = router;