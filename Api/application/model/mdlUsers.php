<?php
 //$result= $query->fetch(PDO::FETCH_ASSOC);
 //$result = $result["idUsuario"];
class mdlUsers
{
    /**
     * @param object $db A PDO database connection
     */
    private $db=null;
    private $idProducto;
    private $nombreProducto;
    private $existencias; 
    private $fabricante;
    private $descripcion; 
    private $url;
    private $estado; 

    function __construct($db){
        try {
            $this->db = $db;
        } catch (PDOException $e) {
            exit('Database connection could not be established.');
        }
    }

     public function __GET($variable){
        return $this->$variable;
    }

    public function __SET($variable,$valor){
        $this->$variable=$valor;
    }

    public function agregarProducto()
    {
        $sql = "INSERT INTO productos (nombreProducto, estado, existencias,fabricante,descripcion,url) VALUES (?,?,?,?,?,?)";
        $query = $this->db->prepare($sql);
        $query->bindValue(1,$this->__GET('nombreProducto'));
        $query->bindValue(2,$this->__GET('estado'));
        $query->bindValue(3,$this->__GET('existencias'));
        $query->bindValue(4,$this->__GET('fabricante'));
        $query->bindValue(5,$this->__GET('descripcion'));
        $query->bindValue(6,$this->__GET('url'));

        // useful for debugging: you can see the SQL behind above construction by using:
        // echo '[ PDO DEBUG ]: ' . Helper::debugPDO($sql, $parameters);  exit();

        $query->execute();
    }

    public function eliminarProducto(){
        $sql = "DELETE FROM Productos WHERE idProducto = ?";
        $query = $this->db->prepare($sql);
        $query->bindValue(1,$this->__GET('idProducto'));

        $query->execute();
    }


    public function editarProductos()
    {
        $sql = "UPDATE Productos SET nombreProducto = ?, estado = ?, existencias = ?, fabricante = ?, descripcion = ? WHERE idProducto = ?";
        $query = $this->db->prepare($sql);
        $query->bindValue(1,$this->__GET('nombreProducto'));
        $query->bindValue(2,$this->__GET('estado'));
        $query->bindValue(3,$this->__GET('existencias'));
        $query->bindValue(4,$this->__GET('fabricante'));
        $query->bindValue(5,$this->__GET('descripcion'));
        $query->bindValue(6,$this->__GET('idProducto'));
        $query->execute();
    }

     public function GetAll()
    {
        $sql = "SELECT * FROM users";
        $query = $this->db->prepare($sql);
        $query->execute();
        
        return $query->fetchAll();
    }

    public function Login($userName,$pass){
        $sql = "SELECT * FROM Users WHERE UserName = ? and Password = ?";
        $query = $this->db->prepare($sql);
        $query->bindValue(1,$userName);
        $query->bindValue(2,$pass);
        $query->execute();
        return $query->fetch(PDO::FETCH_ASSOC);
    }


}
