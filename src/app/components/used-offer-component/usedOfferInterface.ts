import {User} from '../../model/user.model';

export interface UsedOffer {
  id;
  name;
  description;
  date;
  user: User;
}
