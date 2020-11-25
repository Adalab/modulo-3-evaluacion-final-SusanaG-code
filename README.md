
Módulo 3: Ejercicio de evaluación final

Esta es la prueba para la evaluación final del módulo React en Adalab. El ejercicio consiste en desarrollar una página web con un listado de personajes de Rick and Morty, que podemos filtrar por el nombre del personaje. 
Esats son las partes del ejercicio:

1. Listado de personajes

Una web con el listado de personajes de Rick and Morty con el servicio de https://rickandmortyapi.com/documentation/#get-all-characters o el de back up (https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json) que devuelve información sobre los primeros 20 personajes de la serie. Sobre cada uno, se pinta al menos:

•Foto
•Nombre
•Especie

2. Filtrado de personajes

La segunda parte consiste en poder buscarlos por nombre. Se añade un <input> a la interfaz, de forma que al ir escribiendo un nombre queden en la interfaz solo los personajes cuyo nombre contiene las letras escritas. En el pantallazo de arriba, al escribir 'Ric' aparecen personajes cuyo nombre completo contiene esas letras en ese orden.
  
3 Componentes del listado de personajes 

El listado debe tener los siguientes componentes como mínimo:

•Componente para los filtros

•Componente para el listado

•Componente para la tarjeta de cada personaje del listado 

•Componente para el detalle de cada personaje


4. Detalle de personajes
Al hacer clic sobre la tarjeta de un personaje, su información aparecerá a pantalla completa. Para esto se usarán rutas y React router. En la pantalla de detalle aparecerá además de la foto, nombre y especie, el planeta de origen, el número de episodios en los que aparece y si está vivo o muerto.
  
5. Detallitos de calidad

•El campo de texto debe estar recubierto por una etiqueta <form />.

•Si estando en el campo de filtrado pulsamos intro debe impedirse que el navegador navegue
o cambie la ruta sin querer.

•Si se busca por un texto por ejemplo "XXX" y no hay ningún personaje que coincida con dicho texto se debe mostrar un mensaje del tipo "No hay ningún personaje que coincida con la palabra XXX".

•El filtro debe filtrar independientemente de que la usuaria introduzca el texto en mayúsuclas o minúsculas.

•Al entrar en el detalle de un personaje y a continuación pulsar atrás, el campo de texto debe mostrar el texto que tenía anteriormente.
6. 

BONUS: Mejoras visuales
Para terminar, podéis realizar algunas mejoras visuales del ejercicio. Por ejemplo:

•Mostrar la especie y si un personajes está muerto con un icono. •Usar algún sistema de grid para pintar el listado de personajes. •Que funcione bien el responsive en dispositivos pequeños.

7. BONUS: URL compartible

•Como ejercicio extra os proponemos que la URL del detalle de personaje sea compartible, es decir, que si visitamos esa URL directamente en el navegador se vea el detalle del personaje.

•Y en el caso de que el usuario navegue a una URL inexistente como por
ejemplo http://localhost:3000/#/detail/12345 (el id 12345 no existe) debemos mostrar un mensaje del tipo "El personaje que buscas no existe".

8. BONUS: Ordenación
Un extra interesante sería que ordenáseis el listado de personajes alfabéticamente por nombre.

Criterios de evaluación

•Crea componentes con sintaxis correcta.

•Crea una estructura adecuada de componentes.

•Usa las props para pasar datos a componentes hijos.

•Sabe pintar listados*.

•Sabe usar métodos funcionales de array (map, filter, etc.).

•Usa el estado para gestionar información de la interfaz*.

•El componente principal App.js maneja el estado de la aplicación. 

•Usa eventos en React para atender a interacciones del usuario. 

•Usa métodos / hooks del ciclo de vida para las peticiones al servidor.

•Escribir un código sólido, sin errores en la consola.

•Usa propTypes para evitar errores de tipado.

•Tiene soltura a la hora de realizar cambios en el ejercicio presencial.

•Crea rutas navegables dentro de una aplicación
