// dto/get-profiles.dto.ts
import { IsString, IsNotEmpty, IsNumberString, Matches } from 'class-validator';

export class GetProfilesDto {
  @IsNumberString()
  @IsNotEmpty()
  readonly chainId: number;

  @IsString()
  @IsNotEmpty()
  @Matches(/^0x[a-fA-F0-9]{40}$/, {
    message: 'addr must be a valid address starting with 0x',
  })
  readonly addr: `0x${string}`;
}
