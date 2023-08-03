import { resolve } from 'path'
import { createWriteStream } from 'fs'

export const uploadFile = async (file) => {
  // Uploading...
  let { filename, createReadStream } = await file
  filename = Date.now() + filename.replace(/\s/g, '')
  const stream = createReadStream()
  const out = createWriteStream(resolve('uploads', filename))
  stream.pipe(out)
  return filename
}
