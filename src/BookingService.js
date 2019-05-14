import { RestClient } from "./RestClient";


export class BookingService {

    restClient = new RestClient();

    relativeBasePath = "api/v1/booking/";

    /**
     * Create a booking based on bookable id
     * @param {*} booking 
     */
    addBooking(booking){
        return this.restClient.POST( this.relativeBasePath + "bookings", booking);
    }

    /**
     * Get a booking by id
     * @param {*} bookingId 
     */
    getBookingById(bookingId){
        return this.restClient.GET( this.relativeBasePath + "bookings/" + bookingId);
    }

    /**
     * Update a booking by booking id
     * @param {*} bookingId 
     * @param {*} booking 
     */
    updateBookingByid(bookingId, booking){
        return this.restClient.PUT( this.relativeBasePath + "bookings/" + bookingId, booking);
    }

    /**
     * Delete a booking by bookingId
     * @param {*} bookingId 
     */
    deleteBookingById(bookingId){
        return this.restClient.DELETE(this.relativeBasePath + "bookings/" + bookingId);
    }   

    /**
     * Verify if Booking exists by Id
     * @param {*} bookingId 
     */
    verifyIfBookingExistById(bookingId){
        return this.restClient.GET( this.relativeBasePath + "bookings/exists/" + bookingId);
    }

    /**
     * Get all booking for a userId
     * @param {*} userId 
     */
    getAllBookingByUserid(userId){
        return this.restClient.GET( this.relativeBasePath + "bookings/ history?iduser="+ bookingId);       
    }
}