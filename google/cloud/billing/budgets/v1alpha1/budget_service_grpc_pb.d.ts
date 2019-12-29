// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.billing.budgets.v1alpha1
// file: google/cloud/billing/budgets/v1alpha1/budget_service.proto

import * as google_cloud_billing_budgets_v1alpha1_budget_service_pb from "../../../../../google/cloud/billing/budgets/v1alpha1/budget_service_pb";
import * as google_cloud_billing_budgets_v1alpha1_budget_model_pb from "../../../../../google/cloud/billing/budgets/v1alpha1/budget_model_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface IBudgetServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createBudget: grpc.MethodDefinition<google_cloud_billing_budgets_v1alpha1_budget_service_pb.CreateBudgetRequest, google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget>;
  updateBudget: grpc.MethodDefinition<google_cloud_billing_budgets_v1alpha1_budget_service_pb.UpdateBudgetRequest, google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget>;
  getBudget: grpc.MethodDefinition<google_cloud_billing_budgets_v1alpha1_budget_service_pb.GetBudgetRequest, google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget>;
  listBudgets: grpc.MethodDefinition<google_cloud_billing_budgets_v1alpha1_budget_service_pb.ListBudgetsRequest, google_cloud_billing_budgets_v1alpha1_budget_service_pb.ListBudgetsResponse>;
  deleteBudget: grpc.MethodDefinition<google_cloud_billing_budgets_v1alpha1_budget_service_pb.DeleteBudgetRequest, google_protobuf_empty_pb.Empty>;
}

export const BudgetServiceService: IBudgetServiceService;

export class BudgetServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createBudget(argument: google_cloud_billing_budgets_v1alpha1_budget_service_pb.CreateBudgetRequest, callback: grpc.requestCallback<google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget>): grpc.ClientUnaryCall;
  createBudget(argument: google_cloud_billing_budgets_v1alpha1_budget_service_pb.CreateBudgetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget>): grpc.ClientUnaryCall;
  createBudget(argument: google_cloud_billing_budgets_v1alpha1_budget_service_pb.CreateBudgetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget>): grpc.ClientUnaryCall;
  updateBudget(argument: google_cloud_billing_budgets_v1alpha1_budget_service_pb.UpdateBudgetRequest, callback: grpc.requestCallback<google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget>): grpc.ClientUnaryCall;
  updateBudget(argument: google_cloud_billing_budgets_v1alpha1_budget_service_pb.UpdateBudgetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget>): grpc.ClientUnaryCall;
  updateBudget(argument: google_cloud_billing_budgets_v1alpha1_budget_service_pb.UpdateBudgetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget>): grpc.ClientUnaryCall;
  getBudget(argument: google_cloud_billing_budgets_v1alpha1_budget_service_pb.GetBudgetRequest, callback: grpc.requestCallback<google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget>): grpc.ClientUnaryCall;
  getBudget(argument: google_cloud_billing_budgets_v1alpha1_budget_service_pb.GetBudgetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget>): grpc.ClientUnaryCall;
  getBudget(argument: google_cloud_billing_budgets_v1alpha1_budget_service_pb.GetBudgetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_billing_budgets_v1alpha1_budget_model_pb.Budget>): grpc.ClientUnaryCall;
  listBudgets(argument: google_cloud_billing_budgets_v1alpha1_budget_service_pb.ListBudgetsRequest, callback: grpc.requestCallback<google_cloud_billing_budgets_v1alpha1_budget_service_pb.ListBudgetsResponse>): grpc.ClientUnaryCall;
  listBudgets(argument: google_cloud_billing_budgets_v1alpha1_budget_service_pb.ListBudgetsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_billing_budgets_v1alpha1_budget_service_pb.ListBudgetsResponse>): grpc.ClientUnaryCall;
  listBudgets(argument: google_cloud_billing_budgets_v1alpha1_budget_service_pb.ListBudgetsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_billing_budgets_v1alpha1_budget_service_pb.ListBudgetsResponse>): grpc.ClientUnaryCall;
  deleteBudget(argument: google_cloud_billing_budgets_v1alpha1_budget_service_pb.DeleteBudgetRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteBudget(argument: google_cloud_billing_budgets_v1alpha1_budget_service_pb.DeleteBudgetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteBudget(argument: google_cloud_billing_budgets_v1alpha1_budget_service_pb.DeleteBudgetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
}
