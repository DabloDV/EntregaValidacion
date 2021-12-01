let contenidoIdentificacion=/^\d{10}$/
var identificacion="1000570462"
if(contenidoIdentificacion.test(identificacion)){
    console.log("Cédula válida")
}else{
    console.log("Cédula inválida")
}

let contenidoNombre=/[a-zA-Z]\s[a-zA-Z]/m
var nombre="Juan Pablo"
if(contenidoNombre.test(nombre)){
    console.log("Nombre(s) válido(s)")
}
else{
    console.log("Nombre(s) inválido(s)")
}

let contenidoApellidos=/[a-zA-Z]\s[a-zA-Z]/m
var apellidos="Duque Varela"
if(contenidoApellidos.test(apellidos)){
    console.log("Apellido válido")
}
else{
    console.log("Apellido inválido")
}

let contenidoDireccion=/^(cr|cll)\s\d+[A-Z]\s[#]\d+[-]\d+\w?$/
var direccion="cll 44A #89-72"
if(contenidoDireccion.test(direccion)){
    console.log("Direccion válida")
}
else{
    console.log("Direccion inválida")
}

let contenidoCorreo=/^[A-Za-z]{1,64}(@hotmail.com)$/
var correo="juanpabloduquev@hotmail.com"
if(contenidoCorreo.test(correo)){
    console.log("Correo válido")
}
else{
    console.log("Correo inválido")
}

let contenidoUsuario=/^[A-Za-z]{3,100}$/
var usuario="DabloDv"
if(contenidoUsuario.test(usuario)){
    console.log("Usuario válido")
}
else{
    console.log("Usuario inválido")
}


let contenidoContraseña=/^[A-Za-z\d]{8}$/
var contraseña="Contra123"

if(contenidoContraseña.test(contraseña)){
    console.log("Contraseña válida")
}
else{
    console.log("Contraseña inválida")
}