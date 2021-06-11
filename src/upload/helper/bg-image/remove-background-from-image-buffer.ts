import {
  RemoveBgResult,
  RemoveBgError,
  removeBackgroundFromImageBase64,
} from 'remove.bg';
import {
  decodingBuffer,
  encodingBase64,
} from '../functions/encoding-and-decoding';

export const RemoveBackgroundFromImageBuffer = async (buffer: Buffer) => {
  const base64img = decodingBuffer(buffer);

  await removeBackgroundFromImageBase64({
    base64img,
    apiKey: process.env.REMOVE_BG_KEY,
    size: 'regular',
    type: 'car',
  })
    .then((result: RemoveBgResult): Buffer => {
      return encodingBase64(result.base64img);
    })
    .catch((errors: Array<RemoveBgError>) => {
      // eslint-disable-next-line no-console
      console.log(JSON.stringify(errors));
    });
};
