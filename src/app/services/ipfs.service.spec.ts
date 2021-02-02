import { IpfsService } from './ipfs.service';

const mockIpfs = {
  create: () => Promise.resolve('This is mock node'),
};

describe('IpfsService', () => {
  let service: IpfsService;

  beforeEach(() => {
    service = new IpfsService(mockIpfs as any);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Ipfs node', async () => {
    await service.start();
    expect(service.getIpfs()).toBe('This is mock node' as any);
  });

  it('should not get Ipfs node without start', async () => {
    expect(service.getIpfs()).toBeNull();
  });
});
