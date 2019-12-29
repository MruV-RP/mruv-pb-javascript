// GENERATED CODE -- DO NOT EDIT!

// package: google.iam.credentials.v1
// file: google/iam/credentials/v1/iamcredentials.proto

import * as google_iam_credentials_v1_iamcredentials_pb from "../../../../google/iam/credentials/v1/iamcredentials_pb";
import * as google_iam_credentials_v1_common_pb from "../../../../google/iam/credentials/v1/common_pb";
import * as grpc from "grpc";

interface IIAMCredentialsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  generateAccessToken: grpc.MethodDefinition<google_iam_credentials_v1_common_pb.GenerateAccessTokenRequest, google_iam_credentials_v1_common_pb.GenerateAccessTokenResponse>;
  generateIdToken: grpc.MethodDefinition<google_iam_credentials_v1_common_pb.GenerateIdTokenRequest, google_iam_credentials_v1_common_pb.GenerateIdTokenResponse>;
  signBlob: grpc.MethodDefinition<google_iam_credentials_v1_common_pb.SignBlobRequest, google_iam_credentials_v1_common_pb.SignBlobResponse>;
  signJwt: grpc.MethodDefinition<google_iam_credentials_v1_common_pb.SignJwtRequest, google_iam_credentials_v1_common_pb.SignJwtResponse>;
}

export const IAMCredentialsService: IIAMCredentialsService;

export class IAMCredentialsClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  generateAccessToken(argument: google_iam_credentials_v1_common_pb.GenerateAccessTokenRequest, callback: grpc.requestCallback<google_iam_credentials_v1_common_pb.GenerateAccessTokenResponse>): grpc.ClientUnaryCall;
  generateAccessToken(argument: google_iam_credentials_v1_common_pb.GenerateAccessTokenRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_credentials_v1_common_pb.GenerateAccessTokenResponse>): grpc.ClientUnaryCall;
  generateAccessToken(argument: google_iam_credentials_v1_common_pb.GenerateAccessTokenRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_credentials_v1_common_pb.GenerateAccessTokenResponse>): grpc.ClientUnaryCall;
  generateIdToken(argument: google_iam_credentials_v1_common_pb.GenerateIdTokenRequest, callback: grpc.requestCallback<google_iam_credentials_v1_common_pb.GenerateIdTokenResponse>): grpc.ClientUnaryCall;
  generateIdToken(argument: google_iam_credentials_v1_common_pb.GenerateIdTokenRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_credentials_v1_common_pb.GenerateIdTokenResponse>): grpc.ClientUnaryCall;
  generateIdToken(argument: google_iam_credentials_v1_common_pb.GenerateIdTokenRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_credentials_v1_common_pb.GenerateIdTokenResponse>): grpc.ClientUnaryCall;
  signBlob(argument: google_iam_credentials_v1_common_pb.SignBlobRequest, callback: grpc.requestCallback<google_iam_credentials_v1_common_pb.SignBlobResponse>): grpc.ClientUnaryCall;
  signBlob(argument: google_iam_credentials_v1_common_pb.SignBlobRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_credentials_v1_common_pb.SignBlobResponse>): grpc.ClientUnaryCall;
  signBlob(argument: google_iam_credentials_v1_common_pb.SignBlobRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_credentials_v1_common_pb.SignBlobResponse>): grpc.ClientUnaryCall;
  signJwt(argument: google_iam_credentials_v1_common_pb.SignJwtRequest, callback: grpc.requestCallback<google_iam_credentials_v1_common_pb.SignJwtResponse>): grpc.ClientUnaryCall;
  signJwt(argument: google_iam_credentials_v1_common_pb.SignJwtRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_credentials_v1_common_pb.SignJwtResponse>): grpc.ClientUnaryCall;
  signJwt(argument: google_iam_credentials_v1_common_pb.SignJwtRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_credentials_v1_common_pb.SignJwtResponse>): grpc.ClientUnaryCall;
}
