import { Oval } from "react-loader-spinner";
import * as S from "./styles";

const Loader = () => {
  return (
    <S.Wrapper data-testid="loader">
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        color="#d04f8c"
        secondaryColor="#dd79a8"
      />
    </S.Wrapper>
  );
};

export { Loader };
