import { getConnection, querys, sql } from "../database";

export const getSupervisor = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllSupervisor);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getSupervisorById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getSupervisorById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewSupervisor = async (req, res) => {

  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("SUP_descripcion", sql.VarChar, req.body.Nombres)
           
      .query(querys.addNewSupervisor);
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

export const updateSupervisorById = async (req, res) => {
  
  try {
    const pool = await getConnection();
    
    const result = await pool
      .request()
      .input("id", req.params.id)
      .input("SUP_descripcion", sql.VarChar, req.body.Nombres)
      .query(querys.updateSupervisorById);

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