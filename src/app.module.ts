import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NombreEndpointModule } from './nombre_endpoint/nombre_endpoint.module';

@Module({
  imports: [NombreEndpointModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
