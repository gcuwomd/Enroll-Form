export interface IApply {
  id: number | null;
  name: string | null;
  college: string | null;
  firstIntention: string | null;
  secondIntention: string | null;
  phone: number | null;
  introduction: string | null;
  picture?: string | null;
}
export interface IOption {
  value: number;
  label: string;
  disabled?:boolean;
}
