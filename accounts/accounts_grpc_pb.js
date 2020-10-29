// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var accounts_accounts_pb = require('../accounts/accounts_pb.js');
var google_api_annotations_pb = require('../google/api/annotations_pb.js');

function serialize_mruv_accounts_GetAccountCharactersRequest(arg) {
  if (!(arg instanceof accounts_accounts_pb.GetAccountCharactersRequest)) {
    throw new Error('Expected argument of type mruv.accounts.GetAccountCharactersRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_accounts_GetAccountCharactersRequest(buffer_arg) {
  return accounts_accounts_pb.GetAccountCharactersRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_accounts_GetAccountCharactersResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.GetAccountCharactersResponse)) {
    throw new Error('Expected argument of type mruv.accounts.GetAccountCharactersResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_accounts_GetAccountCharactersResponse(buffer_arg) {
  return accounts_accounts_pb.GetAccountCharactersResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_accounts_GetAccountRequest(arg) {
  if (!(arg instanceof accounts_accounts_pb.GetAccountRequest)) {
    throw new Error('Expected argument of type mruv.accounts.GetAccountRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_accounts_GetAccountRequest(buffer_arg) {
  return accounts_accounts_pb.GetAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_accounts_GetAccountResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.GetAccountResponse)) {
    throw new Error('Expected argument of type mruv.accounts.GetAccountResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_accounts_GetAccountResponse(buffer_arg) {
  return accounts_accounts_pb.GetAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_accounts_IsAccountExistRequest(arg) {
  if (!(arg instanceof accounts_accounts_pb.IsAccountExistRequest)) {
    throw new Error('Expected argument of type mruv.accounts.IsAccountExistRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_accounts_IsAccountExistRequest(buffer_arg) {
  return accounts_accounts_pb.IsAccountExistRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_accounts_IsAccountExistResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.IsAccountExistResponse)) {
    throw new Error('Expected argument of type mruv.accounts.IsAccountExistResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_accounts_IsAccountExistResponse(buffer_arg) {
  return accounts_accounts_pb.IsAccountExistResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_accounts_LogInRequest(arg) {
  if (!(arg instanceof accounts_accounts_pb.LogInRequest)) {
    throw new Error('Expected argument of type mruv.accounts.LogInRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_accounts_LogInRequest(buffer_arg) {
  return accounts_accounts_pb.LogInRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_accounts_LogInResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.LogInResponse)) {
    throw new Error('Expected argument of type mruv.accounts.LogInResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_accounts_LogInResponse(buffer_arg) {
  return accounts_accounts_pb.LogInResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_accounts_RegisterAccountRequest(arg) {
  if (!(arg instanceof accounts_accounts_pb.RegisterAccountRequest)) {
    throw new Error('Expected argument of type mruv.accounts.RegisterAccountRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_accounts_RegisterAccountRequest(buffer_arg) {
  return accounts_accounts_pb.RegisterAccountRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_mruv_accounts_RegisterAccountResponse(arg) {
  if (!(arg instanceof accounts_accounts_pb.RegisterAccountResponse)) {
    throw new Error('Expected argument of type mruv.accounts.RegisterAccountResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_mruv_accounts_RegisterAccountResponse(buffer_arg) {
  return accounts_accounts_pb.RegisterAccountResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// The MruV accounts service provides procedures for managing players accounts.
// This service is an additional/intermediary service between the ORY Kratos & ORY Hydra service.
var MruVAccountsServiceService = exports.MruVAccountsServiceService = {
  // Register a new account.
  registerAccount: {
    path: '/mruv.accounts.MruVAccountsService/RegisterAccount',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.RegisterAccountRequest,
    responseType: accounts_accounts_pb.RegisterAccountResponse,
    requestSerialize: serialize_mruv_accounts_RegisterAccountRequest,
    requestDeserialize: deserialize_mruv_accounts_RegisterAccountRequest,
    responseSerialize: serialize_mruv_accounts_RegisterAccountResponse,
    responseDeserialize: deserialize_mruv_accounts_RegisterAccountResponse,
  },
  // Sign into an existing account.
  logIn: {
    path: '/mruv.accounts.MruVAccountsService/LogIn',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.LogInRequest,
    responseType: accounts_accounts_pb.LogInResponse,
    requestSerialize: serialize_mruv_accounts_LogInRequest,
    requestDeserialize: deserialize_mruv_accounts_LogInRequest,
    responseSerialize: serialize_mruv_accounts_LogInResponse,
    responseDeserialize: deserialize_mruv_accounts_LogInResponse,
  },
  // Check, is account with specified login exist. If yes, it returns account id.
  isAccountExist: {
    path: '/mruv.accounts.MruVAccountsService/IsAccountExist',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.IsAccountExistRequest,
    responseType: accounts_accounts_pb.IsAccountExistResponse,
    requestSerialize: serialize_mruv_accounts_IsAccountExistRequest,
    requestDeserialize: deserialize_mruv_accounts_IsAccountExistRequest,
    responseSerialize: serialize_mruv_accounts_IsAccountExistResponse,
    responseDeserialize: deserialize_mruv_accounts_IsAccountExistResponse,
  },
  // Get an account.
  getAccount: {
    path: '/mruv.accounts.MruVAccountsService/GetAccount',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.GetAccountRequest,
    responseType: accounts_accounts_pb.GetAccountResponse,
    requestSerialize: serialize_mruv_accounts_GetAccountRequest,
    requestDeserialize: deserialize_mruv_accounts_GetAccountRequest,
    responseSerialize: serialize_mruv_accounts_GetAccountResponse,
    responseDeserialize: deserialize_mruv_accounts_GetAccountResponse,
  },
  // Get an account characters.
  getAccountCharacters: {
    path: '/mruv.accounts.MruVAccountsService/GetAccountCharacters',
    requestStream: false,
    responseStream: false,
    requestType: accounts_accounts_pb.GetAccountCharactersRequest,
    responseType: accounts_accounts_pb.GetAccountCharactersResponse,
    requestSerialize: serialize_mruv_accounts_GetAccountCharactersRequest,
    requestDeserialize: deserialize_mruv_accounts_GetAccountCharactersRequest,
    responseSerialize: serialize_mruv_accounts_GetAccountCharactersResponse,
    responseDeserialize: deserialize_mruv_accounts_GetAccountCharactersResponse,
  },
};

exports.MruVAccountsServiceClient = grpc.makeGenericClientConstructor(MruVAccountsServiceService);
