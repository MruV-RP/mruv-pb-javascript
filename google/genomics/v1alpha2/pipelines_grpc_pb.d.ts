// GENERATED CODE -- DO NOT EDIT!

// package: google.genomics.v1alpha2
// file: google/genomics/v1alpha2/pipelines.proto

import * as google_genomics_v1alpha2_pipelines_pb from "../../../google/genomics/v1alpha2/pipelines_pb";
import * as google_longrunning_operations_pb from "../../../google/longrunning/operations_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IPipelinesV1Alpha2Service extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createPipeline: grpc.MethodDefinition<google_genomics_v1alpha2_pipelines_pb.CreatePipelineRequest, google_genomics_v1alpha2_pipelines_pb.Pipeline>;
  runPipeline: grpc.MethodDefinition<google_genomics_v1alpha2_pipelines_pb.RunPipelineRequest, google_longrunning_operations_pb.Operation>;
  getPipeline: grpc.MethodDefinition<google_genomics_v1alpha2_pipelines_pb.GetPipelineRequest, google_genomics_v1alpha2_pipelines_pb.Pipeline>;
  listPipelines: grpc.MethodDefinition<google_genomics_v1alpha2_pipelines_pb.ListPipelinesRequest, google_genomics_v1alpha2_pipelines_pb.ListPipelinesResponse>;
  deletePipeline: grpc.MethodDefinition<google_genomics_v1alpha2_pipelines_pb.DeletePipelineRequest, google_protobuf_empty_pb.Empty>;
  getControllerConfig: grpc.MethodDefinition<google_genomics_v1alpha2_pipelines_pb.GetControllerConfigRequest, google_genomics_v1alpha2_pipelines_pb.ControllerConfig>;
  setOperationStatus: grpc.MethodDefinition<google_genomics_v1alpha2_pipelines_pb.SetOperationStatusRequest, google_protobuf_empty_pb.Empty>;
}

export const PipelinesV1Alpha2Service: IPipelinesV1Alpha2Service;

export class PipelinesV1Alpha2Client extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createPipeline(argument: google_genomics_v1alpha2_pipelines_pb.CreatePipelineRequest, callback: grpc.requestCallback<google_genomics_v1alpha2_pipelines_pb.Pipeline>): grpc.ClientUnaryCall;
  createPipeline(argument: google_genomics_v1alpha2_pipelines_pb.CreatePipelineRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1alpha2_pipelines_pb.Pipeline>): grpc.ClientUnaryCall;
  createPipeline(argument: google_genomics_v1alpha2_pipelines_pb.CreatePipelineRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1alpha2_pipelines_pb.Pipeline>): grpc.ClientUnaryCall;
  runPipeline(argument: google_genomics_v1alpha2_pipelines_pb.RunPipelineRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  runPipeline(argument: google_genomics_v1alpha2_pipelines_pb.RunPipelineRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  runPipeline(argument: google_genomics_v1alpha2_pipelines_pb.RunPipelineRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  getPipeline(argument: google_genomics_v1alpha2_pipelines_pb.GetPipelineRequest, callback: grpc.requestCallback<google_genomics_v1alpha2_pipelines_pb.Pipeline>): grpc.ClientUnaryCall;
  getPipeline(argument: google_genomics_v1alpha2_pipelines_pb.GetPipelineRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1alpha2_pipelines_pb.Pipeline>): grpc.ClientUnaryCall;
  getPipeline(argument: google_genomics_v1alpha2_pipelines_pb.GetPipelineRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1alpha2_pipelines_pb.Pipeline>): grpc.ClientUnaryCall;
  listPipelines(argument: google_genomics_v1alpha2_pipelines_pb.ListPipelinesRequest, callback: grpc.requestCallback<google_genomics_v1alpha2_pipelines_pb.ListPipelinesResponse>): grpc.ClientUnaryCall;
  listPipelines(argument: google_genomics_v1alpha2_pipelines_pb.ListPipelinesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1alpha2_pipelines_pb.ListPipelinesResponse>): grpc.ClientUnaryCall;
  listPipelines(argument: google_genomics_v1alpha2_pipelines_pb.ListPipelinesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1alpha2_pipelines_pb.ListPipelinesResponse>): grpc.ClientUnaryCall;
  deletePipeline(argument: google_genomics_v1alpha2_pipelines_pb.DeletePipelineRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deletePipeline(argument: google_genomics_v1alpha2_pipelines_pb.DeletePipelineRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deletePipeline(argument: google_genomics_v1alpha2_pipelines_pb.DeletePipelineRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getControllerConfig(argument: google_genomics_v1alpha2_pipelines_pb.GetControllerConfigRequest, callback: grpc.requestCallback<google_genomics_v1alpha2_pipelines_pb.ControllerConfig>): grpc.ClientUnaryCall;
  getControllerConfig(argument: google_genomics_v1alpha2_pipelines_pb.GetControllerConfigRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1alpha2_pipelines_pb.ControllerConfig>): grpc.ClientUnaryCall;
  getControllerConfig(argument: google_genomics_v1alpha2_pipelines_pb.GetControllerConfigRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_genomics_v1alpha2_pipelines_pb.ControllerConfig>): grpc.ClientUnaryCall;
  setOperationStatus(argument: google_genomics_v1alpha2_pipelines_pb.SetOperationStatusRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  setOperationStatus(argument: google_genomics_v1alpha2_pipelines_pb.SetOperationStatusRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  setOperationStatus(argument: google_genomics_v1alpha2_pipelines_pb.SetOperationStatusRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
