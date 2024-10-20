import {
  _id,
  _name,
  _model,
  _type,
  _length,
  _quantity
} from './_mock';

// ----------------------------------------------------------------------

export const _myAccount = {
  displayName: 'Jaydon Frankie',
  email: 'demo@minimals.cc',
  photoURL: '/assets/images/avatar/avatar-25.webp',
};

// ----------------------------------------------------------------------

export const _wires = [...Array(24)].map((_, index) => ({
  id: _id(index),
  name: _name(index),
  model: _model(index),
  type: _type(index),
  length: _length(index),
  quantity: _quantity(index)
}));
