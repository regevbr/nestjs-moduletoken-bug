import { Global, Module } from '@nestjs/common';
import { WidgetModule } from './widget/widget.module';
import { Widget2Module } from './widget2/widget2.module';
import { AppService } from './app.service';

@Global()
@Module({
  imports: [
    Widget2Module,
    WidgetModule,
  ],
  providers: [AppService],
  exports: [AppService],
})
export class AppModule {
}
