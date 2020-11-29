// import * as Ipfs from 'ipfs';

// import { PromiseType } from '../../libs/types';

// declare global {
//   interface Window {
//     ipfs: any;
//   }
// }

interface Window {
  // ipfs: PromiseType<ReturnType<typeof Ipfs.create>> | undefined;
  ipfs: any;
}
