import { Job } from "./models/job.model";
import { User } from "./models/user.model";

export interface Application {
  applicationId: number,
  description: string,
  applicationOwner: User,
  job: Job
}
