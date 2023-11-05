const regExpWeak = /[a-z]/;
const regExpMedium = /\d+/;
const regExpStrong = /[!,@,#,$,%,^,&,*,?,_,~,-,(,)]/;
const oneLowerCaseLetter = /(?=[a-z])/;
const oneUpperCaseLetter = /(?=[A-Z])/;
const oneDigit = /(?=.+[0-9])/;
const oneSpecialCharacter = /(?=.+[!,@,#,$,%,^,&,*,?,_,~,-,(,)])/;

type Strength = 'strong' | 'weak' | 'medium' | 'best';

export const checkPasswordStrength = (str: string): Strength => {
  const size = str.length;

  if (
    size >= 16 &&
    oneLowerCaseLetter.test(str) &&
    oneUpperCaseLetter.test(str) &&
    oneDigit.test(str) &&
    oneSpecialCharacter.test(str)
  ) {
    return 'best';
  }
  if (
    (size >= 8 &&
      // size < 16 &&
      regExpWeak.test(str) &&
      oneLowerCaseLetter.test(str) &&
      oneUpperCaseLetter.test(str) &&
      oneDigit.test(str)) ||
    regExpStrong.test(str)
  ) {
    return 'strong';
  }

  if (size >= 8 && oneLowerCaseLetter.test(str) && oneDigit.test(str)) {
    return 'medium';
  }

  if (
    size <= 8 &&
    (regExpWeak.test(str) || regExpMedium.test(str) || regExpStrong.test(str))
  ) {
    return 'weak';
  }
  return 'weak';
};
