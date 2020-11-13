import { Module, Scope } from '@nestjs/common';
import { ConfigurationModule } from 'src/dyncfg/config.module';
import { WidgetService } from './widget.service';

@Module({
  imports: [
    ConfigurationModule.forFeature('widget')
  ],
  providers: [ 
    WidgetService, 
  ],
  exports:[WidgetService]
})
export class WidgetModule {}
