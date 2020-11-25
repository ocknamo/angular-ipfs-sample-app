import { Component, OnInit } from '@angular/core';

import * as ipfs from 'ipfs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Connected to IPFS';
  id = '';
  agentVersion = '';

  async ngOnInit(): Promise<void> {
    console.log('IPFS Starting');
    console.time('IPFS Started');
    try {
      const node = await ipfs.create();
      const { id, agentVersion } = await node.id();
      this.id = id;
      this.agentVersion = agentVersion;
    } catch (error) {
      console.error(error);
    }
    console.timeEnd('IPFS Started');
  }
}
