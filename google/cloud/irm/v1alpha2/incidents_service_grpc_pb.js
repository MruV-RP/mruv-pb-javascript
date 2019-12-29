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
var google_cloud_irm_v1alpha2_incidents_service_pb = require('../../../../google/cloud/irm/v1alpha2/incidents_service_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');
var google_cloud_irm_v1alpha2_incidents_pb = require('../../../../google/cloud/irm/v1alpha2/incidents_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_google_cloud_irm_v1alpha2_Annotation(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_pb.Annotation)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.Annotation');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_Annotation(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_pb.Annotation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_Artifact(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_pb.Artifact)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.Artifact');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_Artifact(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_pb.Artifact.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_CancelIncidentRoleHandoverRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.CancelIncidentRoleHandoverRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.CancelIncidentRoleHandoverRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_CancelIncidentRoleHandoverRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.CancelIncidentRoleHandoverRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_ConfirmIncidentRoleHandoverRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.ConfirmIncidentRoleHandoverRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.ConfirmIncidentRoleHandoverRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_ConfirmIncidentRoleHandoverRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.ConfirmIncidentRoleHandoverRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_CreateAnnotationRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.CreateAnnotationRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.CreateAnnotationRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_CreateAnnotationRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.CreateAnnotationRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_CreateArtifactRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.CreateArtifactRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.CreateArtifactRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_CreateArtifactRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.CreateArtifactRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_CreateIncidentRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.CreateIncidentRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.CreateIncidentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_CreateIncidentRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.CreateIncidentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_CreateIncidentRoleAssignmentRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.CreateIncidentRoleAssignmentRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.CreateIncidentRoleAssignmentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_CreateIncidentRoleAssignmentRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.CreateIncidentRoleAssignmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_CreateSignalRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.CreateSignalRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.CreateSignalRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_CreateSignalRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.CreateSignalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_CreateSubscriptionRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.CreateSubscriptionRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.CreateSubscriptionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_CreateSubscriptionRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.CreateSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_CreateTagRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.CreateTagRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.CreateTagRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_CreateTagRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.CreateTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_DeleteArtifactRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.DeleteArtifactRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.DeleteArtifactRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_DeleteArtifactRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.DeleteArtifactRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_DeleteIncidentRoleAssignmentRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.DeleteIncidentRoleAssignmentRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.DeleteIncidentRoleAssignmentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_DeleteIncidentRoleAssignmentRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.DeleteIncidentRoleAssignmentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_DeleteSubscriptionRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.DeleteSubscriptionRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.DeleteSubscriptionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_DeleteSubscriptionRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.DeleteSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_DeleteTagRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.DeleteTagRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.DeleteTagRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_DeleteTagRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.DeleteTagRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_EscalateIncidentRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.EscalateIncidentRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.EscalateIncidentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_EscalateIncidentRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.EscalateIncidentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_EscalateIncidentResponse(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.EscalateIncidentResponse)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.EscalateIncidentResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_EscalateIncidentResponse(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.EscalateIncidentResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_ForceIncidentRoleHandoverRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.ForceIncidentRoleHandoverRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.ForceIncidentRoleHandoverRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_ForceIncidentRoleHandoverRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.ForceIncidentRoleHandoverRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_GetIncidentRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.GetIncidentRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.GetIncidentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_GetIncidentRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.GetIncidentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_GetSignalRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.GetSignalRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.GetSignalRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_GetSignalRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.GetSignalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_Incident(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_pb.Incident)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.Incident');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_Incident(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_pb.Incident.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_IncidentRoleAssignment(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.IncidentRoleAssignment');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_IncidentRoleAssignment(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_ListAnnotationsRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.ListAnnotationsRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.ListAnnotationsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_ListAnnotationsRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.ListAnnotationsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_ListAnnotationsResponse(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.ListAnnotationsResponse)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.ListAnnotationsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_ListAnnotationsResponse(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.ListAnnotationsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_ListArtifactsRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.ListArtifactsRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.ListArtifactsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_ListArtifactsRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.ListArtifactsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_ListArtifactsResponse(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.ListArtifactsResponse)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.ListArtifactsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_ListArtifactsResponse(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.ListArtifactsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_ListIncidentRoleAssignmentsRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.ListIncidentRoleAssignmentsRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_ListIncidentRoleAssignmentsRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.ListIncidentRoleAssignmentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_ListIncidentRoleAssignmentsResponse(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.ListIncidentRoleAssignmentsResponse)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.ListIncidentRoleAssignmentsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_ListIncidentRoleAssignmentsResponse(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.ListIncidentRoleAssignmentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_ListSubscriptionsRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.ListSubscriptionsRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.ListSubscriptionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_ListSubscriptionsRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.ListSubscriptionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_ListSubscriptionsResponse(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.ListSubscriptionsResponse)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.ListSubscriptionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_ListSubscriptionsResponse(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.ListSubscriptionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_ListTagsRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.ListTagsRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.ListTagsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_ListTagsRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.ListTagsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_ListTagsResponse(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.ListTagsResponse)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.ListTagsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_ListTagsResponse(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.ListTagsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_LookupSignalRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.LookupSignalRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.LookupSignalRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_LookupSignalRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.LookupSignalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_RequestIncidentRoleHandoverRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.RequestIncidentRoleHandoverRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.RequestIncidentRoleHandoverRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_RequestIncidentRoleHandoverRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.RequestIncidentRoleHandoverRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_SearchIncidentsRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.SearchIncidentsRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.SearchIncidentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_SearchIncidentsRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.SearchIncidentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_SearchIncidentsResponse(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.SearchIncidentsResponse)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.SearchIncidentsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_SearchIncidentsResponse(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.SearchIncidentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_SearchSignalsRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.SearchSignalsRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.SearchSignalsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_SearchSignalsRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.SearchSignalsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_SearchSignalsResponse(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.SearchSignalsResponse)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.SearchSignalsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_SearchSignalsResponse(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.SearchSignalsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_SearchSimilarIncidentsRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.SearchSimilarIncidentsRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.SearchSimilarIncidentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_SearchSimilarIncidentsRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.SearchSimilarIncidentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_SearchSimilarIncidentsResponse(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.SearchSimilarIncidentsResponse)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.SearchSimilarIncidentsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_SearchSimilarIncidentsResponse(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.SearchSimilarIncidentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_SendShiftHandoffRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.SendShiftHandoffRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.SendShiftHandoffRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_SendShiftHandoffRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.SendShiftHandoffRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_SendShiftHandoffResponse(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.SendShiftHandoffResponse)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.SendShiftHandoffResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_SendShiftHandoffResponse(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.SendShiftHandoffResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_Signal(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_pb.Signal)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.Signal');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_Signal(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_pb.Signal.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_Subscription(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_pb.Subscription)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.Subscription');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_Subscription(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_pb.Subscription.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_Tag(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_pb.Tag)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.Tag');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_Tag(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_pb.Tag.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_UpdateArtifactRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.UpdateArtifactRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.UpdateArtifactRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_UpdateArtifactRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.UpdateArtifactRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_UpdateIncidentRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.UpdateIncidentRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.UpdateIncidentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_UpdateIncidentRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.UpdateIncidentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_UpdateSignalRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.UpdateSignalRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.UpdateSignalRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_UpdateSignalRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.UpdateSignalRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_irm_v1alpha2_UpdateSubscriptionRequest(arg) {
  if (!(arg instanceof google_cloud_irm_v1alpha2_incidents_service_pb.UpdateSubscriptionRequest)) {
    throw new Error('Expected argument of type google.cloud.irm.v1alpha2.UpdateSubscriptionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_irm_v1alpha2_UpdateSubscriptionRequest(buffer_arg) {
  return google_cloud_irm_v1alpha2_incidents_service_pb.UpdateSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// The Incident API for Incident Response & Management.
var IncidentServiceService = exports.IncidentServiceService = {
  // Creates a new incident.
  createIncident: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/CreateIncident',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.CreateIncidentRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_pb.Incident,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_CreateIncidentRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_CreateIncidentRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_Incident,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_Incident,
  },
  // Returns an incident by name.
  getIncident: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/GetIncident',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.GetIncidentRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_pb.Incident,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_GetIncidentRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_GetIncidentRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_Incident,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_Incident,
  },
  // Returns a list of incidents.
  // Incidents are ordered by start time, with the most recent incidents first.
  searchIncidents: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/SearchIncidents',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.SearchIncidentsRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_service_pb.SearchIncidentsResponse,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_SearchIncidentsRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_SearchIncidentsRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_SearchIncidentsResponse,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_SearchIncidentsResponse,
  },
  // Updates an existing incident.
  updateIncident: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/UpdateIncident',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.UpdateIncidentRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_pb.Incident,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_UpdateIncidentRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_UpdateIncidentRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_Incident,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_Incident,
  },
  // Returns a list of incidents that are "similar" to the specified incident
  // or signal. This functionality is provided on a best-effort basis and the
  // definition of "similar" is subject to change.
  searchSimilarIncidents: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/SearchSimilarIncidents',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.SearchSimilarIncidentsRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_service_pb.SearchSimilarIncidentsResponse,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_SearchSimilarIncidentsRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_SearchSimilarIncidentsRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_SearchSimilarIncidentsResponse,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_SearchSimilarIncidentsResponse,
  },
  // Creates an annotation on an existing incident. Only 'text/plain' and
  // 'text/markdown' annotations can be created via this method.
  createAnnotation: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/CreateAnnotation',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.CreateAnnotationRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_pb.Annotation,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_CreateAnnotationRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_CreateAnnotationRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_Annotation,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_Annotation,
  },
  // Lists annotations that are part of an incident. No assumptions should be
  // made on the content-type of the annotation returned.
  listAnnotations: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/ListAnnotations',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.ListAnnotationsRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_service_pb.ListAnnotationsResponse,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_ListAnnotationsRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_ListAnnotationsRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_ListAnnotationsResponse,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_ListAnnotationsResponse,
  },
  // Creates a tag on an existing incident.
  createTag: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/CreateTag',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.CreateTagRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_pb.Tag,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_CreateTagRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_CreateTagRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_Tag,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_Tag,
  },
  // Deletes an existing tag.
  deleteTag: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/DeleteTag',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.DeleteTagRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_DeleteTagRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_DeleteTagRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists tags that are part of an incident.
  listTags: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/ListTags',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.ListTagsRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_service_pb.ListTagsResponse,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_ListTagsRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_ListTagsRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_ListTagsResponse,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_ListTagsResponse,
  },
  // Creates a new signal.
  createSignal: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/CreateSignal',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.CreateSignalRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_pb.Signal,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_CreateSignalRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_CreateSignalRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_Signal,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_Signal,
  },
  // Lists signals that are part of an incident.
  // Signals are returned in reverse chronological order.
  searchSignals: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/SearchSignals',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.SearchSignalsRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_service_pb.SearchSignalsResponse,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_SearchSignalsRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_SearchSignalsRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_SearchSignalsResponse,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_SearchSignalsResponse,
  },
  // Finds a signal by other unique IDs.
  lookupSignal: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/LookupSignal',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.LookupSignalRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_pb.Signal,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_LookupSignalRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_LookupSignalRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_Signal,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_Signal,
  },
  // Returns a signal by name.
  getSignal: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/GetSignal',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.GetSignalRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_pb.Signal,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_GetSignalRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_GetSignalRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_Signal,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_Signal,
  },
  // Updates an existing signal (for example, to assign/unassign it to an
  // incident).
  updateSignal: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/UpdateSignal',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.UpdateSignalRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_pb.Signal,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_UpdateSignalRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_UpdateSignalRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_Signal,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_Signal,
  },
  // Escalates an incident.
  escalateIncident: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/EscalateIncident',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.EscalateIncidentRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_service_pb.EscalateIncidentResponse,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_EscalateIncidentRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_EscalateIncidentRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_EscalateIncidentResponse,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_EscalateIncidentResponse,
  },
  // Creates a new artifact.
  createArtifact: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/CreateArtifact',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.CreateArtifactRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_pb.Artifact,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_CreateArtifactRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_CreateArtifactRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_Artifact,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_Artifact,
  },
  // Returns a list of artifacts for an incident.
  listArtifacts: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/ListArtifacts',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.ListArtifactsRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_service_pb.ListArtifactsResponse,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_ListArtifactsRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_ListArtifactsRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_ListArtifactsResponse,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_ListArtifactsResponse,
  },
  // Updates an existing artifact.
  updateArtifact: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/UpdateArtifact',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.UpdateArtifactRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_pb.Artifact,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_UpdateArtifactRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_UpdateArtifactRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_Artifact,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_Artifact,
  },
  // Deletes an existing artifact.
  deleteArtifact: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/DeleteArtifact',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.DeleteArtifactRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_DeleteArtifactRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_DeleteArtifactRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Sends a summary of the shift for oncall handoff.
  sendShiftHandoff: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/SendShiftHandoff',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.SendShiftHandoffRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_service_pb.SendShiftHandoffResponse,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_SendShiftHandoffRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_SendShiftHandoffRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_SendShiftHandoffResponse,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_SendShiftHandoffResponse,
  },
  // Creates a new subscription.
  // This will fail if:
  //    a. there are too many (50) subscriptions in the incident already
  //    b. a subscription using the given channel already exists
  createSubscription: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/CreateSubscription',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.CreateSubscriptionRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_pb.Subscription,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_CreateSubscriptionRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_CreateSubscriptionRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_Subscription,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_Subscription,
  },
  // Updates a subscription.
  updateSubscription: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/UpdateSubscription',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.UpdateSubscriptionRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_pb.Subscription,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_UpdateSubscriptionRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_UpdateSubscriptionRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_Subscription,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_Subscription,
  },
  // Returns a list of subscriptions for an incident.
  listSubscriptions: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/ListSubscriptions',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.ListSubscriptionsRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_service_pb.ListSubscriptionsResponse,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_ListSubscriptionsRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_ListSubscriptionsRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_ListSubscriptionsResponse,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_ListSubscriptionsResponse,
  },
  // Deletes an existing subscription.
  deleteSubscription: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/DeleteSubscription',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.DeleteSubscriptionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_DeleteSubscriptionRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_DeleteSubscriptionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Creates a role assignment on an existing incident. Normally, the user field
  // will be set when assigning a role to oneself, and the next field will be
  // set when proposing another user as the assignee. Setting the next field
  // directly to a user other than oneself is equivalent to proposing and
  // force-assigning the role to the user.
  createIncidentRoleAssignment: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/CreateIncidentRoleAssignment',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.CreateIncidentRoleAssignmentRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_CreateIncidentRoleAssignmentRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_CreateIncidentRoleAssignmentRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_IncidentRoleAssignment,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_IncidentRoleAssignment,
  },
  // Deletes an existing role assignment.
  deleteIncidentRoleAssignment: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/DeleteIncidentRoleAssignment',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.DeleteIncidentRoleAssignmentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_DeleteIncidentRoleAssignmentRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_DeleteIncidentRoleAssignmentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Lists role assignments that are part of an incident.
  listIncidentRoleAssignments: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/ListIncidentRoleAssignments',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.ListIncidentRoleAssignmentsRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_service_pb.ListIncidentRoleAssignmentsResponse,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_ListIncidentRoleAssignmentsRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_ListIncidentRoleAssignmentsRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_ListIncidentRoleAssignmentsResponse,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_ListIncidentRoleAssignmentsResponse,
  },
  // Starts a role handover. The proposed assignee will receive an email
  // notifying them of the assignment. This will fail if a role handover is
  // already pending.
  requestIncidentRoleHandover: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/RequestIncidentRoleHandover',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.RequestIncidentRoleHandoverRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_RequestIncidentRoleHandoverRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_RequestIncidentRoleHandoverRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_IncidentRoleAssignment,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_IncidentRoleAssignment,
  },
  // Confirms a role handover. This will fail if the 'proposed_assignee' field
  // of the IncidentRoleAssignment is not equal to the 'new_assignee' field of
  // the request. If the caller is not the new_assignee,
  // ForceIncidentRoleHandover should be used instead.
  confirmIncidentRoleHandover: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/ConfirmIncidentRoleHandover',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.ConfirmIncidentRoleHandoverRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_ConfirmIncidentRoleHandoverRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_ConfirmIncidentRoleHandoverRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_IncidentRoleAssignment,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_IncidentRoleAssignment,
  },
  // Forces a role handover. This will fail if the 'proposed_assignee' field of
  // the IncidentRoleAssignment is not equal to the 'new_assignee' field of the
  // request. If the caller is the new_assignee, ConfirmIncidentRoleHandover
  // should be used instead.
  forceIncidentRoleHandover: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/ForceIncidentRoleHandover',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.ForceIncidentRoleHandoverRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_ForceIncidentRoleHandoverRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_ForceIncidentRoleHandoverRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_IncidentRoleAssignment,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_IncidentRoleAssignment,
  },
  // Cancels a role handover. This will fail if the 'proposed_assignee' field of
  // the IncidentRoleAssignment is not equal to the 'new_assignee' field of the
  // request.
  cancelIncidentRoleHandover: {
    path: '/google.cloud.irm.v1alpha2.IncidentService/CancelIncidentRoleHandover',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_irm_v1alpha2_incidents_service_pb.CancelIncidentRoleHandoverRequest,
    responseType: google_cloud_irm_v1alpha2_incidents_pb.IncidentRoleAssignment,
    requestSerialize: serialize_google_cloud_irm_v1alpha2_CancelIncidentRoleHandoverRequest,
    requestDeserialize: deserialize_google_cloud_irm_v1alpha2_CancelIncidentRoleHandoverRequest,
    responseSerialize: serialize_google_cloud_irm_v1alpha2_IncidentRoleAssignment,
    responseDeserialize: deserialize_google_cloud_irm_v1alpha2_IncidentRoleAssignment,
  },
};

exports.IncidentServiceClient = grpc.makeGenericClientConstructor(IncidentServiceService);
