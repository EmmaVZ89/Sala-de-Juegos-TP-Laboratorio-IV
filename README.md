# SALA DE JUEGOS TP1 LABORATORIO IV

Deploy en Heroku: <a href="https://fir-userauth-fe03f.web.app/" target="_blank">Sala de Juegos</a>

## SPRINT 1

<p>Armado del proyecto; Subido a heroku o firebase; Componente de Login; Componente Home; Componente “Quién Soy”(Datos personales del alumno, Imagen del alumno, Explicación del juego propio) y Favicon.</p>
<h3 align="center">HOME</h3>
<p align="center">
   <img src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/src/assets/cap-home.png">
 </p>

<h3 align="center">QUIEN SOY</h3>
<p align="center">
   <img src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/src/assets/cap-quiensoy.png">
 </p>

## SPRINT 2

<p>
  - Componente Home
  <ul>
    <li>Tiene que ser el componente principal, el cual tendrá los accesos a los diferentes
juegos y listados.</li>
    <li>Si el usuario está logueado, mostrar información del mismo y botón de Log Out. (No
se debe mostrar los botones de Registro y Login una vez que el usuario está
logueado)</li>
</ul>

- Componente Login
- <ul>
  <li>Tiene que tener la validación de usuario contra firebase</li>
  <li>Registrar el log de ese usuario en firebase.</li>
  <li>En caso de que sea exitoso registrar:<ul>
    <li>Usuario</li>
    <li>Fecha de ingreso</li>
    </ul></li>
  <li>En caso correcto deber rutear a la home</li>
  <li>Debe tener botones de acceso rápido.<ul>
    <li>Estos botones tienen que completar los campos de email y contraseña con
un usuario válido que al presionar el botón ingresar acceda a la home.</li></ul></li>
  </ul>
  
- Componente Registro
  <ul>
  <li>Tiene que generar un nuevo usuario y redirigir al home al crearlo exitosamente, es
decir, loguear al usuario automáticamente.</li>
  <li>Emitir mensaje si el usuario ya se encuentra registrado. (NO USAR ALERT)</li>
</ul>
</p>

<h3 align="center">LOGIN</h3>
<p align="center">
   <img src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/src/assets/cap-login.png">
 </p>
 
 <h3 align="center">REGISTRO</h3>
<p align="center">
   <img src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/src/assets/cap-registro.png">
 </p>
 
 <h3 align="center">ERROR</h3>
<p align="center">
   <img src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/src/assets/cap-error.png">
 </p>
