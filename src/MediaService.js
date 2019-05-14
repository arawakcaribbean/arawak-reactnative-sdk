import { RestClient } from "./RestClient";


export class MediaService {

    restClient = new RestClient();

    relativeBasePath = "api/v1/media/";

    getImagesRandom(numberOfImages){
        return this.restClient.GET( this.relativeBasePath + "random/" + numberOfImages);
    }

}