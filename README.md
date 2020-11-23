Módulo 3: Ejercicio de evaluación intermedia

El ejercicio consiste en desarrollar una página web sencilla con React.

Antes de empezar, tenéis que crear un nuevo repositorio en GitHub desde GitHub Classroom usando este enlace. Una vez creado, lo clonaremos en nuestro ordenador y en la carpeta creada empezaremos a trabajar en el ejercicio.

https://raw.github.com/Adalab/modulo-3-evaluacion-intermedia-mgarvia/blob/master/my-react-project/src/images/img-reademe-png

La web consiste en un listado de pokemon, con una tarjeta para cada uno con información relevante, como el nombre, tipos y una imagen. La información de los pokemon la obtenemos de un array de datos que incluiremos en el estado del componente App.

[
    {
        "id": 1,
        "name": "bulbasaur",
        "types": ["poison", "grass"],
        "evolution": null,
        "url":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
        "id": 2,
        "name": "ivysaur",
        "types": ["poison", "grass"],
        "evolution": "bulbasaur",
        "url":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    },
    {
        "id": 3,
        "name": "venusaur",
        "types": ["poison", "grass"],
        "evolution": "ivysaur",
        "url":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
    },
    {
        "id": 4,
        "name": "charmander",
        "types": ["fire"],
        "evolution": null,
        "url":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
        "id": 5,
        "name": "charmeleon",
        "types": ["fire"],
        "evolution": "charmander",
        "url":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    },
    {
        "id": 6,
        "name": "charizard",
        "types": ["flying", "fire"],
        "evolution": "charmeleon",
        "url":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },
    {
        "id": 7,
        "name": "squirtle",
        "types": ["water"],
        "evolution": null,
        "url":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
        "id": 8,
        "name": "wartortle",
        "types": ["water"],
        "evolution": "squirtle",
        "url":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
    },
    {
        "id": 9,
        "name": "blastoise",
        "types": ["water"],
        "evolution": "wartortle",
        "url":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
    },
    {
        "id": 10,
        "name": "caterpie",
        "types": ["bug"],
        "evolution": null,
        "url":
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
    }
]
Pasos para realizar el ejercicio
Para realizar el ejercicio os proponemos seguir estos pasos:

Plantear en papel la estructura de componentes para la web.
Crear una nueva aplicación React.
Pintar 1 tarjeta, recogiendo la información de las props.
Pintar todas las tarjetas.
Crear dos componentes, PokeList y Pokemon, respectivamente para el listado y para la card de cada Pokemon.
BONUS: ajustar la maquetación al diseño.
Entrega
La evaluación solo se considerará terminada cuando:

Esté publicada en GitHub Pages y esté funcionando, para lo cual tendréis que subir el código, también a la carpeta docs/ del repositorio.
El enlace a GitHub Pages esté en la página página principal del repositorio, en la parte superior, al lado de la descripción.
¡Hazte con todos!
