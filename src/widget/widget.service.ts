import { Injectable } from '@nestjs/common';
import { ConfigService } from 'src/config/config.service';

@Injectable()
export class WidgetService {

  constructor(public readonly cfg: ConfigService) {
  }

}
