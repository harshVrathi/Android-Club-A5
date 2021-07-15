import {add, del} from './typeaction';

export const addanit=(anit)=>(
  {
    type: add,
    data: anit
  }
);
export const deleteanit=(key)=>(
  {
    type: del,
    key: key
  }
);