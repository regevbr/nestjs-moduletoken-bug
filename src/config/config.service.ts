import { Inject } from '@nestjs/common';

export class ConfigService {

  constructor(@Inject('CONFIG_VALUE') public readonly value: string) {
  }
}
