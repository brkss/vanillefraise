import { User } from '../../../entity/User';
import { mg_verify_account } from '../mailgun';
import { generateAccountVerificationToken } from '../../token/accountVerificationToken';

export const send_verification_emails = async  () : Promise<boolean> => {

  const users = await User.find({where: {verified: false}});
  if(users.length === 0) return false;
  for(let user of users){
    const _token = generateAccountVerificationToken(user);
    await mg_verify_account(user, _token);
  }

  return true;

}
