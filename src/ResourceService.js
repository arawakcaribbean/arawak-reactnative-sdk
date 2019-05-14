import { RestClient } from "./RestClient";


export class ResourceService {

    restClient = new RestClient();

    relativeBasePath = "api/v1/resource/";

    /**
     * Full text search over available resources
     */
    searchResources(textSearch, page, size) {
        return this.restClient.GET(this.relativeBasePath + "entities/page/search?page=" +page+ "&query="+ textSearch + "&size=" + size);
    }

}