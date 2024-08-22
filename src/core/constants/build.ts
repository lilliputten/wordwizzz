import { TAppInfo } from '@/core/types/app/TAppInfo';

import appInfoRaw from '@/app-info.json';

export const appInfo: TAppInfo = appInfoRaw;

export const {
  currentTimeStr, // "2024.08.09 17:11 +0300"
  currentTimeTag, // "240809-1711"
  gitBranch, // "6-oauth-providers"
  gitCommitHash, // "49b752a"
  projectName, // "wordwizzz"
  timestamp, // "2024.08.09 17:11 +0300"
  timetag, // "240809-1711"
  version, // "0.0.3"
} = appInfo;

export const versionHash = 'v.' + version + ' / ' + timestamp;

const nodeEnv = process.env.NODE_ENV;

export const isDev = nodeEnv === 'development';
export const isProd = !isDev;
export const isClient = typeof window !== 'undefined';
export const isServer = !isClient;
