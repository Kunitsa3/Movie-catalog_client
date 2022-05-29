export const joinArray = <Type, Key extends keyof Type>(array: Type[], key: Key) => {
  return array.map(element => element[key]).join(', ');
};
