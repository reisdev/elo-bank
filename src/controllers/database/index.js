const firebase = require("firebase");

const config = {
  apiKey: "AIzaSyCg2l2m9dwEJWP8gfrj4GVeiqqWGPXMPnw",
  authDomain: "elo-bank.firebaseapp.com",
  databaseURL: "https://elo-bank.firebaseio.com",
  projectId: "elo-bank",
  storageBucket: "elo-bank.appspot.com",
  messagingSenderId: "1016193516480"
};

const app = firebase.initializeApp(config);
const database = app.firestore();

class DB {
  static getAll = async node => {
    try {
      const dbv = database.collection("desbravadores");
      return dbv.get();
    } catch (error) {
      console.log(error);
    }
  };
  static updateSaldo = async (id, tipo, valor) => {
    try {
      const collection = database.collection("desbravadores");
      const query = await collection.where("id", "==", id).get();
      let dbv,
        saldo = 0;
      query.forEach(doc => (dbv = { key: doc.id, ...doc.data() }));
      switch (tipo) {
        case "credito":
          saldo = dbv.saldo + parseFloat(valor);
          break;
        case "debito":
          saldo = dbv.saldo - parseFloat(valor);
          break;
        default:
          break;
      }
      if (saldo < 0) {
        throw Error("Saldo insuficiente");
      }
      collection.doc(dbv.key).update({
        saldo: saldo
      });
    } catch (error) {
      throw error;
    }
  };
}

export default DB;
