export const environment = {
    production: false,
    versionNode: "8.12.0",
    versionSistema: "9.0",
    facturacionRest: {
    //urlBase: 'http://10.0.0.212:8080/facturacionrest-margarita-v24/ws',
    //urlFactElectronica: 'http://10.0.0.212:8080/FacturacionElectronicaRestV1/ws',

    urlBase: 'http://192.168.140.119:8080/facturacionrest-margarita-v19/ws',
    //urlBase: 'http://localhost:8080/facturacionrest/ws',
    urlFactElectronica: 'http://localhost:8080/FacturacionElectronicaRest/ws',
    timeoutDefault: 60000
    },
    localStorage: {
        acceso: 'accesoActivo',
        menu: 'menuActivo',
        perfil: 'perfilActivo',
        usuario: 'usuarioActivo',
        cuenta: 'cuenta',

    },
    versionLocal: {
        numero: '8.13',
        descripcion: 'Produccion'
    }
};
