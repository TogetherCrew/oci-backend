import { Test, TestingModule } from '@nestjs/testing';
import { OciController } from './oci.controller';

describe('OciController', () => {
  let controller: OciController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OciController],
    }).compile();

    controller = module.get<OciController>(OciController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
