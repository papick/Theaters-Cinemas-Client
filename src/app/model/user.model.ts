import {Friendship} from './friendship.model';

export class User {
  constructor(public id?: number,
              public email?: string,
              public password?: string,
              public ime?: string,
              public prezime?: string,
              public grad?: string,
              public brTelefona?: number,
              public friendList?: Array<Friendship>) {
    this.friendList = new Array<Friendship>();
  }

}
