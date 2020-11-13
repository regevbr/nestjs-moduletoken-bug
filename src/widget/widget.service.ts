import { Inject, Injectable, Logger } from '@nestjs/common';
import { CONFIGURATION_SERVICE } from 'src/dyncfg/config.module';
import { ConfigService } from 'src/dyncfg/config.service';

@Injectable()
export class WidgetService {
  private logger = new Logger();

  constructor(@Inject(CONFIGURATION_SERVICE) private cfg: ConfigService) {
    this.logger.log(`Created WidgetService CFG: ${cfg.getCfg()}`);
  }

  meow() {
    this.logger.log('WidgetService Meow!');
  }

}
