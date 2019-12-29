// GENERATED CODE -- DO NOT EDIT!

// package: google.devtools.cloudprofiler.v2
// file: google/devtools/cloudprofiler/v2/profiler.proto

import * as google_devtools_cloudprofiler_v2_profiler_pb from "../../../../google/devtools/cloudprofiler/v2/profiler_pb";
import * as grpc from "grpc";

interface IProfilerServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createProfile: grpc.MethodDefinition<google_devtools_cloudprofiler_v2_profiler_pb.CreateProfileRequest, google_devtools_cloudprofiler_v2_profiler_pb.Profile>;
  createOfflineProfile: grpc.MethodDefinition<google_devtools_cloudprofiler_v2_profiler_pb.CreateOfflineProfileRequest, google_devtools_cloudprofiler_v2_profiler_pb.Profile>;
  updateProfile: grpc.MethodDefinition<google_devtools_cloudprofiler_v2_profiler_pb.UpdateProfileRequest, google_devtools_cloudprofiler_v2_profiler_pb.Profile>;
}

export const ProfilerServiceService: IProfilerServiceService;

export class ProfilerServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createProfile(argument: google_devtools_cloudprofiler_v2_profiler_pb.CreateProfileRequest, callback: grpc.requestCallback<google_devtools_cloudprofiler_v2_profiler_pb.Profile>): grpc.ClientUnaryCall;
  createProfile(argument: google_devtools_cloudprofiler_v2_profiler_pb.CreateProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudprofiler_v2_profiler_pb.Profile>): grpc.ClientUnaryCall;
  createProfile(argument: google_devtools_cloudprofiler_v2_profiler_pb.CreateProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudprofiler_v2_profiler_pb.Profile>): grpc.ClientUnaryCall;
  createOfflineProfile(argument: google_devtools_cloudprofiler_v2_profiler_pb.CreateOfflineProfileRequest, callback: grpc.requestCallback<google_devtools_cloudprofiler_v2_profiler_pb.Profile>): grpc.ClientUnaryCall;
  createOfflineProfile(argument: google_devtools_cloudprofiler_v2_profiler_pb.CreateOfflineProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudprofiler_v2_profiler_pb.Profile>): grpc.ClientUnaryCall;
  createOfflineProfile(argument: google_devtools_cloudprofiler_v2_profiler_pb.CreateOfflineProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudprofiler_v2_profiler_pb.Profile>): grpc.ClientUnaryCall;
  updateProfile(argument: google_devtools_cloudprofiler_v2_profiler_pb.UpdateProfileRequest, callback: grpc.requestCallback<google_devtools_cloudprofiler_v2_profiler_pb.Profile>): grpc.ClientUnaryCall;
  updateProfile(argument: google_devtools_cloudprofiler_v2_profiler_pb.UpdateProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudprofiler_v2_profiler_pb.Profile>): grpc.ClientUnaryCall;
  updateProfile(argument: google_devtools_cloudprofiler_v2_profiler_pb.UpdateProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_cloudprofiler_v2_profiler_pb.Profile>): grpc.ClientUnaryCall;
}
