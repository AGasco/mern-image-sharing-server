import { getMyPhotosRoute } from './getMyPhotosRoute';
import { getMySharedPhotosRoute } from './getMySharedPhotosRoute';
import { uploadPhotoRoute } from './uploadPhotoRoute';

export const routes = [
  getMyPhotosRoute,
  getMySharedPhotosRoute,
  uploadPhotoRoute
];

export { protectRouteMiddleware } from './protectRouteMiddleware';
