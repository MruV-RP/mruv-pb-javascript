// GENERATED CODE -- DO NOT EDIT!

// package: google.storagetransfer.v1
// file: google/storagetransfer/v1/transfer.proto

import * as google_storagetransfer_v1_transfer_pb from "../../../google/storagetransfer/v1/transfer_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_storagetransfer_v1_transfer_types_pb from "../../../google/storagetransfer/v1/transfer_types_pb";
import * as grpc from "grpc";

interface IStorageTransferServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getGoogleServiceAccount: grpc.MethodDefinition<google_storagetransfer_v1_transfer_pb.GetGoogleServiceAccountRequest, google_storagetransfer_v1_transfer_types_pb.GoogleServiceAccount>;
  createTransferJob: grpc.MethodDefinition<google_storagetransfer_v1_transfer_pb.CreateTransferJobRequest, google_storagetransfer_v1_transfer_types_pb.TransferJob>;
  updateTransferJob: grpc.MethodDefinition<google_storagetransfer_v1_transfer_pb.UpdateTransferJobRequest, google_storagetransfer_v1_transfer_types_pb.TransferJob>;
  getTransferJob: grpc.MethodDefinition<google_storagetransfer_v1_transfer_pb.GetTransferJobRequest, google_storagetransfer_v1_transfer_types_pb.TransferJob>;
  listTransferJobs: grpc.MethodDefinition<google_storagetransfer_v1_transfer_pb.ListTransferJobsRequest, google_storagetransfer_v1_transfer_pb.ListTransferJobsResponse>;
  pauseTransferOperation: grpc.MethodDefinition<google_storagetransfer_v1_transfer_pb.PauseTransferOperationRequest, google_protobuf_empty_pb.Empty>;
  resumeTransferOperation: grpc.MethodDefinition<google_storagetransfer_v1_transfer_pb.ResumeTransferOperationRequest, google_protobuf_empty_pb.Empty>;
}

export const StorageTransferServiceService: IStorageTransferServiceService;

export class StorageTransferServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getGoogleServiceAccount(argument: google_storagetransfer_v1_transfer_pb.GetGoogleServiceAccountRequest, callback: grpc.requestCallback<google_storagetransfer_v1_transfer_types_pb.GoogleServiceAccount>): grpc.ClientUnaryCall;
  getGoogleServiceAccount(argument: google_storagetransfer_v1_transfer_pb.GetGoogleServiceAccountRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_storagetransfer_v1_transfer_types_pb.GoogleServiceAccount>): grpc.ClientUnaryCall;
  getGoogleServiceAccount(argument: google_storagetransfer_v1_transfer_pb.GetGoogleServiceAccountRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_storagetransfer_v1_transfer_types_pb.GoogleServiceAccount>): grpc.ClientUnaryCall;
  createTransferJob(argument: google_storagetransfer_v1_transfer_pb.CreateTransferJobRequest, callback: grpc.requestCallback<google_storagetransfer_v1_transfer_types_pb.TransferJob>): grpc.ClientUnaryCall;
  createTransferJob(argument: google_storagetransfer_v1_transfer_pb.CreateTransferJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_storagetransfer_v1_transfer_types_pb.TransferJob>): grpc.ClientUnaryCall;
  createTransferJob(argument: google_storagetransfer_v1_transfer_pb.CreateTransferJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_storagetransfer_v1_transfer_types_pb.TransferJob>): grpc.ClientUnaryCall;
  updateTransferJob(argument: google_storagetransfer_v1_transfer_pb.UpdateTransferJobRequest, callback: grpc.requestCallback<google_storagetransfer_v1_transfer_types_pb.TransferJob>): grpc.ClientUnaryCall;
  updateTransferJob(argument: google_storagetransfer_v1_transfer_pb.UpdateTransferJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_storagetransfer_v1_transfer_types_pb.TransferJob>): grpc.ClientUnaryCall;
  updateTransferJob(argument: google_storagetransfer_v1_transfer_pb.UpdateTransferJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_storagetransfer_v1_transfer_types_pb.TransferJob>): grpc.ClientUnaryCall;
  getTransferJob(argument: google_storagetransfer_v1_transfer_pb.GetTransferJobRequest, callback: grpc.requestCallback<google_storagetransfer_v1_transfer_types_pb.TransferJob>): grpc.ClientUnaryCall;
  getTransferJob(argument: google_storagetransfer_v1_transfer_pb.GetTransferJobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_storagetransfer_v1_transfer_types_pb.TransferJob>): grpc.ClientUnaryCall;
  getTransferJob(argument: google_storagetransfer_v1_transfer_pb.GetTransferJobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_storagetransfer_v1_transfer_types_pb.TransferJob>): grpc.ClientUnaryCall;
  listTransferJobs(argument: google_storagetransfer_v1_transfer_pb.ListTransferJobsRequest, callback: grpc.requestCallback<google_storagetransfer_v1_transfer_pb.ListTransferJobsResponse>): grpc.ClientUnaryCall;
  listTransferJobs(argument: google_storagetransfer_v1_transfer_pb.ListTransferJobsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_storagetransfer_v1_transfer_pb.ListTransferJobsResponse>): grpc.ClientUnaryCall;
  listTransferJobs(argument: google_storagetransfer_v1_transfer_pb.ListTransferJobsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_storagetransfer_v1_transfer_pb.ListTransferJobsResponse>): grpc.ClientUnaryCall;
  pauseTransferOperation(argument: google_storagetransfer_v1_transfer_pb.PauseTransferOperationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  pauseTransferOperation(argument: google_storagetransfer_v1_transfer_pb.PauseTransferOperationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  pauseTransferOperation(argument: google_storagetransfer_v1_transfer_pb.PauseTransferOperationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  resumeTransferOperation(argument: google_storagetransfer_v1_transfer_pb.ResumeTransferOperationRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  resumeTransferOperation(argument: google_storagetransfer_v1_transfer_pb.ResumeTransferOperationRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  resumeTransferOperation(argument: google_storagetransfer_v1_transfer_pb.ResumeTransferOperationRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
