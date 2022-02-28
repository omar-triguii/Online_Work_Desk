import { Byte } from "@angular/compiler/src/util";

export interface User {

  userId: string,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phoneNumber: string,
  address: string,
  profileImage?: Byte[],
  rating: number,
  nbRatings: number,
  cvUrl: string,
  employmentStatus: string,
  birthDate: Date,
  gender: 'Male' | 'Female'

}
