# Releasing `@hk_net/remote-pi`

This is a maintainer-only release guide. It lives beside `package.json` and is
intentionally **not included** in the npm tarball: the package uses an explicit
`files` allowlist.

## 1. Prepare and verify the release

Run these commands from `pi-extension/`:

```bash
# Work on a dedicated release branch.
git switch -c release/hk-net-npm-<version>

# Update package.json's version, then install exactly from the lockfile.
corepack pnpm install --frozen-lockfile

# This runs typecheck, the full test suite, the build, package audit, and the
# packaged-artifact smoke test (including a real Pi extension load).
corepack pnpm run prepublishOnly

# Check the complete dependency tree, including dev dependencies.
corepack pnpm audit

git diff --check
git status --short
```

Commit the release preparation and push the branch before staging the package:

```bash
git add README.md package.json pnpm-lock.yaml pnpm-workspace.yaml
git commit -m "chore(pi-extension): prepare <version> release"
git push -u origin release/hk-net-npm-<version>
```

Use the actual package version in the branch and commit names. Do not include
secrets or one-time passwords in commits, shell history, or chat.

## 2. Stage the package (does not publish it)

Staged publishing requires npm CLI `11.15.0+` (Node `22.14.0+`). Confirm the
account and registry first:

```bash
npm --version
npm whoami
npm config get registry
npm view @hk_net/remote-pi version dist-tags --json
```

The package must already exist on npm and the authenticated account must have
write access. From the package directory, run:

```bash
npm stage publish . --access public --tag latest
```

For a prerelease channel, use an explicitly chosen tag such as `next` instead
of `latest`. The tag is immutable for that staged version. Staging does not
prompt for 2FA; it puts the tarball in npm's review queue and makes the version
unavailable to normal installs until approval.

Save the stage ID printed by npm. Inspect the staged package before approving:

```bash
npm stage list @hk_net/remote-pi --json
npm stage view <stage-id> --json
npm stage download <stage-id>
```

The same queue is available in the **Staged Packages** tab on npmjs.com.

## 3. Approve or reject

Approval is the publication step and requires proof of presence (2FA):

```bash
npm stage approve <stage-id>
```

After approval, verify the public version and tag:

```bash
npm view @hk_net/remote-pi version dist-tags --json
npm view @hk_net/remote-pi@<version> dist shasum integrity --json
```

If review finds a problem, reject the stage instead:

```bash
npm stage reject <stage-id>
```

Rejecting also requires 2FA. A staged version number is unique, so restaging
that same version requires rejecting the existing stage first. If the wrong
tag was used, reject and stage again with the intended tag.

## Important command distinctions

- `npm stage publish ...` uploads to npm's private staging queue; it is the
  command to use for a release that needs a human approval step.
- `npm stage approve <stage-id>` is what makes the staged version public.
- `npm publish --tag next` is a **direct public publish** with a non-default
  dist-tag; it is not staged publishing.
- `npm publish --dry-run` and `npm pack --dry-run` only validate locally and do
  not create a registry stage.

Never run `npm stage approve` or a normal `npm publish` until the package has
been reviewed and the publication is explicitly authorized.
