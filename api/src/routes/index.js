import { default as AuthRouter } from './AuthRouter.js';
import { default as ImageRouter } from './ImageRouter.js';
import { default as UserRouter } from './UserRouter.js';
import { default as HealthRouter } from './HealthRouter.js';

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
  {
    router: HealthRouter,
    route: '/health',
  },
];

export default routes;
