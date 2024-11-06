import { Controller, Get, Param } from '@nestjs/common';
import { OciService } from './oci.service';
import { GetProfilesDto } from './dto/get-profile.dto';

@Controller('oci')
export class OciController {
  constructor(private readonly ociService: OciService) {}
  @Get('profiles/:chainId/:addr')
  async getProfiles(@Param() params: GetProfilesDto) {
    return await this.ociService.getUserProfiles(params.chainId, params.addr);
  }
}
