import { Injectable } from '@nestjs/common';
import { WidgetService } from './widget/widget.service';
import { Widget2Service } from './widget2/widget2.service';

@Injectable()
export class AppService {

  constructor(public readonly widget: WidgetService, public readonly widget2: Widget2Service) {
  }
}
