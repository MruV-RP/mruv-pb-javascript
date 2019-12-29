// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright 2019 Google LLC.
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
//
'use strict';
var grpc = require('grpc');
var google_cloud_kms_v1_service_pb = require('../../../../google/cloud/kms/v1/service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_cloud_kms_v1_resources_pb = require('../../../../google/cloud/kms/v1/resources_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');

function serialize_google_cloud_kms_v1_AsymmetricDecryptRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.AsymmetricDecryptRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.AsymmetricDecryptRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_AsymmetricDecryptRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.AsymmetricDecryptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_AsymmetricDecryptResponse(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.AsymmetricDecryptResponse)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.AsymmetricDecryptResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_AsymmetricDecryptResponse(buffer_arg) {
  return google_cloud_kms_v1_service_pb.AsymmetricDecryptResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_AsymmetricSignRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.AsymmetricSignRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.AsymmetricSignRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_AsymmetricSignRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.AsymmetricSignRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_AsymmetricSignResponse(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.AsymmetricSignResponse)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.AsymmetricSignResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_AsymmetricSignResponse(buffer_arg) {
  return google_cloud_kms_v1_service_pb.AsymmetricSignResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_CreateCryptoKeyRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.CreateCryptoKeyRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.CreateCryptoKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_CreateCryptoKeyRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.CreateCryptoKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_CreateCryptoKeyVersionRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.CreateCryptoKeyVersionRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.CreateCryptoKeyVersionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_CreateCryptoKeyVersionRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.CreateCryptoKeyVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_CreateImportJobRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.CreateImportJobRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.CreateImportJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_CreateImportJobRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.CreateImportJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_CreateKeyRingRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.CreateKeyRingRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.CreateKeyRingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_CreateKeyRingRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.CreateKeyRingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_CryptoKey(arg) {
  if (!(arg instanceof google_cloud_kms_v1_resources_pb.CryptoKey)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.CryptoKey');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_CryptoKey(buffer_arg) {
  return google_cloud_kms_v1_resources_pb.CryptoKey.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_CryptoKeyVersion(arg) {
  if (!(arg instanceof google_cloud_kms_v1_resources_pb.CryptoKeyVersion)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.CryptoKeyVersion');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_CryptoKeyVersion(buffer_arg) {
  return google_cloud_kms_v1_resources_pb.CryptoKeyVersion.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_DecryptRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.DecryptRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.DecryptRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_DecryptRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.DecryptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_DecryptResponse(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.DecryptResponse)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.DecryptResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_DecryptResponse(buffer_arg) {
  return google_cloud_kms_v1_service_pb.DecryptResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_DestroyCryptoKeyVersionRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.DestroyCryptoKeyVersionRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.DestroyCryptoKeyVersionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_DestroyCryptoKeyVersionRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.DestroyCryptoKeyVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_EncryptRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.EncryptRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.EncryptRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_EncryptRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.EncryptRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_EncryptResponse(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.EncryptResponse)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.EncryptResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_EncryptResponse(buffer_arg) {
  return google_cloud_kms_v1_service_pb.EncryptResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_GetCryptoKeyRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.GetCryptoKeyRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.GetCryptoKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_GetCryptoKeyRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.GetCryptoKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_GetCryptoKeyVersionRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.GetCryptoKeyVersionRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.GetCryptoKeyVersionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_GetCryptoKeyVersionRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.GetCryptoKeyVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_GetImportJobRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.GetImportJobRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.GetImportJobRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_GetImportJobRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.GetImportJobRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_GetKeyRingRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.GetKeyRingRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.GetKeyRingRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_GetKeyRingRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.GetKeyRingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_GetPublicKeyRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.GetPublicKeyRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.GetPublicKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_GetPublicKeyRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.GetPublicKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_ImportCryptoKeyVersionRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.ImportCryptoKeyVersionRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.ImportCryptoKeyVersionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_ImportCryptoKeyVersionRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.ImportCryptoKeyVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_ImportJob(arg) {
  if (!(arg instanceof google_cloud_kms_v1_resources_pb.ImportJob)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.ImportJob');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_ImportJob(buffer_arg) {
  return google_cloud_kms_v1_resources_pb.ImportJob.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_KeyRing(arg) {
  if (!(arg instanceof google_cloud_kms_v1_resources_pb.KeyRing)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.KeyRing');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_KeyRing(buffer_arg) {
  return google_cloud_kms_v1_resources_pb.KeyRing.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_ListCryptoKeyVersionsRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.ListCryptoKeyVersionsRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.ListCryptoKeyVersionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_ListCryptoKeyVersionsRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.ListCryptoKeyVersionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_ListCryptoKeyVersionsResponse(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.ListCryptoKeyVersionsResponse)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.ListCryptoKeyVersionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_ListCryptoKeyVersionsResponse(buffer_arg) {
  return google_cloud_kms_v1_service_pb.ListCryptoKeyVersionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_ListCryptoKeysRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.ListCryptoKeysRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.ListCryptoKeysRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_ListCryptoKeysRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.ListCryptoKeysRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_ListCryptoKeysResponse(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.ListCryptoKeysResponse)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.ListCryptoKeysResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_ListCryptoKeysResponse(buffer_arg) {
  return google_cloud_kms_v1_service_pb.ListCryptoKeysResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_ListImportJobsRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.ListImportJobsRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.ListImportJobsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_ListImportJobsRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.ListImportJobsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_ListImportJobsResponse(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.ListImportJobsResponse)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.ListImportJobsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_ListImportJobsResponse(buffer_arg) {
  return google_cloud_kms_v1_service_pb.ListImportJobsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_ListKeyRingsRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.ListKeyRingsRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.ListKeyRingsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_ListKeyRingsRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.ListKeyRingsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_ListKeyRingsResponse(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.ListKeyRingsResponse)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.ListKeyRingsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_ListKeyRingsResponse(buffer_arg) {
  return google_cloud_kms_v1_service_pb.ListKeyRingsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_PublicKey(arg) {
  if (!(arg instanceof google_cloud_kms_v1_resources_pb.PublicKey)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.PublicKey');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_PublicKey(buffer_arg) {
  return google_cloud_kms_v1_resources_pb.PublicKey.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_RestoreCryptoKeyVersionRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.RestoreCryptoKeyVersionRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.RestoreCryptoKeyVersionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_RestoreCryptoKeyVersionRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.RestoreCryptoKeyVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_UpdateCryptoKeyPrimaryVersionRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.UpdateCryptoKeyPrimaryVersionRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.UpdateCryptoKeyPrimaryVersionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_UpdateCryptoKeyPrimaryVersionRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.UpdateCryptoKeyPrimaryVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_UpdateCryptoKeyRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.UpdateCryptoKeyRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.UpdateCryptoKeyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_UpdateCryptoKeyRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.UpdateCryptoKeyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_kms_v1_UpdateCryptoKeyVersionRequest(arg) {
  if (!(arg instanceof google_cloud_kms_v1_service_pb.UpdateCryptoKeyVersionRequest)) {
    throw new Error('Expected argument of type google.cloud.kms.v1.UpdateCryptoKeyVersionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_kms_v1_UpdateCryptoKeyVersionRequest(buffer_arg) {
  return google_cloud_kms_v1_service_pb.UpdateCryptoKeyVersionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


// Google Cloud Key Management Service
//
// Manages cryptographic keys and operations using those keys. Implements a REST
// model with the following objects:
//
// * [KeyRing][google.cloud.kms.v1.KeyRing]
// * [CryptoKey][google.cloud.kms.v1.CryptoKey]
// * [CryptoKeyVersion][google.cloud.kms.v1.CryptoKeyVersion]
//
// If you are using manual gRPC libraries, see
// [Using gRPC with Cloud KMS](https://cloud.google.com/kms/docs/grpc).
var KeyManagementServiceService = exports.KeyManagementServiceService = {
  // Lists [KeyRings][google.cloud.kms.v1.KeyRing].
  listKeyRings: {
    path: '/google.cloud.kms.v1.KeyManagementService/ListKeyRings',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.ListKeyRingsRequest,
    responseType: google_cloud_kms_v1_service_pb.ListKeyRingsResponse,
    requestSerialize: serialize_google_cloud_kms_v1_ListKeyRingsRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_ListKeyRingsRequest,
    responseSerialize: serialize_google_cloud_kms_v1_ListKeyRingsResponse,
    responseDeserialize: deserialize_google_cloud_kms_v1_ListKeyRingsResponse,
  },
  // Lists [CryptoKeys][google.cloud.kms.v1.CryptoKey].
  listCryptoKeys: {
    path: '/google.cloud.kms.v1.KeyManagementService/ListCryptoKeys',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.ListCryptoKeysRequest,
    responseType: google_cloud_kms_v1_service_pb.ListCryptoKeysResponse,
    requestSerialize: serialize_google_cloud_kms_v1_ListCryptoKeysRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_ListCryptoKeysRequest,
    responseSerialize: serialize_google_cloud_kms_v1_ListCryptoKeysResponse,
    responseDeserialize: deserialize_google_cloud_kms_v1_ListCryptoKeysResponse,
  },
  // Lists [CryptoKeyVersions][google.cloud.kms.v1.CryptoKeyVersion].
  listCryptoKeyVersions: {
    path: '/google.cloud.kms.v1.KeyManagementService/ListCryptoKeyVersions',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.ListCryptoKeyVersionsRequest,
    responseType: google_cloud_kms_v1_service_pb.ListCryptoKeyVersionsResponse,
    requestSerialize: serialize_google_cloud_kms_v1_ListCryptoKeyVersionsRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_ListCryptoKeyVersionsRequest,
    responseSerialize: serialize_google_cloud_kms_v1_ListCryptoKeyVersionsResponse,
    responseDeserialize: deserialize_google_cloud_kms_v1_ListCryptoKeyVersionsResponse,
  },
  // Lists [ImportJobs][google.cloud.kms.v1.ImportJob].
  listImportJobs: {
    path: '/google.cloud.kms.v1.KeyManagementService/ListImportJobs',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.ListImportJobsRequest,
    responseType: google_cloud_kms_v1_service_pb.ListImportJobsResponse,
    requestSerialize: serialize_google_cloud_kms_v1_ListImportJobsRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_ListImportJobsRequest,
    responseSerialize: serialize_google_cloud_kms_v1_ListImportJobsResponse,
    responseDeserialize: deserialize_google_cloud_kms_v1_ListImportJobsResponse,
  },
  // Returns metadata for a given [KeyRing][google.cloud.kms.v1.KeyRing].
  getKeyRing: {
    path: '/google.cloud.kms.v1.KeyManagementService/GetKeyRing',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.GetKeyRingRequest,
    responseType: google_cloud_kms_v1_resources_pb.KeyRing,
    requestSerialize: serialize_google_cloud_kms_v1_GetKeyRingRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_GetKeyRingRequest,
    responseSerialize: serialize_google_cloud_kms_v1_KeyRing,
    responseDeserialize: deserialize_google_cloud_kms_v1_KeyRing,
  },
  // Returns metadata for a given [CryptoKey][google.cloud.kms.v1.CryptoKey], as well as its
  // [primary][google.cloud.kms.v1.CryptoKey.primary] [CryptoKeyVersion][google.cloud.kms.v1.CryptoKeyVersion].
  getCryptoKey: {
    path: '/google.cloud.kms.v1.KeyManagementService/GetCryptoKey',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.GetCryptoKeyRequest,
    responseType: google_cloud_kms_v1_resources_pb.CryptoKey,
    requestSerialize: serialize_google_cloud_kms_v1_GetCryptoKeyRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_GetCryptoKeyRequest,
    responseSerialize: serialize_google_cloud_kms_v1_CryptoKey,
    responseDeserialize: deserialize_google_cloud_kms_v1_CryptoKey,
  },
  // Returns metadata for a given [CryptoKeyVersion][google.cloud.kms.v1.CryptoKeyVersion].
  getCryptoKeyVersion: {
    path: '/google.cloud.kms.v1.KeyManagementService/GetCryptoKeyVersion',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.GetCryptoKeyVersionRequest,
    responseType: google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
    requestSerialize: serialize_google_cloud_kms_v1_GetCryptoKeyVersionRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_GetCryptoKeyVersionRequest,
    responseSerialize: serialize_google_cloud_kms_v1_CryptoKeyVersion,
    responseDeserialize: deserialize_google_cloud_kms_v1_CryptoKeyVersion,
  },
  // Returns the public key for the given [CryptoKeyVersion][google.cloud.kms.v1.CryptoKeyVersion]. The
  // [CryptoKey.purpose][google.cloud.kms.v1.CryptoKey.purpose] must be
  // [ASYMMETRIC_SIGN][google.cloud.kms.v1.CryptoKey.CryptoKeyPurpose.ASYMMETRIC_SIGN] or
  // [ASYMMETRIC_DECRYPT][google.cloud.kms.v1.CryptoKey.CryptoKeyPurpose.ASYMMETRIC_DECRYPT].
  getPublicKey: {
    path: '/google.cloud.kms.v1.KeyManagementService/GetPublicKey',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.GetPublicKeyRequest,
    responseType: google_cloud_kms_v1_resources_pb.PublicKey,
    requestSerialize: serialize_google_cloud_kms_v1_GetPublicKeyRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_GetPublicKeyRequest,
    responseSerialize: serialize_google_cloud_kms_v1_PublicKey,
    responseDeserialize: deserialize_google_cloud_kms_v1_PublicKey,
  },
  // Returns metadata for a given [ImportJob][google.cloud.kms.v1.ImportJob].
  getImportJob: {
    path: '/google.cloud.kms.v1.KeyManagementService/GetImportJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.GetImportJobRequest,
    responseType: google_cloud_kms_v1_resources_pb.ImportJob,
    requestSerialize: serialize_google_cloud_kms_v1_GetImportJobRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_GetImportJobRequest,
    responseSerialize: serialize_google_cloud_kms_v1_ImportJob,
    responseDeserialize: deserialize_google_cloud_kms_v1_ImportJob,
  },
  // Create a new [KeyRing][google.cloud.kms.v1.KeyRing] in a given Project and Location.
  createKeyRing: {
    path: '/google.cloud.kms.v1.KeyManagementService/CreateKeyRing',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.CreateKeyRingRequest,
    responseType: google_cloud_kms_v1_resources_pb.KeyRing,
    requestSerialize: serialize_google_cloud_kms_v1_CreateKeyRingRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_CreateKeyRingRequest,
    responseSerialize: serialize_google_cloud_kms_v1_KeyRing,
    responseDeserialize: deserialize_google_cloud_kms_v1_KeyRing,
  },
  // Create a new [CryptoKey][google.cloud.kms.v1.CryptoKey] within a [KeyRing][google.cloud.kms.v1.KeyRing].
  //
  // [CryptoKey.purpose][google.cloud.kms.v1.CryptoKey.purpose] and
  // [CryptoKey.version_template.algorithm][google.cloud.kms.v1.CryptoKeyVersionTemplate.algorithm]
  // are required.
  createCryptoKey: {
    path: '/google.cloud.kms.v1.KeyManagementService/CreateCryptoKey',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.CreateCryptoKeyRequest,
    responseType: google_cloud_kms_v1_resources_pb.CryptoKey,
    requestSerialize: serialize_google_cloud_kms_v1_CreateCryptoKeyRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_CreateCryptoKeyRequest,
    responseSerialize: serialize_google_cloud_kms_v1_CryptoKey,
    responseDeserialize: deserialize_google_cloud_kms_v1_CryptoKey,
  },
  // Create a new [CryptoKeyVersion][google.cloud.kms.v1.CryptoKeyVersion] in a [CryptoKey][google.cloud.kms.v1.CryptoKey].
  //
  // The server will assign the next sequential id. If unset,
  // [state][google.cloud.kms.v1.CryptoKeyVersion.state] will be set to
  // [ENABLED][google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionState.ENABLED].
  createCryptoKeyVersion: {
    path: '/google.cloud.kms.v1.KeyManagementService/CreateCryptoKeyVersion',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.CreateCryptoKeyVersionRequest,
    responseType: google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
    requestSerialize: serialize_google_cloud_kms_v1_CreateCryptoKeyVersionRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_CreateCryptoKeyVersionRequest,
    responseSerialize: serialize_google_cloud_kms_v1_CryptoKeyVersion,
    responseDeserialize: deserialize_google_cloud_kms_v1_CryptoKeyVersion,
  },
  // Imports a new [CryptoKeyVersion][google.cloud.kms.v1.CryptoKeyVersion] into an existing [CryptoKey][google.cloud.kms.v1.CryptoKey] using the
  // wrapped key material provided in the request.
  //
  // The version ID will be assigned the next sequential id within the
  // [CryptoKey][google.cloud.kms.v1.CryptoKey].
  importCryptoKeyVersion: {
    path: '/google.cloud.kms.v1.KeyManagementService/ImportCryptoKeyVersion',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.ImportCryptoKeyVersionRequest,
    responseType: google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
    requestSerialize: serialize_google_cloud_kms_v1_ImportCryptoKeyVersionRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_ImportCryptoKeyVersionRequest,
    responseSerialize: serialize_google_cloud_kms_v1_CryptoKeyVersion,
    responseDeserialize: deserialize_google_cloud_kms_v1_CryptoKeyVersion,
  },
  // Create a new [ImportJob][google.cloud.kms.v1.ImportJob] within a [KeyRing][google.cloud.kms.v1.KeyRing].
  //
  // [ImportJob.import_method][google.cloud.kms.v1.ImportJob.import_method] is required.
  createImportJob: {
    path: '/google.cloud.kms.v1.KeyManagementService/CreateImportJob',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.CreateImportJobRequest,
    responseType: google_cloud_kms_v1_resources_pb.ImportJob,
    requestSerialize: serialize_google_cloud_kms_v1_CreateImportJobRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_CreateImportJobRequest,
    responseSerialize: serialize_google_cloud_kms_v1_ImportJob,
    responseDeserialize: deserialize_google_cloud_kms_v1_ImportJob,
  },
  // Update a [CryptoKey][google.cloud.kms.v1.CryptoKey].
  updateCryptoKey: {
    path: '/google.cloud.kms.v1.KeyManagementService/UpdateCryptoKey',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.UpdateCryptoKeyRequest,
    responseType: google_cloud_kms_v1_resources_pb.CryptoKey,
    requestSerialize: serialize_google_cloud_kms_v1_UpdateCryptoKeyRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_UpdateCryptoKeyRequest,
    responseSerialize: serialize_google_cloud_kms_v1_CryptoKey,
    responseDeserialize: deserialize_google_cloud_kms_v1_CryptoKey,
  },
  // Update a [CryptoKeyVersion][google.cloud.kms.v1.CryptoKeyVersion]'s metadata.
  //
  // [state][google.cloud.kms.v1.CryptoKeyVersion.state] may be changed between
  // [ENABLED][google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionState.ENABLED] and
  // [DISABLED][google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionState.DISABLED] using this
  // method. See [DestroyCryptoKeyVersion][google.cloud.kms.v1.KeyManagementService.DestroyCryptoKeyVersion] and [RestoreCryptoKeyVersion][google.cloud.kms.v1.KeyManagementService.RestoreCryptoKeyVersion] to
  // move between other states.
  updateCryptoKeyVersion: {
    path: '/google.cloud.kms.v1.KeyManagementService/UpdateCryptoKeyVersion',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.UpdateCryptoKeyVersionRequest,
    responseType: google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
    requestSerialize: serialize_google_cloud_kms_v1_UpdateCryptoKeyVersionRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_UpdateCryptoKeyVersionRequest,
    responseSerialize: serialize_google_cloud_kms_v1_CryptoKeyVersion,
    responseDeserialize: deserialize_google_cloud_kms_v1_CryptoKeyVersion,
  },
  // Encrypts data, so that it can only be recovered by a call to [Decrypt][google.cloud.kms.v1.KeyManagementService.Decrypt].
  // The [CryptoKey.purpose][google.cloud.kms.v1.CryptoKey.purpose] must be
  // [ENCRYPT_DECRYPT][google.cloud.kms.v1.CryptoKey.CryptoKeyPurpose.ENCRYPT_DECRYPT].
  encrypt: {
    path: '/google.cloud.kms.v1.KeyManagementService/Encrypt',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.EncryptRequest,
    responseType: google_cloud_kms_v1_service_pb.EncryptResponse,
    requestSerialize: serialize_google_cloud_kms_v1_EncryptRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_EncryptRequest,
    responseSerialize: serialize_google_cloud_kms_v1_EncryptResponse,
    responseDeserialize: deserialize_google_cloud_kms_v1_EncryptResponse,
  },
  // Decrypts data that was protected by [Encrypt][google.cloud.kms.v1.KeyManagementService.Encrypt]. The [CryptoKey.purpose][google.cloud.kms.v1.CryptoKey.purpose]
  // must be [ENCRYPT_DECRYPT][google.cloud.kms.v1.CryptoKey.CryptoKeyPurpose.ENCRYPT_DECRYPT].
  decrypt: {
    path: '/google.cloud.kms.v1.KeyManagementService/Decrypt',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.DecryptRequest,
    responseType: google_cloud_kms_v1_service_pb.DecryptResponse,
    requestSerialize: serialize_google_cloud_kms_v1_DecryptRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_DecryptRequest,
    responseSerialize: serialize_google_cloud_kms_v1_DecryptResponse,
    responseDeserialize: deserialize_google_cloud_kms_v1_DecryptResponse,
  },
  // Signs data using a [CryptoKeyVersion][google.cloud.kms.v1.CryptoKeyVersion] with [CryptoKey.purpose][google.cloud.kms.v1.CryptoKey.purpose]
  // ASYMMETRIC_SIGN, producing a signature that can be verified with the public
  // key retrieved from [GetPublicKey][google.cloud.kms.v1.KeyManagementService.GetPublicKey].
  asymmetricSign: {
    path: '/google.cloud.kms.v1.KeyManagementService/AsymmetricSign',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.AsymmetricSignRequest,
    responseType: google_cloud_kms_v1_service_pb.AsymmetricSignResponse,
    requestSerialize: serialize_google_cloud_kms_v1_AsymmetricSignRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_AsymmetricSignRequest,
    responseSerialize: serialize_google_cloud_kms_v1_AsymmetricSignResponse,
    responseDeserialize: deserialize_google_cloud_kms_v1_AsymmetricSignResponse,
  },
  // Decrypts data that was encrypted with a public key retrieved from
  // [GetPublicKey][google.cloud.kms.v1.KeyManagementService.GetPublicKey] corresponding to a [CryptoKeyVersion][google.cloud.kms.v1.CryptoKeyVersion] with
  // [CryptoKey.purpose][google.cloud.kms.v1.CryptoKey.purpose] ASYMMETRIC_DECRYPT.
  asymmetricDecrypt: {
    path: '/google.cloud.kms.v1.KeyManagementService/AsymmetricDecrypt',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.AsymmetricDecryptRequest,
    responseType: google_cloud_kms_v1_service_pb.AsymmetricDecryptResponse,
    requestSerialize: serialize_google_cloud_kms_v1_AsymmetricDecryptRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_AsymmetricDecryptRequest,
    responseSerialize: serialize_google_cloud_kms_v1_AsymmetricDecryptResponse,
    responseDeserialize: deserialize_google_cloud_kms_v1_AsymmetricDecryptResponse,
  },
  // Update the version of a [CryptoKey][google.cloud.kms.v1.CryptoKey] that will be used in [Encrypt][google.cloud.kms.v1.KeyManagementService.Encrypt].
  //
  // Returns an error if called on an asymmetric key.
  updateCryptoKeyPrimaryVersion: {
    path: '/google.cloud.kms.v1.KeyManagementService/UpdateCryptoKeyPrimaryVersion',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.UpdateCryptoKeyPrimaryVersionRequest,
    responseType: google_cloud_kms_v1_resources_pb.CryptoKey,
    requestSerialize: serialize_google_cloud_kms_v1_UpdateCryptoKeyPrimaryVersionRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_UpdateCryptoKeyPrimaryVersionRequest,
    responseSerialize: serialize_google_cloud_kms_v1_CryptoKey,
    responseDeserialize: deserialize_google_cloud_kms_v1_CryptoKey,
  },
  // Schedule a [CryptoKeyVersion][google.cloud.kms.v1.CryptoKeyVersion] for destruction.
  //
  // Upon calling this method, [CryptoKeyVersion.state][google.cloud.kms.v1.CryptoKeyVersion.state] will be set to
  // [DESTROY_SCHEDULED][google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionState.DESTROY_SCHEDULED]
  // and [destroy_time][google.cloud.kms.v1.CryptoKeyVersion.destroy_time] will be set to a time 24
  // hours in the future, at which point the [state][google.cloud.kms.v1.CryptoKeyVersion.state]
  // will be changed to
  // [DESTROYED][google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionState.DESTROYED], and the key
  // material will be irrevocably destroyed.
  //
  // Before the [destroy_time][google.cloud.kms.v1.CryptoKeyVersion.destroy_time] is reached,
  // [RestoreCryptoKeyVersion][google.cloud.kms.v1.KeyManagementService.RestoreCryptoKeyVersion] may be called to reverse the process.
  destroyCryptoKeyVersion: {
    path: '/google.cloud.kms.v1.KeyManagementService/DestroyCryptoKeyVersion',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.DestroyCryptoKeyVersionRequest,
    responseType: google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
    requestSerialize: serialize_google_cloud_kms_v1_DestroyCryptoKeyVersionRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_DestroyCryptoKeyVersionRequest,
    responseSerialize: serialize_google_cloud_kms_v1_CryptoKeyVersion,
    responseDeserialize: deserialize_google_cloud_kms_v1_CryptoKeyVersion,
  },
  // Restore a [CryptoKeyVersion][google.cloud.kms.v1.CryptoKeyVersion] in the
  // [DESTROY_SCHEDULED][google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionState.DESTROY_SCHEDULED]
  // state.
  //
  // Upon restoration of the CryptoKeyVersion, [state][google.cloud.kms.v1.CryptoKeyVersion.state]
  // will be set to [DISABLED][google.cloud.kms.v1.CryptoKeyVersion.CryptoKeyVersionState.DISABLED],
  // and [destroy_time][google.cloud.kms.v1.CryptoKeyVersion.destroy_time] will be cleared.
  restoreCryptoKeyVersion: {
    path: '/google.cloud.kms.v1.KeyManagementService/RestoreCryptoKeyVersion',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_kms_v1_service_pb.RestoreCryptoKeyVersionRequest,
    responseType: google_cloud_kms_v1_resources_pb.CryptoKeyVersion,
    requestSerialize: serialize_google_cloud_kms_v1_RestoreCryptoKeyVersionRequest,
    requestDeserialize: deserialize_google_cloud_kms_v1_RestoreCryptoKeyVersionRequest,
    responseSerialize: serialize_google_cloud_kms_v1_CryptoKeyVersion,
    responseDeserialize: deserialize_google_cloud_kms_v1_CryptoKeyVersion,
  },
};

exports.KeyManagementServiceClient = grpc.makeGenericClientConstructor(KeyManagementServiceService);
