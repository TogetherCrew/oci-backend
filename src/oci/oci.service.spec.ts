import { Test, TestingModule } from '@nestjs/testing';
import { OciService } from './oci.service';
import { LoggerModule } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';

const mockPrivateKey = '0x';
const mockConfigService = {
  get: jest.fn((key: string) => {
    if (key === 'app.walletPrivateKey') return mockPrivateKey;
  }),
};

describe('OciService', () => {
  let service: OciService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OciService,
        { provide: ConfigService, useValue: mockConfigService },
      ],
      imports: [LoggerModule.forRoot()],
    }).compile();

    service = module.get<OciService>(OciService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
