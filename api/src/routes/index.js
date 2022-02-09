import { default as AuthRouter } from './AuthRouter.js';
import { default as ImageRouter } from './ImageRouter.js';
import { default as UserRouter } from './UserRouter.js';

const routes = [
  {
    router: AuthRouter,
    route: '/auth',
  },
  {
    router: ImageRouter,
    route: '/image',
  },
  {
    router: UserRouter,
    route: '/user',
  },
];

export default routes;
