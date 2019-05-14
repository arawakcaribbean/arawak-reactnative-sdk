import { RestClient } from "./RestClient";


export class BookableService {

    restClient = new RestClient();

    relativeBasePath = "api/v1/booking/";

    /**
     * Create a bookable
     * @param {*} bookable 
     */
    addBookable(bookable){
        return this.restClient.POST( this.relativeBasePath + "bookables", bookable);
    }

    /**
     * Get a bookable by id
     * @param {*} bookableId 
     */
    getBookableById(bookableId){
        return this.restClient.GET(this.relativeBasePath + "bookables/" + bookableId);
    }

    /**
     * Delete a bookable by Id
     * @param {*} bookableId 
     */
    deleteBookableById(bookableId){
        return this.restClient.DELETE(this.relativeBasePath + "bookables/" + bookableId);
    }

    /**
     * Get bookable moments for a resource betwen two dates
     * @param {*} resourceId 
     * @param {*} iniDate 
     * @param {*} endDate 
     */
    getBookableMomentsBetweenDatesByResourceId(resourceId, iniDate, endDate){
        return this.restClient.DELETE(this.relativeBasePath + "bookables/" + resourceId + "/" + iniDate + "/" + endDate);
    }
   
}