import { Injectable } from '@nestjs/common';
import { Picture } from './dtos/picture.dto';
import { deleteFileHelper } from './helper/S3/delete-file';
import { uploadFileHelper } from './helper/S3/upload-file';

@Injectable()
export class UploadService {
  async uploadFile(file: Express.Multer.File): Promise<string> {
    return uploadFileHelper(file);
  }

  async deleteFile(picture: Picture): Promise<any> {
    try {
      await deleteFileHelper(picture);
    } catch (err) {}
    return {};
  }

  async uploadFiles(files: Express.Multer.File[]): Promise<string[]> {
    const urls = [];
    await Promise.all(
      files.map(async (file: Express.Multer.File) => {
        const url = await uploadFileHelper(file);
        urls.push(url);
      }),
    );
    return urls;
  }
}
