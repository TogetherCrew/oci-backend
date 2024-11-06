import { Module } from '@nestjs/common';
import { OciService } from './oci.service';
import { OciController } from './oci.controller';

@Module({
  imports: [],
  providers: [OciService],
  controllers: [OciController],
})
export class OciModule {}
