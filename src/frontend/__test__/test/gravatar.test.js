import gravatar from '../../utils/gravatar';

test('Gravatar Function Test', () => {
  const email = 'jagarcia@gmail.com';
  const gravatarURL =
    'https://gravatar.com/avatar/33f8cb804e03b456d5f5241c44575d35';
  expect(gravatarURL).toEqual(gravatar(email));
});
