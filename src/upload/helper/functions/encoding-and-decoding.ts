import { Base64 } from 'aws-sdk/clients/ecr';

export const decodingBuffer = (buffer: Buffer): Base64 => {
  return buffer.toString('base64');
};

export const encodingBase64 = (data: Base64): Buffer => {
  return Buffer.from(data, 'base64');
};
