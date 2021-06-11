import {
  Body,
  Controller,
  Delete,
  Post,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Picture } from './dtos/picture.dto';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('file')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: {
        fileSize: 4000000,
      },
    }),
  )
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return await this.uploadService.uploadFile(file);
  }

  @Delete('file')
  async deleteFile(@Body() picture: Picture) {
    return await this.uploadService.deleteFile(picture);
  }

  @Post('files')
  @UseInterceptors(
    FilesInterceptor('files', null, {
      limits: { fileSize: 2000000 },
    }),
  )
  async uploadFiles(
    @UploadedFiles() files: Express.Multer.File[],
  ): Promise<string[]> {
    return await this.uploadService.uploadFiles(files);
  }
}
