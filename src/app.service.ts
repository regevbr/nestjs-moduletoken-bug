import { Injectable, Logger } from '@nestjs/common';
import { ModuleRef } from '@nestjs/core';

@Injectable()
export class AppService {
  private logger = new Logger();

  constructor() {
    this.logger.log('Created AppServer');

  }

  async dummy() {
    this.logger.log('`dummy()` ')

  }
}
