const Lokka = require('lokka').Lokka;
const Transport = require('lokka-transport-http').Transport;

const headers = {
  Authorization: 'Bearer YOUR_AUTH_TOKEN'
}

const client = new Lokka({
  transport: new Transport('https://api.graph.cool/simple/v1/cj8mpr4c70gm60110xcu2plrk', {headers})
});

function getItems() {
  return client.query(`
      {
    	allLinks{
        createdAt
        description
        id
        updatedAt
      	url
      }
    }
  `)
}
getItems().then((data)=>console.log(data));