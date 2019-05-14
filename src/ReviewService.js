import { RestClient } from "./RestClient";


export class ReviewService {

    restClient = new RestClient();

    relativeBasePath = "api/v1/review/";

    /**
     * Evaluation
     * Add new evaluation over a resource
     */
    addEvaluation(evaluation) {
        return this.restClient.POST(this.relativeBasePath + "evaluations", evaluation);
    }

    /**
     * Evaluation
     * Get evaluation over a resource gived by user
     * @param {*} resourceId 
     * @param {*} userId 
     */
    getEvaluationResourcebyUserId(resourceId, userId) {
        return this.restClient.GET(this.relativeBasePath + "evaluations/resource/" + resourceId + "/user/" + userId);
    }


    /**
     * Evaluation
     * Get evaluation average over a resource
     * @param {*} resourceId 
     */
    getEvaluationAverageOverResource(resourceId) {
        return this.restClient.GET(this.relativeBasePath + "evaluations/resource/" + resourceId);
    }


    /**
     * States
     * Add new state over a resource
     * @param {*} state 
     */
    addState(state) {
        return this.restClient.POST(this.relativeBasePath + "states", state);
    }

    /**
     * States
     * Get states over a resource
     * @param {*} resourceId 
     */
    getStatesOverAResource(resourceId){
        return this.restClient.GET(this.relativeBasePath + "states/resource/" + resourceId);
    }   

    /**
     * States
     * Get states over a resource gived by user
     * @param {*} resourceId 
     * @param {*} userId 
     */
    getEvaluationResourcebyUserId(resourceId, userId) {
        return this.restClient.GET(this.relativeBasePath + "states/resource/" + resourceId + "/user/" + userId);
    }
}