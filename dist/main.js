"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const qrcode_1 = __importDefault(require("qrcode"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get('/generateQR/:id', (req, res) => {
    const toQrCode = req.params.id;
    const generateQR = async (text) => {
        try {
            //const url = 'http://localhost:3000'
            const qrCodeImage = await qrcode_1.default.toDataURL(text);
            res.send(`<img src="${qrCodeImage}" alt="QRcode">`);
            console.log("ok QR");
        }
        catch (error) {
            console.log(error);
        }
    };
    generateQR(toQrCode);
});
app.listen(PORT, () => {
    console.log(`Serve fire on http://localhost:3000`);
});
