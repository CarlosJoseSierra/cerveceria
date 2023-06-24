const puppeteer = require("puppeteer");
const express = require("express");
const jwt = require('jsonwebtoken');
const cors = require("cors");
const app = express();
app.use(cors());
export const getByInfo = async (req, res) => {
    const browserP =  puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],headless: true,'ignoreHTTPSErrors': true
    });

    let page;
    let body_filtros = req.body;
    (async () => {
      page = await (await browserP).newPage();
        await page.setUserAgent('5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36');
        await page.goto('https://srienlinea.sri.gob.ec/sri-en-linea/SriDeclaracionesWeb/ConsultaImpuestoRenta/Consultas/consultaImpuestoRenta');
          await page.waitForSelector(".ui-button");  
          await page.type("#busquedaRucId",body_filtros.documento);
          await page.waitForTimeout(3000);
          await page.waitForSelector("#g-recaptcha-response");  
          const captha = body_filtros.captcha;
          await page.evaluate(`document.getElementById("g-recaptcha-response").innerHTML="${captha}";`);
          await page.waitForTimeout(2000);
          const buttons = await page.$$('.ui-button')
          await buttons[4].click()
          
          await page.waitForTimeout(4000);
          let salida = await page.evaluate(() => {
            var elemento = document.querySelectorAll('.titulo-consultas-1'); 
            return {
              identificacion: elemento[0].innerHTML,
              nombre: elemento[1].innerHTML
            };
          });
         //  res.send(salida);
           let tabla = await page.evaluate(() =>{
            const tds = Array.from(document.querySelectorAll('table tr td'))
            return tds.map(td => td.innerText)
           });
           //console.log(tabla);
          
           var arreglo = [salida.identificacion,salida.nombre,tabla[0],tabla[1],tabla[2],tabla[3],tabla[4],
           tabla[5],tabla[6],tabla[7],tabla[8],tabla[9],tabla[10],tabla[11],tabla[12],tabla[13],tabla[14],
           tabla[15],tabla[16],tabla[17],tabla[18],tabla[19]];
       
           var json = {};
          arreglo.forEach((value, index) => json['elemento'+index] = value);
          res.send(json) 
          }
          )()
          .catch(err => res.send(console.log(err)))
          .finally(async () => await page.close());
};