import { postBuildScript, publishScript } from 'js2me-exports-post-build-script';

postBuildScript({
  buildDir: 'dist',
  rootDir: '.',
  srcDirName: 'src',
  filesToCopy: ['LICENSE', 'README.md'],
  updateVersion: process.env.PUBLISH_VERSION,
  onDone: (versionsDiff, { $ } , packageJson, { targetPackageJson }) => {
    $(`cp -f src/index.ts dist/index.d.ts`);

    if (process.env.PUBLISH) {
      publishScript({
        nextVersion: versionsDiff?.next ?? packageJson.version,
        currVersion: versionsDiff?.current,
        publishCommand: 'pnpm publish',
        commitAllCurrentChanges: true,
        createTag: true,
        githubRepoLink: 'https://github.com/js2me/http-status-code-types',
        cleanupCommand: 'pnpm clean',
        targetPackageJson
      })
    }
  }
});

