# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# MK Designing

React and Vite website. Run `npm ci` and `npm run dev` from this directory for local development. Run `npm run build` to generate the static site in `mk-build/`.

## Automatic cPanel deployment

The GitHub Actions workflow at `.github/workflows/cpanel-deploy.yml` builds and deploys the site over explicit FTPS whenever changes are pushed to `main`. It can also be started manually from the repository's Actions tab.

Add these repository secrets in GitHub under **Settings > Secrets and variables > Actions**:

- `CPANEL_FTP_SERVER`: your hosting FTP hostname, such as `ftp.example.com`.
- `CPANEL_FTP_USERNAME`: the cPanel FTP account username.
- `CPANEL_FTP_PASSWORD`: the FTP account password.
- `CPANEL_SERVER_DIR`: the remote document-root directory, ending with `/`, commonly `public_html/`.

Create an FTP account in cPanel with access to the intended document root, and confirm the server supports explicit FTPS on port 21. Use the actual document root for the domain or subdomain; it may differ from `public_html/`. After pushing the workflow to GitHub, check the Actions run for its first deployment result.
