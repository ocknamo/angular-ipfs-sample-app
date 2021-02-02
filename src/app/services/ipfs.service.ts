import { Inject, Injectable, Optional } from '@angular/core';

import * as Ipfs from 'ipfs-core';
import { PromiseType } from '../../libs/types';

@Injectable({
  providedIn: 'root'
})
export class IpfsService {
  private ipfs: typeof Ipfs;
  private node: null | PromiseType<ReturnType<typeof Ipfs.create>> = null;

  constructor(@Inject(undefined) @Optional() Node: typeof Ipfs | undefined) {
    this.ipfs = Node ? Node : Ipfs;
  }

  async start(): Promise<void> {
    if (this.node) {
      console.log('IPFS already started');

    } else if (window.ipfs && window.ipfs.enable) {
      console.log('Found window.ipfs');
      this.node = await window.ipfs.enable({ commands: ['id'] });

    } else {
      console.time('IPFS Started');
      try {
        this.node = await this.ipfs.create();
        console.timeEnd('IPFS Started');
      } catch (error) {
        console.error('IPFS init error:', error);
        this.node = null;
      }
    }
  }

  getIpfs(): null | PromiseType<ReturnType<typeof Ipfs.create>> {
    return this.node;
  }
}
