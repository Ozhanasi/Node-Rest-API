const http = require('http');
const {getKullanicilar,getKullanici,createKullanici,updateKullanici,deleteKullanici} =require('./controller/kullaniciController');
const server = http.createServer((req, res) => {

    // res.statusCode=200;
    // res.setHeader('-Type','text/html');
    // res.write('<h1>Merhaba NodeJS</h1>');
    // res.end()
    if(req.url==='/api/kullanicilar' && req.method==='GET'){
        
        getKullanicilar(req,res);
    }else if(req.url.match(/\/api\/kullanici\/([0-9A-Za-z]+)/) && req.method==='GET'){
        const id=req.url.split('/')[3];
        getKullanici(req,res,id);
    }else if(req.url==='/api/kullanici' && req.method==='POST'){

        createKullanici(req,res);
    }else if(req.url.match(/\/api\/kullanici\/([0-9A-Za-z]+)/) && req.method==='PUT'){

        const id=req.url.split('/')[3];
        updateKullanici(req,res,id);
    }
    else if(req.url.match(/\/api\/kullanici\/([0-9A-Za-z]+)/) && req.method==='DELETE'){

        const id=req.url.split('/')[3];
        deleteKullanici(req,res,id);
    }else{
        res.writeHead(404,{'Content-Type':'application/json'});
        res.end(JSON.stringify({mesaj:'Yönlendirme geçersiz'}));
    }
    

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`server ${PORT} port no ile çalışıyor`));