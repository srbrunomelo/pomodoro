import { Wrapper } from "./styled";
import { IButton } from "./props";

export const Button = ({
  variant = "default",
  active,
  label,
  onClick,
  ...props
}: IButton) => {
  return (
    <Wrapper variant={variant} active={active} onClick={onClick} {...props}>
      {label}
    </Wrapper>
  );
};
