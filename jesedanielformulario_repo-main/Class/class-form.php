<?php
    class Form{
        private $Nombre;
        private $apellido;
        private $identidad;
        private $fechanacimiento;
        private $correo;

        public function __construct(
            $Nombre,
            $apellido,
            $identidad,
            $fechanacimiento,
            $correo,
        ){
            $this->Nombre=$Nombre;
            $this->apellido=$apellido;
            $this->identidad=$identidad;
            $this->fechanacimiento=$fechanacimiento;
            $this->correo=$correo;
        }
        public static function SetForm($datos){
            $data= json_encode($datos);
            $ch = curl_init();    // initialize curl handle
            curl_setopt($ch, CURLOPT_URL, "https://formulario-unah-default-rtdb.firebaseio.com/User.json");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
            $d =json_encode(curl_exec($ch));
            $res=curl_errno($ch);
            curl_close($ch);
            $Respuesta="ExitoProdcto";
        return json_encode($Respuesta);
        }
        public static function GetForm(){
            $ch = curl_init();    // initialize curl handle
            $datos=array();
            $contador=0;
            curl_setopt($ch, CURLOPT_URL, "https://formulario-unah-default-rtdb.firebaseio.com/User.json");
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_HTTPHEADER, array("Accept: application/json"));
            $d = json_decode(curl_exec($ch),true);
            foreach($d as $key => $value){
                $datos[$contador]['nombre']=$d[$key]["nombre"];
                $datos[$contador]['apellido']=$d[$key]["apellido"];
                $datos[$contador]['correo']=$d[$key]["correo"];
                $datos[$contador]['fechanacimiento']=$d[$key]["fechanacimiento"];
                $datos[$contador]['identidad']=$d[$key]["identidad"];
            $contador=$contador+1;
            }
            curl_close($ch);
        return json_encode($datos);
        }
    }
?>