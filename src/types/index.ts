export interface Guarantor {
  guarantorName: string;
  guarantorSurname: string;
  guarantorFin: string;
  guarantorMobile: string;
}

export interface Credit {
  activitySector: string;
  monthlyIncome: number;
  workExperienceYears: number;
  workExperienceMonths: number;
  region: string;
  businessAddress: string;
  currency: string;
  creditPurpose: string;
  amount: number;
  duration: number;
  interestRate: number;
  guarantor: Guarantor[];
}

export interface IUser {
  physicalAddress: string;
  fin: string;
  series: string;
  code: string;
  name: string;
  surname: string;
  fathersName: string;
  registrationAddress: string;
  dateOfBirth: string;
  mobileNumber: string;
  homeNumber: string;
  credit?: Credit[];
}
