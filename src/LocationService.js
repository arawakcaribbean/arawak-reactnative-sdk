import { RestClient } from "./RestClient";


export class LocationService {

    restClient = new RestClient();

    relativeBasePath = "api/v1/location/";


    /**
     * Get all countries registered
     */
    getCountries(){
        return this.restClient.GET( this.relativeBasePath + "countries/");
    }

    /**
     * Get all countries by id
     * @param {*} countryId 
     */
    getCountryById(countryId){
        return this.restClient.GET( this.relativeBasePath + "countries/" + countryId);
    }


    /**
     * Register a new location
     * @param {*} location 
     */
    addLocation(location) {
        return this.restClient.POST( this.relativeBasePath + "locations", location);
    }
    

    /**
     * Get all locations based in countryId
     * @param {*} countryId 
     */
    getLocationByCountryId(countryId){
        return this.restClient.GET( this.relativeBasePath + "locations/by/country/" + countryId);
    }


    /**
     * Get the location for a resource Id
     * @param {*} resourceId 
     */
    getLocationByResourceId(resourceId){
        return this.restClient.GET( this.relativeBasePath + "locations/by/resource/" + resourceId);
    }

    


}