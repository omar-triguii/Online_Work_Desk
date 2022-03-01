import { Byte } from "@angular/compiler/src/util";

export interface User {

  userId: number,
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  phoneNumber: string,
  address: string,
  profileImage?: string,
  rating: number,
  nbRatings: number,
  cvUrl: string,
  employmentStatus: string,
  birthDate: Date,
  gender: 'Male' | 'Female'

}
