const nuestroPrimerObjeto = {
    claveComoString: 'valor',
    aquiHayUnNumero: 3000,
    esUnBooleano: true,
    unObjetoAnidado: {}
}

const nombre = 'Fran Quesada';

const escuela = 'Fictizia';

const profesor = {nombre, escuela}

const string = 'mi string'

string = 'otra cosa diferente'

const objeto = {
    propiedad1: 'Esta es mi propiedad original'
}

objeto.propiedad2 = 'Esta es una propiedad nueva'
objeto.propiedad1 =  'Esta propiedad la modifico'

const peligro ={
    propiedad1: 'Esta es mi propiedad original'
}

peligro = {
    prohibido: 'Esto no lo puedo hacer '
}

const heroes = {
    dc: ['batman', 'superman'],
    marvel: ['spiderman', 'iron man']
}

const heroesDc = heroes.dc

const dc = {
    heroes:{
        batman:{
            nombre: 'Bruce Wayne'
        },
        superman:{
            nombre: 'Clark Kent'
        }
    }
}

const {heroes: {batman}} = dc

const objeto = {
    nombre:'Fran Quesada',
    edad:26,
}

const objetoCongelado = Object.freeze(objeto)
objetoCongelado.localidad = 'Madrid'

const nuevoObjeto = {
    ...objetoCongelado,
    localidad: 'Madrid'
}