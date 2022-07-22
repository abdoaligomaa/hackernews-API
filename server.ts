import express from 'express'
const app=express()

app.get('/post',(req,res)=>{
    res.send('one post ')
})
app.get('/posts',(req,res)=>{
    res.json({posts:[{
        id:'abc',
        title:'post one title',
        content:'post one content'
    },{
        id:'ark',
        title:'post two title',
        content:'post two content'
    }]})
})

app.listen(3000,()=>console.log('server is running at port 3000'))