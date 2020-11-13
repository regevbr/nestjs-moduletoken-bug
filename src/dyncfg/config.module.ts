import { DynamicModule, Module } from '@nestjs/common';
import { ConfigService } from './config.service';

export const CONFIGURATION_SERVICE = Symbol('CSF_CONFIGURATION_SERVICE');

export class ConfigurationModule {
  constructor() {
    console.log('ConfigurationModule constructor');
  }

  static forRoot(filename2: string): DynamicModule {
    console.log(`ConfigurationModule.forRoot`);

    return {
      global: true,
      module: ConfigurationModule,
      providers: [
        {
          provide: CONFIGURATION_SERVICE,
          useFactory: () => {
            // If the two useFactory() bodies look different, then ConfigurationModule is
            // is loaded twice - anything from a log line, to passing a different arg
            // If you change filename2 ==> filename1, then it only gets loaded once
            return new ConfigService(filename2);
          },
        },
      ],
      exports: [CONFIGURATION_SERVICE],
    };
  }

  static forFeature(filename: string): DynamicModule {
    console.log(`ConfigurationModule.forFeature`);
    return {
      global: true,
      module: ConfigurationModule,
      providers: [
        {
          provide: CONFIGURATION_SERVICE,
          useFactory: () => {
            return new ConfigService(filename);
          },
        },
      ],
      exports: [CONFIGURATION_SERVICE],
    };
  }
}
