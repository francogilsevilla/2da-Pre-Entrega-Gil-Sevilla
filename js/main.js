const personas = [
    {
        id: 3,
        nombre: 'Jose',
        apellido: 'Fernandez',
        edad: 25,
    },
    {
        id: 1,
        nombre: 'Juan',
        apellido: 'Lopez',
        edad: 12,
    },
    {
        id: 2,
        nombre: 'Marta',
        apellido: 'Gomez',
        edad: 55,
    },
];

let ingreso = 0;

function caso1() {
    let id = personas.length + 1;
    let nombre = prompt('Ingrese el nombre');
    let apellido = prompt('Ingrese el apellido');
    let edad = parseInt(prompt('Ingrese el edad'));
    let persona = { id, nombre, apellido, edad };
    console.log('Se creo la persona');
    console.log(persona);
    personas.push(persona);
    console.log(personas);
};



do {
    ingreso = parseInt(prompt('Bienvenido. Que desea realizar: \n 1- Agregar Persona \n 2- Ver lista de personas \n 3- Salir'));
    switch (ingreso) {
        case 1: {
            caso1(1);
            const ordenar_por_edad = personas.sort((persona1,persona2) =>{
                if(persona1.edad > persona2.edad){
                    return 1;
                }
                if(persona1.edad < persona2.edad){
                    return -1;
                }
                if(persona1.edad === persona2.edad){
                    return 0;
                }
            });
            break;
        };
        case 2:
            console.log(personas);
            break;
        case 3: console.log('Muchas gracias por utilizar el simulador');
            break;
        default: console.log('No se reconoce el comando. Intetar nuevamente');
            break;
    };
} while (ingreso === 1 || ingreso === 2);
