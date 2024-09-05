## FRONTEND - MIDDLE-END - BACKEND

  - We need an intermediate layer between the client side and the microservices
  - Using this middle end, when client sends request we will be able to make decision that which microservice should actually respond to this request
  - We can do message validation, response transformation, rate limiting
  - We try to prepare an API Gateway that acts as this middle end.

  ## Different MicroServices:
  - Search and Flight Services: https://github.com/Key-runnnnnnn/Flights-and-Search-service.git
  - Authentication Service (JWT): https://github.com/Key-runnnnnnn/Auth_Service.git
  - Flights Booking Service: https://github.com/Key-runnnnnnn/Flight-Booking-Services.git
  - Reminder Service: https://github.com/Key-runnnnnnn/Remainder-Service.git
  - API Gateway: https://github.com/Key-runnnnnnn/Flights-Api-Gateway.git
  - API of API_Gateway/home:  {Current ShutDown in AWS}.
  - AutoScaling AWS Shell Script: