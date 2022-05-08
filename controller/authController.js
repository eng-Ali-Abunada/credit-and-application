
// Methods to be executed on routes
const login = (req, res)=>{
    res.send("Hello, Welcome to our Page");
}
  
const signup = (req, res)=>{
    res.send("Hello, This was a post Request");
}
  
// Export of all methods as object
module.exports = {
    login,
    signup
}