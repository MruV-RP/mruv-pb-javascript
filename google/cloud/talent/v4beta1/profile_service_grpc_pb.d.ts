// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.talent.v4beta1
// file: google/cloud/talent/v4beta1/profile_service.proto

import * as google_cloud_talent_v4beta1_profile_service_pb from "../../../../google/cloud/talent/v4beta1/profile_service_pb";
import * as google_cloud_talent_v4beta1_profile_pb from "../../../../google/cloud/talent/v4beta1/profile_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IProfileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listProfiles: grpc.MethodDefinition<google_cloud_talent_v4beta1_profile_service_pb.ListProfilesRequest, google_cloud_talent_v4beta1_profile_service_pb.ListProfilesResponse>;
  createProfile: grpc.MethodDefinition<google_cloud_talent_v4beta1_profile_service_pb.CreateProfileRequest, google_cloud_talent_v4beta1_profile_pb.Profile>;
  getProfile: grpc.MethodDefinition<google_cloud_talent_v4beta1_profile_service_pb.GetProfileRequest, google_cloud_talent_v4beta1_profile_pb.Profile>;
  updateProfile: grpc.MethodDefinition<google_cloud_talent_v4beta1_profile_service_pb.UpdateProfileRequest, google_cloud_talent_v4beta1_profile_pb.Profile>;
  deleteProfile: grpc.MethodDefinition<google_cloud_talent_v4beta1_profile_service_pb.DeleteProfileRequest, google_protobuf_empty_pb.Empty>;
  searchProfiles: grpc.MethodDefinition<google_cloud_talent_v4beta1_profile_service_pb.SearchProfilesRequest, google_cloud_talent_v4beta1_profile_service_pb.SearchProfilesResponse>;
}

export const ProfileServiceService: IProfileServiceService;

export class ProfileServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listProfiles(argument: google_cloud_talent_v4beta1_profile_service_pb.ListProfilesRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_profile_service_pb.ListProfilesResponse>): grpc.ClientUnaryCall;
  listProfiles(argument: google_cloud_talent_v4beta1_profile_service_pb.ListProfilesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_profile_service_pb.ListProfilesResponse>): grpc.ClientUnaryCall;
  listProfiles(argument: google_cloud_talent_v4beta1_profile_service_pb.ListProfilesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_profile_service_pb.ListProfilesResponse>): grpc.ClientUnaryCall;
  createProfile(argument: google_cloud_talent_v4beta1_profile_service_pb.CreateProfileRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_profile_pb.Profile>): grpc.ClientUnaryCall;
  createProfile(argument: google_cloud_talent_v4beta1_profile_service_pb.CreateProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_profile_pb.Profile>): grpc.ClientUnaryCall;
  createProfile(argument: google_cloud_talent_v4beta1_profile_service_pb.CreateProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_profile_pb.Profile>): grpc.ClientUnaryCall;
  getProfile(argument: google_cloud_talent_v4beta1_profile_service_pb.GetProfileRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_profile_pb.Profile>): grpc.ClientUnaryCall;
  getProfile(argument: google_cloud_talent_v4beta1_profile_service_pb.GetProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_profile_pb.Profile>): grpc.ClientUnaryCall;
  getProfile(argument: google_cloud_talent_v4beta1_profile_service_pb.GetProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_profile_pb.Profile>): grpc.ClientUnaryCall;
  updateProfile(argument: google_cloud_talent_v4beta1_profile_service_pb.UpdateProfileRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_profile_pb.Profile>): grpc.ClientUnaryCall;
  updateProfile(argument: google_cloud_talent_v4beta1_profile_service_pb.UpdateProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_profile_pb.Profile>): grpc.ClientUnaryCall;
  updateProfile(argument: google_cloud_talent_v4beta1_profile_service_pb.UpdateProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_profile_pb.Profile>): grpc.ClientUnaryCall;
  deleteProfile(argument: google_cloud_talent_v4beta1_profile_service_pb.DeleteProfileRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteProfile(argument: google_cloud_talent_v4beta1_profile_service_pb.DeleteProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteProfile(argument: google_cloud_talent_v4beta1_profile_service_pb.DeleteProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  searchProfiles(argument: google_cloud_talent_v4beta1_profile_service_pb.SearchProfilesRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_profile_service_pb.SearchProfilesResponse>): grpc.ClientUnaryCall;
  searchProfiles(argument: google_cloud_talent_v4beta1_profile_service_pb.SearchProfilesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_profile_service_pb.SearchProfilesResponse>): grpc.ClientUnaryCall;
  searchProfiles(argument: google_cloud_talent_v4beta1_profile_service_pb.SearchProfilesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_profile_service_pb.SearchProfilesResponse>): grpc.ClientUnaryCall;
}
