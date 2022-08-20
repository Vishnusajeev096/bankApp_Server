//importing express
const  express= require("express")

const dataServices = require('./services/data_service')

//create an app using express

const app = express()

//to parse json

app.use(express.json())

//set up the port numeber 
app.listen(3000,()=>{
    console.log("server started at port no:3000")
})

//resolve http request from client 
//GET rqst -to read data 
app.get('/',(req,res)=>{
    res.status(401).send("GET METHOD")
})

//post - to create data 
app.post('/',(req,res)=>{
    res.send("Its a Post method")
})

//put - to update/modify data 
app.put('/',(req,res)=>{
    res.send("Its a Put method")
})

//Patch - to update partially data  
app.patch('/',(req,res)=>{
    res.send("Its a Patch method")
})

//Delete - to delete data
app.delete('/',(req,res)=>{
    res.send("Its a Delete method")
})

//bank app -Api

//Register API
app.post('/register',(req,res)=>{
  const result =  dataServices.register(req.body.acno,req.body.password,req.body.uname)
  res.status(result.statusCode).json(result)
})

//Login API
app.post('/login',(req,res)=>{
    const result =  dataServices.login(req.body.acno,req.body.password)
    res.status(result.statusCode).json(result)
  })
  
  //deposit API
app.post('/deposit',(req,res)=>{
    const result =  dataServices.deposit(req.body.acno,req.body.password,req.body.amnt)
    res.status(result.statusCode).json(result)
  })

