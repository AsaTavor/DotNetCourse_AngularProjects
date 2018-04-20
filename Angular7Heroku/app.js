const exp=require('express');
const app=exp();
app.use(exp.static('./dist'));
let port=process.env.PORT||3500;
app.listen(port,()=>{console.log(`sever is listening on port${port}`)});