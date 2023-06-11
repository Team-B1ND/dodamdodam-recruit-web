import { CSSObject } from "styled-components";
import { CommonComponentProps } from "../common.type";

export interface SectionProps extends CommonComponentProps {
  width?: CSSObject["width"];
  height?: CSSObject["height"];
}

export interface SectionTitleProps extends CommonComponentProps {}

export interface SectionSubTitleProps extends CommonComponentProps {}
