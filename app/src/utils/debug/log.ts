
import { logger } from 'react-native-logs';


export const _log = (txt: string) : void => {
const log = logger.createLogger();
  log.info(txt);
} 
