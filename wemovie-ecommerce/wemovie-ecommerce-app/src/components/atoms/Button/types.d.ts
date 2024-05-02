export interface ButtonProps {
  message?: string;
  isAddToCart?: boolean;
  color?: string;
  ammount?: number;
  buttonAction: () => void;
}
