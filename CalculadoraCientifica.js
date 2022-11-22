"use strict";
class Calculadora{
    constructor(){
        this.ten = 0;
        this.pantalla = "";
        this.p ="";
        this.s = "";
        this.prev ="";
        this.mode = "N";
        this.rep ="F";
        this.deg ="D";
        this.m=0;
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            //alert('keydown event\n\n' + 'key: ' + keyName);
            this.pulsacionTecla(event.key)
          });
    }

    pulsacionTecla(key){
        if (Number.isNaN(parseInt(key))){
            //SIGNO
            switch(key){

                case "+":
                    this.suma();
                    break;
                case "-":
                    this.resta();
                    break;
                case "x":
                    this.multiplicacion();
                    break;
                case "/":
                    this.division();
                    break;
                case ".":
                    this.punto();
                    break;
                case "Enter":
                    this.igual();
                    break;
                case "m":
                    this.mrc()
                    break;
                case "n":
                    this.mMas();
                    break;
                case "ñ":
                    this.mMenos();
                    break;
                case "v":
                    this.raiz();
                    break;
                case "c":
                    this.borrar();
                    break;
                case "o":
                    this.encender;
                    break;
                case "s":
                    this.cambiarsigno();
                    break;

            }

        }
        else{
            this.digitos(key);
        }

    }




    mMas(){
        var operation = this.m; 
        this.m = eval(operation +"+" +this.p);

    }

    mMenos(){
        var operation = this.m; 
        this.m = eval(operation +"-" +this.p);
    }





    digitos(n) {
        if (this.p == "0"){
            this.pantalla = "";
            this.p="";
            
        }
        this.p += ""+n;
        this.actualizar();
        this.prev = "" + this.p;
        
    }

    punto() {

        this.p += ".";
        this.actualizar();
        this.prev = "" + this.p;
        
    }
    mrc(){
        this.p = "" +this.m;
        this.prev = "" +this.p;
        this.actualizar();
    }

    actualizar(){
        if (this.rep=="F"){
            document.getElementsByTagName("input")[0].value = this.p;
        }
        else{
            document.getElementsByTagName("input")[0].value = Number(this.p).toExponential();
        }
    }
    suma() {

        this.pantalla+="" + this.p;
        this.s = "+";
        this.pantalla +=this.s;

        this.p = "";
        this.actualizar();
        
    }
    cambiarsigno(){
        this.p += "*(-1)";
        var operation = this.p;   
        this.p = eval(operation);
        this.actualizar();
        this.prev = this.p;
    }
    resta(){
        this.pantalla+=this.p;
        this.s = "-";
        if (this.s != ""){
            this.pantalla += ""+this.s;
        }
        this.p = "";
        
        this.actualizar();
       
    }
    multiplicacion(){
        this.pantalla+=this.p;
        this.s = "*";
        if (this.s != ""){
            this.pantalla += ""+this.s;
        }
        this.p = "";
        
        this.actualizar();
        
    }
    division(){
        this.pantalla+=this.p;
        this.s="/";
        if (this.s != ""){
            this.pantalla += ""+this.s;
        }
        this.p = "";
        
        this.actualizar();
        
    }
    raiz(){
        this.p += "**(1/2)";
        var operation = this.p;   
        this.p = eval(operation);
        this.actualizar();
        this.prev = this.p;
    }
    porcentaje(){
        if (this.s==""){
           
            this.p+= "/(100)";
            var operation = this.p;   
            this.p = eval(operation);
            this.actualizar();
            this.prev = this.p;
        }else{

            //alert(this.pantalla.slice(0, -1)+"/(100) * " + this.p);
            this.p= eval(this.pantalla.slice(0, -1)+"/(100) * " + this.p);
            this.prev = this.p;
        }
        
    }

    igual(){
        if (this.pantalla==""){
            if (this.s == ""){
                this.pantalla = this.p;
            }
            else{
                
                this.pantalla =this.p + this.s + this.prev;
            }
        }else{
            this.pantalla += this.prev;
        }
        
        var operation = this.pantalla;
        this.p = Math.round(eval(operation)*1e12 ) /1e12;
        this.pantalla = "";
        this.actualizar();
    }
    encender() {
        this.pantalla="";
        this.p="0";
        this.actualizar();

    }

    borrar(){
        this.p = "";
        this.actualizar();
    }

    




}       

class CalculadoraCientifica extends Calculadora{

