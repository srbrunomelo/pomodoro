const zeroLeft = (n: number): string =>
  Math.floor(n).toString().padStart(2, "0");
export { zeroLeft };

export const secondsToTime = (seconds: number): string => {
  const hours = zeroLeft(seconds / 3600);
  const min = zeroLeft((seconds / 60) % 60);
  const sec = zeroLeft((seconds % 60) % 60);

  return `${hours}h${min}m${sec}s`;
};

export const secondsToMinutes = (seconds: number): string => {
  const min = zeroLeft((seconds / 60) % 60);
  const sec = zeroLeft((seconds % 60) % 60);
  
  return `${min}:${sec}`;
};


export const handleStatus = (status: string) => {
  if (status === 'short') {
    return 'work'
  }

  return 'short'
}