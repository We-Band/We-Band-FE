import { css } from 'styled-components';

const headerBaseFontStyles = css`
  font-family: 'SF Pro Display';
  letter-spacing: -0.1px;
`;

const Title = {
  T04_Bold: css`
    ${headerBaseFontStyles}
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
  `,
  T04_Medium: css`
    ${headerBaseFontStyles}
    font-size: 24px;
    font-weight: 500;
    line-height: 28px;
  `,
  T04_Regular: css`
    ${headerBaseFontStyles}
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
  `,

  T03_Bold: css`
    ${headerBaseFontStyles}
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
  `,
  T03_Medium: css`
    ${headerBaseFontStyles}
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
  `,
  T03_Regular: css`
    ${headerBaseFontStyles}
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
  `,

  T02_Bold: css`
    ${headerBaseFontStyles}
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
  `,
  T02_Medium: css`
    ${headerBaseFontStyles}
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
  `,
  T02_Regular: css`
    ${headerBaseFontStyles}
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
  `,

  T01_Bold: css`
    ${headerBaseFontStyles}
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
  `,
  T01_Medium: css`
    ${headerBaseFontStyles}
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
  `,
  T01_Regular: css`
    ${headerBaseFontStyles}
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  `,
};

const Subtitles = {
  S03_Bold: css`
    ${headerBaseFontStyles}
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
  `,
  S03_Medium: css`
    ${headerBaseFontStyles}
    font-size: 15px;
    font-weight: 500;
    line-height: 20px;
  `,
  S03_Regular: css`
    ${headerBaseFontStyles}
    font-size: 15px;
    font-weight: 400;
    line-height: 20px;
  `,

  S02_Bold: css`
    ${headerBaseFontStyles}
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
  `,
  S02_Medium: css`
    ${headerBaseFontStyles}
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  `,
  S02_Regular: css`
    ${headerBaseFontStyles}
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  `,

  S01_Bold: css`
    ${headerBaseFontStyles}
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
  `,
  S01_Medium: css`
    ${headerBaseFontStyles}
    font-size: 12px;
    font-weight: 500;
    line-height: 16px;
  `,
  S01_Regular: css`
    ${headerBaseFontStyles}
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
  `,
};

const Body = {
  B03: css`
    ${headerBaseFontStyles}
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
  `,
  B02: css`
    ${headerBaseFontStyles}
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  `,
  B01: css`
    ${headerBaseFontStyles}
    font-size: 13px;
    font-weight: 400;
    line-height: 16px;
  `,
};

const fontStyles = {
  ...Title,
  ...Subtitles,
  ...Body,
};

export default fontStyles;
