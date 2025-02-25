import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-manufacturing-ui',
  outputTargets: [
    { type: 'dist' },
    { type: 'www', serviceWorker: null }
  ]
};
