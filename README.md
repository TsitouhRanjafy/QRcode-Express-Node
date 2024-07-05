
# Générer un QR Code avec Node.js et Express.js

![Screenshot_2024-07-05_21-55-32](https://github.com/TsitouhRanjafy/QRcode-Express-Node/assets/133124263/179f62ef-1a9e-4dbe-9d09-79662599ae73)

Avant de plonger dans le code, assurez-vous que Node.js et npm sont installés sur votre système. Vous pouvez les télécharger et les installer à partir du site officiel de Node.js si vous avez déjà.

Pour lancer un nouveau projet Node.js, créez un nouveau répertoire et accédez-y dans votre terminal. Ensuite, exécutez la commande suivante:

## 1 - Installation Express , Typescript , Qrcode

- Lancez un nouvelle projet Node.js
```
npm init
```
- On a besoin d'installer `Typescript` et `qrcode`
```
npm i typescript qrcode
```
- Et maintent `Express` et les `@types/` pour Typescript

```
npm i --save-dev node express @types/express @types/qrcode
```

## 2 - Configuration

 - Configurer typescript
```
tsc --init
```

- Structure du code
```
qrcode
├── src               # Contient le code source
│   ├── main.js       # Notre code principal 
│   └── ...          
├── node_modules     
├── package-lock.json
├── tsconfig.json     # Fichier de configuration du Typescript
└── package.json      # Fichier de configuration de Node.js
```

- Configuration tsconfig.json
```
{
  "compilerOptions": {
    "target": "es2022",                                  /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
    "module": "commonjs",                                /* Specify what module code is generated. */
    "outDir": "./dist/",                                 /* Chemin du déstination du javascript qui viens de génerer */
    "esModuleInterop": true,                             /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
    "forceConsistentCasingInFileNames": true,            /* Ensure that casing is correct in imports. */
    "strict": true,                                      /* Enable all strict type-checking options. */
  },
  "include": ["./src/**/*.ts"],                           /* Chemin du typescript à compiler en javascript*/
}
```

- Configuration package.json
  
```
{
  "name": "qrcode",
  "version": "1.0.0",
  "description": "QRocde avec express et node",
  "main": "index.js",
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.19.2",
    "qrcode": "^1.5.3",
    "typescript": "^5.5.3"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/qrcode": "^1.5.5"
  },
  "scripts": {
    "start": "npx tsc && node ./dist/main.js"
  }
}

```

3 - Création de l'application Express.js
- `src/main.js`
```
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
```
- Lancez maintenant
```
npm start
```

![Screenshot_2024-07-05_21-55-13](https://github.com/TsitouhRanjafy/QRcode-Express-Node/assets/133124263/15254818-512b-4ec6-9457-e2a0ff10c868)




