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
var google_ads_googleads_v2_services_reach_plan_service_pb = require('../../../../../google/ads/googleads/v2/services/reach_plan_service_pb.js');
var google_ads_googleads_v2_common_criteria_pb = require('../../../../../google/ads/googleads/v2/common/criteria_pb.js');
var google_ads_googleads_v2_enums_reach_plan_ad_length_pb = require('../../../../../google/ads/googleads/v2/enums/reach_plan_ad_length_pb.js');
var google_ads_googleads_v2_enums_reach_plan_age_range_pb = require('../../../../../google/ads/googleads/v2/enums/reach_plan_age_range_pb.js');
var google_api_annotations_pb = require('../../../../../google/api/annotations_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_api_client_pb = require('../../../../../google/api/client_pb.js');

function serialize_google_ads_googleads_v2_services_GenerateProductMixIdeasRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_reach_plan_service_pb.GenerateProductMixIdeasRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GenerateProductMixIdeasRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GenerateProductMixIdeasRequest(buffer_arg) {
  return google_ads_googleads_v2_services_reach_plan_service_pb.GenerateProductMixIdeasRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GenerateProductMixIdeasResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_reach_plan_service_pb.GenerateProductMixIdeasResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GenerateProductMixIdeasResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GenerateProductMixIdeasResponse(buffer_arg) {
  return google_ads_googleads_v2_services_reach_plan_service_pb.GenerateProductMixIdeasResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GenerateReachForecastRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_reach_plan_service_pb.GenerateReachForecastRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GenerateReachForecastRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GenerateReachForecastRequest(buffer_arg) {
  return google_ads_googleads_v2_services_reach_plan_service_pb.GenerateReachForecastRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_GenerateReachForecastResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_reach_plan_service_pb.GenerateReachForecastResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.GenerateReachForecastResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_GenerateReachForecastResponse(buffer_arg) {
  return google_ads_googleads_v2_services_reach_plan_service_pb.GenerateReachForecastResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_ListPlannableLocationsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableLocationsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.ListPlannableLocationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_ListPlannableLocationsRequest(buffer_arg) {
  return google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableLocationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_ListPlannableLocationsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableLocationsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.ListPlannableLocationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_ListPlannableLocationsResponse(buffer_arg) {
  return google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableLocationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_ListPlannableProductsRequest(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableProductsRequest)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.ListPlannableProductsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_ListPlannableProductsRequest(buffer_arg) {
  return google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableProductsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_ads_googleads_v2_services_ListPlannableProductsResponse(arg) {
  if (!(arg instanceof google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableProductsResponse)) {
    throw new Error('Expected argument of type google.ads.googleads.v2.services.ListPlannableProductsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_ads_googleads_v2_services_ListPlannableProductsResponse(buffer_arg) {
  return google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableProductsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// Proto file describing the reach plan service.
//
// Reach Plan Service gives users information about audience size that can
// be reached through advertisement on YouTube. In particular,
// GenerateReachForecast provides estimated number of people of specified
// demographics that can be reached by an ad in a given market by a campaign of
// certain duration with a defined budget.
var ReachPlanServiceService = exports.ReachPlanServiceService = {
  // Returns the list of plannable locations (for example, countries & DMAs).
  listPlannableLocations: {
    path: '/google.ads.googleads.v2.services.ReachPlanService/ListPlannableLocations',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableLocationsRequest,
    responseType: google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableLocationsResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_ListPlannableLocationsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_ListPlannableLocationsRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_ListPlannableLocationsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_ListPlannableLocationsResponse,
  },
  // Returns the list of per-location plannable YouTube ad formats with allowed
  // targeting.
  listPlannableProducts: {
    path: '/google.ads.googleads.v2.services.ReachPlanService/ListPlannableProducts',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableProductsRequest,
    responseType: google_ads_googleads_v2_services_reach_plan_service_pb.ListPlannableProductsResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_ListPlannableProductsRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_ListPlannableProductsRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_ListPlannableProductsResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_ListPlannableProductsResponse,
  },
  // Generates a product mix ideas given a set of preferences. This method
  // helps the advertiser to obtain a good mix of ad formats and budget
  // allocations based on its preferences.
  generateProductMixIdeas: {
    path: '/google.ads.googleads.v2.services.ReachPlanService/GenerateProductMixIdeas',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_reach_plan_service_pb.GenerateProductMixIdeasRequest,
    responseType: google_ads_googleads_v2_services_reach_plan_service_pb.GenerateProductMixIdeasResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_GenerateProductMixIdeasRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GenerateProductMixIdeasRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_GenerateProductMixIdeasResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_GenerateProductMixIdeasResponse,
  },
  // Generates a reach forecast for a given targeting / product mix.
  generateReachForecast: {
    path: '/google.ads.googleads.v2.services.ReachPlanService/GenerateReachForecast',
    requestStream: false,
    responseStream: false,
    requestType: google_ads_googleads_v2_services_reach_plan_service_pb.GenerateReachForecastRequest,
    responseType: google_ads_googleads_v2_services_reach_plan_service_pb.GenerateReachForecastResponse,
    requestSerialize: serialize_google_ads_googleads_v2_services_GenerateReachForecastRequest,
    requestDeserialize: deserialize_google_ads_googleads_v2_services_GenerateReachForecastRequest,
    responseSerialize: serialize_google_ads_googleads_v2_services_GenerateReachForecastResponse,
    responseDeserialize: deserialize_google_ads_googleads_v2_services_GenerateReachForecastResponse,
  },
};

exports.ReachPlanServiceClient = grpc.makeGenericClientConstructor(ReachPlanServiceService);
