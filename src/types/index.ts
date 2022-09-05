export interface IApply {
  id: string | null;
  name: string | null;
  sex: string | null;
  college: string | null;
  major: string | null;
  firstIntention: string | null;
  secondIntention: string | null;
  phone: string | null;
  adjust: boolean;
  introduction: string | null;
  picture?: string;
}
export interface IOption {
  value: string;
  label: string;
  disabled?:boolean;
}
