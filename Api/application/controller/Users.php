<?php

class Users extends Controller{    
    private $mdlModel=null;

    function __construct(){
        $this->mdlModel = $this->loadModel("mdlUsers");
    }
    public function index($v=0){  
        $lista = $this->mdlModel->consultar();  
        require APP . 'view/_templates/productos/header.php';
        require APP . 'view/productos/index.php';
        require APP . 'view/_templates/productos/footer.php';
    }

    public function GetAll(){ 
        echo json_encode($this->mdlModel->GetAll());
    }

    public function eliminarProducto($idProducto){
            $this->mdlModel->__SET('idProducto',$idProducto);
            $this->mdlModel->eliminarProducto();
        header('location: ' . URL . 'productos/index');
    }

    public function editarProductos(){
        if (isset($_POST["btnModificarProducto"])) {
            $this->mdlModel->__SET('nombreProducto',$_POST["txtNombreProducto"]);
            $this->mdlModel->__SET('estado',$_POST["txtEstado"]);
            $this->mdlModel->__SET('existencias',$_POST["txtExistencias"]);
            $this->mdlModel->__SET('fabricante',$_POST["txtFabricante"]);
            $this->mdlModel->__SET('descripcion',$_POST["txtDescripcion"]);
            $this->mdlModel->__SET('idProducto',$_POST["txtId"]);
            $this->mdlModel->editarProductos();
            
        }
    }

}
