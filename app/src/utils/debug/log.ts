
import { logger } from 'react-native-logs';

const log = logger.createLogger();

export const _log = (txt: string) : void => {
  log.info(txt);
} 
