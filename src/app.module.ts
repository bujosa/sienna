import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./env/.sienna-nest.env`,
    }),
    UploadModule,
  ],
})
export class AppModule {}
