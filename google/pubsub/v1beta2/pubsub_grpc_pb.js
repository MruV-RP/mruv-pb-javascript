// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// Copyright (c) 2015, Google Inc.
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
var google_pubsub_v1beta2_pubsub_pb = require('../../../google/pubsub/v1beta2/pubsub_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1beta2_AcknowledgeRequest(arg) {
  if (!(arg instanceof google_pubsub_v1beta2_pubsub_pb.AcknowledgeRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1beta2.AcknowledgeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1beta2_AcknowledgeRequest(buffer_arg) {
  return google_pubsub_v1beta2_pubsub_pb.AcknowledgeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1beta2_DeleteSubscriptionRequest(arg) {
  if (!(arg instanceof google_pubsub_v1beta2_pubsub_pb.DeleteSubscriptionRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1beta2.DeleteSubscriptionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1beta2_DeleteSubscriptionRequest(buffer_arg) {
  return google_pubsub_v1beta2_pubsub_pb.DeleteSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1beta2_DeleteTopicRequest(arg) {
  if (!(arg instanceof google_pubsub_v1beta2_pubsub_pb.DeleteTopicRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1beta2.DeleteTopicRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1beta2_DeleteTopicRequest(buffer_arg) {
  return google_pubsub_v1beta2_pubsub_pb.DeleteTopicRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1beta2_GetSubscriptionRequest(arg) {
  if (!(arg instanceof google_pubsub_v1beta2_pubsub_pb.GetSubscriptionRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1beta2.GetSubscriptionRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1beta2_GetSubscriptionRequest(buffer_arg) {
  return google_pubsub_v1beta2_pubsub_pb.GetSubscriptionRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1beta2_GetTopicRequest(arg) {
  if (!(arg instanceof google_pubsub_v1beta2_pubsub_pb.GetTopicRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1beta2.GetTopicRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1beta2_GetTopicRequest(buffer_arg) {
  return google_pubsub_v1beta2_pubsub_pb.GetTopicRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1beta2_ListSubscriptionsRequest(arg) {
  if (!(arg instanceof google_pubsub_v1beta2_pubsub_pb.ListSubscriptionsRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1beta2.ListSubscriptionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1beta2_ListSubscriptionsRequest(buffer_arg) {
  return google_pubsub_v1beta2_pubsub_pb.ListSubscriptionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1beta2_ListSubscriptionsResponse(arg) {
  if (!(arg instanceof google_pubsub_v1beta2_pubsub_pb.ListSubscriptionsResponse)) {
    throw new Error('Expected argument of type google.pubsub.v1beta2.ListSubscriptionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1beta2_ListSubscriptionsResponse(buffer_arg) {
  return google_pubsub_v1beta2_pubsub_pb.ListSubscriptionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1beta2_ListTopicSubscriptionsRequest(arg) {
  if (!(arg instanceof google_pubsub_v1beta2_pubsub_pb.ListTopicSubscriptionsRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1beta2.ListTopicSubscriptionsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1beta2_ListTopicSubscriptionsRequest(buffer_arg) {
  return google_pubsub_v1beta2_pubsub_pb.ListTopicSubscriptionsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1beta2_ListTopicSubscriptionsResponse(arg) {
  if (!(arg instanceof google_pubsub_v1beta2_pubsub_pb.ListTopicSubscriptionsResponse)) {
    throw new Error('Expected argument of type google.pubsub.v1beta2.ListTopicSubscriptionsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1beta2_ListTopicSubscriptionsResponse(buffer_arg) {
  return google_pubsub_v1beta2_pubsub_pb.ListTopicSubscriptionsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1beta2_ListTopicsRequest(arg) {
  if (!(arg instanceof google_pubsub_v1beta2_pubsub_pb.ListTopicsRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1beta2.ListTopicsRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1beta2_ListTopicsRequest(buffer_arg) {
  return google_pubsub_v1beta2_pubsub_pb.ListTopicsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1beta2_ListTopicsResponse(arg) {
  if (!(arg instanceof google_pubsub_v1beta2_pubsub_pb.ListTopicsResponse)) {
    throw new Error('Expected argument of type google.pubsub.v1beta2.ListTopicsResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1beta2_ListTopicsResponse(buffer_arg) {
  return google_pubsub_v1beta2_pubsub_pb.ListTopicsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1beta2_ModifyAckDeadlineRequest(arg) {
  if (!(arg instanceof google_pubsub_v1beta2_pubsub_pb.ModifyAckDeadlineRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1beta2.ModifyAckDeadlineRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1beta2_ModifyAckDeadlineRequest(buffer_arg) {
  return google_pubsub_v1beta2_pubsub_pb.ModifyAckDeadlineRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1beta2_ModifyPushConfigRequest(arg) {
  if (!(arg instanceof google_pubsub_v1beta2_pubsub_pb.ModifyPushConfigRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1beta2.ModifyPushConfigRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1beta2_ModifyPushConfigRequest(buffer_arg) {
  return google_pubsub_v1beta2_pubsub_pb.ModifyPushConfigRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1beta2_PublishRequest(arg) {
  if (!(arg instanceof google_pubsub_v1beta2_pubsub_pb.PublishRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1beta2.PublishRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1beta2_PublishRequest(buffer_arg) {
  return google_pubsub_v1beta2_pubsub_pb.PublishRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1beta2_PublishResponse(arg) {
  if (!(arg instanceof google_pubsub_v1beta2_pubsub_pb.PublishResponse)) {
    throw new Error('Expected argument of type google.pubsub.v1beta2.PublishResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1beta2_PublishResponse(buffer_arg) {
  return google_pubsub_v1beta2_pubsub_pb.PublishResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1beta2_PullRequest(arg) {
  if (!(arg instanceof google_pubsub_v1beta2_pubsub_pb.PullRequest)) {
    throw new Error('Expected argument of type google.pubsub.v1beta2.PullRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1beta2_PullRequest(buffer_arg) {
  return google_pubsub_v1beta2_pubsub_pb.PullRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1beta2_PullResponse(arg) {
  if (!(arg instanceof google_pubsub_v1beta2_pubsub_pb.PullResponse)) {
    throw new Error('Expected argument of type google.pubsub.v1beta2.PullResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1beta2_PullResponse(buffer_arg) {
  return google_pubsub_v1beta2_pubsub_pb.PullResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1beta2_Subscription(arg) {
  if (!(arg instanceof google_pubsub_v1beta2_pubsub_pb.Subscription)) {
    throw new Error('Expected argument of type google.pubsub.v1beta2.Subscription');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1beta2_Subscription(buffer_arg) {
  return google_pubsub_v1beta2_pubsub_pb.Subscription.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_pubsub_v1beta2_Topic(arg) {
  if (!(arg instanceof google_pubsub_v1beta2_pubsub_pb.Topic)) {
    throw new Error('Expected argument of type google.pubsub.v1beta2.Topic');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_google_pubsub_v1beta2_Topic(buffer_arg) {
  return google_pubsub_v1beta2_pubsub_pb.Topic.deserializeBinary(new Uint8Array(buffer_arg));
}


// The service that an application uses to manipulate subscriptions and to
// consume messages from a subscription via the Pull method.
var SubscriberService = exports.SubscriberService = {
  // Creates a subscription to a given topic for a given subscriber.
  // If the subscription already exists, returns ALREADY_EXISTS.
  // If the corresponding topic doesn't exist, returns NOT_FOUND.
  //
  // If the name is not provided in the request, the server will assign a random
  // name for this subscription on the same project as the topic.
  createSubscription: {
    path: '/google.pubsub.v1beta2.Subscriber/CreateSubscription',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1beta2_pubsub_pb.Subscription,
    responseType: google_pubsub_v1beta2_pubsub_pb.Subscription,
    requestSerialize: serialize_google_pubsub_v1beta2_Subscription,
    requestDeserialize: deserialize_google_pubsub_v1beta2_Subscription,
    responseSerialize: serialize_google_pubsub_v1beta2_Subscription,
    responseDeserialize: deserialize_google_pubsub_v1beta2_Subscription,
  },
  // Gets the configuration details of a subscription.
  getSubscription: {
    path: '/google.pubsub.v1beta2.Subscriber/GetSubscription',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1beta2_pubsub_pb.GetSubscriptionRequest,
    responseType: google_pubsub_v1beta2_pubsub_pb.Subscription,
    requestSerialize: serialize_google_pubsub_v1beta2_GetSubscriptionRequest,
    requestDeserialize: deserialize_google_pubsub_v1beta2_GetSubscriptionRequest,
    responseSerialize: serialize_google_pubsub_v1beta2_Subscription,
    responseDeserialize: deserialize_google_pubsub_v1beta2_Subscription,
  },
  // Lists matching subscriptions.
  listSubscriptions: {
    path: '/google.pubsub.v1beta2.Subscriber/ListSubscriptions',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1beta2_pubsub_pb.ListSubscriptionsRequest,
    responseType: google_pubsub_v1beta2_pubsub_pb.ListSubscriptionsResponse,
    requestSerialize: serialize_google_pubsub_v1beta2_ListSubscriptionsRequest,
    requestDeserialize: deserialize_google_pubsub_v1beta2_ListSubscriptionsRequest,
    responseSerialize: serialize_google_pubsub_v1beta2_ListSubscriptionsResponse,
    responseDeserialize: deserialize_google_pubsub_v1beta2_ListSubscriptionsResponse,
  },
  // Deletes an existing subscription. All pending messages in the subscription
  // are immediately dropped. Calls to Pull after deletion will return
  // NOT_FOUND. After a subscription is deleted, a new one may be created with
  // the same name, but the new one has no association with the old
  // subscription, or its topic unless the same topic is specified.
  deleteSubscription: {
    path: '/google.pubsub.v1beta2.Subscriber/DeleteSubscription',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1beta2_pubsub_pb.DeleteSubscriptionRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_pubsub_v1beta2_DeleteSubscriptionRequest,
    requestDeserialize: deserialize_google_pubsub_v1beta2_DeleteSubscriptionRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Modifies the ack deadline for a specific message. This method is useful to
  // indicate that more time is needed to process a message by the subscriber,
  // or to make the message available for redelivery if the processing was
  // interrupted.
  modifyAckDeadline: {
    path: '/google.pubsub.v1beta2.Subscriber/ModifyAckDeadline',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1beta2_pubsub_pb.ModifyAckDeadlineRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_pubsub_v1beta2_ModifyAckDeadlineRequest,
    requestDeserialize: deserialize_google_pubsub_v1beta2_ModifyAckDeadlineRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Acknowledges the messages associated with the ack tokens in the
  // AcknowledgeRequest. The Pub/Sub system can remove the relevant messages
  // from the subscription.
  //
  // Acknowledging a message whose ack deadline has expired may succeed,
  // but such a message may be redelivered later. Acknowledging a message more
  // than once will not result in an error.
  acknowledge: {
    path: '/google.pubsub.v1beta2.Subscriber/Acknowledge',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1beta2_pubsub_pb.AcknowledgeRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_pubsub_v1beta2_AcknowledgeRequest,
    requestDeserialize: deserialize_google_pubsub_v1beta2_AcknowledgeRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
  // Pulls messages from the server. Returns an empty list if there are no
  // messages available in the backlog. The server may return UNAVAILABLE if
  // there are too many concurrent pull requests pending for the given
  // subscription.
  pull: {
    path: '/google.pubsub.v1beta2.Subscriber/Pull',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1beta2_pubsub_pb.PullRequest,
    responseType: google_pubsub_v1beta2_pubsub_pb.PullResponse,
    requestSerialize: serialize_google_pubsub_v1beta2_PullRequest,
    requestDeserialize: deserialize_google_pubsub_v1beta2_PullRequest,
    responseSerialize: serialize_google_pubsub_v1beta2_PullResponse,
    responseDeserialize: deserialize_google_pubsub_v1beta2_PullResponse,
  },
  // Modifies the PushConfig for a specified subscription.
  //
  // This may be used to change a push subscription to a pull one (signified
  // by an empty PushConfig) or vice versa, or change the endpoint URL and other
  // attributes of a push subscription. Messages will accumulate for
  // delivery continuously through the call regardless of changes to the
  // PushConfig.
  modifyPushConfig: {
    path: '/google.pubsub.v1beta2.Subscriber/ModifyPushConfig',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1beta2_pubsub_pb.ModifyPushConfigRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_pubsub_v1beta2_ModifyPushConfigRequest,
    requestDeserialize: deserialize_google_pubsub_v1beta2_ModifyPushConfigRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.SubscriberClient = grpc.makeGenericClientConstructor(SubscriberService);
// The service that an application uses to manipulate topics, and to send
// messages to a topic.
var PublisherService = exports.PublisherService = {
  // Creates the given topic with the given name.
  createTopic: {
    path: '/google.pubsub.v1beta2.Publisher/CreateTopic',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1beta2_pubsub_pb.Topic,
    responseType: google_pubsub_v1beta2_pubsub_pb.Topic,
    requestSerialize: serialize_google_pubsub_v1beta2_Topic,
    requestDeserialize: deserialize_google_pubsub_v1beta2_Topic,
    responseSerialize: serialize_google_pubsub_v1beta2_Topic,
    responseDeserialize: deserialize_google_pubsub_v1beta2_Topic,
  },
  // Adds one or more messages to the topic. Returns NOT_FOUND if the topic does
  // not exist.
  publish: {
    path: '/google.pubsub.v1beta2.Publisher/Publish',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1beta2_pubsub_pb.PublishRequest,
    responseType: google_pubsub_v1beta2_pubsub_pb.PublishResponse,
    requestSerialize: serialize_google_pubsub_v1beta2_PublishRequest,
    requestDeserialize: deserialize_google_pubsub_v1beta2_PublishRequest,
    responseSerialize: serialize_google_pubsub_v1beta2_PublishResponse,
    responseDeserialize: deserialize_google_pubsub_v1beta2_PublishResponse,
  },
  // Gets the configuration of a topic.
  getTopic: {
    path: '/google.pubsub.v1beta2.Publisher/GetTopic',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1beta2_pubsub_pb.GetTopicRequest,
    responseType: google_pubsub_v1beta2_pubsub_pb.Topic,
    requestSerialize: serialize_google_pubsub_v1beta2_GetTopicRequest,
    requestDeserialize: deserialize_google_pubsub_v1beta2_GetTopicRequest,
    responseSerialize: serialize_google_pubsub_v1beta2_Topic,
    responseDeserialize: deserialize_google_pubsub_v1beta2_Topic,
  },
  // Lists matching topics.
  listTopics: {
    path: '/google.pubsub.v1beta2.Publisher/ListTopics',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1beta2_pubsub_pb.ListTopicsRequest,
    responseType: google_pubsub_v1beta2_pubsub_pb.ListTopicsResponse,
    requestSerialize: serialize_google_pubsub_v1beta2_ListTopicsRequest,
    requestDeserialize: deserialize_google_pubsub_v1beta2_ListTopicsRequest,
    responseSerialize: serialize_google_pubsub_v1beta2_ListTopicsResponse,
    responseDeserialize: deserialize_google_pubsub_v1beta2_ListTopicsResponse,
  },
  // Lists the name of the subscriptions for this topic.
  listTopicSubscriptions: {
    path: '/google.pubsub.v1beta2.Publisher/ListTopicSubscriptions',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1beta2_pubsub_pb.ListTopicSubscriptionsRequest,
    responseType: google_pubsub_v1beta2_pubsub_pb.ListTopicSubscriptionsResponse,
    requestSerialize: serialize_google_pubsub_v1beta2_ListTopicSubscriptionsRequest,
    requestDeserialize: deserialize_google_pubsub_v1beta2_ListTopicSubscriptionsRequest,
    responseSerialize: serialize_google_pubsub_v1beta2_ListTopicSubscriptionsResponse,
    responseDeserialize: deserialize_google_pubsub_v1beta2_ListTopicSubscriptionsResponse,
  },
  // Deletes the topic with the given name. Returns NOT_FOUND if the topic does
  // not exist. After a topic is deleted, a new topic may be created with the
  // same name; this is an entirely new topic with none of the old
  // configuration or subscriptions. Existing subscriptions to this topic are
  // not deleted.
  deleteTopic: {
    path: '/google.pubsub.v1beta2.Publisher/DeleteTopic',
    requestStream: false,
    responseStream: false,
    requestType: google_pubsub_v1beta2_pubsub_pb.DeleteTopicRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_google_pubsub_v1beta2_DeleteTopicRequest,
    requestDeserialize: deserialize_google_pubsub_v1beta2_DeleteTopicRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.PublisherClient = grpc.makeGenericClientConstructor(PublisherService);
