import { SectionProps, SectionSubTitleProps, SectionTitleProps } from "./types";
import * as S from "./style";

const Section = ({ width, height, children, customStyle }: SectionProps) => {
  return (
    <S.Container width={width} height={height} customStyle={customStyle}>
      {children}
    </S.Container>
  );
};

const Title = ({ children, customStyle }: SectionTitleProps) => {
  return <S.Title customStyle={customStyle}>{children}</S.Title>;
};

const SubTitle = ({ children, customStyle }: SectionSubTitleProps) => {
  return <S.SubTitle customStyle={customStyle}>{children}</S.SubTitle>;
};

export default Object.assign(Section, {
  Title,
  SubTitle,
});
