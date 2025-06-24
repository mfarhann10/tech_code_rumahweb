const express = require('express')
const app = express()
const port = 3000

//endpoint melihat daftar pengguna
app.get("/users", (req, res) =>{
    res.send("")
})

//endpoint melihat detail pengguna
app.get("/users/:id", (req, res) => {
    res.send("")
})

//endpoint membuat pengguna baru
app.post("/users", (req, res) =>{
    res.send("")
})

//endpoint edit pengguna
app.put("/user/:id", (req, res) => {

})

//endpoint delete pengguna
app.delete("/users/:id", (req, res) =>{
    res.send("")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});