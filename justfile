default:
    just -l

patch:
    pnpm version patch
    pnpm publish
