// GENERATED CODE -- DO NOT EDIT!

// package: google.pubsub.v1beta2
// file: google/pubsub/v1beta2/pubsub.proto

import * as google_pubsub_v1beta2_pubsub_pb from "../../../google/pubsub/v1beta2/pubsub_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ISubscriberService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createSubscription: grpc.MethodDefinition<google_pubsub_v1beta2_pubsub_pb.Subscription, google_pubsub_v1beta2_pubsub_pb.Subscription>;
  getSubscription: grpc.MethodDefinition<google_pubsub_v1beta2_pubsub_pb.GetSubscriptionRequest, google_pubsub_v1beta2_pubsub_pb.Subscription>;
  listSubscriptions: grpc.MethodDefinition<google_pubsub_v1beta2_pubsub_pb.ListSubscriptionsRequest, google_pubsub_v1beta2_pubsub_pb.ListSubscriptionsResponse>;
  deleteSubscription: grpc.MethodDefinition<google_pubsub_v1beta2_pubsub_pb.DeleteSubscriptionRequest, google_protobuf_empty_pb.Empty>;
  modifyAckDeadline: grpc.MethodDefinition<google_pubsub_v1beta2_pubsub_pb.ModifyAckDeadlineRequest, google_protobuf_empty_pb.Empty>;
  acknowledge: grpc.MethodDefinition<google_pubsub_v1beta2_pubsub_pb.AcknowledgeRequest, google_protobuf_empty_pb.Empty>;
  pull: grpc.MethodDefinition<google_pubsub_v1beta2_pubsub_pb.PullRequest, google_pubsub_v1beta2_pubsub_pb.PullResponse>;
  modifyPushConfig: grpc.MethodDefinition<google_pubsub_v1beta2_pubsub_pb.ModifyPushConfigRequest, google_protobuf_empty_pb.Empty>;
}

export const SubscriberService: ISubscriberService;

