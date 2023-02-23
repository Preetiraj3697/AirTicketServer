# Air Ticket Booking Api
# REGISTER USER / POST
```Javascript
https://magnificent-sweatpants-elk.cyclic.app/api/auth/register
```
```JSON
{
    "name":"Test",
    "email":"test@gmail.com",
    "password":"test12"
}
```
# LOGIN USER / POST
```Javascript
https://magnificent-sweatpants-elk.cyclic.app/api/auth/login
```
```JSON
{
    "email":"test@gmail.com",
    "password":"test12"
}
```
# CREATE Flights / POST
```Javascript
https://magnificent-sweatpants-elk.cyclic.app/api/flights
```
```JSON
{
    "airline": "AirIndia",
    "flightNo": "AIR3046",
    "departure": "Delhi",
    "arrival": "Kashmir",
    "departureTime": "22-03-23",
    "arrivalTime": "23-03-23",
    "seats": 54,
    "price": 9999
}
```
# GET Flights
```Javascript
https://magnificent-sweatpants-elk.cyclic.app/api/flights
```
```JSON
[
  {
    "_id": "63f7141aad08c943e0b1e93b",
    "airline": "AirIndia",
    "flightNo": "AIR3046",
    "departure": "Delhi",
    "arrival": "Kashmir",
    "departureTime": "22-03-23",
    "arrivalTime": "23-03-23",
    "seats": 54,
    "price": 9999,
    "createdAt": "2023-02-23T07:22:02.359Z",
    "updatedAt": "2023-02-23T07:40:40.467Z",
    "__v": 0
  },
  {
    "_id": "63f7177091e162b0ed1dae10",
    "airline": "Picaso",
    "flightNo": "AIR785",
    "departure": "Kochi",
    "arrival": "Haryana",
    "departureTime": "12-05-23",
    "arrivalTime": "13-05-23",
    "seats": 44,
    "price": 1999,
    "createdAt": "2023-02-23T07:36:16.348Z",
    "updatedAt": "2023-02-23T07:36:16.348Z",
    "__v": 0
  },
  {
    "_id": "63f72be9168fee9318df7f2e",
    "airline": "PreetiAirLine",
    "flightNo": "AIR78555",
    "departure": "Patna",
    "arrival": "Mumbai",
    "departureTime": "22-09-23",
    "arrivalTime": "23-09-23",
    "seats": 94,
    "price": 2999,
    "createdAt": "2023-02-23T09:03:37.158Z",
    "updatedAt": "2023-02-23T09:04:06.902Z",
    "__v": 0
  }
]
```
# GET Flight By ID
```Javascript
https://magnificent-sweatpants-elk.cyclic.app/api/flights/63f7141aad08c943e0b1e93b
```
```JSON
{
"_id": "63f7141aad08c943e0b1e93b",
"airline": "AirIndia",
"flightNo": "AIR3046",
"departure": "Delhi",
"arrival": "Kashmir",
"departureTime": "22-03-23",
"arrivalTime": "23-03-23",
"seats": 54,
"price": 9999,
"createdAt": "2023-02-23T07:22:02.359Z",
"updatedAt": "2023-02-23T07:40:40.467Z",
"__v": 0
}
```

# PUT Flight By ID
```Javascript
https://magnificent-sweatpants-elk.cyclic.app/api/flights/63f7141aad08c943e0b1e93b
```
# DELETE Flight By ID
```Javascript
https://magnificent-sweatpants-elk.cyclic.app/api/flights/63f7141aad08c943e0b1e93b
```
# CREATE BOOOKING / POST
```Javascript
https://magnificent-sweatpants-elk.cyclic.app/api/bookings
```
# GET DASHBOARD OF USER BOOKINGS
```Javascript
https://magnificent-sweatpants-elk.cyclic.app/dashboard
```
```Json
[
  {
    "_id": "63f72adfc984e653cc1a8378",
    "user": "63f71ac1ff7d2c931a115f22",
    "flight": "63f7177091e162b0ed1dae10"
  },
  {
    "_id": "63f72c5b168fee9318df7f36",
    "user": "63f71ac1ff7d2c931a115f22",
    "flight": "63f72be9168fee9318df7f2e"
  },
  {
    "_id": "63f731c5078f64269a610fe8",
    "user": "63f730c3078f64269a610fd9",
    "flight": "63f72be9168fee9318df7f2e"
  }
]
```
