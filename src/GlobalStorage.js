
export class GlobalStorage {

     handler;

    constructor(){
        this.handler = require('react-native-local-storage');
    }

    saveData(key, value){
        this.handler.save(key,value).then(() => {
            this.handler.get(key).then((data) => {console.log("get: ", data)});
          })
    }

    getData(key) {        
      return this.handler.get(key);
    }

}