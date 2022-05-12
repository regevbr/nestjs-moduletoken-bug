import { Module, Scope } from '@nestjs/common';
import { ConfigurationModule } from 'src/config/config.module';
import { WidgetService } from './widget.service';

@Module({
  imports: [
    ConfigurationModule.forRoot('widget'),
  ],
  providers: [
    WidgetService,
  ],
  exports: [WidgetService],
})
export class WidgetModule {
}
