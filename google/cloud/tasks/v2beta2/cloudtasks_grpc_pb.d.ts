// GENERATED CODE -- DO NOT EDIT!

// package: google.cloud.tasks.v2beta2
// file: google/cloud/tasks/v2beta2/cloudtasks.proto

import * as google_cloud_tasks_v2beta2_cloudtasks_pb from "../../../../google/cloud/tasks/v2beta2/cloudtasks_pb";
import * as google_cloud_tasks_v2beta2_queue_pb from "../../../../google/cloud/tasks/v2beta2/queue_pb";
import * as google_cloud_tasks_v2beta2_task_pb from "../../../../google/cloud/tasks/v2beta2/task_pb";
import * as google_iam_v1_iam_policy_pb from "../../../../google/iam/v1/iam_policy_pb";
import * as google_iam_v1_policy_pb from "../../../../google/iam/v1/policy_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "grpc";

interface ICloudTasksService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  listQueues: grpc.MethodDefinition<google_cloud_tasks_v2beta2_cloudtasks_pb.ListQueuesRequest, google_cloud_tasks_v2beta2_cloudtasks_pb.ListQueuesResponse>;
  getQueue: grpc.MethodDefinition<google_cloud_tasks_v2beta2_cloudtasks_pb.GetQueueRequest, google_cloud_tasks_v2beta2_queue_pb.Queue>;
  createQueue: grpc.MethodDefinition<google_cloud_tasks_v2beta2_cloudtasks_pb.CreateQueueRequest, google_cloud_tasks_v2beta2_queue_pb.Queue>;
  updateQueue: grpc.MethodDefinition<google_cloud_tasks_v2beta2_cloudtasks_pb.UpdateQueueRequest, google_cloud_tasks_v2beta2_queue_pb.Queue>;
  deleteQueue: grpc.MethodDefinition<google_cloud_tasks_v2beta2_cloudtasks_pb.DeleteQueueRequest, google_protobuf_empty_pb.Empty>;
  purgeQueue: grpc.MethodDefinition<google_cloud_tasks_v2beta2_cloudtasks_pb.PurgeQueueRequest, google_cloud_tasks_v2beta2_queue_pb.Queue>;
  pauseQueue: grpc.MethodDefinition<google_cloud_tasks_v2beta2_cloudtasks_pb.PauseQueueRequest, google_cloud_tasks_v2beta2_queue_pb.Queue>;
  resumeQueue: grpc.MethodDefinition<google_cloud_tasks_v2beta2_cloudtasks_pb.ResumeQueueRequest, google_cloud_tasks_v2beta2_queue_pb.Queue>;
  getIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.GetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  setIamPolicy: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.SetIamPolicyRequest, google_iam_v1_policy_pb.Policy>;
  testIamPermissions: grpc.MethodDefinition<google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>;
  listTasks: grpc.MethodDefinition<google_cloud_tasks_v2beta2_cloudtasks_pb.ListTasksRequest, google_cloud_tasks_v2beta2_cloudtasks_pb.ListTasksResponse>;
  getTask: grpc.MethodDefinition<google_cloud_tasks_v2beta2_cloudtasks_pb.GetTaskRequest, google_cloud_tasks_v2beta2_task_pb.Task>;
  createTask: grpc.MethodDefinition<google_cloud_tasks_v2beta2_cloudtasks_pb.CreateTaskRequest, google_cloud_tasks_v2beta2_task_pb.Task>;
  deleteTask: grpc.MethodDefinition<google_cloud_tasks_v2beta2_cloudtasks_pb.DeleteTaskRequest, google_protobuf_empty_pb.Empty>;
  leaseTasks: grpc.MethodDefinition<google_cloud_tasks_v2beta2_cloudtasks_pb.LeaseTasksRequest, google_cloud_tasks_v2beta2_cloudtasks_pb.LeaseTasksResponse>;
  acknowledgeTask: grpc.MethodDefinition<google_cloud_tasks_v2beta2_cloudtasks_pb.AcknowledgeTaskRequest, google_protobuf_empty_pb.Empty>;
  renewLease: grpc.MethodDefinition<google_cloud_tasks_v2beta2_cloudtasks_pb.RenewLeaseRequest, google_cloud_tasks_v2beta2_task_pb.Task>;
  cancelLease: grpc.MethodDefinition<google_cloud_tasks_v2beta2_cloudtasks_pb.CancelLeaseRequest, google_cloud_tasks_v2beta2_task_pb.Task>;
  runTask: grpc.MethodDefinition<google_cloud_tasks_v2beta2_cloudtasks_pb.RunTaskRequest, google_cloud_tasks_v2beta2_task_pb.Task>;
}

export const CloudTasksService: ICloudTasksService;

