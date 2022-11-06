const { rejects } = require('assert');
const fs=require('fs');
const { resolve } = require('path');

function dosyaYaz(dosyaAd,icerik){
    fs.writeFileSync(dosyaAd,JSON.stringify(icerik),'utf-8',(err)=>{
        if(err){
            console.log(err);
        }
    });
}

function getPostData(req){
    return new Promise((resolve,reject)=>{
        try {
            let body='';

            req.on('data',(chunk)=>{
                body +=chunk.toString();
            });

            req.on('end',()=>{
                resolve(body);
            });
        } catch (error) {
            reject(error);
        }
    });
}



module.exports={
    dosyaYaz,
    getPostData
}