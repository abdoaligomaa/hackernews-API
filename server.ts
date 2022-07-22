import express from 'express'
const app=express()

app.get('/post',(req,res)=>{
    res.send('all posts')
})

app.listen(3000,()=>console.log('server is running at port 3000'))