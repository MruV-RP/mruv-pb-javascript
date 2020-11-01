# MruV API Node.JS javascript/typescript package

This repository contains code generated from https://github.com/MruV-RP/mruv-protos protobuf files.

## How to use this repository?
This repository is a npm package, so if you want to use MruV API in your Node.JS project, you should add this module to your npm project as a dependency by using this command in project root directory:
```
$ npm i mruv-pb-node
```

## Example code
This example will connect to MruV API on address 127.0.0.1:50051 and will run remote procedure IsAccountExist
```js
const messages = require('mruv-pb-node/accounts/accounts_pb');
const services = require('mruv-pb-node/accounts/accounts_grpc_pb');

const grpc = require('grpc');

// Set up a connection to the MruV API server.
const client = new services.MruVAccountsServiceClient('127.0.0.1:3001',
    grpc.credentials.createInsecure());

// Send gRPC request and print out its response.
const request = new messages.IsAccountExistRequest();
request.setLogin("Account login")
client.isAccountExist(request, function(err, response) {
    if(err !== null) {
        console.log(err)
        return
    }

    if(response.getExists()) {
        console.log("Account exists :)")
    } else {
        console.log("There is no such account :(")
    }
});
```
