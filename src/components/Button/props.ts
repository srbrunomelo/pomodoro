export interface IButton {
  label?: string;
  active?: boolean;
  variant?: "default" | "primary";
  onClick?: () => void;
}
