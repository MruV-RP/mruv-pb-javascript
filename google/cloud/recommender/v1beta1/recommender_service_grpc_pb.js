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
var google_cloud_recommender_v1beta1_recommender_service_pb = require('../../../../google/cloud/recommender/v1beta1/recommender_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_cloud_recommender_v1beta1_recommendation_pb = require('../../../../google/cloud/recommender/v1beta1/recommendation_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');

function serialize_google_cloud_recommender_v1beta1_GetRecommendationRequest(arg) {
  if (!(arg instanceof google_cloud_recommender_v1beta1_recommender_service_pb.GetRecommendationRequest)) {
    throw new Error('Expected argument of type google.cloud.recommender.v1beta1.GetRecommendationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_recommender_v1beta1_GetRecommendationRequest(buffer_arg) {
  return google_cloud_recommender_v1beta1_recommender_service_pb.GetRecommendationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_recommender_v1beta1_ListRecommendationsRequest(arg) {
  if (!(arg instanceof google_cloud_recommender_v1beta1_recommender_service_pb.ListRecommendationsRequest)) {
    throw new Error('Expected argument of type google.cloud.recommender.v1beta1.ListRecommendationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_recommender_v1beta1_ListRecommendationsRequest(buffer_arg) {
  return google_cloud_recommender_v1beta1_recommender_service_pb.ListRecommendationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_recommender_v1beta1_ListRecommendationsResponse(arg) {
  if (!(arg instanceof google_cloud_recommender_v1beta1_recommender_service_pb.ListRecommendationsResponse)) {
    throw new Error('Expected argument of type google.cloud.recommender.v1beta1.ListRecommendationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_recommender_v1beta1_ListRecommendationsResponse(buffer_arg) {
  return google_cloud_recommender_v1beta1_recommender_service_pb.ListRecommendationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_recommender_v1beta1_MarkRecommendationClaimedRequest(arg) {
  if (!(arg instanceof google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationClaimedRequest)) {
    throw new Error('Expected argument of type google.cloud.recommender.v1beta1.MarkRecommendationClaimedRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_recommender_v1beta1_MarkRecommendationClaimedRequest(buffer_arg) {
  return google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationClaimedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_recommender_v1beta1_MarkRecommendationFailedRequest(arg) {
  if (!(arg instanceof google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationFailedRequest)) {
    throw new Error('Expected argument of type google.cloud.recommender.v1beta1.MarkRecommendationFailedRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_recommender_v1beta1_MarkRecommendationFailedRequest(buffer_arg) {
  return google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationFailedRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_recommender_v1beta1_MarkRecommendationSucceededRequest(arg) {
  if (!(arg instanceof google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationSucceededRequest)) {
    throw new Error('Expected argument of type google.cloud.recommender.v1beta1.MarkRecommendationSucceededRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_recommender_v1beta1_MarkRecommendationSucceededRequest(buffer_arg) {
  return google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationSucceededRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_recommender_v1beta1_Recommendation(arg) {
  if (!(arg instanceof google_cloud_recommender_v1beta1_recommendation_pb.Recommendation)) {
    throw new Error('Expected argument of type google.cloud.recommender.v1beta1.Recommendation');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_recommender_v1beta1_Recommendation(buffer_arg) {
  return google_cloud_recommender_v1beta1_recommendation_pb.Recommendation.deserializeBinary(new Uint8Array(buffer_arg));
}


// Provides recommendations for cloud customers for various categories like
// performance optimization, cost savings, reliability, feature discovery, etc.
// These recommendations are generated automatically based on analysis of user
// resources, configuration and monitoring metrics.
var RecommenderService = exports.RecommenderService = {
  // Lists recommendations for a Cloud project. Requires the recommender.*.list
  // IAM permission for the specified recommender.
  listRecommendations: {
    path: '/google.cloud.recommender.v1beta1.Recommender/ListRecommendations',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_recommender_v1beta1_recommender_service_pb.ListRecommendationsRequest,
    responseType: google_cloud_recommender_v1beta1_recommender_service_pb.ListRecommendationsResponse,
    requestSerialize: serialize_google_cloud_recommender_v1beta1_ListRecommendationsRequest,
    requestDeserialize: deserialize_google_cloud_recommender_v1beta1_ListRecommendationsRequest,
    responseSerialize: serialize_google_cloud_recommender_v1beta1_ListRecommendationsResponse,
    responseDeserialize: deserialize_google_cloud_recommender_v1beta1_ListRecommendationsResponse,
  },
  // Gets the requested recommendation. Requires the recommender.*.get
  // IAM permission for the specified recommender.
  getRecommendation: {
    path: '/google.cloud.recommender.v1beta1.Recommender/GetRecommendation',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_recommender_v1beta1_recommender_service_pb.GetRecommendationRequest,
    responseType: google_cloud_recommender_v1beta1_recommendation_pb.Recommendation,
    requestSerialize: serialize_google_cloud_recommender_v1beta1_GetRecommendationRequest,
    requestDeserialize: deserialize_google_cloud_recommender_v1beta1_GetRecommendationRequest,
    responseSerialize: serialize_google_cloud_recommender_v1beta1_Recommendation,
    responseDeserialize: deserialize_google_cloud_recommender_v1beta1_Recommendation,
  },
  // Mark the Recommendation State as Claimed. Users can use this method to
  // indicate to the Recommender API that they are starting to apply the
  // recommendation themselves. This stops the recommendation content from being
  // updated.
  //
  // MarkRecommendationClaimed can be applied to recommendations in CLAIMED,
  // SUCCEEDED, FAILED, or ACTIVE state.
  //
  // Requires the recommender.*.update IAM permission for the specified
  // recommender.
  markRecommendationClaimed: {
    path: '/google.cloud.recommender.v1beta1.Recommender/MarkRecommendationClaimed',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationClaimedRequest,
    responseType: google_cloud_recommender_v1beta1_recommendation_pb.Recommendation,
    requestSerialize: serialize_google_cloud_recommender_v1beta1_MarkRecommendationClaimedRequest,
    requestDeserialize: deserialize_google_cloud_recommender_v1beta1_MarkRecommendationClaimedRequest,
    responseSerialize: serialize_google_cloud_recommender_v1beta1_Recommendation,
    responseDeserialize: deserialize_google_cloud_recommender_v1beta1_Recommendation,
  },
  // Mark the Recommendation State as Succeeded. Users can use this method to
  // indicate to the Recommender API that they have applied the recommendation
  // themselves, and the operation was successful. This stops the recommendation
  // content from being updated.
  //
  // MarkRecommendationSucceeded can be applied to recommendations in ACTIVE,
  // CLAIMED, SUCCEEDED, or FAILED state.
  //
  // Requires the recommender.*.update IAM permission for the specified
  // recommender.
  markRecommendationSucceeded: {
    path: '/google.cloud.recommender.v1beta1.Recommender/MarkRecommendationSucceeded',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationSucceededRequest,
    responseType: google_cloud_recommender_v1beta1_recommendation_pb.Recommendation,
    requestSerialize: serialize_google_cloud_recommender_v1beta1_MarkRecommendationSucceededRequest,
    requestDeserialize: deserialize_google_cloud_recommender_v1beta1_MarkRecommendationSucceededRequest,
    responseSerialize: serialize_google_cloud_recommender_v1beta1_Recommendation,
    responseDeserialize: deserialize_google_cloud_recommender_v1beta1_Recommendation,
  },
  // Mark the Recommendation State as Failed. Users can use this method to
  // indicate to the Recommender API that they have applied the recommendation
  // themselves, and the operation failed. This stops the recommendation content
  // from being updated.
  //
  // MarkRecommendationFailed can be applied to recommendations in ACTIVE,
  // CLAIMED, SUCCEEDED, or FAILED state.
  //
  // Requires the recommender.*.update IAM permission for the specified
  // recommender.
  markRecommendationFailed: {
    path: '/google.cloud.recommender.v1beta1.Recommender/MarkRecommendationFailed',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_recommender_v1beta1_recommender_service_pb.MarkRecommendationFailedRequest,
    responseType: google_cloud_recommender_v1beta1_recommendation_pb.Recommendation,
    requestSerialize: serialize_google_cloud_recommender_v1beta1_MarkRecommendationFailedRequest,
    requestDeserialize: deserialize_google_cloud_recommender_v1beta1_MarkRecommendationFailedRequest,
    responseSerialize: serialize_google_cloud_recommender_v1beta1_Recommendation,
    responseDeserialize: deserialize_google_cloud_recommender_v1beta1_Recommendation,
  },
};

exports.RecommenderClient = grpc.makeGenericClientConstructor(RecommenderService);
