import { Module } from '@nestjs/common';
import { GlobalJwtAuthAndRolesRestGuard } from 'src/common/auth/guards/global-jwt-auth-and-roles-rest.guard';
import { JwtStrategy } from 'src/common/auth/strategies/jwt.strategy';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';

@Module({
  imports: [],
  controllers: [UploadController],
  providers: [UploadService, JwtStrategy, ...GlobalJwtAuthAndRolesRestGuard],
})
export class UploadModule {}
