export const environment = {
    production: false,
    versionNode: "8.12.0",
    versionSistema: "8.13",
    facturacionRest: {
    urlBase: 'http://10.0.0.212:8080/facturacionrest-margarita-v23/ws',
   // urlBase: 'http://192.168.140.119:8080/facturacionrest-margarita-v21/ws',
  //  urlBase: 'http://localhost:8080/facturacionrest/ws',
      urlFactElectronica: 'http://localhost:8080/FacturacionElectronicarest/ws',
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
