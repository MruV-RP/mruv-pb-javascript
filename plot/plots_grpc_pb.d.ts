// GENERATED CODE -- DO NOT EDIT!

// package: mruv.plots
// file: plot/plots.proto

import * as plot_plots_pb from "../plot/plots_pb";
import * as grpc from "grpc";

interface IMruVPlotsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createPlot: grpc.MethodDefinition<plot_plots_pb.CreatePlotRequest, plot_plots_pb.CreatePlotResponse>;
  getPlot: grpc.MethodDefinition<plot_plots_pb.GetPlotRequest, plot_plots_pb.GetPlotResponse>;
  updatePlot: grpc.MethodDefinition<plot_plots_pb.UpdatePlotRequest, plot_plots_pb.UpdatePlotResponse>;
  deletePlot: grpc.MethodDefinition<plot_plots_pb.DeletePlotRequest, plot_plots_pb.DeletePlotResponse>;
}

export const MruVPlotsServiceService: IMruVPlotsServiceService;

export class MruVPlotsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createPlot(argument: plot_plots_pb.CreatePlotRequest, callback: grpc.requestCallback<plot_plots_pb.CreatePlotResponse>): grpc.ClientUnaryCall;
  createPlot(argument: plot_plots_pb.CreatePlotRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<plot_plots_pb.CreatePlotResponse>): grpc.ClientUnaryCall;
  createPlot(argument: plot_plots_pb.CreatePlotRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<plot_plots_pb.CreatePlotResponse>): grpc.ClientUnaryCall;
  getPlot(argument: plot_plots_pb.GetPlotRequest, callback: grpc.requestCallback<plot_plots_pb.GetPlotResponse>): grpc.ClientUnaryCall;
  getPlot(argument: plot_plots_pb.GetPlotRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<plot_plots_pb.GetPlotResponse>): grpc.ClientUnaryCall;
  getPlot(argument: plot_plots_pb.GetPlotRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<plot_plots_pb.GetPlotResponse>): grpc.ClientUnaryCall;
  updatePlot(argument: plot_plots_pb.UpdatePlotRequest, callback: grpc.requestCallback<plot_plots_pb.UpdatePlotResponse>): grpc.ClientUnaryCall;
  updatePlot(argument: plot_plots_pb.UpdatePlotRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<plot_plots_pb.UpdatePlotResponse>): grpc.ClientUnaryCall;
  updatePlot(argument: plot_plots_pb.UpdatePlotRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<plot_plots_pb.UpdatePlotResponse>): grpc.ClientUnaryCall;
  deletePlot(argument: plot_plots_pb.DeletePlotRequest, callback: grpc.requestCallback<plot_plots_pb.DeletePlotResponse>): grpc.ClientUnaryCall;
  deletePlot(argument: plot_plots_pb.DeletePlotRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<plot_plots_pb.DeletePlotResponse>): grpc.ClientUnaryCall;
  deletePlot(argument: plot_plots_pb.DeletePlotRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<plot_plots_pb.DeletePlotResponse>): grpc.ClientUnaryCall;
}
