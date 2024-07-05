// main.js
import express,{Request,Response} from 'express'
import  QRCode  from 'qrcode'

const app = express();
const PORT = 3000;

app.get('/generateQR/:id',(req : Request,res : Response) =>{
    const toQrCode : string = req.params.id;
    const generateQR = async (text : string) => {
        try{
            //const url = 'http://localhost:3000'
            const qrCodeImage = await QRCode.toDataURL(text);
            res.send(`<img src="${qrCodeImage}" alt="QRcode">`)
            console.log("ok QR");
            
        }catch(error){
            console.log(error);
        }
    }  
    generateQR(toQrCode);
});

app.listen(PORT,() =>{
    console.log(`Serve fire on http://localhost:3000/generateQR/exemple`);
})