    borrarDigito(){
            this.p = this.p.slice(0,-1); 
            this.actualizar();        
    }
    log(){
        this.p = Math.log(this.p);
        this.prev = this.p;
        this.actualizar();  
    }
    sin(){
        if(this.deg == "D"){
            this.p = this.p  * Math.PI / 180;
        }

        if(this.mode=="N"){
            this.p = Math.sin(this.p);
        }
        if (this.mode=="H"){
            this.p= Math.sinh(this.p);
        }
        if (this.mode=="A"){
            this.p= Math.asin(this.p);
        }
        this.prev = this.p;
        this.actualizar();  
    }
    cos(){  
        if(this.deg == "D"){
            this.p = this.p  * Math.PI / 180;
        }
        if(this.mode=="N"){
            this.p = Math.cos(this.p);
        }
        if (this.mode=="H"){
            this.p= Math.cosh(this.p);
        }
        if (this.mode=="A"){
            this.p= Math.acos(this.p);
        }
        this.prev = this.p;
        this.actualizar();  
    }
    tan(){ 
        if(this.deg =="D"){
            this.p = this.p  * Math.PI / 180;
        }
        if(this.mode=="N"){
            this.p = Math.tan(this.p);
        }
        if (this.mode=="H"){
            this.p= Math.tanh(this.p);
        }
        if (this.mode=="A"){
            this.p= Math.atan(this.p);
        }
        this.prev = this.p;
        this.actualizar();  
    }
    elevar(){   
        this.pantalla+=this.p;
        this.s = "**";
        if (this.s != ""){
            this.pantalla += ""+this.s;
        }
        this.p = "";
        
        this.actualizar();
       
    }
    cuadrado(){ 
        this.p += "**(2)";
        var operation = this.p;   
        this.p = eval(operation);
        this.actualizar();
        this.prev = this.p;
    }
    pi(){
        this.p = Math.PI;
        this.actualizar();
        this.prev = this.p;
    }
    elevarDiezA(){
        this.p = Math.pow(10, this.p);
        this.actualizar();
        this.prev = this.p;
    }
    parI(){

        this.p += "(";
        this.actualizar();
        this.prev=this.p;
    }
    parD(){

        this.p += ")";
        this.actualizar();
        this.prev=this.p;
    }
    fact(){
        this.p = this.fac(this.p);
        this.prev = this.p;
        this.actualizar(); 

    }
    fac(n){
        if (n==0){
            return 1;
        }
        else{
            return n*this.fac(n-1);
        }

    }

    mClear(){
        this.m= 0;
    }
    mReturn(){
        this.p = this.m;
        this.prev = this.p;
        this.actualizar(); 
    }
    mSave(){
        this.m = this.p; 
    }
    exp(){
        this.pantalla+=this.p;
        this.s = "e+";
        if (this.s != ""){
            this.pantalla += ""+this.s;
        }
        this.p = "";
        
        this.actualizar();

    }
    mod(){
        this.pantalla+=this.p;
        this.s = "%";
        if (this.s != ""){
            this.pantalla += ""+this.s;
        }
        this.p = "";

        this.actualizar();

    }
    setA(){
        if (this.mode== "N" || this.mode=="H"){
            var buttons = document.getElementsByTagName('input'); 
            buttons[11].value = "Asin";
            buttons[12].value = "Acos";
            buttons[13].value = "Atan";
            this.mode = "A";
        }
        else if (this.mode =="A"){
            var buttons = document.getElementsByTagName('input'); 
            buttons[11].value = "sin";
            buttons[12].value = "cos";
            buttons[13].value = "tan";
            this.mode = "N";
        }

    }

    setH(){
        
        if (this.mode=="N" || this.mode=="A"){
            var buttons = document.getElementsByTagName('input'); 
            buttons[11].value = "sinh";
            buttons[12].value = "cosh";
            buttons[13].value = "tanh";
            this.mode = "H";
        }
        else if (this.mode =="H"){
            var buttons = document.getElementsByTagName('input'); 
            buttons[11].value = "sin";
            buttons[12].value = "cos";
            buttons[13].value = "tan";
            this.mode = "N";
        }

    }
    toggleRep(){
        if (this.rep=="F"){
            this.rep="E";
        }
        else{
            this.rep="F";
        }
        this.actualizar();
    }
    toggleDeg(){
        if (this.deg=="D"){
            this.deg="R";
            var buttons = document.getElementsByTagName('input'); 
            buttons[1].value = "RAD";
        }else{
            this.deg="D";
            var buttons = document.getElementsByTagName('input'); 
            buttons[1].value = "DEG";
        }
    }
    

}

var calculadora = new CalculadoraCientifica();