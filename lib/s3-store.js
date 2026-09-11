import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3"

export function createS3Client({ region, endpoint, accessKeyId, secretAccessKey, sessionToken, forcePathStyle = true }) {
  if (!region || !accessKeyId || !secretAccessKey) throw new Error("S3 identity incomplete: region, accessKeyId, secretAccessKey required")
  return new S3Client({
    region,
    endpoint,
    forcePathStyle,
    credentials: { accessKeyId, secretAccessKey, sessionToken },
    requestChecksumCalculation: "WHEN_REQUIRED",
    responseChecksumValidation: "WHEN_REQUIRED",
  })
}

export function createS3Store(client, bucket) {
  return {
    async put(key, body, contentType = "application/octet-stream") {
      await client.send(new PutObjectCommand({
        Bucket: bucket,
        Key: key,
        Body: body,
        ContentType: contentType,
        ACL: "private",
      }))
      return { bucket, key, private: true }
    },
    async get(key) {
      const out = await client.send(new GetObjectCommand({ Bucket: bucket, Key: key }))
      return Buffer.from(await out.Body.transformToByteArray())
    },
    async delete(key) {
      await client.send(new DeleteObjectCommand({ Bucket: bucket, Key: key }))
      return { bucket, key, deleted: true }
    },
  }
}
