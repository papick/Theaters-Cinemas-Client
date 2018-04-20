import {User} from '../../model/user.model';
export class UsedOffer {
  constructor(public id?: Number,
              public name?: string,
              public description?: string,
              public date?: Date,
              public customer?: User
  ) {}

}


