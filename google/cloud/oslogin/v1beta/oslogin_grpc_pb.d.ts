// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.oslogin.v1beta
// file: google/cloud/oslogin/v1beta/oslogin.proto

import * as google_cloud_oslogin_v1beta_oslogin_pb from "../../../../google/cloud/oslogin/v1beta/oslogin_pb";
import * as google_cloud_oslogin_common_common_pb from "../../../../google/cloud/oslogin/common/common_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IOsLoginServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  deletePosixAccount: grpc.MethodDefinition<google_cloud_oslogin_v1beta_oslogin_pb.DeletePosixAccountRequest, google_protobuf_empty_pb.Empty>;
  deleteSshPublicKey: grpc.MethodDefinition<google_cloud_oslogin_v1beta_oslogin_pb.DeleteSshPublicKeyRequest, google_protobuf_empty_pb.Empty>;
  getLoginProfile: grpc.MethodDefinition<google_cloud_oslogin_v1beta_oslogin_pb.GetLoginProfileRequest, google_cloud_oslogin_v1beta_oslogin_pb.LoginProfile>;
  getSshPublicKey: grpc.MethodDefinition<google_cloud_oslogin_v1beta_oslogin_pb.GetSshPublicKeyRequest, google_cloud_oslogin_common_common_pb.SshPublicKey>;
  importSshPublicKey: grpc.MethodDefinition<google_cloud_oslogin_v1beta_oslogin_pb.ImportSshPublicKeyRequest, google_cloud_oslogin_v1beta_oslogin_pb.ImportSshPublicKeyResponse>;
  updateSshPublicKey: grpc.MethodDefinition<google_cloud_oslogin_v1beta_oslogin_pb.UpdateSshPublicKeyRequest, google_cloud_oslogin_common_common_pb.SshPublicKey>;
}

export const OsLoginServiceService: IOsLoginServiceService;

export class OsLoginServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  deletePosixAccount(argument: google_cloud_oslogin_v1beta_oslogin_pb.DeletePosixAccountRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deletePosixAccount(argument: google_cloud_oslogin_v1beta_oslogin_pb.DeletePosixAccountRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deletePosixAccount(argument: google_cloud_oslogin_v1beta_oslogin_pb.DeletePosixAccountRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteSshPublicKey(argument: google_cloud_oslogin_v1beta_oslogin_pb.DeleteSshPublicKeyRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteSshPublicKey(argument: google_cloud_oslogin_v1beta_oslogin_pb.DeleteSshPublicKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteSshPublicKey(argument: google_cloud_oslogin_v1beta_oslogin_pb.DeleteSshPublicKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  getLoginProfile(argument: google_cloud_oslogin_v1beta_oslogin_pb.GetLoginProfileRequest, callback: grpc.requestCallback<google_cloud_oslogin_v1beta_oslogin_pb.LoginProfile>): grpc.ClientUnaryCall;
  getLoginProfile(argument: google_cloud_oslogin_v1beta_oslogin_pb.GetLoginProfileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_oslogin_v1beta_oslogin_pb.LoginProfile>): grpc.ClientUnaryCall;
  getLoginProfile(argument: google_cloud_oslogin_v1beta_oslogin_pb.GetLoginProfileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_oslogin_v1beta_oslogin_pb.LoginProfile>): grpc.ClientUnaryCall;
  getSshPublicKey(argument: google_cloud_oslogin_v1beta_oslogin_pb.GetSshPublicKeyRequest, callback: grpc.requestCallback<google_cloud_oslogin_common_common_pb.SshPublicKey>): grpc.ClientUnaryCall;
  getSshPublicKey(argument: google_cloud_oslogin_v1beta_oslogin_pb.GetSshPublicKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_oslogin_common_common_pb.SshPublicKey>): grpc.ClientUnaryCall;
  getSshPublicKey(argument: google_cloud_oslogin_v1beta_oslogin_pb.GetSshPublicKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_oslogin_common_common_pb.SshPublicKey>): grpc.ClientUnaryCall;
  importSshPublicKey(argument: google_cloud_oslogin_v1beta_oslogin_pb.ImportSshPublicKeyRequest, callback: grpc.requestCallback<google_cloud_oslogin_v1beta_oslogin_pb.ImportSshPublicKeyResponse>): grpc.ClientUnaryCall;
  importSshPublicKey(argument: google_cloud_oslogin_v1beta_oslogin_pb.ImportSshPublicKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_oslogin_v1beta_oslogin_pb.ImportSshPublicKeyResponse>): grpc.ClientUnaryCall;
  importSshPublicKey(argument: google_cloud_oslogin_v1beta_oslogin_pb.ImportSshPublicKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_oslogin_v1beta_oslogin_pb.ImportSshPublicKeyResponse>): grpc.ClientUnaryCall;
  updateSshPublicKey(argument: google_cloud_oslogin_v1beta_oslogin_pb.UpdateSshPublicKeyRequest, callback: grpc.requestCallback<google_cloud_oslogin_common_common_pb.SshPublicKey>): grpc.ClientUnaryCall;
  updateSshPublicKey(argument: google_cloud_oslogin_v1beta_oslogin_pb.UpdateSshPublicKeyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_oslogin_common_common_pb.SshPublicKey>): grpc.ClientUnaryCall;
  updateSshPublicKey(argument: google_cloud_oslogin_v1beta_oslogin_pb.UpdateSshPublicKeyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_oslogin_common_common_pb.SshPublicKey>): grpc.ClientUnaryCall;
}
