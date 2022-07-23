import express, { NextFunction, Request, RequestHandler } from 'express'
const app=express()

const LoggerMiddleware:RequestHandler=(req,res,next)=>{
    console.log(req.path)
    next()
}
app.use(LoggerMiddleware)

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