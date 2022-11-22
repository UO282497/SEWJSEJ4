"use strict";
class Calculadora{
    constructor(){
        this.ten = 0;
        this.pantalla = "";
        this.p ="";
        this.s = "";
        this.prev ="";
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

            }

        }
        else{
            this.digitos(key);
        }

    }




    mMas(){
        var operation = this.m; 
        this.m = eval(operation +"+" +this.p);
        alert(this.m);
    }

    mMenos(){
        var operation = this.m; 
        this.m = eval(operation +"-" +this.p);
        alert(this.m);
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
        document.getElementsByTagName("input")[0].value = this.p;
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
        alert(this.pantalla);
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
var calculadora = new Calculadora();