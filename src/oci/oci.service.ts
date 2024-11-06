// src/oci/oci.service.ts
import { Injectable } from '@nestjs/common';
import { PinoLogger, InjectPinoLogger } from 'nestjs-pino';
import { ConfigService } from '@nestjs/config';
import { OciClient } from 'oci-js-sdk';
@Injectable()
export class OciService {
  private readonly privateKey: `0x${string}`;

  constructor(
    private readonly configService: ConfigService,
    @InjectPinoLogger(OciService.name)
    private readonly logger: PinoLogger,
  ) {
    this.privateKey = this.configService.get<`0x${string}`>(
      'app.walletPrivateKey',
    );
  }

  private async registerOciClient(chainId: number): Promise<OciClient> {
    return new OciClient({
      appPrivateKey: this.privateKey,
      chainId: Number(chainId),
    });
  }

  async getUserProfiles(chainId: number, addr: `0x${string}`) {
    try {
      this.logger.debug({
        privateKey: this.privateKey,
        chainId: chainId,
        addr: addr,
      });
      const ociClient = await this.registerOciClient(chainId);
      return await ociClient.getUserProfiles('address', addr);
    } catch (err) {
      this.logger.error(err, 'Failed to get user profiles');
      return [];
    }
  }
}
