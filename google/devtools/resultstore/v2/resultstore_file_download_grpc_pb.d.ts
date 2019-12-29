// GENERATED CODE -- DO NOT EDIT!

// package: google.devtools.resultstore.v2
// file: google/devtools/resultstore/v2/resultstore_file_download.proto

import * as google_devtools_resultstore_v2_resultstore_file_download_pb from "../../../../google/devtools/resultstore/v2/resultstore_file_download_pb";
import * as grpc from "grpc";

interface IResultStoreFileDownloadService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getFile: grpc.MethodDefinition<google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileRequest, google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileResponse>;
  getFileTail: grpc.MethodDefinition<google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileTailRequest, google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileTailResponse>;
}

export const ResultStoreFileDownloadService: IResultStoreFileDownloadService;

export class ResultStoreFileDownloadClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getFile(argument: google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileResponse>;
  getFile(argument: google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileResponse>;
  getFileTail(argument: google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileTailRequest, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileTailResponse>): grpc.ClientUnaryCall;
  getFileTail(argument: google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileTailRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileTailResponse>): grpc.ClientUnaryCall;
  getFileTail(argument: google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileTailRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_resultstore_v2_resultstore_file_download_pb.GetFileTailResponse>): grpc.ClientUnaryCall;
}
