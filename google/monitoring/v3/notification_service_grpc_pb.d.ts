// GENERATED CODE -- DO NOT EDIT!

// package: google.monitoring.v3
// file: google/monitoring/v3/notification_service.proto

import * as google_monitoring_v3_notification_service_pb from "../../../google/monitoring/v3/notification_service_pb";
import * as google_monitoring_v3_notification_pb from "../../../google/monitoring/v3/notification_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface INotificationChannelServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listNotificationChannelDescriptors: grpc.MethodDefinition<google_monitoring_v3_notification_service_pb.ListNotificationChannelDescriptorsRequest, google_monitoring_v3_notification_service_pb.ListNotificationChannelDescriptorsResponse>;
  getNotificationChannelDescriptor: grpc.MethodDefinition<google_monitoring_v3_notification_service_pb.GetNotificationChannelDescriptorRequest, google_monitoring_v3_notification_pb.NotificationChannelDescriptor>;
  listNotificationChannels: grpc.MethodDefinition<google_monitoring_v3_notification_service_pb.ListNotificationChannelsRequest, google_monitoring_v3_notification_service_pb.ListNotificationChannelsResponse>;
  getNotificationChannel: grpc.MethodDefinition<google_monitoring_v3_notification_service_pb.GetNotificationChannelRequest, google_monitoring_v3_notification_pb.NotificationChannel>;
  createNotificationChannel: grpc.MethodDefinition<google_monitoring_v3_notification_service_pb.CreateNotificationChannelRequest, google_monitoring_v3_notification_pb.NotificationChannel>;
  updateNotificationChannel: grpc.MethodDefinition<google_monitoring_v3_notification_service_pb.UpdateNotificationChannelRequest, google_monitoring_v3_notification_pb.NotificationChannel>;
  deleteNotificationChannel: grpc.MethodDefinition<google_monitoring_v3_notification_service_pb.DeleteNotificationChannelRequest, google_protobuf_empty_pb.Empty>;
  sendNotificationChannelVerificationCode: grpc.MethodDefinition<google_monitoring_v3_notification_service_pb.SendNotificationChannelVerificationCodeRequest, google_protobuf_empty_pb.Empty>;
  getNotificationChannelVerificationCode: grpc.MethodDefinition<google_monitoring_v3_notification_service_pb.GetNotificationChannelVerificationCodeRequest, google_monitoring_v3_notification_service_pb.GetNotificationChannelVerificationCodeResponse>;
  verifyNotificationChannel: grpc.MethodDefinition<google_monitoring_v3_notification_service_pb.VerifyNotificationChannelRequest, google_monitoring_v3_notification_pb.NotificationChannel>;
}

export const NotificationChannelServiceService: INotificationChannelServiceService;

