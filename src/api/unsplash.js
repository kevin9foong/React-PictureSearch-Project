import axios from 'axios'; 

export default axios.create(
    {
        baseURL : 'https://api.unsplash.com',
        headers : {Authorization: 
            'Client-ID 0fe802be8e253ebb62fbe592a838e6f02c7f966f039e8ad9fdff1b2480e08548'}
    });