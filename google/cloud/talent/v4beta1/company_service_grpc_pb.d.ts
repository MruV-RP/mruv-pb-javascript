// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.talent.v4beta1
// file: google/cloud/talent/v4beta1/company_service.proto

import * as google_cloud_talent_v4beta1_company_service_pb from "../../../../google/cloud/talent/v4beta1/company_service_pb";
import * as google_cloud_talent_v4beta1_company_pb from "../../../../google/cloud/talent/v4beta1/company_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ICompanyServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createCompany: grpc.MethodDefinition<google_cloud_talent_v4beta1_company_service_pb.CreateCompanyRequest, google_cloud_talent_v4beta1_company_pb.Company>;
  getCompany: grpc.MethodDefinition<google_cloud_talent_v4beta1_company_service_pb.GetCompanyRequest, google_cloud_talent_v4beta1_company_pb.Company>;
  updateCompany: grpc.MethodDefinition<google_cloud_talent_v4beta1_company_service_pb.UpdateCompanyRequest, google_cloud_talent_v4beta1_company_pb.Company>;
  deleteCompany: grpc.MethodDefinition<google_cloud_talent_v4beta1_company_service_pb.DeleteCompanyRequest, google_protobuf_empty_pb.Empty>;
  listCompanies: grpc.MethodDefinition<google_cloud_talent_v4beta1_company_service_pb.ListCompaniesRequest, google_cloud_talent_v4beta1_company_service_pb.ListCompaniesResponse>;
}

export const CompanyServiceService: ICompanyServiceService;

export class CompanyServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createCompany(argument: google_cloud_talent_v4beta1_company_service_pb.CreateCompanyRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_company_pb.Company>): grpc.ClientUnaryCall;
  createCompany(argument: google_cloud_talent_v4beta1_company_service_pb.CreateCompanyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_company_pb.Company>): grpc.ClientUnaryCall;
  createCompany(argument: google_cloud_talent_v4beta1_company_service_pb.CreateCompanyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_company_pb.Company>): grpc.ClientUnaryCall;
  getCompany(argument: google_cloud_talent_v4beta1_company_service_pb.GetCompanyRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_company_pb.Company>): grpc.ClientUnaryCall;
  getCompany(argument: google_cloud_talent_v4beta1_company_service_pb.GetCompanyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_company_pb.Company>): grpc.ClientUnaryCall;
  getCompany(argument: google_cloud_talent_v4beta1_company_service_pb.GetCompanyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_company_pb.Company>): grpc.ClientUnaryCall;
  updateCompany(argument: google_cloud_talent_v4beta1_company_service_pb.UpdateCompanyRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_company_pb.Company>): grpc.ClientUnaryCall;
  updateCompany(argument: google_cloud_talent_v4beta1_company_service_pb.UpdateCompanyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_company_pb.Company>): grpc.ClientUnaryCall;
  updateCompany(argument: google_cloud_talent_v4beta1_company_service_pb.UpdateCompanyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_company_pb.Company>): grpc.ClientUnaryCall;
  deleteCompany(argument: google_cloud_talent_v4beta1_company_service_pb.DeleteCompanyRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteCompany(argument: google_cloud_talent_v4beta1_company_service_pb.DeleteCompanyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteCompany(argument: google_cloud_talent_v4beta1_company_service_pb.DeleteCompanyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  listCompanies(argument: google_cloud_talent_v4beta1_company_service_pb.ListCompaniesRequest, callback: grpc.requestCallback<google_cloud_talent_v4beta1_company_service_pb.ListCompaniesResponse>): grpc.ClientUnaryCall;
  listCompanies(argument: google_cloud_talent_v4beta1_company_service_pb.ListCompaniesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_company_service_pb.ListCompaniesResponse>): grpc.ClientUnaryCall;
  listCompanies(argument: google_cloud_talent_v4beta1_company_service_pb.ListCompaniesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_talent_v4beta1_company_service_pb.ListCompaniesResponse>): grpc.ClientUnaryCall;
}
