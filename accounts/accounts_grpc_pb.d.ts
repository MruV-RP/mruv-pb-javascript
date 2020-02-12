// GENERATED CODE -- DO NOT EDIT!

// package: mruv
// file: accounts/accounts.proto

import * as accounts_accounts_pb from "../accounts/accounts_pb";
import * as accounts_accounts_model_pb from "../accounts/accounts_model_pb";
import * as grpc from "grpc";

interface IMruVAccountsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  registerAccount: grpc.MethodDefinition<accounts_accounts_pb.RegisterAccountRequest, accounts_accounts_pb.RegisterAccountResponse>;
  logIn: grpc.MethodDefinition<accounts_accounts_pb.LogInRequest, accounts_accounts_pb.LogInResponse>;
  getAccount: grpc.MethodDefinition<accounts_accounts_model_pb.AccountID, accounts_accounts_model_pb.Account>;
  getAccountCharacters: grpc.MethodDefinition<accounts_accounts_model_pb.AccountID, accounts_accounts_pb.GetAccountCharactersResponse>;
}

export const MruVAccountsServiceService: IMruVAccountsServiceService;

export class MruVAccountsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  registerAccount(argument: accounts_accounts_pb.RegisterAccountRequest, callback: grpc.requestCallback<accounts_accounts_pb.RegisterAccountResponse>): grpc.ClientUnaryCall;
  registerAccount(argument: accounts_accounts_pb.RegisterAccountRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<accounts_accounts_pb.RegisterAccountResponse>): grpc.ClientUnaryCall;
  registerAccount(argument: accounts_accounts_pb.RegisterAccountRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<accounts_accounts_pb.RegisterAccountResponse>): grpc.ClientUnaryCall;
  logIn(argument: accounts_accounts_pb.LogInRequest, callback: grpc.requestCallback<accounts_accounts_pb.LogInResponse>): grpc.ClientUnaryCall;
  logIn(argument: accounts_accounts_pb.LogInRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<accounts_accounts_pb.LogInResponse>): grpc.ClientUnaryCall;
  logIn(argument: accounts_accounts_pb.LogInRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<accounts_accounts_pb.LogInResponse>): grpc.ClientUnaryCall;
  getAccount(argument: accounts_accounts_model_pb.AccountID, callback: grpc.requestCallback<accounts_accounts_model_pb.Account>): grpc.ClientUnaryCall;
  getAccount(argument: accounts_accounts_model_pb.AccountID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<accounts_accounts_model_pb.Account>): grpc.ClientUnaryCall;
  getAccount(argument: accounts_accounts_model_pb.AccountID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<accounts_accounts_model_pb.Account>): grpc.ClientUnaryCall;
  getAccountCharacters(argument: accounts_accounts_model_pb.AccountID, callback: grpc.requestCallback<accounts_accounts_pb.GetAccountCharactersResponse>): grpc.ClientUnaryCall;
  getAccountCharacters(argument: accounts_accounts_model_pb.AccountID, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<accounts_accounts_pb.GetAccountCharactersResponse>): grpc.ClientUnaryCall;
  getAccountCharacters(argument: accounts_accounts_model_pb.AccountID, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<accounts_accounts_pb.GetAccountCharactersResponse>): grpc.ClientUnaryCall;
}