export class CloudTasksClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  listQueues(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.ListQueuesRequest, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_cloudtasks_pb.ListQueuesResponse>): grpc.ClientUnaryCall;
  listQueues(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.ListQueuesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_cloudtasks_pb.ListQueuesResponse>): grpc.ClientUnaryCall;
  listQueues(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.ListQueuesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_cloudtasks_pb.ListQueuesResponse>): grpc.ClientUnaryCall;
  getQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.GetQueueRequest, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_queue_pb.Queue>): grpc.ClientUnaryCall;
  getQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.GetQueueRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_queue_pb.Queue>): grpc.ClientUnaryCall;
  getQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.GetQueueRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_queue_pb.Queue>): grpc.ClientUnaryCall;
  createQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.CreateQueueRequest, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_queue_pb.Queue>): grpc.ClientUnaryCall;
  createQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.CreateQueueRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_queue_pb.Queue>): grpc.ClientUnaryCall;
  createQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.CreateQueueRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_queue_pb.Queue>): grpc.ClientUnaryCall;
  updateQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.UpdateQueueRequest, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_queue_pb.Queue>): grpc.ClientUnaryCall;
  updateQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.UpdateQueueRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_queue_pb.Queue>): grpc.ClientUnaryCall;
  updateQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.UpdateQueueRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_queue_pb.Queue>): grpc.ClientUnaryCall;
  deleteQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.DeleteQueueRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.DeleteQueueRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.DeleteQueueRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  purgeQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.PurgeQueueRequest, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_queue_pb.Queue>): grpc.ClientUnaryCall;
  purgeQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.PurgeQueueRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_queue_pb.Queue>): grpc.ClientUnaryCall;
  purgeQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.PurgeQueueRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_queue_pb.Queue>): grpc.ClientUnaryCall;
  pauseQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.PauseQueueRequest, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_queue_pb.Queue>): grpc.ClientUnaryCall;
  pauseQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.PauseQueueRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_queue_pb.Queue>): grpc.ClientUnaryCall;
  pauseQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.PauseQueueRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_queue_pb.Queue>): grpc.ClientUnaryCall;
  resumeQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.ResumeQueueRequest, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_queue_pb.Queue>): grpc.ClientUnaryCall;
  resumeQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.ResumeQueueRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_queue_pb.Queue>): grpc.ClientUnaryCall;
  resumeQueue(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.ResumeQueueRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_queue_pb.Queue>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  getIamPolicy(argument: google_iam_v1_iam_policy_pb.GetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  setIamPolicy(argument: google_iam_v1_iam_policy_pb.SetIamPolicyRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_policy_pb.Policy>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  testIamPermissions(argument: google_iam_v1_iam_policy_pb.TestIamPermissionsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_iam_v1_iam_policy_pb.TestIamPermissionsResponse>): grpc.ClientUnaryCall;
  listTasks(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.ListTasksRequest, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_cloudtasks_pb.ListTasksResponse>): grpc.ClientUnaryCall;
  listTasks(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.ListTasksRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_cloudtasks_pb.ListTasksResponse>): grpc.ClientUnaryCall;
  listTasks(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.ListTasksRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_cloudtasks_pb.ListTasksResponse>): grpc.ClientUnaryCall;
  getTask(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.GetTaskRequest, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_task_pb.Task>): grpc.ClientUnaryCall;
  getTask(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.GetTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_task_pb.Task>): grpc.ClientUnaryCall;
  getTask(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.GetTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_task_pb.Task>): grpc.ClientUnaryCall;
  createTask(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.CreateTaskRequest, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_task_pb.Task>): grpc.ClientUnaryCall;
  createTask(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.CreateTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_task_pb.Task>): grpc.ClientUnaryCall;
  createTask(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.CreateTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_task_pb.Task>): grpc.ClientUnaryCall;
  deleteTask(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.DeleteTaskRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTask(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.DeleteTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  deleteTask(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.DeleteTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  leaseTasks(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.LeaseTasksRequest, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_cloudtasks_pb.LeaseTasksResponse>): grpc.ClientUnaryCall;
  leaseTasks(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.LeaseTasksRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_cloudtasks_pb.LeaseTasksResponse>): grpc.ClientUnaryCall;
  leaseTasks(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.LeaseTasksRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_cloudtasks_pb.LeaseTasksResponse>): grpc.ClientUnaryCall;
  acknowledgeTask(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.AcknowledgeTaskRequest, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  acknowledgeTask(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.AcknowledgeTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  acknowledgeTask(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.AcknowledgeTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_protobuf_empty_pb.Empty>): grpc.ClientUnaryCall;
  renewLease(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.RenewLeaseRequest, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_task_pb.Task>): grpc.ClientUnaryCall;
  renewLease(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.RenewLeaseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_task_pb.Task>): grpc.ClientUnaryCall;
  renewLease(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.RenewLeaseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_task_pb.Task>): grpc.ClientUnaryCall;
  cancelLease(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.CancelLeaseRequest, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_task_pb.Task>): grpc.ClientUnaryCall;
  cancelLease(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.CancelLeaseRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_task_pb.Task>): grpc.ClientUnaryCall;
  cancelLease(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.CancelLeaseRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_task_pb.Task>): grpc.ClientUnaryCall;
  runTask(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.RunTaskRequest, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_task_pb.Task>): grpc.ClientUnaryCall;
  runTask(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.RunTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_task_pb.Task>): grpc.ClientUnaryCall;
  runTask(argument: google_cloud_tasks_v2beta2_cloudtasks_pb.RunTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_cloud_tasks_v2beta2_task_pb.Task>): grpc.ClientUnaryCall;
}
