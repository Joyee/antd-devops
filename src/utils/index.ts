import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export const formatTimeToRelativeTime = (time: string) => {
  return dayjs(time).fromNow();
}