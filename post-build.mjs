import { postBuildScript } from 'js2me-exports-post-build-script';

postBuildScript({
  buildDir: 'dist',
  rootDir: '.',
  srcDirName: 'src',
  filesToCopy: ['LICENSE', 'README.md'],
  onDone: (_versionsDiff, { $ }) => {
    $(`cp -f src/index.ts dist/index.d.ts`);
  },
});
