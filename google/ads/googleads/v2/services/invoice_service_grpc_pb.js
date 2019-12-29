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
var google_ads_googleads_v2_services_invoice_service_pb = require('../../../../../google/ads/googleads/v2/services/invoice_service_pb.js');
var google_ads_googleads_v2_enums_month_of_year_pb = require('../../../../../google/ads/googleads/v2/enums/month_of_year_pb.js');
var google_ads_googleads_v2_resources_invoice_pb = require('../../../../../google/ads/googleads/v2/resources/invoice_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_services_ListInvoicesRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_invoice_service_pb.ListInvoicesRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.ListInvoicesRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_ListInvoicesRequest(buffer_arg) {
  return google_ads_googleads_v2_services_invoice_service_pb.ListInvoicesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_ListInvoicesResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_invoice_service_pb.ListInvoicesResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.ListInvoicesResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_ListInvoicesResponse(buffer_arg) {
  return google_ads_googleads_v2_services_invoice_service_pb.ListInvoicesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the Invoice service.
//
// A service to fetch invoices issued for a billing setup during a given month.
var InvoiceServiceService = exports.InvoiceServiceService = {
  // Returns all invoices associated with a billing setup, for a given month.
  listInvoices: {
    path: '/google.ads.googleads.v2.services.InvoiceService/ListInvoices',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_invoice_service_pb.ListInvoicesRequest,
    responseType: google_ads_googleads_v2_services_invoice_service_pb.ListInvoicesResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_ListInvoicesRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_ListInvoicesRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_ListInvoicesResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_ListInvoicesResponse,
  },
};

exports.InvoiceServiceClient = grpc.makeGenericClientConstructor(InvoiceServiceService);
