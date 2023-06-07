const DATE_UNITS: Record<string, number> = {
  year: 31536000,
  month: 2592000,
  day: 86400,
  hour: 3600,
  minute: 60,
  second: 1,
};

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

export const getRelativeTime = (epochTime: number) => {
  // El tiempo en el que se creo el post
  const timeStart = new Date(epochTime * 1000).getTime();

  // El tiempo actual
  const timeEnd = new Date().getTime();

  // El tiempo que ha pasado desde que se creo el post
  const elapsed = (timeStart - timeEnd) / 1000;

  for (const unit in DATE_UNITS) {
    const absoluteElapsed = Math.abs(elapsed);

    if (absoluteElapsed > DATE_UNITS[unit] || unit === 'second') {
      return rtf.format(
        Math.round(elapsed / DATE_UNITS[unit]),
        unit as Intl.RelativeTimeFormatUnit
      );
    }
  }
  return 'just now';
};
