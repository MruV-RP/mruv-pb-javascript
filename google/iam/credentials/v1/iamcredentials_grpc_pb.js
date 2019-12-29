// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
'use strict';
var grpc = require('grpc');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_iam_credentials_v1_common_pb = require('../../../../google/iam/credentials/v1/common_pb.js');

function serialize_google_iam_credentials_v1_GenerateAccessTokenRequest(arg) {
  if (!(arg instanceof google_iam_credentials_v1_common_pb.GenerateAccessTokenRequest)) {
    throw new Error('Expected argument of type google.iam.credentials.v1.GenerateAccessTokenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_credentials_v1_GenerateAccessTokenRequest(buffer_arg) {
  return google_iam_credentials_v1_common_pb.GenerateAccessTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_credentials_v1_GenerateAccessTokenResponse(arg) {
  if (!(arg instanceof google_iam_credentials_v1_common_pb.GenerateAccessTokenResponse)) {
    throw new Error('Expected argument of type google.iam.credentials.v1.GenerateAccessTokenResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_credentials_v1_GenerateAccessTokenResponse(buffer_arg) {
  return google_iam_credentials_v1_common_pb.GenerateAccessTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_credentials_v1_GenerateIdTokenRequest(arg) {
  if (!(arg instanceof google_iam_credentials_v1_common_pb.GenerateIdTokenRequest)) {
    throw new Error('Expected argument of type google.iam.credentials.v1.GenerateIdTokenRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_credentials_v1_GenerateIdTokenRequest(buffer_arg) {
  return google_iam_credentials_v1_common_pb.GenerateIdTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_credentials_v1_GenerateIdTokenResponse(arg) {
  if (!(arg instanceof google_iam_credentials_v1_common_pb.GenerateIdTokenResponse)) {
    throw new Error('Expected argument of type google.iam.credentials.v1.GenerateIdTokenResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_credentials_v1_GenerateIdTokenResponse(buffer_arg) {
  return google_iam_credentials_v1_common_pb.GenerateIdTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_credentials_v1_SignBlobRequest(arg) {
  if (!(arg instanceof google_iam_credentials_v1_common_pb.SignBlobRequest)) {
    throw new Error('Expected argument of type google.iam.credentials.v1.SignBlobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_credentials_v1_SignBlobRequest(buffer_arg) {
  return google_iam_credentials_v1_common_pb.SignBlobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_credentials_v1_SignBlobResponse(arg) {
  if (!(arg instanceof google_iam_credentials_v1_common_pb.SignBlobResponse)) {
    throw new Error('Expected argument of type google.iam.credentials.v1.SignBlobResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_credentials_v1_SignBlobResponse(buffer_arg) {
  return google_iam_credentials_v1_common_pb.SignBlobResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_credentials_v1_SignJwtRequest(arg) {
  if (!(arg instanceof google_iam_credentials_v1_common_pb.SignJwtRequest)) {
    throw new Error('Expected argument of type google.iam.credentials.v1.SignJwtRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_credentials_v1_SignJwtRequest(buffer_arg) {
  return google_iam_credentials_v1_common_pb.SignJwtRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_iam_credentials_v1_SignJwtResponse(arg) {
  if (!(arg instanceof google_iam_credentials_v1_common_pb.SignJwtResponse)) {
    throw new Error('Expected argument of type google.iam.credentials.v1.SignJwtResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_iam_credentials_v1_SignJwtResponse(buffer_arg) {
  return google_iam_credentials_v1_common_pb.SignJwtResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// A service account is a special type of Google account that belongs to your
// application or a virtual machine (VM), instead of to an individual end user.
// Your application assumes the identity of the service account to call Google
// APIs, so that the users aren't directly involved.
//
// Service account credentials are used to temporarily assume the identity
// of the service account. Supported credential types include OAuth 2.0 access
// tokens, OpenID Connect ID tokens, self-signed JSON Web Tokens (JWTs), and
// more.
var IAMCredentialsService = exports.IAMCredentialsService = {
  // Generates an OAuth 2.0 access token for a service account.
  generateAccessToken: {
    path: '/google.iam.credentials.v1.IAMCredentials/GenerateAccessToken',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_credentials_v1_common_pb.GenerateAccessTokenRequest,
    responseType: google_iam_credentials_v1_common_pb.GenerateAccessTokenResponse,
    requestSerialize: serialize_google_iam_credentials_v1_GenerateAccessTokenRequest,
    requestDeserialize: deserialize_google_iam_credentials_v1_GenerateAccessTokenRequest,
    responseSerialize: serialize_google_iam_credentials_v1_GenerateAccessTokenResponse,
    responseDeserialize: deserialize_google_iam_credentials_v1_GenerateAccessTokenResponse,
  },
  // Generates an OpenID Connect ID token for a service account.
  generateIdToken: {
    path: '/google.iam.credentials.v1.IAMCredentials/GenerateIdToken',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_credentials_v1_common_pb.GenerateIdTokenRequest,
    responseType: google_iam_credentials_v1_common_pb.GenerateIdTokenResponse,
    requestSerialize: serialize_google_iam_credentials_v1_GenerateIdTokenRequest,
    requestDeserialize: deserialize_google_iam_credentials_v1_GenerateIdTokenRequest,
    responseSerialize: serialize_google_iam_credentials_v1_GenerateIdTokenResponse,
    responseDeserialize: deserialize_google_iam_credentials_v1_GenerateIdTokenResponse,
  },
  // Signs a blob using a service account's system-managed private key.
  signBlob: {
    path: '/google.iam.credentials.v1.IAMCredentials/SignBlob',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_credentials_v1_common_pb.SignBlobRequest,
    responseType: google_iam_credentials_v1_common_pb.SignBlobResponse,
    requestSerialize: serialize_google_iam_credentials_v1_SignBlobRequest,
    requestDeserialize: deserialize_google_iam_credentials_v1_SignBlobRequest,
    responseSerialize: serialize_google_iam_credentials_v1_SignBlobResponse,
    responseDeserialize: deserialize_google_iam_credentials_v1_SignBlobResponse,
  },
  // Signs a JWT using a service account's system-managed private key.
  signJwt: {
    path: '/google.iam.credentials.v1.IAMCredentials/SignJwt',
    requestStream: false,
    responseStream: false,
    requestType: google_iam_credentials_v1_common_pb.SignJwtRequest,
    responseType: google_iam_credentials_v1_common_pb.SignJwtResponse,
    requestSerialize: serialize_google_iam_credentials_v1_SignJwtRequest,
    requestDeserialize: deserialize_google_iam_credentials_v1_SignJwtRequest,
    responseSerialize: serialize_google_iam_credentials_v1_SignJwtResponse,
    responseDeserialize: deserialize_google_iam_credentials_v1_SignJwtResponse,
  },
};

exports.IAMCredentialsClient = grpc.makeGenericClientConstructor(IAMCredentialsService);
