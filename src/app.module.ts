import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigurationModule } from './dyncfg/config.module';
import { WidgetModule } from './widget/widget.module';

@Module({
  imports: [
    ConfigurationModule.forRoot('cfgfile'),
    WidgetModule
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}
