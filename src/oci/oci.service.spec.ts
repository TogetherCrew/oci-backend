import { Test, TestingModule } from '@nestjs/testing';
import { OciService } from './oci.service';

describe('OciService', () => {
  let service: OciService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OciService],
    }).compile();

    service = module.get<OciService>(OciService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
