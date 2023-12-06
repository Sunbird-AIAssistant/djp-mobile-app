import { Injectable } from '@angular/core';
import { ITelemetryContext, IProducerdata, IActor, ITelemetry, ICDataEntry, ITelemetryObject } from './telemetry-request';
import { DbService } from '../db.service';

declare const window: any;

@Injectable({
    providedIn: 'root'
})
export class TelemetryService {
    _isInitialsed: boolean = false;
    telemetryProvider: any;
    context!: ITelemetryContext;
    pData!: IProducerdata;
    actor!: IActor;
    config!: ITelemetry;
    constructor(
        private dbservice: DbService
    ) { }

    public raiseEndTelemetryWith(cdata: ICDataEntry[], env: string, edata: any, telemetryObject?: ITelemetryObject | undefined) {
        throw new Error('Method not implemented.');
    }

    public initializeTelemetry() {
        let that = this;
        let context: ITelemetryContext = {
            config: {
              "pdata": {
                "id": "genie",
                "ver": "6.5.2567",
                "pid": ""
              },
              "env": "initTelemetry",
              "channel": "",
              "did": "20d63257084c2dca33f31a8f14d8e94c0d939de4",
              "authtoken": "",
              "uid": "anonymous",
              "sid": "85e8a2c8-bb8e-4666-a21b-c29ec590d740",
              "batchsize": 20,
              "mode": "",
              "host": "",
              "endpoint": "/v3/telemetry",  
              "tags": [],
              "cdata": [],
              'dispatcher': {
                dispatch: async function (event: any) {
                    let tableData = {event_type: event.eid, event: JSON.stringify(event), timestamp: Date.now(), priority: 1}
                    await that.dbservice.save('telemetry', tableData);
                }
              }
            },
            userOrgDetails: ''
        };
        this.initTelemetry(context);
    }

    public initTelemetry(telemetryContext: ITelemetryContext) {
        if (window['EkTelemetry']) {
            this.telemetryProvider = window['EkTelemetry'];
            this._isInitialsed = true;
            this.context = telemetryContext;
            console.log('context ', this.context);
            this.telemetryProvider.initialize(telemetryContext.config);
        }
    }

    public initTelmetry(pdata: IProducerdata, actor: IActor, channel: string, sid: string, did: string) {
        if (this.context != null && this.telemetryProvider) {
            this.telemetryProvider.initialize(this.context.config);
        } else {
            this.config.pdata = pdata;
            this.config.channel = channel;
            this.config.did = did;
            this.config.sid = sid;
            this.actor = actor;
        }
    }
    public setTelemetryAttributes(pdata: IProducerdata, actor: IActor, channel: string, sid: string, did: string) {
        this.config.pdata = pdata;
        this.config.channel = channel;
        this.config.did = did;
        this.config.sid = sid;
        this.actor = actor;
    }
    // public initProducerData(pdata: IProducerdata) {
    //     if (this.pData) {
    //         return this.pData;
    //     } else {
    //         this.config.pdata = pdata;
    //     }
    // }
    private isTelemetryInitialised() {
        return this._isInitialsed;
    }
    public raiseInteractTelemetry(interactObject: any) {
        if (this.isTelemetryInitialised()) {
            this.telemetryProvider.interact(interactObject.edata, interactObject.options);
        }
    }

    public raiseImpressionTelemetry(impressionObject: any) {
        if (this.isTelemetryInitialised()) {
            this.telemetryProvider.impression(impressionObject.edata, impressionObject.options);
        }
    }

    public raiseLogTelemetry(logObject: any) {
        if (this.isTelemetryInitialised()) {
            this.telemetryProvider.log(logObject.edata, logObject.options);
        }
    }

    public raiseErrorTelemetry(errorObject: any) {
        if (this.isTelemetryInitialised()) {
            this.telemetryProvider.error(errorObject.edata, errorObject.options);
        }
    }

    public raiseStartTelemetry(startEventObject: any) {
        if (this.isTelemetryInitialised()) {
            console.log('start event ', startEventObject.edata);
            this.telemetryProvider.start(this.context.config, startEventObject.options.object.id, startEventObject.options.object.ver,
                startEventObject.edata, startEventObject.options
            );
        }
    }
    public raiseEndTelemetry(endEventObject: any) {
        if (this.isTelemetryInitialised()) {
            this.telemetryProvider.end(endEventObject.edata, endEventObject.options);
        }
    }
}
