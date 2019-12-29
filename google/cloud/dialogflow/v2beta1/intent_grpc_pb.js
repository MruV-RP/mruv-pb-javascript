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
var google_cloud_dialogflow_v2beta1_intent_pb = require('../../../../google/cloud/dialogflow/v2beta1/intent_pb.js');
var google_api_annotations_pb = require('../../../../google/api/annotations_pb.js');
var google_api_field_behavior_pb = require('../../../../google/api/field_behavior_pb.js');
var google_api_resource_pb = require('../../../../google/api/resource_pb.js');
var google_cloud_dialogflow_v2beta1_audio_config_pb = require('../../../../google/cloud/dialogflow/v2beta1/audio_config_pb.js');
var google_cloud_dialogflow_v2beta1_context_pb = require('../../../../google/cloud/dialogflow/v2beta1/context_pb.js');
var google_longrunning_operations_pb = require('../../../../google/longrunning/operations_pb.js');
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_api_client_pb = require('../../../../google/api/client_pb.js');

function serialize_google_cloud_dialogflow_v2beta1_BatchDeleteIntentsRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_intent_pb.BatchDeleteIntentsRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.BatchDeleteIntentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_BatchDeleteIntentsRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_intent_pb.BatchDeleteIntentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_BatchUpdateIntentsRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_intent_pb.BatchUpdateIntentsRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.BatchUpdateIntentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_BatchUpdateIntentsRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_intent_pb.BatchUpdateIntentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_CreateIntentRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_intent_pb.CreateIntentRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.CreateIntentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_CreateIntentRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_intent_pb.CreateIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_DeleteIntentRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_intent_pb.DeleteIntentRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.DeleteIntentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_DeleteIntentRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_intent_pb.DeleteIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_GetIntentRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_intent_pb.GetIntentRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.GetIntentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_GetIntentRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_intent_pb.GetIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_Intent(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_intent_pb.Intent)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.Intent');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_Intent(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_intent_pb.Intent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_ListIntentsRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_intent_pb.ListIntentsRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.ListIntentsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_ListIntentsRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_intent_pb.ListIntentsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_ListIntentsResponse(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_intent_pb.ListIntentsResponse)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.ListIntentsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_ListIntentsResponse(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_intent_pb.ListIntentsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_cloud_dialogflow_v2beta1_UpdateIntentRequest(arg) {
  if (!(arg instanceof google_cloud_dialogflow_v2beta1_intent_pb.UpdateIntentRequest)) {
    throw new Error('Expected argument of type google.cloud.dialogflow.v2beta1.UpdateIntentRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_cloud_dialogflow_v2beta1_UpdateIntentRequest(buffer_arg) {
  return google_cloud_dialogflow_v2beta1_intent_pb.UpdateIntentRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_longrunning_Operation(arg) {
  if (!(arg instanceof google_longrunning_operations_pb.Operation)) {
    throw new Error('Expected argument of type google.longrunning.Operation');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_longrunning_Operation(buffer_arg) {
  return google_longrunning_operations_pb.Operation.deserializeBinary(new Uint8Array(buffer_arg));
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


// An intent represents a mapping between input from a user and an action to
// be taken by your application. When you pass user input to the
// [DetectIntent][google.cloud.dialogflow.v2beta1.Sessions.DetectIntent] (or
// [StreamingDetectIntent][google.cloud.dialogflow.v2beta1.Sessions.StreamingDetectIntent]) method, the
// Dialogflow API analyzes the input and searches
// for a matching intent. If no match is found, the Dialogflow API returns a
// fallback intent (`is_fallback` = true).
//
// You can provide additional information for the Dialogflow API to use to
// match user input to an intent by adding the following to your intent.
//
// *   **Contexts** - provide additional context for intent analysis. For
//     example, if an intent is related to an object in your application that
//     plays music, you can provide a context to determine when to match the
//     intent if the user input is "turn it off". You can include a context
//     that matches the intent when there is previous user input of
//     "play music", and not when there is previous user input of
//     "turn on the light".
//
// *   **Events** - allow for matching an intent by using an event name
//     instead of user input. Your application can provide an event name and
//     related parameters to the Dialogflow API to match an intent. For
//     example, when your application starts, you can send a welcome event
//     with a user name parameter to the Dialogflow API to match an intent with
//     a personalized welcome message for the user.
//
// *   **Training phrases** - provide examples of user input to train the
//     Dialogflow API agent to better match intents.
//
// For more information about intents, see the
// [Dialogflow
// documentation](https://cloud.google.com/dialogflow/docs/intents-overview).
var IntentsService = exports.IntentsService = {
  // Returns the list of all intents in the specified agent.
  listIntents: {
    path: '/google.cloud.dialogflow.v2beta1.Intents/ListIntents',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_intent_pb.ListIntentsRequest,
    responseType: google_cloud_dialogflow_v2beta1_intent_pb.ListIntentsResponse,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_ListIntentsRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_ListIntentsRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_ListIntentsResponse,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_ListIntentsResponse,
  },
  // Retrieves the specified intent.
  getIntent: {
    path: '/google.cloud.dialogflow.v2beta1.Intents/GetIntent',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_intent_pb.GetIntentRequest,
    responseType: google_cloud_dialogflow_v2beta1_intent_pb.Intent,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_GetIntentRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_GetIntentRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_Intent,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_Intent,
  },
  // Creates an intent in the specified agent.
  createIntent: {
    path: '/google.cloud.dialogflow.v2beta1.Intents/CreateIntent',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_intent_pb.CreateIntentRequest,
    responseType: google_cloud_dialogflow_v2beta1_intent_pb.Intent,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_CreateIntentRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_CreateIntentRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_Intent,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_Intent,
  },
  // Updates the specified intent.
  updateIntent: {
    path: '/google.cloud.dialogflow.v2beta1.Intents/UpdateIntent',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_intent_pb.UpdateIntentRequest,
    responseType: google_cloud_dialogflow_v2beta1_intent_pb.Intent,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_UpdateIntentRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_UpdateIntentRequest,
    responseSerialize: serialize_google_cloud_dialogflow_v2beta1_Intent,
    responseDeserialize: deserialize_google_cloud_dialogflow_v2beta1_Intent,
  },
  // Deletes the specified intent and its direct or indirect followup intents.
  deleteIntent: {
    path: '/google.cloud.dialogflow.v2beta1.Intents/DeleteIntent',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_intent_pb.DeleteIntentRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_DeleteIntentRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_DeleteIntentRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Updates/Creates multiple intents in the specified agent.
  //
  // Operation <response: [BatchUpdateIntentsResponse][google.cloud.dialogflow.v2beta1.BatchUpdateIntentsResponse]>
  batchUpdateIntents: {
    path: '/google.cloud.dialogflow.v2beta1.Intents/BatchUpdateIntents',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_intent_pb.BatchUpdateIntentsRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_BatchUpdateIntentsRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_BatchUpdateIntentsRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
  // Deletes intents in the specified agent.
  //
  // Operation <response: [google.protobuf.Empty][google.protobuf.Empty]>
  batchDeleteIntents: {
    path: '/google.cloud.dialogflow.v2beta1.Intents/BatchDeleteIntents',
    requestStream: false,
    responseStream: false,
    requestType: google_cloud_dialogflow_v2beta1_intent_pb.BatchDeleteIntentsRequest,
    responseType: google_longrunning_operations_pb.Operation,
    requestSerialize: serialize_google_cloud_dialogflow_v2beta1_BatchDeleteIntentsRequest,
    requestDeserialize: deserialize_google_cloud_dialogflow_v2beta1_BatchDeleteIntentsRequest,
    responseSerialize: serialize_google_longrunning_Operation,
    responseDeserialize: deserialize_google_longrunning_Operation,
  },
};

exports.IntentsClient = grpc.makeGenericClientConstructor(IntentsService);
