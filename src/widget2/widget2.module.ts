import { Module, Scope } from '@nestjs/common';
import { ConfigurationModule } from 'src/config/config.module';
import { Widget2Service } from './widget2.service';

@Module({
  imports: [
    ConfigurationModule.forRoot('widget2'),
  ],
  providers: [
    Widget2Service,
  ],
  exports: [Widget2Service],
})
export class Widget2Module {
}
