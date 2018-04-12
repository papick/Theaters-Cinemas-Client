import {User} from './user.model';

export class Friendship {
  constructor(
    public id?: number,
    public user_one?: User,
    public user_two?: User,
    public user_sent?: User,
    public status?: number,
  ) {
  }

}
