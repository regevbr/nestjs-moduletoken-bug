import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const appService = app.get(AppService);
  console.log('widget:', appService.widget.cfg.value);
  console.log('widget2:', appService.widget2.cfg.value);
}

bootstrap();
