// GENERATED CODE -- DO NOT EDIT!

// package: google.devtools.remoteworkers.v1test2
// file: google/devtools/remoteworkers/v1test2/tasks.proto

import * as google_devtools_remoteworkers_v1test2_tasks_pb from "../../../../google/devtools/remoteworkers/v1test2/tasks_pb";
import * as grpc from "grpc";

interface ITasksService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getTask: grpc.MethodDefinition<google_devtools_remoteworkers_v1test2_tasks_pb.GetTaskRequest, google_devtools_remoteworkers_v1test2_tasks_pb.Task>;
  updateTaskResult: grpc.MethodDefinition<google_devtools_remoteworkers_v1test2_tasks_pb.UpdateTaskResultRequest, google_devtools_remoteworkers_v1test2_tasks_pb.TaskResult>;
  addTaskLog: grpc.MethodDefinition<google_devtools_remoteworkers_v1test2_tasks_pb.AddTaskLogRequest, google_devtools_remoteworkers_v1test2_tasks_pb.AddTaskLogResponse>;
}

export const TasksService: ITasksService;

export class TasksClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getTask(argument: google_devtools_remoteworkers_v1test2_tasks_pb.GetTaskRequest, callback: grpc.requestCallback<google_devtools_remoteworkers_v1test2_tasks_pb.Task>): grpc.ClientUnaryCall;
  getTask(argument: google_devtools_remoteworkers_v1test2_tasks_pb.GetTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_remoteworkers_v1test2_tasks_pb.Task>): grpc.ClientUnaryCall;
  getTask(argument: google_devtools_remoteworkers_v1test2_tasks_pb.GetTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_remoteworkers_v1test2_tasks_pb.Task>): grpc.ClientUnaryCall;
  updateTaskResult(argument: google_devtools_remoteworkers_v1test2_tasks_pb.UpdateTaskResultRequest, callback: grpc.requestCallback<google_devtools_remoteworkers_v1test2_tasks_pb.TaskResult>): grpc.ClientUnaryCall;
  updateTaskResult(argument: google_devtools_remoteworkers_v1test2_tasks_pb.UpdateTaskResultRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_remoteworkers_v1test2_tasks_pb.TaskResult>): grpc.ClientUnaryCall;
  updateTaskResult(argument: google_devtools_remoteworkers_v1test2_tasks_pb.UpdateTaskResultRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_remoteworkers_v1test2_tasks_pb.TaskResult>): grpc.ClientUnaryCall;
  addTaskLog(argument: google_devtools_remoteworkers_v1test2_tasks_pb.AddTaskLogRequest, callback: grpc.requestCallback<google_devtools_remoteworkers_v1test2_tasks_pb.AddTaskLogResponse>): grpc.ClientUnaryCall;
  addTaskLog(argument: google_devtools_remoteworkers_v1test2_tasks_pb.AddTaskLogRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_remoteworkers_v1test2_tasks_pb.AddTaskLogResponse>): grpc.ClientUnaryCall;
  addTaskLog(argument: google_devtools_remoteworkers_v1test2_tasks_pb.AddTaskLogRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<google_devtools_remoteworkers_v1test2_tasks_pb.AddTaskLogResponse>): grpc.ClientUnaryCall;
}
