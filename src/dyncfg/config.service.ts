import { Logger } from '@nestjs/common';

export class ConfigService {
  private logger = new Logger();

  constructor(value: string) {
    this.logger.log(`ConfigService Constructor: ${value}`);
  }

  getCfg(): string{
    return 'cfg'
  }
}
