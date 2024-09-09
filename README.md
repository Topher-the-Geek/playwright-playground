Playwright with pnpm

100% goodness

```
git checkout 03d1d4c
pnpm dev    # Runs dev server with hot module replace
pnpm build  # Builds bundled version
pnpm test   # Runs Playwright compontent test
```

Playwright with Bazel

Build goodness. Test, not so much.

```
git checkout main
pnpm dev                   # Still works to run dev server with hot module replace
bazel build //react:build  # Builds bundled version
bazel test //react:test1   # 'To load an ES module, set "type": "module"'
bazel test //react:test2   # "did not expect test.use() to be called here"
```
