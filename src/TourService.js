import { RestClient } from "./RestClient";


export class TourService {

    restClient = new RestClient();

    relativeBasePath = "api/v1/playtour/";

    getMyManagedTours(ownerUserId){
        return this.restClient.GET( this.relativeBasePath + "tours/user/"+userId+"?page=0&size=50", null);
    }

    getMyTours(participantUserId){
        return this.restClient.GET( this.relativeBasePath + "tours/participant/"+participantUserId+"?page=0&size=50", null);
    }

}