import { ITimer } from "./props";
import { Wrapper } from "./styled";
import { secondsToMinutes } from "./../../helpers";

export const Timer = ({ mainTime }: ITimer) => {
  return <Wrapper>{secondsToMinutes(mainTime)}</Wrapper>;
};
