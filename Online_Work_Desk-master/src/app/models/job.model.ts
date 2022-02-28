import { Byte } from "@angular/compiler/src/util";
import { User } from "./user.model";

export interface Job {
  jobId:number,
  title: string,
  description: string,
  startDate: Date,
  estimatedDuration: number,
  price: number,
  status: 'Free' | 'Busy' | 'Deleted',
  industry: string,
  jobImageUrl?: string | null,
  owner: User,
  applications?: any[]

}
