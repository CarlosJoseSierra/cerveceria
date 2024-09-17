import { getConnection, querys, sql } from "../database";

export const getActivos = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllActivos);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getcountActivo = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getCountAllActive);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createNewActivo = async (req, res) => {
  
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("EQC_numEquipo", sql.VarChar, req.body.NumEquipo)
      .input("EQC_activoFijo", sql.VarChar, req.body.ActivoFijo)
      .input("EQC_EQUIP_id", sql.Decimal, req.body.Modelo)
      .input("EQC_MARCA_id", sql.Decimal, req.body.Marca)
      .input("EQC_MAP_ciudad", sql.VarChar, req.body.ciudad)
      .input("EQC_MAP_provincia", sql.VarChar, req.body.provincia)
      .input("EQC_MAP_address", sql.VarChar, req.body.address)
      .input("EQC_USU_ing", sql.Decimal, req.body.USU_ing)
      .input("EQC_codTag", sql.VarChar, req.body.CodTag)
      .input("EQC_ATENC_id", sql.Decimal, req.body.Atencion)
      .input("EQC_nombreCliente", sql.VarChar, req.body.Nombre_Cliente)
      .input("EQC_VEND_id", sql.Decimal, req.body.Distribuidor)
      .input("EQC_direccionCliente", sql.VarChar, req.body.Direccion_Cliente)
      .input("EQC_NegocioCliente", sql.VarChar, req.body.Local)
      .input("EQC_CANAL_id", sql.Decimal, req.body.Canal)
      .input("EQC_estadoEquipo",sql.Decimal,req.body.Estado)
      .input("EQC_cambio",sql.Decimal,req.body.EQC_cambio)
      .input("EQC_observacion",sql.VarChar,req.body.Observacion)
      .input("EQC_SUBEST_id", sql.Decimal, req.body.SubEstado)
      .input("EQC_UBIC_id",sql.Decimal,req.body.Ciudad)
      .input("EQC_provincia",sql.VarChar,req.body.ubicacion)
      .input("EQC_NUM_CUE_id", sql.Decimal, req.body.NumCuerpo)
      .input("EQC_SUBCAN_id", sql.Decimal, req.body.SubCanal)
      .input("EQC_SEG_id", sql.Decimal, req.body.Segmento)
      .input("EQC_CodigoSap", sql.VarChar, req.body.CodigoSap)
      .input("EQC_RucCedula", sql.VarChar, req.body.RUC)
      .input("EQC_SUP_id", sql.Decimal, req.body.Supervisor)
      .input("EQC_SUBSEG_id", sql.Decimal, req.body.SegmentoCliente)
      .input("EQC_local", sql.VarChar, req.body.Local)
      .input("EQC_coordenadas", sql.VarChar, req.body.Coordenadas)
      .input("EQC_contacto", sql.VarChar, req.body.Contacto)
      .input("EQC_correo", sql.VarChar, req.body.Correo)
      .input("EQC_TE_id", sql.Decimal, req.body.TipoEquipo)
      .input("EQC_CodigoSapActivo", sql.VarChar, req.body.CodigoSapActivo)
      .input("EQC_fechaInstalacion", sql.Date, req.body.FechaInstalacion)
      .input("EQC_INST_id", sql.Decimal, req.body.Instalacion)
      .input("EQC_COND_id", sql.Decimal, req.body.Condicion)
      .input("EQC_telefonoCliente", sql.VarChar, req.body.Telefono)
      .query(querys.addNewActivo);
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

export const updateActivoById = async (req, res) => {
  try {
    //console.log('no se conecto');
    const pool = await getConnection();
    
    const result = await pool
      .request()
      .input("id", req.params.id)
      .input("EQC_numEquipo", sql.VarChar, req.body.NumEquipo)
      .input("EQC_activoFijo", sql.VarChar, req.body.ActivoFijo)
      .input("EQC_EQUIP_id", sql.Decimal, req.body.Modelo)
      .input("EQC_MARCA_id", sql.Decimal, req.body.Marca)
      .input("EQC_MAP_ciudad", sql.VarChar, req.body.ciudad)
      .input("EQC_MAP_provincia", sql.VarChar, req.body.provincia)
      .input("EQC_MAP_address", sql.VarChar, req.body.address)
      .input("EQC_USU_edit", sql.Decimal, req.body.USU_ing)
      .input("EQC_codTag", sql.VarChar, req.body.CodTag)
      .input("EQC_ATENC_id", sql.Decimal, req.body.Atencion)
      .input("EQC_nombreCliente", sql.VarChar, req.body.Nombre_Cliente)
      .input("EQC_VEND_id", sql.Decimal, req.body.Distribuidor)
      .input("EQC_direccionCliente", sql.VarChar, req.body.Direccion_Cliente)
      .input("EQC_NegocioCliente", sql.VarChar, req.body.Local)
      .input("EQC_CANAL_id", sql.Decimal, req.body.Canal)
      .input("EQC_estadoEquipo",sql.Decimal,req.body.Estado)
      .input("EQC_cambio",sql.Decimal,req.body.EQC_cambio)
      .input("EQC_observacion",sql.VarChar,req.body.Observacion)
      .input("EQC_SUBEST_id", sql.Decimal, req.body.SubEstado)
      .input("EQC_UBIC_id",sql.Decimal,req.body.Ubicacion)
      .input("EQC_provincia",sql.VarChar,req.body.ubicacion)
      .input("EQC_NUM_CUE_id", sql.Decimal, req.body.NumCuerpo)
      .input("EQC_SUBCAN_id", sql.Decimal, req.body.SubCanal)
      .input("EQC_SEG_id", sql.Decimal, req.body.Segmento)
      .input("EQC_CodigoSap", sql.VarChar, req.body.CodigoSap)
      .input("EQC_RucCedula", sql.VarChar, req.body.RUC)
      .input("EQC_SUP_id", sql.Decimal, req.body.Supervisor)
      .input("EQC_SUBSEG_id", sql.Decimal, req.body.SegmentoCliente)
      .input("EQC_local", sql.VarChar, req.body.Local)
      .input("EQC_coordenadas", sql.VarChar, req.body.Coordenadas)
      .input("EQC_contacto", sql.VarChar, req.body.Contacto)
      .input("EQC_correo", sql.VarChar, req.body.Correo)
      .input("EQC_TE_id", sql.Decimal, req.body.TipoEquipo)
      .input("EQC_CodigoSapActivo", sql.VarChar, req.body.CodigoSapActivo)
      .input("EQC_fechaInstalacion", sql.Date, req.body.FechaInstalacion)
      .input("EQC_INST_id", sql.Decimal, req.body.Instalacion)
      .input("EQC_COND_id", sql.Decimal, req.body.Condicion)
      .input("EQC_telefonoCliente", sql.VarChar, req.body.Telefono)
      .query(querys.updateActivoById);

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

export const getActivoById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.getActivoById);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getActivoByCodTag = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("EQC_codTag", req.params.EQC_codTag)
      .query(querys.getActivoByTag);
    return res.json(result.recordset[0]);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const deleteActivoById = async (req, res) => {
  try {
    const pool = await getConnection();

    const result = await pool
      .request()
      .input("id", req.params.id)
      .query(querys.deleteActivo);

    if (result.rowsAffected[0] === 0) return res.sendStatus(404);

    return res.sendStatus(204);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTotalActivos = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query(querys.getTotalActivos);
  //console.log(result);
  res.json(result.recordset[0][""]);
};

export const getActivosXUsuario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request()
    .input("idUsuario", req.params.idUsuario)
    
    .query(querys.getActivoByUsuario);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTipoInventario = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(querys.getAllTipoInventario);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
