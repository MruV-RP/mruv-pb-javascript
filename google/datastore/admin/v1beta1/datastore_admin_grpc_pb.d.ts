// GENERATED CODE -- DO NOT EDIT!

// package: google.datastore.admin.v1beta1
// file: google/datastore/admin/v1beta1/datastore_admin.proto

import * as google_datastore_admin_v1beta1_datastore_admin_pb from "../../../../google/datastore/admin/v1beta1/datastore_admin_pb";
import * as google_longrunning_operations_pb from "../../../../google/longrunning/operations_pb";
import * as grpc from "grpc";

interface IDatastoreAdminService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  exportEntities: grpc.MethodDefinition<google_datastore_admin_v1beta1_datastore_admin_pb.ExportEntitiesRequest, google_longrunning_operations_pb.Operation>;
  importEntities: grpc.MethodDefinition<google_datastore_admin_v1beta1_datastore_admin_pb.ImportEntitiesRequest, google_longrunning_operations_pb.Operation>;
}

export const DatastoreAdminService: IDatastoreAdminService;

export class DatastoreAdminClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  exportEntities(argument: google_datastore_admin_v1beta1_datastore_admin_pb.ExportEntitiesRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportEntities(argument: google_datastore_admin_v1beta1_datastore_admin_pb.ExportEntitiesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  exportEntities(argument: google_datastore_admin_v1beta1_datastore_admin_pb.ExportEntitiesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importEntities(argument: google_datastore_admin_v1beta1_datastore_admin_pb.ImportEntitiesRequest, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importEntities(argument: google_datastore_admin_v1beta1_datastore_admin_pb.ImportEntitiesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
  importEntities(argument: google_datastore_admin_v1beta1_datastore_admin_pb.ImportEntitiesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_longrunning_operations_pb.Operation>): grpc.ClientUnaryCall;
}
