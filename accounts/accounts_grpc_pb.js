// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var accounts_accounts_pb = require('../accounts/accounts_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_mruv_GetAccountCharactersRequest(arg) {
  if (!(arg instanceof accounts_accounts_pb.GetAccountCharactersRequest)) {
    throw new Error('Expected argument of type mruv.GetAccountCharactersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetAccountCharactersRequest(buffer_arg) {
  return accounts_accounts_pb.GetAccountCharactersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetAccountCharactersResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.GetAccountCharactersResponse)) {
    throw new Error('Expected argument of type mruv.GetAccountCharactersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetAccountCharactersResponse(buffer_arg) {
  return accounts_accounts_pb.GetAccountCharactersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetAccountRequest(arg) {
  if (!(arg instanceof accounts_accounts_pb.GetAccountRequest)) {
    throw new Error('Expected argument of type mruv.GetAccountRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetAccountRequest(buffer_arg) {
  return accounts_accounts_pb.GetAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_GetAccountResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.GetAccountResponse)) {
    throw new Error('Expected argument of type mruv.GetAccountResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_GetAccountResponse(buffer_arg) {
  return accounts_accounts_pb.GetAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_IsAccountExistRequest(arg) {
  if (!(arg instanceof accounts_accounts_pb.IsAccountExistRequest)) {
    throw new Error('Expected argument of type mruv.IsAccountExistRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_IsAccountExistRequest(buffer_arg) {
  return accounts_accounts_pb.IsAccountExistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_IsAccountExistResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.IsAccountExistResponse)) {
    throw new Error('Expected argument of type mruv.IsAccountExistResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_IsAccountExistResponse(buffer_arg) {
  return accounts_accounts_pb.IsAccountExistResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_LogInRequest(arg) {
  if (!(arg instanceof accounts_accounts_pb.LogInRequest)) {
    throw new Error('Expected argument of type mruv.LogInRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_LogInRequest(buffer_arg) {
  return accounts_accounts_pb.LogInRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_LogInResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.LogInResponse)) {
    throw new Error('Expected argument of type mruv.LogInResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_LogInResponse(buffer_arg) {
  return accounts_accounts_pb.LogInResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_RegisterAccountRequest(arg) {
  if (!(arg instanceof accounts_accounts_pb.RegisterAccountRequest)) {
    throw new Error('Expected argument of type mruv.RegisterAccountRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_RegisterAccountRequest(buffer_arg) {
  return accounts_accounts_pb.RegisterAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_RegisterAccountResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.RegisterAccountResponse)) {
    throw new Error('Expected argument of type mruv.RegisterAccountResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_RegisterAccountResponse(buffer_arg) {
  return accounts_accounts_pb.RegisterAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV accounts service provides procedures for managing players accounts.
// This service is an additional/intermediary service between the ORY Kratos & ORY Hydra service.
var MruVAccountsServiceService = exports.MruVAccountsServiceService = {
  // Register a new account.
  registerAccount: {
    path: '/mruv.MruVAccountsService/RegisterAccount',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.RegisterAccountRequest,
    responseType: accounts_accounts_pb.RegisterAccountResponse,
    requestSerialize: serialize_mruv_RegisterAccountRequest,
    requestDeserialize: deserialize_mruv_RegisterAccountRequest,
    responseSerialize: serialize_mruv_RegisterAccountResponse,
    responseDeserialize: deserialize_mruv_RegisterAccountResponse,
  },
  // Sign into an existing account.
  logIn: {
    path: '/mruv.MruVAccountsService/LogIn',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.LogInRequest,
    responseType: accounts_accounts_pb.LogInResponse,
    requestSerialize: serialize_mruv_LogInRequest,
    requestDeserialize: deserialize_mruv_LogInRequest,
    responseSerialize: serialize_mruv_LogInResponse,
    responseDeserialize: deserialize_mruv_LogInResponse,
  },
  // Check, is account with specified login exist. If yes, it returns account id.
  isAccountExist: {
    path: '/mruv.MruVAccountsService/IsAccountExist',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.IsAccountExistRequest,
    responseType: accounts_accounts_pb.IsAccountExistResponse,
    requestSerialize: serialize_mruv_IsAccountExistRequest,
    requestDeserialize: deserialize_mruv_IsAccountExistRequest,
    responseSerialize: serialize_mruv_IsAccountExistResponse,
    responseDeserialize: deserialize_mruv_IsAccountExistResponse,
  },
  // Get an account.
  getAccount: {
    path: '/mruv.MruVAccountsService/GetAccount',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.GetAccountRequest,
    responseType: accounts_accounts_pb.GetAccountResponse,
    requestSerialize: serialize_mruv_GetAccountRequest,
    requestDeserialize: deserialize_mruv_GetAccountRequest,
    responseSerialize: serialize_mruv_GetAccountResponse,
    responseDeserialize: deserialize_mruv_GetAccountResponse,
  },
  // Get an account characters.
  getAccountCharacters: {
    path: '/mruv.MruVAccountsService/GetAccountCharacters',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.GetAccountCharactersRequest,
    responseType: accounts_accounts_pb.GetAccountCharactersResponse,
    requestSerialize: serialize_mruv_GetAccountCharactersRequest,
    requestDeserialize: deserialize_mruv_GetAccountCharactersRequest,
    responseSerialize: serialize_mruv_GetAccountCharactersResponse,
    responseDeserialize: deserialize_mruv_GetAccountCharactersResponse,
  },
};

exports.MruVAccountsServiceClient = grpc.makeGenericClientConstructor(MruVAccountsServiceService);
