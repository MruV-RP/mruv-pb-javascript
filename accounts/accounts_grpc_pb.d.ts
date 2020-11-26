// GENERATED CODE -- DO NOT EDIT!

// package: mruv.accounts
// file: accounts/accounts.proto

import * as accounts_accounts_pb from "../accounts/accounts_pb";
import * as grpc from "grpc";

interface IMruVAccountsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  registerAccount: grpc.MethodDefinition<accounts_accounts_pb.RegisterAccountRequest, accounts_accounts_pb.RegisterAccountResponse>;
  logIn: grpc.MethodDefinition<accounts_accounts_pb.LogInRequest, accounts_accounts_pb.LogInResponse>;
  isAccountExist: grpc.MethodDefinition<accounts_accounts_pb.IsAccountExistRequest, accounts_accounts_pb.IsAccountExistResponse>;
  getAccount: grpc.MethodDefinition<accounts_accounts_pb.GetAccountRequest, accounts_accounts_pb.GetAccountResponse>;
  getAccountCharacters: grpc.MethodDefinition<accounts_accounts_pb.GetAccountCharactersRequest, accounts_accounts_pb.GetAccountCharactersResponse>;
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
  isAccountExist(argument: accounts_accounts_pb.IsAccountExistRequest, callback: grpc.requestCallback<accounts_accounts_pb.IsAccountExistResponse>): grpc.ClientUnaryCall;
  isAccountExist(argument: accounts_accounts_pb.IsAccountExistRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<accounts_accounts_pb.IsAccountExistResponse>): grpc.ClientUnaryCall;
  isAccountExist(argument: accounts_accounts_pb.IsAccountExistRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<accounts_accounts_pb.IsAccountExistResponse>): grpc.ClientUnaryCall;
  getAccount(argument: accounts_accounts_pb.GetAccountRequest, callback: grpc.requestCallback<accounts_accounts_pb.GetAccountResponse>): grpc.ClientUnaryCall;
  getAccount(argument: accounts_accounts_pb.GetAccountRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<accounts_accounts_pb.GetAccountResponse>): grpc.ClientUnaryCall;
  getAccount(argument: accounts_accounts_pb.GetAccountRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<accounts_accounts_pb.GetAccountResponse>): grpc.ClientUnaryCall;
  getAccountCharacters(argument: accounts_accounts_pb.GetAccountCharactersRequest, callback: grpc.requestCallback<accounts_accounts_pb.GetAccountCharactersResponse>): grpc.ClientUnaryCall;
  getAccountCharacters(argument: accounts_accounts_pb.GetAccountCharactersRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<accounts_accounts_pb.GetAccountCharactersResponse>): grpc.ClientUnaryCall;
  getAccountCharacters(argument: accounts_accounts_pb.GetAccountCharactersRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<accounts_accounts_pb.GetAccountCharactersResponse>): grpc.ClientUnaryCall;
}
