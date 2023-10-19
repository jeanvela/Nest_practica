import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors()
  app.setGlobalPrefix('api')//* que todas las rutas comiencen con api
  app.useGlobalPipes(new ValidationPipe())  //* Antes de que se ejecute una ruta va a pasar por esa funcion
  await app.listen(3000);
}
bootstrap();
