export interface IToast {
  message: string;
  type: string;
  visible: boolean;
}
export interface IToastContext {
  toast: IToast;
  hide(): void;
  show(args: any): void;
}
