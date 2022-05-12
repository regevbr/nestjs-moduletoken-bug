import { DynamicModule } from '@nestjs/common';
import { ConfigService } from './config.service';

export class ConfigurationModule {
  static forRoot(value: string): DynamicModule {
    return {
      // @ts-ignore
      // uniqueKey: value,
      module: ConfigurationModule,
      providers: [
        ConfigService,
        {
          provide: 'CONFIG_VALUE',
          useFactory: () => value,
        },
      ],
      exports: [ConfigService],
    };
  }

}
