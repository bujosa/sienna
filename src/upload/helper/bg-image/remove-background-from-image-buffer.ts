import {
  RemoveBgResult,
  RemoveBgError,
  removeBackgroundFromImageBase64,
} from 'remove.bg';
import {
  decodingBuffer,
  encodingBase64,
} from '../functions/encoding-and-decoding';

export const removeBackgroundFromImageBuffer = async (
  buffer: Buffer,
): Promise<Buffer> => {
  const base64img = decodingBuffer(buffer);
  let resultImg;

  await removeBackgroundFromImageBase64({
    base64img,
    apiKey: process.env.REMOVE_BG_KEY,
    size: 'preview',
    type: 'car',
  })
    .then((result: RemoveBgResult): Buffer => {
      resultImg = encodingBase64(result.base64img);
      return resultImg;
    })
    .catch((errors: Array<RemoveBgError>) => {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(errors));
    });

  return resultImg;
};
