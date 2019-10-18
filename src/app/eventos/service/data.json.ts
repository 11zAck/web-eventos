import { Evento } from '../classes/evento';
import { Listado } from '../classes/listado';

export const BANCOS: Listado[] = [
    { id: 1, itemName: 'BANCO DE CHILE' },
    { id: 2, itemName: 'BANCO INTERNACIONAL' },
    { id: 3, itemName: 'SCOTIABANK CHILE' },
    { id: 4, itemName: 'BANCO DE CREDITO E INVERSIONES' },
    { id: 5, itemName: 'BANCO BICE' },
    { id: 6, itemName: 'HSBC BANK (CHILE)' },
    { id: 7, itemName: 'BANCO SANTANDER-CHILE' },
    { id: 8, itemName: 'ITAÚ CORPBANCA' },
    { id: 9, itemName: 'BANCO SECURITY' },
    { id: 10, itemName: 'BANCO FALABELLA' },
    { id: 11, itemName: 'BANCO RIPLEY' },
    { id: 12, itemName: 'RABOBANK CHILE' },
    { id: 13, itemName: 'BANCO CONSORCIO' },
    { id: 14, itemName: 'BANCO PENTA' },
    { id: 15, itemName: 'BANCO BILBAO VIZCAYA ARGENTARIA, CHILE (BBVA)' },
    { id: 16, itemName: 'BANCO BTG PACTUAL CHILE' },
    { id: 17, itemName: 'BANCO DEL ESTADO DE CHILE' }
];

export const TIPO_CUENTA: Listado[] = [
    { id: 'CC', itemName: 'Cuenta Corriente' },
    { id: 'CV', itemName: 'Cuenta Vista' },
    { id: 'CR', itemName: 'Cuenta RUT' }
];

export const DESEOS: Listado[] = [
    { id: 1, itemName: 'Alegría' },
    { id: 2, itemName: 'Amor' },
    { id: 3, itemName: 'Bondad' },
    { id: 4, itemName: 'Gozo' },
    { id: 5, itemName: 'Humildad' },
    { id: 6, itemName: 'Paciencia' },
    { id: 7, itemName: 'Paz' }
];

export const EVENTOS: any[] = [
    {
        id: 1,
        titulo: 'Aniversario 20 años',
        descripcion: '',
        direccion: 'Maria Elena 361',
        activo: true,
        reportado: false,
        banco: { id: 1, nombre: 'Banco Chile', activo: true },
        tipoCuenta: 'Cuenta corriente',
        numeroCuenta: '1587092662',
        rutCuenta: '16.376.726-3',
        emailCuenta: 'pagos@gmail.com',
        telefono: '+56 9 99234887',
        fechaEvento: new Date('2019-09-23 19:30:00'),
        creacion: new Date(),
        edicion: new Date(),
        propietario: { id: 1, firstname: 'Alonso', lastname: 'Valle', username: 'isaac@roisel.cl' },
        invitados: [
            { id: 2, firstname: 'Alvaro', lastname: 'Robles', email: 'arobles@email.cl' },
            { id: 3, firstname: 'Gabriela', lastname: 'Gonzalez', email: 'ggonzalez@email.cl' }
        ],
        deseos: [
            { id: 1, nombre: 'Paz', activo: true, valor: 30000 },
            { id: 2, nombre: 'Alegria', activo: true, valor: 50000 }
        ]
    },
    {
        id: 2,
        titulo: 'Cumpleaños Isaac',
        descripcion: '',
        direccion: 'Maria Elena 361',
        activo: true,
        reportado: false,
        banco: { id: 1, nombre: 'Banco Chile', activo: true },
        tipoCuenta: '',
        numeroCuenta: '',
        rutCuenta: '',
        emailCuenta: '',
        telefono: '',
        fechaEvento: new Date('2019-09-07 19:30:00'),
        creacion: new Date(),
        edicion: new Date(),
        propietario: { id: 1, firstname: 'Alonso', lastname: 'Valle', username: 'isaac@roisel.cl' },
        invitados: [
            { id: 2, firstname: 'Alvaro', lastname: 'Robles', email: 'arobles@email.cl' },
            { id: 3, firstname: 'Rene', lastname: 'Gonzalez', email: 'rgonzalez@email.cl' }
        ],
        deseos: [
            { id: 1, nombre: 'Paz', activo: true, valor: 30000 },
            { id: 2, nombre: 'Alegria', activo: true, valor: 50000 },
            { id: 2, nombre: 'Gozo', activo: true, valor: 150000 }
        ]
    }
];


