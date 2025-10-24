import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NombreEndpointModule } from './nombre_endpoint/nombre_endpoint.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [NombreEndpointModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
