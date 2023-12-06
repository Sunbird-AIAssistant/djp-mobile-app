import { Component, OnInit } from '@angular/core';
import { IEventInput } from 'src/app/services/telemetry/telemetry-request';
import { TelemetryService } from 'src/app/services/telemetry/telemetry.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit{

  constructor(private telemetryService: TelemetryService) {

  }

  ngOnInit(): void {
    let impressionObject: IEventInput = {
      edata: {
        "type": "view",
        "subtype": "banner",
        "pageid": "home",
        "uri": "home"
      },
      context: {
        "cdata": [],
        "env": "home",
        "channel": "0126796199493140480",
        "pdata": {
          "id": "staging.diksha.app",
          "pid": "sunbird.app",
          "ver": "4.8.local.0-debug"
        },
        "sid": "e279371d-bd27-438c-9b4c-09fc5f35553d",
        "did": "d8f91e4e839f784d568a284a86ca41843a93a33a",
        "rollup": {}
      },
      object: {
        "id": "",
        "type": "",
        "ver": "",
        "rollup": {}
      },
      actor: {
        "type": "User",
        "id": "35d49886-35a3-490c-b870-944c6fa75dd4"
      },
      tags: [''],
      eid: '',
      ets: '',
      mid: ''
    }
    this.telemetryService.raiseImpressionTelemetry(impressionObject)
  }

}
