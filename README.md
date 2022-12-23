<hr>

<p align="center">
<img width=100 src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/imgReadme/angular.png"/>
<img width=100 src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/imgReadme/ts.png"/>
<img width=100 height=120 src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/imgReadme/firebase.png"/>
<img width=100 src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/imgReadme/html.png"/>
<img width=100 src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/imgReadme/sass.png"/>
</p>

<hr>

<h1 align="center">SALA DE JUEGOS TP1 LABORATORIO IV</h1>

Deploy en Firebase: <a href="https://fir-userauth-fe03f.web.app/" target="_blank">Sala de Juegos</a>

## SPRINT 1

<p>Armado del proyecto; Subido a heroku o firebase; Componente de Login; Componente Home; Componente “Quién Soy”(Datos personales del alumno, Imagen del alumno, Explicación del juego propio) y Favicon.</p>
<h3 align="center">HOME</h3>
<p align="center">
   <img src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/imgReadme/home.png">
 </p>

<h3 align="center">QUIEN SOY</h3>
<p align="center">
   <img src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/imgReadme/quiensoy.png">
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
   <img src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/imgReadme/login.png">
 </p>
 
 <h3 align="center">REGISTRO</h3>
<p align="center">
   <img src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/imgReadme/registro.png">
 </p>
 
 <h3 align="center">ERROR</h3>
<p align="center">
   <img src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/imgReadme/error.png">
 </p>
 
 
 ## SPRINT 3
 
<p>
  - Componente Chat
  <ul>
    <li>Solamente usuarios logueados podrán acceder a la sala de chat.</li>
    <li>Debemos marcar el usuario y hora que envió el mensaje</li>
</ul>

- Incorporar módulos y loadchildren
- Incorporar los juegos
- <ul>
  <li>Ahorcado:<ul>
    <li>No se debe ingresar datos desde el teclado. Utilizar botones para el ingreso de las letras.</li>
    </ul></li>
  <li>Mayor o Menor:<ul>
    <li>Desde un mazo de carta se va a preguntar si la siguiente es mayor o menor. El jugador sumará un punto ante cada carta que adivine.</li>
    </ul></li>
  </ul>
  

<h3 align="center">CHAT</h3>
<p align="center">
   <img src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/imgReadme/chat.png">
 </p>
 
 <h3 align="center">MENÚ JUEGOS</h3>
<p align="center">
   <img src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/imgReadme/menujuegos.png">
 </p>
 
 <h3 align="center">AHORCADO</h3>
<p align="center">
   <img src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/imgReadme/ahorcado.png">
 </p>
 
 <h3 align="center">MAYOR O MENOR</h3>
<p align="center">
   <img src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/imgReadme/mayormenor.png">
 </p>
 
 ## SPRINT 4
 
<p>
  - Agregar el juego Preguntados
  <ul>
    <li>Tiene que obtener las imágenes de una api.</li>
    <li>Realizar el llamado a la api desde un Service</li>
    <li>Dar al jugador opciones de elección. No se puede ingresar datos por teclado.</li>
</ul>

- Juego propio
- <ul>
  <li>Juegos que no se pueden utilizar:<ul>
    <li>TATETI</li>
    <li>MEMOTEST</li>
    <li>PIEDRA PAPEL O TIJERA</li>
    </ul></li>
  <li>Agregar descripción de su juego en la sección “Quién soy”. Debe contar con información de qué juego es y cómo se juega.</li>
  </ul>
  
<h3 align="center">PREGUNTADOS</h3>
<p align="center">
   <img src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/imgReadme/preguntados.png">
 </p>
 
 <h3 align="center">JUEGOS DE LA VIDA</h3>
<p align="center">
   <img src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/imgReadme/juegodelavida.png">
 </p>
 
 ## SPRINT 5
 
<p>
  - Incorporar listado de resultados
  <ul>
    <li>Al finalizar cada juego se debe guardar registro del resultado:<ul>
    <li>Guardar datos del usuario, fecha, puntaje, etc..</li>
    </ul></li>
  </ul>
  
   - Incorporar una encuesta
  <ul>
    <li>Tiene que pedir los siguientes datos:<ul>
    <li>Nombre y apellido.</li>
    <li>Edad, validar que sean mayores de 18 años y menores de 99 años..</li>
    <li>Número de teléfono, validar que sean solo números y no más de 10 caracteres.</li>
    </ul></li>
  </ul>
  <ul>
    <li>Mínimo 3 preguntas:<ul>
    <li>Utilizar distintos controles, textbox, checkbox, radiobutton, etc.</li>
    <li>No se pueden repetir.</li>
    <li>Tiene que contar con validaciones.</li>
    <li>Todos los campos son requeridos.</li>
    <li>Guardar las respuestas en Firebase identificando el usuario.</li>
    </ul></li>
  </ul>

<h3 align="center">LISTADO DE RESULTADOS</h3>
<p align="center">
   <img src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/imgReadme/estadisticas.png">
 </p>
 
 <h3 align="center">ENCUESTA</h3>
<p align="center">
   <img src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/imgReadme/encuesta.png">
 </p>
 
 ## SPRINT 6
 
 - Incorporar una nueva sección que muestre las respuestas de la encuesta.
● Solo lo podrá ver un usuario con perfil administrador
● Utilizar Can Activate y Guard.

<p>
  - Incorporar una nueva sección que muestre las respuestas de la encuesta.
  <ul>
    <li>Solo lo podrá ver un usuario con perfil administrador</li>
    <li>Utilizar Can Activate y Guard</li>
  </ul>

<h3 align="center">RESULTADO DE ENCUESTAS</h3>
<p align="center">
   <img src="https://github.com/EmmaVZ89/Sala-de-Juegos-TP-Laboratorio-IV/blob/main/imgReadme/resultadoencuestas.png">
 </p>
