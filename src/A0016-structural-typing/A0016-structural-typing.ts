type VerifyUserFn = (user: User, sentUserValue: User) => boolean;
type User = {
  username: string;
  password: string;
};

const verifyUser: VerifyUserFn = (user, sentUserValue) => {
  return user.username === sentUserValue.username && user.password === sentUserValue.password;
};

const bdUser = { username: 'João', password: '123456' };
const sentUser = { username: 'João', password: '123456' };

const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);
