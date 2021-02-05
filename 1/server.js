const http = require('http');
const server = http.createServer((req,res)=>{
    
    res.setHeader('Content-Type','appication/json');
    res.end(JSON.stringify({
        success:true
    }));
});


const PORT = 5000;
server.listen(PORT,()=>{
    console.log(`Server running at ${PORT}`);
})