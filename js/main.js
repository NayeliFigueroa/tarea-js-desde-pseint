class ejercicios{
    Ejercicio1(){
        let a = 3, b = 7, r = 0, resp
        r = 2 * a + b - a % 3
        resp= document.getElementById("resp").innerText = `${r}`
    }
    Ejercicio2(){
        let a = 10, b = 4, z = 0, resp
        z = a * b + 3 % a + b
        resp= document.getElementById("resp").innerText = `${z}`
    }
    Ejercicio3(){
        let a = 6, b = 2, w = 0, resp
        w = a - b + 2 * a % b
        resp= document.getElementById("resp").innerText = `${w}`
    }
    Ejercicio4(){
        let a = 8, b = 5, v = 0, resp
        v = 2 * b + a / 2 + 4 * b % a
        resp= document.getElementById("resp").innerText = `${v}`
    }
    Ejercicio5(){
        let a = 12, b = 9, u = 0, resp
        u = b - a + 3 * a % b
        resp= document.getElementById("resp").innerText = `${u}`
    }

    Ejercicio6(){
        let resultante = 0, resp
        resultante = (5 + 3 * 2) + 9 > 3 * 5  * 14 % 3
        resp= document.getElementById("resp").innerText = `${resultante}`
    }

    Ejercicio7(){
        let resultante = 0, resp
        resultante = 2 * ( 4 - 10 + 8) / 2 * 36 * (1 / 2)
        resp= document.getElementById("resp").innerText = `${resultante}`

    }

    Ejercicio8(){
        let resultante = 0, resp
        resultante = 260 / 12 + 54 % 3 - 85 % 7
        resp= document.getElementById("resp").innerText = `${resultante}`
    }

    Ejercicio9(){
        let resultante = 0, resp
        resultante = ( 48 < (2 * 3) )||( (2 * 7) < 12 )
        resp= document.getElementById("resp").innerText = `${resultante}`
    }

    Ejercicio10(){
        let resultante = 0, resp
        resultante = ( ( 8 > 2 )&&( 932 < 23 ) ) && 4 == 2
        resp= document.getElementById("resp").innerText = `${resultante}`
    }
    suma_dos_numeros(){
        let n1, n2, resp, s
        n1=parseInt(document.getElementById("n1").value)
        n2=parseInt(document.getElementById("n2").value)
        s= n1 + n2
        resp= document.getElementById("resp").innerText = `${n1}+${n2}=${s}`
    }
    area_triangulo(){
        let base, altura, area, resp
        base=parseInt(document.getElementById("base").value)
        altura=parseInt(document.getElementById("altura").value)
        area = base * altura/2
        resp= document.getElementById("resp").innerText = `El area de su triangulo es: ${area}`
    }
    numero_parimpar(){
        let n1, resp
        n1=parseInt(document.getElementById("n1").value)
        if (n1%2==0) {
            resp= document.getElementById("resp").innerText = `Su numero es par`
        } else {
            resp= document.getElementById("resp").innerText = `Su numero es impar`
        }
    }
    calculadora_simple(){
        let n1, n2, operador, r, resp
        n1=parseInt(document.getElementById("n1").value)
        n2=parseInt(document.getElementById("n2").value)
        operador = document.getElementById("operador").value;
        if (operador == "+") {
            r = n1 + n2
        } else if (operador == "-") {
            r = n1 - n2
        } else if (operador == "*") {
            r = n1* n2
        } else if (operador == "/") {
            r = n1 / n2
        } else {
            alert("Ingresa un operador valido!!");
        }
        resp =document.getElementById("resp").innerHTML = `${n1} ${operador} ${n2} = ${r}`
    }
    tabla_1_10(){
        let num, contador= 0, r, resp
        num=parseInt(document.getElementById("num").value)
        while (contador<=10) {
            contador = contador + 1
            r= contador * num
            resp = document.getElementById("resp").innerHTML += `<br>${num} * ${contador} = ${r}`
        }
    }
    copiar_palabra(){
        let cad1, cad2, frase, resp
        cad1 = document.getElementById("cad1").value
        cad2 = document.getElementById("cad2").value
        frase = cad1 + " "+ cad2
        resp = document.getElementById("resp").innerHTML = `${frase}`
    }
    mayor_de_3_numeros(){
        let n1, n2, n3, resp
        n1 = parseInt(document.getElementById("n1").value)
        n2 = parseInt(document.getElementById("n2").value)
        n3 = parseInt(document.getElementById("n3").value)
        if (n1>n2 && n1>n3) {
            resp = document.getElementById("resp").innerHTML = `${n1} es mayor`
        }else if(n2>n1 && n2>n3) {
            resp = document.getElementById("resp").innerHTML = `${n2} es mayor`
        }else if (n3>n1 && n3>n2) {
            resp = document.getElementById("resp").innerHTML = `${n3} es mayor`
        }else if(n1>n3 && n1==n2) {
            resp = document.getElementById("resp").innerHTML = `${n1} y ${n2} son iguales y mayores que ${n3}`
        }else if (n1>n2 && n1==n3) {
            resp = document.getElementById("resp").innerHTML = `${n1} y ${n3} son iguales y mayores que ${n2}`
        }else if (n2>n1 && n2==n3) {
            resp = document.getElementById("resp").innerHTML = `${n2} y ${n3} son iguales y mayores que ${n1}`
        }else{
            resp = document.getElementById("resp").innerHTML = `Los 3 numeros son iguales`
        }
    }
    edad_votacion(){
        let edad, resp
        edad = parseInt(document.getElementById("edad").value)
        if (edad>=18) {
            resp = document.getElementById("resp").innerHTML = `Usted tiene permitido votar`
        } else {
            resp = document.getElementById("resp").innerHTML = `Usted tiene NO permitido votar`
        }
    }
    calcular_BMI(){
        let peso, altura, bmi, resp
        peso = document.getElementById("peso").value
        altura = document.getElementById("altura").value
        bmi = peso/(altura*altura)
        if (bmi<18.5) {
            resp = document.getElementById("resp").innerHTML = `${bmi} bajo peso`
        } else if(bmi>=18.5 && bmi<=24.9){
            resp = document.getElementById("resp").innerHTML = `${bmi} saludable`
        }else if(bmi>=25 && bmi<=29.9){
            resp = document.getElementById("resp").innerHTML = `${bmi} sobrepeso`
        }else{
            resp = document.getElementById("resp").innerHTML = `${bmi} obesidad`
        }
    }
    numero_positivo(){
        let num, resp
        num = parseInt(document.getElementById("num").value)
        if (num>0) {
            resp = document.getElementById("resp").innerHTML = `El numero es positivo`
        } else if(num<0){
            resp = document.getElementById("resp").innerHTML = `El numero es negativo`
        }else{
            resp = document.getElementById("resp").innerHTML = `El numero es 0`
        }
    }
    anio_bisiesto(){
        let anio, resp
        anio = parseInt(document.getElementById("anio").value)
        if (anio%4==0 && anio%100!=0 || anio%400==0 ) {
            resp = document.getElementById("resp").innerHTML = `El año ${anio} es un año bisiesto`
        } else {
            resp = document.getElementById("resp").innerHTML = `El año ${anio} NO es un año bisiesto`
        }
    }
    signo_zodiacal(){
        let n1=0, n2=0, resp
        n1 = parseInt(document.getElementById("n1").value)
        n2 = parseInt(document.getElementById("n2").value)
        if (n1 >= 21 && n2 == 3 || n1 <=19 && n2 == 4) {
           resp= document.getElementById("resp").innerHTML = `Eres aries`
        } else if (n1 >= 20 && n2 == 4 || n1 <= 20 && n2 == 5) {
            resp= document.getElementById("resp").innerHTML = `Eres tauro`
        } else if (n1 >= 21 && n2 == 5 || n1 <= 21 && n2 == 6) {
            resp= document.getElementById("resp").innerHTML = `Eres geminis`
        } else if (n1 >= 21 && n2 == 6 || n1 <= 22 && n2 == 7) {
            resp= document.getElementById("resp").innerHTML = `Eres cancer`
        } else if (n1 >= 23 && n2 == 7 || n1 <= 22 && n2 == 8) {
            resp=  document.getElementById("resp").innerHTML = `Eres leo`
        } else if (n1 >= 23 && n2 == 8 || n1 <= 22 && n2 == 9) {
            resp=  document.getElementById("resp").innerHTML = `Eres virgo`
        } else if (n1 >= 23 && n2 == 9 || n1 <= 22 && n2 == 10) {
            resp= document.getElementById("resp").innerHTML = `Eres libra`
        } else if (n1 >= 23 && n2 == 10 || n1 <= 21 && n2 == 11) {
            resp= document.getElementById("resp").innerHTML = `Eres escorpio`
        } else if (n1 >= 22 && n2 == 11 || n1 <= 21 && n2 == 12) {
            resp= document.getElementById("resp").innerHTML = `Eres sagitario`
        } else if (n1 >= 22 && n2 == 12 || n1 <= 19 && n2 == 1) {
            resp= document.getElementById("resp").innerHTML = `Eres capricornio`
        } else if (n1 >= 20 && n2 == 1 || n1 <= 18 && n2 == 2) {
            resp= document.getElementById("resp").innerHTML = `Eres acuario`
        } else if (n1 >= 19 && n2 == 2 || n1 <= 20 && n2 == 3) {
            resp= document.getElementById("resp").innerHTML = `Eres piscis`
        }
    }
    segunda_quincena(){
        let dia, resp
        dia = parseInt(document.getElementById("dia").value)
        if (dia>=1 && dia<=31) {
            if (dia>=1 && dia<=15) {
                resp= document.getElementById("resp").innerHTML = `Primera quincena del mes`
            } else {
                resp= document.getElementById("resp").innerHTML = `Segunda quincena del mes`
            }
        } else {
            resp= document.getElementById("resp").innerHTML = `Ingrese un numero entre 1-31`
        }
    }
    dia_de_semana(){
        let dia, resp
        dia = parseInt(document.getElementById("dia").value)
        if (dia ==1 ) {
            resp= document.getElementById("resp").innerHTML = `domingo`
        } else if(dia==2){
            resp= document.getElementById("resp").innerHTML = `lunes`
        }else if(dia==3){
            resp= document.getElementById("resp").innerHTML = `martes`
        }else if(dia==4){
            resp= document.getElementById("resp").innerHTML = `miercoles`
        }else if(dia==5){
            resp= document.getElementById("resp").innerHTML = `jueves`
        }else if(dia==6){
            resp= document.getElementById("resp").innerHTML = `viernes`
        }else if(dia==7){
            resp= document.getElementById("resp").innerHTML = `sabado`
        }else{
            resp= document.getElementById("resp").innerHTML = `Ingrese un dia valido`
        }
    }
    frases_iguales(){
        let frase1, frase2, resp
        frase1 = document.getElementById("frase1").value
        frase2 = document.getElementById("frase2").value
        frase1 = frase1.toLowerCase()
        frase2 = frase2.toLowerCase()
        if (frase1==frase2) {
            resp= document.getElementById("resp").innerHTML = `Las frases son iguales`
        } else {
            resp= document.getElementById("resp").innerHTML = `Las frases son diferentes`
        }
    }
    precio_con_descuento(){
        let precio, desc, vadesc, pfinal, resp
        precio = parseInt(document.getElementById("precio").value)
        desc = parseInt(document.getElementById("desc").value)
        vadesc = precio * (desc/100)
        pfinal = precio - vadesc
        resp= document.getElementById("resp").innerHTML = `<br>Su descuento es de: $${vadesc}<br>Su precio final es de: $${pfinal}`
    }
    factura_con_impuestos(){
        let pfactura, impuesto, vimpuesto, pfinal, resp
        pfactura = parseInt(document.getElementById("pfactura").value)
        impuesto = parseInt(document.getElementById("impuesto").value)
        vimpuesto= pfactura * (impuesto/100)
        pfinal= pfactura + vimpuesto
        resp= document.getElementById("resp").innerHTML = `<br>El valor de impuesto es de: $${vimpuesto}<br>Su precio final es de: $${pfinal}`
    }
    sueldo_con_aumento(){
        let sactual, aumento, vaumento, sfinal, resp
        sactual = parseInt(document.getElementById("sactual").value)
        aumento = parseInt(document.getElementById("aumento").value)
        vaumento= sactual* (aumento/100)
        sfinal= sactual+ vaumento
        resp= document.getElementById("resp").innerHTML = `<br>Su valor de aumento es: $${vaumento}<br>Su sueldo final es de: $${sfinal}`
    }
    compra_multiple(){
        let particulo, pcompra, descuento, resp, cant
        particulo = parseInt(document.getElementById("particulo").value)
        cant = parseInt(document.getElementById("cant").value)
        pcompra= particulo* cant
        if (pcompra>100) {
            descuento= pcompra*0.1
            pcompra= pcompra-descuento
            resp= document.getElementById("resp").innerHTML = `<br>Su descuento es de: $${descuento}<br>Total de compra: $${pcompra}`
        } else {
            resp= document.getElementById("resp").innerHTML = `<br>Total de compra: $${pcompra}`
        }
    }
    calcularimpuestos(){
        let salarioanual=0, impuesto=0, resp
        salarioanual=parseInt(document.getElementById("sueldo").value)
        if (salarioanual<= 10000) {
            impuesto = salarioanual * 0.05
        } else {
            if (salarioanual>= 10001 && salarioanual<= 20000) {
                impuesto = salarioanual * 0.1
            } else {
                impuesto = salarioanual * 0.15
            }
        }
        resp = document.getElementById("resp").innerHTML = `${impuesto}`
    }
    descuentoantiguedad(){
        let anios=0, bono=0, salario=0, salariofinal= 0, resp
        anios=parseInt(document.getElementById("amno").value)
        salario=parseInt(document.getElementById("salario").value)
        if (anios > 5) {
            bono = salario * 0.05
            salariofinal= bono + salario
            resp = document.getElementById("resp").innerHTML = `Se aplica bono. Su bono es de: $${bono}<br>Su bono y salario son de: $${salariofinal}`
        } else {
            resp = document.getElementById("resp").innerHTML = `No se aplica bono`
        }
    }
    enviotarifa(){
        let distancia=0, costo=0, resp
        distancia=parseInt(document.getElementById("distancia").value)
        if (distancia < 50) {
            costo= 10
        } else {
            costo = 20
        }
        resp = document.getElementById("resp").innerHTML = `El costo del envio es de: $${costo}`
    }
    descuentolealtad(){
        let comprasmensuales=0, preciocompra=0, descuento, comprafinal, resp
        comprasmensuales=parseInt(document.getElementById("compmensual").value)
        preciocompra=parseInt(document.getElementById("pcompra").value)
        if (comprasmensuales > 500) {
            descuento= preciocompra * 0.1
		    comprafinal= preciocompra - descuento
            resp = document.getElementById("resp").innerHTML = `Felicidades. su compra tiene un 10% de descuento.<br>Su descuento es de: $${descuento}<br>Total de compra: $${comprafinal}`
        } else {
            resp = document.getElementById("resp").innerHTML = `No aplica descuento en proxima compra. Total de compra: $${preciocompra}`
        }
    }
    descvolumencompra(){
        let preciocu, descuento, precio, unidades, preciofinal, resp
        unidades=parseInt(document.getElementById("unidades").value)
        preciocu=parseInt(document.getElementById("preciocu").value)
        precio= unidades * preciocu
        if (unidades>= 10 && unidades<=50) {
            descuento= 0.05
        } else {
            if (unidades>= 51 && unidades<= 100) {
                descuento= 0.1
            } else {
                if (unidades>100) {
                    descuento= 0.15
                } else {
                    resp = document.getElementById("resp").innerHTML = `No se aplica descuento`
                }
            }
        }
        descuento = precio * descuento
        preciofinal = precio - descuento
        resp = document.getElementById("resp").innerHTML = `Su descuento es de: $${descuento}<br>Su precio a pagar es de: $${preciofinal}`
    }
    costoservicio(){
        let costototal, descuento, horas, resp
        horas=parseInt(document.getElementById("horas").value)
        costototal= horas * 12
        if (horas > 10) {
            descuento = costototal * 0.20
            costototal= costototal - descuento
            resp = document.getElementById("resp").innerHTML = `Su descuento es de: $${descuento}<br>Su precio a pagar es de: $${costototal}`
        } else {
            resp = document.getElementById("resp").innerHTML = `No se aplica descuento.<br>Su precio a pagar es de: $${costototal}`
        }
    }
    sumapares(){
        let contador=0, almacenador=0, resp
        while (contador<=50) {
            contador = contador + 1
            if ((contador % 2)==0) {
                almacenador = contador + almacenador
                resp = document.getElementById("resp").innerHTML += `<br>${contador}`
            }
        }
        resp = document.getElementById("resp").innerHTML += `<br>la suma de los numeros pares es de: ${almacenador}`
    }
    contador_vocales(){
        let pos = 0, cv = 0, frase, resp
        frase = document.getElementById("frase").value
        frase = frase.toLowerCase()
        while (pos <= frase.length) {
            if (frase[pos] == 'a' || frase[pos] == 'e' || frase[pos] == 'i' || frase[pos] == 'o' || frase[pos] == 'u') {
                cv = cv + 1
            }
            pos= pos + 1
        }
        resp = document.getElementById("resp").innerHTML = `cantidad vocales: ${cv}`
    }
    contador_digitos(){
        let frase, cn=0, pos=0
        frase = document.getElementById("frase").value
        while (pos<=frase.length) {
            if (frase[pos]>= 0 && frase[pos]<= 9) {
                cn = cn+1
            }
            pos= pos + 1
        }
        resp = document.getElementById("resp").innerHTML = `cantidad de numeros: ${cn}`
    }
    adivinanum(){
        //genera numeros del 0 al 5 sin incluir el 6. floor elimina los decimales
        let numus
        const numale = Math.floor(Math.random()* 6)
        do {
            numus = parseInt(prompt("Adivina el numero entre 0 y 5"))
            if(numus<numale){
                alert("El numero es mayor, intentalo de nuevo")
            }
            else if (numus>numale){
                alert("El numero es menor, intentalo de nuevo")
            }
        } while (numus!=numale);
        alert(`Adivinaste el numero ${numale} !`)
    }
     contador_alfabeto(){
        let cv = 0, frase, resp
        frase = document.getElementById("frase").value
        frase = frase.toLowerCase()
        for (let pos = 0; pos <= frase.length; pos++) {
            if (frase[pos] >= 'a' && frase[pos] <= 'z') {
                cv = cv + 1
            }
        }
        resp = document.getElementById("resp").innerHTML = `Letras del alfabeto: ${cv}`
     }
     suma_impares(){
        let contador=1, almacenador=0, resp
        while (contador<=100) {
            if ((contador % 2)!=0) {
                almacenador = contador + almacenador
                resp = document.getElementById("resp").innerHTML += `<br>${contador}`
            }
            contador = contador + 1
        }
        resp = document.getElementById("resp").innerHTML += `<br>la suma de los numeros impares es de: ${almacenador}`
     }
     contador_caracteres(){
        let pos = 1, cv = 0, frase, resp
        frase = document.getElementById("frase").value
        frase = frase.toLowerCase()
        while (pos <= frase.length) {
            if (frase[pos] != " ") {
                cv = cv + 1
            }
            pos= pos + 1
        }
        resp = document.getElementById("resp").innerHTML = `Letras del alfabeto: ${cv}`
     }
     suma_numeros(){
        let num=0, almacenador = 1, resp
        do {
            num = parseInt(prompt("Ingresa numeros positivos (negativo si deseas terminar)"))
            almacenador= num + almacenador
            if(num<0){
                break
            }
        } while (num>=0);
        resp = document.getElementById("resp").innerHTML = `La suma de sus numeros es de: ${almacenador}`
     }
     cuenta_regresiva(){
        let num, resp
        num= parseInt(document.getElementById("num").value)
        while (num>=1) {
            resp = document.getElementById("resp").innerHTML += `<br>${num}`
            num = num -1
        }
     }
     suma_elemtos(){
        let arreglo_numeros = [4, 13, 56, 454, 23, 8, 98], almacenador=0,resp
        for (let contador = 0; contador < arreglo_numeros.length; contador++) {
            resp = document.getElementById("resp").innerHTML += `<br>${arreglo_numeros[contador]}`
            almacenador= arreglo_numeros[contador] + almacenador
        }
        resp = document.getElementById("resp").innerHTML += `<br>La suma del arreglo es: ${almacenador}`
     }
     promedio_calificaciones(){
        let arreglo_numeros = [7.5,8.3,10.7,7.2,9.9], almacenador=0,resp
        for (let contador = 0; contador<arreglo_numeros.length; contador++) {
            resp = document.getElementById("resp").innerHTML += `<br>${arreglo_numeros[contador]}`
            almacenador= arreglo_numeros[contador] + almacenador
        }
        resp = document.getElementById("resp").innerHTML += `<br>El promedio es de: ${almacenador/5}`
     }
     mayor_menorvalor(){
        let arreglo_numeros = [2, 51, 23, 8, 45], numayor, numenor, resp
        numayor= arreglo_numeros[0]
        numenor= arreglo_numeros[0]
        for (let contador = 0; contador < arreglo_numeros.length; contador++) {
            resp = document.getElementById("resp").innerHTML += `<br>${arreglo_numeros[contador]}`
            if (numenor > arreglo_numeros[contador]) {
                    numenor=arreglo_numeros[contador]
                }else if (numayor < arreglo_numeros[contador]){
                    numayor=arreglo_numeros[contador]   
            }
        }
        resp = document.getElementById("resp").innerHTML += `<br>Numero mayor: ${numayor}<br>Numero menor: ${numenor}`
     }
     buscar_elemento(){
        let arreglo_numeros = [6,2,3,8], num, resp, val
        num= parseInt(document.getElementById("num").value)
        for (let contador = 0; contador < arreglo_numeros.length; contador++) {
            resp = document.getElementById("resp").innerHTML += `<br>${arreglo_numeros[contador]}`
            if (arreglo_numeros[contador] == num) {
                val = 1   
            } 
        }
        if (val == 1) {
            resp = document.getElementById("resp").innerHTML += `<br>El numero ${num} se encuentra en el arreglo`
        } else {
            resp = document.getElementById("resp").innerHTML += `El numero ${num} NO se encuentra en el arreglo`
        }
     }
     elementos_pares(){
        let arreglo_numeros = [12, 2 , 3, 4], almacenador=0, resp
        for (let contador = 0; contador< arreglo_numeros.length; contador++) {
            resp = document.getElementById("resp").innerHTML += `<br>${arreglo_numeros[contador]}`
            if (arreglo_numeros[contador] % 2 == 0) {
                almacenador = almacenador + 1
            }
        }
        resp = document.getElementById("resp").innerHTML += `<br>hay ${almacenador} numeros pares`
     }
     inversion_arreglo(){
        let arreglo_numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], resp
        for (let contador = arreglo_numeros.length-1; contador>= 0; contador--) {
            resp = document.getElementById("resp").innerHTML += `<br>${arreglo_numeros[contador]}`
        }
     }
     buscar_indice(){
        let arreglo_numeros = [2, 342, 72, 142, 2, 2, 56], resp, num, val
        num= parseInt(document.getElementById("num").value)
        for (let contador = 0; contador < arreglo_numeros.length; contador++) {
            resp = document.getElementById("resp").innerHTML += `<br>${arreglo_numeros[contador]}`
            if (arreglo_numeros[contador]== num) {
                val = 1
                resp = document.getElementById("resp").innerHTML += `<br>valor encontrado en ${contador}`
            }
        }
        if (val!=1){
            resp = document.getElementById("resp").innerHTML += `<br>valor no entontrado`
        }
     }
     saludar(){
        let resp="Hola"
        document.getElementById("resp").innerHTML=`${resp}`
    }
    sumar(n1,n2){
        let resp
        resp=n1+n2
        return resp
    }
    sumar_dos_numeros(){
        let num1=0,num2=0, resp
       num1=parseInt(document.getElementById("num1").value) 
       num2=parseInt(document.getElementById("num2").value) 
       resp = this.sumar(num1,num2)
       document.getElementById("resp").innerHTML=`<br> ${num1} + ${num2} = ${resp}`
    }
    multiplicar(n1,n2){
        let resp=0
        resp=n1 * n2
        return resp
    }
    multiplicar_dos_numeros(){
        let num1,num2,resp
        num1=parseInt(document.getElementById("num1").value)
        num2=parseInt(document.getElementById("num2").value)
        resp=this.multiplicar(num1,num2)
        document.getElementById("resp").innerHTML=`${num1} * ${num2} = ${resp}`
    }
    par_o_impar(n1){
        if(n1 % 2 ==0){
            document.getElementById("resp").innerHTML=`El numero ${n1} es par`
        }else{
            document.getElementById("resp").innerHTML=`El numero ${n1} es impar`
        }
    }
    funcion_numero_par_o_impar(){
        let num
        num=parseInt(document.getElementById("num").value)
        this.par_o_impar(num)
    }
    area(n1,n2){
        let resp
        resp=n1 * n2
        return resp
    }
    area_de_un_rectangulo(){
        let base,altura,resp
        base=parseInt(document.getElementById("base").value)
        altura=parseInt(document.getElementById("altura").value)
        resp=this.area(base,altura)
        document.getElementById("resp").innerHTML=`El area del rectangulo es ${resp}`
    }
    imprimir_nombre(){
        let nombre
        nombre=document.getElementById("nombre").value
        document.getElementById("resp").innerHTML=`Mi nombre es ${nombre}`
    }
    convertidor(n1){
        let resp=0
        resp=(n1*9/5)+32
        return resp
    }
    grados_celsius_a_fahrenheit(){
        let num,resp
        num=parseFloat(document.getElementById("num").value)
        resp=this.convertidor(num)
        document.getElementById("resp").innerHTML=`Fahrenheit = ${resp}`
    }
    contador(f1){
        let pos=1, cv=0
        while (pos <= f1.length) {
            pos= pos + 1
            if (f1[pos] != " ") {
                 cv = cv + 1
            }
        }
        return cv
    }
    contar_caracter_en_un_frase(){
        let frase, resp
        frase=document.getElementById("frase").value
        resp = this.contador(frase)
        document.getElementById("resp").innerHTML=`Su frase tiene ${resp} caracteres`
    }
    presentar(n1){
        let resp
        document.getElementById("resp").innerHTML =``
        for (let i = 0; i < n1.length; i++) {
            resp = document.getElementById("resp").innerHTML +=`<br>${n1[i]}`  
        }
    }
    imprimir_numeros(){
        let numeros=[1,2,3,4,5,6,7,8,9,10]
        this.presentar(numeros)
    }
    calcular(num){
        let almacenador=0, resp
        for (let contador = 0; contador < num.length; contador++) {
            resp = document.getElementById("resp").innerHTML+= `<br>${num[contador]}`
            almacenador= num[contador] + almacenador
        }
        return almacenador
    }
    sumar_una_lista_de_numeros(){
        let numeros=[6, 12, 3, 45, 6, 8, 97], resp
        resp=this.calcular(numeros)
        document.getElementById("resp").innerHTML+=`<br>La suma de los numeros es de ${resp}`
    }
}
let ope = new ejercicios()