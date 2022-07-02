let a: number;
let b: boolean;
let c: string;

let d: Array<string>;

const logFunction = (data: unknown): never => {
  const data2: unknown = data;
  console.log(data);
  console.log(data2);
  throw new Error('Bad!');
};

type Permission = 'admin' | 'user' | 'manager';

type PermissionWithoutAdmin = Exclude<Permission, 'admin'>;

type TuplePermissions = [Permission, Permission];

const perm: TuplePermissions = ['admin', 'manager'];

interface DepartmentsForPermissions {
  depName: string;
  lvl: number;
}

const DepsForPerms: Record<Permission, DepartmentsForPermissions> = {
  admin: {
    depName: 'security',
    lvl: 10,
  },
  user: {
    depName: 'sales',
    lvl: 5,
  },
  manager: {
    depName: 'sales',
    lvl: 10,
  },
};

interface BasicUser<A = boolean, P = TuplePermissions> {
  readonly name: string;
  surname: string;
  age: number;
  isAdmin: A;
  permissions?: P;
}

interface BasicUser {
  accounts: number;
}

type BasicUserReadonly = Readonly<BasicUser>;
type BasicUserRequired = Required<BasicUser>;
type BasicUserPartial = Partial<BasicUser>;

type BasicUserReadonlyRequired = Readonly<Required<BasicUser>>;

type NormalUser<A = boolean> = {
  name: string;
  surname: string;
  age: number;
  isAdmin: A;
};

type NormalUserWithoutPermissions = Omit<NormalUser, 'permissions'>;

type AdvancedUser<P = TuplePermissions> = {
  permissions?: P;
  accounts: number;
};

type FullUser<A = boolean, P = TuplePermissions> = NormalUser<A> &
  AdvancedUser<P>;

const user: BasicUser<boolean, TuplePermissions> = {
  name: 'ManiTeja',
  surname: 'Emmadi',
  age: 24,
  isAdmin: false,
  accounts: 1,
};

// user.name = 'shitbag'

const newUser: FullUser<number> = {
  name: '',
  surname: '',
  age: 0,
  isAdmin: 1,
  permissions: ['admin', 'manager'],
  accounts: 2,
};

let usersArray: BasicUser<boolean, TuplePermissions>[] = [user, user];

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

type BasicFunction = () => FullUser[];

type getFirstReturnType = ReturnType<() => string>;

getFirst<BasicUser>(usersArray);

type MathFunc = (a: number, b: number) => number;

const multiply: MathFunc = (a, b) => a * b;
const add: MathFunc = (a, b) => a + b;
