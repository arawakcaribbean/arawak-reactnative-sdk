# ReactJS / ReactNative Library for Arawak Platform

This is a mid-level library that allows easy access to the REST API services offered by the Arawak platform. Take advantage of the potential of React's Fetch API and offer a layer of abstraction on it to facilitate access to any REST API and in particular to Arawak API

### Available APIs

* BookableService: To manage bookables
* BookingService: To manage bookings
* LocationService: To manages locations and POIs.
* ReviewService: To manage reviews over resources
* MediaService: To manage medias
* ClaimService: To manage claim over resources
* RestClient: A first level API to free operations over any REST APIs



### Installation

The instalation process is quite simple, just copy the folder to your providers folders, and use it.

### Code use sample

```javascript

import { ClaimService } from 'src/ClaimService';

claimService = new ClaimService();
claim.getClaimStatusResourceByUser("string", "string").then ((res)=>{
console.log(JSON.stringfy(res));
}).catch (error =>{
console.log(error);
})
```



