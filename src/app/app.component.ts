import { Component, OnInit } from '@angular/core';

import { IpfsService } from './services/ipfs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  id = '';
  agentVersion = '';

  constructor(private readonly ipfsService: IpfsService) {}

  async ngOnInit(): Promise<void> {
    await this.ipfsService.start();
    const node = this.ipfsService.getIpfs();
    const { id, agentVersion } = await node.id();
    this.id = id;
    this.agentVersion = agentVersion;
  }
}
