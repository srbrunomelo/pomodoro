import { ITimer } from "./props";
import { Wrapper } from "./styled";
import { secondsToMinutes } from "./../../helpers";

export const Timer = ({ time }: ITimer) => {
  return <Wrapper>{secondsToMinutes(time)}</Wrapper>;
};
