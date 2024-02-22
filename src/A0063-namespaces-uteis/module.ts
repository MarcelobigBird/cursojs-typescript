import _ from 'lodash';

_.mul = function (array: number[]): number {
  return array.reduce((acumulator, value) => acumulator * value, 1);
};

global.MINHAGLOBAL = 'VALOR DA MINHA GLOBAL';

export default _;
