 
import express from "express"
const app = express()


app.get('/', (req, res) => {
  res.send('Hello World! Iam a MERN Stack Devekoper')
})




export default app