// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.functions.v1beta2
// file: google/cloud/functions/v1beta2/functions.proto

import * as google_cloud_functions_v1beta2_functions_pb from "../../../../google/cloud/functions/v1beta2/functions_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as grpc from "grpc";

interface ICloudFunctionsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listFunctions: grpc.MethodDefinition<google_cloud_functions_v1beta2_functions_pb.ListFunctionsRequest, google_cloud_functions_v1beta2_functions_pb.ListFunctionsResponse>;
  getFunction: grpc.MethodDefinition<google_cloud_functions_v1beta2_functions_pb.GetFunctionRequest, google_cloud_functions_v1beta2_functions_pb.CloudFunction>;
  createFunction: grpc.MethodDefinition<google_cloud_functions_v1beta2_functions_pb.CreateFunctionRequest, google_longrunning_operations_pb.Operation>;
  updateFunction: grpc.MethodDefinition<google_cloud_functions_v1beta2_functions_pb.UpdateFunctionRequest, google_longrunning_operations_pb.Operation>;
  deleteFunction: grpc.MethodDefinition<google_cloud_functions_v1beta2_functions_pb.DeleteFunctionRequest, google_longrunning_operations_pb.Operation>;
  callFunction: grpc.MethodDefinition<google_cloud_functions_v1beta2_functions_pb.CallFunctionRequest, google_cloud_functions_v1beta2_functions_pb.CallFunctionResponse>;
  generateUploadUrl: grpc.MethodDefinition<google_cloud_functions_v1beta2_functions_pb.GenerateUploadUrlRequest, google_cloud_functions_v1beta2_functions_pb.GenerateUploadUrlResponse>;
  generateDownloadUrl: grpc.MethodDefinition<google_cloud_functions_v1beta2_functions_pb.GenerateDownloadUrlRequest, google_cloud_functions_v1beta2_functions_pb.GenerateDownloadUrlResponse>;
}

export const CloudFunctionsServiceService: ICloudFunctionsServiceService;

export class CloudFunctionsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listFunctions(argument: google_cloud_functions_v1beta2_functions_pb.ListFunctionsRequest, callback: grpc.requestCallback<google_cloud_functions_v1beta2_functions_pb.ListFunctionsResponse>): grpc.ClientUnaryCall;
  listFunctions(argument: google_cloud_functions_v1beta2_functions_pb.ListFunctionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_functions_v1beta2_functions_pb.ListFunctionsResponse>): grpc.ClientUnaryCall;
  listFunctions(argument: google_cloud_functions_v1beta2_functions_pb.ListFunctionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_functions_v1beta2_functions_pb.ListFunctionsResponse>): grpc.ClientUnaryCall;
  getFunction(argument: google_cloud_functions_v1beta2_functions_pb.GetFunctionRequest, callback: grpc.requestCallback<google_cloud_functions_v1beta2_functions_pb.CloudFunction>): grpc.ClientUnaryCall;
  getFunction(argument: google_cloud_functions_v1beta2_functions_pb.GetFunctionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_functions_v1beta2_functions_pb.CloudFunction>): grpc.ClientUnaryCall;
  getFunction(argument: google_cloud_functions_v1beta2_functions_pb.GetFunctionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_functions_v1beta2_functions_pb.CloudFunction>): grpc.ClientUnaryCall;
  createFunction(argument: google_cloud_functions_v1beta2_functions_pb.CreateFunctionRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createFunction(argument: google_cloud_functions_v1beta2_functions_pb.CreateFunctionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  createFunction(argument: google_cloud_functions_v1beta2_functions_pb.CreateFunctionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateFunction(argument: google_cloud_functions_v1beta2_functions_pb.UpdateFunctionRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateFunction(argument: google_cloud_functions_v1beta2_functions_pb.UpdateFunctionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  updateFunction(argument: google_cloud_functions_v1beta2_functions_pb.UpdateFunctionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteFunction(argument: google_cloud_functions_v1beta2_functions_pb.DeleteFunctionRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteFunction(argument: google_cloud_functions_v1beta2_functions_pb.DeleteFunctionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  deleteFunction(argument: google_cloud_functions_v1beta2_functions_pb.DeleteFunctionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  callFunction(argument: google_cloud_functions_v1beta2_functions_pb.CallFunctionRequest, callback: grpc.requestCallback<google_cloud_functions_v1beta2_functions_pb.CallFunctionResponse>): grpc.ClientUnaryCall;
  callFunction(argument: google_cloud_functions_v1beta2_functions_pb.CallFunctionRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_functions_v1beta2_functions_pb.CallFunctionResponse>): grpc.ClientUnaryCall;
  callFunction(argument: google_cloud_functions_v1beta2_functions_pb.CallFunctionRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_functions_v1beta2_functions_pb.CallFunctionResponse>): grpc.ClientUnaryCall;
  generateUploadUrl(argument: google_cloud_functions_v1beta2_functions_pb.GenerateUploadUrlRequest, callback: grpc.requestCallback<google_cloud_functions_v1beta2_functions_pb.GenerateUploadUrlResponse>): grpc.ClientUnaryCall;
  generateUploadUrl(argument: google_cloud_functions_v1beta2_functions_pb.GenerateUploadUrlRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_functions_v1beta2_functions_pb.GenerateUploadUrlResponse>): grpc.ClientUnaryCall;
  generateUploadUrl(argument: google_cloud_functions_v1beta2_functions_pb.GenerateUploadUrlRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_functions_v1beta2_functions_pb.GenerateUploadUrlResponse>): grpc.ClientUnaryCall;
  generateDownloadUrl(argument: google_cloud_functions_v1beta2_functions_pb.GenerateDownloadUrlRequest, callback: grpc.requestCallback<google_cloud_functions_v1beta2_functions_pb.GenerateDownloadUrlResponse>): grpc.ClientUnaryCall;
  generateDownloadUrl(argument: google_cloud_functions_v1beta2_functions_pb.GenerateDownloadUrlRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_functions_v1beta2_functions_pb.GenerateDownloadUrlResponse>): grpc.ClientUnaryCall;
  generateDownloadUrl(argument: google_cloud_functions_v1beta2_functions_pb.GenerateDownloadUrlRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_functions_v1beta2_functions_pb.GenerateDownloadUrlResponse>): grpc.ClientUnaryCall;
}
