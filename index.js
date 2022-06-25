
const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', '*')
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET,PATCH,POST,DELETE')
    return res.status(200).json({})
  }
  next()
})

app.use(express.json())

// const publicPath = path.resolve(__dirname, '..', 'ReactJS', 'dist')
const port = process.env.PORT || 8001

app.listen(port, () => {
  console.log('Backend is running on port ' + port)
})

app.get("/",(req,res)=>{
    res.send("sanity check")
})

app.get("/hello",(req,res)=>{
    res.send({"hello":"hello from route"})
})

module.exports = app
