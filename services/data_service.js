database = {
    1000: { acno: 1000, uname: "viz", password: 1234, balance: 5000,transaction:[]},
    1001: { acno: 1001, uname: "amal", password: 1234, balance: 8000,transaction:[] },
    1002: { acno: 1002, uname: "navin", password: 1234, balance: 6000,transaction:[] },

  }

  //Register Definition
  const register= (acno, password, uname) =>{

    if (acno in database) {
      return {
          statusCode:422,
          status:false,
          message:'user already exist...please login'
      }
    }
    else {
      database[acno] = {
        acno,
        uname,
        password,
        balance: 0,
        transaction:[]

      }
      console.log(database);

      return {
        statusCode:200,
        status:true,
        message:'Successfully Registered...!!!'
      }
    }
  }

  //login definition
  const login = (acno, password)=> {

    if (acno in database) {
      if (password == database[acno]["password"]) {
        currentAcno = acno
      currentUname =  database[acno]["uname"]
        return {
            statusCode:200,
            status:true,
            message:'successfully log in...!!',
            currentAcno,
            currentUname
  
        }
      }
      else {
        return {
            statusCode:422,
            status:false,
            message:'incorrect password'
  
        }
      }
    }
    else {
      return{
        statusCode:422,
        status:false,
        message:'user already exist...please login'

      }
    }

  }

  //Deposit 
  
  const deposit =(acno,password,amnt) =>
  {

    var amount = parseInt (amnt)

    if(acno in database){

      if(password == database[acno]['password']){

        database[acno]['balance']+=amount

        database[acno]["transaction"].push({
          amount:amount,
          type:"CREDIT"
        })
        console.log(database);
        return{
            statusCode:200,
            status:true,
            message:amount + "successfully deposit ..and new balance is " +  database[acno]["balance"]
        }
      }
      else
      {
        alert("Incorrect password")
        return {
            statusCode:422,
            status:false,
            message:'incorrect password'
        }

      }
    }
  

    else{
      alert("User doesn't exist..!!!")
      return {
        statusCode:422,
        status:false,
        message:'user already exist...please login'
      }
    }
  }

  module.exports={
      register,
      login,
      deposit
  }