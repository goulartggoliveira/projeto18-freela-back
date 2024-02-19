import bcrypt from "bcrypt";
import { findEmail, findUser, insertToken, insertUser } from "../repository/users.js";
export async function postSignup(req, res) {
  const { name, phone, cpf, email, password } = req.body;
  const senha = password;

  const passwordHash = bcrypt.hashSync(senha, 10);

  try {
    const search = await findEmail(email);

    if (search.rowCount > 0) return res.status(409).send("email já cadastrado");

    const user = await insertUser(req.body, passwordHash);

    res.sendStatus(201);
  } catch (err) {
    res.status(500).send(err.message);
  }
}

export async function postSignin(req, res){
    const {email, password} = req.body;

    try {
        const user = findUser(email)

        if(user.rows[0].email && bcrypt.compareSync(password, user.rows[0].password)) {
            console.log(user.rows[0])
            const token = uuid();

           await insertToken(user, token);

            return res.status(200).send({token: token})
        } else {
            res.status(401).send("Email ou senha incorretos"); 
        }
      } catch (err) {
        res.status(500).send(err.message);
      }
    }