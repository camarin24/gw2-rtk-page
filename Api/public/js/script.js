var proyecto = {
	modal:function (md){
		$(md).modal();
	},
	modificar:function(md,nombre,estado,existencias,fabricante,descripcion,id){
		$(md).modal();
		$('#txtEstadoMtxtNombreProductoM').val(nombre);
		$('#txtEstadoM').val(estado);
		$('#txtExistenciasM').val(existencias);
		$('#txtFabricanteM').val(fabricante);
		$('#txtDescripcionM').val(descripcion);
		$('#txtIdM').val(id);
		
	}
}
