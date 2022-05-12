import { Injectable } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class Widget2Service {

  constructor(public readonly cfg: ConfigService) {
  }

}
