
export const formatFileName = (fileName: string, maxLength = 30): string => {
  const dotIndex = fileName.lastIndexOf(".");

  if (dotIndex === -1) {
    return fileName.length > maxLength
      ? fileName.slice(0, maxLength - 3) + "..."
      : fileName;
  }

  const name = fileName.slice(0, dotIndex);
  const ext = fileName.slice(dotIndex);

  if (fileName.length <= maxLength) return fileName;

  const keep = maxLength - ext.length - 3;
  if (keep <= 0) return "..." + ext;

  return name.slice(0, keep).trim() + "... " + ext;
}