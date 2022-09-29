import { getMyPhotosRoute } from './getMyPhotosRoute';
import { getMySharedPhotosRoute } from './getMySharedPhotosRoute';

export const routes = [getMyPhotosRoute, getMySharedPhotosRoute];

export { protectRouteMiddleware } from './protectRouteMiddleware';
