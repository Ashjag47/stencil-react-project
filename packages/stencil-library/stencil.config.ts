import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-library',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      // dir: '../dist', // Specify the output directory for the distribution build
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
      // dir: '../dist/custom-elements', // Optional: Specify the output directory for custom elements
    },
    {
      type: 'docs-readme',
      // dir: '../docs', // Optional: Specify the output directory for documentation
    },
    {
      type: 'www',
      // serviceWorker: null, // Disable service workers
      // dir: '../www', // Optional: Specify the output directory for the www build
    },
    reactOutputTarget({
      componentCorePackage: 'stencil-library', // Ensure this is supported by your version
      proxiesFile: '../react-library/lib/components/stencil-generated/index.ts',
      outDir: '../react-library/lib/components/stencil-generated',
      includeDefineCustomElements: true, // Adding this to ensure custom elements are defined
    }),
  ],
  testing: {
    browserHeadless: "new",
  },
};
