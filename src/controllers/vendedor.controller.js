import { getConnection, querys, sql } from "../database";

export const getVendedor = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllVendedor);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getVendedorById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getVendedorById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewVendedor = async (req, res) => {

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("VEND_nombres", sql.VarChar, req.body.Nombres)
           
      .query(querys.addNewVendedor);
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

export const updateVendedorById = async (req, res) => {
  
  try {
    const pool = await getConnection();
    
    const result = await pool
      .request()
      .input("id", req.params.id)
      .input("VEND_nombres", sql.VarChar, req.body.Nombres)
      .query(querys.updateVendedorById);

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