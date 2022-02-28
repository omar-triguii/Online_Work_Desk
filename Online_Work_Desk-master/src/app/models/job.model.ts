import { Byte } from "@angular/compiler/src/util";

export interface Job {
  jobId:number,
  title: string,
  description: string,
  startDate: Date,
  estimatedDuration: number,
  price: number,
  status: 'Free' | 'Busy' | 'Deleted',
  industry: string,
  jobImageUrl: string,
  owner: number,
  applications?: any[]

}
