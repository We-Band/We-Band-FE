export const parsePathSegments = (path: string) => {
  const segments = path.split('/'); // ["", "lite", "2025-2-31"]
  return segments;
};

export const parsePathToDate = (path: string) => {
  const segments = path.split('/'); // ["", "lite", "2025-2-31"]

  return segments[2];
};

export const parsePathToUserData = (path: string) => {
  const segments = path.split('/'); // ["", "lite", "2025-2-31", "성진-123123123", "정성진-123123123"]

  return segments.length > 3
    ? segments.slice(3).map((user) => {
        const [name, data] = decodeURIComponent(user).split('-');
        return { name, binaryData: decode(data) };
      })
    : [];
};

export const sumBinaryStrings = (
  userData: { name: string; binaryData: string }[],
): string => {
  if (userData.length === 0) return '0';

  // 가장 긴 binaryData 길이에 맞춰 앞쪽 0으로 패딩
  const maxLength = Math.max(...userData.map((user) => user.binaryData.length));
  const paddedData = userData.map((user) =>
    user.binaryData.padStart(maxLength, '0'),
  );

  let result = '';

  // 뒤에서부터 자리별로 합산
  for (let i = 0; i < maxLength; i++) {
    let sum = 0;

    for (const binary of paddedData) {
      sum += Number(binary[i]); // 문자 숫자를 더함
    }

    result += sum.toString(); // 자리별 총합을 문자열로 추가
  }

  return result;
};

const generateHangulCharset = () => {
  const hangulStart = 0xac00;
  const hangulEnd = 0xd7a3;
  let hangul = '';

  for (let i = hangulStart; i <= hangulEnd; i++) {
    hangul += String.fromCharCode(i);
  }

  return hangul;
};

const getAllEnglishLetters = () => {
  const upper = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i),
  ); // A-Z
  const lower = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i),
  ); // a-z
  return upper.concat(lower).join('');
};

const getCommonChineseCharacters = () => {
  let chinese = '';
  for (let i = 0x4e00; i <= 0x9fff; i++) {
    chinese += String.fromCharCode(i);
  }
  return chinese;
};

const charset =
  generateHangulCharset() +
  getAllEnglishLetters() +
  getCommonChineseCharacters();

export const encode = (binaryStr: string): string => {
  let bigIntValue = BigInt('0b' + binaryStr);
  let encoded = '';

  const base = BigInt(charset.length);

  while (bigIntValue > 0n) {
    const remainder = bigIntValue % base;
    encoded = charset[Number(remainder)] + encoded;
    bigIntValue /= base;
  }

  return encoded || '0';
};

export const decode = (encodedStr: string): string => {
  const base = BigInt(charset.length);
  let bigIntValue = BigInt(0);

  for (const char of encodedStr) {
    bigIntValue = bigIntValue * base + BigInt(charset.indexOf(char));
  }

  return bigIntValue.toString(2).padStart(210, '0');
};
