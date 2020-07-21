// GENERATED CODE -- DO NOT EDIT!

// package: mruv.plots
// file: plots/plots.proto

import * as plots_plots_pb from "../plots/plots_pb";
import * as grpc from "grpc";

interface IMruVPlotsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createPlot: grpc.MethodDefinition<plots_plots_pb.CreatePlotRequest, plots_plots_pb.CreatePlotResponse>;
  getPlot: grpc.MethodDefinition<plots_plots_pb.GetPlotRequest, plots_plots_pb.GetPlotResponse>;
  updatePlot: grpc.MethodDefinition<plots_plots_pb.UpdatePlotRequest, plots_plots_pb.UpdatePlotResponse>;
  deletePlot: grpc.MethodDefinition<plots_plots_pb.DeletePlotRequest, plots_plots_pb.DeletePlotResponse>;
}

export const MruVPlotsServiceService: IMruVPlotsServiceService;

export class MruVPlotsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createPlot(argument: plots_plots_pb.CreatePlotRequest, callback: grpc.requestCallback<plots_plots_pb.CreatePlotResponse>): grpc.ClientUnaryCall;
  createPlot(argument: plots_plots_pb.CreatePlotRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<plots_plots_pb.CreatePlotResponse>): grpc.ClientUnaryCall;
  createPlot(argument: plots_plots_pb.CreatePlotRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<plots_plots_pb.CreatePlotResponse>): grpc.ClientUnaryCall;
  getPlot(argument: plots_plots_pb.GetPlotRequest, callback: grpc.requestCallback<plots_plots_pb.GetPlotResponse>): grpc.ClientUnaryCall;
  getPlot(argument: plots_plots_pb.GetPlotRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<plots_plots_pb.GetPlotResponse>): grpc.ClientUnaryCall;
  getPlot(argument: plots_plots_pb.GetPlotRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<plots_plots_pb.GetPlotResponse>): grpc.ClientUnaryCall;
  updatePlot(argument: plots_plots_pb.UpdatePlotRequest, callback: grpc.requestCallback<plots_plots_pb.UpdatePlotResponse>): grpc.ClientUnaryCall;
  updatePlot(argument: plots_plots_pb.UpdatePlotRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<plots_plots_pb.UpdatePlotResponse>): grpc.ClientUnaryCall;
  updatePlot(argument: plots_plots_pb.UpdatePlotRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<plots_plots_pb.UpdatePlotResponse>): grpc.ClientUnaryCall;
  deletePlot(argument: plots_plots_pb.DeletePlotRequest, callback: grpc.requestCallback<plots_plots_pb.DeletePlotResponse>): grpc.ClientUnaryCall;
  deletePlot(argument: plots_plots_pb.DeletePlotRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<plots_plots_pb.DeletePlotResponse>): grpc.ClientUnaryCall;
  deletePlot(argument: plots_plots_pb.DeletePlotRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<plots_plots_pb.DeletePlotResponse>): grpc.ClientUnaryCall;
}
