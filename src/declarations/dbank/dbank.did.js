export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'checkBalance' : IDL.Func([], [IDL.Nat], ['query']),
    'topUp' : IDL.Func([IDL.Nat], [], ['oneway']),
    'widraw' : IDL.Func([IDL.Nat], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
