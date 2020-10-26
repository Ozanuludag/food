import axios from 'axios';

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 5Rp2n-C3_YmqVJsrNX9RjWkvUKUEh8iUbMb0hCLV4wJTu64kAd0Vat8ekJlSL0GY2Rk3_TBPldUcQBpkupAe2kZgduONdXVmyfL0tj2gWkvS6We7uDnYTOTdihqTX3Yx'
    }
});