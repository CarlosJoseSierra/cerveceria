export const querys = {
  //Querys Tabla Equipo_Completo
  getAllActivos: "SELECT EQC_id,EQC_numEquipo,EQC_activoFijo,EQC_EQUIP_id,EQUIP_modelo,EQUIP_descripcion,EQC_MARCA_id,MARCA_descripcion,EQC_MAP_ciudad,EQC_MAP_provincia,EQC_MAP_address,EQC_USU_ing,USU_nombre,EQC_fecha_ing,EQC_codTag,EQC_ATENC_id,ATENC_descripcion,EQC_nombreCliente,EQC_VEND_id,VEND_nombres,EQC_direccionCliente,EQC_NegocioCliente,EQC_CANAL_id,CANAL_descripcion,EQC_cambio,EQC_estadoEquipo,EQC_observacion,EQC_SUBEST_id,SUBEST_descripcion,EQC_UBIC_id,UBIC_ciudad,UBIC_PROV_id,EQC_provincia,EQC_NUM_CUE_id,NUM_CUE_descripcion,EQC_SUBCAN_id,SUBCAN_descripcion,EQC_SEG_id,SEG_descripcion,EQC_CodigoSap,EQC_RucCedula,EQC_SUP_id,SUP_descripcion,EQC_SUBSEG_id,SUBSEG_descripcion,EQC_local,EQC_coordenadas,EQC_contacto, EQC_correo,EQC_TE_id,TE_descripcion,EQC_CodigoSapActivo,CONVERT(varchar,EQC_fechaInstalacion,3) AS EQC_fechaInstalacion,CONVERT(varchar,EQC_fechaInstalacion,1) AS EQC_fechaInstalacionTmp,EQC_INST_id,INST_descripcion,EQC_COND_id,COND_descripcion,EQC_telefonoCliente FROM EQUIPO_COMPLETO AS E INNER JOIN EQUIPO ON EQC_EQUIP_id = EQUIP_id INNER JOIN ATENCION ON EQC_ATENC_id = ATENC_id INNER JOIN MARCA ON EQC_MARCA_id = MARCA_id INNER JOIN USUARIOS ON EQC_USU_ing = USU_id INNER JOIN UBICACION ON EQC_UBIC_id = UBIC_id INNER JOIN VENDEDOR ON EQC_VEND_id = VEND_id INNER JOIN CANAL ON EQC_CANAL_id = CANAL_id INNER JOIN SUBESTADO ON EQC_SUBEST_id = SUBEST_id INNER JOIN SUBCANAL ON EQC_SUBCAN_id = SUBCAN_id INNER JOIN SEGMENTO ON EQC_SEG_id = SEG_id INNER JOIN SUPERVISOR ON EQC_SUP_id = SUP_id INNER JOIN SUBSEGMENTACION ON EQC_SUBSEG_id = SUBSEG_id INNER JOIN TIPO_EQUIPO ON EQC_TE_id = TE_id INNER JOIN INSTALACION ON EQC_INST_id = INST_id INNER JOIN CONDICION ON EQC_COND_id = COND_id INNER JOIN NUMERO_CUERPOS ON EQC_NUM_CUE_id = NUM_CUE_id",
  getCountAllActive: "SELECT count(*) CONTEOEQUIPO FROM EQUIPO_COMPLETO",
  getActivoByUsuario: "SELECT EQC_id,EQC_numEquipo,EQC_activoFijo,EQUIP_modelo,EQUIP_descripcion,MARCA_descripcion,EQC_MAP_ciudad,EQC_MAP_provincia,EQC_MAP_address,USU_nombre,EQC_fecha_ing,EQC_codTag,ATENC_descripcion,EQC_nombreCliente,VEND_nombres,EQC_direccionCliente,EQC_NegocioCliente,CANAL_descripcion,EQC_cambio,EQC_estadoEquipo,EQC_observacion,SUBEST_descripcion,UBIC_ciudad,EQC_provincia,EQC_numCuerpos,SUBCAN_descripcion, SEG_descripcion,EQC_CodigoSap,EQC_RucCedula,SUP_descripcion,SUBSEG_descripcion,EQC_local,EQC_coordenadas,EQC_contacto, EQC_correo,TE_descripcion,EQC_CodigoSapActivo,EQC_fechaInstalacion,INST_descripcion,COND_descripcion,EQC_telefonoCliente FROM EQUIPO_COMPLETO AS E INNER  JOIN EQUIPO ON EQC_EQUIP_id = EQUIP_id INNER JOIN ATENCION ON EQC_ATENC_id = ATENC_id INNER JOIN MARCA ON EQC_MARCA_id = MARCA_id INNER JOIN USUARIOS ON EQC_USU_ing = USU_id INNER JOIN UBICACION ON EQC_UBIC_id = UBIC_id INNER JOIN VENDEDOR ON EQC_VEND_id = VEND_id INNER JOIN CANAL ON EQC_CANAL_id = CANAL_id INNER JOIN SUBESTADO ON EQC_SUBEST_id = SUBEST_id INNER JOIN SUBCANAL ON EQC_SUBCAN_id = SUBCAN_id INNER JOIN SEGMENTO ON EQC_SEG_id = SEG_id INNER JOIN SUPERVISOR ON EQC_SUP_id = SUP_id INNER JOIN SUBSEGMENTACION ON EQC_SUBSEG_id = SUBSEG_id INNER JOIN TIPO_EQUIPO ON EQC_TE_id = TE_id INNER JOIN INSTALACION ON EQC_INST_id = INST_id INNER JOIN CONDICION ON EQC_COND_id = COND_id WHERE EQC_USU_ing = @idUsuario",  
  getActivoById: "SELECT * FROM EQUIPO_COMPLETO Where EQC_id = @Id",
  getActivoByTag: "SELECT EQC_id,EQC_numEquipo,EQC_activoFijo,EQUIP_modelo,EQUIP_descripcion,MARCA_descripcion,EQC_MAP_ciudad,EQC_MAP_provincia,EQC_MAP_address,USU_nombre,EQC_fecha_ing,EQC_codTag,ATENC_descripcion,EQC_nombreCliente,VEND_nombres,EQC_direccionCliente,EQC_NegocioCliente,CANAL_descripcion,EQC_cambio,EQC_estadoEquipo,EQC_observacion,SUBEST_descripcion,UBIC_ciudad,EQC_provincia,EQC_numCuerpos,SUBCAN_descripcion, SEG_descripcion,EQC_CodigoSap,EQC_RucCedula,SUP_descripcion,SUBSEG_descripcion,EQC_local,EQC_coordenadas,EQC_contacto, EQC_correo,TE_descripcion,EQC_CodigoSapActivo,EQC_fechaInstalacion,INST_descripcion,COND_descripcion,EQC_telefonoCliente FROM EQUIPO_COMPLETO AS E INNER  JOIN EQUIPO ON EQC_EQUIP_id = EQUIP_id INNER JOIN ATENCION ON EQC_ATENC_id = ATENC_id INNER JOIN MARCA ON EQC_MARCA_id = MARCA_id INNER JOIN USUARIOS ON EQC_USU_ing = USU_id INNER JOIN UBICACION ON EQC_UBIC_id = UBIC_id INNER JOIN VENDEDOR ON EQC_VEND_id = VEND_id INNER JOIN CANAL ON EQC_CANAL_id = CANAL_id INNER JOIN SUBESTADO ON EQC_SUBEST_id = SUBEST_id INNER JOIN SUBCANAL ON EQC_SUBCAN_id = SUBCAN_id INNER JOIN SEGMENTO ON EQC_SEG_id = SEG_id INNER JOIN SUPERVISOR ON EQC_SUP_id = SUP_id INNER JOIN SUBSEGMENTACION ON EQC_SUBSEG_id = SUBSEG_id INNER JOIN TIPO_EQUIPO ON EQC_TE_id = TE_id INNER JOIN INSTALACION ON EQC_INST_id = INST_id INNER JOIN CONDICION ON EQC_COND_id = COND_id WHERE EQC_codTag = @EQC_codTag",
  addNewActivo:"INSERT INTO EQUIPO_COMPLETO([EQC_numEquipo],[EQC_activoFijo],[EQC_EQUIP_id],[EQC_MARCA_id],[EQC_MAP_ciudad],[EQC_MAP_provincia],[EQC_MAP_address],[EQC_USU_ing],[EQC_fecha_ing],[EQC_codTag],[EQC_ATENC_id],[EQC_nombreCliente],[EQC_VEND_id],[EQC_direccionCliente],[EQC_NegocioCliente],[EQC_CANAL_id],[EQC_estadoEquipo],[EQC_cambio],[EQC_observacion],[EQC_SUBEST_id],[EQC_USU_edit],[EQC_fecha_edit],[EQC_UBIC_id],[EQC_provincia],[EQC_NUM_CUE_id],[EQC_SUBCAN_id],[EQC_SEG_id],[EQC_CodigoSap],[EQC_RucCedula],[EQC_SUP_id],[EQC_SUBSEG_id],[EQC_local],[EQC_coordenadas],[EQC_contacto],[EQC_correo],[EQC_TE_id],[EQC_CodigoSapActivo],[EQC_fechaInstalacion],[EQC_INST_id],[EQC_COND_id],[EQC_telefonoCliente]) VALUES (@EQC_numEquipo,@EQC_activoFijo,@EQC_EQUIP_id,@EQC_MARCA_id,@EQC_MAP_ciudad,@EQC_MAP_provincia,@EQC_MAP_address,@EQC_USU_ing,GETDATE(),@EQC_codTag,@EQC_ATENC_id,@EQC_nombreCliente,@EQC_VEND_id,@EQC_direccionCliente,@EQC_NegocioCliente,@EQC_CANAL_id,@EQC_estadoEquipo,@EQC_cambio,@EQC_observacion,@EQC_SUBEST_id,@EQC_USU_ing,GETDATE(),@EQC_UBIC_id,@EQC_provincia,@EQC_NUM_CUE_id,@EQC_SUBCAN_id,@EQC_SEG_id,@EQC_CodigoSap,@EQC_RucCedula,@EQC_SUP_id,@EQC_SUBSEG_id,@EQC_local,@EQC_coordenadas,@EQC_contacto,@EQC_correo,@EQC_TE_id,@EQC_CodigoSapActivo,@EQC_fechaInstalacion,@EQC_INST_id,@EQC_COND_id,@EQC_telefonoCliente)",
  deleteActivo: "DELETE FROM EQUIPO_COMPLETO WHERE EQC_id= @Id",
  getTotalActivos: "SELECT COUNT(*) FROM EQUIPO_COMPLETO",
  updateActivoById:
    "UPDATE [dbo].[EQUIPO_COMPLETO] SET [EQC_numEquipo] = @EQC_numEquipo,[EQC_activoFijo] = @EQC_activoFijo,[EQC_EQUIP_id] = @EQC_EQUIP_id,[EQC_MARCA_id] = @EQC_MARCA_id,[EQC_MAP_ciudad] = @EQC_MAP_ciudad,[EQC_MAP_provincia] = @EQC_MAP_provincia,[EQC_MAP_address] = @EQC_MAP_address,[EQC_codTag] = @EQC_codTag,[EQC_ATENC_id] = @EQC_ATENC_id,[EQC_nombreCliente] = @EQC_nombreCliente,[EQC_VEND_id] = @EQC_VEND_id,[EQC_direccionCliente] = @EQC_direccionCliente,[EQC_NegocioCliente] = @EQC_NegocioCliente,[EQC_CANAL_id] = @EQC_CANAL_id,[EQC_estadoEquipo] = @EQC_estadoEquipo,[EQC_cambio] = @EQC_cambio,[EQC_observacion] = @EQC_observacion,[EQC_SUBEST_id] = @EQC_SUBEST_id,[EQC_USU_edit] = @EQC_USU_ing,[EQC_fecha_edit] = GETDATE(),[EQC_UBIC_id] = @EQC_UBIC_id,[EQC_provincia] = @EQC_provincia,[EQC_NUM_CUE_id] = @EQC_NUM_CUE_id,[EQC_SUBCAN_id] = @EQC_SUBCAN_id,[EQC_SEG_id] = @EQC_SEG_id,[EQC_CodigoSap] = @EQC_CodigoSap,[EQC_RucCedula] = @EQC_RucCedula,[EQC_SUP_id] = @EQC_SUP_id,[EQC_SUBSEG_id] = @EQC_SUBSEG_id,[EQC_local] = @EQC_local,[EQC_coordenadas] = @EQC_coordenadas,[EQC_contacto] = @EQC_contacto,[EQC_correo] = @EQC_correo,[EQC_TE_id] = @EQC_TE_id,[EQC_CodigoSapActivo] = @EQC_CodigoSapActivo,[EQC_fechaInstalacion] = @EQC_fechaInstalacion,[EQC_INST_id] = @EQC_INST_id,[EQC_COND_id] = @EQC_COND_id,[EQC_telefonoCliente] = @EQC_telefonoCliente WHERE EQC_id = @Id",
  
    //Querys Tabla Tipo Inventario
    getAllTipoInventario: "SELECT TI_id, TI_descripcion FROM TIPO_INVENTARIO",

   //Querys Tabla Modelos de Equipos
  
  //Querys Tabla Modelos de Usuarios
  getAllUsuarios: "SELECT * FROM USUARIOS", 
  getUsuarioById: "SELECT * FROM USUARIOS Where USU_id = @Id",
  getUserPass: "SELECT * FROM USUARIOS Where USU_usuario like @USU_usuario",
  //getVendedores:"SELECT AS USU_nombre FROM USUARIOS where USU_ROL like 'VENDEDOR'",
  getVendedores:"SELECT DISTINCT(EQC_identificacionCliente) AS USU_nombre FROM EQUIPO_COMPLETO ORDER BY EQC_identificacionCliente",
  //Querys Tabla Historial Equipos
  getTopFiveItems: "SELECT TOP 5 count(AS_DET_cantidad) AS CANTIDAD, AS_DET_PROD_descripcion AS DESCRIPCION FROM AREA_SERVICIODETALLE INNER JOIN AREA_SERVICIO ON AS_DET_AS_id = AS_id WHERE (AS_DET_Estado = 1 ) AND (AS_CLI_id = @id OR AS_CLI_id = @id2) and (AS_OT_id>1)  AND AS_DET_PROD_codigo like 'SERVICIO' GROUP BY AS_DET_PROD_descripcion ORDER BY CANTIDAD DESC",
  geoTotalItemsServicios: "SELECT TOP 5 count(AS_DET_cantidad) AS CANTIDAD, AS_DET_PROD_descripcion AS DESCRIPCION FROM AREA_SERVICIODETALLE INNER JOIN AREA_SERVICIO ON AS_DET_AS_id = AS_id WHERE (AS_DET_Estado = 1 ) AND (AS_OT_id>1)  AND AS_DET_PROD_codigo like 'SERVICIO' GROUP BY AS_DET_PROD_descripcion ORDER BY CANTIDAD DESC",
  getHistorialReparacion: "SELECT HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id INNER JOIN AREA_TRABAJO ON HIST_AS_TPS_id = AT_id INNER JOIN EQUIPO on AS_EQUIP_id = EQUIP_id WHERE HIST_id in (SELECT MAX(HIST_id) FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id) AND (AS_CLI_id = @id OR AS_CLI_id = @id2) AND (HIST_AS_TPS_id = 1 OR HIST_AS_TPS_id = 2 OR HIST_AS_TPS_id = 3 OR HIST_AS_TPS_id = 4 OR HIST_AS_TPS_id = 5 OR HIST_AS_TPS_id = 6 OR HIST_AS_TPS_id = 8) GROUP BY HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo,EQUIP_marca ORDER BY HIST_id",
  getHistorialDisponible: "SELECT HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id INNER JOIN AREA_TRABAJO ON HIST_AS_TPS_id = AT_id INNER JOIN EQUIPO on AS_EQUIP_id = EQUIP_id WHERE HIST_id in (SELECT MAX(HIST_id) FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id) AND (AS_CLI_id = @id OR AS_CLI_id = @id2) AND (HIST_AS_TPS_id = 7) GROUP BY HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo,EQUIP_marca ORDER BY HIST_id ",
  getHistorialEquipos: "SELECT HIST_id,HIST_EQC_id,EQC_activoFijo AS HIST_placa,EQC_numEquipo AS HIST_serie,EQC_codTag AS HIST_codTag,CONVERT(varchar,HIST_FECHA_ing,3) as HIST_FECHA_ing,HIST_USU_ing,HIST_MAP_provincia,HIST_MAP_address,HIST_nombreCliente,HIST_identificacionCliente,HIST_direccionCliente,HIST_NegocioCliente,HIST_telefonoCliente,HIST_provincia,UBIC_ciudad,USU_nombre AS HIST_USU_nombre,HIST_estadoEquipo,HIST_UBIC_id,SUBEST_descripcion FROM HISTORIAL_MOVIMIENTOEQUIPO INNER JOIN USUARIOS ON HIST_USU_ing = USU_id INNER JOIN UBICACION ON HIST_UBIC_id = UBIC_id INNER JOIN EQUIPO_COMPLETO ON HIST_EQC_id = EQC_id INNER JOIN SUBESTADO on HIST_TI_id =SUBEST_id WHERE HIST_EQC_id = @Id",

  //Totales
  /* store procedure comentado porque este cliente no trabaja con el google maps*/
  //getDataEquiposMapa:  "SELECT T.EQC_MAP_provincia AS EQC_MAP_provincia,COUNT(DISTINCT(T.EQC_id))AS CONTEO FROM(SELECT EQC_MAP_provincia,EQC_id FROM EQUIPO_COMPLETO)  T GROUP BY T.EQC_MAP_provincia ",
  getDataEquiposMapa:  "SELECT T.EQC_provincia AS EQC_MAP_provincia,COUNT(DISTINCT(T.EQC_id))AS CONTEO FROM(SELECT EQC_provincia,EQC_id FROM EQUIPO_COMPLETO)  T GROUP BY T.EQC_provincia",
  getDataTopFiveVendedores:"SELECT TOP 5 USU_nombre AS DESCRIPCION,count(DISTINCT(HIST_EQC_id)) AS CONTEO FROM HISTORIAL_MOVIMIENTOEQUIPO INNER JOIN USUARIOS ON HIST_USU_ing = USU_id WHERE HIST_id in (SELECT min(HIST_id) FROM HISTORIAL_MOVIMIENTOEQUIPO GROUP BY HIST_EQC_id) GROUP BY USU_nombre, HIST_USU_ing ORDER BY CONTEO DESC",
  getDataEntregadosTotal: "SELECT T.MES,COUNT(DISTINCT(T.HIST_AS_id))AS CONTEO FROM(SELECT DATENAME(MONTH, HIST_AS_fecha ) AS MES, HIST_AS_id FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id WHERE  HIST_AS_TPS_id = 10 GROUP BY HIST_AS_fecha,HIST_AS_id) T GROUP BY T.MES ORDER BY (CASE WHEN T.MES='Enero' THEN 1 WHEN T.MES='Febrero' THEN 2 WHEN T.MES='Marzo' THEN 3 WHEN T.MES='Abril' THEN 4 WHEN T.MES='Mayo' THEN 5 WHEN T.MES='Junio' THEN 6 WHEN T.MES='Julio' THEN 7 WHEN T.MES='Agosto' THEN 8 WHEN T.MES='Septiembre' THEN 9 WHEN T.MES='Octubre' THEN 10 WHEN T.MES='Noviembre' THEN 11 WHEN T.MES='Deciembre' THEN 12 ELSE 0 END)",

  //Obtener Equipos Reparados, Disponibles, Totales
  getHistorialTotalReparacion: "SELECT HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id INNER JOIN AREA_TRABAJO ON HIST_AS_TPS_id = AT_id INNER JOIN EQUIPO on AS_EQUIP_id = EQUIP_id WHERE HIST_id in (SELECT MAX(HIST_id) FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id) AND (HIST_AS_TPS_id = 1 OR HIST_AS_TPS_id = 2 OR HIST_AS_TPS_id = 3 OR HIST_AS_TPS_id = 4 OR HIST_AS_TPS_id = 5 OR HIST_AS_TPS_id = 6 OR HIST_AS_TPS_id = 8) GROUP BY HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo,EQUIP_marca ORDER BY HIST_id",
  getHistorialTotalDisponible: "SELECT HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id INNER JOIN AREA_TRABAJO ON HIST_AS_TPS_id = AT_id INNER JOIN EQUIPO on AS_EQUIP_id = EQUIP_id WHERE HIST_id in (SELECT MAX(HIST_id) FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id) AND (HIST_AS_TPS_id = 7) GROUP BY HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo,EQUIP_marca ORDER BY HIST_id ",
  getHistorialTotalEntregados: "SELECT HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo FROM HISTORIAL_AS_TIPOSERVICIO INNER JOIN AREA_SERVICIO ON HIST_AS_id = AS_id INNER JOIN AREA_TRABAJO ON HIST_AS_TPS_id = AT_id INNER JOIN EQUIPO on AS_EQUIP_id = EQUIP_id WHERE HIST_id in (SELECT MAX(HIST_id) FROM HISTORIAL_AS_TIPOSERVICIO GROUP BY HIST_AS_id) AND (HIST_AS_TPS_id = 10) GROUP BY HIST_id,HIST_FECHA_ing,HIST_AS_TPS_id,AT_nombre,AS_fecha,AS_secuencial,HIST_serie,HIST_placa,EQUIP_modelo,EQUIP_marca ORDER BY HIST_id ",

  //Querys Tabla Area Servicio
  getTopSevenModelos: "SELECT TOP 7 COUNT(AS_id) AS CONTEO,EQUIP_modelo  FROM AREA_SERVICIO INNER JOIN EQUIPO ON AS_EQUIP_id = EQUIP_id WHERE (AS_OT_id>0) AND (AS_CLI_id = @id or AS_CLI_id = @id2) GROUP BY EQUIP_modelo ORDER BY CONTEO DESC",
  //getTotalModelos: "SELECT T.EQUIP_modelo,COUNT(DISTINCT(T.EQC_id))AS CONTEO FROM(SELECT EQC_EQUIP_id,EQC_id,EQUIP_modelo FROM EQUIPO_COMPLETO INNER JOIN EQUIPO ON EQC_EQUIP_id = EQUIP_id)  T GROUP BY T.EQUIP_modelo ORDER BY CONTEO DESC",
  getTotalModelos: "SELECT TOP 5 T.MARCA_descripcion AS EQUIP_modelo,COUNT(DISTINCT(T.EQC_id))AS CONTEO FROM(SELECT EQC_MARCA_id,EQC_id,MARCA_descripcion FROM EQUIPO_COMPLETO INNER JOIN MARCA ON EQC_MARCA_id = MARCA_id)  T GROUP BY T.MARCA_descripcion ORDER BY CONTEO DESC",

  //Querys Tabla Logos
  getAllLogos: "SELECT ATENC_id,ATENC_descripcion FROM ATENCION", 
  getLogoById: "SELECT ATENC_id,ATENC_descripcion FROM ATENCION Where ATENC_id = @Id",

  //Nuevos
  getAllRoles: "SELECT * FROM ROL",
  getAllCargos: "SELECT * FROM CARGO",

  addNewUser:
    "INSERT INTO USUARIOS(USU_nombre,USU_usuario,USU_clave,USU_cargo,USU_rol,USU_estado,USU_conectado) VALUES(@USU_nombre,@USU_usuario,@USU_clave,@USU_cargo,@USU_rol,1,0)",
  
    updateUserById:
    "UPDATE USUARIOS SET USU_nombre = @USU_nombre,USU_usuario = @USU_usuario,USU_clave = @USU_clave,USU_cargo = @USU_cargo,USU_rol = @USU_rol WHERE USU_id = @Id",

    

    //getAllCiudad:"SELECT DISTINCT(EQC_MAP_ciudad) AS FROM EQUIPO_COMPLETO ORDER BY EQC_MAP_ciudad",
    getAllCiudad:"SELECT DISTINCT(EQC_provincia) AS EQC_MAP_ciudad FROM EQUIPO_COMPLETO ORDER BY EQC_provincia",
    getAllProvincia:"SELECT DISTINCT(EQC_provincia) AS EQC_MAP_provincia FROM EQUIPO_COMPLETO ORDER BY EQC_provincia",

    getAllUbicacion: "SELECT UBIC_id, UBIC_ciudad, UBIC_provincia FROM UBICACION ORDER BY UBIC_ciudad",

    getDataEtiquetas: "SELECT T.TI_descripcion AS DESCRIPCION,COUNT(DISTINCT(T.EQC_id))AS CANTIDAD FROM(SELECT EQC_TI_id,EQC_id,TI_descripcion FROM EQUIPO_COMPLETO INNER JOIN TIPO_INVENTARIO ON EQC_TI_id = TI_id) T GROUP BY T.TI_descripcion",

    //09/09/2024
    getAllCanal:"SELECT CANAL_id, CANAL_descripcion FROM CANAL",
    getCanalById: "SELECT CANAL_id, CANAL_descripcion FROM CANAL WHERE CANAL_id = @id",
    
    getAllSubEstado:"SELECT SUBEST_id, SUBEST_descripcion FROM SUBESTADO",
    getSubEstadoById: "SELECT SUBEST_id, SUBEST_descripcion FROM SUBESTADO WHERE SUBEST_id = @id",
    getAllSubCanal:"SELECT SUBCAN_id, SUBCAN_descripcion FROM SUBCANAL ORDER BY SUBCAN_descripcion",
    getSubCanalById: "SELECT SUBCAN_id, SUBCAN_descripcion FROM SUBCANAL WHERE SUBCAN_id = @id",
    getAllSegmento:"SELECT SEG_id, SEG_descripcion FROM SEGMENTO",
    getSegmentoById: "SELECT SEG_id, SEG_descripcion FROM SEGMENTO WHERE SEG_id = @id",
    getAllSubSegmentacion:"SELECT SUBSEG_id, SUBSEG_descripcion FROM SUBSEGMENTACION ORDER BY SUBSEG_descripcion",
    getSubsegmentacionById: "SELECT SUBSEG_id, SUBSEG_descripcion FROM SUBSEGMENTACION WHERE SUBSEG_id = @id",
    getAllTipoEquipo:"SELECT TE_id, TE_descripcion FROM TIPO_EQUIPO",
    getTipoEquipoById: "SELECT TE_id, TE_descripcion FROM TIPO_EQUIPO WHERE TE_id = @id",
    getAllCondicion:"SELECT COND_id, COND_descripcion FROM CONDICION",
    getCondicionById: "SELECT COND_id, COND_descripcion FROM CONDICION WHERE COND_id = @id",
    getAllInstalacion:"SELECT INST_id, INST_descripcion FROM INSTALACION",
    getInstalacionById: "SELECT INST_id, INST_descripcion FROM INSTALACION WHERE INST_id = @id",
    getAllAtencion:"SELECT ATENC_id, ATENC_descripcion FROM ATENCION",
    getAtencionById: "SELECT ATENC_id, ATENC_descripcion FROM ATENCION WHERE ATENC_id = @id",
    getAllNumCuerpos: "SELECT NUM_CUE_id, NUM_CUE_descripcion FROM NUMERO_CUERPOS",
    getNumCuerposById: "SELECT NUM_CUE_id, NUM_CUE_descripcion FROM NUMERO_CUERPOS WHERE NUM_CUE_id = @id",
    getAllProvincia: "SELECT PROV_id, PROV_descripcion FROM PROVINCIA",

    getAllVendedor:"SELECT VEND_id, VEND_nombres FROM VENDEDOR ORDER BY VEND_nombres",
    getVendedorById: "SELECT VEND_id, VEND_nombres FROM VENDEDOR WHERE VEND_id = @id",
    addNewVendedor: "INSERT INTO VENDEDOR(VEND_nombres,VEND_estado) VALUES(@VEND_nombres,1)",
    updateVendedorById:"UPDATE VENDEDOR SET VEND_nombres = @VEND_nombres WHERE USU_id = @Id",
    getAllSupervisor:"SELECT SUP_id, SUP_descripcion FROM SUPERVISOR ORDER BY SUP_descripcion",
    getSupervisorById: "SELECT SUP_id, SUP_descripcion FROM SUPERVISOR WHERE SUP_id = @id",
    addNewVendedor: "INSERT INTO VENDEDOR(VEND_nombres,VEND_estado) VALUES(@VEND_nombres,1)",
    updateVendedorById:"UPDATE VENDEDOR SET VEND_nombres = @VEND_nombres WHERE VEND_id = @Id",
    getAllMarcas:"SELECT MARCA_id,MARCA_descripcion FROM MARCA ORDER BY MARCA_descripcion",
    getMarcaById: "SELECT  MARCA_id,MARCA_descripcion FROM MARCA WHERE MARCA_id = @id",
    addNewMarca:"INSERT INTO MARCA(MARCA_descripcion) VALUES(@MARCA_descripcion)",
    updateMarcaById:"UPDATE MARCA SET MARCA_descripcion = @MARCA_descripcion WHERE MARCA_id = @Id",
    getAllEquipos: "SELECT * FROM EQUIPO ORDER BY EQUIP_modelo", 
    getEquipoById: "SELECT * FROM EQUIPO Where EQUIP_id = @Id",
    addNewEquipo:"INSERT INTO EQUIPO(EQUIP_modelo) VALUES(@EQUIP_modelo)",
    updateEquipoById:"UPDATE EQUIPO SET EQUIP_modelo = @EQUIP_modelo WHERE EQUIP_id = @Id",
};
