export interface IApply {
  id: number | null;
  name: string | null;
  college: string | null;
  major: string | null;
  firstIntention: number | null;
  secondIntention: number | null;
  phone: number | null;
  introduction: string | null;
  picture?: string | null;
}
export interface IOption {
  value: number;
  label: string;
  disabled?:boolean;
}
