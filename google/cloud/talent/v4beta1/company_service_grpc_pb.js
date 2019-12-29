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
var google_cloud_talent_v4beta1_company_service_pb = require('../../../../google/cloud/talent/v4beta1/company_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_cloud_talent_v4beta1_common_pb = require('../../../../google/cloud/talent/v4beta1/common_pb.js');
var google_cloud_talent_v4beta1_company_pb = require('../../../../google/cloud/talent/v4beta1/company_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');

function serialize_google_cloud_talent_v4beta1_Company(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_company_pb.Company)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.Company');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_Company(buffer_arg) {
  return google_cloud_talent_v4beta1_company_pb.Company.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_CreateCompanyRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_company_service_pb.CreateCompanyRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.CreateCompanyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_CreateCompanyRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_company_service_pb.CreateCompanyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_DeleteCompanyRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_company_service_pb.DeleteCompanyRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.DeleteCompanyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_DeleteCompanyRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_company_service_pb.DeleteCompanyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_GetCompanyRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_company_service_pb.GetCompanyRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.GetCompanyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_GetCompanyRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_company_service_pb.GetCompanyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_ListCompaniesRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_company_service_pb.ListCompaniesRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.ListCompaniesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_ListCompaniesRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_company_service_pb.ListCompaniesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_ListCompaniesResponse(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_company_service_pb.ListCompaniesResponse)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.ListCompaniesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_ListCompaniesResponse(buffer_arg) {
  return google_cloud_talent_v4beta1_company_service_pb.ListCompaniesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_talent_v4beta1_UpdateCompanyRequest(arg) {
  if (!(arg instanceof google_cloud_talent_v4beta1_company_service_pb.UpdateCompanyRequest)) {
    throw new Error('Expected argument of type google.cloud.talent.v4beta1.UpdateCompanyRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_talent_v4beta1_UpdateCompanyRequest(buffer_arg) {
  return google_cloud_talent_v4beta1_company_service_pb.UpdateCompanyRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


// A service that handles company management, including CRUD and enumeration.
var CompanyServiceService = exports.CompanyServiceService = {
  // Creates a new company entity.
  createCompany: {
    path: '/google.cloud.talent.v4beta1.CompanyService/CreateCompany',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_company_service_pb.CreateCompanyRequest,
    responseType: google_cloud_talent_v4beta1_company_pb.Company,
    requestSerialize: serialize_google_cloud_talent_v4beta1_CreateCompanyRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_CreateCompanyRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_Company,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_Company,
  },
  // Retrieves specified company.
  getCompany: {
    path: '/google.cloud.talent.v4beta1.CompanyService/GetCompany',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_company_service_pb.GetCompanyRequest,
    responseType: google_cloud_talent_v4beta1_company_pb.Company,
    requestSerialize: serialize_google_cloud_talent_v4beta1_GetCompanyRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_GetCompanyRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_Company,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_Company,
  },
  // Updates specified company.
  updateCompany: {
    path: '/google.cloud.talent.v4beta1.CompanyService/UpdateCompany',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_company_service_pb.UpdateCompanyRequest,
    responseType: google_cloud_talent_v4beta1_company_pb.Company,
    requestSerialize: serialize_google_cloud_talent_v4beta1_UpdateCompanyRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_UpdateCompanyRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_Company,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_Company,
  },
  // Deletes specified company.
  // Prerequisite: The company has no jobs associated with it.
  deleteCompany: {
    path: '/google.cloud.talent.v4beta1.CompanyService/DeleteCompany',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_company_service_pb.DeleteCompanyRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_talent_v4beta1_DeleteCompanyRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_DeleteCompanyRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists all companies associated with the project.
  listCompanies: {
    path: '/google.cloud.talent.v4beta1.CompanyService/ListCompanies',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_talent_v4beta1_company_service_pb.ListCompaniesRequest,
    responseType: google_cloud_talent_v4beta1_company_service_pb.ListCompaniesResponse,
    requestSerialize: serialize_google_cloud_talent_v4beta1_ListCompaniesRequest,
    requestDeserialize: deserialize_google_cloud_talent_v4beta1_ListCompaniesRequest,
    responseSerialize: serialize_google_cloud_talent_v4beta1_ListCompaniesResponse,
    responseDeserialize: deserialize_google_cloud_talent_v4beta1_ListCompaniesResponse,
  },
};

exports.CompanyServiceClient = grpc.makeGenericClientConstructor(CompanyServiceService);
