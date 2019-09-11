# Website for Utah Rust

[![Build Status](https://travis-ci.org/utah-rust/utah-rust.github.io.svg?branch=source)](https://travis-ci.org/utah-rust/utah-rust.github.io)

You can also find us at https://meetup.com/utah-rust and in the `#utah` channel at http://rust-lang.slack.com.

## Contributing

### Editing the Website

Install Rust:

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Install Cobalt:

```
cargo install cobalt-bin
```

Clone the repo and enter website:

```
git clone git@github.com:utah-rust/utah-rust.github.io.git
cd ./utah-rust.github.io/
```

Build the website:

```bash
cobalt build
```

Preview:

```bash
cobalt serve
```

The website is built using [`cobalt`][cobalt] and [`liquid`][liquid] and is hosted using [Github Pages](https://pages.github.com/).

1. [Get started with `cobalt`](http://cobalt-org.github.io/getting-started/)
2. Edit and create a PR for the `source` branch (`master` is for the built site).

[cobalt]: http://cobalt-org.github.io
[liquid]: https://shopify.github.io/liquid
