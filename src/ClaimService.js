import { RestClient } from "./RestClient";


export class ClaimService {

    restClient = new RestClient();

    relativeBasePath = "api/v1/claim/";

    /**
     * Register a claim over resource
     * @param {*} claim 
     */
    addClaim(claim) {
        return this.restClient.POST(this.relativeBasePath + "claims", claim);
    }

    /**
     * Register a claim over resource
     * @param {*} claim 
     */
    getClaimStatusResourceByUser(resourceId, userId) {
        return this.restClient.GET(this.relativeBasePath + "claims/" + resourceId + "/" + userId);
    }

    /**
     * Set claim form data for claim request
     * @param {*} claimFormData 
     */
    fillClaimForm(claimFormData){
        return this.restClient.POST(this.relativeBasePath + "claimforms", claimFormData);
    }    

}