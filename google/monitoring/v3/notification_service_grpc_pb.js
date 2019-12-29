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
var google_monitoring_v3_notification_service_pb = require('../../../google/monitoring/v3/notification_service_pb.js');
var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
var google_monitoring_v3_notification_pb = require('../../../google/monitoring/v3/notification_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
var google_protobuf_field_mask_pb = require('google-protobuf/google/protobuf/field_mask_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_api_client_pb = require('../../../google/api/client_pb.js');

function serialize_google_monitoring_v3_CreateNotificationChannelRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_notification_service_pb.CreateNotificationChannelRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.CreateNotificationChannelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_CreateNotificationChannelRequest(buffer_arg) {
  return google_monitoring_v3_notification_service_pb.CreateNotificationChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_DeleteNotificationChannelRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_notification_service_pb.DeleteNotificationChannelRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.DeleteNotificationChannelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_DeleteNotificationChannelRequest(buffer_arg) {
  return google_monitoring_v3_notification_service_pb.DeleteNotificationChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_GetNotificationChannelDescriptorRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_notification_service_pb.GetNotificationChannelDescriptorRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.GetNotificationChannelDescriptorRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_GetNotificationChannelDescriptorRequest(buffer_arg) {
  return google_monitoring_v3_notification_service_pb.GetNotificationChannelDescriptorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_GetNotificationChannelRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_notification_service_pb.GetNotificationChannelRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.GetNotificationChannelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_GetNotificationChannelRequest(buffer_arg) {
  return google_monitoring_v3_notification_service_pb.GetNotificationChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_GetNotificationChannelVerificationCodeRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_notification_service_pb.GetNotificationChannelVerificationCodeRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.GetNotificationChannelVerificationCodeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_GetNotificationChannelVerificationCodeRequest(buffer_arg) {
  return google_monitoring_v3_notification_service_pb.GetNotificationChannelVerificationCodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_GetNotificationChannelVerificationCodeResponse(arg) {
  if (!(arg instanceof google_monitoring_v3_notification_service_pb.GetNotificationChannelVerificationCodeResponse)) {
    throw new Error('Expected argument of type google.monitoring.v3.GetNotificationChannelVerificationCodeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_GetNotificationChannelVerificationCodeResponse(buffer_arg) {
  return google_monitoring_v3_notification_service_pb.GetNotificationChannelVerificationCodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListNotificationChannelDescriptorsRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_notification_service_pb.ListNotificationChannelDescriptorsRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListNotificationChannelDescriptorsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListNotificationChannelDescriptorsRequest(buffer_arg) {
  return google_monitoring_v3_notification_service_pb.ListNotificationChannelDescriptorsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListNotificationChannelDescriptorsResponse(arg) {
  if (!(arg instanceof google_monitoring_v3_notification_service_pb.ListNotificationChannelDescriptorsResponse)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListNotificationChannelDescriptorsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListNotificationChannelDescriptorsResponse(buffer_arg) {
  return google_monitoring_v3_notification_service_pb.ListNotificationChannelDescriptorsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListNotificationChannelsRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_notification_service_pb.ListNotificationChannelsRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListNotificationChannelsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListNotificationChannelsRequest(buffer_arg) {
  return google_monitoring_v3_notification_service_pb.ListNotificationChannelsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_ListNotificationChannelsResponse(arg) {
  if (!(arg instanceof google_monitoring_v3_notification_service_pb.ListNotificationChannelsResponse)) {
    throw new Error('Expected argument of type google.monitoring.v3.ListNotificationChannelsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_ListNotificationChannelsResponse(buffer_arg) {
  return google_monitoring_v3_notification_service_pb.ListNotificationChannelsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_NotificationChannel(arg) {
  if (!(arg instanceof google_monitoring_v3_notification_pb.NotificationChannel)) {
    throw new Error('Expected argument of type google.monitoring.v3.NotificationChannel');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_NotificationChannel(buffer_arg) {
  return google_monitoring_v3_notification_pb.NotificationChannel.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_NotificationChannelDescriptor(arg) {
  if (!(arg instanceof google_monitoring_v3_notification_pb.NotificationChannelDescriptor)) {
    throw new Error('Expected argument of type google.monitoring.v3.NotificationChannelDescriptor');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_NotificationChannelDescriptor(buffer_arg) {
  return google_monitoring_v3_notification_pb.NotificationChannelDescriptor.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_SendNotificationChannelVerificationCodeRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_notification_service_pb.SendNotificationChannelVerificationCodeRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.SendNotificationChannelVerificationCodeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_SendNotificationChannelVerificationCodeRequest(buffer_arg) {
  return google_monitoring_v3_notification_service_pb.SendNotificationChannelVerificationCodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_UpdateNotificationChannelRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_notification_service_pb.UpdateNotificationChannelRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.UpdateNotificationChannelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_UpdateNotificationChannelRequest(buffer_arg) {
  return google_monitoring_v3_notification_service_pb.UpdateNotificationChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_monitoring_v3_VerifyNotificationChannelRequest(arg) {
  if (!(arg instanceof google_monitoring_v3_notification_service_pb.VerifyNotificationChannelRequest)) {
    throw new Error('Expected argument of type google.monitoring.v3.VerifyNotificationChannelRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_monitoring_v3_VerifyNotificationChannelRequest(buffer_arg) {
  return google_monitoring_v3_notification_service_pb.VerifyNotificationChannelRequest.deserializeBinary(new Uint8Array(buffer_arg));
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


// The Notification Channel API provides access to configuration that
// controls how messages related to incidents are sent.
var NotificationChannelServiceService = exports.NotificationChannelServiceService = {
  // Lists the descriptors for supported channel types. The use of descriptors
  // makes it possible for new channel types to be dynamically added.
  listNotificationChannelDescriptors: {
    path: '/google.monitoring.v3.NotificationChannelService/ListNotificationChannelDescriptors',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_notification_service_pb.ListNotificationChannelDescriptorsRequest,
    responseType: google_monitoring_v3_notification_service_pb.ListNotificationChannelDescriptorsResponse,
    requestSerialize: serialize_google_monitoring_v3_ListNotificationChannelDescriptorsRequest,
    requestDeserialize: deserialize_google_monitoring_v3_ListNotificationChannelDescriptorsRequest,
    responseSerialize: serialize_google_monitoring_v3_ListNotificationChannelDescriptorsResponse,
    responseDeserialize: deserialize_google_monitoring_v3_ListNotificationChannelDescriptorsResponse,
  },
  // Gets a single channel descriptor. The descriptor indicates which fields
  // are expected / permitted for a notification channel of the given type.
  getNotificationChannelDescriptor: {
    path: '/google.monitoring.v3.NotificationChannelService/GetNotificationChannelDescriptor',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_notification_service_pb.GetNotificationChannelDescriptorRequest,
    responseType: google_monitoring_v3_notification_pb.NotificationChannelDescriptor,
    requestSerialize: serialize_google_monitoring_v3_GetNotificationChannelDescriptorRequest,
    requestDeserialize: deserialize_google_monitoring_v3_GetNotificationChannelDescriptorRequest,
    responseSerialize: serialize_google_monitoring_v3_NotificationChannelDescriptor,
    responseDeserialize: deserialize_google_monitoring_v3_NotificationChannelDescriptor,
  },
  // Lists the notification channels that have been created for the project.
  listNotificationChannels: {
    path: '/google.monitoring.v3.NotificationChannelService/ListNotificationChannels',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_notification_service_pb.ListNotificationChannelsRequest,
    responseType: google_monitoring_v3_notification_service_pb.ListNotificationChannelsResponse,
    requestSerialize: serialize_google_monitoring_v3_ListNotificationChannelsRequest,
    requestDeserialize: deserialize_google_monitoring_v3_ListNotificationChannelsRequest,
    responseSerialize: serialize_google_monitoring_v3_ListNotificationChannelsResponse,
    responseDeserialize: deserialize_google_monitoring_v3_ListNotificationChannelsResponse,
  },
  // Gets a single notification channel. The channel includes the relevant
  // configuration details with which the channel was created. However, the
  // response may truncate or omit passwords, API keys, or other private key
  // matter and thus the response may not be 100% identical to the information
  // that was supplied in the call to the create method.
  getNotificationChannel: {
    path: '/google.monitoring.v3.NotificationChannelService/GetNotificationChannel',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_notification_service_pb.GetNotificationChannelRequest,
    responseType: google_monitoring_v3_notification_pb.NotificationChannel,
    requestSerialize: serialize_google_monitoring_v3_GetNotificationChannelRequest,
    requestDeserialize: deserialize_google_monitoring_v3_GetNotificationChannelRequest,
    responseSerialize: serialize_google_monitoring_v3_NotificationChannel,
    responseDeserialize: deserialize_google_monitoring_v3_NotificationChannel,
  },
  // Creates a new notification channel, representing a single notification
  // endpoint such as an email address, SMS number, or PagerDuty service.
  createNotificationChannel: {
    path: '/google.monitoring.v3.NotificationChannelService/CreateNotificationChannel',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_notification_service_pb.CreateNotificationChannelRequest,
    responseType: google_monitoring_v3_notification_pb.NotificationChannel,
    requestSerialize: serialize_google_monitoring_v3_CreateNotificationChannelRequest,
    requestDeserialize: deserialize_google_monitoring_v3_CreateNotificationChannelRequest,
    responseSerialize: serialize_google_monitoring_v3_NotificationChannel,
    responseDeserialize: deserialize_google_monitoring_v3_NotificationChannel,
  },
  // Updates a notification channel. Fields not specified in the field mask
  // remain unchanged.
  updateNotificationChannel: {
    path: '/google.monitoring.v3.NotificationChannelService/UpdateNotificationChannel',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_notification_service_pb.UpdateNotificationChannelRequest,
    responseType: google_monitoring_v3_notification_pb.NotificationChannel,
    requestSerialize: serialize_google_monitoring_v3_UpdateNotificationChannelRequest,
    requestDeserialize: deserialize_google_monitoring_v3_UpdateNotificationChannelRequest,
    responseSerialize: serialize_google_monitoring_v3_NotificationChannel,
    responseDeserialize: deserialize_google_monitoring_v3_NotificationChannel,
  },
  // Deletes a notification channel.
  deleteNotificationChannel: {
    path: '/google.monitoring.v3.NotificationChannelService/DeleteNotificationChannel',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_notification_service_pb.DeleteNotificationChannelRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_monitoring_v3_DeleteNotificationChannelRequest,
    requestDeserialize: deserialize_google_monitoring_v3_DeleteNotificationChannelRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Causes a verification code to be delivered to the channel. The code
  // can then be supplied in `VerifyNotificationChannel` to verify the channel.
  sendNotificationChannelVerificationCode: {
    path: '/google.monitoring.v3.NotificationChannelService/SendNotificationChannelVerificationCode',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_notification_service_pb.SendNotificationChannelVerificationCodeRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_monitoring_v3_SendNotificationChannelVerificationCodeRequest,
    requestDeserialize: deserialize_google_monitoring_v3_SendNotificationChannelVerificationCodeRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Requests a verification code for an already verified channel that can then
  // be used in a call to VerifyNotificationChannel() on a different channel
  // with an equivalent identity in the same or in a different project. This
  // makes it possible to copy a channel between projects without requiring
  // manual reverification of the channel. If the channel is not in the
  // verified state, this method will fail (in other words, this may only be
  // used if the SendNotificationChannelVerificationCode and
  // VerifyNotificationChannel paths have already been used to put the given
  // channel into the verified state).
  //
  // There is no guarantee that the verification codes returned by this method
  // will be of a similar structure or form as the ones that are delivered
  // to the channel via SendNotificationChannelVerificationCode; while
  // VerifyNotificationChannel() will recognize both the codes delivered via
  // SendNotificationChannelVerificationCode() and returned from
  // GetNotificationChannelVerificationCode(), it is typically the case that
  // the verification codes delivered via
  // SendNotificationChannelVerificationCode() will be shorter and also
  // have a shorter expiration (e.g. codes such as "G-123456") whereas
  // GetVerificationCode() will typically return a much longer, websafe base
  // 64 encoded string that has a longer expiration time.
  getNotificationChannelVerificationCode: {
    path: '/google.monitoring.v3.NotificationChannelService/GetNotificationChannelVerificationCode',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_notification_service_pb.GetNotificationChannelVerificationCodeRequest,
    responseType: google_monitoring_v3_notification_service_pb.GetNotificationChannelVerificationCodeResponse,
    requestSerialize: serialize_google_monitoring_v3_GetNotificationChannelVerificationCodeRequest,
    requestDeserialize: deserialize_google_monitoring_v3_GetNotificationChannelVerificationCodeRequest,
    responseSerialize: serialize_google_monitoring_v3_GetNotificationChannelVerificationCodeResponse,
    responseDeserialize: deserialize_google_monitoring_v3_GetNotificationChannelVerificationCodeResponse,
  },
  // Verifies a `NotificationChannel` by proving receipt of the code
  // delivered to the channel as a result of calling
  // `SendNotificationChannelVerificationCode`.
  verifyNotificationChannel: {
    path: '/google.monitoring.v3.NotificationChannelService/VerifyNotificationChannel',
    requestStream: false,
    responseStream: false,
    requestType: google_monitoring_v3_notification_service_pb.VerifyNotificationChannelRequest,
    responseType: google_monitoring_v3_notification_pb.NotificationChannel,
    requestSerialize: serialize_google_monitoring_v3_VerifyNotificationChannelRequest,
    requestDeserialize: deserialize_google_monitoring_v3_VerifyNotificationChannelRequest,
    responseSerialize: serialize_google_monitoring_v3_NotificationChannel,
    responseDeserialize: deserialize_google_monitoring_v3_NotificationChannel,
  },
};

exports.NotificationChannelServiceClient = grpc.makeGenericClientConstructor(NotificationChannelServiceService);
