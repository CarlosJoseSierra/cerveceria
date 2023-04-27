import { getConnection, querys, sql } from "../database";
const jwt = require('jsonwebtoken');

export const getUsuarios = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllUsuarios);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getVendedores = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getVendedores);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};



export const getUser = async(req, res) =>{
  const { USU_usuario, USU_clave } = req.body;
  
  //return res.status(200).json({ status: "200",msg: "Hola" + req.params.USU_usuario});
  console.log(req.body);

   if (USU_usuario == null || USU_clave == null) {
      return res.status(400).json({ status: "400",msg: "Favor ingresar Datos Requeridos" });
    }
    else
    {

      return res.status(200).json({ status: "200",msg: "Bienvenido" });
    }
}

export const getByUserPass = async (req, res) => {
    const { USU_usuario, USU_clave } = req.body;

    // validating
    if (USU_usuario == null || USU_clave == null) {
      return res.status(400).json({ status: "400",msg: "Favor ingresar Datos Requeridos" });
    }
  
    try {
      const pool = await getConnection();
      const result = await pool
        .request()
        .input("USU_usuario", sql.VarChar, USU_usuario)
        .query(querys.getUserPass);
      //Lo nuevo implementado por cs
      if(result.recordset[0]){
          if(result.recordset[0]['USU_clave'] == USU_clave){
            const userFormToken={
              id:result.recordset[0]['USU_id'],
              nameU: result.recordset[0]['USU_usuario']}
              //const token = jwt.sign(userFormToken,process.env.SECRET_WORD)
              const token = '00ggg';
            return res.json({status: "ok", msg: result.recordset[0],token:token});
          }
          else{
            return res.status(400).json({ status: "400", msg: "El password es incorrecto" ,token:0});
          }
      }
      else{
        return res.status(400).json({ status: "400", msg: "El user es incorrecto",token:0 });
      }
    } catch (error) {
      res.status(500);
      res.send(error.message);
      return res.status(500).json({ status: "500", msg: res.send(error.message),token:0  });
    }
};

export const getUserById = async (req, res) => {
    try {
        const pool = await getConnection();
    
        const result = await pool
          .request()
          .input("id", req.params.id)
          .query(querys.getUsuarioById);
        return res.json(result.recordset[0]);
      } catch (error) {
        res.status(500);
        res.send(error.message);
      }
  };

  export const createNewUser = async (req, res) => {
    const { USU_nombre, USU_usuario, USU_clave,USU_cargo,USU_rol} = req.body;
    
  
    try {
      const pool = await getConnection();
      const result = await pool
        .request()
        .input("USU_nombre", sql.VarChar, USU_nombre)
        .input("USU_usuario", sql.VarChar, USU_usuario)
        .input("USU_clave", sql.VarChar, USU_clave)
        .input("USU_cargo", sql.VarChar, USU_cargo)
        .input("USU_rol", sql.VarChar, USU_rol)
        .query(querys.addNewUser);
        if(result.rowsAffected==1){
          return res.status(200).json({ status: "ok", msg: "Registro exitoso" ,token:0});
        }else{
          return res.status(400).json({ status: "400", msg: "No se pudo registrar, consulte al administrador" ,token:0});
        }
      
    } catch (error) {
      res.status(500);
      console.log(error.message);
      res.send(error.message);
    }
  };

  export const updateUserById = async (req, res) => {
    const { USU_nombre, USU_usuario, USU_clave,USU_cargo,USU_rol} = req.body;
    
    try {
      const pool = await getConnection();
      
      const result = await pool
        .request()
        .input("id", req.params.id)
        .input("USU_nombre", sql.VarChar, USU_nombre)
        .input("USU_usuario", sql.VarChar, USU_usuario)
        .input("USU_clave", sql.VarChar, USU_clave)
        .input("USU_cargo", sql.VarChar, USU_cargo)
        .input("USU_rol", sql.VarChar, USU_rol)
        .query(querys.updateUserById);
  
     if(result.rowsAffected==1){
      return res.status(200).json({ status: "ok", msg: "Actualizacion exitosa" ,token:0});
    }else{
      return res.status(400).json({ status: "400", msg: "No se pudo actualizar, consulte al administrador" ,token:0});
    }
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
  };

  export const getByInfo = async (req, res) => {
    const browserP =  puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],headless: false,'ignoreHTTPSErrors': true
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
          .catch(err => console.log(err))
          .finally(async () => await page.close());
};


