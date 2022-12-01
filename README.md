# asl-stub

## About

Stub microservice for recording/listing requests and providing access to query notifications table

## Usage

### To run a local instance:

```
npm run dev
```

### Query the requests made to the service
```
curl -X GET http://localhost:8084/requests
```
### Clear the requests log
```
curl -X GET http://localhost:8084/flush
```

### Query the notifications table
Querying notifications `to` field with value `test@example.com` 
```
curl -X GET "http://localhost:8084/notifications?field=to&value=test@example.com"
```

Querying notifications `identifier` field with mutliple values `9e272e2b-7995-4b00-96b4-e5b61d890146` or `f09039ed-242a-4ebb-8af1-f7b0fdac4156`
```
curl -X GET "http://localhost:8084/notifications?field=identifier&value=9e272e2b-7995-4b00-96b4-e5b61d890146&value=f09039ed-242a-4ebb-8af1-f7b0fdac4156"
```
