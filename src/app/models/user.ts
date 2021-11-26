export enum Roles {
  STAFF = 'staff',
  STUDENT = 'student',
  MANAGER = 'manager',
  ADMIN = 'admin'

}

export enum Gender {
  FEMALE = 'female',
  MALE = 'male',
  OTHER = 'other'
}

export interface IAddress {
  city: string;
  street: string;
  postalCode: string;
}

export interface ICompanies{
  id: number;
  name: string;
  description: string;
  location: IAddress;
}


export interface IUser {
  id: number;
  name: string;
  surname: string;
  age: number;
  dateOfBirth: string;
  address: IAddress;
  role: Roles;
  username: string;
  profilePhotoUrl: string;
  companies?: ICompanies[];
  gender: Gender;
}
