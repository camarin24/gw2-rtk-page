<?php
header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=UTF-8");
class Users extends Controller {    
    private $mdlModel=null;

    function __construct(){
        $this->mdlModel = $this->loadModel("mdlUsers");
    }

    public function GetAll(){ 
        echo json_encode($this->mdlModel->GetAll());
    }

    public function Login(){
        $data = json_decode(file_get_contents('php://input')."");
        $user = $this->mdlModel->Login($data->UserName,$data->Password);
        if($user){
            $user['Token'] = $this->crypt($user['UserId'],'e');
            echo json_encode($user);
        }else{
            header($_SERVER["SERVER_PROTOCOL"]." 401 Unautorized", true, 401);
        }
        
    }
}
