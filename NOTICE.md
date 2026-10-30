# Source and dependencies

This exercise's workbench interface, sample content, release fixtures and management scripts were written independently for this exercise. It contains no production application source or customer data.

It runs the public `@deepseek-ai/dsh` package, pinned to `0.2.1-rc.5`:

- Repository: https://github.com/deepseek-ai/deepseek-harness
- Package: https://www.npmjs.com/package/@deepseek-ai/dsh/v/0.2.1-rc.5
- Upstream license: MIT. Installed packages retain their upstream license files and notices.

The client wrapper uses DSH's published `window.__ModuleLoader__.load` interface. The plugin uses the published Cordis lifecycle and WebServer extension interfaces. This is a small exercise plugin, not a copy of the upstream application.
