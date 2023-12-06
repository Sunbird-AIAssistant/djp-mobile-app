import {IActor, ICDataEntry, IProducerdata, ITelemetryObject} from './telemetry-request';

export abstract class telemetryServices {
    public abstract initTelemetry(telemetryConfig: any): any;
    public abstract raiseInteractTelemetry(interactObject: any): any;
    public abstract raiseImpressionTelemetry(interactObject: any): any;
    public abstract raiseLogTelemetry(logObject: any): any;
    public abstract raiseErrorTelemetry(errorObject: any): any;
    public abstract raiseAuditTelemetry(auditObject: any): any;
    public abstract raiseStartTelemetry(startEventObject: any): any;
    public abstract raiseEndTelemetry(startEventObject: any): any;
}