export class SubscriberClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createSubscription(argument: google_pubsub_v1beta2_pubsub_pb.Subscription, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.Subscription>): grpc.ClientUnaryCall;
  createSubscription(argument: google_pubsub_v1beta2_pubsub_pb.Subscription, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.Subscription>): grpc.ClientUnaryCall;
  createSubscription(argument: google_pubsub_v1beta2_pubsub_pb.Subscription, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.Subscription>): grpc.ClientUnaryCall;
  getSubscription(argument: google_pubsub_v1beta2_pubsub_pb.GetSubscriptionRequest, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.Subscription>): grpc.ClientUnaryCall;
  getSubscription(argument: google_pubsub_v1beta2_pubsub_pb.GetSubscriptionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.Subscription>): grpc.ClientUnaryCall;
  getSubscription(argument: google_pubsub_v1beta2_pubsub_pb.GetSubscriptionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.Subscription>): grpc.ClientUnaryCall;
  listSubscriptions(argument: google_pubsub_v1beta2_pubsub_pb.ListSubscriptionsRequest, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.ListSubscriptionsResponse>): grpc.ClientUnaryCall;
  listSubscriptions(argument: google_pubsub_v1beta2_pubsub_pb.ListSubscriptionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.ListSubscriptionsResponse>): grpc.ClientUnaryCall;
  listSubscriptions(argument: google_pubsub_v1beta2_pubsub_pb.ListSubscriptionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.ListSubscriptionsResponse>): grpc.ClientUnaryCall;
  deleteSubscription(argument: google_pubsub_v1beta2_pubsub_pb.DeleteSubscriptionRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteSubscription(argument: google_pubsub_v1beta2_pubsub_pb.DeleteSubscriptionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteSubscription(argument: google_pubsub_v1beta2_pubsub_pb.DeleteSubscriptionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  modifyAckDeadline(argument: google_pubsub_v1beta2_pubsub_pb.ModifyAckDeadlineRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  modifyAckDeadline(argument: google_pubsub_v1beta2_pubsub_pb.ModifyAckDeadlineRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  modifyAckDeadline(argument: google_pubsub_v1beta2_pubsub_pb.ModifyAckDeadlineRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  acknowledge(argument: google_pubsub_v1beta2_pubsub_pb.AcknowledgeRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  acknowledge(argument: google_pubsub_v1beta2_pubsub_pb.AcknowledgeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  acknowledge(argument: google_pubsub_v1beta2_pubsub_pb.AcknowledgeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  pull(argument: google_pubsub_v1beta2_pubsub_pb.PullRequest, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.PullResponse>): grpc.ClientUnaryCall;
  pull(argument: google_pubsub_v1beta2_pubsub_pb.PullRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.PullResponse>): grpc.ClientUnaryCall;
  pull(argument: google_pubsub_v1beta2_pubsub_pb.PullRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.PullResponse>): grpc.ClientUnaryCall;
  modifyPushConfig(argument: google_pubsub_v1beta2_pubsub_pb.ModifyPushConfigRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  modifyPushConfig(argument: google_pubsub_v1beta2_pubsub_pb.ModifyPushConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  modifyPushConfig(argument: google_pubsub_v1beta2_pubsub_pb.ModifyPushConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}

interface IPublisherService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createTopic: grpc.MethodDefinition<google_pubsub_v1beta2_pubsub_pb.Topic, google_pubsub_v1beta2_pubsub_pb.Topic>;
  publish: grpc.MethodDefinition<google_pubsub_v1beta2_pubsub_pb.PublishRequest, google_pubsub_v1beta2_pubsub_pb.PublishResponse>;
  getTopic: grpc.MethodDefinition<google_pubsub_v1beta2_pubsub_pb.GetTopicRequest, google_pubsub_v1beta2_pubsub_pb.Topic>;
  listTopics: grpc.MethodDefinition<google_pubsub_v1beta2_pubsub_pb.ListTopicsRequest, google_pubsub_v1beta2_pubsub_pb.ListTopicsResponse>;
  listTopicSubscriptions: grpc.MethodDefinition<google_pubsub_v1beta2_pubsub_pb.ListTopicSubscriptionsRequest, google_pubsub_v1beta2_pubsub_pb.ListTopicSubscriptionsResponse>;
  deleteTopic: grpc.MethodDefinition<google_pubsub_v1beta2_pubsub_pb.DeleteTopicRequest, google_protobuf_empty_pb.Empty>;
}

export const PublisherService: IPublisherService;

export class PublisherClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createTopic(argument: google_pubsub_v1beta2_pubsub_pb.Topic, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.Topic>): grpc.ClientUnaryCall;
  createTopic(argument: google_pubsub_v1beta2_pubsub_pb.Topic, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.Topic>): grpc.ClientUnaryCall;
  createTopic(argument: google_pubsub_v1beta2_pubsub_pb.Topic, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.Topic>): grpc.ClientUnaryCall;
  publish(argument: google_pubsub_v1beta2_pubsub_pb.PublishRequest, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.PublishResponse>): grpc.ClientUnaryCall;
  publish(argument: google_pubsub_v1beta2_pubsub_pb.PublishRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.PublishResponse>): grpc.ClientUnaryCall;
  publish(argument: google_pubsub_v1beta2_pubsub_pb.PublishRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.PublishResponse>): grpc.ClientUnaryCall;
  getTopic(argument: google_pubsub_v1beta2_pubsub_pb.GetTopicRequest, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.Topic>): grpc.ClientUnaryCall;
  getTopic(argument: google_pubsub_v1beta2_pubsub_pb.GetTopicRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.Topic>): grpc.ClientUnaryCall;
  getTopic(argument: google_pubsub_v1beta2_pubsub_pb.GetTopicRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.Topic>): grpc.ClientUnaryCall;
  listTopics(argument: google_pubsub_v1beta2_pubsub_pb.ListTopicsRequest, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.ListTopicsResponse>): grpc.ClientUnaryCall;
  listTopics(argument: google_pubsub_v1beta2_pubsub_pb.ListTopicsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.ListTopicsResponse>): grpc.ClientUnaryCall;
  listTopics(argument: google_pubsub_v1beta2_pubsub_pb.ListTopicsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.ListTopicsResponse>): grpc.ClientUnaryCall;
  listTopicSubscriptions(argument: google_pubsub_v1beta2_pubsub_pb.ListTopicSubscriptionsRequest, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.ListTopicSubscriptionsResponse>): grpc.ClientUnaryCall;
  listTopicSubscriptions(argument: google_pubsub_v1beta2_pubsub_pb.ListTopicSubscriptionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.ListTopicSubscriptionsResponse>): grpc.ClientUnaryCall;
  listTopicSubscriptions(argument: google_pubsub_v1beta2_pubsub_pb.ListTopicSubscriptionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_pubsub_v1beta2_pubsub_pb.ListTopicSubscriptionsResponse>): grpc.ClientUnaryCall;
  deleteTopic(argument: google_pubsub_v1beta2_pubsub_pb.DeleteTopicRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTopic(argument: google_pubsub_v1beta2_pubsub_pb.DeleteTopicRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTopic(argument: google_pubsub_v1beta2_pubsub_pb.DeleteTopicRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