export class NotificationChannelServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listNotificationChannelDescriptors(argument: google_monitoring_v3_notification_service_pb.ListNotificationChannelDescriptorsRequest, callback: grpc.requestCallback<google_monitoring_v3_notification_service_pb.ListNotificationChannelDescriptorsResponse>): grpc.ClientUnaryCall;
  listNotificationChannelDescriptors(argument: google_monitoring_v3_notification_service_pb.ListNotificationChannelDescriptorsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_notification_service_pb.ListNotificationChannelDescriptorsResponse>): grpc.ClientUnaryCall;
  listNotificationChannelDescriptors(argument: google_monitoring_v3_notification_service_pb.ListNotificationChannelDescriptorsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_notification_service_pb.ListNotificationChannelDescriptorsResponse>): grpc.ClientUnaryCall;
  getNotificationChannelDescriptor(argument: google_monitoring_v3_notification_service_pb.GetNotificationChannelDescriptorRequest, callback: grpc.requestCallback<google_monitoring_v3_notification_pb.NotificationChannelDescriptor>): grpc.ClientUnaryCall;
  getNotificationChannelDescriptor(argument: google_monitoring_v3_notification_service_pb.GetNotificationChannelDescriptorRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_notification_pb.NotificationChannelDescriptor>): grpc.ClientUnaryCall;
  getNotificationChannelDescriptor(argument: google_monitoring_v3_notification_service_pb.GetNotificationChannelDescriptorRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_notification_pb.NotificationChannelDescriptor>): grpc.ClientUnaryCall;
  listNotificationChannels(argument: google_monitoring_v3_notification_service_pb.ListNotificationChannelsRequest, callback: grpc.requestCallback<google_monitoring_v3_notification_service_pb.ListNotificationChannelsResponse>): grpc.ClientUnaryCall;
  listNotificationChannels(argument: google_monitoring_v3_notification_service_pb.ListNotificationChannelsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_notification_service_pb.ListNotificationChannelsResponse>): grpc.ClientUnaryCall;
  listNotificationChannels(argument: google_monitoring_v3_notification_service_pb.ListNotificationChannelsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_notification_service_pb.ListNotificationChannelsResponse>): grpc.ClientUnaryCall;
  getNotificationChannel(argument: google_monitoring_v3_notification_service_pb.GetNotificationChannelRequest, callback: grpc.requestCallback<google_monitoring_v3_notification_pb.NotificationChannel>): grpc.ClientUnaryCall;
  getNotificationChannel(argument: google_monitoring_v3_notification_service_pb.GetNotificationChannelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_notification_pb.NotificationChannel>): grpc.ClientUnaryCall;
  getNotificationChannel(argument: google_monitoring_v3_notification_service_pb.GetNotificationChannelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_notification_pb.NotificationChannel>): grpc.ClientUnaryCall;
  createNotificationChannel(argument: google_monitoring_v3_notification_service_pb.CreateNotificationChannelRequest, callback: grpc.requestCallback<google_monitoring_v3_notification_pb.NotificationChannel>): grpc.ClientUnaryCall;
  createNotificationChannel(argument: google_monitoring_v3_notification_service_pb.CreateNotificationChannelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_notification_pb.NotificationChannel>): grpc.ClientUnaryCall;
  createNotificationChannel(argument: google_monitoring_v3_notification_service_pb.CreateNotificationChannelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_notification_pb.NotificationChannel>): grpc.ClientUnaryCall;
  updateNotificationChannel(argument: google_monitoring_v3_notification_service_pb.UpdateNotificationChannelRequest, callback: grpc.requestCallback<google_monitoring_v3_notification_pb.NotificationChannel>): grpc.ClientUnaryCall;
  updateNotificationChannel(argument: google_monitoring_v3_notification_service_pb.UpdateNotificationChannelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_notification_pb.NotificationChannel>): grpc.ClientUnaryCall;
  updateNotificationChannel(argument: google_monitoring_v3_notification_service_pb.UpdateNotificationChannelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_notification_pb.NotificationChannel>): grpc.ClientUnaryCall;
  deleteNotificationChannel(argument: google_monitoring_v3_notification_service_pb.DeleteNotificationChannelRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteNotificationChannel(argument: google_monitoring_v3_notification_service_pb.DeleteNotificationChannelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteNotificationChannel(argument: google_monitoring_v3_notification_service_pb.DeleteNotificationChannelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  sendNotificationChannelVerificationCode(argument: google_monitoring_v3_notification_service_pb.SendNotificationChannelVerificationCodeRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  sendNotificationChannelVerificationCode(argument: google_monitoring_v3_notification_service_pb.SendNotificationChannelVerificationCodeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  sendNotificationChannelVerificationCode(argument: google_monitoring_v3_notification_service_pb.SendNotificationChannelVerificationCodeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getNotificationChannelVerificationCode(argument: google_monitoring_v3_notification_service_pb.GetNotificationChannelVerificationCodeRequest, callback: grpc.requestCallback<google_monitoring_v3_notification_service_pb.GetNotificationChannelVerificationCodeResponse>): grpc.ClientUnaryCall;
  getNotificationChannelVerificationCode(argument: google_monitoring_v3_notification_service_pb.GetNotificationChannelVerificationCodeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_notification_service_pb.GetNotificationChannelVerificationCodeResponse>): grpc.ClientUnaryCall;
  getNotificationChannelVerificationCode(argument: google_monitoring_v3_notification_service_pb.GetNotificationChannelVerificationCodeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_notification_service_pb.GetNotificationChannelVerificationCodeResponse>): grpc.ClientUnaryCall;
  verifyNotificationChannel(argument: google_monitoring_v3_notification_service_pb.VerifyNotificationChannelRequest, callback: grpc.requestCallback<google_monitoring_v3_notification_pb.NotificationChannel>): grpc.ClientUnaryCall;
  verifyNotificationChannel(argument: google_monitoring_v3_notification_service_pb.VerifyNotificationChannelRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_notification_pb.NotificationChannel>): grpc.ClientUnaryCall;
  verifyNotificationChannel(argument: google_monitoring_v3_notification_service_pb.VerifyNotificationChannelRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_monitoring_v3_notification_pb.NotificationChannel>): grpc.ClientUnaryCall;
}
