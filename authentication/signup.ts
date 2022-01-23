import { Auth } from 'aws-amplify';

export const signUp = async (email: string, password: string) => {
  const { user } = await Auth.signUp({
    username: email,
    password,
    attributes: {
      email,
    },
  });
  return user;
};
