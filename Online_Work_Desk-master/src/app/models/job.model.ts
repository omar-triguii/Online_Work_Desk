import { Byte } from "@angular/compiler/src/util";

export interface Job {

  Title: string,
  Description: string,
  startDate: Date,
  estimatedDuration: number,
  Price: number,
  Status: 'Free' | 'Busy' | 'Deleted',
  Industry: string,
  jobImageUrl: string,
  owner: number,
  applications?: any[],
  requiredSkills?: string[]

}
