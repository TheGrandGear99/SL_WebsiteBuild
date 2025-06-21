# Project Structure

```
.github/
  workflows/
    build.yml
    format.yml
    linting.yml
    tests.yml
.svelte-kit/
  generated/
    client/
      nodes/
        0.js
        1.js
        2.js
        3.js
        4.js
        5.js
        6.js
        7.js
        8.js
        9.js
        10.js
        11.js
        12.js
        13.js
        14.js
        15.js
        16.js
        17.js
        18.js
        19.js
        20.js
        21.js
        22.js
        23.js
        24.js
        25.js
        26.js
        27.js
        28.js
        29.js
        30.js
        31.js
        32.js
        33.js
        34.js
        35.js
      app.js
      matchers.js
    server/
      internal.js
    root.js
    root.svelte
  types/
    src/
      routes/
        (admin)/
          account/
            (menu)/
              billing/
                manage/
                  $types.d.ts
                  proxy+page.server.ts
                $types.d.ts
                proxy+page.server.ts
              settings/
                change_email/
                  $types.d.ts
                change_email_subscription/
                  $types.d.ts
                change_password/
                  $types.d.ts
                delete_account/
                  $types.d.ts
                edit_profile/
                  $types.d.ts
                reset_password/
                  $types.d.ts
                $types.d.ts
              $types.d.ts
            api/
              $types.d.ts
            create_profile/
              $types.d.ts
            select_plan/
              $types.d.ts
            sign_out/
              $types.d.ts
            subscribe/
              [slug]/
                $types.d.ts
                proxy+page.server.ts
            $types.d.ts
            proxy+layout.server.ts
        (marketing)/
          auth/
            callback/
              $types.d.ts
          blog/
            (posts)/
              awesome_post/
                $types.d.ts
              example_blog_post/
                $types.d.ts
              how_we_built_our_41kb_saas_website/
                $types.d.ts
              $types.d.ts
            rss.xml/
              $types.d.ts
            $types.d.ts
          contact_us/
            $types.d.ts
            proxy+page.server.ts
          login/
            current_password_error/
              $types.d.ts
            forgot_password/
              $types.d.ts
            sign_in/
              $types.d.ts
            sign_up/
              $types.d.ts
            $types.d.ts
            proxy+layout.server.ts
          pricing/
            $types.d.ts
          search/
            api.json/
              $types.d.ts
            $types.d.ts
          sitemap.xml/
            $types.d.ts
          $types.d.ts
        $types.d.ts
    route_meta_data.json
  ambient.d.ts
  non-ambient.d.ts
  tsconfig.json
src/
  lib/
    emails/
      welcome_email_html.hbs
      welcome_email_text.hbs
    build_index.ts
    index.js
    load_helpers.ts
    mailer.test.ts
    mailer.ts
  routes/
    (admin)/
      account/
        (menu)/
          billing/
            manage/
              +page.server.ts
            +page.server.ts
            +page.svelte
          settings/
            change_email/
              +page.svelte
            change_email_subscription/
              +page.svelte
            change_password/
              +page.svelte
            delete_account/
              +page.svelte
            edit_profile/
              +page.svelte
            reset_password/
              +page.svelte
            +page.svelte
            settings_module.svelte
          +layout.svelte
          +page.server.ts
          +page.svelte
        api/
          +page.server.ts
          page.server.test.ts
        create_profile/
          +page.svelte
          +page.ts
        select_plan/
          +page.svelte
        sign_out/
          +page.svelte
        subscribe/
          [slug]/
            +page.server.ts
        +layout.server.ts
        +layout.svelte
        +layout.ts
        subscription_helpers.server.ts
    (marketing)/
      auth/
        callback/
          +server.js
      blog/
        (posts)/
          awesome_post/
            +page.svelte
          example_blog_post/
            +page.svelte
          how_we_built_our_41kb_saas_website/
            +page.svelte
          +layout.svelte
        rss.xml/
          +server.ts
        +layout.ts
        +page.svelte
        posts.ts
      contact_us/
        +page.server.ts
        +page.svelte
      login/
        current_password_error/
          +page.svelte
        forgot_password/
          +page.server.ts
          +page.svelte
        sign_in/
          +page.server.ts
          +page.svelte
        sign_up/
          +page.server.ts
          +page.svelte
        +layout.server.ts
        +layout.svelte
        +layout.ts
        +page.svelte
        login_config.ts
      pricing/
        +page.svelte
        +page.ts
        pricing_module.svelte
        pricing_plans.ts
      search/
        api.json/
          +server.ts
        +page.server.ts
        +page.svelte
      sitemap.xml/
        +server.ts
      +layout.svelte
      +page.svelte
      +page.ts
    +error.svelte
    +layout.svelte
  ambient.d.ts
  app.css
  app.d.ts
  app.html
  config.ts
  DatabaseDefinitions.ts
  hooks.server.ts
  index.test.ts
static/
  images/
    cm_logo.svg
    example-home.png
    rss.svg
  favicon.png
  robots.txt
supabase/
  migrations/
    20240730010101_initial.sql
    20240731051052_add_unsubscribed_to_profiles.sql
.env.example
.env.local
.eslintignore
.eslintrc.cjs
.gitignore
.npmrc
.prettierignore
.prettierrc
analytics_docs.md
checks.sh
database_migration.sql
email_docs.md
LICENSE
package-lock.json
package.json
postcss.config.js
README.md
SECURITY.md
svelte.config.js
tsconfig.json
vite.config.ts
```


## .github\workflows\build.yml

```yml
name: Build

on: [push, pull_request]

env:
  PUBLIC_SUPABASE_URL: "https://fake_test_url.supabase.co"
  PUBLIC_SUPABASE_ANON_KEY: "fake_anon_key"
  PRIVATE_SUPABASE_SERVICE_ROLE: "fake_service_role"
  PRIVATE_STRIPE_API_KEY: "fake_strip_api_key"

jobs:
  build_and_test:
    name: Build
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: NPM install
        run: npm install

      - name: SvelteKit Build
        run: npm run build
```


## .github\workflows\format.yml

```yml
name: Format Check

on: [push, pull_request]

env:
  PUBLIC_SUPABASE_URL: "https://fake_test_url.supabase.co"
  PUBLIC_SUPABASE_ANON_KEY: "fake_anon_key"
  PRIVATE_SUPABASE_SERVICE_ROLE: "fake_service_role"
  PRIVATE_STRIPE_API_KEY: "fake_strip_api_key"

jobs:
  build_and_test:
    name: Code Format Check
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-go@v5

      - name: NPM install
        run: npm install

      - name: Check Code Format
        run: npm run format_check

      - name: Download go misspell utility
        run: go install github.com/client9/misspell/cmd/misspell@latest

      - name: Run misspell to fine misspelled words
        run: misspell -error ./src README.md
```


## .github\workflows\linting.yml

```yml
name: Linting

on: [push, pull_request]

env:
  PUBLIC_SUPABASE_URL: "https://fake_test_url.supabase.co"
  PUBLIC_SUPABASE_ANON_KEY: "fake_anon_key"
  PRIVATE_SUPABASE_SERVICE_ROLE: "fake_service_role"
  PRIVATE_STRIPE_API_KEY: "fake_strip_api_key"

jobs:
  build_and_test:
    name: Linting and Typechecking
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: NPM install
        run: npm install

      - name: Linting
        run: npm run lint

      - name: Typechecking
        run: npm run check
```


## .github\workflows\tests.yml

```yml
name: Tests

on: [push, pull_request]

env:
  PUBLIC_SUPABASE_URL: "https://fake_test_url.supabase.co"
  PUBLIC_SUPABASE_ANON_KEY: "fake_anon_key"
  PRIVATE_SUPABASE_SERVICE_ROLE: "fake_service_role"
  PRIVATE_STRIPE_API_KEY: "fake_strip_api_key"

jobs:
  build_and_test:
    name: Tests
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: NPM install
        run: npm install

      - name: Tests
        run: npm run test_run
```


## .svelte-kit\generated\client\nodes\0.js

```js
export { default as component } from "../../../../src/routes/+layout.svelte";
```


## .svelte-kit\generated\client\nodes\1.js

```js
export { default as component } from "../../../../src/routes/+error.svelte";
```


## .svelte-kit\generated\client\nodes\2.js

```js
import * as universal from "../../../../src/routes/(admin)/account/+layout.ts";
export { universal };
export { default as component } from "../../../../src/routes/(admin)/account/+layout.svelte";
```


## .svelte-kit\generated\client\nodes\3.js

```js
export { default as component } from "../../../../src/routes/(admin)/account/(menu)/+layout.svelte";
```


## .svelte-kit\generated\client\nodes\4.js

```js
export { default as component } from "../../../../src/routes/(marketing)/+layout.svelte";
```


## .svelte-kit\generated\client\nodes\5.js

```js
import * as universal from "../../../../src/routes/(marketing)/blog/+layout.ts";
export { universal };
export { default as component } from "../../../../node_modules/@sveltejs/kit/src/runtime/components/svelte-5/layout.svelte";
```


## .svelte-kit\generated\client\nodes\6.js

```js
export { default as component } from "../../../../src/routes/(marketing)/blog/(posts)/+layout.svelte";
```


## .svelte-kit\generated\client\nodes\7.js

```js
import * as universal from "../../../../src/routes/(marketing)/login/+layout.ts";
export { universal };
export { default as component } from "../../../../src/routes/(marketing)/login/+layout.svelte";
```


## .svelte-kit\generated\client\nodes\8.js

```js
export { default as component } from "../../../../src/routes/(admin)/account/(menu)/+page.svelte";
```


## .svelte-kit\generated\client\nodes\9.js

```js
export { default as component } from "../../../../src/routes/(admin)/account/(menu)/billing/+page.svelte";
```


## .svelte-kit\generated\client\nodes\10.js

```js

```


## .svelte-kit\generated\client\nodes\11.js

```js
export { default as component } from "../../../../src/routes/(admin)/account/(menu)/settings/+page.svelte";
```


## .svelte-kit\generated\client\nodes\12.js

```js
export { default as component } from "../../../../src/routes/(admin)/account/(menu)/settings/change_email/+page.svelte";
```


## .svelte-kit\generated\client\nodes\13.js

```js
export { default as component } from "../../../../src/routes/(admin)/account/(menu)/settings/change_email_subscription/+page.svelte";
```


## .svelte-kit\generated\client\nodes\14.js

```js
export { default as component } from "../../../../src/routes/(admin)/account/(menu)/settings/change_password/+page.svelte";
```


## .svelte-kit\generated\client\nodes\15.js

```js
export { default as component } from "../../../../src/routes/(admin)/account/(menu)/settings/delete_account/+page.svelte";
```


## .svelte-kit\generated\client\nodes\16.js

```js
export { default as component } from "../../../../src/routes/(admin)/account/(menu)/settings/edit_profile/+page.svelte";
```


## .svelte-kit\generated\client\nodes\17.js

```js
export { default as component } from "../../../../src/routes/(admin)/account/(menu)/settings/reset_password/+page.svelte";
```


## .svelte-kit\generated\client\nodes\18.js

```js

```


## .svelte-kit\generated\client\nodes\19.js

```js
import * as universal from "../../../../src/routes/(admin)/account/create_profile/+page.ts";
export { universal };
export { default as component } from "../../../../src/routes/(admin)/account/create_profile/+page.svelte";
```


## .svelte-kit\generated\client\nodes\20.js

```js
export { default as component } from "../../../../src/routes/(admin)/account/select_plan/+page.svelte";
```


## .svelte-kit\generated\client\nodes\21.js

```js
export { default as component } from "../../../../src/routes/(admin)/account/sign_out/+page.svelte";
```


## .svelte-kit\generated\client\nodes\22.js

```js

```


## .svelte-kit\generated\client\nodes\23.js

```js
import * as universal from "../../../../src/routes/(marketing)/+page.ts";
export { universal };
export { default as component } from "../../../../src/routes/(marketing)/+page.svelte";
```


## .svelte-kit\generated\client\nodes\24.js

```js
export { default as component } from "../../../../src/routes/(marketing)/blog/+page.svelte";
```


## .svelte-kit\generated\client\nodes\25.js

```js
export { default as component } from "../../../../src/routes/(marketing)/blog/(posts)/awesome_post/+page.svelte";
```


## .svelte-kit\generated\client\nodes\26.js

```js
export { default as component } from "../../../../src/routes/(marketing)/blog/(posts)/example_blog_post/+page.svelte";
```


## .svelte-kit\generated\client\nodes\27.js

```js
export { default as component } from "../../../../src/routes/(marketing)/blog/(posts)/how_we_built_our_41kb_saas_website/+page.svelte";
```


## .svelte-kit\generated\client\nodes\28.js

```js
export { default as component } from "../../../../src/routes/(marketing)/contact_us/+page.svelte";
```


## .svelte-kit\generated\client\nodes\29.js

```js
export { default as component } from "../../../../src/routes/(marketing)/login/+page.svelte";
```


## .svelte-kit\generated\client\nodes\30.js

```js
export { default as component } from "../../../../src/routes/(marketing)/login/current_password_error/+page.svelte";
```


## .svelte-kit\generated\client\nodes\31.js

```js
export { default as component } from "../../../../src/routes/(marketing)/login/forgot_password/+page.svelte";
```


## .svelte-kit\generated\client\nodes\32.js

```js
export { default as component } from "../../../../src/routes/(marketing)/login/sign_in/+page.svelte";
```


## .svelte-kit\generated\client\nodes\33.js

```js
export { default as component } from "../../../../src/routes/(marketing)/login/sign_up/+page.svelte";
```


## .svelte-kit\generated\client\nodes\34.js

```js
import * as universal from "../../../../src/routes/(marketing)/pricing/+page.ts";
export { universal };
export { default as component } from "../../../../src/routes/(marketing)/pricing/+page.svelte";
```


## .svelte-kit\generated\client\nodes\35.js

```js
export { default as component } from "../../../../src/routes/(marketing)/search/+page.svelte";
```


## .svelte-kit\generated\client\app.js

```js
export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24'),
	() => import('./nodes/25'),
	() => import('./nodes/26'),
	() => import('./nodes/27'),
	() => import('./nodes/28'),
	() => import('./nodes/29'),
	() => import('./nodes/30'),
	() => import('./nodes/31'),
	() => import('./nodes/32'),
	() => import('./nodes/33'),
	() => import('./nodes/34'),
	() => import('./nodes/35')
];

export const server_loads = [2,7];

export const dictionary = {
		"/(marketing)": [23,[4]],
		"/(admin)/account/(menu)": [~8,[2,3]],
		"/(admin)/account/api": [~18,[2]],
		"/(admin)/account/(menu)/billing": [~9,[2,3]],
		"/(admin)/account/(menu)/billing/manage": [~10,[2,3]],
		"/(admin)/account/create_profile": [19,[2]],
		"/(admin)/account/select_plan": [20,[2]],
		"/(admin)/account/(menu)/settings": [11,[2,3]],
		"/(admin)/account/(menu)/settings/change_email_subscription": [13,[2,3]],
		"/(admin)/account/(menu)/settings/change_email": [12,[2,3]],
		"/(admin)/account/(menu)/settings/change_password": [14,[2,3]],
		"/(admin)/account/(menu)/settings/delete_account": [15,[2,3]],
		"/(admin)/account/(menu)/settings/edit_profile": [16,[2,3]],
		"/(admin)/account/(menu)/settings/reset_password": [17,[2,3]],
		"/(admin)/account/sign_out": [21,[2]],
		"/(admin)/account/subscribe/[slug]": [~22,[2]],
		"/(marketing)/blog": [24,[4,5]],
		"/(marketing)/blog/(posts)/awesome_post": [25,[4,5,6]],
		"/(marketing)/blog/(posts)/example_blog_post": [26,[4,5,6]],
		"/(marketing)/blog/(posts)/how_we_built_our_41kb_saas_website": [27,[4,5,6]],
		"/(marketing)/contact_us": [~28,[4]],
		"/(marketing)/login": [29,[4,7]],
		"/(marketing)/login/current_password_error": [30,[4,7]],
		"/(marketing)/login/forgot_password": [~31,[4,7]],
		"/(marketing)/login/sign_in": [~32,[4,7]],
		"/(marketing)/login/sign_up": [~33,[4,7]],
		"/(marketing)/pricing": [34,[4]],
		"/(marketing)/search": [~35,[4]]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';
```


## .svelte-kit\generated\client\matchers.js

```js
export const matchers = {};
```


## .svelte-kit\generated\server\internal.js

```js

import root from '../root.js';
import { set_building, set_prerendering } from '__sveltekit/environment';
import { set_assets } from '__sveltekit/paths';
import { set_manifest, set_read_implementation } from '__sveltekit/server';
import { set_private_env, set_public_env, set_safe_public_env } from '../../../node_modules/@sveltejs/kit/src/runtime/shared-server.js';

export const options = {
	app_template_contains_nonce: false,
	csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false},"reportOnly":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
	csrf_check_origin: true,
	embedded: false,
	env_public_prefix: 'PUBLIC_',
	env_private_prefix: '',
	hash_routing: false,
	hooks: null, // added lazily, via `get_hooks`
	preload_strategy: "modulepreload",
	root,
	service_worker: false,
	templates: {
		app: ({ head, body, assets, nonce, env }) => "<!doctype html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"utf-8\" />\r\n    <link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    " + head + "\r\n  </head>\r\n  <body\r\n    data-sveltekit-preload-data=\"hover\"\r\n    style=\"min-height: 100vh; display: flex; flex-direction: column\"\r\n  >\r\n    <div style=\"display: contents\">" + body + "</div>\r\n  </body>\r\n</html>\r\n",
		error: ({ status, message }) => "<!doctype html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<title>" + message + "</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\t--bg: white;\n\t\t\t\t--fg: #222;\n\t\t\t\t--divider: #ccc;\n\t\t\t\tbackground: var(--bg);\n\t\t\t\tcolor: var(--fg);\n\t\t\t\tfont-family:\n\t\t\t\t\tsystem-ui,\n\t\t\t\t\t-apple-system,\n\t\t\t\t\tBlinkMacSystemFont,\n\t\t\t\t\t'Segoe UI',\n\t\t\t\t\tRoboto,\n\t\t\t\t\tOxygen,\n\t\t\t\t\tUbuntu,\n\t\t\t\t\tCantarell,\n\t\t\t\t\t'Open Sans',\n\t\t\t\t\t'Helvetica Neue',\n\t\t\t\t\tsans-serif;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tjustify-content: center;\n\t\t\t\theight: 100vh;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t.error {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t\tmax-width: 32rem;\n\t\t\t\tmargin: 0 1rem;\n\t\t\t}\n\n\t\t\t.status {\n\t\t\t\tfont-weight: 200;\n\t\t\t\tfont-size: 3rem;\n\t\t\t\tline-height: 1;\n\t\t\t\tposition: relative;\n\t\t\t\ttop: -0.05rem;\n\t\t\t}\n\n\t\t\t.message {\n\t\t\t\tborder-left: 1px solid var(--divider);\n\t\t\t\tpadding: 0 0 0 1rem;\n\t\t\t\tmargin: 0 0 0 1rem;\n\t\t\t\tmin-height: 2.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: center;\n\t\t\t}\n\n\t\t\t.message h1 {\n\t\t\t\tfont-weight: 400;\n\t\t\t\tfont-size: 1em;\n\t\t\t\tmargin: 0;\n\t\t\t}\n\n\t\t\t@media (prefers-color-scheme: dark) {\n\t\t\t\tbody {\n\t\t\t\t\t--bg: #222;\n\t\t\t\t\t--fg: #ddd;\n\t\t\t\t\t--divider: #666;\n\t\t\t\t}\n\t\t\t}\n\t\t</style>\n\t</head>\n\t<body>\n\t\t<div class=\"error\">\n\t\t\t<span class=\"status\">" + status + "</span>\n\t\t\t<div class=\"message\">\n\t\t\t\t<h1>" + message + "</h1>\n\t\t\t</div>\n\t\t</div>\n\t</body>\n</html>\n"
	},
	version_hash: "1vtcm0u"
};

export async function get_hooks() {
	let handle;
	let handleFetch;
	let handleError;
	let init;
	({ handle, handleFetch, handleError, init } = await import("../../../src/hooks.server.ts"));

	let reroute;
	let transport;
	

	return {
		handle,
		handleFetch,
		handleError,
		init,
		reroute,
		transport
	};
}

export { set_assets, set_building, set_manifest, set_prerendering, set_private_env, set_public_env, set_read_implementation, set_safe_public_env };
```


## .svelte-kit\generated\root.js

```js
import { asClassComponent } from 'svelte/legacy';
import Root from './root.svelte';
export default asClassComponent(Root);
```


## .svelte-kit\generated\root.svelte

```svelte
<!-- This file is generated by @sveltejs/kit — do not edit it! -->
<svelte:options runes={true} />
<script>
	import { setContext, onMount, tick } from 'svelte';
	import { browser } from '$app/environment';

	// stores
	let { stores, page, constructors, components = [], form, data_0 = null, data_1 = null, data_2 = null, data_3 = null, data_4 = null } = $props();

	if (!browser) {
		setContext('__svelte__', stores);
	}

	if (browser) {
		$effect.pre(() => stores.page.set(page));
	} else {
		stores.page.set(page);
	}
	$effect(() => {
		stores;page;constructors;components;form;data_0;data_1;data_2;data_3;data_4;
		stores.page.notify();
	});

	let mounted = $state(false);
	let navigated = $state(false);
	let title = $state(null);

	onMount(() => {
		const unsubscribe = stores.page.subscribe(() => {
			if (mounted) {
				navigated = true;
				tick().then(() => {
					title = document.title || 'untitled page';
				});
			}
		});

		mounted = true;
		return unsubscribe;
	});

	const Pyramid_4=$derived(constructors[4])
</script>

{#if constructors[1]}
	{@const Pyramid_0 = constructors[0]}
							<!-- svelte-ignore binding_property_non_reactive -->
							<Pyramid_0 bind:this={components[0]} data={data_0} {form}>
								{#if constructors[2]}
									{@const Pyramid_1 = constructors[1]}
															<!-- svelte-ignore binding_property_non_reactive -->
															<Pyramid_1 bind:this={components[1]} data={data_1} {form}>
																{#if constructors[3]}
																	{@const Pyramid_2 = constructors[2]}
																							<!-- svelte-ignore binding_property_non_reactive -->
																							<Pyramid_2 bind:this={components[2]} data={data_2} {form}>
																								{#if constructors[4]}
																									{@const Pyramid_3 = constructors[3]}
																															<!-- svelte-ignore binding_property_non_reactive -->
																															<Pyramid_3 bind:this={components[3]} data={data_3} {form}>
																																<!-- svelte-ignore binding_property_non_reactive -->
																																		<Pyramid_4 bind:this={components[4]} data={data_4} {form} />
																															</Pyramid_3>
																									
																								{:else}
																									{@const Pyramid_3 = constructors[3]}
																									<!-- svelte-ignore binding_property_non_reactive -->
																									<Pyramid_3 bind:this={components[3]} data={data_3} {form} />
																									
																								{/if}
																							</Pyramid_2>
																	
																{:else}
																	{@const Pyramid_2 = constructors[2]}
																	<!-- svelte-ignore binding_property_non_reactive -->
																	<Pyramid_2 bind:this={components[2]} data={data_2} {form} />
																	
																{/if}
															</Pyramid_1>
									
								{:else}
									{@const Pyramid_1 = constructors[1]}
									<!-- svelte-ignore binding_property_non_reactive -->
									<Pyramid_1 bind:this={components[1]} data={data_1} {form} />
									
								{/if}
							</Pyramid_0>
	
{:else}
	{@const Pyramid_0 = constructors[0]}
	<!-- svelte-ignore binding_property_non_reactive -->
	<Pyramid_0 bind:this={components[0]} data={data_0} {form} />
	
{/if}

{#if mounted}
	<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px">
		{#if navigated}
			{title}
		{/if}
	</div>
{/if}
```


## .svelte-kit\types\src\routes\(admin)\account\(menu)\billing\manage\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(admin)/account/(menu)/billing/manage';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageServerParentData = Omit<Omit<EnsureDefined<import('../../../../../$types.js').LayoutServerData>, keyof import('../../../$types.js').LayoutServerData> & EnsureDefined<import('../../../$types.js').LayoutServerData>, keyof import('../../$types.js').LayoutServerData> & EnsureDefined<import('../../$types.js').LayoutServerData>;
type PageParentData = Omit<Omit<EnsureDefined<import('../../../../../$types.js').LayoutData>, keyof import('../../../$types.js').LayoutData> & EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../../$types.js').LayoutData> & EnsureDefined<import('../../$types.js').LayoutData>;

export type PageServerLoad<OutputData extends OutputDataShape<PageServerParentData> = OutputDataShape<PageServerParentData>> = Kit.ServerLoad<RouteParams, PageServerParentData, OutputData, RouteId>;
export type PageServerLoadEvent = Parameters<PageServerLoad>[0];
export type ActionData = unknown;
export type PageServerData = Expand<OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('./proxy+page.server.js').load>>>>>>;
export type PageData = Expand<Omit<PageParentData, keyof PageServerData> & EnsureDefined<PageServerData>>;
export type Action<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Action<RouteParams, OutputData, RouteId>
export type Actions<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Actions<RouteParams, OutputData, RouteId>
export type PageProps = { data: PageData; form: ActionData }
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;
```


## .svelte-kit\types\src\routes\(admin)\account\(menu)\billing\manage\proxy+page.server.ts

```ts
// @ts-nocheck
import { PRIVATE_STRIPE_API_KEY } from "$env/static/private"
import { error, redirect } from "@sveltejs/kit"
import Stripe from "stripe"
import { getOrCreateCustomerId } from "../../../subscription_helpers.server"
import type { PageServerLoad } from "./$types"
const stripe = new Stripe(PRIVATE_STRIPE_API_KEY, { apiVersion: "2023-08-16" })

export const load = async ({
  url,
  locals: { safeGetSession, supabaseServiceRole },
}: Parameters<PageServerLoad>[0]) => {
  const { session, user } = await safeGetSession()
  if (!session) {
    redirect(303, "/login")
  }

  const { error: idError, customerId } = await getOrCreateCustomerId({
    supabaseServiceRole,
    user,
  })
  if (idError || !customerId) {
    console.error("Error creating customer id", idError)
    error(500, {
      message: "Unknown error (PCID). If issue persists, please contact us.",
    })
  }

  let portalLink
  try {
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${url.origin}/account/billing`,
    })
    portalLink = portalSession?.url
  } catch (e) {
    console.error("Error creating billing portal session", e)
    error(500, "Unknown error (PSE). If issue persists, please contact us.")
  }

  redirect(303, portalLink ?? "/account/billing")
}
```


## .svelte-kit\types\src\routes\(admin)\account\(menu)\billing\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(admin)/account/(menu)/billing';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageServerParentData = Omit<Omit<EnsureDefined<import('../../../../$types.js').LayoutServerData>, keyof import('../../$types.js').LayoutServerData> & EnsureDefined<import('../../$types.js').LayoutServerData>, keyof import('../$types.js').LayoutServerData> & EnsureDefined<import('../$types.js').LayoutServerData>;
type PageParentData = Omit<Omit<EnsureDefined<import('../../../../$types.js').LayoutData>, keyof import('../../$types.js').LayoutData> & EnsureDefined<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerLoad<OutputData extends OutputDataShape<PageServerParentData> = OutputDataShape<PageServerParentData>> = Kit.ServerLoad<RouteParams, PageServerParentData, OutputData, RouteId>;
export type PageServerLoadEvent = Parameters<PageServerLoad>[0];
export type ActionData = unknown;
export type PageServerData = Expand<OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('./proxy+page.server.js').load>>>>>>;
export type PageData = Expand<Omit<PageParentData, keyof PageServerData> & EnsureDefined<PageServerData>>;
export type Action<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Action<RouteParams, OutputData, RouteId>
export type Actions<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Actions<RouteParams, OutputData, RouteId>
export type PageProps = { data: PageData; form: ActionData }
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;
```


## .svelte-kit\types\src\routes\(admin)\account\(menu)\billing\proxy+page.server.ts

```ts
// @ts-nocheck
import { error, redirect } from "@sveltejs/kit"
import {
  fetchSubscription,
  getOrCreateCustomerId,
} from "../../subscription_helpers.server"
import type { PageServerLoad } from "./$types"

export const load = async ({
  locals: { safeGetSession, supabaseServiceRole },
}: Parameters<PageServerLoad>[0]) => {
  const { session, user } = await safeGetSession()
  if (!session || !user?.id) {
    redirect(303, "/login")
  }

  const { error: idError, customerId } = await getOrCreateCustomerId({
    supabaseServiceRole,
    user,
  })
  if (idError || !customerId) {
    console.error("Error creating customer id", idError)
    error(500, {
      message: "Unknown error. If issue persists, please contact us.",
    })
  }

  const {
    primarySubscription,
    hasEverHadSubscription,
    error: fetchErr,
  } = await fetchSubscription({
    customerId,
  })
  if (fetchErr) {
    console.error("Error fetching subscription", fetchErr)
    error(500, {
      message: "Unknown error. If issue persists, please contact us.",
    })
  }

  return {
    isActiveCustomer: !!primarySubscription,
    hasEverHadSubscription,
    currentPlanId: primarySubscription?.appSubscription?.id,
  }
}
```


## .svelte-kit\types\src\routes\(admin)\account\(menu)\settings\change_email\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(admin)/account/(menu)/settings/change_email';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<Omit<EnsureDefined<import('../../../../../$types.js').LayoutData>, keyof import('../../../$types.js').LayoutData> & EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../../$types.js').LayoutData> & EnsureDefined<import('../../$types.js').LayoutData>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type PageProps = { data: PageData }
```


## .svelte-kit\types\src\routes\(admin)\account\(menu)\settings\change_email_subscription\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(admin)/account/(menu)/settings/change_email_subscription';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<Omit<EnsureDefined<import('../../../../../$types.js').LayoutData>, keyof import('../../../$types.js').LayoutData> & EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../../$types.js').LayoutData> & EnsureDefined<import('../../$types.js').LayoutData>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type PageProps = { data: PageData }
```


## .svelte-kit\types\src\routes\(admin)\account\(menu)\settings\change_password\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(admin)/account/(menu)/settings/change_password';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<Omit<EnsureDefined<import('../../../../../$types.js').LayoutData>, keyof import('../../../$types.js').LayoutData> & EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../../$types.js').LayoutData> & EnsureDefined<import('../../$types.js').LayoutData>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type PageProps = { data: PageData }
```


## .svelte-kit\types\src\routes\(admin)\account\(menu)\settings\delete_account\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(admin)/account/(menu)/settings/delete_account';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<Omit<EnsureDefined<import('../../../../../$types.js').LayoutData>, keyof import('../../../$types.js').LayoutData> & EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../../$types.js').LayoutData> & EnsureDefined<import('../../$types.js').LayoutData>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type PageProps = { data: PageData }
```


## .svelte-kit\types\src\routes\(admin)\account\(menu)\settings\edit_profile\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(admin)/account/(menu)/settings/edit_profile';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<Omit<EnsureDefined<import('../../../../../$types.js').LayoutData>, keyof import('../../../$types.js').LayoutData> & EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../../$types.js').LayoutData> & EnsureDefined<import('../../$types.js').LayoutData>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type PageProps = { data: PageData }
```


## .svelte-kit\types\src\routes\(admin)\account\(menu)\settings\reset_password\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(admin)/account/(menu)/settings/reset_password';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<Omit<EnsureDefined<import('../../../../../$types.js').LayoutData>, keyof import('../../../$types.js').LayoutData> & EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../../$types.js').LayoutData> & EnsureDefined<import('../../$types.js').LayoutData>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type PageProps = { data: PageData }
```


## .svelte-kit\types\src\routes\(admin)\account\(menu)\settings\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(admin)/account/(menu)/settings';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<Omit<EnsureDefined<import('../../../../$types.js').LayoutData>, keyof import('../../$types.js').LayoutData> & EnsureDefined<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type PageProps = { data: PageData }
```


## .svelte-kit\types\src\routes\(admin)\account\(menu)\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(admin)/account/(menu)';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageServerParentData = Omit<Omit<EnsureDefined<import('../../../$types.js').LayoutServerData>, keyof import('../$types.js').LayoutServerData> & EnsureDefined<import('../$types.js').LayoutServerData>, keyof LayoutServerData> & EnsureDefined<LayoutServerData>;
type PageParentData = Omit<Omit<EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>, keyof LayoutData> & EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/(admin)/account/(menu)" | "/(admin)/account/(menu)/billing" | "/(admin)/account/(menu)/billing/manage" | "/(admin)/account/(menu)/settings" | "/(admin)/account/(menu)/settings/change_email" | "/(admin)/account/(menu)/settings/change_email_subscription" | "/(admin)/account/(menu)/settings/change_password" | "/(admin)/account/(menu)/settings/delete_account" | "/(admin)/account/(menu)/settings/edit_profile" | "/(admin)/account/(menu)/settings/reset_password"
type LayoutParams = RouteParams & {  }
type LayoutParentData = Omit<EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerLoad<OutputData extends OutputDataShape<PageServerParentData> = OutputDataShape<PageServerParentData>> = Kit.ServerLoad<RouteParams, PageServerParentData, OutputData, RouteId>;
export type PageServerLoadEvent = Parameters<PageServerLoad>[0];
type ExcludeActionFailure<T> = T extends Kit.ActionFailure<any> ? never : T extends void ? never : T;
type ActionsSuccess<T extends Record<string, (...args: any) => any>> = { [Key in keyof T]: ExcludeActionFailure<Awaited<ReturnType<T[Key]>>>; }[keyof T];
type ExtractActionFailure<T> = T extends Kit.ActionFailure<infer X>	? X extends void ? never : X : never;
type ActionsFailure<T extends Record<string, (...args: any) => any>> = { [Key in keyof T]: Exclude<ExtractActionFailure<Awaited<ReturnType<T[Key]>>>, void>; }[keyof T];
type ActionsExport = typeof import('../../../../../../../src/routes/(admin)/account/(menu)/+page.server.js').actions
export type SubmitFunction = Kit.SubmitFunction<Expand<ActionsSuccess<ActionsExport>>, Expand<ActionsFailure<ActionsExport>>>
export type ActionData = Expand<Kit.AwaitedActions<ActionsExport>> | null;
export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type Action<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Action<RouteParams, OutputData, RouteId>
export type Actions<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Actions<RouteParams, OutputData, RouteId>
export type PageProps = { data: PageData; form: ActionData }
export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;
export type LayoutProps = { data: LayoutData; children: import("svelte").Snippet }
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;
```


## .svelte-kit\types\src\routes\(admin)\account\api\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(admin)/account/api';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageServerParentData = Omit<EnsureDefined<import('../../../$types.js').LayoutServerData>, keyof import('../$types.js').LayoutServerData> & EnsureDefined<import('../$types.js').LayoutServerData>;
type PageParentData = Omit<EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerLoad<OutputData extends OutputDataShape<PageServerParentData> = OutputDataShape<PageServerParentData>> = Kit.ServerLoad<RouteParams, PageServerParentData, OutputData, RouteId>;
export type PageServerLoadEvent = Parameters<PageServerLoad>[0];
type ExcludeActionFailure<T> = T extends Kit.ActionFailure<any> ? never : T extends void ? never : T;
type ActionsSuccess<T extends Record<string, (...args: any) => any>> = { [Key in keyof T]: ExcludeActionFailure<Awaited<ReturnType<T[Key]>>>; }[keyof T];
type ExtractActionFailure<T> = T extends Kit.ActionFailure<infer X>	? X extends void ? never : X : never;
type ActionsFailure<T extends Record<string, (...args: any) => any>> = { [Key in keyof T]: Exclude<ExtractActionFailure<Awaited<ReturnType<T[Key]>>>, void>; }[keyof T];
type ActionsExport = typeof import('../../../../../../../src/routes/(admin)/account/api/+page.server.js').actions
export type SubmitFunction = Kit.SubmitFunction<Expand<ActionsSuccess<ActionsExport>>, Expand<ActionsFailure<ActionsExport>>>
export type ActionData = Expand<Kit.AwaitedActions<ActionsExport>> | null;
export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type Action<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Action<RouteParams, OutputData, RouteId>
export type Actions<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Actions<RouteParams, OutputData, RouteId>
export type PageProps = { data: PageData; form: ActionData }
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;
```


## .svelte-kit\types\src\routes\(admin)\account\create_profile\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(admin)/account/create_profile';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerData = null;
export type PageLoad<OutputData extends OutputDataShape<PageParentData> = OutputDataShape<PageParentData>> = Kit.Load<RouteParams, PageServerData, PageParentData, OutputData, RouteId>;
export type PageLoadEvent = Parameters<PageLoad>[0];
export type PageData = Expand<Omit<PageParentData, keyof Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../../../../src/routes/(admin)/account/create_profile/+page.js').load>>>> & OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../../../../src/routes/(admin)/account/create_profile/+page.js').load>>>>>>;
export type PageProps = { data: PageData }
```


## .svelte-kit\types\src\routes\(admin)\account\select_plan\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(admin)/account/select_plan';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type PageProps = { data: PageData }
```


## .svelte-kit\types\src\routes\(admin)\account\sign_out\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(admin)/account/sign_out';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type PageProps = { data: PageData }
```


## .svelte-kit\types\src\routes\(admin)\account\subscribe\[slug]\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = { slug: string };
type RouteId = '/(admin)/account/subscribe/[slug]';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageServerParentData = Omit<EnsureDefined<import('../../../../$types.js').LayoutServerData>, keyof import('../../$types.js').LayoutServerData> & EnsureDefined<import('../../$types.js').LayoutServerData>;
type PageParentData = Omit<EnsureDefined<import('../../../../$types.js').LayoutData>, keyof import('../../$types.js').LayoutData> & EnsureDefined<import('../../$types.js').LayoutData>;

export type EntryGenerator = () => Promise<Array<RouteParams>> | Array<RouteParams>;
export type PageServerLoad<OutputData extends OutputDataShape<PageServerParentData> = OutputDataShape<PageServerParentData>> = Kit.ServerLoad<RouteParams, PageServerParentData, OutputData, RouteId>;
export type PageServerLoadEvent = Parameters<PageServerLoad>[0];
export type ActionData = unknown;
export type PageServerData = Expand<OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('./proxy+page.server.js').load>>>>>>;
export type PageData = Expand<Omit<PageParentData, keyof PageServerData> & EnsureDefined<PageServerData>>;
export type Action<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Action<RouteParams, OutputData, RouteId>
export type Actions<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Actions<RouteParams, OutputData, RouteId>
export type PageProps = { data: PageData; form: ActionData }
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;
```


## .svelte-kit\types\src\routes\(admin)\account\subscribe\[slug]\proxy+page.server.ts

```ts
// @ts-nocheck
import { PRIVATE_STRIPE_API_KEY } from "$env/static/private"
import { error, redirect } from "@sveltejs/kit"
import Stripe from "stripe"
import {
  fetchSubscription,
  getOrCreateCustomerId,
} from "../../subscription_helpers.server"
import type { PageServerLoad } from "./$types"
const stripe = new Stripe(PRIVATE_STRIPE_API_KEY, { apiVersion: "2023-08-16" })

export const load = async ({
  params,
  url,
  locals: { safeGetSession, supabaseServiceRole },
}: Parameters<PageServerLoad>[0]) => {
  const { session, user } = await safeGetSession()
  if (!session) {
    redirect(303, "/login")
  }

  if (params.slug === "free_plan") {
    // plan with no stripe_price_id. Redirect to account home
    redirect(303, "/account")
  }

  const { error: idError, customerId } = await getOrCreateCustomerId({
    supabaseServiceRole,
    user,
  })
  if (idError || !customerId) {
    console.error("Error creating customer id", idError)
    error(500, {
      message: "Unknown error. If issue persists, please contact us.",
    })
  }

  const { primarySubscription } = await fetchSubscription({
    customerId,
  })
  if (primarySubscription) {
    // User already has plan, we shouldn't let them buy another
    redirect(303, "/account/billing")
  }

  let checkoutUrl
  try {
    const stripeSession = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: params.slug,
          quantity: 1,
        },
      ],
      customer: customerId,
      mode: "subscription",
      success_url: `${url.origin}/account`,
      cancel_url: `${url.origin}/account/billing`,
    })
    checkoutUrl = stripeSession.url
  } catch (e) {
    console.error("Error creating checkout session", e)
    error(500, "Unknown Error (SSE): If issue persists please contact us.")
  }

  redirect(303, checkoutUrl ?? "/pricing")
}
```


## .svelte-kit\types\src\routes\(admin)\account\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(admin)/account';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type LayoutRouteId = RouteId | "/(admin)/account/(menu)" | "/(admin)/account/(menu)/billing" | "/(admin)/account/(menu)/billing/manage" | "/(admin)/account/(menu)/settings" | "/(admin)/account/(menu)/settings/change_email" | "/(admin)/account/(menu)/settings/change_email_subscription" | "/(admin)/account/(menu)/settings/change_password" | "/(admin)/account/(menu)/settings/delete_account" | "/(admin)/account/(menu)/settings/edit_profile" | "/(admin)/account/(menu)/settings/reset_password" | "/(admin)/account/api" | "/(admin)/account/create_profile" | "/(admin)/account/select_plan" | "/(admin)/account/sign_out" | "/(admin)/account/subscribe/[slug]"
type LayoutParams = RouteParams & { slug?: string }
type LayoutServerParentData = EnsureDefined<import('../../$types.js').LayoutServerData>;
type LayoutParentData = EnsureDefined<import('../../$types.js').LayoutData>;

export type LayoutServerLoad<OutputData extends Partial<App.PageData> & Record<string, any> | void = Partial<App.PageData> & Record<string, any> | void> = Kit.ServerLoad<LayoutParams, LayoutServerParentData, OutputData, LayoutRouteId>;
export type LayoutServerLoadEvent = Parameters<LayoutServerLoad>[0];
export type LayoutServerData = Expand<OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('./proxy+layout.server.js').load>>>>>>;
export type LayoutLoad<OutputData extends OutputDataShape<LayoutParentData> = OutputDataShape<LayoutParentData>> = Kit.Load<LayoutParams, LayoutServerData, LayoutParentData, OutputData, LayoutRouteId>;
export type LayoutLoadEvent = Parameters<LayoutLoad>[0];
export type LayoutData = Expand<Omit<LayoutParentData, keyof Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../../../src/routes/(admin)/account/+layout.js').load>>>> & OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../../../src/routes/(admin)/account/+layout.js').load>>>>>>;
export type LayoutProps = { data: LayoutData; children: import("svelte").Snippet }
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;
```


## .svelte-kit\types\src\routes\(admin)\account\proxy+layout.server.ts

```ts
// @ts-nocheck
import type { LayoutServerLoad } from "./$types"

export const load = async ({
  locals: { session },
  cookies,
}: Parameters<LayoutServerLoad>[0]) => {
  // Session here is from authGuard hook

  return {
    session,
    cookies: cookies.getAll(),
  }
}
```


## .svelte-kit\types\src\routes\(marketing)\auth\callback\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(marketing)/auth/callback';

export type RequestHandler = Kit.RequestHandler<RouteParams, RouteId>;
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;
```


## .svelte-kit\types\src\routes\(marketing)\blog\(posts)\awesome_post\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(marketing)/blog/(posts)/awesome_post';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<Omit<Omit<EnsureDefined<import('../../../../$types.js').LayoutData>, keyof import('../../../$types.js').LayoutData> & EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../../$types.js').LayoutData> & EnsureDefined<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type PageProps = { data: PageData }
```


## .svelte-kit\types\src\routes\(marketing)\blog\(posts)\example_blog_post\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(marketing)/blog/(posts)/example_blog_post';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<Omit<Omit<EnsureDefined<import('../../../../$types.js').LayoutData>, keyof import('../../../$types.js').LayoutData> & EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../../$types.js').LayoutData> & EnsureDefined<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type PageProps = { data: PageData }
```


## .svelte-kit\types\src\routes\(marketing)\blog\(posts)\how_we_built_our_41kb_saas_website\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(marketing)/blog/(posts)/how_we_built_our_41kb_saas_website';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<Omit<Omit<EnsureDefined<import('../../../../$types.js').LayoutData>, keyof import('../../../$types.js').LayoutData> & EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../../$types.js').LayoutData> & EnsureDefined<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type PageProps = { data: PageData }
```


## .svelte-kit\types\src\routes\(marketing)\blog\(posts)\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(marketing)/blog/(posts)';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type LayoutRouteId = RouteId | "/(marketing)/blog/(posts)/awesome_post" | "/(marketing)/blog/(posts)/example_blog_post" | "/(marketing)/blog/(posts)/how_we_built_our_41kb_saas_website"
type LayoutParams = RouteParams & {  }
type LayoutParentData = Omit<Omit<EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../../$types.js').LayoutData> & EnsureDefined<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;
export type LayoutProps = { data: LayoutData; children: import("svelte").Snippet }
```


## .svelte-kit\types\src\routes\(marketing)\blog\rss.xml\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(marketing)/blog/rss.xml';

export type RequestHandler = Kit.RequestHandler<RouteParams, RouteId>;
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;
```


## .svelte-kit\types\src\routes\(marketing)\blog\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(marketing)/blog';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<Omit<EnsureDefined<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>, keyof LayoutData> & EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/(marketing)/blog" | "/(marketing)/blog/(posts)/awesome_post" | "/(marketing)/blog/(posts)/example_blog_post" | "/(marketing)/blog/(posts)/how_we_built_our_41kb_saas_website"
type LayoutParams = RouteParams & {  }
type LayoutParentData = Omit<EnsureDefined<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type PageProps = { data: PageData }
export type LayoutServerData = null;
export type LayoutLoad<OutputData extends OutputDataShape<LayoutParentData> = OutputDataShape<LayoutParentData>> = Kit.Load<LayoutParams, LayoutServerData, LayoutParentData, OutputData, LayoutRouteId>;
export type LayoutLoadEvent = Parameters<LayoutLoad>[0];
export type LayoutData = Expand<Omit<LayoutParentData, keyof LayoutParentData & EnsureDefined<LayoutServerData>> & OptionalUnion<EnsureDefined<LayoutParentData & EnsureDefined<LayoutServerData>>>>;
export type LayoutProps = { data: LayoutData; children: import("svelte").Snippet }
```


## .svelte-kit\types\src\routes\(marketing)\contact_us\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(marketing)/contact_us';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageServerParentData = Omit<EnsureDefined<import('../../$types.js').LayoutServerData>, keyof import('../$types.js').LayoutServerData> & EnsureDefined<import('../$types.js').LayoutServerData>;
type PageParentData = Omit<EnsureDefined<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerLoad<OutputData extends OutputDataShape<PageServerParentData> = OutputDataShape<PageServerParentData>> = Kit.ServerLoad<RouteParams, PageServerParentData, OutputData, RouteId>;
export type PageServerLoadEvent = Parameters<PageServerLoad>[0];
type ExcludeActionFailure<T> = T extends Kit.ActionFailure<any> ? never : T extends void ? never : T;
type ActionsSuccess<T extends Record<string, (...args: any) => any>> = { [Key in keyof T]: ExcludeActionFailure<Awaited<ReturnType<T[Key]>>>; }[keyof T];
type ExtractActionFailure<T> = T extends Kit.ActionFailure<infer X>	? X extends void ? never : X : never;
type ActionsFailure<T extends Record<string, (...args: any) => any>> = { [Key in keyof T]: Exclude<ExtractActionFailure<Awaited<ReturnType<T[Key]>>>, void>; }[keyof T];
type ActionsExport = typeof import('./proxy+page.server.js').actions
export type SubmitFunction = Kit.SubmitFunction<Expand<ActionsSuccess<ActionsExport>>, Expand<ActionsFailure<ActionsExport>>>
export type ActionData = Expand<Kit.AwaitedActions<ActionsExport>> | null;
export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type Action<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Action<RouteParams, OutputData, RouteId>
export type Actions<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Actions<RouteParams, OutputData, RouteId>
export type PageProps = { data: PageData; form: ActionData }
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;
```


## .svelte-kit\types\src\routes\(marketing)\contact_us\proxy+page.server.ts

```ts
// @ts-nocheck
import { fail } from "@sveltejs/kit"
import { sendAdminEmail } from "$lib/mailer.js"

/** */
export const actions = {
  submitContactUs:/** @param {import('./$types').RequestEvent} event */  async ({ request, locals: { supabaseServiceRole } }) => {
    const formData = await request.formData()
    const errors: { [fieldName: string]: string } = {}

    const firstName = formData.get("first_name")?.toString() ?? ""
    if (firstName.length < 2) {
      errors["first_name"] = "First name is required"
    }
    if (firstName.length > 500) {
      errors["first_name"] = "First name too long"
    }

    const lastName = formData.get("last_name")?.toString() ?? ""
    if (lastName.length < 2) {
      errors["last_name"] = "Last name is required"
    }
    if (lastName.length > 500) {
      errors["last_name"] = "Last name too long"
    }

    const email = formData.get("email")?.toString() ?? ""
    if (email.length < 6) {
      errors["email"] = "Email is required"
    } else if (email.length > 500) {
      errors["email"] = "Email too long"
    } else if (!email.includes("@") || !email.includes(".")) {
      errors["email"] = "Invalid email"
    }

    const company = formData.get("company")?.toString() ?? ""
    if (company.length > 500) {
      errors["company"] = "Company too long"
    }

    const phone = formData.get("phone")?.toString() ?? ""
    if (phone.length > 100) {
      errors["phone"] = "Phone number too long"
    }

    const message = formData.get("message")?.toString() ?? ""
    if (message.length > 2000) {
      errors["message"] = "Message too long (" + message.length + " of 2000)"
    }

    if (Object.keys(errors).length > 0) {
      return fail(400, { errors })
    }

    // Save to database
    const { error: insertError } = await supabaseServiceRole
      .from("contact_requests")
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        company_name: company,
        phone,
        message_body: message,
        updated_at: new Date(),
      })

    if (insertError) {
      console.error("Error saving contact request", insertError)
      return fail(500, { errors: { _: "Error saving" } })
    }

    // Send email to admin
    await sendAdminEmail({
      subject: "New contact request",
      body: `New contact request from ${firstName} ${lastName}.\n\nEmail: ${email}\n\nPhone: ${phone}\n\nCompany: ${company}\n\nMessage: ${message}`,
    })
  },
}
```


## .svelte-kit\types\src\routes\(marketing)\login\current_password_error\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(marketing)/login/current_password_error';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<Omit<EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../../$types.js').LayoutData> & EnsureDefined<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type PageProps = { data: PageData }
```


## .svelte-kit\types\src\routes\(marketing)\login\forgot_password\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(marketing)/login/forgot_password';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageServerParentData = Omit<Omit<EnsureDefined<import('../../../$types.js').LayoutServerData>, keyof import('../../$types.js').LayoutServerData> & EnsureDefined<import('../../$types.js').LayoutServerData>, keyof import('../$types.js').LayoutServerData> & EnsureDefined<import('../$types.js').LayoutServerData>;
type PageParentData = Omit<Omit<EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../../$types.js').LayoutData> & EnsureDefined<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerLoad<OutputData extends OutputDataShape<PageServerParentData> = OutputDataShape<PageServerParentData>> = Kit.ServerLoad<RouteParams, PageServerParentData, OutputData, RouteId>;
export type PageServerLoadEvent = Parameters<PageServerLoad>[0];
export type ActionData = unknown;
export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type Action<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Action<RouteParams, OutputData, RouteId>
export type Actions<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Actions<RouteParams, OutputData, RouteId>
export type PageProps = { data: PageData; form: ActionData }
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;
```


## .svelte-kit\types\src\routes\(marketing)\login\sign_in\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(marketing)/login/sign_in';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageServerParentData = Omit<Omit<EnsureDefined<import('../../../$types.js').LayoutServerData>, keyof import('../../$types.js').LayoutServerData> & EnsureDefined<import('../../$types.js').LayoutServerData>, keyof import('../$types.js').LayoutServerData> & EnsureDefined<import('../$types.js').LayoutServerData>;
type PageParentData = Omit<Omit<EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../../$types.js').LayoutData> & EnsureDefined<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerLoad<OutputData extends OutputDataShape<PageServerParentData> = OutputDataShape<PageServerParentData>> = Kit.ServerLoad<RouteParams, PageServerParentData, OutputData, RouteId>;
export type PageServerLoadEvent = Parameters<PageServerLoad>[0];
export type ActionData = unknown;
export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type Action<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Action<RouteParams, OutputData, RouteId>
export type Actions<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Actions<RouteParams, OutputData, RouteId>
export type PageProps = { data: PageData; form: ActionData }
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;
```


## .svelte-kit\types\src\routes\(marketing)\login\sign_up\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(marketing)/login/sign_up';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageServerParentData = Omit<Omit<EnsureDefined<import('../../../$types.js').LayoutServerData>, keyof import('../../$types.js').LayoutServerData> & EnsureDefined<import('../../$types.js').LayoutServerData>, keyof import('../$types.js').LayoutServerData> & EnsureDefined<import('../$types.js').LayoutServerData>;
type PageParentData = Omit<Omit<EnsureDefined<import('../../../$types.js').LayoutData>, keyof import('../../$types.js').LayoutData> & EnsureDefined<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerLoad<OutputData extends OutputDataShape<PageServerParentData> = OutputDataShape<PageServerParentData>> = Kit.ServerLoad<RouteParams, PageServerParentData, OutputData, RouteId>;
export type PageServerLoadEvent = Parameters<PageServerLoad>[0];
export type ActionData = unknown;
export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type Action<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Action<RouteParams, OutputData, RouteId>
export type Actions<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Actions<RouteParams, OutputData, RouteId>
export type PageProps = { data: PageData; form: ActionData }
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;
```


## .svelte-kit\types\src\routes\(marketing)\login\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(marketing)/login';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<Omit<EnsureDefined<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>, keyof LayoutData> & EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/(marketing)/login" | "/(marketing)/login/current_password_error" | "/(marketing)/login/forgot_password" | "/(marketing)/login/sign_in" | "/(marketing)/login/sign_up"
type LayoutParams = RouteParams & {  }
type LayoutServerParentData = Omit<EnsureDefined<import('../../$types.js').LayoutServerData>, keyof import('../$types.js').LayoutServerData> & EnsureDefined<import('../$types.js').LayoutServerData>;
type LayoutParentData = Omit<EnsureDefined<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type PageProps = { data: PageData }
export type LayoutServerLoad<OutputData extends Partial<App.PageData> & Record<string, any> | void = Partial<App.PageData> & Record<string, any> | void> = Kit.ServerLoad<LayoutParams, LayoutServerParentData, OutputData, LayoutRouteId>;
export type LayoutServerLoadEvent = Parameters<LayoutServerLoad>[0];
export type LayoutServerData = Expand<OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('./proxy+layout.server.js').load>>>>>>;
export type LayoutLoad<OutputData extends OutputDataShape<LayoutParentData> = OutputDataShape<LayoutParentData>> = Kit.Load<LayoutParams, LayoutServerData, LayoutParentData, OutputData, LayoutRouteId>;
export type LayoutLoadEvent = Parameters<LayoutLoad>[0];
export type LayoutData = Expand<Omit<LayoutParentData, keyof Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../../../src/routes/(marketing)/login/+layout.js').load>>>> & OptionalUnion<EnsureDefined<Kit.LoadProperties<Awaited<ReturnType<typeof import('../../../../../../src/routes/(marketing)/login/+layout.js').load>>>>>>;
export type LayoutProps = { data: LayoutData; children: import("svelte").Snippet }
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;
```


## .svelte-kit\types\src\routes\(marketing)\login\proxy+layout.server.ts

```ts
// @ts-nocheck
import type { LayoutServerLoad } from "./$types"

export const load = async ({
  locals: { session },
  cookies,
  url,
}: Parameters<LayoutServerLoad>[0]) => {
  return {
    url: url.origin,
    cookies: cookies.getAll(),
    session,
  }
}
```


## .svelte-kit\types\src\routes\(marketing)\pricing\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(marketing)/pricing';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<EnsureDefined<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerData = null;
export type PageLoad<OutputData extends OutputDataShape<PageParentData> = OutputDataShape<PageParentData>> = Kit.Load<RouteParams, PageServerData, PageParentData, OutputData, RouteId>;
export type PageLoadEvent = Parameters<PageLoad>[0];
export type PageData = Expand<Omit<PageParentData, keyof PageParentData & EnsureDefined<PageServerData>> & OptionalUnion<EnsureDefined<PageParentData & EnsureDefined<PageServerData>>>>;
export type PageProps = { data: PageData }
```


## .svelte-kit\types\src\routes\(marketing)\search\api.json\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(marketing)/search/api.json';

export type RequestHandler = Kit.RequestHandler<RouteParams, RouteId>;
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;
```


## .svelte-kit\types\src\routes\(marketing)\search\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(marketing)/search';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageServerParentData = Omit<EnsureDefined<import('../../$types.js').LayoutServerData>, keyof import('../$types.js').LayoutServerData> & EnsureDefined<import('../$types.js').LayoutServerData>;
type PageParentData = Omit<EnsureDefined<import('../../$types.js').LayoutData>, keyof import('../$types.js').LayoutData> & EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerLoad<OutputData extends OutputDataShape<PageServerParentData> = OutputDataShape<PageServerParentData>> = Kit.ServerLoad<RouteParams, PageServerParentData, OutputData, RouteId>;
export type PageServerLoadEvent = Parameters<PageServerLoad>[0];
export type ActionData = unknown;
export type PageServerData = null;
export type PageData = Expand<PageParentData>;
export type Action<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Action<RouteParams, OutputData, RouteId>
export type Actions<OutputData extends Record<string, any> | void = Record<string, any> | void> = Kit.Actions<RouteParams, OutputData, RouteId>
export type PageProps = { data: PageData; form: ActionData }
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;
```


## .svelte-kit\types\src\routes\(marketing)\sitemap.xml\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(marketing)/sitemap.xml';

export type RequestHandler = Kit.RequestHandler<RouteParams, RouteId>;
export type RequestEvent = Kit.RequestEvent<RouteParams, RouteId>;
```


## .svelte-kit\types\src\routes\(marketing)\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/(marketing)';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type PageParentData = Omit<EnsureDefined<import('../$types.js').LayoutData>, keyof LayoutData> & EnsureDefined<LayoutData>;
type LayoutRouteId = RouteId | "/(marketing)" | "/(marketing)/blog" | "/(marketing)/blog/(posts)/awesome_post" | "/(marketing)/blog/(posts)/example_blog_post" | "/(marketing)/blog/(posts)/how_we_built_our_41kb_saas_website" | "/(marketing)/contact_us" | "/(marketing)/login" | "/(marketing)/login/current_password_error" | "/(marketing)/login/forgot_password" | "/(marketing)/login/sign_in" | "/(marketing)/login/sign_up" | "/(marketing)/pricing" | "/(marketing)/search"
type LayoutParams = RouteParams & {  }
type LayoutParentData = EnsureDefined<import('../$types.js').LayoutData>;

export type PageServerData = null;
export type PageLoad<OutputData extends OutputDataShape<PageParentData> = OutputDataShape<PageParentData>> = Kit.Load<RouteParams, PageServerData, PageParentData, OutputData, RouteId>;
export type PageLoadEvent = Parameters<PageLoad>[0];
export type PageData = Expand<Omit<PageParentData, keyof PageParentData & EnsureDefined<PageServerData>> & OptionalUnion<EnsureDefined<PageParentData & EnsureDefined<PageServerData>>>>;
export type PageProps = { data: PageData }
export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;
export type LayoutProps = { data: LayoutData; children: import("svelte").Snippet }
```


## .svelte-kit\types\src\routes\$types.d.ts

```ts
import type * as Kit from '@sveltejs/kit';

type Expand<T> = T extends infer O ? { [K in keyof O]: O[K] } : never;
// @ts-ignore
type MatcherParam<M> = M extends (param : string) => param is infer U ? U extends string ? U : string : string;
type RouteParams = {  };
type RouteId = '/';
type MaybeWithVoid<T> = {} extends T ? T | void : T;
export type RequiredKeys<T> = { [K in keyof T]-?: {} extends { [P in K]: T[K] } ? never : K; }[keyof T];
type OutputDataShape<T> = MaybeWithVoid<Omit<App.PageData, RequiredKeys<T>> & Partial<Pick<App.PageData, keyof T & keyof App.PageData>> & Record<string, any>>
type EnsureDefined<T> = T extends null | undefined ? {} : T;
type OptionalUnion<U extends Record<string, any>, A extends keyof U = U extends U ? keyof U : never> = U extends unknown ? { [P in Exclude<A, keyof U>]?: never } & U : never;
export type Snapshot<T = any> = Kit.Snapshot<T>;
type LayoutRouteId = RouteId | "/(admin)/account/(menu)" | "/(admin)/account/(menu)/billing" | "/(admin)/account/(menu)/billing/manage" | "/(admin)/account/(menu)/settings" | "/(admin)/account/(menu)/settings/change_email" | "/(admin)/account/(menu)/settings/change_email_subscription" | "/(admin)/account/(menu)/settings/change_password" | "/(admin)/account/(menu)/settings/delete_account" | "/(admin)/account/(menu)/settings/edit_profile" | "/(admin)/account/(menu)/settings/reset_password" | "/(admin)/account/api" | "/(admin)/account/create_profile" | "/(admin)/account/select_plan" | "/(admin)/account/sign_out" | "/(admin)/account/subscribe/[slug]" | "/(marketing)" | "/(marketing)/blog" | "/(marketing)/blog/(posts)/awesome_post" | "/(marketing)/blog/(posts)/example_blog_post" | "/(marketing)/blog/(posts)/how_we_built_our_41kb_saas_website" | "/(marketing)/contact_us" | "/(marketing)/login" | "/(marketing)/login/current_password_error" | "/(marketing)/login/forgot_password" | "/(marketing)/login/sign_in" | "/(marketing)/login/sign_up" | "/(marketing)/pricing" | "/(marketing)/search" | null
type LayoutParams = RouteParams & { slug?: string }
type LayoutParentData = EnsureDefined<{}>;

export type LayoutServerData = null;
export type LayoutData = Expand<LayoutParentData>;
export type LayoutProps = { data: LayoutData; children: import("svelte").Snippet }
```


## .svelte-kit\types\route_meta_data.json

```json
{
	"/(marketing)": [
		"src/routes/(marketing)/+page.ts"
	],
	"/": [],
	"/(admin)/account/(menu)": [
		"src/routes/(admin)/account/(menu)/+page.server.ts",
		"src/routes/(admin)/account/+layout.ts",
		"src/routes/(admin)/account/+layout.server.ts",
		"src/routes/(admin)/account/+layout.ts",
		"src/routes/(admin)/account/+layout.server.ts"
	],
	"/(admin)/account": [
		"src/routes/(admin)/account/+layout.ts",
		"src/routes/(admin)/account/+layout.server.ts"
	],
	"/(admin)/account/api": [
		"src/routes/(admin)/account/api/+page.server.ts",
		"src/routes/(admin)/account/+layout.ts",
		"src/routes/(admin)/account/+layout.server.ts"
	],
	"/(admin)/account/(menu)/billing": [
		"src/routes/(admin)/account/(menu)/billing/+page.server.ts",
		"src/routes/(admin)/account/+layout.ts",
		"src/routes/(admin)/account/+layout.server.ts"
	],
	"/(admin)/account/(menu)/billing/manage": [
		"src/routes/(admin)/account/(menu)/billing/manage/+page.server.ts",
		"src/routes/(admin)/account/+layout.ts",
		"src/routes/(admin)/account/+layout.server.ts"
	],
	"/(admin)/account/create_profile": [
		"src/routes/(admin)/account/create_profile/+page.ts",
		"src/routes/(admin)/account/+layout.ts",
		"src/routes/(admin)/account/+layout.server.ts"
	],
	"/(admin)/account/select_plan": [
		"src/routes/(admin)/account/+layout.ts",
		"src/routes/(admin)/account/+layout.server.ts"
	],
	"/(admin)/account/(menu)/settings": [
		"src/routes/(admin)/account/+layout.ts",
		"src/routes/(admin)/account/+layout.server.ts"
	],
	"/(admin)/account/(menu)/settings/change_email_subscription": [
		"src/routes/(admin)/account/+layout.ts",
		"src/routes/(admin)/account/+layout.server.ts"
	],
	"/(admin)/account/(menu)/settings/change_email": [
		"src/routes/(admin)/account/+layout.ts",
		"src/routes/(admin)/account/+layout.server.ts"
	],
	"/(admin)/account/(menu)/settings/change_password": [
		"src/routes/(admin)/account/+layout.ts",
		"src/routes/(admin)/account/+layout.server.ts"
	],
	"/(admin)/account/(menu)/settings/delete_account": [
		"src/routes/(admin)/account/+layout.ts",
		"src/routes/(admin)/account/+layout.server.ts"
	],
	"/(admin)/account/(menu)/settings/edit_profile": [
		"src/routes/(admin)/account/+layout.ts",
		"src/routes/(admin)/account/+layout.server.ts"
	],
	"/(admin)/account/(menu)/settings/reset_password": [
		"src/routes/(admin)/account/+layout.ts",
		"src/routes/(admin)/account/+layout.server.ts"
	],
	"/(admin)/account/sign_out": [
		"src/routes/(admin)/account/+layout.ts",
		"src/routes/(admin)/account/+layout.server.ts"
	],
	"/(admin)/account/subscribe/[slug]": [
		"src/routes/(admin)/account/subscribe/[slug]/+page.server.ts",
		"src/routes/(admin)/account/+layout.ts",
		"src/routes/(admin)/account/+layout.server.ts"
	],
	"/(marketing)/auth/callback": [
		"src/routes/(marketing)/auth/callback/+server.js"
	],
	"/(marketing)/blog/(posts)": [
		"src/routes/(marketing)/blog/+layout.ts"
	],
	"/(marketing)/blog": [
		"src/routes/(marketing)/blog/+layout.ts",
		"src/routes/(marketing)/blog/+layout.ts"
	],
	"/(marketing)/blog/(posts)/awesome_post": [
		"src/routes/(marketing)/blog/+layout.ts"
	],
	"/(marketing)/blog/(posts)/example_blog_post": [
		"src/routes/(marketing)/blog/+layout.ts"
	],
	"/(marketing)/blog/(posts)/how_we_built_our_41kb_saas_website": [
		"src/routes/(marketing)/blog/+layout.ts"
	],
	"/(marketing)/blog/rss.xml": [
		"src/routes/(marketing)/blog/rss.xml/+server.ts"
	],
	"/(marketing)/contact_us": [
		"src/routes/(marketing)/contact_us/+page.server.ts"
	],
	"/(marketing)/login": [
		"src/routes/(marketing)/login/+layout.ts",
		"src/routes/(marketing)/login/+layout.server.ts",
		"src/routes/(marketing)/login/+layout.ts",
		"src/routes/(marketing)/login/+layout.server.ts"
	],
	"/(marketing)/login/current_password_error": [
		"src/routes/(marketing)/login/+layout.ts",
		"src/routes/(marketing)/login/+layout.server.ts"
	],
	"/(marketing)/login/forgot_password": [
		"src/routes/(marketing)/login/forgot_password/+page.server.ts",
		"src/routes/(marketing)/login/+layout.ts",
		"src/routes/(marketing)/login/+layout.server.ts"
	],
	"/(marketing)/login/sign_in": [
		"src/routes/(marketing)/login/sign_in/+page.server.ts",
		"src/routes/(marketing)/login/+layout.ts",
		"src/routes/(marketing)/login/+layout.server.ts"
	],
	"/(marketing)/login/sign_up": [
		"src/routes/(marketing)/login/sign_up/+page.server.ts",
		"src/routes/(marketing)/login/+layout.ts",
		"src/routes/(marketing)/login/+layout.server.ts"
	],
	"/(marketing)/pricing": [
		"src/routes/(marketing)/pricing/+page.ts"
	],
	"/(marketing)/search": [
		"src/routes/(marketing)/search/+page.server.ts"
	],
	"/(marketing)/search/api.json": [
		"src/routes/(marketing)/search/api.json/+server.ts"
	],
	"/(marketing)/sitemap.xml": [
		"src/routes/(marketing)/sitemap.xml/+server.ts"
	]
}
```


## .svelte-kit\ambient.d.ts

```ts

// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const PRIVATE_SUPABASE_SERVICE_ROLE: string;
	export const PRIVATE_STRIPE_API_KEY: string;
	export const ALLUSERSPROFILE: string;
	export const AMDRMSDKPATH: string;
	export const APPDATA: string;
	export const ChocolateyInstall: string;
	export const ChocolateyLastPathUpdate: string;
	export const COLOR: string;
	export const CommonProgramFiles: string;
	export const CommonProgramW6432: string;
	export const COMPUTERNAME: string;
	export const ComSpec: string;
	export const DriverData: string;
	export const EDITOR: string;
	export const EFC_2136_1592913036: string;
	export const EMBEDINC: string;
	export const HOME: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const INIT_CWD: string;
	export const LOCALAPPDATA: string;
	export const LOGONSERVER: string;
	export const NODE: string;
	export const NODE_ENV: string;
	export const NODE_EXE: string;
	export const NPM_CLI_JS: string;
	export const npm_command: string;
	export const npm_config_cache: string;
	export const npm_config_engine_strict: string;
	export const npm_config_globalconfig: string;
	export const npm_config_global_prefix: string;
	export const npm_config_init_module: string;
	export const npm_config_local_prefix: string;
	export const npm_config_node_gyp: string;
	export const npm_config_noproxy: string;
	export const npm_config_npm_version: string;
	export const npm_config_prefix: string;
	export const npm_config_resolution_mode: string;
	export const npm_config_userconfig: string;
	export const npm_config_user_agent: string;
	export const npm_execpath: string;
	export const npm_lifecycle_event: string;
	export const npm_lifecycle_script: string;
	export const npm_node_execpath: string;
	export const npm_package_json: string;
	export const npm_package_name: string;
	export const npm_package_version: string;
	export const NPM_PREFIX_JS: string;
	export const NPM_PREFIX_NPM_CLI_JS: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const OneDrive: string;
	export const OneDriveConsumer: string;
	export const OnlineServices: string;
	export const OS: string;
	export const Path: string;
	export const PATHEXT: string;
	export const platformcode: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const ProgramData: string;
	export const ProgramFiles: string;
	export const ProgramW6432: string;
	export const PROMPT: string;
	export const PSModulePath: string;
	export const PUBLIC: string;
	export const RegionCode: string;
	export const SESSIONNAME: string;
	export const SystemDrive: string;
	export const SystemRoot: string;
	export const TELEGRAM_BOT_TOKEN: string;
	export const TELEGRAM_CHAT_ID: string;
	export const TEMP: string;
	export const TMP: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const windir: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	export const PUBLIC_SUPABASE_URL: string;
	export const PUBLIC_SUPABASE_ANON_KEY: string;
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		PRIVATE_SUPABASE_SERVICE_ROLE: string;
		PRIVATE_STRIPE_API_KEY: string;
		ALLUSERSPROFILE: string;
		AMDRMSDKPATH: string;
		APPDATA: string;
		ChocolateyInstall: string;
		ChocolateyLastPathUpdate: string;
		COLOR: string;
		CommonProgramFiles: string;
		CommonProgramW6432: string;
		COMPUTERNAME: string;
		ComSpec: string;
		DriverData: string;
		EDITOR: string;
		EFC_2136_1592913036: string;
		EMBEDINC: string;
		HOME: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		INIT_CWD: string;
		LOCALAPPDATA: string;
		LOGONSERVER: string;
		NODE: string;
		NODE_ENV: string;
		NODE_EXE: string;
		NPM_CLI_JS: string;
		npm_command: string;
		npm_config_cache: string;
		npm_config_engine_strict: string;
		npm_config_globalconfig: string;
		npm_config_global_prefix: string;
		npm_config_init_module: string;
		npm_config_local_prefix: string;
		npm_config_node_gyp: string;
		npm_config_noproxy: string;
		npm_config_npm_version: string;
		npm_config_prefix: string;
		npm_config_resolution_mode: string;
		npm_config_userconfig: string;
		npm_config_user_agent: string;
		npm_execpath: string;
		npm_lifecycle_event: string;
		npm_lifecycle_script: string;
		npm_node_execpath: string;
		npm_package_json: string;
		npm_package_name: string;
		npm_package_version: string;
		NPM_PREFIX_JS: string;
		NPM_PREFIX_NPM_CLI_JS: string;
		NUMBER_OF_PROCESSORS: string;
		OneDrive: string;
		OneDriveConsumer: string;
		OnlineServices: string;
		OS: string;
		Path: string;
		PATHEXT: string;
		platformcode: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		ProgramData: string;
		ProgramFiles: string;
		ProgramW6432: string;
		PROMPT: string;
		PSModulePath: string;
		PUBLIC: string;
		RegionCode: string;
		SESSIONNAME: string;
		SystemDrive: string;
		SystemRoot: string;
		TELEGRAM_BOT_TOKEN: string;
		TELEGRAM_CHAT_ID: string;
		TEMP: string;
		TMP: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		windir: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		PUBLIC_SUPABASE_URL: string;
		PUBLIC_SUPABASE_ANON_KEY: string;
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
```


## .svelte-kit\non-ambient.d.ts

```ts

// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};
```


## .svelte-kit\tsconfig.json

```json
{
	"compilerOptions": {
		"paths": {
			"$lib": [
				"../src/lib"
			],
			"$lib/*": [
				"../src/lib/*"
			]
		},
		"rootDirs": [
			"..",
			"./types"
		],
		"verbatimModuleSyntax": true,
		"isolatedModules": true,
		"lib": [
			"esnext",
			"DOM",
			"DOM.Iterable"
		],
		"moduleResolution": "bundler",
		"module": "esnext",
		"noEmit": true,
		"target": "esnext"
	},
	"include": [
		"ambient.d.ts",
		"non-ambient.d.ts",
		"./types/**/$types.d.ts",
		"../vite.config.js",
		"../vite.config.ts",
		"../src/**/*.js",
		"../src/**/*.ts",
		"../src/**/*.svelte",
		"../tests/**/*.js",
		"../tests/**/*.ts",
		"../tests/**/*.svelte"
	],
	"exclude": [
		"../node_modules/**",
		"../src/service-worker.js",
		"../src/service-worker/**/*.js",
		"../src/service-worker.ts",
		"../src/service-worker/**/*.ts",
		"../src/service-worker.d.ts",
		"../src/service-worker/**/*.d.ts"
	]
}
```


## src\lib\emails\welcome_email_html.hbs

```hbs
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Welcome Email</title>
    <style media="all" type="text/css">
      @media all { .btn-primary table td:hover { background-color: #ec0867
      !important; } .btn-primary a:hover { background-color: #ec0867 !important;
      border-color: #ec0867 !important; } } @media only screen and (max-width:
      640px) { .main p, .main td, .main span { font-size: 16px !important; }
      .wrapper { padding: 8px !important; } .content { padding: 0 !important; }
      .container { padding: 0 !important; padding-top: 8px !important; width:
      100% !important; } .main { border-left-width: 0 !important; border-radius:
      0 !important; border-right-width: 0 !important; } .btn table { max-width:
      100% !important; width: 100% !important; } .btn a { font-size: 16px
      !important; max-width: 100% !important; width: 100% !important; } } @media
      all { .ExternalClass { width: 100%; } .ExternalClass, .ExternalClass p,
      .ExternalClass span, .ExternalClass font, .ExternalClass td,
      .ExternalClass div { line-height: 100%; } .apple-link a { color: inherit
      !important; font-family: inherit !important; font-size: inherit
      !important; font-weight: inherit !important; line-height: inherit
      !important; text-decoration: none !important; } #MessageViewBody a {
      color: inherit; text-decoration: none; font-size: inherit; font-family:
      inherit; font-weight: inherit; line-height: inherit; } }
    </style>
  </head>
  <body
    style="font-family: Helvetica, sans-serif; -webkit-font-smoothing: antialiased; font-size: 16px; line-height: 1.3; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%; background-color: #f4f5f6; margin: 0; padding: 0;"
  >
    <table
      role="presentation"
      border="0"
      cellpadding="0"
      cellspacing="0"
      class="body"
      style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background-color: #f4f5f6; width: 100%;"
      width="100%"
      bgcolor="#f4f5f6"
    >
      <tr>
        <td
          style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;"
          valign="top"
        >&nbsp;</td>
        <td
          class="container"
          style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; max-width: 600px; padding: 0; padding-top: 24px; width: 600px; margin: 0 auto;"
          width="600"
          valign="top"
        >
          <div
            class="content"
            style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 600px; padding: 0;"
          >
            <!-- START CENTERED WHITE CONTAINER -->
            <span
              class="preheader"
              style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;"
            >Welcome to
              {{companyName}}. We're excited to have you on board.</span>
            <table
              role="presentation"
              border="0"
              cellpadding="0"
              cellspacing="0"
              class="main"
              style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; background: #ffffff; border: 1px solid #eaebed; border-radius: 16px; width: 100%;"
              width="100%"
            >
              <!-- START MAIN CONTENT AREA -->
              <tr>
                <td
                  class="wrapper"
                  style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; box-sizing: border-box; padding: 24px;"
                  valign="top"
                >
                  <p
                    style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;"
                  >
                    Welcome to
                    {{companyName}}!
                  </p>
                  <p
                    style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;"
                  >
                    This is a quick sample of a welcome email. You can customize
                    this email to fit your needs.
                  </p>
                  <table
                    role="presentation"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="btn btn-primary"
                    style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; box-sizing: border-box; width: 100%; min-width: 100%;"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td
                          align="left"
                          style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; padding-bottom: 16px;"
                          valign="top"
                        >
                          <table
                            role="presentation"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: auto;"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top; border-radius: 4px; text-align: center; background-color: #0867ec;"
                                  valign="top"
                                  align="center"
                                >
                                  <a
                                    href="https://github.com/CriticalMoments/CMSaasStarter"
                                    target="_blank"
                                    style="border: solid 2px #0867ec; border-radius: 4px; box-sizing: border-box; cursor: pointer; display: inline-block; font-size: 16px; font-weight: bold; margin: 0; padding: 12px 24px; text-decoration: none; text-transform: capitalize; background-color: #0867ec; border-color: #0867ec; color: #ffffff;"
                                  >View SaaS Starter Docs</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <p
                    style="font-family: Helvetica, sans-serif; font-size: 16px; font-weight: normal; margin: 0; margin-bottom: 16px;"
                  >
                    Thanks for using
                    {{companyName}}!
                  </p>
                </td>
              </tr>
              <!-- END MAIN CONTENT AREA -->
            </table>

            <!-- START FOOTER -->
            <div
              class="footer"
              style="clear: both; padding-top: 24px; text-align: center; width: 100%;"
            >
              <table
                role="presentation"
                border="0"
                cellpadding="0"
                cellspacing="0"
                style="border-collapse: separate; mso-table-lspace: 0pt; mso-table-rspace: 0pt; width: 100%;"
                width="100%"
              >
                <tr>
                  <td
                    class="content-block"
                    style="font-family: Helvetica, sans-serif; vertical-align: top; color: #9a9ea6; font-size: 16px; text-align: center;"
                    valign="top"
                    align="center"
                  >
                    <span
                      class="apple-link"
                      style="color: #9a9ea6; font-size: 16px; text-align: center;"
                    >Company Inc, 123 Main St, Toronto, Canada</span>
                  </td>
                </tr>
                <tr>
                  <td
                    class="content-block powered-by"
                    style="font-family: Helvetica, sans-serif; vertical-align: top; color: #9a9ea6; font-size: 16px; text-align: center;"
                    valign="top"
                    align="center"
                  >
                    Email Template by
                    <a
                      href="http://htmlemail.io"
                      style="color: #9a9ea6; font-size: 16px; text-align: center; text-decoration: none;"
                    >HTMLemail.io</a>
                  </td>
                </tr>
                <tr>
                  <td
                    class="content-block"
                    style="font-family: Helvetica, sans-serif; vertical-align: top; color: #9a9ea6; font-size: 14px; text-align: center;"
                    valign="top"
                    align="center"
                  >
                    <a
                      href="{{WebsiteBaseUrl}}/account/settings/change_email_subscription"
                      style="color: #4382ff; font-size: 16px; text-align: center; text-decoration: underline;"
                    >Unsubscribe</a>
                  </td>
                </tr>
              </table>
            </div>

            <!-- END FOOTER -->

            <!-- END CENTERED WHITE CONTAINER -->
          </div>
        </td>
        <td
          style="font-family: Helvetica, sans-serif; font-size: 16px; vertical-align: top;"
          valign="top"
        >&nbsp;</td>
      </tr>
    </table>
  </body>
</html>
```


## src\lib\emails\welcome_email_text.hbs

```hbs
Welcome to {{{companyName}}}!

This is a quick sample of a welcome email. You can customize this email to fit your needs.

To unsubscribe, visit: {{{WebsiteBaseUrl}}}/account/settings/change_email_subscription
```


## src\lib\build_index.ts

```ts
import path from "path"
import fs from "fs"
import { glob } from "glob"
import { convert } from "html-to-text"
import JSDOM from "jsdom"
import Fuse from "fuse.js"

const excludePaths = ["/search"]

export async function buildSearchIndex() {
  const indexData = []

  // iterate all files with html extension in ./svelte-kit/output/prerendered/pages
  const fileRoot = path.resolve(".")
  const pagesPath = path.join(fileRoot, ".svelte-kit/output/prerendered/pages")

  const allFiles = glob.sync(path.join(pagesPath, "**/*.html"))
  for (const file of allFiles) {
    try {
      const webPath = file
        .replace(pagesPath, "")
        .replace("/index.html", "")
        .replace(".html", "")

      // check if path is excluded
      if (excludePaths.includes(webPath)) {
        continue
      }

      // read the file
      const data = fs.readFileSync(file, "utf8")
      const plaintext = convert(data, {
        selectors: [
          { selector: "a", options: { ignoreHref: true, linkBrackets: false } },
          { selector: "img", format: "skip" },
        ],
      })
      const dom = new JSDOM.JSDOM(data)
      const title =
        dom.window.document.querySelector("title")?.innerHTML ||
        "Page " + webPath
      const description =
        dom.window.document
          .querySelector('meta[name="description"]')
          ?.getAttribute("content") || ""
      indexData.push({
        title,
        description,
        body: plaintext,
        path: webPath,
      })
    } catch (e) {
      console.log("Blog search indexing error", file, e)
    }
  }

  const index = Fuse.createIndex(["title", "description", "body"], indexData)
  const jsonIndex = index.toJSON()
  const data = { index: jsonIndex, indexData, buildTime: Date.now() }
  return data
}

// Build search index into the output directory, for use in the build process (see vite.config.js)
export async function buildAndCacheSearchIndex() {
  const data = await buildSearchIndex()

  const dir = path.resolve("./.svelte-kit/output/client/search")
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true })
  }

  fs.writeFileSync(
    path.resolve("./.svelte-kit/output/client/search/api.json"),
    JSON.stringify(data),
  )
  console.log("Search index built")
}
```


## src\lib\index.js

```js
// place files you want to import through the `$lib` alias in this folder.
```


## src\lib\load_helpers.ts

```ts
import { isBrowser } from "@supabase/ssr"
import type { Session, SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "../DatabaseDefinitions.js"

export const load_helper = async (
  server_session: Session | null,
  supabase: SupabaseClient<Database>,
) => {
  // on server populated on server by LayoutData, using authGuard hook
  let session = server_session
  if (isBrowser()) {
    // Only call getSession in browser where it's safe.
    const getSessionResponse = await supabase.auth.getSession()
    session = getSessionResponse.data.session
  }
  if (!session) {
    return {
      session: null,
      user: null,
    }
  }

  // https://github.com/supabase/auth-js/issues/888#issuecomment-2189298518
  if ("suppressGetSessionWarning" in supabase.auth) {
    // @ts-expect-error - suppressGetSessionWarning is not part of the official API
    supabase.auth.suppressGetSessionWarning = true
  } else {
    console.warn(
      "SupabaseAuthClient#suppressGetSessionWarning was removed. See https://github.com/supabase/auth-js/issues/888.",
    )
  }
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()
  if (userError || !user) {
    return {
      session: null,
      user: null,
    }
  }

  return {
    session,
    user,
  }
}
```


## src\lib\mailer.test.ts

```ts
import { vi, describe, it, expect, beforeEach } from "vitest"

vi.mock("@supabase/supabase-js")
vi.mock("$env/dynamic/private")
vi.mock("resend")

import { createClient, type User } from "@supabase/supabase-js"
import { Resend } from "resend"
import * as mailer from "./mailer"

describe("mailer", () => {
  const mockSend = vi.fn().mockResolvedValue({ id: "mock-email-id" })

  const mockSupabaseClient = {
    auth: {
      admin: {
        getUserById: vi.fn(),
      },
    },
    from: vi.fn().mockReturnThis(),
    select: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    single: vi.fn(),
  }

  beforeEach(async () => {
    vi.clearAllMocks()
    const { env } = await import("$env/dynamic/private")
    env.PRIVATE_RESEND_API_KEY = "mock_resend_api_key"
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;(createClient as any).mockReturnValue(mockSupabaseClient)

    vi.mocked(Resend).mockImplementation(
      () =>
        ({
          emails: {
            send: mockSend,
          },
        }) as unknown as Resend,
    )
  })

  describe("sendUserEmail", () => {
    const mockUser = { id: "user123", email: "user@example.com" }

    it("sends welcome email", async () => {
      mockSupabaseClient.auth.admin.getUserById.mockResolvedValue({
        data: { user: { email_confirmed_at: new Date().toISOString() } },
        error: null,
      })

      mockSupabaseClient.single.mockResolvedValue({
        data: { unsubscribed: false },
        error: null,
      })

      await mailer.sendUserEmail({
        user: mockUser as User,
        subject: "Test",
        from_email: "test@example.com",
        template_name: "welcome_email",
        template_properties: {
          companyName: "Test Company",
          WebsiteBaseUrl: "https://test.com",
        },
      })

      expect(mockSend).toHaveBeenCalled()
      const email = mockSend.mock.calls[0][0]
      expect(email.to).toEqual(["user@example.com"])
    })

    it("should not send email if user is unsubscribed", async () => {
      const originalConsoleLog = console.log
      console.log = vi.fn()

      mockSupabaseClient.auth.admin.getUserById.mockResolvedValue({
        data: { user: { email_confirmed_at: new Date().toISOString() } },
        error: null,
      })

      mockSupabaseClient.single.mockResolvedValue({
        data: { unsubscribed: true },
        error: null,
      })

      await mailer.sendUserEmail({
        user: mockUser as User,
        subject: "Test",
        from_email: "test@example.com",
        template_name: "welcome_email",
        template_properties: {},
      })

      expect(mockSend).not.toHaveBeenCalled()

      expect(console.log).toHaveBeenCalledWith(
        "User unsubscribed. Aborting email. ",
        mockUser.id,
        mockUser.email,
      )

      console.log = originalConsoleLog
    })
  })

  describe("sendTemplatedEmail", () => {
    it("sends templated email", async () => {
      await mailer.sendTemplatedEmail({
        subject: "Test subject",
        from_email: "from@example.com",
        to_emails: ["to@example.com"],
        template_name: "welcome_email",
        template_properties: {
          companyName: "Test Company",
          WebsiteBaseUrl: "https://test.com",
        },
      })

      expect(mockSend).toHaveBeenCalled()
      const email = mockSend.mock.calls[0][0]
      expect(email.from).toEqual("from@example.com")
      expect(email.to).toEqual(["to@example.com"])
      expect(email.subject).toEqual("Test subject")
      expect(email.text).toContain("This is a quick sample of a welcome email")
      expect(email.html).toContain("This is a quick sample of a welcome email")
      expect(email.html).toContain("<html")
      expect(email.html).toContain("https://test.com")
      expect(email.html).toContain("Test Company")
      expect(email.text).toContain("https://test.com")
      expect(email.text).toContain("Test Company")
    })
  })
})
```


## src\lib\mailer.ts

```ts
import { Resend } from "resend"
import { env } from "$env/dynamic/private"
import { PRIVATE_SUPABASE_SERVICE_ROLE } from "$env/static/private"
import { PUBLIC_SUPABASE_URL } from "$env/static/public"
import { createClient, type User } from "@supabase/supabase-js"
import type { Database } from "../DatabaseDefinitions"
import handlebars from "handlebars"

// Sends an email to the admin email address.
// Does not throw errors, but logs them.
export const sendAdminEmail = async ({
  subject,
  body,
}: {
  subject: string
  body: string
}) => {
  // Check admin email is setup
  if (!env.PRIVATE_ADMIN_EMAIL) {
    return
  }

  try {
    const resend = new Resend(env.PRIVATE_RESEND_API_KEY)
    const resp = await resend.emails.send({
      from: env.PRIVATE_FROM_ADMIN_EMAIL || env.PRIVATE_ADMIN_EMAIL,
      to: [env.PRIVATE_ADMIN_EMAIL],
      subject: "ADMIN_MAIL: " + subject,
      text: body,
    })

    if (resp.error) {
      console.log("Failed to send admin email, error:", resp.error)
    }
  } catch (e) {
    console.log("Failed to send admin email, error:", e)
  }
}

export const sendUserEmail = async ({
  user,
  subject,
  from_email,
  template_name,
  template_properties,
}: {
  user: User
  subject: string
  from_email: string
  template_name: string
  template_properties: Record<string, string>
}) => {
  const email = user.email
  if (!email) {
    console.log("No email for user. Aborting email. ", user.id)
    return
  }

  // Check if the user email is verified using the full user object from service role
  // Oauth uses email_verified, and email auth uses email_confirmed_at
  const serverSupabase = createClient<Database>(
    PUBLIC_SUPABASE_URL,
    PRIVATE_SUPABASE_SERVICE_ROLE,
    { auth: { persistSession: false } },
  )
  const { data: serviceUserData } = await serverSupabase.auth.admin.getUserById(
    user.id,
  )
  const emailVerified =
    serviceUserData.user?.email_confirmed_at ||
    serviceUserData.user?.user_metadata?.email_verified

  if (!emailVerified) {
    console.log("User email not verified. Aborting email. ", user.id, email)
    return
  }

  // Fetch user profile to check unsubscribed status
  const { data: profile, error: profileError } = await serverSupabase
    .from("profiles")
    .select("unsubscribed")
    .eq("id", user.id)
    .single()

  if (profileError) {
    console.log("Error fetching user profile. Aborting email. ", user.id, email)
    return
  }

  if (profile?.unsubscribed) {
    console.log("User unsubscribed. Aborting email. ", user.id, email)
    return
  }

  await sendTemplatedEmail({
    subject,
    to_emails: [email],
    from_email,
    template_name,
    template_properties,
  })
}

export const sendTemplatedEmail = async ({
  subject,
  to_emails,
  from_email,
  template_name,
  template_properties,
}: {
  subject: string
  to_emails: string[]
  from_email: string
  template_name: string
  template_properties: Record<string, string>
}) => {
  if (!env.PRIVATE_RESEND_API_KEY) {
    // email not configured.  Emails are optional so no error is thrown
    return
  }

  let plaintextBody: string | undefined = undefined
  try {
    const textTemplate = await import(
      `./emails/${template_name}_text.hbs?raw`
    ).then((mod) => mod.default)
    const template = handlebars.compile(textTemplate)
    plaintextBody = template(template_properties)
  } catch (e) {
    // ignore, plaintextBody is optional
    plaintextBody = undefined
  }

  let htmlBody: string | undefined = undefined
  try {
    const htmlTemplate = await import(
      `./emails/${template_name}_html.hbs?raw`
    ).then((mod) => mod.default)
    const template = handlebars.compile(htmlTemplate)
    htmlBody = template(template_properties)
  } catch (e) {
    // ignore, htmlBody is optional
    htmlBody = undefined
  }

  if (!plaintextBody && !htmlBody) {
    console.log(
      "No email body: requires plaintextBody or htmlBody. Template: ",
      template_name,
    )
    return
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const email: any = {
      from: from_email,
      to: to_emails,
      subject: subject,
    }
    if (plaintextBody) {
      email.text = plaintextBody
    }
    if (htmlBody) {
      email.html = htmlBody
    }
    const resend = new Resend(env.PRIVATE_RESEND_API_KEY)
    const resp = await resend.emails.send(email)

    if (resp.error) {
      console.log("Failed to send email, error:", resp.error)
    }
  } catch (e) {
    console.log("Failed to send email, error:", e)
  }
}
```


## src\routes\(admin)\account\(menu)\billing\manage\+page.server.ts

```ts
import { PRIVATE_STRIPE_API_KEY } from "$env/static/private"
import { error, redirect } from "@sveltejs/kit"
import Stripe from "stripe"
import { getOrCreateCustomerId } from "../../../subscription_helpers.server"
import type { PageServerLoad } from "./$types"
const stripe = new Stripe(PRIVATE_STRIPE_API_KEY, { apiVersion: "2023-08-16" })

export const load: PageServerLoad = async ({
  url,
  locals: { safeGetSession, supabaseServiceRole },
}) => {
  const { session, user } = await safeGetSession()
  if (!session) {
    redirect(303, "/login")
  }

  const { error: idError, customerId } = await getOrCreateCustomerId({
    supabaseServiceRole,
    user,
  })
  if (idError || !customerId) {
    console.error("Error creating customer id", idError)
    error(500, {
      message: "Unknown error (PCID). If issue persists, please contact us.",
    })
  }

  let portalLink
  try {
    const portalSession = await stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: `${url.origin}/account/billing`,
    })
    portalLink = portalSession?.url
  } catch (e) {
    console.error("Error creating billing portal session", e)
    error(500, "Unknown error (PSE). If issue persists, please contact us.")
  }

  redirect(303, portalLink ?? "/account/billing")
}
```


## src\routes\(admin)\account\(menu)\billing\+page.server.ts

```ts
import { error, redirect } from "@sveltejs/kit"
import {
  fetchSubscription,
  getOrCreateCustomerId,
} from "../../subscription_helpers.server"
import type { PageServerLoad } from "./$types"

export const load: PageServerLoad = async ({
  locals: { safeGetSession, supabaseServiceRole },
}) => {
  const { session, user } = await safeGetSession()
  if (!session || !user?.id) {
    redirect(303, "/login")
  }

  const { error: idError, customerId } = await getOrCreateCustomerId({
    supabaseServiceRole,
    user,
  })
  if (idError || !customerId) {
    console.error("Error creating customer id", idError)
    error(500, {
      message: "Unknown error. If issue persists, please contact us.",
    })
  }

  const {
    primarySubscription,
    hasEverHadSubscription,
    error: fetchErr,
  } = await fetchSubscription({
    customerId,
  })
  if (fetchErr) {
    console.error("Error fetching subscription", fetchErr)
    error(500, {
      message: "Unknown error. If issue persists, please contact us.",
    })
  }

  return {
    isActiveCustomer: !!primarySubscription,
    hasEverHadSubscription,
    currentPlanId: primarySubscription?.appSubscription?.id,
  }
}
```


## src\routes\(admin)\account\(menu)\billing\+page.svelte

```svelte
<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"
  import SettingsModule from "../settings/settings_module.svelte"
  import PricingModule from "../../../../(marketing)/pricing/pricing_module.svelte"
  import {
    pricingPlans,
    defaultPlanId,
  } from "../../../../(marketing)/pricing/pricing_plans"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("billing")

  let { data } = $props()

  let currentPlanId = data.currentPlanId ?? defaultPlanId
  let currentPlanName = pricingPlans.find(
    (x) => x.id === data.currentPlanId,
  )?.name
</script>

<svelte:head>
  <title>Billing</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-2">
  {data.isActiveCustomer ? "Billing" : "Select a Plan"}
</h1>
<div>
  View our <a href="/pricing" target="_blank" class="link">pricing page</a> for details.
</div>

{#if !data.isActiveCustomer}
  <div class="mt-8">
    <PricingModule {currentPlanId} callToAction="Select Plan" center={false} />
  </div>

  {#if data.hasEverHadSubscription}
    <div class="mt-10">
      <a href="/account/billing/manage" class="link">View past invoices</a>
    </div>
  {/if}
{:else}
  <SettingsModule
    title="Subscription"
    editable={false}
    fields={[
      {
        id: "plan",
        label: "Current Plan",
        initialValue: currentPlanName || "",
      },
    ]}
    editButtonTitle="Manage Subscription"
    editLink="/account/billing/manage"
  />
{/if}
```


## src\routes\(admin)\account\(menu)\settings\change_email\+page.svelte

```svelte
<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"
  import SettingsModule from "../settings_module.svelte"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("settings")

  let { data } = $props()

  let { user } = data
</script>

<svelte:head>
  <title>Change Email</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Settings</h1>

<SettingsModule
  title="Change Email"
  editable={true}
  successTitle="Email change initiated"
  successBody="You should receive emails at both the old and new address to confirm the change. Please click the link in both emails to finalized the change. Until finalized, you must sign in with your current email."
  formTarget="/account/api?/updateEmail"
  fields={[
    {
      id: "email",
      label: "Email",
      initialValue: user?.email ?? "",
      placeholder: "Email address",
    },
  ]}
/>
```


## src\routes\(admin)\account\(menu)\settings\change_email_subscription\+page.svelte

```svelte
<script lang="ts">
  import SettingsModule from "../settings_module.svelte"
  let { data } = $props()
  let { profile } = data
  let unsubscribed = profile?.unsubscribed
</script>

<svelte:head>
  <title>Change Email Subscription</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Email Subscription</h1>

<SettingsModule
  editable={true}
  title="Subscription"
  message={unsubscribed
    ? "You are currently unsubscribed from emails"
    : "You are currently subscribed to emails"}
  saveButtonTitle={unsubscribed ? "Re-subscribe" : "Unsubscribe"}
  successBody={unsubscribed
    ? "You have been re-subscribed to emails"
    : "You have been unsubscribed from emails"}
  formTarget="/account/api?/toggleEmailSubscription"
  fields={[]}
/>
```


## src\routes\(admin)\account\(menu)\settings\change_password\+page.svelte

```svelte
<script lang="ts">
  import { page } from "$app/stores"
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"
  import SettingsModule from "../settings_module.svelte"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("settings")

  let { data } = $props()
  let { user, supabase } = data

  // True if definitely has a password, but can be false if they
  // logged in with oAuth or email link

  // @ts-expect-error: we ignore because Supabase does not maintain an AMR typedef
  let hasPassword = user?.amr?.find((x) => x.method === "password")
    ? true
    : false

  // @ts-expect-error: we ignore because Supabase does not maintain an AMR typedef
  let usingOAuth = user?.amr?.find((x) => x.method === "oauth") ? true : false

  let sendBtnDisabled = $state(false)
  let sendBtnText = $state("Send Set Password Email")
  let sentEmail = $state(false)
  let sendForgotPassword = () => {
    sendBtnDisabled = true
    sendBtnText = "Sending..."

    let email = user?.email
    if (email) {
      supabase.auth
        .resetPasswordForEmail(email, {
          redirectTo: `${$page.url.origin}/auth/callback?next=%2Faccount%2Fsettings%2Freset_password`,
        })
        .then((d) => {
          sentEmail = d.error ? false : true
          sendBtnDisabled = false
          sendBtnText = "Send Forgot Password Email"
        })
    }
  }
</script>

<svelte:head>
  <title>Change Password</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Change Password</h1>

{#if hasPassword}
  <SettingsModule
    title="Change Password"
    editable={true}
    saveButtonTitle="Change Password"
    successTitle="Password Changed"
    successBody="On next sign in, use your new password."
    formTarget="/account/api?/updatePassword"
    fields={[
      {
        id: "newPassword1",
        label: "New Password",
        initialValue: "",
        inputType: "password",
      },
      {
        id: "newPassword2",
        label: "Confirm New Password",
        initialValue: "",
        inputType: "password",
      },
      {
        id: "currentPassword",
        label: "Current Password",
        initialValue: "",
        inputType: "password",
      },
    ]}
  />
{:else}
  <div
    class="card p-6 pb-7 mt-8 max-w-xl flex flex-col md:flex-row shadow-sm max-w-md"
  >
    <div class="flex flex-col gap-y-4">
      {#if usingOAuth}
        <div class="font-bold">Set Password By Email</div>
        <div>
          You use oAuth to sign in ("Sign in with Github" or similar). You can
          continue to access your account using only oAuth if you like!
        </div>
      {:else}
        <div class="font-bold">Change Password By Email</div>
      {/if}
      <div>
        The button below will send you an email at {user?.email} which will allow
        you to set your password.
      </div>
      <button
        class="btn btn-outline btn-wide {sentEmail ? 'hidden' : ''}"
        disabled={sendBtnDisabled}
        onclick={sendForgotPassword}
      >
        {sendBtnText}
      </button>
      <div class="success alert alert-success {sentEmail ? '' : 'hidden'}">
        Sent email! Please check your inbox and use the link to set your
        password.
      </div>
    </div>
  </div>
{/if}
```


## src\routes\(admin)\account\(menu)\settings\delete_account\+page.svelte

```svelte
<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"
  import SettingsModule from "../settings_module.svelte"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("settings")

  let { data } = $props()
  let { session } = data
</script>

<svelte:head>
  <title>Delete Account</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Settings</h1>

<SettingsModule
  title="Delete Account"
  editable={true}
  dangerous={true}
  message="Deleting your account can not be undone. You are currently logged in as '{session
    ?.user?.email}'"
  saveButtonTitle="Delete Account"
  successTitle="Account queued for deletion"
  successBody="Your account will be deleted shortly."
  formTarget="/account/api?/deleteAccount"
  fields={[
    {
      id: "currentPassword",
      label: "Current Password",
      initialValue: "",
      inputType: "password",
    },
  ]}
/>
```


## src\routes\(admin)\account\(menu)\settings\edit_profile\+page.svelte

```svelte
<script lang="ts">
  import SettingsModule from "../settings_module.svelte"
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("settings")

  let { data } = $props()

  let { profile } = data
</script>

<svelte:head>
  <title>Edit Profile</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Settings</h1>

<SettingsModule
  editable={true}
  title="Edit Profile"
  successTitle="Saved Profile"
  formTarget="/account/api?/updateProfile"
  fields={[
    {
      id: "fullName",
      label: "Name",
      initialValue: profile?.full_name ?? "",
      placeholder: "Your full name",
      maxlength: 50,
    },
    {
      id: "companyName",
      label: "Company Name",
      initialValue: profile?.company_name ?? "",
      maxlength: 50,
    },
    {
      id: "website",
      label: "Company Website",
      initialValue: profile?.website ?? "",
      maxlength: 50,
    },
  ]}
/>
```


## src\routes\(admin)\account\(menu)\settings\reset_password\+page.svelte

```svelte
<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"
  import SettingsModule from "../settings_module.svelte"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("settings")
</script>

<svelte:head>
  <title>Reset Password</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Settings</h1>

<SettingsModule
  title="Reset Password"
  editable={true}
  saveButtonTitle="Reset Password"
  successTitle="Password Changed"
  successBody="On next sign in, use your new password."
  formTarget="/account/api?/updatePassword"
  fields={[
    {
      id: "newPassword1",
      label: "New Password",
      initialValue: "",
      inputType: "password",
    },
    {
      id: "newPassword2",
      label: "Confirm New Password",
      initialValue: "",
      inputType: "password",
    },
  ]}
/>
```


## src\routes\(admin)\account\(menu)\settings\+page.svelte

```svelte
<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"
  import SettingsModule from "./settings_module.svelte"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("settings")

  let { data } = $props()
  let { profile, user } = data
</script>

<svelte:head>
  <title>Settings</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Settings</h1>

<SettingsModule
  title="Profile"
  editable={false}
  fields={[
    { id: "fullName", label: "Name", initialValue: profile?.full_name ?? "" },
    {
      id: "companyName",
      label: "Company Name",
      initialValue: profile?.company_name ?? "",
    },
    {
      id: "website",
      label: "Company Website",
      initialValue: profile?.website ?? "",
    },
  ]}
  editButtonTitle="Edit Profile"
  editLink="/account/settings/edit_profile"
/>

<SettingsModule
  title="Email"
  editable={false}
  fields={[{ id: "email", initialValue: user?.email || "" }]}
  editButtonTitle="Change Email"
  editLink="/account/settings/change_email"
/>

<SettingsModule
  title="Password"
  editable={false}
  fields={[{ id: "password", initialValue: "••••••••••••••••" }]}
  editButtonTitle="Change Password"
  editLink="/account/settings/change_password"
/>

<SettingsModule
  title="Email Subscription"
  editable={false}
  fields={[
    {
      id: "subscriptionStatus",
      initialValue: profile?.unsubscribed ? "Unsubscribed" : "Subscribed",
    },
  ]}
  editButtonTitle="Change Subscription"
  editLink="/account/settings/change_email_subscription"
/>

<SettingsModule
  title="Danger Zone"
  editable={false}
  dangerous={true}
  fields={[]}
  editButtonTitle="Delete Account"
  editLink="/account/settings/delete_account"
/>
```


## src\routes\(admin)\account\(menu)\settings\settings_module.svelte

```svelte
<script lang="ts">
  import { enhance, applyAction } from "$app/forms"
  import { page } from "$app/stores"
  import type { SubmitFunction } from "@sveltejs/kit"

  const fieldError = (liveForm: FormAccountUpdateResult, name: string) => {
    let errors = liveForm?.errorFields ?? []
    return errors.includes(name)
  }

  // Page state
  let loading = $state(false)
  let showSuccess = $state(false)

  type Field = {
    inputType?: string // default is "text"
    id: string
    label?: string
    initialValue: string | boolean
    placeholder?: string
    maxlength?: number
  }

  interface Props {
    // Module context
    editable?: boolean
    dangerous?: boolean
    title?: string
    message?: string
    fields: Field[]
    formTarget?: string
    successTitle?: string
    successBody?: string
    editButtonTitle?: string | null
    editLink?: string | null
    saveButtonTitle?: string
  }

  let {
    editable = false,
    dangerous = false,
    title = "",
    message = "",
    fields,
    formTarget = "",
    successTitle = "Success",
    successBody = "",
    editButtonTitle = null,
    editLink = null,
    saveButtonTitle = "Save",
  }: Props = $props()

  const handleSubmit: SubmitFunction = () => {
    loading = true
    return async ({ update, result }) => {
      await update({ reset: false })
      await applyAction(result)
      loading = false
      if (result.type === "success") {
        showSuccess = true
      }
    }
  }
</script>

<div class="card p-6 pb-7 mt-8 max-w-xl flex flex-col md:flex-row shadow-sm">
  {#if title}
    <div class="text-xl font-bold mb-3 w-48 md:pr-8 flex-none">{title}</div>
  {/if}

  <div class="w-full min-w-48">
    {#if !showSuccess}
      {#if message}
        <div class="mb-6 {dangerous ? 'alert alert-warning' : ''}">
          {#if dangerous}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              /></svg
            >
          {/if}

          <span>{message}</span>
        </div>
      {/if}
      <form
        class="form-widget flex flex-col"
        method="POST"
        action={formTarget}
        use:enhance={handleSubmit}
      >
        {#each fields as field}
          {#if field.label}
            <label for={field.id}>
              <span class="text-sm text-gray-500">{field.label}</span>
            </label>
          {/if}
          {#if editable}
            <input
              id={field.id}
              name={field.id}
              type={field.inputType ?? "text"}
              disabled={!editable}
              placeholder={field.placeholder ?? field.label ?? ""}
              class="{fieldError($page?.form, field.id)
                ? 'input-error'
                : ''} input-sm mt-1 input input-bordered w-full max-w-xs mb-3 text-base py-4"
              value={$page.form ? $page.form[field.id] : field.initialValue}
              maxlength={field.maxlength ? field.maxlength : null}
            />
          {:else}
            <div class="text-lg mb-3">{field.initialValue}</div>
          {/if}
        {/each}

        {#if $page?.form?.errorMessage}
          <p class="text-red-700 text-sm font-bold mt-1">
            {$page?.form?.errorMessage}
          </p>
        {/if}

        {#if editable}
          <div>
            <button
              type="submit"
              class="ml-auto btn btn-sm mt-3 min-w-[145px] {dangerous
                ? 'btn-error'
                : 'btn-primary btn-outline'}"
              disabled={loading}
            >
              {#if loading}
                <span
                  class="loading loading-spinner loading-md align-middle mx-3"
                ></span>
              {:else}
                {saveButtonTitle}
              {/if}
            </button>
          </div>
        {:else if editButtonTitle && editLink}
          <!-- !editable -->
          <a href={editLink} class="mt-1">
            <button
              class="btn btn-outline btn-sm {dangerous
                ? 'btn-error'
                : ''} min-w-[145px]"
            >
              {editButtonTitle}
            </button>
          </a>
        {/if}
      </form>
    {:else}
      <!-- showSuccess -->
      <div>
        <div class="text-l font-bold">{successTitle}</div>
        <div class="text-base">{successBody}</div>
      </div>
      <a href="/account/settings">
        <button class="btn btn-outline btn-sm mt-3 min-w-[145px]">
          Return to Settings
        </button>
      </a>
    {/if}
  </div>
</div>
```


## src\routes\(admin)\account\(menu)\+layout.svelte

```svelte
<script lang="ts">
  import "../../../../app.css"
  import { writable } from "svelte/store"
  import { setContext } from "svelte"
  import { WebsiteName } from "../../../../config"
  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()

  const adminSectionStore = writable("")
  setContext("adminSection", adminSectionStore)
  let adminSection: string | undefined = $state()
  adminSectionStore.subscribe((value) => {
    adminSection = value
  })

  function closeDrawer(): void {
    const adminDrawer = document.getElementById(
      "admin-drawer",
    ) as HTMLInputElement
    adminDrawer.checked = false
  }
</script>

<div class="drawer lg:drawer-open">
  <input id="admin-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <div class="navbar bg-base-100 lg:hidden">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl" href="/">{WebsiteName}</a>
      </div>
      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <label for="admin-drawer" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              /></svg
            >
          </label>
        </div>
      </div>
    </div>
    <div class="container px-6 lg:px-12 py-3 lg:py-6">
      {@render children?.()}
    </div>
  </div>

  <div class="drawer-side">
    <label for="admin-drawer" class="drawer-overlay"></label>
    <ul
      class="menu menu-lg p-4 w-80 min-h-full bg-base-100 lg:border-r text-primary"
    >
      <li>
        <div
          class="normal-case menu-title text-xl font-bold text-primary flex flex-row"
        >
          <a href="/" class="grow">{WebsiteName}</a>
          <label for="admin-drawer" class="lg:hidden ml-3"> &#x2715; </label>
        </div>
      </li>
      <li>
        <a
          href="/account"
          class={adminSection === "home" ? "active" : ""}
          onclick={closeDrawer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            /></svg
          >
          Home
        </a>
      </li>
      <li>
        <a
          href="/account/billing"
          class={adminSection === "billing" ? "active" : ""}
          onclick={closeDrawer}
        >
          <svg
            class="h-5 w-5"
            viewBox="0 0 24 24"
            stroke="none"
            fill="currentColor"
          >
            <path
              d="M18,1H6A3,3,0,0,0,3,4V22a1,1,0,0,0,1.8.6L6.829,19.9l1.276,2.552a1,1,0,0,0,.8.549.981.981,0,0,0,.89-.4L12,19.667,14.2,22.6a.983.983,0,0,0,.89.4,1,1,0,0,0,.8-.549L17.171,19.9,19.2,22.6a1,1,0,0,0,.8.4,1,1,0,0,0,1-1V4A3,3,0,0,0,18,1Zm1,18-1.2-1.6a.983.983,0,0,0-.89-.4,1,1,0,0,0-.8.549l-1.276,2.552L12.8,17.4a1,1,0,0,0-1.6,0L9.171,20.105,7.9,17.553A1,1,0,0,0,7.09,17a.987.987,0,0,0-.89.4L5,19V4A1,1,0,0,1,6,3H18a1,1,0,0,1,1,1ZM17,9a1,1,0,0,1-1,1H8A1,1,0,0,1,8,8h8A1,1,0,0,1,17,9Zm-4,4a1,1,0,0,1-1,1H8a1,1,0,0,1,0-2h4A1,1,0,0,1,13,13Z"
            />
          </svg>
          Billing
        </a>
      </li>
      <li>
        <a
          href="/account/settings"
          class={adminSection === "settings" ? "active" : ""}
          onclick={closeDrawer}
        >
          <svg class="h-5 w-5" viewBox="0 0 24 24" stroke="none" fill="none">
            <g id="Interface / Settings">
              <g id="Vector">
                <path
                  d="M20.3499 8.92293L19.9837 8.7192C19.9269 8.68756 19.8989 8.67169 19.8714 8.65524C19.5983 8.49165 19.3682 8.26564 19.2002 7.99523C19.1833 7.96802 19.1674 7.93949 19.1348 7.8831C19.1023 7.82677 19.0858 7.79823 19.0706 7.76998C18.92 7.48866 18.8385 7.17515 18.8336 6.85606C18.8331 6.82398 18.8332 6.79121 18.8343 6.72604L18.8415 6.30078C18.8529 5.62025 18.8587 5.27894 18.763 4.97262C18.6781 4.70053 18.536 4.44993 18.3462 4.23725C18.1317 3.99685 17.8347 3.82534 17.2402 3.48276L16.7464 3.1982C16.1536 2.85658 15.8571 2.68571 15.5423 2.62057C15.2639 2.56294 14.9765 2.56561 14.6991 2.62789C14.3859 2.69819 14.0931 2.87351 13.5079 3.22396L13.5045 3.22555L13.1507 3.43741C13.0948 3.47091 13.0665 3.48779 13.0384 3.50338C12.7601 3.6581 12.4495 3.74365 12.1312 3.75387C12.0992 3.7549 12.0665 3.7549 12.0013 3.7549C11.9365 3.7549 11.9024 3.7549 11.8704 3.75387C11.5515 3.74361 11.2402 3.65759 10.9615 3.50224C10.9334 3.48658 10.9056 3.46956 10.8496 3.4359L10.4935 3.22213C9.90422 2.86836 9.60915 2.69121 9.29427 2.62057C9.0157 2.55807 8.72737 2.55634 8.44791 2.61471C8.13236 2.68062 7.83577 2.85276 7.24258 3.19703L7.23994 3.1982L6.75228 3.48124L6.74688 3.48454C6.15904 3.82572 5.86441 3.99672 5.6517 4.23614C5.46294 4.4486 5.32185 4.69881 5.2374 4.97018C5.14194 5.27691 5.14703 5.61896 5.15853 6.3027L5.16568 6.72736C5.16676 6.79166 5.16864 6.82362 5.16817 6.85525C5.16343 7.17499 5.08086 7.48914 4.92974 7.77096C4.9148 7.79883 4.8987 7.8267 4.86654 7.88237C4.83436 7.93809 4.81877 7.96579 4.80209 7.99268C4.63336 8.26452 4.40214 8.49186 4.12733 8.65572C4.10015 8.67193 4.0715 8.68752 4.01521 8.71871L3.65365 8.91908C3.05208 9.25245 2.75137 9.41928 2.53256 9.65669C2.33898 9.86672 2.19275 10.1158 2.10349 10.3872C2.00259 10.6939 2.00267 11.0378 2.00424 11.7255L2.00551 12.2877C2.00706 12.9708 2.00919 13.3122 2.11032 13.6168C2.19979 13.8863 2.34495 14.134 2.53744 14.3427C2.75502 14.5787 3.05274 14.7445 3.64974 15.0766L4.00808 15.276C4.06907 15.3099 4.09976 15.3266 4.12917 15.3444C4.40148 15.5083 4.63089 15.735 4.79818 16.0053C4.81625 16.0345 4.8336 16.0648 4.8683 16.1255C4.90256 16.1853 4.92009 16.2152 4.93594 16.2452C5.08261 16.5229 5.16114 16.8315 5.16649 17.1455C5.16707 17.1794 5.16658 17.2137 5.16541 17.2827L5.15853 17.6902C5.14695 18.3763 5.1419 18.7197 5.23792 19.0273C5.32287 19.2994 5.46484 19.55 5.65463 19.7627C5.86915 20.0031 6.16655 20.1745 6.76107 20.5171L7.25478 20.8015C7.84763 21.1432 8.14395 21.3138 8.45869 21.379C8.73714 21.4366 9.02464 21.4344 9.30209 21.3721C9.61567 21.3017 9.90948 21.1258 10.4964 20.7743L10.8502 20.5625C10.9062 20.5289 10.9346 20.5121 10.9626 20.4965C11.2409 20.3418 11.5512 20.2558 11.8695 20.2456C11.9015 20.2446 11.9342 20.2446 11.9994 20.2446C12.0648 20.2446 12.0974 20.2446 12.1295 20.2456C12.4484 20.2559 12.7607 20.3422 13.0394 20.4975C13.0639 20.5112 13.0885 20.526 13.1316 20.5519L13.5078 20.7777C14.0971 21.1315 14.3916 21.3081 14.7065 21.3788C14.985 21.4413 15.2736 21.4438 15.5531 21.3855C15.8685 21.3196 16.1657 21.1471 16.7586 20.803L17.2536 20.5157C17.8418 20.1743 18.1367 20.0031 18.3495 19.7636C18.5383 19.5512 18.6796 19.3011 18.764 19.0297C18.8588 18.7252 18.8531 18.3858 18.8417 17.7119L18.8343 17.2724C18.8332 17.2081 18.8331 17.1761 18.8336 17.1445C18.8383 16.8247 18.9195 16.5104 19.0706 16.2286C19.0856 16.2007 19.1018 16.1726 19.1338 16.1171C19.166 16.0615 19.1827 16.0337 19.1994 16.0068C19.3681 15.7349 19.5995 15.5074 19.8744 15.3435C19.9012 15.3275 19.9289 15.3122 19.9838 15.2818L19.9857 15.2809L20.3472 15.0805C20.9488 14.7472 21.2501 14.5801 21.4689 14.3427C21.6625 14.1327 21.8085 13.8839 21.8978 13.6126C21.9981 13.3077 21.9973 12.9658 21.9958 12.2861L21.9945 11.7119C21.9929 11.0287 21.9921 10.6874 21.891 10.3828C21.8015 10.1133 21.6555 9.86561 21.463 9.65685C21.2457 9.42111 20.9475 9.25526 20.3517 8.92378L20.3499 8.92293Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.00033 12C8.00033 14.2091 9.79119 16 12.0003 16C14.2095 16 16.0003 14.2091 16.0003 12C16.0003 9.79082 14.2095 7.99996 12.0003 7.99996C9.79119 7.99996 8.00033 9.79082 8.00033 12Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </g>
          </svg>
          Settings
        </a>
      </li>

      <li class="mt-auto">
        <a href="/account/sign_out" class="mt-auto text-base">Sign Out</a>
      </li>
    </ul>
  </div>
</div>
```


## src\routes\(admin)\account\(menu)\+page.server.ts

```ts
import { redirect } from "@sveltejs/kit"

export const actions = {
  signout: async ({ locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession()
    if (session) {
      await supabase.auth.signOut()
      redirect(303, "/")
    }
  },
}
```


## src\routes\(admin)\account\(menu)\+page.svelte

```svelte
<script lang="ts">
  import { getContext } from "svelte"
  import type { Writable } from "svelte/store"

  let adminSection: Writable<string> = getContext("adminSection")
  adminSection.set("home")
</script>

<svelte:head>
  <title>Account</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-1">Dashboard</h1>
<div class="alert alert-error max-w-lg mt-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="stroke-current shrink-0 h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    ><path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    /></svg
  >
  <div>
    <div class="font-bold">Demo Content</div>
    <div class="my-2">
      This page is just a placeholder. Replace this page with your app's content
      and functionality.
    </div>
    <div class="my-2">
      The <a href="/account/billing" class="link">billing</a> and
      <a href="/account/settings" class="link">settings</a> pages are functional
      demos.
    </div>
  </div>
</div>

<div class="my-6">
  <h1 class="text-xl font-bold mb-1">Users</h1>
  <div class="stats shadow-sm stats-vertical sm:stats-horizontal sm:w-[420px]">
    <div class="stat place-items-center">
      <div class="stat-title">Downloads</div>
      <div class="stat-value">31K</div>
      <div class="stat-desc">↗︎ 546 (2%)</div>
    </div>

    <div class="stat place-items-center">
      <div class="stat-title">Users</div>
      <div class="stat-value text-secondary">4,200</div>
      <div class="stat-desc">↗︎ 40 (2%)</div>
    </div>
  </div>
</div>
<div class="my-6">
  <h1 class="text-xl font-bold mb-1">Accounts</h1>
  <div class="stats shadow-sm stats-vertical sm:stats-horizontal sm:w-[420px]">
    <div class="stat place-items-center">
      <div class="stat-title">New Registers</div>
      <div class="stat-value">1,200</div>
      <div class="stat-desc">↘︎ 90 (14%)</div>
    </div>

    <div class="stat place-items-center">
      <div class="stat-title">Churned Accounts</div>
      <div class="stat-value">42</div>
      <div class="stat-desc">↘︎ 6 (12%)</div>
    </div>
  </div>
</div>
<div class="my-6">
  <h1 class="text-xl font-bold mb-1">Revenue</h1>
  <div class="stats shadow-sm stats-vertical sm:stats-horizontal sm:w-[420px]">
    <div class="stat place-items-center">
      <div class="stat-title text-success">Revenue</div>
      <div class="stat-value text-success">$4200</div>
      <div class="stat-desc">↗︎ $180 (4%)</div>
    </div>

    <div class="stat place-items-center">
      <div class="stat-title">New Subscribers</div>
      <div class="stat-value">16</div>
      <div class="stat-desc">↘︎ 1 (%7)</div>
    </div>
  </div>
</div>
```


## src\routes\(admin)\account\api\+page.server.ts

```ts
import { fail, redirect } from "@sveltejs/kit"
import { sendAdminEmail, sendUserEmail } from "$lib/mailer"
import { WebsiteBaseUrl } from "../../../../config"

export const actions = {
  toggleEmailSubscription: async ({ locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession()

    if (!session) {
      redirect(303, "/login")
    }

    const { data: currentProfile } = await supabase
      .from("profiles")
      .select("unsubscribed")
      .eq("id", session.user.id)
      .single()

    const newUnsubscribedStatus = !currentProfile?.unsubscribed

    const { error } = await supabase
      .from("profiles")
      .update({ unsubscribed: newUnsubscribedStatus })
      .eq("id", session.user.id)

    if (error) {
      console.error("Error updating subscription status", error)
      return fail(500, { message: "Failed to update subscription status" })
    }

    return {
      unsubscribed: newUnsubscribedStatus,
    }
  },
  updateEmail: async ({ request, locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession()
    if (!session) {
      redirect(303, "/login")
    }

    const formData = await request.formData()
    const email = formData.get("email") as string

    let validationError
    if (!email || email === "") {
      validationError = "An email address is required"
    }
    // Dead simple check -- there's no standard here (which is followed),
    // and lots of errors will be missed until we actually email to verify, so
    // just do that
    else if (!email.includes("@")) {
      validationError = "A valid email address is required"
    }
    if (validationError) {
      return fail(400, {
        errorMessage: validationError,
        errorFields: ["email"],
        email,
      })
    }

    // Supabase does not change the email until the user verifies both
    // if 'Secure email change' is enabled in the Supabase dashboard
    const { error } = await supabase.auth.updateUser({ email: email })

    if (error) {
      console.error("Error updating email", error)
      return fail(500, {
        errorMessage: "Unknown error. If this persists please contact us.",
        email,
      })
    }

    return {
      email,
    }
  },
  updatePassword: async ({ request, locals: { supabase, safeGetSession } }) => {
    const { session, user, amr } = await safeGetSession()
    if (!session) {
      redirect(303, "/login")
    }

    const formData = await request.formData()
    const newPassword1 = formData.get("newPassword1") as string
    const newPassword2 = formData.get("newPassword2") as string
    const currentPassword = formData.get("currentPassword") as string

    // Can check if we're a "password recovery" session by checking session amr
    // let currentPassword take priority if provided (user can use either form)
    const recoveryAmr = amr?.find((x) => x.method === "recovery")
    const isRecoverySession = recoveryAmr && !currentPassword

    // if this is password recovery session, check timestamp of recovery session
    if (isRecoverySession) {
      const timeSinceLogin = Date.now() - recoveryAmr.timestamp * 1000
      if (timeSinceLogin > 1000 * 60 * 15) {
        // 15 mins in milliseconds
        return fail(400, {
          errorMessage:
            'Recovery code expired. Please log out, then use "Forgot Password" on the sign in page to reset your password. Codes are valid for 15 minutes.',
          errorFields: [],
          newPassword1,
          newPassword2,
          currentPassword: "",
        })
      }
    }

    let validationError
    const errorFields = []
    if (!newPassword1) {
      validationError = "You must type a new password"
      errorFields.push("newPassword1")
    }
    if (!newPassword2) {
      validationError = "You must type the new password twice"
      errorFields.push("newPassword2")
    }
    if (newPassword1.length < 6) {
      validationError = "The new password must be at least 6 charaters long"
      errorFields.push("newPassword1")
    }
    if (newPassword1.length > 72) {
      validationError = "The new password can be at most 72 charaters long"
      errorFields.push("newPassword1")
    }
    if (newPassword1 != newPassword2) {
      validationError = "The passwords don't match"
      errorFields.push("newPassword1")
      errorFields.push("newPassword2")
    }
    if (!currentPassword && !isRecoverySession) {
      validationError =
        "You must include your current password. If you forgot it, sign out then use 'forgot password' on the sign in page."
      errorFields.push("currentPassword")
    }
    if (validationError) {
      return fail(400, {
        errorMessage: validationError,
        errorFields: [...new Set(errorFields)], // unique values
        newPassword1,
        newPassword2,
        currentPassword,
      })
    }

    // Check current password is correct before updating, but only if they didn't log in with "recover" link
    // Note: to make this truly enforced you need to contact supabase. See: https://www.reddit.com/r/Supabase/comments/12iw7o1/updating_password_in_supabase_seems_insecure/
    // However, having the UI accessible route still verify password is still helpful, and needed once you get the setting above enabled
    if (!isRecoverySession) {
      const { error } = await supabase.auth.signInWithPassword({
        email: user?.email || "",
        password: currentPassword,
      })
      if (error) {
        // The user was logged out because of bad password. Redirect to error page explaining.
        redirect(303, "/login/current_password_error")
      }
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword1,
    })
    if (error) {
      console.error("Error updating password", error)
      return fail(500, {
        errorMessage: "Unknown error. If this persists please contact us.",
        newPassword1,
        newPassword2,
        currentPassword,
      })
    }

    return {
      newPassword1,
      newPassword2,
      currentPassword,
    }
  },
  deleteAccount: async ({
    request,
    locals: { supabase, supabaseServiceRole, safeGetSession },
  }) => {
    const { session, user } = await safeGetSession()
    if (!session || !user?.id) {
      redirect(303, "/login")
    }

    const formData = await request.formData()
    const currentPassword = formData.get("currentPassword") as string

    if (!currentPassword) {
      return fail(400, {
        errorMessage:
          "You must provide your current password to delete your account. If you forgot it, sign out then use 'forgot password' on the sign in page.",
        errorFields: ["currentPassword"],
        currentPassword,
      })
    }

    // Check current password is correct before deleting account
    const { error: pwError } = await supabase.auth.signInWithPassword({
      email: user?.email || "",
      password: currentPassword,
    })
    if (pwError) {
      // The user was logged out because of bad password. Redirect to error page explaining.
      redirect(303, "/login/current_password_error")
    }

    const { error } = await supabaseServiceRole.auth.admin.deleteUser(
      user.id,
      true,
    )
    if (error) {
      console.error("Error deleting user", error)
      return fail(500, {
        errorMessage: "Unknown error. If this persists please contact us.",
        currentPassword,
      })
    }

    await supabase.auth.signOut()
    redirect(303, "/")
  },
  updateProfile: async ({ request, locals: { supabase, safeGetSession } }) => {
    const { session, user } = await safeGetSession()
    if (!session || !user?.id) {
      redirect(303, "/login")
    }

    const formData = await request.formData()
    const fullName = formData.get("fullName") as string
    const companyName = formData.get("companyName") as string
    const website = formData.get("website") as string

    let validationError
    const fieldMaxTextLength = 50
    const errorFields = []
    if (!fullName) {
      validationError = "Name is required"
      errorFields.push("fullName")
    } else if (fullName.length > fieldMaxTextLength) {
      validationError = `Name must be less than ${fieldMaxTextLength} characters`
      errorFields.push("fullName")
    }
    if (!companyName) {
      validationError =
        "Company name is required. If this is a hobby project or personal app, please put your name."
      errorFields.push("companyName")
    } else if (companyName.length > fieldMaxTextLength) {
      validationError = `Company name must be less than ${fieldMaxTextLength} characters`
      errorFields.push("companyName")
    }
    if (!website) {
      validationError =
        "Company website is required. An app store URL is a good alternative if you don't have a website."
      errorFields.push("website")
    } else if (website.length > fieldMaxTextLength) {
      validationError = `Company website must be less than ${fieldMaxTextLength} characters`
      errorFields.push("website")
    }
    if (validationError) {
      return fail(400, {
        errorMessage: validationError,
        errorFields,
        fullName,
        companyName,
        website,
      })
    }

    // To check if created or updated, check if priorProfile exists
    const { data: priorProfile, error: priorProfileError } = await supabase
      .from("profiles")
      .select(`*`)
      .eq("id", session?.user.id)
      .single()

    const { error } = await supabase
      .from("profiles")
      .upsert({
        id: user.id,
        full_name: fullName,
        company_name: companyName,
        website: website,
        updated_at: new Date(),
        unsubscribed: priorProfile?.unsubscribed ?? false,
      })
      .select()

    if (error) {
      console.error("Error updating profile", error)
      return fail(500, {
        errorMessage: "Unknown error. If this persists please contact us.",
        fullName,
        companyName,
        website,
      })
    }

    // If the profile was just created, send an email to the user and admin
    const newProfile =
      priorProfile?.updated_at === null && priorProfileError === null
    if (newProfile) {
      await sendAdminEmail({
        subject: "Profile Created",
        body: `Profile created by ${session.user.email}\nFull name: ${fullName}\nCompany name: ${companyName}\nWebsite: ${website}`,
      })

      // Send welcome email
      await sendUserEmail({
        user: session.user,
        subject: "Welcome!",
        from_email: "no-reply@saasstarter.work",
        template_name: "welcome_email",
        template_properties: {
          companyName: "SaaS Starter",
          WebsiteBaseUrl: WebsiteBaseUrl,
        },
      })
    }

    return {
      fullName,
      companyName,
      website,
    }
  },
  signout: async ({ locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession()
    if (session) {
      await supabase.auth.signOut()
      redirect(303, "/")
    } else {
      redirect(303, "/")
    }
  },
}
```


## src\routes\(admin)\account\api\page.server.test.ts

```ts
import { describe, it, expect, vi, beforeEach } from "vitest"
import { actions } from "./+page.server"
import { fail, redirect } from "@sveltejs/kit"

vi.mock("@sveltejs/kit", async () => {
  const actual = await vi.importActual("@sveltejs/kit")
  return {
    ...actual,
    fail: vi.fn(),
    redirect: vi.fn().mockImplementation(() => {
      throw new Error("Redirect error")
    }),
  }
})

describe("toggleEmailSubscription", () => {
  const mockSupabase = {
    from: vi.fn().mockReturnThis(),
    select: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    single: vi.fn().mockResolvedValue({ data: null }),
    update: vi.fn().mockReturnThis(),
  }

  const mockSafeGetSession = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it("should redirect if no session", async () => {
    mockSafeGetSession.mockResolvedValue({ session: null })

    await expect(
      actions.toggleEmailSubscription({
        locals: {
          supabase: mockSupabase,
          safeGetSession: mockSafeGetSession,
        },
      } as any),
    ).rejects.toThrow("Redirect")

    expect(redirect).toHaveBeenCalledWith(303, "/login")
  })

  it("should toggle subscription status from false to true", async () => {
    const mockSession = { user: { id: "user123" } }
    mockSafeGetSession.mockResolvedValue({ session: mockSession })

    // Mock the first query to get the current status
    mockSupabase.single.mockResolvedValueOnce({ data: { unsubscribed: false } })

    // Mock the update query
    const mockUpdateChain = {
      eq: vi.fn().mockResolvedValue({ error: null }),
    }

    mockSupabase.update.mockReturnValue(mockUpdateChain)

    const result = await actions.toggleEmailSubscription({
      locals: { supabase: mockSupabase, safeGetSession: mockSafeGetSession },
    } as any)

    expect(mockSupabase.from).toHaveBeenCalledWith("profiles")
    expect(mockSupabase.select).toHaveBeenCalledWith("unsubscribed")
    expect(mockSupabase.eq).toHaveBeenCalledWith("id", "user123")
    expect(mockSupabase.single).toHaveBeenCalled()
    expect(mockSupabase.update).toHaveBeenCalledWith({ unsubscribed: true })
    expect(mockUpdateChain.eq).toHaveBeenCalledWith("id", "user123")
    expect(result).toEqual({ unsubscribed: true })
  })

  it("should toggle subscription status from true to false", async () => {
    const mockSession = { user: { id: "user123" } }
    mockSafeGetSession.mockResolvedValue({ session: mockSession })

    // Mock the first query to get the current status
    mockSupabase.single.mockResolvedValueOnce({ data: { unsubscribed: true } })

    // Mock the update query
    const mockUpdateChain = {
      eq: vi.fn().mockResolvedValue({ error: null }),
    }

    mockSupabase.update.mockReturnValue(mockUpdateChain)

    const result = await actions.toggleEmailSubscription({
      locals: { supabase: mockSupabase, safeGetSession: mockSafeGetSession },
    } as any)

    expect(mockSupabase.from).toHaveBeenCalledWith("profiles")
    expect(mockSupabase.select).toHaveBeenCalledWith("unsubscribed")
    expect(mockSupabase.eq).toHaveBeenCalledWith("id", "user123")
    expect(mockSupabase.single).toHaveBeenCalled()
    expect(mockSupabase.update).toHaveBeenCalledWith({ unsubscribed: false })
    expect(mockUpdateChain.eq).toHaveBeenCalledWith("id", "user123")
    expect(result).toEqual({ unsubscribed: false })
  })

  it("should return fail response if update operation fails", async () => {
    const mockSession = { user: { id: "user123" } }
    mockSafeGetSession.mockResolvedValue({ session: mockSession })

    // Mock the first query to get the current status
    mockSupabase.single.mockResolvedValueOnce({ data: { unsubscribed: false } })

    // Mock the update query to return an error
    const mockUpdateChain = {
      eq: vi.fn().mockResolvedValue({ error: new Error("Update failed") }),
    }

    mockSupabase.update.mockReturnValue(mockUpdateChain)

    await actions.toggleEmailSubscription({
      locals: { supabase: mockSupabase, safeGetSession: mockSafeGetSession },
    } as any)

    // Check if fail was called with the correct arguments
    expect(fail).toHaveBeenCalledWith(500, {
      message: "Failed to update subscription status",
    })
  })
})
```


## src\routes\(admin)\account\create_profile\+page.svelte

```svelte
<script lang="ts">
  import { applyAction, enhance } from "$app/forms"
  import type { SubmitFunction } from "@sveltejs/kit"
  import "../../../../app.css"

  interface User {
    email: string
  }

  interface Profile {
    full_name?: string
    company_name?: string
    website?: string
  }

  interface Props {
    data: { user: User; profile: Profile }
    form: FormAccountUpdateResult
  }

  let { data, form }: Props = $props()

  let { user, profile } = data

  let loading = $state(false)
  let fullName: string = profile?.full_name ?? ""
  let companyName: string = profile?.company_name ?? ""
  let website: string = profile?.website ?? ""

  const fieldError = (liveForm: FormAccountUpdateResult, name: string) => {
    let errors = liveForm?.errorFields ?? []
    return errors.includes(name)
  }

  const handleSubmit: SubmitFunction = () => {
    loading = true
    return async ({ update, result }) => {
      await update({ reset: false })
      await applyAction(result)
      loading = false
    }
  }
</script>

<svelte:head>
  <title>Create Profile</title>
</svelte:head>

<div
  class="text-center content-center max-w-lg mx-auto min-h-[100vh] pb-12 flex items-center place-content-center"
>
  <div class="flex flex-col w-64 lg:w-80">
    <div>
      <h1 class="text-2xl font-bold mb-6">Create Profile</h1>
      <form
        class="form-widget"
        method="POST"
        action="/account/api?/updateProfile"
        use:enhance={handleSubmit}
      >
        <div class="mt-4">
          <label for="fullName">
            <span class="text-l text-center">Your Name</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Your full name"
            class="{fieldError(form, 'fullName')
              ? 'input-error'
              : ''} mt-1 input input-bordered w-full max-w-xs"
            value={form?.fullName ?? fullName}
            maxlength="50"
          />
        </div>

        <div class="mt-4">
          <label for="companyName">
            <span class="text-l text-center">Company Name</span>
          </label>
          <input
            id="companyName"
            name="companyName"
            type="text"
            placeholder="Company name"
            class="{fieldError(form, 'companyName')
              ? 'input-error'
              : ''} mt-1 input input-bordered w-full max-w-xs"
            value={form?.companyName ?? companyName}
            maxlength="50"
          />
        </div>

        <div class="mt-4">
          <label for="website">
            <span class="text-l text-center">Company Website</span>
          </label>
          <input
            id="website"
            name="website"
            type="text"
            placeholder="Company website"
            class="{fieldError(form, 'website')
              ? 'input-error'
              : ''} mt-1 input input-bordered w-full max-w-xs"
            value={form?.website ?? website}
            maxlength="50"
          />
        </div>

        {#if form?.errorMessage}
          <p class="text-red-700 text-sm font-bold text-center mt-3">
            {form?.errorMessage}
          </p>
        {/if}
        <div class="mt-4">
          <input
            type="submit"
            class="btn btn-primary mt-3 btn-wide"
            value={loading ? "..." : "Create Profile"}
            disabled={loading}
          />
        </div>
      </form>

      <div class="text-sm text-slate-800 mt-14">
        You are logged in as {user?.email}.
        <br />
        <a class="underline" href="/account/sign_out"> Sign out </a>
      </div>
    </div>
  </div>
</div>
```


## src\routes\(admin)\account\create_profile\+page.ts

```ts
import { _hasFullProfile } from "../+layout.js"
import { redirect } from "@sveltejs/kit"

export async function load({ parent }) {
  const data = await parent()

  // They completed their profile! Redirect to "Select a Plan" screen.
  if (_hasFullProfile(data?.profile)) {
    redirect(303, "/account/select_plan")
  }

  return data
}
```


## src\routes\(admin)\account\select_plan\+page.svelte

```svelte
<script lang="ts">
  import PricingModule from "../../../(marketing)/pricing/pricing_module.svelte"
</script>

<svelte:head>
  <title>Select a Plan</title>
</svelte:head>

<div
  class="text-center content-center min-h-[100vh] pb-12 mt-4 flex items-center place-content-center"
>
  <div class="flex flex-col w-full px-6">
    <div>
      <h1 class="text-2xl font-bold mb-2">Select a Plan</h1>
      <div class="mb-6">
        View our <a href="/pricing" target="_blank" class="link">pricing page</a
        > for details.
      </div>
      <PricingModule callToAction="Select Plan" />
    </div>
  </div>
</div>
```


## src\routes\(admin)\account\sign_out\+page.svelte

```svelte
<script lang="ts">
  import { goto } from "$app/navigation"
  import { onMount } from "svelte"

  let { data } = $props()

  let { supabase } = data
  let message = $state("Signing out....")

  // on mount, sign out
  onMount(() => {
    supabase.auth.signOut().then(({ error }) => {
      if (error) {
        message = "There was an issue signing out."
      } else {
        goto("/")
      }
    })
  })
</script>

<h1 class="text-2xl font-bold m-6 mx-auto my-auto">{message}</h1>
```


## src\routes\(admin)\account\subscribe\[slug]\+page.server.ts

```ts
import { PRIVATE_STRIPE_API_KEY } from "$env/static/private"
import { error, redirect } from "@sveltejs/kit"
import Stripe from "stripe"
import {
  fetchSubscription,
  getOrCreateCustomerId,
} from "../../subscription_helpers.server"
import type { PageServerLoad } from "./$types"
const stripe = new Stripe(PRIVATE_STRIPE_API_KEY, { apiVersion: "2023-08-16" })

export const load: PageServerLoad = async ({
  params,
  url,
  locals: { safeGetSession, supabaseServiceRole },
}) => {
  const { session, user } = await safeGetSession()
  if (!session) {
    redirect(303, "/login")
  }

  if (params.slug === "free_plan") {
    // plan with no stripe_price_id. Redirect to account home
    redirect(303, "/account")
  }

  const { error: idError, customerId } = await getOrCreateCustomerId({
    supabaseServiceRole,
    user,
  })
  if (idError || !customerId) {
    console.error("Error creating customer id", idError)
    error(500, {
      message: "Unknown error. If issue persists, please contact us.",
    })
  }

  const { primarySubscription } = await fetchSubscription({
    customerId,
  })
  if (primarySubscription) {
    // User already has plan, we shouldn't let them buy another
    redirect(303, "/account/billing")
  }

  let checkoutUrl
  try {
    const stripeSession = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: params.slug,
          quantity: 1,
        },
      ],
      customer: customerId,
      mode: "subscription",
      success_url: `${url.origin}/account`,
      cancel_url: `${url.origin}/account/billing`,
    })
    checkoutUrl = stripeSession.url
  } catch (e) {
    console.error("Error creating checkout session", e)
    error(500, "Unknown Error (SSE): If issue persists please contact us.")
  }

  redirect(303, checkoutUrl ?? "/pricing")
}
```


## src\routes\(admin)\account\+layout.server.ts

```ts
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({
  locals: { session },
  cookies,
}) => {
  // Session here is from authGuard hook

  return {
    session,
    cookies: cookies.getAll(),
  }
}
```


## src\routes\(admin)\account\+layout.svelte

```svelte
<script lang="ts">
  import { invalidate } from "$app/navigation"
  import { onMount } from "svelte"

  let { data, children } = $props()

  let { supabase, session } = $state(data)
  $effect(() => {
    ;({ supabase, session } = data)
  })

  onMount(() => {
    const { data } = supabase.auth.onAuthStateChange((event, _session) => {
      if (_session?.expires_at !== session?.expires_at) {
        invalidate("supabase:auth")
      }
    })

    return () => data.subscription.unsubscribe()
  })
</script>

{@render children?.()}
```


## src\routes\(admin)\account\+layout.ts

```ts
import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_URL,
} from "$env/static/public"
import {
  createBrowserClient,
  createServerClient,
  isBrowser,
} from "@supabase/ssr"
import { redirect } from "@sveltejs/kit"
import type { Database } from "../../../DatabaseDefinitions.js"
import { CreateProfileStep } from "../../../config"
import { load_helper } from "$lib/load_helpers"

export const load = async ({ fetch, data, depends, url }) => {
  depends("supabase:auth")

  const supabase = isBrowser()
    ? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: {
          fetch,
        },
      })
    : createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: {
          fetch,
        },
        cookies: {
          getAll() {
            return data.cookies
          },
        },
      })

  const { session, user } = await load_helper(data.session, supabase)
  if (!session || !user) {
    redirect(303, "/login")
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select(`*`)
    .eq("id", user.id)
    .single()

  const { data: aal } = await supabase.auth.mfa.getAuthenticatorAssuranceLevel()

  const createProfilePath = "/account/create_profile"
  const signOutPath = "/account/sign_out"
  if (
    profile &&
    !_hasFullProfile(profile) &&
    url.pathname !== createProfilePath &&
    url.pathname !== signOutPath &&
    CreateProfileStep
  ) {
    redirect(303, createProfilePath)
  }

  return {
    supabase,
    session,
    profile,
    user,
    amr: aal?.currentAuthenticationMethods,
  }
}

export const _hasFullProfile = (
  profile: Database["public"]["Tables"]["profiles"]["Row"] | null,
) => {
  if (!profile) {
    return false
  }
  if (!profile.full_name) {
    return false
  }
  if (!profile.company_name) {
    return false
  }
  if (!profile.website) {
    return false
  }

  return true
}
```


## src\routes\(admin)\account\subscription_helpers.server.ts

```ts
import type { SupabaseClient, User } from "@supabase/supabase-js"
import type { Database } from "../../../DatabaseDefinitions"

import { PRIVATE_STRIPE_API_KEY } from "$env/static/private"
import Stripe from "stripe"
import { pricingPlans } from "../../(marketing)/pricing/pricing_plans"
const stripe = new Stripe(PRIVATE_STRIPE_API_KEY, { apiVersion: "2023-08-16" })

export const getOrCreateCustomerId = async ({
  supabaseServiceRole,
  user,
}: {
  supabaseServiceRole: SupabaseClient<Database>
  user: User
}) => {
  const { data: dbCustomer, error } = await supabaseServiceRole
    .from("stripe_customers")
    .select("stripe_customer_id")
    .eq("user_id", user.id)
    .single()

  if (error && error.code != "PGRST116") {
    // PGRST116 == no rows
    return { error: error }
  }

  if (dbCustomer?.stripe_customer_id) {
    return { customerId: dbCustomer.stripe_customer_id }
  }

  // Fetch data needed to create customer
  const { data: profile, error: profileError } = await supabaseServiceRole
    .from("profiles")
    .select(`full_name, website, company_name`)
    .eq("id", user.id)
    .single()
  if (profileError) {
    return { error: profileError }
  }

  // Create a stripe customer
  let customer
  try {
    customer = await stripe.customers.create({
      email: user.email,
      name: profile.full_name ?? "",
      metadata: {
        user_id: user.id,
        company_name: profile.company_name ?? "",
        website: profile.website ?? "",
      },
    })
  } catch (e) {
    return { error: e }
  }

  if (!customer.id) {
    return { error: "Unknown stripe user creation error" }
  }

  // insert instead of upsert so we never over-write. PK ensures later attempts error.
  const { error: insertError } = await supabaseServiceRole
    .from("stripe_customers")
    .insert({
      user_id: user.id,
      stripe_customer_id: customer.id,
      updated_at: new Date(),
    })

  if (insertError) {
    return { error: insertError }
  }

  return { customerId: customer.id }
}

export const fetchSubscription = async ({
  customerId,
}: {
  customerId: string
}) => {
  // Fetch user's subscriptions
  let stripeSubscriptions
  try {
    stripeSubscriptions = await stripe.subscriptions.list({
      customer: customerId,
      limit: 100,
      status: "all",
    })
  } catch (e) {
    return { error: e }
  }

  // find "primary". The user may have several old ones, we want an active one (including trials, and past_due in grace period).
  const primaryStripeSubscription = stripeSubscriptions.data.find((x) => {
    return (
      x.status === "active" ||
      x.status === "trialing" ||
      x.status === "past_due"
    )
  })
  let appSubscription = null
  if (primaryStripeSubscription) {
    const productId =
      primaryStripeSubscription?.items?.data?.[0]?.price.product ?? ""
    appSubscription = pricingPlans.find((x) => {
      return x.stripe_product_id === productId
    })
    if (!appSubscription) {
      return {
        error:
          "Stripe subscription does not have matching app subscription in pricing_plans.ts (via product id match)",
      }
    }
  }
  let primarySubscription = null
  if (primaryStripeSubscription && appSubscription) {
    primarySubscription = {
      stripeSubscription: primaryStripeSubscription,
      appSubscription: appSubscription,
    }
  }

  const hasEverHadSubscription = stripeSubscriptions.data.length > 0

  return {
    primarySubscription,
    hasEverHadSubscription,
  }
}
```


## src\routes\(marketing)\auth\callback\+server.js

```js
// src/routes/auth/callback/+server.js
import { redirect } from "@sveltejs/kit"
import { isAuthApiError } from "@supabase/supabase-js"

export const GET = async ({ url, locals: { supabase } }) => {
  const code = url.searchParams.get("code")
  if (code) {
    try {
      await supabase.auth.exchangeCodeForSession(code)
    } catch (error) {
      // If you open in another browser, need to redirect to login.
      // Should not display error
      if (isAuthApiError(error)) {
        redirect(303, "/login/sign_in?verified=true")
      } else {
        throw error
      }
    }
  }

  const next = url.searchParams.get("next")
  if (next) {
    redirect(303, next)
  }

  redirect(303, "/account")
}
```


## src\routes\(marketing)\blog\(posts)\awesome_post\+page.svelte

```svelte
<p class="lead">A sample post</p>

<p>
  This is a sample blog post to demonstrate the blog engine. It shows some of
  the formatting options included in the template.
</p>

<h3>Section Titles are great</h3>

<p>As are more paragraphs.</p>

<blockquote>
  <p>Block quotes are styled</p>
</blockquote>

<pre><code class="language-bash"
    ># Code blocks work too!
npm install 
</code></pre>

<p>
  Check out more formatting options like lists, headers, and more in <a
    href="https://play.tailwindcss.com/uj1vGACRJA?layout=preview"
    >the tailwind/typograpy docs</a
  >.
</p>
```


## src\routes\(marketing)\blog\(posts)\example_blog_post\+page.svelte

```svelte
<p class="lead">A sample post</p>

<p>
  This is a sample blog post to demonstrate the blog engine. It shows some of
  the formatting options included in the template.
</p>

<h3>Section Titles are great</h3>

<p>As are more paragraphs.</p>

<blockquote>
  <p>Block quotes are styled</p>
</blockquote>

<pre><code class="language-bash"
    ># Code blocks work too!
npm install 
</code></pre>

<p>
  Check out more formatting options like lists, headers, and more in <a
    href="https://play.tailwindcss.com/uj1vGACRJA?layout=preview"
    >the tailwind/typograpy docs</a
  >.
</p>
```


## src\routes\(marketing)\blog\(posts)\how_we_built_our_41kb_saas_website\+page.svelte

```svelte
<p class="lead">How to use this template you to bootstrap your own site.</p>

<p>
  We've written a detailed blog post about how we took this template, and
  created a real <a href="https://criticalmoments.io" target="_blank"
    >SaaS company website</a
  >. Topics include:
</p>

<ul>
  <li>Optimizing the stack for performance and developer productivity</li>
  <li>Creating rich interactive animations with Svelte</li>
  <li>Creating pixel perfect designs without rasterization</li>
  <li>Speed measurements: how we kept it small and lightning fast</li>
</ul>

<a
  href="https://criticalmoments.io/blog/how_we_built_our_marketing_page"
  target="_blank"
>
  <button class="btn btn-primary">Read the Blog Post</button>
</a>

<p>
  The blog post is over on <a href="https://criticalmoments.io" target="_blank"
    >criticalmoments.io</a
  >, a page which uses this boilerplate as a starting point.
</p>

<p>
  If you are looking for examples of blog posts with rich content rendered
  inside this template, checkout the other demo posts <a
    href="/blog"
    class="link">here</a
  >.
</p>
```


## src\routes\(marketing)\blog\(posts)\+layout.svelte

```svelte
<script lang="ts">
  import { page } from "$app/stores"
  import { error } from "@sveltejs/kit"
  import { sortedBlogPosts, type BlogPost } from "./../posts"
  import { WebsiteName } from "../../../../config"
  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()

  function getCurrentPost(url: string): BlogPost {
    let searchPost: BlogPost | null = null
    for (const post of sortedBlogPosts) {
      if (url == post.link || url == post.link + "/") {
        searchPost = post
        continue
      }
    }
    if (!searchPost) {
      error(404, "Blog post not found")
    }
    return searchPost
  }
  let currentPost = $derived(getCurrentPost($page.url.pathname))

  function buildLdJson(post: BlogPost) {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      datePublished: post.parsedDate?.toISOString(),
      dateModified: post.parsedDate?.toISOString(),
    }
  }
  let jsonldScript = $derived(
    `<script type="application/ld+json">${
      JSON.stringify(buildLdJson(currentPost)) + "<"
    }/script>`,
  )

  let pageUrl = $derived($page.url.origin + $page.url.pathname)
</script>

<svelte:head>
  <title>{currentPost.title}</title>
  <meta name="description" content={currentPost.description} />

  <!-- Facebook -->
  <meta property="og:title" content={currentPost.title} />
  <meta property="og:description" content={currentPost.description} />
  <meta property="og:site_name" content={WebsiteName} />
  <meta property="og:url" content={pageUrl} />
  <!-- <meta property="og:image" content="https://samplesite.com/image.jpg"> -->

  <!-- Twitter -->
  <!-- “summary”, “summary_large_image”, “app”, or “player” -->
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content={currentPost.title} />
  <meta name="twitter:description" content={currentPost.description} />
  <!-- <meta name="twitter:site" content="@samplesite"> -->
  <!-- <meta name="twitter:image" content="https://samplesite.com/image.jpg"> -->

  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<article class="prose mx-auto py-12 px-6 font-sans">
  <div class="text-sm text-accent">
    {currentPost.parsedDate?.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    })}
  </div>
  <h1>{currentPost.title}</h1>
  {@render children?.()}
</article>
```


## src\routes\(marketing)\blog\rss.xml\+server.ts

```ts
import { sortedBlogPosts, blogInfo } from "../posts"

const encodeXML = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")

/** @type {import('./$types').RequestHandler} */
export function GET({ url }) {
  const headers = {
    "Cache-Control": "max-age=0, s-maxage=3600",
    "Content-Type": "application/xml",
  }

  let body = `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom"> 
  <channel>
    <title>${blogInfo.name}</title>
    <link>${url.origin}/blog</link>
    <description>${blogInfo.description}</description>
    <atom:link href="${url.origin}/blog/rss.xml" rel="self" type="application/rss+xml" />`
  for (const post of sortedBlogPosts) {
    body += `
    <item>
      <title>${encodeXML(post.title)}</title>
      <description>${encodeXML(post.description)}</description>
      <link>${url.origin + post.link}/</link>
      <pubDate>${post.parsedDate?.toUTCString()}</pubDate>
    </item>\n`
  }
  body += `  </channel>\n</rss>\n`
  return new Response(body, {
    headers: headers,
  })
}
```


## src\routes\(marketing)\blog\+layout.ts

```ts
export const prerender = true
```


## src\routes\(marketing)\blog\+page.svelte

```svelte
<script lang="ts">
  import { sortedBlogPosts, blogInfo } from "./posts"
</script>

<svelte:head>
  <title>{blogInfo.name}</title>
  <meta name="description" content="Our blog posts." />
</svelte:head>

<div class="py-8 lg:py-12 px-6 max-w-lg mx-auto">
  <div
    class="text-3xl lg:text-5xl font-medium text-primary flex gap-3 items-baseline text-center place-content-center"
  >
    <div
      class="text-center leading-relaxed font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent"
    >
      {blogInfo.name}
    </div>
    <a href="/blog/rss.xml" target="_blank" rel="noreferrer">
      <img
        class="flex-none w-5 h-5 object-contain"
        src="/images/rss.svg"
        alt="rss feed"
      />
    </a>
  </div>
  <div class="text-lg text-center">A demo blog with sample content.</div>

  {#each sortedBlogPosts as post}
    <a href={post.link}>
      <div class="card my-6 bg-white shadow-xl flex-row overflow-hidden">
        <div class="flex-none w-6 md:w-32 bg-secondary"></div>
        <div class="py-6 px-6">
          <div class="text-xl">{post.title}</div>
          <div class="text-sm text-accent">
            {post.parsedDate?.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <div class="text-slate-500">{post.description}</div>
        </div>
      </div>
    </a>
  {/each}
</div>
```


## src\routes\(marketing)\blog\posts.ts

```ts
export const blogInfo = {
  name: "SaaS Starter Blog",
  description: "A sample blog",
}

export type BlogPost = {
  link: string
  date: string // date is a string 'YYYY-MM-DD'
  title: string
  description: string
  parsedDate?: Date // Optional because it's added dynamically
}

// Update this list with the actual blog post list
// Create a page in the "(posts)" directory for each entry
const blogPosts: BlogPost[] = [
  {
    title: "How we built a beautiful 41kb SaaS website with this template",
    description: "How to use this template you to bootstrap your own site.",
    link: "/blog/how_we_built_our_41kb_saas_website",
    date: "2024-03-10",
  },
  {
    title: "Example Blog Post 2",
    description: "Even more example content!",
    link: "/blog/awesome_post",
    date: "2022-9-23",
  },
  {
    title: "Example Blog Post",
    description: "A sample blog post, showing our blog engine",
    link: "/blog/example_blog_post",
    date: "2023-03-13",
  },
]

// Parse post dates from strings to Date objects
for (const post of blogPosts) {
  if (!post.parsedDate) {
    const dateParts = post.date.split("-")
    post.parsedDate = new Date(
      parseInt(dateParts[0]),
      parseInt(dateParts[1]) - 1,
      parseInt(dateParts[2]),
    ) // Note: months are 0-based
  }
}

export const sortedBlogPosts = blogPosts.sort(
  (a: BlogPost, b: BlogPost) =>
    (b.parsedDate?.getTime() ?? 0) - (a.parsedDate?.getTime() ?? 0),
)
```


## src\routes\(marketing)\contact_us\+page.server.ts

```ts
import { fail } from "@sveltejs/kit"
import { sendAdminEmail } from "$lib/mailer.js"

/** @type {import('./$types').Actions} */
export const actions = {
  submitContactUs: async ({ request, locals: { supabaseServiceRole } }) => {
    const formData = await request.formData()
    const errors: { [fieldName: string]: string } = {}

    const firstName = formData.get("first_name")?.toString() ?? ""
    if (firstName.length < 2) {
      errors["first_name"] = "First name is required"
    }
    if (firstName.length > 500) {
      errors["first_name"] = "First name too long"
    }

    const lastName = formData.get("last_name")?.toString() ?? ""
    if (lastName.length < 2) {
      errors["last_name"] = "Last name is required"
    }
    if (lastName.length > 500) {
      errors["last_name"] = "Last name too long"
    }

    const email = formData.get("email")?.toString() ?? ""
    if (email.length < 6) {
      errors["email"] = "Email is required"
    } else if (email.length > 500) {
      errors["email"] = "Email too long"
    } else if (!email.includes("@") || !email.includes(".")) {
      errors["email"] = "Invalid email"
    }

    const company = formData.get("company")?.toString() ?? ""
    if (company.length > 500) {
      errors["company"] = "Company too long"
    }

    const phone = formData.get("phone")?.toString() ?? ""
    if (phone.length > 100) {
      errors["phone"] = "Phone number too long"
    }

    const message = formData.get("message")?.toString() ?? ""
    if (message.length > 2000) {
      errors["message"] = "Message too long (" + message.length + " of 2000)"
    }

    if (Object.keys(errors).length > 0) {
      return fail(400, { errors })
    }

    // Save to database
    const { error: insertError } = await supabaseServiceRole
      .from("contact_requests")
      .insert({
        first_name: firstName,
        last_name: lastName,
        email,
        company_name: company,
        phone,
        message_body: message,
        updated_at: new Date(),
      })

    if (insertError) {
      console.error("Error saving contact request", insertError)
      return fail(500, { errors: { _: "Error saving" } })
    }

    // Send email to admin
    await sendAdminEmail({
      subject: "New contact request",
      body: `New contact request from ${firstName} ${lastName}.\n\nEmail: ${email}\n\nPhone: ${phone}\n\nCompany: ${company}\n\nMessage: ${message}`,
    })
  },
}
```


## src\routes\(marketing)\contact_us\+page.svelte

```svelte
<script lang="ts">
  import { enhance, applyAction } from "$app/forms"
  import type { SubmitFunction } from "@sveltejs/kit"
  import type { FullAutoFill } from "svelte/elements"

  let errors: { [fieldName: string]: string } = $state({})
  let loading = $state(false)
  let showSuccess = $state(false)

  interface FormField {
    id: string
    label: string
    inputType: string
    autocomplete: FullAutoFill
  }

  const formFields: FormField[] = [
    {
      id: "first_name",
      label: "First Name *",
      inputType: "text",
      autocomplete: "given-name",
    },
    {
      id: "last_name",
      label: "Last Name *",
      inputType: "text",
      autocomplete: "family-name",
    },
    {
      id: "email",
      label: "Email *",
      inputType: "email",
      autocomplete: "email",
    },
    {
      id: "phone",
      label: "Phone Number",
      inputType: "tel",
      autocomplete: "tel",
    },
    {
      id: "company",
      label: "Company Name",
      inputType: "text",
      autocomplete: "organization",
    },
    {
      id: "message",
      label: "Message",
      inputType: "textarea",
      autocomplete: "off",
    },
  ]

  const handleSubmit: SubmitFunction = () => {
    loading = true
    errors = {}
    return async ({ update, result }) => {
      await update({ reset: false })
      await applyAction(result)
      loading = false
      if (result.type === "success") {
        showSuccess = true
      } else if (result.type === "failure") {
        errors = result.data?.errors ?? {}
      } else if (result.type === "error") {
        errors = { _: "An error occurred. Please check inputs and try again." }
      }
    }
  }
</script>

<div
  class="flex flex-col lg:flex-row mx-auto my-4 min-h-[70vh] place-items-center lg:place-items-start place-content-center"
>
  <div
    class="max-w-[400px] lg:max-w-[500px] flex flex-col place-content-center p-4 lg:mr-8 lg:mb-8 lg:min-h-[70vh]"
  >
    <div class="px-6">
      <h1 class="text-2xl lg:text-4xl font-bold mb-4">Contact Us</h1>
      <p class="text-lg">Talk to one of our service professionals to:</p>
      <ul class="list-disc list-outside pl-6 py-4 space-y-1">
        <li class="">Get a live demo</li>
        <li class="">Discuss your specific needs</li>
        <li>Get a quote</li>
        <li>Answer any technical questions you have</li>
      </ul>
      <p>Once you complete the form, we'll reach out to you! *</p>
      <p class="text-sm pt-8">
        *Not really for this demo page, but you should say something like that
        😉
      </p>
    </div>
  </div>

  <div
    class="flex flex-col grow m-4 lg:ml-10 min-w-[300px] stdphone:min-w-[360px] max-w-[400px] place-content-center lg:min-h-[70vh]"
  >
    {#if showSuccess}
      <div class="flex flex-col place-content-center lg:min-h-[70vh]">
        <div
          class="card card-bordered shadow-lg py-6 px-6 mx-2 lg:mx-0 lg:p-6 mb-10"
        >
          <div class="text-2xl font-bold mb-4">Thank you!</div>
          <p class="">We've received your message and will be in touch soon.</p>
        </div>
      </div>
    {:else}
      <div class="card card-bordered shadow-lg p-4 pt-6 mx-2 lg:mx-0 lg:p-6">
        <form
          class="form-widget flex flex-col"
          method="POST"
          action="?/submitContactUs"
          use:enhance={handleSubmit}
        >
          {#each formFields as field}
            <label for={field.id}>
              <div class="flex flex-row">
                <div class="text-base font-bold">{field.label}</div>
                {#if errors[field.id]}
                  <div class="text-red-600 grow text-sm ml-2 text-right">
                    {errors[field.id]}
                  </div>
                {/if}
              </div>
              {#if field.inputType === "textarea"}
                <textarea
                  id={field.id}
                  name={field.id}
                  autocomplete={field.autocomplete}
                  rows={4}
                  class="{errors[field.id]
                    ? 'input-error'
                    : ''} h-24 input-sm mt-1 input input-bordered w-full mb-3 text-base py-4"
                ></textarea>
              {:else}
                <input
                  id={field.id}
                  name={field.id}
                  type={field.inputType}
                  autocomplete={field.autocomplete}
                  class="{errors[field.id]
                    ? 'input-error'
                    : ''} input-sm mt-1 input input-bordered w-full mb-3 text-base py-4"
                />
              {/if}
            </label>
          {/each}

          {#if Object.keys(errors).length > 0}
            <p class="text-red-600 text-sm mb-2">
              Please resolve above issues.
            </p>
          {/if}

          <button class="btn btn-primary {loading ? 'btn-disabled' : ''}"
            >{loading ? "Submitting" : "Submit"}</button
          >
        </form>
      </div>
    {/if}
  </div>
</div>
```


## src\routes\(marketing)\login\current_password_error\+page.svelte

```svelte
<svelte:head>
  <title>Current Password Incorrect</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Current Password Incorrect</h1>

<p>
  You attempted edit your account with an incorrect current password, and have
  been logged out.
</p>
<p class="mt-6">
  If you remember your password <a href="/login/sign_in" class="link">sign in</a
  > and try again.
</p>
<p class="mt-6">
  If you forget your password <a href="/login/forgot_password" class="link"
    >reset it</a
  >.
</p>
```


## src\routes\(marketing)\login\forgot_password\+page.server.ts

```ts
export const ssr = false
```


## src\routes\(marketing)\login\forgot_password\+page.svelte

```svelte
<script lang="ts">
  import { Auth } from "@supabase/auth-ui-svelte"
  import { sharedAppearance, oauthProviders } from "../login_config"

  let { data } = $props()
</script>

<svelte:head>
  <title>Forgot Password</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Forgot Password</h1>
<Auth
  supabaseClient={data.supabase}
  view="forgotten_password"
  redirectTo={`${data.url}/auth/callback?next=%2Faccount%2Fsettings%2Freset_password`}
  providers={oauthProviders}
  socialLayout="horizontal"
  showLinks={false}
  appearance={sharedAppearance}
  additionalData={undefined}
/>
<div class="text-l text-slate-800 mt-4">
  Remember your password? <a class="underline" href="/login/sign_in">Sign in</a
  >.
</div>
```


## src\routes\(marketing)\login\sign_in\+page.server.ts

```ts
export const ssr = false
```


## src\routes\(marketing)\login\sign_in\+page.svelte

```svelte
<script lang="ts">
  import { Auth } from "@supabase/auth-ui-svelte"
  import { sharedAppearance, oauthProviders } from "../login_config"
  import { goto } from "$app/navigation"
  import { onMount } from "svelte"
  import { page } from "$app/stores"

  let { data } = $props()
  let { supabase } = data

  onMount(() => {
    supabase.auth.onAuthStateChange((event) => {
      // Redirect to account after successful login
      if (event == "SIGNED_IN") {
        // Delay needed because order of callback not guaranteed.
        // Give the layout callback priority to update state or
        // we'll just bounch back to login when /account tries to load
        setTimeout(() => {
          goto("/account")
        }, 1)
      }
    })
  })
</script>

<svelte:head>
  <title>Sign in</title>
</svelte:head>

{#if $page.url.searchParams.get("verified") == "true"}
  <div role="alert" class="alert alert-success mb-5">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="stroke-current shrink-0 h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      /></svg
    >
    <span>Email verified! Please sign in.</span>
  </div>
{/if}
<h1 class="text-2xl font-bold mb-6">Sign In</h1>
<Auth
  supabaseClient={data.supabase}
  view="sign_in"
  redirectTo={`${data.url}/auth/callback`}
  providers={oauthProviders}
  socialLayout="horizontal"
  showLinks={false}
  appearance={sharedAppearance}
  additionalData={undefined}
/>
<div class="text-l text-slate-800 mt-4">
  <a class="underline" href="/login/forgot_password">Forgot password?</a>
</div>
<div class="text-l text-slate-800 mt-3">
  Don't have an account? <a class="underline" href="/login/sign_up">Sign up</a>.
</div>
```


## src\routes\(marketing)\login\sign_up\+page.server.ts

```ts
export const ssr = false
```


## src\routes\(marketing)\login\sign_up\+page.svelte

```svelte
<script lang="ts">
  import { Auth } from "@supabase/auth-ui-svelte"
  import { sharedAppearance, oauthProviders } from "../login_config"

  let { data } = $props()
</script>

<svelte:head>
  <title>Sign up</title>
</svelte:head>

<h1 class="text-2xl font-bold mb-6">Sign Up</h1>
<Auth
  supabaseClient={data.supabase}
  view="sign_up"
  redirectTo={`${data.url}/auth/callback`}
  showLinks={false}
  providers={oauthProviders}
  socialLayout="horizontal"
  appearance={sharedAppearance}
  additionalData={undefined}
/>
<div class="text-l text-slate-800 mt-4 mb-2">
  Have an account? <a class="underline" href="/login/sign_in">Sign in</a>.
</div>
```


## src\routes\(marketing)\login\+layout.server.ts

```ts
import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({
  locals: { session },
  cookies,
  url,
}) => {
  return {
    url: url.origin,
    cookies: cookies.getAll(),
    session,
  }
}
```


## src\routes\(marketing)\login\+layout.svelte

```svelte
<script lang="ts">
  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()
  let isEurope = $state(false)
  try {
    isEurope = Intl.DateTimeFormat()
      .resolvedOptions()
      .timeZone.startsWith("Europe/")
  } catch (e) {
    /* continue */
  }
</script>

<div
  class="text-center content-center max-w-lg mx-auto min-h-[70vh] pb-12 flex items-center place-content-center"
>
  <div class="flex flex-col w-64 lg:w-80">
    {@render children?.()}
    <div class="mt-8 {isEurope ? 'block' : 'hidden'}">
      🍪 Logging in uses Cookies 🍪
    </div>
  </div>
</div>
```


## src\routes\(marketing)\login\+layout.ts

```ts
import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_URL,
} from "$env/static/public"
import {
  createBrowserClient,
  createServerClient,
  isBrowser,
} from "@supabase/ssr"
import { redirect } from "@sveltejs/kit"
import { load_helper } from "$lib/load_helpers.js"

export const load = async ({ fetch, data, depends }) => {
  depends("supabase:auth")

  const supabase = isBrowser()
    ? createBrowserClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: {
          fetch,
        },
      })
    : createServerClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY, {
        global: {
          fetch,
        },
        cookies: {
          getAll() {
            return data.cookies
          },
        },
      })

  // Redirect if already logged in
  const { session, user } = await load_helper(data.session, supabase)
  if (session && user) {
    redirect(303, "/account")
  }

  const url = data.url

  return { supabase, url }
}
```


## src\routes\(marketing)\login\+page.svelte

```svelte
<svelte:head>
  <title>Log In</title>
</svelte:head>

<div>
  <h1 class="text-xl font-bold">Get Started</h1>
  <a href="/login/sign_up"
    ><button class="btn btn-primary mt-3 btn-wide">Sign Up</button></a
  >

  <h1 class="text-xl mt-6">Already have an account?</h1>
  <a href="/login/sign_in"
    ><button class="btn btn-outline btn-primary mt-3 btn-wide">Sign In</button
    ></a
  >
</div>
```


## src\routes\(marketing)\login\login_config.ts

```ts
import { ThemeSupa } from "@supabase/auth-ui-shared"
import type { Provider } from "@supabase/supabase-js"

export const oauthProviders = ["github"] as Provider[]

// use the css variables from DaisyUI to style Supabase auth template
export const sharedAppearance = {
  theme: ThemeSupa,
  variables: {
    default: {
      colors: {
        brand: "oklch(var(--p))",
        brandAccent: "oklch(var(--ac))",
        inputText: "oklch(var(--n))",
        brandButtonText: "oklch(var(--pc))",
        messageText: "oklch(var(--b))",
        dividerBackground: "oklch(var(--n))",
        inputLabelText: "oklch(var(--n))",
        defaultButtonText: "oklch(var(--n))",
        anchorTextColor: "oklch(var(--p))",
      },
      fontSizes: {
        baseInputSize: "16px",
      },
    },
  },
  className: {
    button: "authBtn",
  },
}
```


## src\routes\(marketing)\pricing\+page.svelte

```svelte
<script lang="ts">
  import PricingModule from "./pricing_module.svelte"
  import { WebsiteName } from "./../../../config"

  type PlanFeatureRow = {
    name: string
    freeIncluded?: boolean
    proIncluded?: boolean
    freeString?: string
    proString?: string
    header?: boolean
  }

  const planFeatures: PlanFeatureRow[] = [
    {
      name: "Section 1",
      header: true,
    },
    {
      name: "Feature 1",
      freeIncluded: true,
      proIncluded: true,
    },
    {
      name: "Feature 2",
      freeIncluded: false,
      proIncluded: true,
    },
    {
      name: "Feature 3",
      freeString: "3",
      proString: "Unlimited",
    },
    {
      name: "Section 2",
      header: true,
    },
    {
      name: "Feature 4",
      freeIncluded: true,
      proIncluded: true,
    },
    {
      name: "Feature 5",
      freeIncluded: false,
      proIncluded: true,
    },
  ]
</script>

<svelte:head>
  <title>Pricing</title>
  <meta name="description" content="Pricing - {WebsiteName}" />
</svelte:head>

<div class="min-h-[70vh] pb-8 pt-[5vh] px-4">
  <h1 class="text-3xl font-bold text-center">Pricing</h1>
  <h2 class="text-xl text-center text-slate-500 mt-1 pb-3">
    Totally free, scale to millions of users
  </h2>

  <div class="w-full my-8">
    <PricingModule callToAction="Get Started" highlightedPlanId="pro" />
    <h1 class="text-2xl font-bold text-center mt-24">Pricing FAQ</h1>
    <div class="flex place-content-center">
      <div class="join join-vertical max-w-xl py-6 mx-auto">
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            Is this template free to use?
          </div>
          <div class="collapse-content">
            <p>Yup! This template is free to use for any project.</p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            Why does a free template have a pricing page?
          </div>
          <div class="collapse-content">
            <p>
              The pricing page is part of the boilerplate. It shows how the
              pricing page integrates into the billing portal and the Stripe
              Checkout flows.
            </p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            What license is the template under?
          </div>
          <div class="collapse-content">
            <p>The template is under the MIT license.</p>
          </div>
        </div>
        <div class="collapse collapse-arrow join-item border border-primary">
          <input type="radio" name="faq-accordion" />
          <div class="collapse-title text-lg font-medium">
            Can I try out purchase flows without real a credit card?
          </div>
          <div class="collapse-content">
            <p>
              Our demo page <a href="https://saasstarter.work" class="link"
                >SaasStarter.work</a
              > has a functional demo page, using Stripe's test environment.
            </p>
            <p class="mt-4">
              You can use the credit card number 4242 4242 4242 4242 with any
              future expiry date to test the payment and upgrade flows.
            </p>
          </div>
        </div>
      </div>
    </div>

    <svg style="display:none" version="2.0">
      <defs>
        <symbol
          id="checkcircle"
          viewBox="0 0 24 24"
          stroke-width="2"
          fill="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-4.105-4.498a.791.791 0 0 0-1.082.29l-3.828 6.63-1.733-2.08a.791.791 0 1 0-1.216 1.014l2.459 2.952a.792.792 0 0 0 .608.285.83.83 0 0 0 .068-.003.791.791 0 0 0 .618-.393L12.6 6.866a.791.791 0 0 0-.29-1.081z"
          />
        </symbol>
      </defs>
    </svg>

    <svg style="display:none" version="2.0">
      <defs>
        <symbol id="nocircle" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4,11H8a1,1,0,0,1,0-2h8a1,1,0,0,1,0,2Z"
          />
        </symbol>
      </defs>
    </svg>

    <h1 class="text-2xl font-bold text-center mt-16">Plan Features</h1>
    <h2 class="text-xl text-center text-slate-500 mt-1 pb-3">
      Example feature table
    </h2>

    <div class="overflow-visible mx-auto max-w-xl mt-4">
      <table class="table">
        <thead
          class="text-lg sticky top-0 bg-base-100 bg-opacity-50 z-10 backdrop-blur-sm"
        >
          <tr>
            <th></th>
            <th class="text-center">Free</th>
            <th class="text-center">Pro</th>
          </tr>
        </thead>
        <tbody>
          {#each planFeatures as feature}
            {#if feature.header}
              <tr class="bg-base-200 font-bold">
                <td colspan="3">{feature.name} </td>
              </tr>
            {:else}
              <tr class="relative">
                <td>{feature.name} </td>
                <td class="text-center">
                  {#if feature.freeString}
                    {feature.freeString}
                  {:else if feature.freeIncluded}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 ml-2 inline text-success"
                    >
                      <use href="#checkcircle" />
                    </svg>
                  {:else}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-[26px] h-[26px] inline text-base-200"
                    >
                      <use href="#nocircle" />
                    </svg>
                  {/if}
                </td>
                <td class="text-center">
                  {#if feature.proString}
                    {feature.proString}
                  {:else if feature.proIncluded}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-8 h-8 ml-2 inline text-success"
                    >
                      <use href="#checkcircle" />
                    </svg>
                  {:else}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-[26px] h-[26px] inline text-base-200"
                    >
                      <use href="#nocircle" />
                    </svg>
                  {/if}
                </td>
              </tr>
            {/if}
          {/each}
        </tbody>
      </table>
    </div>
  </div>
</div>
```


## src\routes\(marketing)\pricing\+page.ts

```ts
export const prerender = true
```


## src\routes\(marketing)\pricing\pricing_module.svelte

```svelte
<script lang="ts">
  import { pricingPlans } from "./pricing_plans"

  interface Props {
    // Module context
    highlightedPlanId?: string
    callToAction: string
    currentPlanId?: string
    center?: boolean
  }

  let {
    highlightedPlanId = "",
    callToAction,
    currentPlanId = "",
    center = true,
  }: Props = $props()
</script>

<div
  class="flex flex-col lg:flex-row gap-10 {center
    ? 'place-content-center'
    : ''} flex-wrap"
>
  {#each pricingPlans as plan}
    <div
      class="flex-none card card-bordered {plan.id === highlightedPlanId
        ? 'border-primary'
        : 'border-gray-200'} shadow-xl flex-1 grow min-w-[260px] max-w-[310px] p-6"
    >
      <div class="flex flex-col h-full">
        <div class="text-xl font-bold">{plan.name}</div>
        <p class="mt-2 text-sm text-gray-500 leading-relaxed">
          {plan.description}
        </p>
        <div class="mt-auto pt-4 text-sm text-gray-600">
          Plan Includes:
          <ul class="list-disc list-inside mt-2 space-y-1">
            {#each plan.features as feature}
              <li class="">{feature}</li>
            {/each}
            <ul></ul>
          </ul>
        </div>
        <div class="pt-8">
          <span class="text-4xl font-bold">{plan.price}</span>
          <span class="text-gray-400">{plan.priceIntervalName}</span>
          <div class="mt-6 pt-4 flex-1 flex flex-row items-center">
            {#if plan.id === currentPlanId}
              <div
                class="btn btn-outline btn-success no-animation w-[80%] mx-auto cursor-default"
              >
                Current Plan
              </div>
            {:else}
              <a
                href={"/account/subscribe/" +
                  (plan?.stripe_price_id ?? "free_plan")}
                class="btn btn-primary w-[80%] mx-auto"
              >
                {callToAction}
              </a>
            {/if}
          </div>
        </div>
      </div>
    </div>
  {/each}
</div>
```


## src\routes\(marketing)\pricing\pricing_plans.ts

```ts
export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "A free plan to get you started!",
    price: "$0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: ["MIT Licence", "Fast Performance", "Stripe Integration"],
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "A plan to test the purchase experience. Try buying this with the test credit card 4242424242424242.",
    price: "$5",
    priceIntervalName: "per month",
    stripe_price_id: "price_1NkdZCHMjzZ8mGZnRSjUm4yA",
    stripe_product_id: "prod_OXj1CcemGMWOlU",
    features: [
      "Everything in Free",
      "Support us with fake money",
      "Test the purchase experience",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "A plan to test the upgrade experience. Try buying this with the test credit card 4242424242424242.",
    price: "$15",
    priceIntervalName: "per month",
    stripe_price_id: "price_1Nkda2HMjzZ8mGZn4sKvbDAV",
    stripe_product_id: "prod_OXj20YNpHYOXi7",
    features: [
      "Everything in Pro",
      "Try the 'upgrade plan' UX",
      "Still actually free!",
    ],
  },
]
```


## src\routes\(marketing)\search\api.json\+server.ts

```ts
import { dev } from "$app/environment"
import { error } from "@sveltejs/kit"

export async function GET() {
  // only build search index in dev mode. It will be pre-built in production (see vite.config.js)
  if (dev) {
    const { buildSearchIndex } = await import("$lib/build_index")
    const searchData = await buildSearchIndex()
    return new Response(JSON.stringify(searchData), {
      headers: { "Content-Type": "application/json" },
    })
  }
  error(404, "Search index not found")
}
```


## src\routes\(marketing)\search\+page.server.ts

```ts
export const prerender = true
```


## src\routes\(marketing)\search\+page.svelte

```svelte
<script lang="ts">
  import { page } from "$app/stores"
  import { browser } from "$app/environment"
  import { onMount } from "svelte"
  import Fuse from "fuse.js"
  import { goto } from "$app/navigation"
  import { dev } from "$app/environment"

  const fuseOptions = {
    keys: [
      { name: "title", weight: 3 },
      { name: "description", weight: 2 },
      { name: "body", weight: 1 },
    ],
    ignoreLocation: true,
    threshold: 0.3,
  }

  let fuse: Fuse<Result> | undefined = $state()

  let loading = $state(true)
  let error = $state(false)
  onMount(async () => {
    try {
      const response = await fetch("/search/api.json")
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const searchData = await response.json()
      if (searchData && searchData.index && searchData.indexData) {
        const index = Fuse.parseIndex(searchData.index)
        fuse = new Fuse<Result>(searchData.indexData, fuseOptions, index)
      }
    } catch (e) {
      console.error("Failed to load search data", e)
      error = true
    } finally {
      loading = false
      document.getElementById("search-input")?.focus()
    }
  })

  type Result = {
    item: {
      title: string
      description: string
      body: string
      path: string
    }
  }
  let results: Result[] = $state([])

  // searchQuery is $page.url.hash minus the "#" at the beginning if present
  let searchQuery = $state(decodeURIComponent($page.url.hash.slice(1) ?? ""))
  $effect(() => {
    if (fuse) {
      results = fuse.search(searchQuery)
    }
  })
  // Update the URL hash when searchQuery changes so the browser can bookmark/share the search results
  $effect(() => {
    if (browser && window.location.hash.slice(1) !== searchQuery) {
      goto("#" + searchQuery, { keepFocus: true })
    }
  })

  let focusItem = $state(0)
  function onKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      searchQuery = ""
    } else if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      focusItem += event.key === "ArrowDown" ? 1 : -1
      if (focusItem < 0) {
        focusItem = 0
      } else if (focusItem > results.length) {
        focusItem = results.length
      }
      if (focusItem === 0) {
        document.getElementById("search-input")?.focus()
      } else {
        document.getElementById(`search-result-${focusItem}`)?.focus()
      }
    }
  }
</script>

<svelte:window onkeydown={onKeyDown} />

<svelte:head>
  <title>Search</title>
  <meta name="description" content="Search our website." />
</svelte:head>

<div class="py-8 lg:py-12 px-6 max-w-lg mx-auto">
  <div
    class="text-3xl lg:text-5xl font-medium text-primary flex gap-3 items-baseline text-center place-content-center"
  >
    <div
      class="text-center leading-relaxed font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent"
    >
      Search
    </div>
  </div>
  <label class="input input-bordered flex items-center gap-2 mt-10 mb-5 w-full">
    <input
      id="search-input"
      type="text"
      class="grow w-full"
      placeholder="Search"
      bind:value={searchQuery}
      onfocus={() => (focusItem = 0)}
      aria-label="Search input"
    />
  </label>

  {#if loading && searchQuery.length > 0}
    <div class="text-center mt-10 text-accent text-xl">Loading...</div>
  {/if}

  {#if error}
    <div class="text-center mt-10 text-accent text-xl">
      Error connecting to search. Please try again later.
    </div>
  {/if}

  {#if !loading && searchQuery.length > 0 && results.length === 0 && !error}
    <div class="text-center mt-10 text-accent text-xl">No results found</div>
    {#if dev}
      <div class="text-center mt-4 font-mono">
        Development mode only message: if you're missing content, rebuild your
        local search index with `npm run build`
      </div>
    {/if}
  {/if}

  <div>
    {#each results as result, i}
      <a
        href={result.item.path || "/"}
        id="search-result-{i + 1}"
        class="card my-6 bg-white shadow-xl flex-row overflow-hidden focus:mx-[-10px] focus:my-[-5px] focus:border-4 focus:border-secondary"
      >
        <div class="flex-none w-6 md:w-32 bg-secondary"></div>
        <div class="py-6 px-6">
          <div class="text-xl">{result.item.title}</div>
          <div class="text-sm text-accent">
            {result.item.path}
          </div>
          <div class="text-slate-500">{result.item.description}</div>
        </div>
      </a>
    {/each}
  </div>

  <div></div>
</div>
```


## src\routes\(marketing)\sitemap.xml\+server.ts

```ts
import type { RequestHandler } from "@sveltejs/kit"
import * as sitemap from "super-sitemap"
import { WebsiteBaseUrl } from "../../../config"

export const prerender = true

export const GET: RequestHandler = async () => {
  return await sitemap.response({
    origin: WebsiteBaseUrl,
    excludeRoutePatterns: [
      ".*\\(admin\\).*", // i.e. exclude routes within admin group
    ],
  })
}
```


## src\routes\(marketing)\+layout.svelte

```svelte
<script lang="ts">
  import { WebsiteName } from "./../../config"
  import "../../app.css"

  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()
</script>

<div class="navbar bg-base-100 container mx-auto">
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="/">{WebsiteName}</a>
  </div>
  <div class="flex-none">
    <ul class="menu menu-horizontal px-1 hidden sm:flex font-bold text-lg">
      <li class="md:mx-4">
        <a
          href="https://github.com/CriticalMoments/CMSaasStarter"
          class="border border-primary">★ us on Github</a
        >
      </li>
      <li class="md:mx-2"><a href="/blog">Blog</a></li>
      <li class="md:mx-2"><a href="/pricing">Pricing</a></li>
      <li class="md:mx-2"><a href="/account">Account</a></li>
      <li class="md:mx-0">
        <a href="/search" aria-label="Search">
          <svg
            fill="#000000"
            class="w-6 h-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            ><path
              d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z"
              fill="currentColor"
            /></svg
          >
        </a>
      </li>
    </ul>
    <div class="dropdown dropdown-end sm:hidden">
      <!-- svelte-ignore a11y_label_has_associated_control -->
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <label tabindex="0" class="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          ><path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h7"
          /></svg
        >
      </label>
      <!-- svelte-ignore a11y_no_noninteractive_tabindex -->
      <ul
        tabindex="0"
        class="menu menu-lg dropdown-content mt-3 z-1 p-2 shadow-sm bg-base-100 rounded-box w-52 font-bold"
      >
        <li><a href="/blog">Blog</a></li>
        <li><a href="/pricing">Pricing</a></li>
        <li><a href="/account">Account</a></li>
        <li><a href="/search">Search</a></li>
        <li>
          <a
            href="https://github.com/CriticalMoments/CMSaasStarter"
            class="border border-primary">★ us on Github</a
          >
        </li>
      </ul>
    </div>
  </div>
</div>

<div class="">
  {@render children?.()}
</div>

<!-- Spacer grows so the footer can be at bottom on short pages -->
<div class="grow"></div>
<div class="">
  <div class="border-t max-w-[1000px] mx-auto"></div>
  <footer
    class="footer md:footer-horizontal p-10 gap-x-48 lg:gap-x-64 xl:gap-x-96 place-content-center text-base"
  >
    <nav>
      <span class="footer-title opacity-80">Explore</span>
      <a class="link link-hover mb-1" href="/">Overview</a>
      <a class="link link-hover my-1" href="/pricing">Pricing</a>
      <a class="link link-hover my-1" href="/blog">Blog</a>
      <a class="link link-hover my-1" href="/contact_us">Contact Us</a>
      <a
        class="link link-hover my-1"
        href="https://github.com/CriticalMoments/CMSaasStarter">Github</a
      >
    </nav>
    <aside>
      <span class="footer-title opacity-80">Sponsor</span>
      <a class="max-w-[260px]" href="https://getkiln.ai">
        <div class="font-bold text-3xl mb-1">Kiln AI</div>
        <div class="font-medium mb-3">Build High Quality AI Products</div>
        <div class="font-light">
          Use advanced AI tactics, and collaborate with your team. Free apps for
          Mac and Windows.
        </div>
        <div class="link text-sm font-bold mt-2">Learn More</div>
      </a>
    </aside>
  </footer>
</div>
```


## src\routes\(marketing)\+page.svelte

```svelte
<script lang="ts">
  import {
    WebsiteName,
    WebsiteBaseUrl,
    WebsiteDescription,
  } from "./../../config"

  const ldJson = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: WebsiteName,
    url: WebsiteBaseUrl,
  }
  const jsonldScript = `<script type="application/ld+json">${
    JSON.stringify(ldJson) + "<"
  }/script>`

  const features = [
    {
      name: "Free to host",
      description:
        "Instructions included for Cloudflare+Supabase. Free to start, and cost effective to scale.",
      link: "https://github.com/CriticalMoments/CMSaasStarter?tab=readme-ov-file#suggested-hosting-stack",
      linkText: "Docs",
      newPage: true,
      svgContent: `<path d="M4.01207 15.7618L5.70156 10.6933C6.46758 8.39525 6.85059 7.24623 7.75684 7.03229C8.6631 6.81835 9.51953 7.67478 11.2324 9.38764L14.6114 12.7666C16.3242 14.4795 17.1807 15.3359 16.9667 16.2422C16.7528 17.1484 15.6038 17.5314 13.3057 18.2975L8.23724 19.987C5.47183 20.9088 4.08912 21.3697 3.35924 20.6398C2.62936 19.9099 3.09026 18.5272 4.01207 15.7618Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M12.2351 18.3461C12.2351 18.3461 11.477 16.0649 11.477 14.5552C11.477 13.0454 12.2351 10.7643 12.2351 10.7643M8.06517 19.4833C8.06517 19.4833 7.42484 16.7314 7.307 14.9343C7.11229 11.965 8.06517 7.35254 8.06517 7.35254" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14.5093 10.0061L14.6533 9.28614C14.7986 8.55924 15.3224 7.96597 16.0256 7.73155C16.7289 7.49714 17.2526 6.90387 17.398 6.17697L17.542 5.45703" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M17.5688 12.2533L17.7817 12.3762C18.4388 12.7556 19.265 12.6719 19.8327 12.1685C20.3468 11.7126 21.0789 11.597 21.7085 11.8723L22 11.9997" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M10.5352 3C10.1977 3.55206 10.2823 4.26344 10.7399 4.72097L10.8377 4.81885C11.2309 5.21201 11.3759 5.78959 11.215 6.32182" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M13.561 4.39648C13.7621 4.19542 13.8626 4.09489 13.9788 4.05804C14.0772 4.02688 14.1827 4.02688 14.281 4.05804C14.3973 4.09489 14.4978 4.19542 14.6989 4.39648C14.8999 4.59753 15.0004 4.69806 15.0373 4.8143C15.0685 4.91262 15.0685 5.01817 15.0373 5.11648C15.0004 5.23272 14.8999 5.33325 14.6989 5.53431C14.4978 5.73536 14.3973 5.83589 14.281 5.87274C14.1827 5.90391 14.0772 5.90391 13.9788 5.87274C13.8626 5.83589 13.7621 5.73536 13.561 5.53431C13.36 5.33325 13.2594 5.23272 13.2226 5.11648C13.1914 5.01817 13.1914 4.91262 13.2226 4.8143C13.2594 4.69806 13.36 4.59753 13.561 4.39648Z" fill="#1C274C"/>
<path d="M19.4682 7.46822C19.7136 7.22283 19.8363 7.10014 19.9747 7.04681C20.1367 6.9844 20.3161 6.9844 20.4781 7.04681C20.6165 7.10014 20.7392 7.22283 20.9846 7.46822C21.23 7.71362 21.3527 7.83631 21.406 7.97472C21.4684 8.1367 21.4684 8.31609 21.406 8.47807C21.3527 8.61649 21.23 8.73918 20.9846 8.98457C20.7392 9.22996 20.6165 9.35266 20.4781 9.40599C20.3161 9.4684 20.1367 9.4684 19.9747 9.40599C19.8363 9.35266 19.7136 9.22996 19.4682 8.98457C19.2228 8.73918 19.1001 8.61649 19.0468 8.47807C18.9844 8.31609 18.9844 8.1367 19.0468 7.97472C19.1001 7.83631 19.2228 7.71362 19.4682 7.46822Z" fill="#1C274C"/>
<path d="M6.92712 3.94079C7.13659 3.73132 7.47621 3.73132 7.68567 3.94079C7.89514 4.15026 7.89514 4.48988 7.68567 4.69935C7.47621 4.90882 7.13659 4.90882 6.92712 4.69935C6.71765 4.48988 6.71765 4.15026 6.92712 3.94079Z" fill="#1C274C"/>
<path d="M19.058 15.3134C19.2674 15.1039 19.6071 15.1039 19.8165 15.3134C20.026 15.5228 20.026 15.8624 19.8165 16.0719C19.6071 16.2814 19.2674 16.2814 19.058 16.0719C18.8485 15.8624 18.8485 15.5228 19.058 15.3134Z" fill="#1C274C"/>
<path d="M17.5 9.74145C17.7095 9.53198 18.0491 9.53198 18.2586 9.74145C18.468 9.95092 18.468 10.2905 18.2586 10.5C18.0491 10.7095 17.7095 10.7095 17.5 10.5C17.2905 10.2905 17.2905 9.95092 17.5 9.74145Z" fill="#1C274C"/>`,
    },
    {
      name: "User Auth",
      link: "/login",
      description:
        "Sign up, sign out, forgot password, email verification, and oAuth. Powered by Supabase Auth.",
      svgContent: `<path
                  d="M14.2084 13.5521C16.3025 13.5521 18 11.8615 18 9.77606C18 7.6906 16.3025 6 14.2084 6C12.1144 6 10.4169 7.6906 10.4169 9.77606C10.4169 10.742 10.8578 11.4446 10.8578 11.4446L6.27264 16.011C6.0669 16.2159 5.77886 16.7486 6.27264 17.2404L6.8017 17.7673C7.00743 17.9429 7.52471 18.1888 7.94796 17.7673L8.56519 17.1526C9.18242 17.7673 9.88782 17.416 10.1523 17.0647C10.5932 16.45 10.0642 15.8353 10.0642 15.8353L10.2405 15.6597C11.087 16.5027 11.8277 16.011 12.0922 15.6597C12.5331 15.045 12.0922 14.4303 12.0922 14.4303C11.9159 14.079 11.5632 14.079 12.004 13.64L12.5331 13.113C12.9564 13.4643 13.8264 13.5521 14.2084 13.5521Z"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8"
                  stroke="#1C274C"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />`,
    },
    {
      name: "Pricing Page",
      link: "/pricing",
      description:
        "Customizable and fast pricing page, integrated into the billing portal.",
      svgContent: `<path d="M12 6V18" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M15 9.5C15 8.11929 13.6569 7 12 7C10.3431 7 9 8.11929 9 9.5C9 10.8807 10.3431 12 12 12C13.6569 12 15 13.1193 15 14.5C15 15.8807 13.6569 17 12 17C10.3431 17 9 15.8807 9 14.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M7 3.33782C8.47087 2.48697 10.1786 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 10.1786 2.48697 8.47087 3.33782 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      name: "Blog",
      link: "/blog",
      description:
        "Blog engine with rich formatting, RSS and SEO optimization.",
      svgContent: `<path d="M3 10C3 6.22876 3 4.34315 4.17157 3.17157C5.34315 2 7.22876 2 11 2H13C16.7712 2 18.6569 2 19.8284 3.17157C21 4.34315 21 6.22876 21 10V14C21 17.7712 21 19.6569 19.8284 20.8284C18.6569 22 16.7712 22 13 22H11C7.22876 22 5.34315 22 4.17157 20.8284C3 19.6569 3 17.7712 3 14V10Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M6 12C6 10.5858 6 9.87868 6.43934 9.43934C6.87868 9 7.58579 9 9 9H15C16.4142 9 17.1213 9 17.5607 9.43934C18 9.87868 18 10.5858 18 12V16C18 17.4142 18 18.1213 17.5607 18.5607C17.1213 19 16.4142 19 15 19H9C7.58579 19 6.87868 19 6.43934 18.5607C6 18.1213 6 17.4142 6 16V12Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M7 6H12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      name: "Subscriptions",
      link: "/pricing",
      description: "User friendly subscriptions powered by Stripe Checkout.",
      svgContent: `<path d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M10 16.5H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M8 13.5H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M2 10L22 10" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14 15C14 14.0572 14 13.5858 14.2929 13.2929C14.5858 13 15.0572 13 16 13C16.9428 13 17.4142 13 17.7071 13.2929C18 13.5858 18 14.0572 18 15C18 15.9428 18 16.4142 17.7071 16.7071C17.4142 17 16.9428 17 16 17C15.0572 17 14.5858 17 14.2929 16.7071C14 16.4142 14 15.9428 14 15Z" stroke="#1C274C" stroke-width="1.5"/>`,
    },
    {
      name: "Billing Portal",
      link: "/account/billing",
      description:
        "Self-serve portal for updating card, receipts, upgrades, downgrades and more.",
      svgContent: `<path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M2.26121 3.09184L2.50997 2.38429H2.50997L2.26121 3.09184ZM2.24876 2.29246C1.85799 2.15507 1.42984 2.36048 1.29246 2.75124C1.15507 3.14201 1.36048 3.57016 1.75124 3.70754L2.24876 2.29246ZM4.58584 4.32298L5.20507 3.89983V3.89983L4.58584 4.32298ZM5.88772 14.5862L5.34345 15.1022H5.34345L5.88772 14.5862ZM20.6578 9.88275L21.3923 10.0342L21.3933 10.0296L20.6578 9.88275ZM20.158 12.3075L20.8926 12.4589L20.158 12.3075ZM20.7345 6.69708L20.1401 7.15439L20.7345 6.69708ZM19.1336 15.0504L18.6598 14.469L19.1336 15.0504ZM5.70808 9.76V7.03836H4.20808V9.76H5.70808ZM2.50997 2.38429L2.24876 2.29246L1.75124 3.70754L2.01245 3.79938L2.50997 2.38429ZM10.9375 16.25H16.2404V14.75H10.9375V16.25ZM5.70808 7.03836C5.70808 6.3312 5.7091 5.7411 5.65719 5.26157C5.60346 4.76519 5.48705 4.31247 5.20507 3.89983L3.96661 4.74613C4.05687 4.87822 4.12657 5.05964 4.1659 5.42299C4.20706 5.8032 4.20808 6.29841 4.20808 7.03836H5.70808ZM2.01245 3.79938C2.68006 4.0341 3.11881 4.18965 3.44166 4.34806C3.74488 4.49684 3.87855 4.61727 3.96661 4.74613L5.20507 3.89983C4.92089 3.48397 4.54304 3.21763 4.10241 3.00143C3.68139 2.79485 3.14395 2.60719 2.50997 2.38429L2.01245 3.79938ZM4.20808 9.76C4.20808 11.2125 4.22171 12.2599 4.35876 13.0601C4.50508 13.9144 4.79722 14.5261 5.34345 15.1022L6.43198 14.0702C6.11182 13.7325 5.93913 13.4018 5.83723 12.8069C5.72607 12.1578 5.70808 11.249 5.70808 9.76H4.20808ZM10.9375 14.75C9.52069 14.75 8.53763 14.7482 7.79696 14.6432C7.08215 14.5418 6.70452 14.3576 6.43198 14.0702L5.34345 15.1022C5.93731 15.7286 6.69012 16.0013 7.58636 16.1283C8.45674 16.2518 9.56535 16.25 10.9375 16.25V14.75ZM4.95808 6.87H17.0888V5.37H4.95808V6.87ZM19.9232 9.73135L19.4235 12.1561L20.8926 12.4589L21.3923 10.0342L19.9232 9.73135ZM17.0888 6.87C17.9452 6.87 18.6989 6.871 19.2937 6.93749C19.5893 6.97053 19.8105 7.01643 19.9659 7.07105C20.1273 7.12776 20.153 7.17127 20.1401 7.15439L21.329 6.23978C21.094 5.93436 20.7636 5.76145 20.4632 5.65587C20.1567 5.54818 19.8101 5.48587 19.4604 5.44678C18.7646 5.369 17.9174 5.37 17.0888 5.37V6.87ZM21.3933 10.0296C21.5625 9.18167 21.7062 8.47024 21.7414 7.90038C21.7775 7.31418 21.7108 6.73617 21.329 6.23978L20.1401 7.15439C20.2021 7.23508 20.2706 7.38037 20.2442 7.80797C20.2168 8.25191 20.1002 8.84478 19.9223 9.73595L21.3933 10.0296ZM16.2404 16.25C17.0021 16.25 17.6413 16.2513 18.1566 16.1882C18.6923 16.1227 19.1809 15.9794 19.6074 15.6318L18.6598 14.469C18.5346 14.571 18.3571 14.6525 17.9744 14.6994C17.5712 14.7487 17.0397 14.75 16.2404 14.75V16.25ZM19.4235 12.1561C19.2621 12.9389 19.1535 13.4593 19.0238 13.8442C18.9007 14.2095 18.785 14.367 18.6598 14.469L19.6074 15.6318C20.0339 15.2842 20.2729 14.8346 20.4453 14.3232C20.6111 13.8312 20.7388 13.2049 20.8926 12.4589L19.4235 12.1561Z" fill="#1C274C"/>`,
    },
    {
      name: "User Dashboard",
      link: "/account/settings",
      description:
        "User profile, user settings, update email/password, billing, and more.",
      svgContent: `<circle cx="12" cy="12" r="3" stroke="#1C274C" stroke-width="1.5"/>
<path d="M13.7654 2.15224C13.3978 2 12.9319 2 12 2C11.0681 2 10.6022 2 10.2346 2.15224C9.74457 2.35523 9.35522 2.74458 9.15223 3.23463C9.05957 3.45834 9.0233 3.7185 9.00911 4.09799C8.98826 4.65568 8.70226 5.17189 8.21894 5.45093C7.73564 5.72996 7.14559 5.71954 6.65219 5.45876C6.31645 5.2813 6.07301 5.18262 5.83294 5.15102C5.30704 5.08178 4.77518 5.22429 4.35436 5.5472C4.03874 5.78938 3.80577 6.1929 3.33983 6.99993C2.87389 7.80697 2.64092 8.21048 2.58899 8.60491C2.51976 9.1308 2.66227 9.66266 2.98518 10.0835C3.13256 10.2756 3.3397 10.437 3.66119 10.639C4.1338 10.936 4.43789 11.4419 4.43786 12C4.43783 12.5581 4.13375 13.0639 3.66118 13.3608C3.33965 13.5629 3.13248 13.7244 2.98508 13.9165C2.66217 14.3373 2.51966 14.8691 2.5889 15.395C2.64082 15.7894 2.87379 16.193 3.33973 17C3.80568 17.807 4.03865 18.2106 4.35426 18.4527C4.77508 18.7756 5.30694 18.9181 5.83284 18.8489C6.07289 18.8173 6.31632 18.7186 6.65204 18.5412C7.14547 18.2804 7.73556 18.27 8.2189 18.549C8.70224 18.8281 8.98826 19.3443 9.00911 19.9021C9.02331 20.2815 9.05957 20.5417 9.15223 20.7654C9.35522 21.2554 9.74457 21.6448 10.2346 21.8478C10.6022 22 11.0681 22 12 22C12.9319 22 13.3978 22 13.7654 21.8478C14.2554 21.6448 14.6448 21.2554 14.8477 20.7654C14.9404 20.5417 14.9767 20.2815 14.9909 19.902C15.0117 19.3443 15.2977 18.8281 15.781 18.549C16.2643 18.2699 16.8544 18.2804 17.3479 18.5412C17.6836 18.7186 17.927 18.8172 18.167 18.8488C18.6929 18.9181 19.2248 18.7756 19.6456 18.4527C19.9612 18.2105 20.1942 17.807 20.6601 16.9999C21.1261 16.1929 21.3591 15.7894 21.411 15.395C21.4802 14.8691 21.3377 14.3372 21.0148 13.9164C20.8674 13.7243 20.6602 13.5628 20.3387 13.3608C19.8662 13.0639 19.5621 12.558 19.5621 11.9999C19.5621 11.4418 19.8662 10.9361 20.3387 10.6392C20.6603 10.4371 20.8675 10.2757 21.0149 10.0835C21.3378 9.66273 21.4803 9.13087 21.4111 8.60497C21.3592 8.21055 21.1262 7.80703 20.6602 7C20.1943 6.19297 19.9613 5.78945 19.6457 5.54727C19.2249 5.22436 18.693 5.08185 18.1671 5.15109C17.9271 5.18269 17.6837 5.28136 17.3479 5.4588C16.8545 5.71959 16.2644 5.73002 15.7811 5.45096C15.2977 5.17191 15.0117 4.65566 14.9909 4.09794C14.9767 3.71848 14.9404 3.45833 14.8477 3.23463C14.6448 2.74458 14.2554 2.35523 13.7654 2.15224Z" stroke="#1C274C" stroke-width="1.5"/>`,
    },
    {
      name: "Contact Us",
      link: "/contact_us",
      description:
        "Contact form for customers to reach out for demos, quotes, and questions.",
      svgContent: `<path d="M10.5 22V20M14.5 22V20" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11 20V20.75H11.75V20H11ZM14 19.25C13.5858 19.25 13.25 19.5858 13.25 20C13.25 20.4142 13.5858 20.75 14 20.75V19.25ZM17.5 5.25C17.0858 5.25 16.75 5.58579 16.75 6C16.75 6.41421 17.0858 6.75 17.5 6.75V5.25ZM7 5.25C6.58579 5.25 6.25 5.58579 6.25 6C6.25 6.41421 6.58579 6.75 7 6.75V5.25ZM9 19.25C8.58579 19.25 8.25 19.5858 8.25 20C8.25 20.4142 8.58579 20.75 9 20.75V19.25ZM15 20.75C15.4142 20.75 15.75 20.4142 15.75 20C15.75 19.5858 15.4142 19.25 15 19.25V20.75ZM10.25 11.25V20H11.75V11.25H10.25ZM11 19.25H4.23256V20.75H11V19.25ZM2.75 17.3953V11.25H1.25V17.3953H2.75ZM4.23256 19.25C3.51806 19.25 2.75 18.5323 2.75 17.3953H1.25C1.25 19.1354 2.48104 20.75 4.23256 20.75V19.25ZM6.5 6.75C8.46677 6.75 10.25 8.65209 10.25 11.25H11.75C11.75 8.04892 9.50379 5.25 6.5 5.25V6.75ZM6.5 5.25C3.49621 5.25 1.25 8.04892 1.25 11.25H2.75C2.75 8.65209 4.53323 6.75 6.5 6.75V5.25ZM21.25 11.25V17.4253H22.75V11.25H21.25ZM19.7931 19.25H14V20.75H19.7931V19.25ZM21.25 17.4253C21.25 18.5457 20.4934 19.25 19.7931 19.25V20.75C21.5305 20.75 22.75 19.1488 22.75 17.4253H21.25ZM22.75 11.25C22.75 8.04892 20.5038 5.25 17.5 5.25V6.75C19.4668 6.75 21.25 8.65209 21.25 11.25H22.75ZM7 6.75H18V5.25H7V6.75ZM9 20.75H15V19.25H9V20.75Z" fill="#1C274C"/>
<path d="M5 16H8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M16 9.88432V5.41121M16 5.41121V2.63519C16 2.39905 16.1676 2.19612 16.3994 2.15144L16.8855 2.05779C17.4738 1.94443 18.0821 1.99855 18.6412 2.214L18.7203 2.24451C19.2746 2.4581 19.8807 2.498 20.4582 2.35891C20.7343 2.2924 21 2.50168 21 2.78573V5.00723C21 5.2442 20.8376 5.45031 20.6073 5.5058L20.5407 5.52184C19.9095 5.67387 19.247 5.63026 18.6412 5.39679C18.0821 5.18135 17.4738 5.12722 16.8855 5.24058L16 5.41121Z" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      name: "Search",
      link: "/search",
      description: "Lighting fast site search, without a backend.",
      svgContent: `
<path d="M22 13V12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H13" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M10 16H6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M2 10L22 10" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<circle cx="18" cy="17" r="3" stroke="#1C274C" stroke-width="1.5"/>
<path d="M20.5 19.5L21.5 20.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      name: "Email",
      link: "https://github.com/CriticalMoments/CMSaasStarter/blob/main/email_docs.md",
      linkText: "Docs",
      description: "Send emails to users, including template support.",
      svgContent: `<path d="M22 10C22.0185 10.7271 22 11.0542 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H13" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M6 8L8.1589 9.79908C9.99553 11.3296 10.9139 12.0949 12 12.0949C13.0861 12.0949 14.0045 11.3296 15.8411 9.79908" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<circle cx="19" cy="5" r="3" stroke="#1C274C" stroke-width="1.5"/>`,
    },
    {
      name: "Performance",
      newPage: true,
      linkText: "Docs",
      link: "https://github.com/CriticalMoments/CMSaasStarter?tab=readme-ov-file#performance--best-practices",
      description:
        "Pre-rendering. Compiled on deployment to remove unused CSS/JS. Perfect 100/100 Google performance scores.",
      svgContent: `<path d="M5.66953 9.91436L8.73167 5.77133C10.711 3.09327 11.7007 1.75425 12.6241 2.03721C13.5474 2.32018 13.5474 3.96249 13.5474 7.24712V7.55682C13.5474 8.74151 13.5474 9.33386 13.926 9.70541L13.946 9.72466C14.3327 10.0884 14.9492 10.0884 16.1822 10.0884C18.4011 10.0884 19.5106 10.0884 19.8855 10.7613C19.8917 10.7724 19.8977 10.7837 19.9036 10.795C20.2576 11.4784 19.6152 12.3475 18.3304 14.0857L15.2683 18.2287C13.2889 20.9067 12.2992 22.2458 11.3758 21.9628C10.4525 21.6798 10.4525 20.0375 10.4525 16.7528L10.4526 16.4433C10.4526 15.2585 10.4526 14.6662 10.074 14.2946L10.054 14.2754C9.6673 13.9117 9.05079 13.9117 7.81775 13.9117C5.59888 13.9117 4.48945 13.9117 4.1145 13.2387C4.10829 13.2276 4.10225 13.2164 4.09639 13.205C3.74244 12.5217 4.3848 11.6526 5.66953 9.91436Z" stroke="#1C274C" stroke-width="1.5"/>`,
    },
    {
      name: "Responsive",
      description: "Designed for mobile and desktop.",
      svgContent: `<path d="M11 17H8C5.17157 17 3.75736 17 2.87868 16.1213C2 15.2426 2 13.8284 2 11V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H15.5C17.8346 2 19.0019 2 19.8856 2.47231C20.5833 2.84525 21.1548 3.4167 21.5277 4.11441C22 4.99805 22 6.16537 22 8.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M14 15C14 13.1144 14 12.1716 14.5858 11.5858C15.1716 11 16.1144 11 18 11C19.8856 11 20.8284 11 21.4142 11.5858C22 12.1716 22 13.1144 22 15V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V15Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M19 20H17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11 22H8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11 22V17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
<path d="M11 13H2" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      name: "Delightful Stack",
      description:
        "Tools you'll love working with, including SvelteKit, Tailwind, DaisyUI, Postgres, and Supabase.",
      linkText: "Docs",
      newPage: true,
      link: "https://github.com/CriticalMoments/CMSaasStarter?tab=readme-ov-file#tech-stack",
      svgContent: `<path d="M4.97883 9.68508C2.99294 8.89073 2 8.49355 2 8C2 7.50645 2.99294 7.10927 4.97883 6.31492L7.7873 5.19153C9.77318 4.39718 10.7661 4 12 4C13.2339 4 14.2268 4.39718 16.2127 5.19153L19.0212 6.31492C21.0071 7.10927 22 7.50645 22 8C22 8.49355 21.0071 8.89073 19.0212 9.68508L16.2127 10.8085C14.2268 11.6028 13.2339 12 12 12C10.7661 12 9.77318 11.6028 7.7873 10.8085L4.97883 9.68508Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M5.76613 10L4.97883 10.3149C2.99294 11.1093 2 11.5065 2 12C2 12.4935 2.99294 12.8907 4.97883 13.6851L7.7873 14.8085C9.77318 15.6028 10.7661 16 12 16C13.2339 16 14.2268 15.6028 16.2127 14.8085L19.0212 13.6851C21.0071 12.8907 22 12.4935 22 12C22 11.5065 21.0071 11.1093 19.0212 10.3149L18.2339 10" stroke="#1C274C" stroke-width="1.5"/>
<path d="M5.76613 14L4.97883 14.3149C2.99294 15.1093 2 15.5065 2 16C2 16.4935 2.99294 16.8907 4.97883 17.6851L7.7873 18.8085C9.77318 19.6028 10.7661 20 12 20C13.2339 20 14.2268 19.6028 16.2127 18.8085L19.0212 17.6851C21.0071 16.8907 22 16.4935 22 16C22 15.5065 21.0071 15.1093 19.0212 14.3149L18.2339 14" stroke="#1C274C" stroke-width="1.5"/>`,
    },
    {
      name: "Extensible",
      description:
        "All the tools you need to make additional marketing pages, UI components, admin portals, database backends, API endpoints, and more.",
      svgContent: `<path d="M12.75 6.5C12.75 6.08579 12.4142 5.75 12 5.75C11.5858 5.75 11.25 6.08579 11.25 6.5H12.75ZM18 16.5L18.5303 17.0303C18.8232 16.7374 18.8232 16.2626 18.5303 15.9697L18 16.5ZM15.9697 17.4697C15.6768 17.7626 15.6768 18.2374 15.9697 18.5303C16.2626 18.8232 16.7374 18.8232 17.0303 18.5303L15.9697 17.4697ZM17.0303 14.4697C16.7374 14.1768 16.2626 14.1768 15.9697 14.4697C15.6768 14.7626 15.6768 15.2374 15.9697 15.5303L17.0303 14.4697ZM11.25 6.5V12.5H12.75V6.5H11.25ZM16 17.25H18V15.75H16V17.25ZM17.4697 15.9697L15.9697 17.4697L17.0303 18.5303L18.5303 17.0303L17.4697 15.9697ZM18.5303 15.9697L17.0303 14.4697L15.9697 15.5303L17.4697 17.0303L18.5303 15.9697ZM11.25 12.5C11.25 15.1234 13.3766 17.25 16 17.25V15.75C14.2051 15.75 12.75 14.2949 12.75 12.5H11.25Z" fill="#1C274C"/>
<path d="M12.75 6.5C12.75 6.08579 12.4142 5.75 12 5.75C11.5858 5.75 11.25 6.08579 11.25 6.5H12.75ZM6 16.5L5.46967 15.9697C5.17678 16.2626 5.17678 16.7374 5.46967 17.0303L6 16.5ZM6.96967 18.5303C7.26256 18.8232 7.73744 18.8232 8.03033 18.5303C8.32322 18.2374 8.32322 17.7626 8.03033 17.4697L6.96967 18.5303ZM8.03033 15.5303C8.32322 15.2374 8.32322 14.7626 8.03033 14.4697C7.73744 14.1768 7.26256 14.1768 6.96967 14.4697L8.03033 15.5303ZM11.25 6.5V12.5H12.75V6.5H11.25ZM8 15.75H6V17.25H8V15.75ZM5.46967 17.0303L6.96967 18.5303L8.03033 17.4697L6.53033 15.9697L5.46967 17.0303ZM6.53033 17.0303L8.03033 15.5303L6.96967 14.4697L5.46967 15.9697L6.53033 17.0303ZM11.25 12.5C11.25 14.2949 9.79493 15.75 8 15.75V17.25C10.6234 17.25 12.75 15.1234 12.75 12.5H11.25Z" fill="#1C274C"/>
<path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
`,
    },
    {
      name: "Developer Experience",
      description:
        "Built in linting, type checking, formatting, and test framework. Run locally in your editor, and on Github CI.",
      newPage: true,
      linkText: "Docs",
      link: "https://github.com/CriticalMoments/CMSaasStarter?tab=readme-ov-file#developer-tools",
      svgContent: `<path d="M7 9C7 9.55228 6.55228 10 6 10C5.44772 10 5 9.55228 5 9C5 8.44772 5.44772 8 6 8C6.55228 8 7 8.44772 7 9Z" fill="#1C274C"/>
<path d="M7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11C6.55228 11 7 11.4477 7 12Z" fill="#1C274C"/>
<path d="M10 12C10 12.5523 9.55228 13 9 13C8.44772 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11C9.55228 11 10 11.4477 10 12Z" fill="#1C274C"/>
<path d="M10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9Z" fill="#1C274C"/>
<path d="M13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9Z" fill="#1C274C"/>
<path d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z" fill="#1C274C"/>
<path d="M16 9C16 9.55228 15.5523 10 15 10C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9Z" fill="#1C274C"/>
<path d="M16 12C16 12.5523 15.5523 13 15 13C14.4477 13 14 12.5523 14 12C14 11.4477 14.4477 11 15 11C15.5523 11 16 11.4477 16 12Z" fill="#1C274C"/>
<path d="M19 9C19 9.55228 18.5523 10 18 10C17.4477 10 17 9.55228 17 9C17 8.44772 17.4477 8 18 8C18.5523 8 19 8.44772 19 9Z" fill="#1C274C"/>
<path d="M19 12C19 12.5523 18.5523 13 18 13C17.4477 13 17 12.5523 17 12C17 11.4477 17.4477 11 18 11C18.5523 11 19 11.4477 19 12Z" fill="#1C274C"/>
<path d="M2 11C2 8.17157 2 6.75736 2.87868 5.87868C3.75736 5 5.17157 5 8 5H16C18.8284 5 20.2426 5 21.1213 5.87868C22 6.75736 22 8.17157 22 11V13C22 15.8284 22 17.2426 21.1213 18.1213C20.2426 19 18.8284 19 16 19H8C5.17157 19 3.75736 19 2.87868 18.1213C2 17.2426 2 15.8284 2 13V11Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M7 16H17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>`,
    },
    {
      name: "Scalable",
      description:
        "Handle new users and scale with horizontally scaling edge functions.",
      svgContent: `<path d="M3 22H21" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3 11C3 10.0572 3 9.58579 3.29289 9.29289C3.58579 9 4.05719 9 5 9C5.94281 9 6.41421 9 6.70711 9.29289C7 9.58579 7 10.0572 7 11V17C7 17.9428 7 18.4142 6.70711 18.7071C6.41421 19 5.94281 19 5 19C4.05719 19 3.58579 19 3.29289 18.7071C3 18.4142 3 17.9428 3 17V11Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M10 7C10 6.05719 10 5.58579 10.2929 5.29289C10.5858 5 11.0572 5 12 5C12.9428 5 13.4142 5 13.7071 5.29289C14 5.58579 14 6.05719 14 7V17C14 17.9428 14 18.4142 13.7071 18.7071C13.4142 19 12.9428 19 12 19C11.0572 19 10.5858 19 10.2929 18.7071C10 18.4142 10 17.9428 10 17V7Z" stroke="#1C274C" stroke-width="1.5"/>
<path d="M17 4C17 3.05719 17 2.58579 17.2929 2.29289C17.5858 2 18.0572 2 19 2C19.9428 2 20.4142 2 20.7071 2.29289C21 2.58579 21 3.05719 21 4V17C21 17.9428 21 18.4142 20.7071 18.7071C20.4142 19 19.9428 19 19 19C18.0572 19 17.5858 19 17.2929 18.7071C17 18.4142 17 17.9428 17 17V4Z" stroke="#1C274C" stroke-width="1.5"/>`,
    },
    {
      name: "Extensions",
      description:
        "Community extensions for internationalization, dark mode theme, and more.",
      linkText: "Docs",
      newPage: true,
      link: "https://github.com/CriticalMoments/CMSaasStarter?tab=readme-ov-file#community-extensions",
      svgContent: `
      <circle cx="10" cy="6" r="4" stroke="#1C274C" stroke-width="1.5"/>
<path d="M18 17.5C18 19.9853 18 22 10 22C2 22 2 19.9853 2 17.5C2 15.0147 5.58172 13 10 13C14.4183 13 18 15.0147 18 17.5Z" stroke="currentColor" stroke-width="1.5"/>
<path d="M18.0885 12.5385L18.5435 11.9423L18.0885 12.5385ZM19 8.64354L18.4681 9.17232C18.6089 9.31392 18.8003 9.39354 19 9.39354C19.1997 9.39354 19.3911 9.31392 19.5319 9.17232L19 8.64354ZM19.9115 12.5385L19.4565 11.9423L19.9115 12.5385ZM18.5435 11.9423C18.0571 11.571 17.619 11.274 17.2659 10.8891C16.9387 10.5324 16.75 10.1638 16.75 9.69973H15.25C15.25 10.6481 15.6642 11.362 16.1606 11.9031C16.6311 12.4161 17.2372 12.8322 17.6335 13.1347L18.5435 11.9423ZM16.75 9.69973C16.75 9.28775 16.9898 8.95469 17.2973 8.81862C17.5635 8.7008 17.9874 8.68874 18.4681 9.17232L19.5319 8.11476C18.6627 7.24047 17.5865 7.0503 16.6903 7.44694C15.8352 7.82533 15.25 8.69929 15.25 9.69973H16.75ZM17.6335 13.1347C17.7825 13.2483 17.9756 13.3959 18.1793 13.5111C18.3832 13.6265 18.6656 13.75 19 13.75V12.25C19.0344 12.25 19.0168 12.2615 18.9179 12.2056C18.8187 12.1495 18.7061 12.0663 18.5435 11.9423L17.6335 13.1347ZM20.3665 13.1347C20.7628 12.8322 21.3689 12.4161 21.8394 11.9031C22.3358 11.362 22.75 10.6481 22.75 9.69973H21.25C21.25 10.1638 21.0613 10.5324 20.7341 10.8891C20.381 11.274 19.9429 11.571 19.4565 11.9423L20.3665 13.1347ZM22.75 9.69973C22.75 8.69929 22.1648 7.82533 21.3097 7.44694C20.4135 7.0503 19.3373 7.24047 18.4681 8.11476L19.5319 9.17232C20.0126 8.68874 20.4365 8.7008 20.7027 8.81862C21.0102 8.95469 21.25 9.28775 21.25 9.69973H22.75ZM19.4565 11.9423C19.2939 12.0663 19.1813 12.1495 19.0821 12.2056C18.9832 12.2615 18.9656 12.25 19 12.25V13.75C19.3344 13.75 19.6168 13.6265 19.8207 13.5111C20.0244 13.3959 20.2175 13.2483 20.3665 13.1347L19.4565 11.9423Z" fill="currentColor"/>
      `,
    },
    {
      name: "Open Source",
      description:
        "With the MIT license, you are free to use, modify, and distribute this template.",
      linkText: "License",
      newPage: true,
      link: "https://github.com/CriticalMoments/CMSaasStarter/blob/main/LICENSE",
      svgContent: `
<path d="M0.90625 12.4866C1.01075 6.46069 5.22856 2.1707 10.3917 1.47632C16.551 0.652008 21.732 4.84163 22.7275 10.3994C23.6728 15.6704 20.7757 20.6046 15.9989 22.5599C15.5871 22.7276 15.3616 22.6348 15.2042 22.2161L12.8302 16.0499C12.6948 15.6876 12.7869 15.4621 13.1417 15.3019C14.2162 14.8145 14.8852 13.9984 15.0646 12.8269C15.3472 11.0119 14.0334 9.33651 12.2039 9.17838C10.5381 9.01682 9.03525 10.1773 8.76644 11.8273C8.53337 13.2924 9.25663 14.6564 10.6206 15.2758C11.0469 15.469 11.1328 15.6588 10.9678 16.0926L8.58287 22.3014C8.46806 22.6059 8.21781 22.7139 7.89537 22.5881C5.37844 21.6036 3.31181 19.7233 2.09494 17.3101C0.98875 15.1259 0.978437 13.4182 0.90625 12.4832V12.4866ZM1.83369 12.4014C1.85225 12.6949 1.86188 13.0346 1.89144 13.3824C2.16988 16.5724 4.08937 19.7487 7.70219 21.5066C7.84587 21.5706 7.8995 21.5424 7.95312 21.4069C8.61244 19.6696 9.27794 17.9337 9.94756 16.1964C10.0046 16.0534 9.97575 15.9853 9.84306 15.9028C8.43987 15.018 7.74137 13.7503 7.81975 12.0858C7.86306 11.1295 8.23225 10.288 8.87644 9.58607C10.2047 8.13613 12.2919 7.82057 14.0004 8.80576C15.4111 9.62182 16.1983 11.201 16.0051 12.8201C15.8436 14.1731 15.1499 15.2119 13.9749 15.9138C13.8567 15.9853 13.8209 16.0424 13.8753 16.1813C14.5483 17.922 15.2179 19.6621 15.88 21.4028C15.9343 21.5424 15.9879 21.5706 16.1275 21.5025C17.7067 20.7683 19.0205 19.7157 20.038 18.3125C21.5807 16.1709 22.2181 13.7894 21.9135 11.1687C21.3085 5.9547 16.6177 1.63651 10.5773 2.38176C5.87206 2.95857 1.91206 6.92957 1.833 12.4007L1.83369 12.4014Z" fill="currentColor" stroke="currentColor" stroke-width="0.5" stroke-linecap="round"/>
      `,
    },
  ]
</script>

<svelte:head>
  <title>{WebsiteName}</title>
  <meta name="description" content={WebsiteDescription} />
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html jsonldScript}
</svelte:head>

<div class="hero min-h-[60vh]">
  <div class="hero-content text-center py-12">
    <div class="max-w-xl">
      <div
        class="text-xl md:text-3xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent mb-3 md:mb-7 pb-1"
      >
        SaaS Starter Demo
      </div>

      <div
        class="text-4xl md:text-6xl font-bold px-2"
        style="line-height: 1.2;"
      >
        The
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >open source</span
        >,
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >fast</span
        >, and
        <span
          class="underline decoration-secondary decoration-4 md:decoration-[6px]"
          >free to host</span
        >
        <span> SaaS template</span>
      </div>
      <div class="mt-6 md:mt-10 text-sm md:text-lg">
        Built with <a
          href="https://kit.svelte.dev"
          class="link font-bold"
          target="_blank">SvelteKit</a
        >,
        <a href="https://supabase.com" class="link font-bold" target="_blank"
          >Supabase</a
        >,
        <a href="https://stripe.com" class="link font-bold" target="_blank"
          >Stripe</a
        >,
        <a href="https://tailwindcss.com" class="link font-bold" target="_blank"
          >Tailwind</a
        >,
        <a href="https://daisyui.com" class="link font-bold" target="_blank"
          >DaisyUI</a
        >, and
        <a
          href="https://www.postgresql.org"
          class="link font-bold"
          target="_blank">Postgres</a
        >
      </div>
      <div
        class="mt-6 md:mt-4 flex flex-row flex-wrap gap-4 place-content-center"
      >
        <a href="https://github.com/CriticalMoments/CMSaasStarter">
          <button class="btn btn-primary px-6">★ us on Github</button>
        </a>
        <a
          href="https://github.com/CriticalMoments/CMSaasStarter/tree/main#saas-starter"
        >
          <button class="btn btn-outline btn-primary px-6">Read the Docs</button
          >
        </a>
      </div>
    </div>
  </div>
</div>
<div class="min-h-[60vh]">
  <div class="pt-20 pb-8 px-7">
    <div class="max-w-lg mx-auto text-center">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent pb-2"
      >
        Explore the Features
      </div>
      <div class="mt-4 text-xl font-bold">
        And try them on this
        <span
          class="underline decoration-secondary decoration-[3px] md:decoration-[4px]"
        >
          fully functional demo
        </span>
      </div>
    </div>

    <div
      class="flex gap-6 mt-12 max-w-[1064px] mx-auto place-content-center flex-wrap"
    >
      {#each features as feature}
        <div class="card bg-white w-[270px] min-h-[300px] flex-none shadow-xl">
          <div class="card-body items-center text-center p-[24px] pt-[32px]">
            <div>
              <svg
                width="50px"
                height="50px"
                class="mb-2 mt-1"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <!-- eslint-disable-next-line svelte/no-at-html-tags -->
                {@html feature.svgContent}
              </svg>
            </div>
            <h2 class="card-title">
              {feature.name}
            </h2>
            <p class="text-sm">
              {feature.description}
            </p>
            {#if feature.link}
              <a
                href={feature.link}
                class="pb-4"
                target={feature.newPage ? "_blank" : ""}
              >
                <button
                  class="btn btn-xs btn-outline rounded-full btn-primary min-w-[100px]"
                  >{feature.linkText ? feature.linkText : "Try It"}</button
                >
              </a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
<div class="hero min-h-[60vh] mt-12">
  <div class="hero-content text-center pb-16 pt-4 px-4">
    <div class="max-w-lg">
      <div
        class="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-linear-to-r from-primary to-accent mt-4 pb-2"
      >
        See it in Action
      </div>
      <div
        class="flex flex-col lg:flex-row mt-6 gap-6 place-content-center content-center"
      >
        <div class="hidden md:block">
          <a href="https://criticalmoments.io" target="_blank" class="link">
            <div class="mockup-browser border">
              <div class="mockup-browser-toolbar">
                <div class="input" style="background:#eee;">
                  https://criticalmoments.io
                </div>
              </div>
              <div class="flex justify-center">
                <img
                  alt="Screenshot of criticalmoments.io homepage"
                  class="aspect-2044/1242"
                  src="/images/example-home.png"
                />
              </div>
            </div>
          </a>
        </div>
        <div class="md:hidden">
          <a href="https://criticalmoments.io" target="_blank" class="link">
            <div class="card shadow-xl border overflow-hidden">
              <img
                alt="Screenshot of criticalmoments.io homepage"
                class="aspect-2044/1242"
                src="/images/example-home.png"
              />
            </div></a
          >
        </div>
        <div class="min-w-[270px] lg:min-w-[420px] flex mt-6 lg:mt-0">
          <div class="my-auto">
            <div class="px-4 text-lg md:text-xl">
              <a href="https://criticalmoments.io" class="" target="_blank"
                >SaaS Starter was created by <span
                  class="font-bold whitespace-nowrap">Critical Moments</span
                >: a SDK to to help mobile apps
                <span class="underline decoration-secondary decoration-[3px]"
                  >increase conversion rates and app-ratings.</span
                ></a
              >
            </div>
            <div class="px-4 mt-6 text-lg md:text-xl">
              Our <a
                href="https://criticalmoments.io"
                class="link font-bold"
                target="_blank">webpage</a
              > is the best example of SaaS Starter with style and real content.
            </div>
            <div class="mt-4 text-large">
              <a href="https://criticalmoments.io" target="_blank">
                <button class="btn btn-primary btn-wide mt-3"
                  >See it in Action</button
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```


## src\routes\(marketing)\+page.ts

```ts
export const prerender = true
```


## src\routes\+error.svelte

```svelte
<script>
  import "../app.css"
  import { page } from "$app/stores"
</script>

<div class="hero min-h-[100vh]">
  <div class="hero-content text-center">
    <div class="max-w-lg">
      <h1 class="text-5xl font-bold">This is embarrassing...</h1>
      <p class="py-6 text-2xl">There was an error: {$page?.error?.message}</p>
      <div>
        <a href="/" class="btn btn-primary btn-wide">Return Home</a>
      </div>
    </div>
  </div>
</div>
```


## src\routes\+layout.svelte

```svelte
<script lang="ts">
  import "../app.css"
  import { navigating } from "$app/stores"
  import { expoOut } from "svelte/easing"
  import { slide } from "svelte/transition"
  interface Props {
    children?: import("svelte").Snippet
  }

  let { children }: Props = $props()
</script>

{#if $navigating}
  <!-- 
    Loading animation for next page since svelte doesn't show any indicator. 
     - delay 100ms because most page loads are instant, and we don't want to flash 
     - long 12s duration because we don't actually know how long it will take
     - exponential easing so fast loads (>100ms and <1s) still see enough progress,
       while slow networks see it moving for a full 12 seconds
  -->
  <div
    class="fixed w-full top-0 right-0 left-0 h-1 z-50 bg-primary"
    in:slide={{ delay: 100, duration: 12000, axis: "x", easing: expoOut }}
  ></div>
{/if}
{@render children?.()}
```


## src\ambient.d.ts

```ts
declare global {
  type FormAccountUpdateResult = {
    errorMessage?: string
    errorFields?: string[]
    fullName?: string
    companyName?: string
    website?: string
    email?: string
  }
}

export {}
```


## src\app.css

```css
@import "tailwindcss";

@plugin '@tailwindcss/typography';
@plugin "daisyui" {
  /* Disable all other themes which forces the default theme created below. You can add a dark mode theme using daisyui if you like, and it will automatically use it when the user's system is in dark mode. Docs: https://daisyui.com/docs/themes/ */
  themes: false;
}

@plugin "daisyui/theme" {
  name: "saasstartertheme";
  default: true; /* set as default */
  prefersdark: false; /* set as default dark mode (prefers-color-scheme:dark) */
  color-scheme: light; /* color of browser-provided UI */

  --color-primary: #180042;
  --color-primary-content: #fefbf6;
  --color-secondary: #c7b9f8;
  --color-secondary-content: oklch(95% 0 0);
  --color-accent: #db2777;
  --color-accent-content: #180042;
  --color-neutral: #180042;
  --color-neutral-content: #fefbf6;
  --color-base-100: #fefbf6;
  --color-base-200: #faedd6;
  --color-base-300: oklch(92% 0.04 240);
  --color-base-content: #180042;
  --color-info: oklch(70% 0.2 220);
  --color-info-content: oklch(98% 0.01 220);
  --color-success: #37d399;
  --color-success-content: oklch(98% 0.01 140);
  --color-warning: oklch(80% 0.25 80);
  --color-warning-content: oklch(20% 0.05 80);
  --color-error: #f77272;
  --color-error-content: oklch(98% 0.01 30);

  /* border radius */
  --radius-selector: 1rem;
  --radius-field: 0.5rem;
  --radius-box: 0.5rem;

  /* base sizes */
  --size-selector: 0.25rem;
  --size-field: 0.25rem;

  /* border size */
  --border: 1px;

  /* effects */
  --depth: 1;
  --noise: 0;
}

/*
  Tailwind CSS v4 Migration:
  The default border color has changed to `currentColor` in Tailwind CSS v4,
  so we've added these compatibility styles to make sure everything still
  looks the same as it did with Tailwind CSS v3.

  If we ever want to remove these styles, we need to add an explicit border
  color utility to any element that depends on these defaults.
*/
@layer base {
  *,
  ::after,
  ::before,
  ::backdrop,
  ::file-selector-button {
    border-color: var(--color-gray-200, currentColor);
  }
}

a {
  @apply cursor-pointer;
}

/* Hack to temporarily solve https://github.com/supabase/auth-ui/issues/219 */
.authBtn {
  @apply btn;
}
button[disabled].authBtn {
  font-size: 0.001px;
  filter: brightness(65%);
}
button[disabled].authBtn::before {
  font-size: 14px;
  content: "Loading...";
  color: oklch(var(--pc));
}
```


## src\app.d.ts

```ts
import { Session, SupabaseClient, type AMREntry } from "@supabase/supabase-js"
import { Database } from "./DatabaseDefinitions"

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Locals {
      supabase: SupabaseClient<Database>
      supabaseServiceRole: SupabaseClient<Database>
      safeGetSession: () => Promise<{
        session: Session | null
        user: User | null
        amr: AMREntry[] | null
      }>
      session: Session | null
      user: User | null
    }
    interface PageData {
      session: Session | null
    }
    // interface Error {}
    // interface Platform {}
  }
}

export {}
```


## src\app.html

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%sveltekit.assets%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    %sveltekit.head%
  </head>
  <body
    data-sveltekit-preload-data="hover"
    style="min-height: 100vh; display: flex; flex-direction: column"
  >
    <div style="display: contents">%sveltekit.body%</div>
  </body>
</html>
```


## src\config.ts

```ts
export const WebsiteName: string = "SaaS Starter"
export const WebsiteBaseUrl: string = "https://saasstarter.work"
export const WebsiteDescription: string =
  "Open source, fast, and free to host SaaS template. Built with SvelteKit, Supabase, Stripe, Tailwind, DaisyUI, and Postgres"
export const CreateProfileStep: boolean = true
```


## src\DatabaseDefinitions.ts

```ts
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contact_requests: {
        Row: {
          company_name: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          message_body: string | null
          phone: string | null
          updated_at: Date | null
        }
        Insert: {
          company_name?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          message_body?: string | null
          phone?: string | null
          updated_at?: Date | null
        }
        Update: {
          company_name?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          message_body?: string | null
          phone?: string | null
          updated_at?: Date | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          company_name: string | null
          website: string | null
          unsubscribed: boolean
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: Date | null
          company_name?: string | null
          website?: string | null
          unsubscribed: boolean
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          company_name?: string | null
          website?: string | null
          unsubscribed: boolean
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      stripe_customers: {
        Row: {
          stripe_customer_id: string
          updated_at: Date | null
          user_id: string
        }
        Insert: {
          stripe_customer_id: string
          updated_at?: Date | null
          user_id: string
        }
        Update: {
          stripe_customer_id?: string
          updated_at?: Date | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "stripe_customers_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
```


## src\hooks.server.ts

```ts
// src/hooks.server.ts
import { PRIVATE_SUPABASE_SERVICE_ROLE } from "$env/static/private"
import {
  PUBLIC_SUPABASE_ANON_KEY,
  PUBLIC_SUPABASE_URL,
} from "$env/static/public"
import { createServerClient } from "@supabase/ssr"
import { createClient } from "@supabase/supabase-js"
import type { Handle } from "@sveltejs/kit"
import { sequence } from "@sveltejs/kit/hooks"

export const supabase: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createServerClient(
    PUBLIC_SUPABASE_URL,
    PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll: () => event.cookies.getAll(),
        /**
         * SvelteKit's cookies API requires `path` to be explicitly set in
         * the cookie options. Setting `path` to `/` replicates previous/
         * standard behavior.
         */
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            event.cookies.set(name, value, { ...options, path: "/" })
          })
        },
      },
    },
  )

  event.locals.supabaseServiceRole = createClient(
    PUBLIC_SUPABASE_URL,
    PRIVATE_SUPABASE_SERVICE_ROLE,
    { auth: { persistSession: false } },
  )

  // https://github.com/supabase/auth-js/issues/888#issuecomment-2189298518
  if ("suppressGetSessionWarning" in event.locals.supabase.auth) {
    // @ts-expect-error - suppressGetSessionWarning is not part of the official API
    event.locals.supabase.auth.suppressGetSessionWarning = true
  } else {
    console.warn(
      "SupabaseAuthClient#suppressGetSessionWarning was removed. See https://github.com/supabase/auth-js/issues/888.",
    )
  }

  /**
   * Unlike `supabase.auth.getSession()`, which returns the session _without_
   * validating the JWT, this function also calls `getUser()` to validate the
   * JWT before returning the session.
   */
  event.locals.safeGetSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()
    if (!session) {
      return { session: null, user: null, amr: null }
    }

    const {
      data: { user },
      error: userError,
    } = await event.locals.supabase.auth.getUser()
    if (userError) {
      // JWT validation has failed
      return { session: null, user: null, amr: null }
    }

    const { data: aal, error: amrError } =
      await event.locals.supabase.auth.mfa.getAuthenticatorAssuranceLevel()
    if (amrError) {
      return { session, user, amr: null }
    }

    return { session, user, amr: aal.currentAuthenticationMethods }
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === "content-range" || name === "x-supabase-api-version"
    },
  })
}

// Not called for prerendered marketing pages so generally okay to call on ever server request
// Next-page CSR will mean relatively minimal calls to this hook
const authGuard: Handle = async ({ event, resolve }) => {
  const { session, user } = await event.locals.safeGetSession()
  event.locals.session = session
  event.locals.user = user

  return resolve(event)
}

export const handle: Handle = sequence(supabase, authGuard)
```


## src\index.test.ts

```ts
import { describe, it, expect } from "vitest"

describe("sum test", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3)
  })
})
```


## static\images\cm_logo.svg

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="420" height="154" fill="none" xmlns:v="https://vecta.io/nano"><g clip-path="url(#A)"><path d="M43.475 23.46c-1.303-1.587-2.918-2.805-4.845-3.655-1.87-.85-4.052-1.275-6.545-1.275s-4.817.482-6.97 1.445c-2.097.963-3.938 2.323-5.525 4.08-1.53 1.7-2.748 3.74-3.655 6.12-.85 2.38-1.275 4.958-1.275 7.735 0 2.833.425 5.44 1.275 7.82.907 2.323 2.125 4.363 3.655 6.12 1.53 1.7 3.315 3.032 5.355 3.995 2.097.963 4.335 1.445 6.715 1.445 2.72 0 5.128-.567 7.225-1.7s3.825-2.72 5.185-4.76l11.05 8.245c-2.55 3.57-5.78 6.205-9.69 7.905s-7.933 2.55-12.07 2.55c-4.703 0-9.038-.737-13.005-2.21s-7.395-3.57-10.285-6.29C7.18 58.253 4.913 54.91 3.27 51 1.683 47.09.89 42.727.89 37.91s.793-9.18 2.38-13.09c1.643-3.91 3.91-7.225 6.8-9.945 2.89-2.777 6.318-4.902 10.285-6.375s8.302-2.21 13.005-2.21c1.7 0 3.457.17 5.27.51a25.68 25.68 0 0 1 5.44 1.445c1.813.68 3.542 1.587 5.185 2.72s3.117 2.522 4.42 4.165l-10.2 8.33zm17.219 3.23h12.75v6.63h.17c1.36-2.55 2.975-4.448 4.845-5.695 1.87-1.303 4.222-1.955 7.055-1.955a28.79 28.79 0 0 1 2.21.085c.737.057 1.417.17 2.04.34V37.74a15.59 15.59 0 0 0-2.72-.595c-.85-.17-1.757-.255-2.72-.255-2.437 0-4.363.34-5.78 1.02s-2.522 1.643-3.315 2.89c-.737 1.19-1.218 2.635-1.445 4.335s-.34 3.57-.34 5.61V68h-12.75V26.69zm34.784 0h12.75V68h-12.75V26.69zm-1.02-13.005c0-2.04.708-3.768 2.125-5.185 1.473-1.473 3.23-2.21 5.27-2.21s3.768.737 5.185 2.21c1.473 1.417 2.21 3.145 2.21 5.185s-.737 3.797-2.21 5.27c-1.417 1.417-3.145 2.125-5.185 2.125s-3.797-.708-5.27-2.125c-1.417-1.473-2.125-3.23-2.125-5.27zm51.065 23.205h-11.22v13.77c0 1.133.056 2.182.17 3.145.113.907.368 1.7.765 2.38s.991 1.218 1.785 1.615c.85.34 1.955.51 3.315.51.68 0 1.558-.057 2.635-.17 1.133-.17 1.983-.51 2.55-1.02v10.625c-1.417.51-2.89.85-4.42 1.02s-3.032.255-4.505.255c-2.154 0-4.137-.227-5.95-.68s-3.4-1.162-4.76-2.125c-1.36-1.02-2.437-2.323-3.23-3.91-.737-1.587-1.105-3.513-1.105-5.78V36.89h-8.16v-10.2h8.16V14.45h12.75v12.24h11.22v10.2zm6.649-10.2h12.75V68h-12.75V26.69zm-1.02-13.005c0-2.04.708-3.768 2.125-5.185 1.473-1.473 3.23-2.21 5.27-2.21s3.768.737 5.185 2.21c1.473 1.417 2.21 3.145 2.21 5.185s-.737 3.797-2.21 5.27c-1.417 1.417-3.145 2.125-5.185 2.125s-3.797-.708-5.27-2.125c-1.417-1.473-2.125-3.23-2.125-5.27zm50.895 26.35c-.623-.907-1.502-1.643-2.635-2.21-1.133-.623-2.352-.935-3.655-.935-3.23 0-5.752.963-7.565 2.89-1.757 1.927-2.635 4.448-2.635 7.565s.878 5.638 2.635 7.565c1.813 1.927 4.335 2.89 7.565 2.89 1.417 0 2.635-.312 3.655-.935s1.898-1.36 2.635-2.21l8.415 8.84a16.59 16.59 0 0 1-7.055 4.335c-2.663.793-5.213 1.19-7.65 1.19-3.173 0-6.177-.51-9.01-1.53-2.777-1.02-5.213-2.465-7.31-4.335-2.04-1.927-3.655-4.222-4.845-6.885s-1.785-5.638-1.785-8.925.595-6.262 1.785-8.925 2.805-4.93 4.845-6.8c2.097-1.927 4.533-3.4 7.31-4.42 2.833-1.02 5.837-1.53 9.01-1.53 2.437 0 4.987.425 7.65 1.275 2.72.793 5.072 2.21 7.055 4.25l-8.415 8.84zm38.966 22.78h-.17c-1.417 2.21-3.315 3.797-5.695 4.76-2.323.963-4.788 1.445-7.395 1.445-1.927 0-3.797-.283-5.61-.85-1.757-.51-3.315-1.303-4.675-2.38s-2.437-2.408-3.23-3.995-1.19-3.428-1.19-5.525c0-2.38.425-4.392 1.275-6.035a12.41 12.41 0 0 1 3.57-4.08c1.53-1.077 3.258-1.898 5.185-2.465 1.927-.623 3.91-1.077 5.95-1.36 2.097-.283 4.165-.453 6.205-.51l5.78-.085c0-2.267-.822-4.052-2.465-5.355-1.587-1.36-3.485-2.04-5.695-2.04-2.097 0-4.023.453-5.78 1.36-1.7.85-3.23 2.04-4.59 3.57l-6.8-6.97c2.38-2.21 5.157-3.853 8.33-4.93 3.173-1.133 6.46-1.7 9.86-1.7 3.74 0 6.8.482 9.18 1.445 2.437.907 4.363 2.267 5.78 4.08 1.473 1.813 2.493 4.052 3.06 6.715.567 2.607.85 5.638.85 9.095V68h-11.73v-5.185zm-3.145-12.92c-.963 0-2.182.057-3.655.17-1.417.057-2.805.283-4.165.68-1.303.397-2.437.992-3.4 1.785-.907.793-1.36 1.898-1.36 3.315 0 1.53.652 2.663 1.955 3.4s2.663 1.105 4.08 1.105c1.247 0 2.437-.17 3.57-.51 1.19-.34 2.238-.822 3.145-1.445a6.59 6.59 0 0 0 2.125-2.38c.567-.963.85-2.097.85-3.4v-2.72h-3.145zM260.912 3.74h12.75V68h-12.75V3.74zM4.12 89.82h20.06l13.855 39.27h.17l13.94-39.27H72.12V150H58.86v-46.155h-.17L42.88 150H32.765L17.55 103.845h-.17V150H4.12V89.82zm77.124 39.525c0-3.287.595-6.262 1.785-8.925s2.805-4.93 4.845-6.8c2.097-1.927 4.533-3.4 7.31-4.42 2.833-1.02 5.836-1.53 9.01-1.53s6.148.51 8.925 1.53c2.833 1.02 5.27 2.493 7.31 4.42 2.096 1.87 3.74 4.137 4.93 6.8s1.785 5.638 1.785 8.925-.595 6.262-1.785 8.925-2.834 4.958-4.93 6.885c-2.04 1.87-4.477 3.315-7.31 4.335-2.777 1.02-5.752 1.53-8.925 1.53s-6.177-.51-9.01-1.53c-2.777-1.02-5.213-2.465-7.31-4.335-2.04-1.927-3.655-4.222-4.845-6.885s-1.785-5.638-1.785-8.925zm12.75 0c0 3.117.878 5.638 2.635 7.565 1.813 1.927 4.335 2.89 7.565 2.89s5.723-.963 7.48-2.89c1.813-1.927 2.72-4.448 2.72-7.565s-.907-5.638-2.72-7.565c-1.757-1.927-4.25-2.89-7.48-2.89s-5.752.963-7.565 2.89c-1.757 1.927-2.635 4.448-2.635 7.565zm40.659-20.655h12.24v5.61h.17c.397-.793.964-1.587 1.7-2.38s1.615-1.502 2.635-2.125 2.182-1.133 3.485-1.53 2.72-.595 4.25-.595c2.89 0 5.44.595 7.65 1.785 2.267 1.19 3.967 3.06 5.1 5.61 1.474-2.663 3.259-4.562 5.355-5.695s4.675-1.7 7.735-1.7c2.777 0 5.1.482 6.97 1.445 1.927.907 3.429 2.182 4.505 3.825 1.134 1.587 1.927 3.485 2.38 5.695.51 2.153.765 4.477.765 6.97V150h-12.75v-24.055c0-1.927-.425-3.57-1.275-4.93-.793-1.417-2.238-2.125-4.335-2.125-1.473 0-2.72.255-3.74.765-.963.453-1.756 1.105-2.38 1.955-.566.85-.991 1.842-1.275 2.975-.226 1.133-.34 2.323-.34 3.57V150h-12.75v-21.845c0-.737-.028-1.643-.085-2.72s-.255-2.097-.595-3.06-.906-1.785-1.7-2.465c-.736-.68-1.841-1.02-3.315-1.02-1.643 0-2.975.312-3.995.935-1.02.567-1.813 1.36-2.38 2.38-.51.963-.85 2.068-1.02 3.315s-.255 2.55-.255 3.91V150h-12.75v-41.31zm113.06 34.17c-2.04 2.607-4.618 4.618-7.735 6.035s-6.346 2.125-9.69 2.125c-3.173 0-6.176-.51-9.01-1.53-2.776-1.02-5.213-2.465-7.31-4.335-2.04-1.927-3.655-4.222-4.845-6.885s-1.785-5.638-1.785-8.925.595-6.262 1.785-8.925 2.805-4.93 4.845-6.8c2.097-1.927 4.534-3.4 7.31-4.42 2.834-1.02 5.837-1.53 9.01-1.53 2.947 0 5.61.51 7.99 1.53 2.437 1.02 4.477 2.493 6.12 4.42 1.7 1.87 3.004 4.137 3.91 6.8s1.36 5.638 1.36 8.925v3.995h-29.58c.51 2.437 1.615 4.392 3.315 5.865 1.7 1.417 3.797 2.125 6.29 2.125 2.097 0 3.854-.453 5.27-1.36 1.474-.963 2.749-2.182 3.825-3.655l8.925 6.545zm-10.795-18.19c.057-2.153-.651-3.995-2.125-5.525s-3.371-2.295-5.695-2.295c-1.416 0-2.663.227-3.74.68s-2.011 1.048-2.805 1.785a7.9 7.9 0 0 0-1.785 2.465c-.396.907-.623 1.87-.68 2.89h16.83zm20.504-15.98h12.24v5.61h.17c.397-.793.963-1.587 1.7-2.38s1.615-1.502 2.635-2.125 2.182-1.133 3.485-1.53 2.72-.595 4.25-.595c3.23 0 5.837.51 7.82 1.53 1.983.963 3.513 2.323 4.59 4.08 1.133 1.757 1.898 3.825 2.295 6.205s.595 4.958.595 7.735V150h-12.75v-20.23a40.5 40.5 0 0 0-.17-3.655c-.057-1.303-.312-2.493-.765-3.57-.397-1.077-1.048-1.955-1.955-2.635-.85-.68-2.097-1.02-3.74-1.02s-2.975.312-3.995.935c-1.02.567-1.813 1.36-2.38 2.38-.51.963-.85 2.068-1.02 3.315s-.255 2.55-.255 3.91V150h-12.75v-41.31zm76.944 10.2h-11.22v13.77c0 1.133.056 2.182.17 3.145.113.907.368 1.7.765 2.38s.991 1.218 1.785 1.615c.85.34 1.955.51 3.315.51.68 0 1.558-.057 2.635-.17 1.133-.17 1.983-.51 2.55-1.02v10.625c-1.417.51-2.89.85-4.42 1.02s-3.032.255-4.505.255c-2.154 0-4.137-.227-5.95-.68s-3.4-1.162-4.76-2.125c-1.36-1.02-2.437-2.323-3.23-3.91-.737-1.587-1.105-3.513-1.105-5.78V118.89h-8.16v-10.2h8.16V96.45h12.75v12.24h11.22v10.2zm29.854 1.955c-1.87-2.323-4.335-3.485-7.395-3.485-1.077 0-2.125.255-3.145.765s-1.53 1.388-1.53 2.635c0 1.02.51 1.785 1.53 2.295 1.077.453 2.408.878 3.995 1.275a130.74 130.74 0 0 1 5.185 1.19c1.87.397 3.598 1.048 5.185 1.955 1.643.907 2.975 2.153 3.995 3.74 1.077 1.53 1.615 3.598 1.615 6.205 0 2.663-.595 4.873-1.785 6.63-1.133 1.7-2.607 3.088-4.42 4.165-1.813 1.02-3.853 1.728-6.12 2.125-2.267.453-4.505.68-6.715.68-2.89 0-5.808-.397-8.755-1.19-2.947-.85-5.44-2.323-7.48-4.42l7.735-8.585c1.19 1.473 2.493 2.607 3.91 3.4 1.473.737 3.173 1.105 5.1 1.105 1.473 0 2.805-.198 3.995-.595 1.19-.453 1.785-1.247 1.785-2.38 0-1.077-.538-1.87-1.615-2.38-1.02-.567-2.352-1.02-3.995-1.36-1.587-.397-3.315-.793-5.185-1.19-1.813-.453-3.542-1.105-5.185-1.955-1.587-.85-2.918-2.04-3.995-3.57-1.02-1.587-1.53-3.683-1.53-6.29 0-2.437.482-4.533 1.445-6.29 1.02-1.757 2.323-3.202 3.91-4.335 1.643-1.133 3.513-1.955 5.61-2.465a24.32 24.32 0 0 1 6.375-.85c2.72 0 5.468.397 8.245 1.19s5.128 2.21 7.055 4.25l-7.82 7.735z" fill="#180042"/></g><defs><clipPath id="A"><path fill="#fff" d="M0 0h420v154H0z"/></clipPath></defs></svg>
```


## static\images\example-home.png

```png
�PNG

   IHDR  �  �   h���  �PLTE����`/�0B`#>�:(�9/.-���210������0/.nlj���A@>xvs���432���������FECgfc987��}v';�8*����6`_\�M+��Ϫ���8�+8��๷�^][�7,UTR����~{{yv�5ZXV654���kjg~):�������o1>=<RQO�*9�z3��缺��04����J+IHF�8�7�22�þ���MLJ���XVT;:9�+8����4/�/5~|yCB@�4�-6�5�d/�Y-���qpm�9)�}3�].��~�h0��٭���5.�>(�f0����������.5ba_tsp�-7�q2���jhe�22KJI�7������ONL�-6�l1�5�30�������E*���{(:�;(�����������ó�����eca��䚘��������s2����C*\ZX�7�x2�ǻ����������21����[-��ߧ13�G+����:�9)�7,�����Ţ������5.�����������޺������/4������-6��ܻ|~��������ص41�4/��������S՘��ɻ�05�ľ����������i�U�V-�������ͯ���ﻟً��[0쮟�YD㜒�ƚ������½��j�ĸ�ʽ�f^�\X�������8*ܼ�ڭ�직�kq�c�ӻ�w�Y�uE�P9Ѥ��n�Zd�RU洭蒀ƅ��`c�hR�o�GP�G����liɒ�꞊�{ttpj�g[ȝ��ta�C�>@�@:����w�h;Ҵ��;H�8A�U�KG�H�I?�
J&  wIDATx����    �����                                                          `v�ߥa ��MGiц�c+JACA���锭��覓�������A�T�߷��q�                                                �����I  ���X����=_?�$ �F{�+��pcy��WU�윌o�E�������*����b��o-I�&�ř �%���v�~H\���Hx�ke��_C�{��[�4���K �[�Xw��֨�x����8��a����&i>ȎV�����E) �����}�w7/mDQ���gll�"�hCQ"J�T�҅袖�(R�X
m��B�ݴ�B��';�%����Thf2�����=���$�GN%N�c�w�,�2��J(�C�{
�
�yB1��Ka�s���k�����J}��2A������B�_9U��N�#pEjby(������)h�C^�ΰ���Uh'�<-#�!2^	�Y�j�R�B*y(��H|Xɠ�U8���F��>�|�˿5l6e�8�'�JS��ԟ��B�K����:��պ�T>Z���[.��6k{��U�"��W�̲�7���OR0��O���k��Kn���.�Xx��x��m�#���/���xd)!���ɚ��Z��-d��Ju=m��+\�c�:��> ������y���~o`���1�{�N�UN��l tUV��v��߲�yBo��A��8k;�;i, [0��!���CCdg���*�?�!D���?M��R��1?���j{1���m���Y!�Ǒ�6l�!IO�_Z�k+
�8����Hk�4Q������|w�Wr��Z�ˁf�*PN��ԗH��?�N�'���3D��%�/�)�-ID;6<�K�"��I�DW�F�?#���t��v}z��4�����x�Ѩ������zʟ�nO�{DAf�N�|I�Z����~<��瑥���_�V#�����#r$���N��,S �����o|�)��X�|w��J���(�8mByE
��s��GE�_!�)�h�(���A˄ED�h)�mB͕���~ާ�S���0x<�n���Z[M�o�����U�n�� 3q��-��͓������7D>]\,C�.:���b0��Bh�DٷЖ�^@k֬���gD��rL�x�����t5�-��������!�}�[k���M��./���p�\&���U��I
�������r��B�S�9h5�rJ�Մr���b�I��
P�k#�<zٓ��4����Sա���/�&����v��F��2���2q��2>�i����;��P�,���B�z��6�B�E�2�=�or��m��)
B�}�����l3���֤a�ޏ֭��������߰ʉ��g����K18V��%�P�[�Mh_Ia��c(Y�_!|)��"��EU8�ig6�DM(۞z��Q�'����tk�0x�i#������u�l�T<�]^�[��̱�2q���G�X �`8C���R�B�K��=#�B�H���?��$�ECG��G>���S�|�:�3�n0������*��n7���2q��� l�p<�t+��T���R�B�W9%N�2�>�����K��P�#�R�k��G.AyթI��ާ�>E�e�v�_�-� `��Y�2F�x�^�#!����*ZF��{�+-���ڂE�8�Y���E��ӳ�	�&���vﵧ�h(��	�x����?�L<�@, [0�(UK�W�O�B���9>����LEЖit�H�!J�A�"������kR�,6:��l�F~��1_Z���I>�$���v�TFH˟�n��Z�d���+%M, [0���	:Hݯ��Q��=)�a�W����{�jC�Y�~��]��^Q�O zru��qA�\qk�8�H
]a-����h�ơ�ȵ�ZȲ l�t<#1h����C�y>�*�#��j��5�j1�R̒�Q��.]���J�˃��ܚ4�{ ��v�_�+S��-u�A��؂�xF�ѿ���}�b�MZ�zßخ��ۼ`_���}z�.u�<��(���}߯����7����Jf�`�㹼��d���b�MY����*:��Q��":ҵ4�V{��W�I�S������;��s2R��ݽ�W����t���u�`��I����[�jݖ�B���W15�/}�[⯫6vu<N��}J���zڴ�E���'>2b��\��c(+}��gb@��E	��������J���w׽��-�	�C�tm�<>Š̰ l�|<��2w4G�Od�4�E����#Ǔ��#����Ni9I-K���d��{��|��E�CgQH�w�$��X ���U+��}�{�~+��,��B��Qz�Z�W�Lу�3	!����|�M(Qz�c&!�bPJPRs�#оӃ�3	!������ÿ[�1fB!f]���0�1�B10���O��{���B�e׎i � �vjBj�	
ڽ��lL�f���{n?�I�;��q�Gl���(�ys��F�&                                                        ����     ��k#�����������������������������������������������������������
{p      ���������������������������������������������������������������     ��6�������������������������������������������������������������    @��������������������������������������������������������������*���     ��k#�����������������������������������������������������������
{p      ���������������������������������������������������������������     ��6�������������������������������������������������������������    @��������������������������������������������������������������*��1K[Q��w:��`�kqȐ�-�R[�N�R�[&�"�C��E5����G��������+��|��;��                                      fV�W� ��:L� �.��7F��W�w�gt]~,G�񊊍Qy<�D�:��r�QD~��uw����Ask���봴�߼;�2G]V+w������ 7�j�s;=n���M��Zs/��i�ai>�kw�E^��������<��4N&ֿ��v'6�� #�ݟ��ZQ��a����Z��&����? ����3-���g��1���n�D����׹�[��Gn^�t>���ydD��e�~~�� ����jeW��1%A��H0)!= ���I�����1�Ukk�c�I/���s��.?v߰N�����9��23������RN�RQP��Gcl��?R���upm�)p'��[Pǟ�+�>|q4��B�����"���RY�>������1gG�+
V�16��a�#0�C�p�E���\���+�U���ɹ�Gc�=�}��u
��Pd���"Ӡ��|��?�aQ�V�h���U�T�7>��=�����翖G{���c7)t#����'�/~�τ8����)lʨx4�X�I ]	����Qd�n�X�;��@�X��UASv��
��+v��Ϙ��]�?�2
����9
�U���߯
h{��΢iQɣ1ƚr.�_=W� �\�f�J�B8�~�R��+��w�k^���l6<��$�tƘkw)t%���4$N\�	M�������J�FSP��<�&G�;c̥z]y��[	�k�\��H
.V	�߯8�6��Ș�'�����x��B��5�+�U�7��?d�*��J8�~����3�G��d$��΀6�`4a/j��pX��\��g��p����o��ġJ�+P�`e�La��w���v5~���8>���m���+��ǟ1�1f�m� D��ي�g�ҁ��� O�����M������W�?c���)�c���a���_Yύ!j,��2��p���o��������-�e��G�,�ɬ�O[C׽�Fsw�/���r��|�ޒCRtfɣy�Xig~�.=�xP�c>p��>*g�_����=��T�����8���d ۲���kmhhh �Calj<fc+�-��o͈�o�K3��l��mj�'E�!SM�6��5��W�+G�^A����-�?vmr3���<ռl�*�}��KYl�xZ��J���3��X`�`�H��s��(�ӗ�+���$"n��Ьj��*��n�`M��F,��4�7p �kk���6�>��ޔx�1r���&7�u���7��&�{������S��
���	��:���s��p�uxo�B߲�k,�6�1{�ohsy�U���hi���ޔxH���u��3h�Cvp:�x9Ɣ�	�*������B����pdD�G����|�ӻ�1�aDÖ������#UƎ�o�hZ���#&��	�$�3;����آ�T�η
���A��1���,
m��8�L4�lJ��^(�������Yl�\�� ��Ɩׇ �g��&�i���W�hހ���l{���S7��4�v]���#y�����\�IboB8$����G��Y>�?�i1����)b�N/��M��[C�
����T@��	��<�Պ�6<�a[�{Ih[������j�2��BK���ߤ���mRCӌ�]��):$���̒G��<'����th�m����c�j�H�^�^��K7.��ٟy㯗�'�־N]N���w:H2vw�g7��xcksur�8��L4���*:t-cS�v���]xtO_��j�^�/��FS`ߛ�k;��������_jf�y�s4��8�˲��A��1���
h��Q�؅˵	��
"-�L�)�Md���3K�0Z�K����������\\����#�?	��[�[5�s�Q}��ZB�CӔ=B�h��&���K�i@bo�I�/5��Ѽ��v��A���t9~"��uI�;�H�A�q�h�����Y�m��(��Pfs�&6��+8�Na��А�S'���a�:tݣ(��jowZ���E�ٵ��E��:i�<�����_jf�y���@fp:�u9�|c��/cXCu��sD�� t�f��q��D��дjyv�m��g�Cl.zC�M`�Fӱ�?��;�����_jf�y�;��@fp:�e9��~�z
���?�Q���U|Bu�L����8��D"�14��t�te4	j��04��#����_;�^y4� $�&Ȑ$�R3;��������#��頶�T|q�
�R�P�cIT7��(���Q��R����7�����Dm|jfq��?]%4�t V�!�E�&؍���A����3�����_jf�y�aKystZd�����o8cB�(0/��T6����R����l)������ǿP�b��>te�}�mtC��M3vhJ{�8X��CI�M�!I�%fv:���ߏ`��W��N���;�3������-*�/I����G�=�7q����޽���aWI&j�Ԥ !��`�J�d�B��E��*�B�qS���E)�����~�N.�̼��fp���Ui�g��˿h'��*�+eX���7�(���[<��S��P��}�f�H��N/m��d]���!��|(?N��V H��ix6�7��W�QǇ,�Qڑ���"�����.L��vC���� �Euu��͎/m��d�����C��	�YQ�kr%��F=�F�6��N��>�C���_E[������N*�p���C!<�pʅ���qʅ�klf/m��O��N2��?�·��«��0�N�_���_�>�����+��	�M��%���o��&�]7�W0���.�_����w��N��Ȣ��\Mh}�2����p>T}�^��´+�O���&�et/6�>�~I���������{u8��M���p�QRs1���֏��f���{��߱�ɢ��=T}����+�<���E��#VA��%��`���'�x�Y�pNvKk�ֲ0-?C�ٽ��̓���a���^jM6\{��8!<�\$6\�߆��'���aU��}�����G���J�}������<�����:�tO�a���g�~r��7"��'�Ȣ������"�=T}��\��*�/���@6K��2�{yw+��{�?�_�����M�Y�zC�S�˥�Kg�~�f���������\`$�G*��c���P����١����{�D�_&��bҼ������}]�&疘���`��(Y� ���J�F3���֏��f���o.´�����0����aVc8�t�UQ����'
�t!�����50�6�>��
�/n�e�uI
�S��<�]6*��{�?��E��4r��)�C��XCx�����m9�m���"v�^���������|f�4�'�?�����/�7Ӛ�p>�'_�Ox�6�yw�oL��|鴹~�c?��
�{b��_�@)�[��)v����kR��a�8V���?�ǿ���5�G}*]�9���BYl!��i�ڭ̶�1��o�Ϯщ������Y?���h�OQ�� z_��L����`���C�q�������݌�1���Y�?�N�Lo��`Z�_�AR�ga3!���n�-�}/BdJ�e�v�?��mm�6�;���)m	arM���VN��4��=�k,��~}L�F����֏��f���o>E��j:3�6٩u�}�|�L��Q4-hgC��£������b�3�/�P8�!��q�/s���_��/�a����/�r��>\0ZߚPv�?�0`7�n	!�h��'+��η��+�h�}f�@�~�Fa5������߼n�e�"S�0`�(ؠ�� Z
�7�x-��|��8!�j\ٽ��%o��
��	��RQ��P<����?��*��`�9��� �L�j�?��`WX���ib�5�ռ�~��7��_sV;� ����t�����pi��_�F��a��d��+#*��1�c��*D֚.�;������O+֮Fjd*;~IN~�Fa5�������;ˢ�X�� rtge��p>T}��unԵ�_���_���@�aS���@R�k�3�1�1J� �}6�TB'�k��<<���??G��+	�)�_&�����D��5���n���{;y �[��5^���It�|��ӽ��"�D����C��	�ag���K���n�(�a� ����ωL���l%D���Od��n��v|lu끣��xx�c>J�F���f�	{v{o�ësǤv�;��o�nM�<m8?NO{�u����\�+`F���j��ӿq8�Kd#�LI���0��P��B<�>�����_ sN��٪�g��K*øY���
3���y-�AcP�x9ބ�s��p�1��;���xN��Cw���s�_S���>��7#��0�P��B<�(�]�����?=��6N]�З1��h��5���4L��WøY��¥�7�����U�Oh/�>mK�E�J���E�o���Bx�݈�(y.��`��/�'ѷ��_4�lH̑Ec�2��0n����B���	0Sԏ�Q�o^�/��h9�ҽ�D�H�|j7�M�P(��������_<��E����G�hie���K�a�,�7��|��ދ��=�w���_<^�w��B�@���0n�PI�������5i��!�O�t���#?��BxQt*[��{�U�Jm#��E�/�S4`���w���Bx�T��Aǿ����I��zj��ǩ���N0DM��p�3N��x}Y�!0����(-���R/��?�Z�_=6�����w?/m�aǟ�C~�ǚ�:iAGkY&����+B{Z��XR�ˊ0��k��a��"�r:���M۴����y�x���!yNɡ����pby���H�/uTz4�$�m�4��au��/�m�Oș�"����  ��f{)��EL�x���,fݬ.:"B� �вloC��:���O:�[c�?Ȣ5rd��6�
�  ���>*���Rmn��O����r\�v�o��� ���q���x����&�im��ۿ�o�Y�_Gj!�  $�չ%����V�"�IƟ��Ɵ�,�_�`��F�e��&�i�'?   ��U����������1v��ن>��mꖰ�4�w푝0�  RRs�_&�t+��|@aA��O�_�(7��d;��i�b�L�n��8�  �Ӓd3���ǃ���`�b[�7��_g��t��:��1�R*/M�RmG�B(N7�O�Dj��  Y�`�?��}��ywJW>%���%��b+�&��E���]+�]-���  ��-�{S����S���te6�3;��0��������(d��  $6�e���{�����ş*��n��*�@�������   �_S�ڬy����fع�)]y�6B3���"�c�?  Ȯ��SU����=�?�����9�U�V=PZ(�9�  ��ȱ+��!��^ǟ�<��#��Ń �  �0T�������Z�:�Z�G3�o�?  �Ԋ���j{2Z<��I�  �h'O�I>��4�u�����5�а؁��  $���qd�W�������b��#��5�  dglFxd�#�/��r�a�
/;Y'��*Z�� �; x��єW����Y�>�t��N('t�f���)���d$�d ��;g�������r�v���v�w��D�?<���; ܇nMq���{D��q�������t[�5��ע���L�U�v� dQ��硦f�D��?��ȸ���܎��O����L���["B�A���M1�'2N 29fu�/�^7�^!&��1�I%Z
�ȥN鯘�DCT{1�z��${�JeZ���]���]ۉ	N���������d���E��L��������xV�����k��I�uF�{�|`s>:���`��_]�[{S  �k�N 2
�3���eM���j�ęA�Т�f��s�z|��n��j��Q�p>EU# 9�B�  $�SbS|.+�d   �|�Tj;�h�5R������<��f�~Z��8�?��l6ƺ�*�4�V4b�`�S�d*�$��ZkE<����R��7�ٝ��d2�f����}n��yʷZ� ����������ɴ�G�  �?�-��  �����[  ���0p  ��na  @�����-  �Q���w��@��g�˂��?�㙯��]�4�|�T�Nj79}��ԟ������c��*U����W���B��X�^�  ���C,�o���XX�H%j�?�N����̱�{R}L�G�aNm����b�$�F仼�s�o���Acfh�FDքx(E��d�uT�a�;I�p�(_+Tn��<�.�f#�����,7�w�w���,E�L_ ��n���F�	��YqJ����ƆLn2�$�]8>�.�o1�a���d�5F��(��;�j�y�*$�O�_G�cg����J{!�]N*�w��쨯��/RΜ�ka  ����i�T�O��X��?��w5�{m��*sC�[�G_s��Q%���yo�S�����3Ȉp���V6��z��X�Y`!�.�� Ub��FƢ\�3��������-����-4k�vNZv���ܴ�%���\7����R�W�9����PN�|��.OE97�|�)3���
�dn���"��Mua�  �cl�߮�Qؑ��&[n�6��gH�Q;�C!���4(|:aǽ���*�Wc4z������N���Cwۙ��CL���;�gDd�ބ��*�לL��*�u�|��1�7�_L:ݍD�ܬ��95Yw�x{P"�Xn�^⸟��/2�}/  ���8�r��;�<�W��~��I���0Յ#2�)�+ٖ'�"K�������3��s݁��y��bi�@��8׽��t�}��6��Q]u�m#~�z�H�;7�W� U�ܴ�e�m���Y����S�-�6?R���f�Q�t�b[������_2�;�#�:��^'�!��:5�d��ܧ���}��|��na�  �j]>�N(�CԒX`a���1S1r	߱0Ksl��H�����U�?���唸��i��j2�Y���,,�)7'�}��z���  �.eN�5K�w�����Y��k=Fݽa�>i��Ĳy�[J�5'�;�w�g[�\&X� )���1�>�z�H�?  H_Y�L�?���'���o��b+k�Y�b����*g�U�9Y��?P_&E.�,�p7kQ�
�
>�z�H�?  H	&�L���Er����u��W��I��:R�+�ל����%�����%�:]x��KRLɇ|��v��� �`+����_N�,/.�GԦ���u��C���^����_`a�"Ŏ�����1�ݰ��6v���V��ݕ��/R�0� `��-n\�_S��Vq6�6�i���^�?��?��KR(�WN�+�S�f�/?��=i�Y���"�#�  ��{�����v[��=���^�'}�wu�6XR⯜�W��䶢�|��/��O�Sp��X�_� ���L�������z���/g���d�⿩V:���<��,������X� �<K����M)a���	}q� �O���*�H�'<Uzϵ������-��?  4\�l�&W�.f���vRhte���=3�����l�%UF������D� ��;�e����/�%�?e�	)����;�)�Y��9��E"�  ����B.����,�2�r>�N+k�B����Iq(/��Ʈ"�  �Յ�o���J��,6���*����/7.S�W#,d~o��਍����Q�go��ar������'�)�>#��^��F�/�6�6!�O8��,+�ኅ��X�E��0����ysnr����+?G撻ſ�%��~�o�YX������O�}
������_p��(GV�<��?V��/��E��i����UX=R��e�&5}a�3i(y.�����僝�3��b��5e����:�?m��� �\��񚏱�/��� ?ٻ��Ģ0����A����	S���2�B-	t�����L3��$C��!hc����O�/c�=�{�5X���
�O=g�R|���_ c��lu�Z�x�~�{��� dI�xH^�!wE�4`/��m=���=����UfS��l������4�++ܕ�2V~��x���]"#>2��ߣ�MG/*����T�]٤���1��CƊ���.�y�\0�]��gğRܗ��O܅�{��<���_$�Ԍq�-X�.G2�=nKc�iya�7�ź�ȈK�&ݦ�{j�����j���遽��b8��5��CF�徘�����#='�t���¶���w�^iJ�G�r��N��{-��^����,I�d�c�W�a��fNӣ[��e�C�C�9V��Mϋ?�~�a᥺���w�^i��XP�Y+�H��Y���J$�d�&ߌ�Ol�{���#�>?�%�x�hq�OU�l3�����2�t�]"s��l��tS��ڙձҋ��0���b}y�[C�a,��1_��_��ѣRxp � ����Fqv�ϖݮx W�HzfF�?O����t�3��`������'���;kOqĄJ{��Uh��(�u�屆/r��� o�,�����͟�����#� m���߹VNxI 9$�~w*/��s�_HB���q�[)ww���Y��W�0�U/�d��+_B�A �sG� `�X�d
��x-�`� ��r��ē�?-MO�7�Wi��� ���2m�b��,�^�w L>y�S�������Ø��]���=w\ L>y�s>�S�!��!�0^�(NI垻~ L>K풞<#��!�0V�3�i�u�;�	 ������g�7��sO�N.���������2^m���?[��kz�(���qO� `�X��VF�����<��>��'H 0\,W��j���!�`Z�6ʂ�g���bAN�a�%�T|2�/���ؕ�
+� ���VX%D�Y%�A��xJ�� ����� SC+�yVi�>��G���?���v"Z�h�	 ��V��*<L)����� �  �@/�t�*y��f��o �  c������<L9A��  I��VY$-���Bω�E��������������ɻ����;UI��wtv�V8�Tߝ/���f��2��(�������|�yv��Nw*������=T�v�/�g*���  `�iƟ"�rKZX��r�o�ֶl<D9��#�������g�(?�,��H�[v�A-�m.���F��x���gnC�NG�C~j>��#�w��.���o��ږ�C3���/ �ɦ���5f�a�����Ck�5��f�M=KA�!�[eo~�E�$�.�XS$䥑B�槾����qR9fsB$���m��s0�%  �X��o
j��"D����$�a��c+��s�۪�]�X��D�fwx��]�l�K֖�~��_�r�#V�!  �P��'!j�$�b�u�+zX-�����G�m�@P�M�:K��ä��/�xe�����2��
�� 0�F����|�"�y���t��h�L��8�7�zk��vO��+,�\�LĿ���B���o��' �;���8�k&~��"��a) ����)��da��&Vf������r��4ES�M��8�$�:�䔤��Ud�9�9vN��������dq�vAǷo��8�w��Z�)�%�&�?R���_�:�0�L_T��pTe*�yިGN����@u}:,���P����qǹ!�����@KG����������(T7� f�����h���3��XPCR�W��
�q��Q��
&�}��[H�1�$`Y�7�CQ�'@�7j	0���4�-,DW�3��S�!��B�&����qnH)�H[�b٢�>��o �Q��h=��Ѐ�����y��2��8��8��c���:	)��⟏����IO��P�I� gl��/���	���񟁺M���8�sK����p4)���⟄��_e ڌ��i��x4�������H����sǹ'��i�-6)��H�GY�,�F��(`���Fy�tP�-A.ǿ��q�[R�?D!%�)�	H	5�]��.�A]���(/"&=��%vP�q���z�Nkx�9��ܕr��b�v�س���Yl���.���M��f 2g��.�A�r5��P�%l���ϦY�n0o?�q��R����;O����v[ߥ���dy. ��' +���oIq1������Q���h�?ُ�8�})��T>$��i�(���EE�Iii�L��?E���,�A��S�^�
��0�D'"Ò�;�&߸��cw���!#"��
$k�1������sǹ=�����V#��e5�<����%�
�uevb$�{\_�M�CŨܒ�*��G���'�DY���i�A@��X}�Yo"s`��NV�L�AA�����dDL��纄����܏�d;p\����*�	@���\��F&9%��,��y�����F%��s�]�2f���HK��}*/���G���?�L��4�5��\�:Mq��;FπҺ#-��^]�dI`���Jp#���5y��*��/��C:R��&�	�x�r��3���vo��gul�ʋ	
|5�3�F"-d��6J;������(#ʵ�����X���i�=�m>�����>�������u�7C���L̙|��"qݘZ�g*ng?��l �az�g�L����d38JI@9�#��*d��z�s@�P��ӌ�w8�D��k�_ �P�+����W�8n�������u��I�/n��?�k�nK-����b��X��bQ���{���ڛs:2��Q�&���HKӌ!PV�������yxx��1I���_ �_�Rn�y��~��sݗZ�!��s���,�/D�`+Ȳ�"k�V�Wh7���q b8X������Hۥ�6�w +ȥ�/EV�F�NY�8���l���%R�m�o�7�$������qݕj�{+��GJ��@��#�
�F c�� L>@�EV?��E��
vo�����kc�F�� �md�w)��(g�)�u�2��"�<�9=.0�i�?���K�Kᆷc[������qݕj���'�f&���?��L�HE���P@ 0<ue����뇴BP������2B]�?x�,˚�#�&�.Q&l�/��o�(��y����p��z2�����R�?��~t�x����xd�E�MȸE} �u����F:2RT���(�EZ�z�-!��E�ۮ�?y�^����������E=2�;O��'����%6�E�pû6�m��G0r�I=�l3��a��42�@�2�h�q����#c1�#�����2R�1µ��Gu1}f '�7�\?�?��n��_O�Onm�'����W����i����m���u���DG"��H��Uc�JB��� ��1Ka�ڱͤ��k7/�����dd<�Z�Ǣ���,�:-�=���#����~�[UY���H����U�J�m�?�p\���A�w�"m���{"c>�ȒI�� �c2�<��bU��1I��֠a3�`��ſȣ��^�*P2Nt�lJ[�=�-np���z���s;���\���X���d�`$��Q�̓�����0��k8���%�U�.[����F�'.�N��K����g��;M�+.�^}�m���q7��g!-5$)+�?
!�&i��0E�����?]�T5�3AƊ��?�A������G�7�g����2����q7�����-�̿�4�4�Y̠�iު�����.�P����	���:�, �3��(R������[����Z�ʷV���49��T]�n��:P�TS{�����TTV��5d���U5u{�vV���/�W�T6��{�����Ҫ�O���)��*�s�yw��=��ؾ�q���=Ц�����m}k�z���{�����G�o9JW�?5C�a�4�L�'�I� ��� otB��'
u������/�1cT|�v������ϴ*sә�ω�=�[������8X.���	�j��/�{X��ɩSGOM<�m�h�5_}7w�ܻD�}Uc���>�)ѣ��b_��˧L�DL9p�G�ʔ��3�?@s��/�,ܶl��r������~0���5���_i Q�+����T��Z5�ݞO�n��a����FQ��Q�F��{�|����y���gw�����p����� r�=t�:~�f;X��]���[����ǀ�(]�,Ԕd,�qȈ6�#�O��v����T���8AF�'�������/%���L͙?���{�����N��K���ilӉ��d�/��_�h��]hZD�/�߾�T)�6'��Ws��\�]���}��,�tj�Sӥ��RGU���l�S�L�W�o������ZW����I�Gx��ٔ����O�_,��ߛ6O\�<(y�=�����H����?����?j_T�y��{D���f!�m���ï=���h�ߴ�_����q8�"᷹���;��Nɲe%%$�$�6���?G���}Q�%�X�Ð�TXMH��>��&�k�7��ǯR"�Sۋ��t�ϟ\㏊?��޵M��꯵ş�Ϙ���� ���n�葿K�����W#�����v��S%�%�Fׂ��v��s	��]mj��f�ӝ��T��K�hڦi��]����)��{Aх���M�-/>I�O�O�m!�l�c�}j�����v��~�O�>����'~s��[����:�+/���yR�I��ۢLҿ��H�m����o?'��u�PpD�&o��w���A���A���}�!�s����k.����,?tQ�!5���� �%P������1���d�28��G'"-a��y�E��_����V,��AhS�� �#v��R&��8���a�֙�I�NS�u��]������3��o������G�ݦl*OM�iA�/�"�JZ�f�������6�*��F'�T��E��A�X��x *��x��o�E@�4*X�պ�1mi�"�J�-MZ��	����������cޛ�9��v�:����.���������8a��?B�����B�gh��	��+)�PD�f,e������wt?�$^��e���z�ʟ� �l��C��i��G����7��L�)Gȟ����B�wZ�� ���t��Q��dǷ0s�bbb�������Q���T" q�8ɿG���2:Na$���� L��~��Ƈ����Y�G/������V/ʟ�_0F����������x�NS?�����a�W?�n��";݈�����~J	ذ\ȿ
:"?����������/���
���/XcQ���ϭ��G������Ƀ��O�?����t?����6e0�/�������9��������8/�7��b ����q=���C�����c�o���I� 3�>1ɍ���z!IA���x�����x �^ܟٜ�?��Le�ӂ�)�ᓹ_ڟ���������.�o�ޮ�������x�A��>y�%�~L��1v9�ٲv?X�;[P$����>Q��k��R����ⓙ/�
@�j���/���ԒPk�Hx��_��@�H���\�L�շ����������.�W��/����zU/�����\\��?�ב� J�OWL��-j�b����?�V�54r<1��U��7/O�������?���g2�i�>��<������5�70v��.ِ��^0����׎!��_��~�/B-�3�7Ԗ����oP	����/ݏ�u�����PU����y��-`�_����Ψ[& ,������)�ɟs!g�2�#+����f��y� �������N�����D�"��ݟ�%D&�';�#M�5}��J���A2�V��(f���&���E�¢�!
b(�� r^���-������*�� �OP�gU����?����?��> {���b*��n� 1?��� ɸ�,��� 8����oG�i���ڟڹ��ܸ��@^y!q�xe6�$��ѷoA���< Vd�f� 8�,�OA�S�4�:��Az��/4�����v�J��I�o͡��}��.�E������V�ڻ�Q�~��_/����~���92C'�D���w�ͅk����ϏV�0�"�z��Ew~��L�E�cS�� :�?��nyg����F�?�tr�}�7���_�Y�8�I����4�c/��U������߈cy�_P[�rq��`+����F`d�����C1p|���w���%����GBD����{o�|`,G�S�8�G����b���W��WTP�3���e�D�����`^-�3� 	d�G�u�������'��K�i,�k�n�ܚJFeS��ת���6}�~d���n�-����Pe��m:����G��k�/�߭���;pq!�Z�p��������t֤d.t���Y8�ؔB�y]M;1A��p����p��S$š�15��/��*�ٕM-v�P�~n����y�_c�F��A�����z����u:g��]�=���B*����D�d�_�^-Ĳ�2,�/����?O�ǿZ�(��	hF������M+Q���2Q�/J�-@(Z�ڧ�	pԵ��1�K����?[��̿659 Xh����`�j������=����I?.���?Uq�����b&i2Xr�H�̛]%��=l��{�K&�Q0�Y˟�\��ߗZ�a<�T2�nV���\��fW7��?�Hq/A6p@�?��A	w��K��cڲ��^0�(*
^��_H����J|`��O�۽�cc9˽`A�ق|p���	ҋ@�������;��/(����3���D��~5�x�_�5�8���y��@%rnņ?��xc����ڻ7o��54�Tr�����j�nǟ����gK����'�y�����3	�b+�"��`�zW�˺P��@|=̌O��t���\�&΢��������U���X����3A�U��=��h~FPo��Һ����i d���i��@��K(T��`���r�O98�U��x+D�_�� ����@Y�܏4�;hn�C>�k����T����N������;�}�������e�/�ۄ��r�������!�򇞊-wA��w>W.e(����73�L�#�?Kf�-��w���3�$�5�̴���X�_������-�!?L����#p�I��� � ��~A��s��%���~����z���c�y��I���x��+ v��GȌ��������N�p����ɿBɊ�9?6��gq�a��,��C���,��%e�E��O��c|4lX��ۿtl�꿕4�?���c��>.��^��"��������	8�����b�;G#�i�����')V<�u�>��S��i)�b,��DZw�S<����t���]o�ty�a�/�n��B��~F& b���$��@�~-�#z��G)�-���`���G�uKE�����^˵� �|�6�o,��K:��ט&h���@��M�U������"����'��Q m�r���w���~��B�5,�s�o=Mڢ��b�ϯ�Yƭ~�1�����5���^Y'n�_..���߹�4#z�#o)����z<|�b��.��b橩�g�{[�|��+�
��zF�T�~�@8[uu�����nϡ
2�~�F��BF��~��6�G�#�߽���i��p���v6bv?����!?����n����Q�J���-�D�]�@p���3�n��\�qW�Q�H����$���ݏ�.*��m�ǃџ��l�h�\��W�[�(�#�9?���J���w1k��%�Ĭ���?@�!�Qo���3�����8ņ�Ѕ�~V�}��s�"xk|��ߛ�X���↴���F+������*&R��F��q�f<
�h��Ɉ?�!?���c��\�����vɟR���<��j��Kg�N��t��$i��7��s?^�V��_�������x9��C����-�=�Z���X�_	��K���f�� 5���4�Ӣ?=ׇ��Ƚ~��.�m��O�/��Y�)G��K�g���(��83\������oVlH�J�����f�ڥ�O��i@2~��k�8�����~���������/ɸ뼇��<aP��~o2\�������J�j��_�?������Y��R~������K���/f�7���oW?r�F�v-�ϣ���l�������~���E4w>����%����1%X#��y��[.�f�������3d���g��g+���_��X���9�-��9�o�*���wq �����eА����$�(�]*8�f1b�;C{�ϟu�ۧŅ�s�N��EQ��7(>����}s~|��<47A1s����C�����7���.��篗���Lcßש�	Ɔ?Dw���)6ٟ�v��4cv�vY�gkx����v�~���GX>v���ݹ�UgK��_֯��#?���o�?��R�+����"��dߟl���7u�I�������>�~�/Q���t̹b�����]����a�b�(�V��`z�<],�����7�s�r4�r�3��N�#$!�����e���w����[�V9m���V?��� {6e>Ġ�BY��P7�����/5l�˳��u\���=�-s�T�V� �w��J.�����f��+5���F�"����d��,3j������pa�8��6��~� Y?Xc���]"%���X2��>�}�]-��D���*�����z�	���N�3�+��`�1�i;�����M��䀿��Q;��m��F��*Jfke��`Ú�ěW� �Or}�(��@�S��}���F�؋�M�3gξ"�T	�W�@c�<�'?�?�����t?�%h,y����KA�.U�� ��P�q��l����Gr�?h�2X�����&b)��7Z�K^KQ����@��>V�'q~g�V�D���b)y���9�$�F�4�/XŚ��^�A����k����_$�z!P���P 4v�fL*�ќ����겴׊�_ A��_(߾elU8�'ݏT��+m�2eR��<��O6�i�o;��(�_t���[����ԾH��_+?��am9������Ֆ��������~�Ko����Gn��Du��)��?�U,�	Q�_2t�5I_�1 �1%Z�����"���JTtw����7�\�-����ؖ�-����/��q���^�A/,.���?�a�����^��o���a����R����	��啚�Ul�� �O�)u�)?!���{>8Q%�?���`E^~yW?2e�
 �tn�cyP�@�az��0D\�G�`���_�\��-m�x��ɾK������h�~ʟ�0W�A��}��i��B��\��:��>��]�����R�^�Ȁ��ݟ
ǂ��s�q�й���OIPp��E �� �OT��<V�؆۟�g���nx�_n�#l4���O�-�/����W����^�&!:���^�d��~�\�������2�O��Ģ +�q�%D���l��./�آK��צ��OI�����QO��8�9��<Q���/N�37��������v?I3S?y��L>���\��^}��#���)?��\?5c�s��wr�����- '�1�S��H_w��ř���EN?U�[��(���pl�<OD��������L��GY�W�%l��C��B�c�#5QA�^�?�o�	V�_���,�S���/�-��2�K6��	c�뷋)?��Ś?���+���&I����,�����.�[� T����
���?�
�`O���g�ǋ�?ݯ�B�r/�S�����������2�K�
�S����5����	O������_�������V�q�6����Ո��L��٦��E�����&'b'��p�Z�Σ��I�Ǌ��{�9������#����J4�����x�R7|އ��)�n�랶-���p�N�/d��f��S���R�P�q�S؈O�%Ϗ�G�p�#�> �I������w,�?>�{�i��K����g������F��+|���c�_R� �˿�T��ؔ�a|Ne�q��~���_}|�A�_�����@w��%rb/�d�Ĵ�+8��(B�|8v���Ȉ::_�pnD�)J��9\L�$d��S��:H!ĝ9jj?�o�!���,+�;l�C����'Zʟ�_�_�Q�!H�� J� ����^�_o�M�wt#�}��˩����e����
�����9�3�RQč͗�Q�\�\��~������[���ׂ����d����:u�W���r�?O�;M�{5��'�#�O��>g�B���R j��9eP�%�� �)������N��?|���G��
}=�b ��B�x_�~	JPR�J�ܓ��wb�豗?��T�G���b������5I��p�?�~�~(�.܏�S|a���)?u*pJd��,��p_�.pƿ�?W?q���~��b�G���ܟ�P��C~t�i�����m��L��w�0N���G����{aD�?We�'�#}9;����`�W�.]����ɜ�����$N鐄���X�?��R�Y# b#�3.�}��DV�������W�y�!�[6����_��s����O���*���/	�����S
��q���'��>/���q�o�
�`ý���O���xwik���)t��"�hD���Yݟ���v@����%��㏷��������8����^�'�������y�T�J�o��O9 �Oq�\��_��1"
�;q���? Ǡ����#7� b&H��Q���W:����bB�hq�����+��|I����1w�S�����������c��?c�b���/�?��[���U;���'r�8��}��q�?^�T?�B~����Fn��ݿ%���!�'���QQ��N��u�#k��鐟=`�Wv����ߖR�����Zeݟ��֝�����%�������U� �W\��8�E��$)��(���'�Vl=s*��) ��	�q�����s�h'�K�|��Dʙ����7Aa$%�`jO��O�w���5��hu�b�x�Т�*��Vm��~��nd/�]�	X�ˬ���^��J���U�١l�z>ڿ!��B�����Lo_P(�Y�ޒR�k������U�^��R������n(B�3ʁ���B�J��,�������/����KA�#��Y�I�7�ăƯ��w����m���S��p̏�����9������>&f�%'�1�X3���3�#�7_��Xpꨁި?���LZ��'pqip��g�Y��ϝ����>&N��c�1U��Dw� �P0�nshr\������9��Q��x�C�У~�����O��J�8s��[ܽ*��k�nغ�t�
&��Kvԅjw�l^����.�-(-����`W�*��<_�h�hٷ���)�[�.�%��]���U��\�N%�yI랶=eMK��_S��5w��ܝM�9M���׭�vj\\4f����	"@%��y�9� ~��w]�_�$�~k�󡫈O>����A=�f���δ;��� ��2��#�f��K�P>pqq��3��7��~5�����k���ݜ�٬c�o�}iDj���C��D��vsڴ�=�����������{p      ��������������������������������������������������������������®���Eq ֤�?HB�,����B� KC�d�B��>B��C4���d��&y��Dre��~�`IG>�~H�              �ظ�v�����to7 h�]�_��n ʹ��z ��� ���:I �f#P/�� h����O �I���u h��������I �)��[̚? Zi'P�W ��R�E,����F �$�h�@%�@k*	 Z+PI��Z�J���
+dY6
S���ӟ��Pɲ��f�`����8U�]ù�ŀ�|Oa23�a�Ί�����ҙeWn���xڻU��"���+�N�t�_��§�PXK�7qs�Fg�t�w�B�3����
��8���e(�����X����aq|;N��Z:��z2���[N~U\���������	���ii�h�2�Ӄ��?\�ߖ��E�y��^��U,��h:�n>��6�'ge�����=ª��O�[���x�2��Ư�wO�Wqֳ�X^��h+��W��4��w���H�����~�w>-�$a�ӯM:&v4fADA%1ʈ�ʒ����у#� N.#��Ǎ23#��Źz��</~Y�o2�a��J����ө���M=�.ߪJ��ux�NuE��PD���b���7G�z�cA"��3�oZuJ��?���6��GG�I�7��o�M8�����S.�k�fΩ�q���j���F��q����?7�I��i֐��s��?P�����_���矘��G���}�oA���%��^�6�¨gН㟉g���N�ǿ��~�9E�[�N��/I����h~<z�A�y���+֐�p�a�m̅���RU���d�����l>:f�E��&h�r�R����ɋ�ʟ���A,������������u�"�E��}-��-螐q�<~Tu�
���BB��O,�>�M�?���MW�~
��؁[�p\Y]�|�R�y�:F�ҬS0��C�G���/�� "-��G�ND��P���x}��n���(�����hڈd��=ڛ���H���:d�f_�_vy�޴��+&�XG�� ��L�B��Q�B�5��W�\��y�����R"�g7&����\A���6.l� I�斊)�?�蕂��Ar7Z�M��r�����M`[Ѩ_x8��/�<�MoZ�1Vj*e¦[&�0�H��U�w�zNC!�=:�j��V#g�}�*�����]�`�>�sS��o�1�s����0챟T��1�ٍ-��=x�S����ǩ�G��iV�ڊ���;��������*��G���ެ�K 2�}T
��D屪�wl�ߧ'L�<���M�g�9j�g��[`{>R+��=�����a'��a<
��X��rȔ������Inh�k4��W C���F!���T������F��)�}�K��{��<U���-qӃ˿7Cv�c�7E�{��O3��������T�c������v�cت���4���� �Յ	��䯍y��3���:�rƮh^���8��5���e��O�a僝e��寰�?`��b�#��S��:�wS�\f������������_��¡�=�k�C?���\�&�qk�+�+�+��Qᛊ���ϲ�����hډ�����QC�b�y�i�ߛ�� x�r��I�X5�/R�:g�����?7�!�*P`�^�7�]h�j>�_���YH�\�\]pbɆz��BM��e��cZ�M;�ɟ����
"6m�[���+��c�aʤ���A��]n����3[���-��$0�v=�>�߃�����M�$Z�M;����pO>��ć���v{��R������G�91�r� �y��uͳN�P�\y�޴�3 毪B�8O$���J��p8s_�'f�>�W��ꢖ�F�N���ۈ-�F��������e���ǌ����E`��O]�Fg��U��2e�(�B\�Q�9��˸����I�Y��&�>��_��O����|�`䍴��x>�K]Oo-��7�w�{�����6]����m�V�}������jn����:Y>���K��&��7`��uF�\~�&�|ڽ��b�W�-��H�Ou-�6�+�f޳�ҳ
�ͦ��l�cuӢ--�����'��u&]gb���3�*E&0��kԟ����H&�ef���53�h���&��"��ͦJ�Y�`fG���	e.e���*Y$��4�����W����n�(�7K�R���
�R��ˢ����������}S��R�"�;����� J�L��PY���*��k��U���$ N��[�S���V��ѭq�9C�GZ�M;!��>\�F�E03���Y����zɿɤ����
���$|�|O�)���E�eV!����\��NF��r��pʹ�|�?���(�a[����ʵ�(�G�h �����]����];�e�8A�����f�V�p�d@̗��5�vB"������^T7�2�_F�,Z\Vr��D"�(��C�9�"����O�!���&�ޔ�UH�u�O�.��3[�s=����\:0��b뼯b� ���ë� J�1��x�����������A�9���w�?bc��vH��u"F�\�¢yf�J�Ґ˟(�N�bRo�N����	wG��_�9��I�$o�{�M[!��c�*nUg��;��ē&
kR���x
F���?ɋ�ì-Ƿ�*IK�*�J��d�,?.������gN�d�P�_g5��$(7"\� ����x�������p���*��L���P�Y.��H��)�gr"�q� ��xٍY��7R Λ���X�����.��..��J����}�/�V�{�X�z�?�������a�Cw�����*��ƛ���z	�u�Eըf�$V�Ŕ_�1^O;MN�T�
IKڪ�J���[F���f������S��M�ŭ{�2&��Ǭ�C��Dؕ$���0��D�G���]Ul/��?]X���5J���W\�{�����&v���h��?�q����h�k4
�R�i�\����@v�y�f\&��_�3���Ʉ͒_����#*��2�����UK�?��v���[/��	���?E��;���o��T:�x��`]"��#E��� �J�.�������,��14�A�_�i7d��Ż2�#f�#�:(�o��'��%a��
�l��1k ��%m�R�u�c��Y�d���@�߳���eD
�0A(
tW:�0A<�J�/�h)%���Hc���g������1�<�-��}����;�\��.����:�%B>�@��g�����UJ��]/�K���2�C�k ����Us�"@?�h���9["�`#%�� 1�X�y������01�:C#E�_�i_$�/��,^�G�-������ɿo�B2�+$-i��*�s5�|W������x%�����k_,H�p���������ǆ�?�(p�yo�)Z�M�"����+�+GQG�%��=&e�g/�0��_!iI[�TGR���w�?&M�˟g|P��N&�t|ʼ|0"�����;`���óT��#�0I���������Ѵ/���n�F{���TQ�;��������$��BҒ�j�v���ʝdܨ�+�d)��P�e�,�+0*����g�l$�wT9��U�O����Ygah�h�k4�K �����(�8������T������UK�)lfz�����������k�1�;��_������ J�?T��w~��9t�������Ѵ/�������1����#���=��_!iI[�Tɲ6N�ԍ��
�w2>�o�'�#Z�GVޗ�?�H�o<�.��鶭y&���`Rx�g�I)Z�M�L�9��ؿ�v�����w��=
"��

ӌb3���E!iI[�TC *�-T��}��?�x�7�ǧ��-O����$�2Ro�~���L���.�����?[����Q��)Z�M�L��KB,4HVnZ��TyD�?�X�D<6��L9��%m�R݆M�����*�ھ������|�w$Ro��;Ӟ�K�d��]H>���@�I���b&���Ϟ��
����H���hڗ`�g; ��V��TkZ��9���4�d��IZ�V-��x���˟�Q���G�l��U:�a.�q��R&� #5dQ,��Q�q�	X����I���ӻ�m�d�2����X��C�o��h4
ܧ���[��&��i�/7%���3�jX�`���X����m�R=���_V�?� ��Twz0I��nǥ�7n�3���Ԏ	"��䧭�wi�jYar����s�74��1�F���ʟM���ݻ4�q��Iŗ�HG��/(b����uҩN:X�I�cAmcE:I�.����?�K��%�44Z��g
!w}h��]cm�H���k�_SmIc��/}���_�r���2��n�7��9������մ� ����NU3�e���|q��@%%,,�!<�I��=u}X�ڑ�*򦏋�Ԉ�L��5��?��qGGyg��qc�D�Zk��K:�V϶�){�>��Y���Z���n]��Z	}��mKw��=�_���nw�X{�h=��s�Mǟ��<ݩˤD����+m5��,�Ez��~Bq*a�2�~8�'�;?w-�Y���/߉G�Ҕ�/��=zK?��q�ER��V.w���֧�t��d�t{|��2p������z�(�$f x�z� 0�*�X� �0��Nl� �4���`� `���ߍ �����?8�d? `(��a
  É���� �0�^*)F �󚪼��            xg    ��_AUUUUUUUUUUUUUUUUUUUUUUUUUUUUUa    ��_AUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU؃     ��FPUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU��    a�e���                �k @�� F� # ��? �� b� 1���@�� F� # ��? �� b� 1���@�� F� # ��? ����Ձ    � �A.�`F� 0# ��? �� f� 3������`F� 0# ��? �� f� 3������`F� 0# ��? �� f� 3������`F� 0# ��? �� f� 3�b�  @i��2(# ��? �� b� 1���@�� F� # ��? �� b� 1���@�� F� # ��? �� b� 1���@�� F� # �� R� 1���@��a�Ձ    � �A.� f� 3������`F� 0# ��? �� f� 3������`F� 0# ��? �� f� 3������`F� 0# ��? �� f� 3������`F� 0#b�    �[rI���`F� 0# ��? �� f� 3������`F� 0# ��? �� f� 3������`F� 0# ��? �� f� 3������`F� 0# ��? �� f�{uL   �0h��k���	  F� # ��? �� b� 1���@�� F� # ��? �� b� 1� @�� F� # ��? �� b� 1���@�� F� # ��? �� b� 1����W    ����$�? �� f� 3������`F� 0# ��? �� f� 3������`F� 0# ��? �� f� 3������`F� 0# ��? �� f� 3������ ��@    @��� �D3������`F� 0# ��? �� f� 3������`F� 0# ��? �� f� 3������`F� 0# ��? �� f� 3������`F� 0# ��? �W4  0���=!# �� R� 1���@�� F� # ��? �� b� 1���@�� F� # ��? �� b� 1���@�� F� # ��? �� b� 1���@���^    ��f� 3������`F� 0# ��? �� f� 3������`F� 0# ��? �� f� 3������`F� 0# ��? �� f� 3������`F� 0# ��  �aГ��<! 1���@�� F� # ��? �� b� 1���@�� F� # ��? �� b� 1���@�� � H�? �� b� 1���@�� F� # ��? ���^    ��`F� 0# ��? �� f� 3������`F� 0# ��? �� f� 3������`F� 0# ��? �� f� 3������`F� 0# ��? �� f� 3�'��@    @��� �D �� f� 3������`F� 0# ��? �� f� 3������`F� 0# ��? �� f� 3������`F� 0# ��? �� f� 3������`F��W   ��O}��D # ��? �� b� 1���@�� f                                           p��@     ���TUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU�=8    �o=�                                 p��{%���    IEND�B`�
```


## static\images\rss.svg

```svg
<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>RSS</title><path d="M19.199 24C19.199 13.467 10.533 4.8 0 4.8V0c13.165 0 24 10.835 24 24h-4.801zM3.291 17.415c1.814 0 3.293 1.479 3.293 3.295 0 1.813-1.485 3.29-3.301 3.29C1.47 24 0 22.526 0 20.71s1.475-3.294 3.291-3.295zM15.909 24h-4.665c0-6.169-5.075-11.245-11.244-11.245V8.09c8.727 0 15.909 7.184 15.909 15.91z"/></svg>
```


## static\favicon.png

```png
�PNG

   IHDR   �   �   �>a�   	pHYs     ��   sRGB ���   gAMA  ���a  �IDATx�]��y�z������ݡ6/Iv�8�p�c�`[�`ɑ�T^ J���VR�JI�+I��%U�-�����"B`�J��T"� rR)�Wpw�A�������t��=�gb��f>��1�=3��������r���E)�� 	GJ��#%@ �H	�p�H8R$)�� 	GJ��#%@ �H	�p�H8R$)�j$��\���!���1�˃�c�o�1����^�X���:��sQ�{?ט'@O�{qv� N칂˽��{Ϡ�*O�����|.�����8�8{�w�cb�Ddg7�iA+*l��	�qz_�w��ׄ��C�R�K!{����}��aY�X��6[���,n��Ov�*[�JØ!���y�>�w^�TzЂ}ᆂ�����5 pUH�+� �"e����oF����ՆJA��������8�=l�r���l��{�{�-H��Y����Z�#HP���mknG�pK�=/}eGw-] �����;V��D�!]�%`Y�J#J yL^��}<&����f�UT$��{��t��yK՗��i+�����*�-��0	 �q��Ie��0i�d�́k��Q�����x������w�1������U�����gT��9����#������yX�{6]�!"�3_݁��G󪅨��WP1� !�g?_Ļ���2L�Ƌ7�'P!X��q%��̬ǹyf������B"�S��.��gVo�����
*� �?�Z��8m�Z��o�b�*��@F<W���YQj�Z8W�#�E�_�!$
'�q����}{'\��-����0��?� U�T������[0�8��C�a����8a]��=�N�a�*��N�ox��8�ð���oq-�+�Ʃ��-Z�3�7�FeL�a�r�t�3��heģv��E�}���	�	���V��f���z]&���7�=zYN4 #��D�H�¥(kI�p����#y�U�!8���!��C9�,^�P�C�2V��Z��s�9ƕ��2B8������z��Q�H+7�B^qcD�)9H�T�ބ�o}�'A��$���0eF-k]^t1 ZB�h����<ftQ ����ȡ��T	��S%z��|�'�/�$����ꅨg���mkY�T6#l`��eW������s1˨�e(���'?w�3�p� g�ֿsS�����Ba��ո]���*��9@naS�>���x����۞[�H�9O����G?*��;3|0�j�� ���2\d�Xb�G]c���v��.c�o��;�C!b�۪_[��#���_'�{�_���"��~��^�A�1V�s"��k��d��0!�~�Zp�=Y�̭Ǩ��;��{/���p����FE��������!��;�_��Y-pN��Z��h�3���vО79�
��]���Ԍ����|���4t�7��
'����H�%�����࡟���7e�ǜ��S8��
 cj3���b/���i�z*~�7��:�s�k�kg���N��z'^8�9qճ���}Ӿz�
���x|_��k�g�����zO�|a�/%|�z����9���b4uM6OrMҩ_^�&ǅ/�D�음i��eX��8y��O�}#�WA�۾�	L�VcP"�eʪyh��m�8C��^�ϒ7`��Mp#L���������\s�����m�o��5��R�� 4 Wn[(O�6���Q G���O�s}�ykn��Q��|�g ܿ<4�`�tȸ>�Έ"�0���7M���/�Lo�q��}���͇qUWt)F�3����K���� �Ў�r�j��g 1UP���Z;y���!�^2#��0xrz�R��� ��aHT��� H��j�pf�0z���4�!��&[�P�j����]���+��9{��7���rE���C]@�
pѷȼ|9Z0������v<v&%A	8C���<^�ӫI^��
�z���׮��ˎ���
R�p� �-�r('^�a���/$C	�!����#��{=x��O����.�p*8{Q�s	W[��F�58���@��P/�yh�E�|w5`�o5�{��u�I�S��(��^���v�`��Vz>�� E]�Tޟ����'�/�tw?2�?9d��fL��5c0�hpju��<�p<sP�zu��B�2��2p���Y�T=Z�f�(�D�X2�KZA疇���:��������%�FR)�7��+��3�k�Ź�œp�}m��d2�*�#�����q�瑌�s1\�Ɵ���5�My� ��$��=/ �Y���fXс�&a,��?�P�m���Z�R�Pm Z>7�z�H�͖�L1�=�)�$u���L4w�����'	 l��-�Å��L�pb��b� Fj;�HL�B� )j�aD�������a4.��J��)b��`���Q; &?���'J;�M�R2M\,9���B:�܂��3Pip6`>{Q�?a�s�+�^��!�r%��9n������BC}����qdݿa��\Ipz�Ē/�q�+��J�=�̈$B�$X�9�d�A����3�R�s��c��K8���R����{��/��0�Q���a��8�v��:�R��@��k�E���%U��s��w|�_@�:*b��g�q���1�q1 �2a��,�����eS�%�<�"�v������ql�+9��˨�Is���/wf0��T�抡Q.j�+�*��J:-�R��	��t��{�Uq~�/��n�С�p5krR'�oU�S�VYF '3���h^Ƙ�E�ą�F���z~F�A�
�YS��o��O��ET��O}�
�V=��\�g�Y�
���F&��3�D��k��:A��_.{B�8T�i���z���x���4uʐ�I3Tl�ѶL���]��⦴ɓy�;8��mpc&]���>������4�R����G����H$^@���z	�R�M���U齜����>x\���0B�������{ �0��	���L +�d��i�h�
�a���=D�1�'�M�i�A��?F&[0&	@!��؜Cߞ���!��A�H\��C�.77�A"4��ه��yP��?��/_ı�.��_2?���,�#�,��@�n�j?�	�c�S�~�	-�(P��4����pzo���0����	,G#f#*V��.�hZ7���|���6N��������=9����z�8ѷ�30��@:�����C�i���N � �{���c8��$��@ƆSVX9����5�~�Hٻ�t�4���:,����~�0P��<*���p$�/vT*�ȡ3(7R�@�7v܅�ko��M[��AX�(�X�:�r#%�(���f�\;CF����2���F�
���(7R���p���HJ̈$F�	���D��K�(7R\>��C��/e33���_L�8hn��
�]����>�ٟs��t�0�^ژ,]�z"%�UB��C�rb��N�%�2�"�Ĺ� %�Ub\�X��Fsz��
#���;��-T~���Ս���1�g&���`�����ۻ��k�C��0J�b\�/���g�^9�O�����5
ڠ�@p"c�@8�2�5r��F]-�iÞMz[�O����7����ڦ���9���I{+:�	5%�U���н)�N�����?~r؟	t�!���r���P�8J�L洤_���	��ض��7��{P�m��F��g����kk��Vk����K�B�r14�@�X��W�,��R�7�ܶ�2Q��3�����~���kC��}�z�����K�5����4e5c	�_�z�+��$�����;P�֖kUC���?���"��A��rz�=��y�ZS���1�8(����Fg7��p�m��:� 5~<= Wk�J��u��=l��EL��n\X����G�������p�������o����>��T�X�Eh�ό3��E����� ���ž��v������J�Dx�w�6����0��L�������f;�Τ�z�������+�x��n9�/�&n0}}�?g��1IZ���X�k�F�j�Owf�Pg�uC |�8%0c�Utǐ�\�$��G��w�T3�X1f.���6=�&�P'��3փ�UJd.��"����
����E���
�#����q�=*$BcvF��p�[���.�u,�b����"Z~��N����W�ߨ������E�CB�L�XF����Kw7�@�[pXR�<�2��#�����Ǘ�%�� �ϷZ���A�R�-ǭ.A5r�Οk_}ԙ#+�B���D$*qӦ��ˌ_v+�j�e#���Ԫ>�ddTZX��}��G�:�N�6�q	�I�o��+c���IH���iм�N���`��<Z���:H��V�����L7�_Xv	D5S۷�J�y}�_g�ٮMqK�C�A9aT�m]��N�^6�N/�MWT��Q��K���A��HS��Eǭf����1e���܃h{���U�p��)��j<��2��t^FK՟�R�:����y,\v)�Dyf��5�7>1}���iYՅI\E�Gb��G�;��� =���{�o ��hО��20r��]F�N#��������dt���� #5ZW�G��.�gb+��ݗ}���֧~وPo��D�F���^A�l����Vb��@�l��A4S��y�_����<8]�S�/a�z1_>��K� ��{cH�����*��V���1�܍��޸B��'���������`�jw���'���=m�7���Bx�qq౎���<�T�Q�22K���u�9�h͟���?^��]m�8�:Xl)�/�n�V�p^rgc�?��c.���l��k�Y������q�Г�������<�|��F�#����- .ٓ�;��|�
1�"��J/7��w�S�OZЂ)+nĔ�7�RQ��~���}�ؿ}#��H���`%Zxl�0ks	zN��m�`�⩘�b:��ZQ����.���N�������]C�"������\����7Hl3�k������!�<�4q��y��?�i�<rb�G.O����e����Q����f0��f4Ι��v7R�]$*EL�'�N~8W����k�|[_dI"�A	G�84�H	�p�H8R$)�� 	GJ��#%@ �H	�p�H8R$)�� 	GJ��#%@ ��?3N'K<�P    IEND�B`�
```


## static\robots.txt

```txt
User-agent: *
Disallow:
```


## supabase\migrations\20240730010101_initial.sql

```sql
-- Create a table for public profiles
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  full_name text,
  company_name text,
  avatar_url text,
  website text
);
-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table profiles
  enable row level security;

create policy "Profiles are viewable by self." on profiles
  for select using (auth.uid() = id);

create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

-- Create Stripe Customer Table
-- One stripe customer per user (PK enforced)
-- Limit RLS policies -- mostly only server side access
create table stripe_customers (
  user_id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  stripe_customer_id text unique
);
alter table stripe_customers enable row level security;

-- Create a table for "Contact Us" form submissions
-- Limit RLS policies -- only server side access
create table contact_requests (
  id uuid primary key default gen_random_uuid(),
  updated_at timestamp with time zone,
  first_name text,
  last_name text,
  email text,
  phone text,
  company_name text,
  message_body text
);
alter table contact_requests enable row level security;

-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Set up Storage!
insert into storage.buckets (id, name)
  values ('avatars', 'avatars');

-- Set up access controls for storage.
-- See https://supabase.com/docs/guides/storage#policy-examples for more details.
create policy "Avatar images are publicly accessible." on storage.objects
  for select using (bucket_id = 'avatars');

create policy "Anyone can upload an avatar." on storage.objects
  for insert with check (bucket_id = 'avatars');
```


## supabase\migrations\20240731051052_add_unsubscribed_to_profiles.sql

```sql
ALTER TABLE profiles
ADD COLUMN IF NOT EXISTS unsubscribed boolean NOT NULL DEFAULT false;
```


## .env.example

```example
# Supabase settings
PUBLIC_SUPABASE_URL='https://REPLACE_ME.supabase.co'
PUBLIC_SUPABASE_ANON_KEY='REPLACE_ME'
PRIVATE_SUPABASE_SERVICE_ROLE='REPLACE_ME'

# Stripe settings
PRIVATE_STRIPE_API_KEY='REPLACE_ME'

# Optional - settings for email

# Email address admin messages will be sent to
# PRIVATE_ADMIN_EMAIL='your_email@example.com'
# Email address messages will be sent from
# PRIVATE_FROM_ADMIN_EMAIL='no_reply@example.com'
# Resend API key
# PRIVATE_RESEND_API_KEY='your_resend_api_key'
```


## .env.local

```local
# Supabase settings
PUBLIC_SUPABASE_URL='https://REPLACE_ME.supabase.co'
PUBLIC_SUPABASE_ANON_KEY='REPLACE_ME'
PRIVATE_SUPABASE_SERVICE_ROLE='REPLACE_ME'

# Stripe settings
PRIVATE_STRIPE_API_KEY='REPLACE_ME'

# Optional - settings for email

# Email address admin messages will be sent to
# PRIVATE_ADMIN_EMAIL='your_email@example.com'
# Email address messages will be sent from
# PRIVATE_FROM_ADMIN_EMAIL='no_reply@example.com'
# Resend API key
# PRIVATE_RESEND_API_KEY='your_resend_api_key'
```


## .eslintignore

```
.DS_Store
node_modules
/build
/.svelte-kit
/package
.env
.env.*
!.env.example

# Ignore files for PNPM, NPM and YARN
pnpm-lock.yaml
package-lock.json
yarn.lock
```


## .eslintrc.cjs

```cjs
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:svelte/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    extraFileExtensions: [".svelte"],
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: {
          // Specify a parser for each lang.
          ts: "@typescript-eslint/parser",
          js: "espree",
          typescript: "@typescript-eslint/parser",
        },
      },
    },
    {
      // Apply to all test files. Proper type checking in tests with mocks can be tedious and counterproductive.
      files: ["**/*.test.ts", "**/*.spec.ts"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  rules: {
    "no-undef": "off",
    // no-undef has been turned off because of this:
    // basically, it causes issues and TS does those checks so it's redundant
    // https://typescript-eslint.io/linting/troubleshooting#i-get-errors-from-the-no-undef-rule-about-global-variables-not-being-defined-even-though-there-are-no-typescript-errors
  },
}
```


## .gitignore

```
.DS_Store
node_modules
/build
/.svelte-kit
/package
.env
.env.*
!.env.example
vite.config.js.timestamp-*
vite.config.ts.timestamp-*
```


## .npmrc

```
engine-strict=true
resolution-mode=highest
```


## .prettierignore

```
**/.svelte-kit/
**/node_modules/
**/package-lock.json

# Don't format plaintext email templates, the new lines are important
src/lib/emails/*_text.svelte
src/lib/emails/*_text.hbs
```


## .prettierrc

```
{
  "plugins": ["prettier-plugin-svelte"],
  "useTabs": false,
  "tabWidth": 2,
  "semi": false,
  "overrides": [{ "files": "*.svelte", "options": { "parser": "svelte" } }]
}
```


## analytics_docs.md

```md
# Adding Analytics

Adding analytics to your SaaS Starter project is optional.

Since each analytics platform has different setup instructions, we've created a guide instead of adding it in code.

### PostHog

- Create a PostHog Account
- Install PostHog JS Library
  - Run `npm install posthog-js` in your terminal. This will add PostHog dependencies to your `package.json` and `package-lock.json`.
- Set Up PostHog
  - in `src/routes/+layout.svelte` add PostHog to the script section following the [Posthog Svelte Guide](https://posthog.com/docs/libraries/svelte#client-side-setup). Note: ensure you’re logged into PostHog so that the code includes your unique API key automatically.
- Test analytics
  - Click around and view a few pages on your site to generate some events. You can view these events in PostHog to ensure tracking is active.

### Google Analytics

Follow the [Google Analytics Guide](https://support.google.com/analytics/answer/9304153?hl=en) to add Google Analytics to your project.

The ideal place to add Google Analytics is in `src/routes/+layout.svelte`.
```


## checks.sh

```sh
#!/bin/sh

# error on first error
set -e

if ! command -v misspellx &> /dev/null
then
    echo "=== Skipping Spell Check ==="
    echo "Skip running spell check using 'misspell' as the tool is not installed."
    echo "Install it using the instructions here: https://github.com/client9/misspell"
    echo "Skipping this check now, but it may fail in CI.\n"
else
    echo "=== Running Spell Check ==="
    misspell -error ./src README.md
    echo "no spelling mistakes found\n"
fi

echo "=== Running Format Check With Prettier ==="
npm run format_check

echo "=== Running Linter ==="
npm run lint

echo "=== Running Svelte Check ===" 
npm run check

echo "=== Running Tests ==="
npm run test_run

echo "\n=== All Checks Pass ===\n"
```


## database_migration.sql

```sql
-- Create a table for public profiles
create table profiles (
  id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  full_name text,
  company_name text,
  avatar_url text,
  website text,
  unsubscribed boolean NOT NULL DEFAULT false
);
-- Set up Row Level Security (RLS)
-- See https://supabase.com/docs/guides/auth/row-level-security for more details.
alter table profiles
  enable row level security;

create policy "Profiles are viewable by self." on profiles
  for select using (auth.uid() = id);

create policy "Users can insert their own profile." on profiles
  for insert with check (auth.uid() = id);

create policy "Users can update own profile." on profiles
  for update using (auth.uid() = id);

-- Create Stripe Customer Table
-- One stripe customer per user (PK enforced)
-- Limit RLS policies -- mostly only server side access
create table stripe_customers (
  user_id uuid references auth.users on delete cascade not null primary key,
  updated_at timestamp with time zone,
  stripe_customer_id text unique
);
alter table stripe_customers enable row level security;

-- Create a table for "Contact Us" form submissions
-- Limit RLS policies -- only server side access
create table contact_requests (
  id uuid primary key default gen_random_uuid(),
  updated_at timestamp with time zone,
  first_name text,
  last_name text,
  email text,
  phone text,
  company_name text,
  message_body text
);
alter table contact_requests enable row level security;

-- This trigger automatically creates a profile entry when a new user signs up via Supabase Auth.
-- See https://supabase.com/docs/guides/auth/managing-user-data#using-triggers for more details.
create function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Set up Storage!
insert into storage.buckets (id, name)
  values ('avatars', 'avatars');

-- Set up access controls for storage.
-- See https://supabase.com/docs/guides/storage#policy-examples for more details.
create policy "Avatar images are publicly accessible." on storage.objects
  for select using (bucket_id = 'avatars');

create policy "Anyone can upload an avatar." on storage.objects
  for insert with check (bucket_id = 'avatars');
```


## email_docs.md

```md
# Email Setup

SaaS Starter includes email capabilities for sending emails to users, and admins.

There are three types of emails:

- Admin emails: sent to a static admin email address, useful for monitoring app activity like new signups and contact-us form submissions.
- User emails: sent to the user's email address. For example: a welcome email.
- Auth emails: verifing the user's email address and magic links. Auth emails are covered in the main README setup docs, and not covered here.

## Set Up Email

To enable email capabilities, set the following environment variables:

**Important**: The template includes a welcome email, which will be enabled once you set your Resend API key. You should customize the email to fit your brand and content or remove it **BEFORE** you enable the email with environment variables. See below.

- `PRIVATE_RESEND_API_KEY`: a https://resend.com API key. Note, you'll need to verify your 'from' domain with them before you can use their service.
- `PRIVATE_ADMIN_EMAIL`: the email address to which admin emails will be sent. If unset, admin emails will not be sent.
  - `PRIVATE_FROM_ADMIN_EMAIL`: the email address to use as the from address for admin emails (defaults to `PRIVATE_ADMIN_EMAIL` if not set).

## Customize Welcome Email

SaaS Starter includes a welcome email template that you can customize to fit your brand and content. The email is sent to the user's email address when create their profile.

To customize the email:

- edit the properties like company name, from email, and subject in the call to sendTemplatedEmail in src/routes/(admin)/account/api/+page.server.ts
- edit the plaintext email content in src/lib/emails/welcome_email_text.hbs
- edit the html email content in src/lib/emails/welcome_email_html.hbs - don't forget address and preheader text which won't render in a preview, but will in the client's email client.

**Note**: use triple braces for properties in plaintext emails, and double braces for html emails. See the [handlebars documentation](https://handlebarsjs.com/guide/expressions.html#html-escaping) for more information.

You can also delete the welcome email by removing the call to sendTemplatedEmail in src/routes/(admin)/account/api/+page.server.ts

## Adding Admin Emails

Anywhere you'd like to be notified of important events, you can sendan admin email.

Simply add a call to sendAdminEmail() in the appropriate place, passing a subject and body.

## Adding Additional User Emails

You can add more user emails. Create a template in src/lib/emails, using the welcome email as a guide. You should have both a plaintext and html version of the email (see welcome_email_text.hbs and welcome_email_html.hbs for examples), although it will work with just one.

When you want to send the email, call sendUserEmail() with the appropriate parameters, including the name of the email template.

You can also use sendTemplatedEmail() to send emails to any email address.
```


## LICENSE

```
MIT License

Copyright (c) 2023 Steve Cosman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```


## package-lock.json

```json
{
  "name": "cmsassstarter",
  "version": "0.0.1",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "cmsassstarter",
      "version": "0.0.1",
      "dependencies": {
        "@supabase/auth-ui-shared": "^0.1.8",
        "@supabase/auth-ui-svelte": "^0.2.9",
        "@supabase/ssr": "^0.5.2",
        "@supabase/supabase-js": "^2.45.2",
        "handlebars": "^4.7.8",
        "resend": "^3.5.0",
        "stripe": "^13.3.0"
      },
      "devDependencies": {
        "@sveltejs/adapter-auto": "^6.0.0",
        "@sveltejs/kit": "^2.21.1",
        "@sveltejs/vite-plugin-svelte": "^5.0.3",
        "@tailwindcss/postcss": "^4.0.9",
        "@tailwindcss/typography": "^0.5.13",
        "@types/glob": "^8.1.0",
        "@types/html-to-text": "^9.0.4",
        "@types/jsdom": "^21.1.7",
        "@typescript-eslint/eslint-plugin": "^6.20.0",
        "@typescript-eslint/parser": "^6.19.0",
        "daisyui": "^5.0.0",
        "eslint": "^8.28.0",
        "eslint-config-prettier": "^9.1.0",
        "eslint-plugin-svelte": "^2.45.1",
        "fuse.js": "^7.0.0",
        "glob": "^10.4.5",
        "html-to-text": "^9.0.5",
        "jsdom": "^24.1.1",
        "postcss": "^8.4.31",
        "prettier": "^3.1.0",
        "prettier-plugin-svelte": "^3.2.6",
        "super-sitemap": "^0.15.1",
        "svelte": "^5.0.0",
        "svelte-check": "^4.0.0",
        "tailwindcss": "^4.0.9",
        "typescript": "^5.5.0",
        "vite": "^6.3.5",
        "vitest": "^3.0.7"
      }
    },
    "node_modules/@alloc/quick-lru": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/@alloc/quick-lru/-/quick-lru-5.2.0.tgz",
      "integrity": "sha512-UrcABB+4bUrFABwbluTIBErXwvbsU/V7TZWfmbgJfbkwiBuziS9gxdODUyuiecfdGQ85jglMW6juS3+z5TsKLw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/@ampproject/remapping": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.3.0.tgz",
      "integrity": "sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==",
      "license": "Apache-2.0",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.25.0.tgz",
      "integrity": "sha512-O7vun9Sf8DFjH2UtqK8Ku3LkquL9SZL8OLY1T5NZkA34+wG3OQF7cl4Ql8vdNzM6fzBbYfLaiRLIOZ+2FOCgBQ==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.25.0.tgz",
      "integrity": "sha512-PTyWCYYiU0+1eJKmw21lWtC+d08JDZPQ5g+kFyxP0V+es6VPPSUhM6zk8iImp2jbV6GwjX4pap0JFbUQN65X1g==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.25.0.tgz",
      "integrity": "sha512-grvv8WncGjDSyUBjN9yHXNt+cq0snxXbDxy5pJtzMKGmmpPxeAmAhWxXI+01lU5rwZomDgD3kJwulEnhTRUd6g==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-x64": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/android-x64/-/android-x64-0.25.0.tgz",
      "integrity": "sha512-m/ix7SfKG5buCnxasr52+LI78SQ+wgdENi9CqyCXwjVR2X4Jkz+BpC3le3AoBPYTC9NHklwngVXvbJ9/Akhrfg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-arm64": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-arm64/-/darwin-arm64-0.25.0.tgz",
      "integrity": "sha512-mVwdUb5SRkPayVadIOI78K7aAnPamoeFR2bT5nszFUZ9P8UpK4ratOdYbZZXYSqPKMHfS1wdHCJk1P1EZpRdvw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/darwin-x64": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/darwin-x64/-/darwin-x64-0.25.0.tgz",
      "integrity": "sha512-DgDaYsPWFTS4S3nWpFcMn/33ZZwAAeAFKNHNa1QN0rI4pUjgqf0f7ONmXf6d22tqTY+H9FNdgeaAa+YIFUn2Rg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-arm64": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-arm64/-/freebsd-arm64-0.25.0.tgz",
      "integrity": "sha512-VN4ocxy6dxefN1MepBx/iD1dH5K8qNtNe227I0mnTRjry8tj5MRk4zprLEdG8WPyAPb93/e4pSgi1SoHdgOa4w==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/freebsd-x64": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/freebsd-x64/-/freebsd-x64-0.25.0.tgz",
      "integrity": "sha512-mrSgt7lCh07FY+hDD1TxiTyIHyttn6vnjesnPoVDNmDfOmggTLXRv8Id5fNZey1gl/V2dyVK1VXXqVsQIiAk+A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm/-/linux-arm-0.25.0.tgz",
      "integrity": "sha512-vkB3IYj2IDo3g9xX7HqhPYxVkNQe8qTK55fraQyTzTX/fxaDtXiEnavv9geOsonh2Fd2RMB+i5cbhu2zMNWJwg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-arm64": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-arm64/-/linux-arm64-0.25.0.tgz",
      "integrity": "sha512-9QAQjTWNDM/Vk2bgBl17yWuZxZNQIF0OUUuPZRKoDtqF2k4EtYbpyiG5/Dk7nqeK6kIJWPYldkOcBqjXjrUlmg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ia32": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ia32/-/linux-ia32-0.25.0.tgz",
      "integrity": "sha512-43ET5bHbphBegyeqLb7I1eYn2P/JYGNmzzdidq/w0T8E2SsYL1U6un2NFROFRg1JZLTzdCoRomg8Rvf9M6W6Gg==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-loong64": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-loong64/-/linux-loong64-0.25.0.tgz",
      "integrity": "sha512-fC95c/xyNFueMhClxJmeRIj2yrSMdDfmqJnyOY4ZqsALkDrrKJfIg5NTMSzVBr5YW1jf+l7/cndBfP3MSDpoHw==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-mips64el": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-mips64el/-/linux-mips64el-0.25.0.tgz",
      "integrity": "sha512-nkAMFju7KDW73T1DdH7glcyIptm95a7Le8irTQNO/qtkoyypZAnjchQgooFUDQhNAy4iu08N79W4T4pMBwhPwQ==",
      "cpu": [
        "mips64el"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-ppc64": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-ppc64/-/linux-ppc64-0.25.0.tgz",
      "integrity": "sha512-NhyOejdhRGS8Iwv+KKR2zTq2PpysF9XqY+Zk77vQHqNbo/PwZCzB5/h7VGuREZm1fixhs4Q/qWRSi5zmAiO4Fw==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-riscv64": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-riscv64/-/linux-riscv64-0.25.0.tgz",
      "integrity": "sha512-5S/rbP5OY+GHLC5qXp1y/Mx//e92L1YDqkiBbO9TQOvuFXM+iDqUNG5XopAnXoRH3FjIUDkeGcY1cgNvnXp/kA==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-s390x": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-s390x/-/linux-s390x-0.25.0.tgz",
      "integrity": "sha512-XM2BFsEBz0Fw37V0zU4CXfcfuACMrppsMFKdYY2WuTS3yi8O1nFOhil/xhKTmE1nPmVyvQJjJivgDT+xh8pXJA==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/linux-x64": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/linux-x64/-/linux-x64-0.25.0.tgz",
      "integrity": "sha512-9yl91rHw/cpwMCNytUDxwj2XjFpxML0y9HAOH9pNVQDpQrBxHy01Dx+vaMu0N1CKa/RzBD2hB4u//nfc+Sd3Cw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-arm64": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-arm64/-/netbsd-arm64-0.25.0.tgz",
      "integrity": "sha512-RuG4PSMPFfrkH6UwCAqBzauBWTygTvb1nxWasEJooGSJ/NwRw7b2HOwyRTQIU97Hq37l3npXoZGYMy3b3xYvPw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/netbsd-x64": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/netbsd-x64/-/netbsd-x64-0.25.0.tgz",
      "integrity": "sha512-jl+qisSB5jk01N5f7sPCsBENCOlPiS/xptD5yxOx2oqQfyourJwIKLRA2yqWdifj3owQZCL2sn6o08dBzZGQzA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "netbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-arm64": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-arm64/-/openbsd-arm64-0.25.0.tgz",
      "integrity": "sha512-21sUNbq2r84YE+SJDfaQRvdgznTD8Xc0oc3p3iW/a1EVWeNj/SdUCbm5U0itZPQYRuRTW20fPMWMpcrciH2EJw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/openbsd-x64": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/openbsd-x64/-/openbsd-x64-0.25.0.tgz",
      "integrity": "sha512-2gwwriSMPcCFRlPlKx3zLQhfN/2WjJ2NSlg5TKLQOJdV0mSxIcYNTMhk3H3ulL/cak+Xj0lY1Ym9ysDV1igceg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "openbsd"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/sunos-x64": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/sunos-x64/-/sunos-x64-0.25.0.tgz",
      "integrity": "sha512-bxI7ThgLzPrPz484/S9jLlvUAHYMzy6I0XiU1ZMeAEOBcS0VePBFxh1JjTQt3Xiat5b6Oh4x7UC7IwKQKIJRIg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "sunos"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-arm64": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-arm64/-/win32-arm64-0.25.0.tgz",
      "integrity": "sha512-ZUAc2YK6JW89xTbXvftxdnYy3m4iHIkDtK3CLce8wg8M2L+YZhIvO1DKpxrd0Yr59AeNNkTiic9YLf6FTtXWMw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-ia32": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-ia32/-/win32-ia32-0.25.0.tgz",
      "integrity": "sha512-eSNxISBu8XweVEWG31/JzjkIGbGIJN/TrRoiSVZwZ6pkC6VX4Im/WV2cz559/TXLcYbcrDN8JtKgd9DJVIo8GA==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/win32-x64": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/@esbuild/win32-x64/-/win32-x64-0.25.0.tgz",
      "integrity": "sha512-ZENoHJBxA20C2zFzh6AI4fT6RraMzjYw4xKWemRTRmRVtN9c5DcH9r/f2ihEkMjOW5eGgrwCslG/+Y/3bL+DHQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@eslint-community/eslint-utils": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/eslint-utils/-/eslint-utils-4.4.1.tgz",
      "integrity": "sha512-s3O3waFUrMV8P/XaF/+ZTp1X9XBZW1a4B97ZnjQF2KYWaFD2A8KyFBsrsfSjEmjn3RGWAIuvlneuZm3CUK3jbA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-visitor-keys": "^3.4.3"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      },
      "peerDependencies": {
        "eslint": "^6.0.0 || ^7.0.0 || >=8.0.0"
      }
    },
    "node_modules/@eslint-community/regexpp": {
      "version": "4.12.1",
      "resolved": "https://registry.npmjs.org/@eslint-community/regexpp/-/regexpp-4.12.1.tgz",
      "integrity": "sha512-CCZCDJuduB9OUkFkY2IgppNZMi2lBQgD2qzwXkEia16cge2pijY/aXi96CJMquDMn3nJdlPV1A5KrJEXwfLNzQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.0.0 || ^14.0.0 || >=16.0.0"
      }
    },
    "node_modules/@eslint/eslintrc": {
      "version": "2.1.4",
      "resolved": "https://registry.npmjs.org/@eslint/eslintrc/-/eslintrc-2.1.4.tgz",
      "integrity": "sha512-269Z39MS6wVJtsoUl10L60WdkhJVdPG24Q4eZTH3nnF6lpvSShEK3wQjDX9JRWAUPvPh7COouPpU9IrqaZFvtQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ajv": "^6.12.4",
        "debug": "^4.3.2",
        "espree": "^9.6.0",
        "globals": "^13.19.0",
        "ignore": "^5.2.0",
        "import-fresh": "^3.2.1",
        "js-yaml": "^4.1.0",
        "minimatch": "^3.1.2",
        "strip-json-comments": "^3.1.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/@eslint/eslintrc/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/@eslint/js": {
      "version": "8.57.1",
      "resolved": "https://registry.npmjs.org/@eslint/js/-/js-8.57.1.tgz",
      "integrity": "sha512-d9zaMRSTIKDLhctzH12MtXvJKSSUhaHcjV+2Z+GK+EEY7XKpP5yR4x+N3TAcHTcu963nIr+TMcCb4DBCYX1z6Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      }
    },
    "node_modules/@humanwhocodes/config-array": {
      "version": "0.13.0",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/config-array/-/config-array-0.13.0.tgz",
      "integrity": "sha512-DZLEEqFWQFiyK6h5YIeynKx7JlvCYWL0cImfSRXZ9l4Sg2efkFGTuFf6vzXjK1cq6IYkU+Eg/JizXw+TD2vRNw==",
      "deprecated": "Use @eslint/config-array instead",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@humanwhocodes/object-schema": "^2.0.3",
        "debug": "^4.3.1",
        "minimatch": "^3.0.5"
      },
      "engines": {
        "node": ">=10.10.0"
      }
    },
    "node_modules/@humanwhocodes/config-array/node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/@humanwhocodes/config-array/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/@humanwhocodes/module-importer": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/module-importer/-/module-importer-1.0.1.tgz",
      "integrity": "sha512-bxveV4V8v5Yb4ncFTT3rPSgZBOpCkjfK0y4oVVVJwIuDVBRMDXrPyXRL988i5ap9m9bnyEEjWfm5WkBmtffLfA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.22"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/nzakas"
      }
    },
    "node_modules/@humanwhocodes/object-schema": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/@humanwhocodes/object-schema/-/object-schema-2.0.3.tgz",
      "integrity": "sha512-93zYdMES/c1D69yZiKDBj0V24vqNzB/koF26KPaagAfd3P/4gUlh3Dys5ogAK+Exi9QyzlD8x/08Zt7wIKcDcA==",
      "deprecated": "Use @eslint/object-schema instead",
      "dev": true,
      "license": "BSD-3-Clause"
    },
    "node_modules/@isaacs/cliui": {
      "version": "8.0.2",
      "resolved": "https://registry.npmjs.org/@isaacs/cliui/-/cliui-8.0.2.tgz",
      "integrity": "sha512-O8jcjabXaleOG9DQ0+ARXWZBTfnP4WNAqzuiJK7ll44AmxGKv/J2M4TPjxjY3znBCfvBXFzucm1twdyFybFqEA==",
      "license": "ISC",
      "dependencies": {
        "string-width": "^5.1.2",
        "string-width-cjs": "npm:string-width@^4.2.0",
        "strip-ansi": "^7.0.1",
        "strip-ansi-cjs": "npm:strip-ansi@^6.0.1",
        "wrap-ansi": "^8.1.0",
        "wrap-ansi-cjs": "npm:wrap-ansi@^7.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/ansi-regex": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz",
      "integrity": "sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/@isaacs/cliui/node_modules/strip-ansi": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
      "integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/@jridgewell/gen-mapping": {
      "version": "0.3.8",
      "resolved": "https://registry.npmjs.org/@jridgewell/gen-mapping/-/gen-mapping-0.3.8.tgz",
      "integrity": "sha512-imAbBGkb+ebQyxKgzv5Hu2nmROxoDOXHh80evxdoXNOrvAnVx7zimzc1Oo5h9RlfV4vPXaE2iM5pOFbvOCClWA==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/set-array": "^1.2.1",
        "@jridgewell/sourcemap-codec": "^1.4.10",
        "@jridgewell/trace-mapping": "^0.3.24"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/resolve-uri": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/@jridgewell/resolve-uri/-/resolve-uri-3.1.2.tgz",
      "integrity": "sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==",
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/set-array": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@jridgewell/set-array/-/set-array-1.2.1.tgz",
      "integrity": "sha512-R8gLRTZeyp03ymzP/6Lil/28tGeGEzhx1q2k703KGWRAI1VdvPIXdG70VJc2pAMw3NA6JKL5hhFu1sJX0Mnn/A==",
      "license": "MIT",
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@jridgewell/sourcemap-codec": {
      "version": "1.5.0",
      "resolved": "https://registry.npmjs.org/@jridgewell/sourcemap-codec/-/sourcemap-codec-1.5.0.tgz",
      "integrity": "sha512-gv3ZRaISU3fjPAgNsriBRqGWQL6quFx04YMPW/zD8XMLsU32mhCCbfbO6KZFLjvYpCZ8zyDEgqsgf+PwPaM7GQ==",
      "license": "MIT"
    },
    "node_modules/@jridgewell/trace-mapping": {
      "version": "0.3.25",
      "resolved": "https://registry.npmjs.org/@jridgewell/trace-mapping/-/trace-mapping-0.3.25.tgz",
      "integrity": "sha512-vNk6aEwybGtawWmy/PzwnGDOjCkLWSD2wqvjGGAgOAwCGWySYXfYoxt00IJkTF+8Lb57DwOb3Aa0o9CApepiYQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/resolve-uri": "^3.1.0",
        "@jridgewell/sourcemap-codec": "^1.4.14"
      }
    },
    "node_modules/@nodelib/fs.scandir": {
      "version": "2.1.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.scandir/-/fs.scandir-2.1.5.tgz",
      "integrity": "sha512-vq24Bq3ym5HEQm2NKCr3yXDwjc7vTsEThRDnkp2DK9p1uqLR+DHurm/NOTo0KG7HYHU7eppKZj3MyqYuMBf62g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "2.0.5",
        "run-parallel": "^1.1.9"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.stat": {
      "version": "2.0.5",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.stat/-/fs.stat-2.0.5.tgz",
      "integrity": "sha512-RkhPPp2zrqDAQA/2jNhnztcPAlv64XdhIp7a7454A5ovI7Bukxgt7MX7udwAu3zg1DcpPU0rz3VV1SeaqvY4+A==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@nodelib/fs.walk": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@nodelib/fs.walk/-/fs.walk-1.2.8.tgz",
      "integrity": "sha512-oGB+UxlgWcgQkgwo8GcEGwemoTFt3FIO9ababBmaGwXIoBKZ+GTy0pP185beGg7Llih/NSHSV2XAs1lnznocSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.scandir": "2.1.5",
        "fastq": "^1.6.0"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/@one-ini/wasm": {
      "version": "0.1.1",
      "resolved": "https://registry.npmjs.org/@one-ini/wasm/-/wasm-0.1.1.tgz",
      "integrity": "sha512-XuySG1E38YScSJoMlqovLru4KTUNSjgVTIjyh7qMX6aNN5HY5Ct5LhRJdxO79JtTzKfzV/bnWpz+zquYrISsvw==",
      "license": "MIT"
    },
    "node_modules/@pkgjs/parseargs": {
      "version": "0.11.0",
      "resolved": "https://registry.npmjs.org/@pkgjs/parseargs/-/parseargs-0.11.0.tgz",
      "integrity": "sha512-+1VkjdD0QBLPodGrJUeqarH8VAIvQODIbwh9XpP5Syisf7YoQgsJKPNFoqqLQlu+VQ/tVSshMR6loPMn8U+dPg==",
      "license": "MIT",
      "optional": true,
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/@polka/url": {
      "version": "1.0.0-next.28",
      "resolved": "https://registry.npmjs.org/@polka/url/-/url-1.0.0-next.28.tgz",
      "integrity": "sha512-8LduaNlMZGwdZ6qWrKlfa+2M4gahzFkprZiAt2TF8uS0qQgBizKXpXURqvTJ4WtmupWxaLqjRb2UCTe72mu+Aw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@react-email/render": {
      "version": "0.0.16",
      "resolved": "https://registry.npmjs.org/@react-email/render/-/render-0.0.16.tgz",
      "integrity": "sha512-wDaMy27xAq1cJHtSFptp0DTKPuV2GYhloqia95ub/DH9Dea1aWYsbdM918MOc/b/HvVS3w1z8DWzfAk13bGStQ==",
      "license": "MIT",
      "dependencies": {
        "html-to-text": "9.0.5",
        "js-beautify": "^1.14.11",
        "react-promise-suspense": "0.3.4"
      },
      "engines": {
        "node": ">=18.0.0"
      },
      "peerDependencies": {
        "react": "^18.2.0",
        "react-dom": "^18.2.0"
      }
    },
    "node_modules/@rollup/rollup-android-arm-eabi": {
      "version": "4.34.9",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm-eabi/-/rollup-android-arm-eabi-4.34.9.tgz",
      "integrity": "sha512-qZdlImWXur0CFakn2BJ2znJOdqYZKiedEPEVNTBrpfPjc/YuTGcaYZcdmNFTkUj3DU0ZM/AElcM8Ybww3xVLzA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-android-arm64": {
      "version": "4.34.9",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-android-arm64/-/rollup-android-arm64-4.34.9.tgz",
      "integrity": "sha512-4KW7P53h6HtJf5Y608T1ISKvNIYLWRKMvfnG0c44M6In4DQVU58HZFEVhWINDZKp7FZps98G3gxwC1sb0wXUUg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ]
    },
    "node_modules/@rollup/rollup-darwin-arm64": {
      "version": "4.34.9",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-arm64/-/rollup-darwin-arm64-4.34.9.tgz",
      "integrity": "sha512-0CY3/K54slrzLDjOA7TOjN1NuLKERBgk9nY5V34mhmuu673YNb+7ghaDUs6N0ujXR7fz5XaS5Aa6d2TNxZd0OQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-darwin-x64": {
      "version": "4.34.9",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-darwin-x64/-/rollup-darwin-x64-4.34.9.tgz",
      "integrity": "sha512-eOojSEAi/acnsJVYRxnMkPFqcxSMFfrw7r2iD9Q32SGkb/Q9FpUY1UlAu1DH9T7j++gZ0lHjnm4OyH2vCI7l7Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-arm64": {
      "version": "4.34.9",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-arm64/-/rollup-freebsd-arm64-4.34.9.tgz",
      "integrity": "sha512-2lzjQPJbN5UnHm7bHIUKFMulGTQwdvOkouJDpPysJS+QFBGDJqcfh+CxxtG23Ik/9tEvnebQiylYoazFMAgrYw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-freebsd-x64": {
      "version": "4.34.9",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-freebsd-x64/-/rollup-freebsd-x64-4.34.9.tgz",
      "integrity": "sha512-SLl0hi2Ah2H7xQYd6Qaiu01kFPzQ+hqvdYSoOtHYg/zCIFs6t8sV95kaoqjzjFwuYQLtOI0RZre/Ke0nPaQV+g==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-gnueabihf": {
      "version": "4.34.9",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-gnueabihf/-/rollup-linux-arm-gnueabihf-4.34.9.tgz",
      "integrity": "sha512-88I+D3TeKItrw+Y/2ud4Tw0+3CxQ2kLgu3QvrogZ0OfkmX/DEppehus7L3TS2Q4lpB+hYyxhkQiYPJ6Mf5/dPg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm-musleabihf": {
      "version": "4.34.9",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm-musleabihf/-/rollup-linux-arm-musleabihf-4.34.9.tgz",
      "integrity": "sha512-3qyfWljSFHi9zH0KgtEPG4cBXHDFhwD8kwg6xLfHQ0IWuH9crp005GfoUUh/6w9/FWGBwEHg3lxK1iHRN1MFlA==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-gnu": {
      "version": "4.34.9",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-gnu/-/rollup-linux-arm64-gnu-4.34.9.tgz",
      "integrity": "sha512-6TZjPHjKZUQKmVKMUowF3ewHxctrRR09eYyvT5eFv8w/fXarEra83A2mHTVJLA5xU91aCNOUnM+DWFMSbQ0Nxw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-arm64-musl": {
      "version": "4.34.9",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-arm64-musl/-/rollup-linux-arm64-musl-4.34.9.tgz",
      "integrity": "sha512-LD2fytxZJZ6xzOKnMbIpgzFOuIKlxVOpiMAXawsAZ2mHBPEYOnLRK5TTEsID6z4eM23DuO88X0Tq1mErHMVq0A==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-loongarch64-gnu": {
      "version": "4.34.9",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-loongarch64-gnu/-/rollup-linux-loongarch64-gnu-4.34.9.tgz",
      "integrity": "sha512-dRAgTfDsn0TE0HI6cmo13hemKpVHOEyeciGtvlBTkpx/F65kTvShtY/EVyZEIfxFkV5JJTuQ9tP5HGBS0hfxIg==",
      "cpu": [
        "loong64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-powerpc64le-gnu": {
      "version": "4.34.9",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-powerpc64le-gnu/-/rollup-linux-powerpc64le-gnu-4.34.9.tgz",
      "integrity": "sha512-PHcNOAEhkoMSQtMf+rJofwisZqaU8iQ8EaSps58f5HYll9EAY5BSErCZ8qBDMVbq88h4UxaNPlbrKqfWP8RfJA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-riscv64-gnu": {
      "version": "4.34.9",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-riscv64-gnu/-/rollup-linux-riscv64-gnu-4.34.9.tgz",
      "integrity": "sha512-Z2i0Uy5G96KBYKjeQFKbbsB54xFOL5/y1P5wNBsbXB8yE+At3oh0DVMjQVzCJRJSfReiB2tX8T6HUFZ2k8iaKg==",
      "cpu": [
        "riscv64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-s390x-gnu": {
      "version": "4.34.9",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-s390x-gnu/-/rollup-linux-s390x-gnu-4.34.9.tgz",
      "integrity": "sha512-U+5SwTMoeYXoDzJX5dhDTxRltSrIax8KWwfaaYcynuJw8mT33W7oOgz0a+AaXtGuvhzTr2tVKh5UO8GVANTxyQ==",
      "cpu": [
        "s390x"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-gnu": {
      "version": "4.34.9",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-gnu/-/rollup-linux-x64-gnu-4.34.9.tgz",
      "integrity": "sha512-FwBHNSOjUTQLP4MG7y6rR6qbGw4MFeQnIBrMe161QGaQoBQLqSUEKlHIiVgF3g/mb3lxlxzJOpIBhaP+C+KP2A==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-linux-x64-musl": {
      "version": "4.34.9",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-linux-x64-musl/-/rollup-linux-x64-musl-4.34.9.tgz",
      "integrity": "sha512-cYRpV4650z2I3/s6+5/LONkjIz8MBeqrk+vPXV10ORBnshpn8S32bPqQ2Utv39jCiDcO2eJTuSlPXpnvmaIgRA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/@rollup/rollup-win32-arm64-msvc": {
      "version": "4.34.9",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-arm64-msvc/-/rollup-win32-arm64-msvc-4.34.9.tgz",
      "integrity": "sha512-z4mQK9dAN6byRA/vsSgQiPeuO63wdiDxZ9yg9iyX2QTzKuQM7T4xlBoeUP/J8uiFkqxkcWndWi+W7bXdPbt27Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-ia32-msvc": {
      "version": "4.34.9",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-ia32-msvc/-/rollup-win32-ia32-msvc-4.34.9.tgz",
      "integrity": "sha512-KB48mPtaoHy1AwDNkAJfHXvHp24H0ryZog28spEs0V48l3H1fr4i37tiyHsgKZJnCmvxsbATdZGBpbmxTE3a9w==",
      "cpu": [
        "ia32"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@rollup/rollup-win32-x64-msvc": {
      "version": "4.34.9",
      "resolved": "https://registry.npmjs.org/@rollup/rollup-win32-x64-msvc/-/rollup-win32-x64-msvc-4.34.9.tgz",
      "integrity": "sha512-AyleYRPU7+rgkMWbEh71fQlrzRfeP6SyMnRf9XX4fCdDPAJumdSBqYEcWPMzVQ4ScAl7E4oFfK0GUVn77xSwbw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/@selderee/plugin-htmlparser2": {
      "version": "0.11.0",
      "resolved": "https://registry.npmjs.org/@selderee/plugin-htmlparser2/-/plugin-htmlparser2-0.11.0.tgz",
      "integrity": "sha512-P33hHGdldxGabLFjPPpaTxVolMrzrcegejx+0GxjrIb9Zv48D8yAIA/QTDR2dFl7Uz7urX8aX6+5bCZslr+gWQ==",
      "license": "MIT",
      "dependencies": {
        "domhandler": "^5.0.3",
        "selderee": "^0.11.0"
      },
      "funding": {
        "url": "https://ko-fi.com/killymxi"
      }
    },
    "node_modules/@stitches/core": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/@stitches/core/-/core-1.2.8.tgz",
      "integrity": "sha512-Gfkvwk9o9kE9r9XNBmJRfV8zONvXThnm1tcuojL04Uy5uRyqg93DC83lDebl0rocZCfKSjUv+fWYtMQmEDJldg==",
      "license": "MIT"
    },
    "node_modules/@supabase/auth-js": {
      "version": "2.70.0",
      "resolved": "https://registry.npmjs.org/@supabase/auth-js/-/auth-js-2.70.0.tgz",
      "integrity": "sha512-BaAK/tOAZFJtzF1sE3gJ2FwTjLf4ky3PSvcvLGEgEmO4BSBkwWKu8l67rLLIBZPDnCyV7Owk2uPyKHa0kj5QGg==",
      "license": "MIT",
      "dependencies": {
        "@supabase/node-fetch": "^2.6.14"
      }
    },
    "node_modules/@supabase/auth-ui-shared": {
      "version": "0.1.8",
      "resolved": "https://registry.npmjs.org/@supabase/auth-ui-shared/-/auth-ui-shared-0.1.8.tgz",
      "integrity": "sha512-ouQ0DjKcEFg+0gZigFIEgu01V3e6riGZPzgVD0MJsCBNsMsiDT74+GgCEIElMUpTGkwSja3xLwdFRFgMNFKcjg==",
      "license": "MIT",
      "peerDependencies": {
        "@supabase/supabase-js": "^2.21.0"
      }
    },
    "node_modules/@supabase/auth-ui-svelte": {
      "version": "0.2.9",
      "resolved": "https://registry.npmjs.org/@supabase/auth-ui-svelte/-/auth-ui-svelte-0.2.9.tgz",
      "integrity": "sha512-oc+SRS7ykc5FCssoqT0IiK5KF/obwnWko5ePaaMTDwUEQOavv+O8/poAh2lRTKRJCqJMqOOpMS/lUE6pHcma3g==",
      "dependencies": {
        "@stitches/core": "^1.2.8",
        "@supabase/auth-ui-shared": "0.1.8",
        "svelte": "^3.55.1"
      },
      "peerDependencies": {
        "@supabase/supabase-js": "^2.21.0"
      }
    },
    "node_modules/@supabase/functions-js": {
      "version": "2.4.4",
      "resolved": "https://registry.npmjs.org/@supabase/functions-js/-/functions-js-2.4.4.tgz",
      "integrity": "sha512-WL2p6r4AXNGwop7iwvul2BvOtuJ1YQy8EbOd0dhG1oN1q8el/BIRSFCFnWAMM/vJJlHWLi4ad22sKbKr9mvjoA==",
      "license": "MIT",
      "dependencies": {
        "@supabase/node-fetch": "^2.6.14"
      }
    },
    "node_modules/@supabase/node-fetch": {
      "version": "2.6.15",
      "resolved": "https://registry.npmjs.org/@supabase/node-fetch/-/node-fetch-2.6.15.tgz",
      "integrity": "sha512-1ibVeYUacxWYi9i0cf5efil6adJ9WRyZBLivgjs+AUpewx1F3xPi7gLgaASI2SmIQxPoCEjAsLAzKPgMJVgOUQ==",
      "license": "MIT",
      "dependencies": {
        "whatwg-url": "^5.0.0"
      },
      "engines": {
        "node": "4.x || >=6.0.0"
      }
    },
    "node_modules/@supabase/postgrest-js": {
      "version": "1.19.4",
      "resolved": "https://registry.npmjs.org/@supabase/postgrest-js/-/postgrest-js-1.19.4.tgz",
      "integrity": "sha512-O4soKqKtZIW3olqmbXXbKugUtByD2jPa8kL2m2c1oozAO11uCcGrRhkZL0kVxjBLrXHE0mdSkFsMj7jDSfyNpw==",
      "license": "MIT",
      "dependencies": {
        "@supabase/node-fetch": "^2.6.14"
      }
    },
    "node_modules/@supabase/realtime-js": {
      "version": "2.11.10",
      "resolved": "https://registry.npmjs.org/@supabase/realtime-js/-/realtime-js-2.11.10.tgz",
      "integrity": "sha512-SJKVa7EejnuyfImrbzx+HaD9i6T784khuw1zP+MBD7BmJYChegGxYigPzkKX8CK8nGuDntmeSD3fvriaH0EGZA==",
      "license": "MIT",
      "dependencies": {
        "@supabase/node-fetch": "^2.6.13",
        "@types/phoenix": "^1.6.6",
        "@types/ws": "^8.18.1",
        "ws": "^8.18.2"
      }
    },
    "node_modules/@supabase/ssr": {
      "version": "0.5.2",
      "resolved": "https://registry.npmjs.org/@supabase/ssr/-/ssr-0.5.2.tgz",
      "integrity": "sha512-n3plRhr2Bs8Xun1o4S3k1CDv17iH5QY9YcoEvXX3bxV1/5XSasA0mNXYycFmADIdtdE6BG9MRjP5CGIs8qxC8A==",
      "license": "MIT",
      "dependencies": {
        "@types/cookie": "^0.6.0",
        "cookie": "^0.7.0"
      },
      "peerDependencies": {
        "@supabase/supabase-js": "^2.43.4"
      }
    },
    "node_modules/@supabase/storage-js": {
      "version": "2.7.1",
      "resolved": "https://registry.npmjs.org/@supabase/storage-js/-/storage-js-2.7.1.tgz",
      "integrity": "sha512-asYHcyDR1fKqrMpytAS1zjyEfvxuOIp1CIXX7ji4lHHcJKqyk+sLl/Vxgm4sN6u8zvuUtae9e4kDxQP2qrwWBA==",
      "license": "MIT",
      "dependencies": {
        "@supabase/node-fetch": "^2.6.14"
      }
    },
    "node_modules/@supabase/supabase-js": {
      "version": "2.50.0",
      "resolved": "https://registry.npmjs.org/@supabase/supabase-js/-/supabase-js-2.50.0.tgz",
      "integrity": "sha512-M1Gd5tPaaghYZ9OjeO1iORRqbTWFEz/cF3pPubRnMPzA+A8SiUsXXWDP+DWsASZcjEcVEcVQIAF38i5wrijYOg==",
      "license": "MIT",
      "dependencies": {
        "@supabase/auth-js": "2.70.0",
        "@supabase/functions-js": "2.4.4",
        "@supabase/node-fetch": "2.6.15",
        "@supabase/postgrest-js": "1.19.4",
        "@supabase/realtime-js": "2.11.10",
        "@supabase/storage-js": "2.7.1"
      }
    },
    "node_modules/@sveltejs/acorn-typescript": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/@sveltejs/acorn-typescript/-/acorn-typescript-1.0.5.tgz",
      "integrity": "sha512-IwQk4yfwLdibDlrXVE04jTZYlLnwsTT2PIOQQGNLWfjavGifnk1JD1LcZjZaBTRcxZu2FfPfNLOE04DSu9lqtQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^8.9.0"
      }
    },
    "node_modules/@sveltejs/adapter-auto": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/@sveltejs/adapter-auto/-/adapter-auto-6.0.0.tgz",
      "integrity": "sha512-7mR2/G7vlXakaOj6QBSG9dwBfTgWjV+UnEMB5Z6Xu0ZbdXda6c0su1fNkg0ab0zlilSkloMA2NjCna02/DR7sA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "import-meta-resolve": "^4.1.0"
      },
      "peerDependencies": {
        "@sveltejs/kit": "^2.0.0"
      }
    },
    "node_modules/@sveltejs/kit": {
      "version": "2.21.1",
      "resolved": "https://registry.npmjs.org/@sveltejs/kit/-/kit-2.21.1.tgz",
      "integrity": "sha512-vLbtVwtDcK8LhJKnFkFYwM0uCdFmzioQnif0bjEYH1I24Arz22JPr/hLUiXGVYAwhu8INKx5qrdvr4tHgPwX6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@sveltejs/acorn-typescript": "^1.0.5",
        "@types/cookie": "^0.6.0",
        "acorn": "^8.14.1",
        "cookie": "^0.6.0",
        "devalue": "^5.1.0",
        "esm-env": "^1.2.2",
        "kleur": "^4.1.5",
        "magic-string": "^0.30.5",
        "mrmime": "^2.0.0",
        "sade": "^1.8.1",
        "set-cookie-parser": "^2.6.0",
        "sirv": "^3.0.0"
      },
      "bin": {
        "svelte-kit": "svelte-kit.js"
      },
      "engines": {
        "node": ">=18.13"
      },
      "peerDependencies": {
        "@sveltejs/vite-plugin-svelte": "^3.0.0 || ^4.0.0-next.1 || ^5.0.0",
        "svelte": "^4.0.0 || ^5.0.0-next.0",
        "vite": "^5.0.3 || ^6.0.0"
      }
    },
    "node_modules/@sveltejs/vite-plugin-svelte": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/@sveltejs/vite-plugin-svelte/-/vite-plugin-svelte-5.0.3.tgz",
      "integrity": "sha512-MCFS6CrQDu1yGwspm4qtli0e63vaPCehf6V7pIMP15AsWgMKrqDGCPFF/0kn4SP0ii4aySu4Pa62+fIRGFMjgw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@sveltejs/vite-plugin-svelte-inspector": "^4.0.1",
        "debug": "^4.4.0",
        "deepmerge": "^4.3.1",
        "kleur": "^4.1.5",
        "magic-string": "^0.30.15",
        "vitefu": "^1.0.4"
      },
      "engines": {
        "node": "^18.0.0 || ^20.0.0 || >=22"
      },
      "peerDependencies": {
        "svelte": "^5.0.0",
        "vite": "^6.0.0"
      }
    },
    "node_modules/@sveltejs/vite-plugin-svelte-inspector": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/@sveltejs/vite-plugin-svelte-inspector/-/vite-plugin-svelte-inspector-4.0.1.tgz",
      "integrity": "sha512-J/Nmb2Q2y7mck2hyCX4ckVHcR5tu2J+MtBEQqpDrrgELZ2uvraQcK/ioCV61AqkdXFgriksOKIceDcQmqnGhVw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "debug": "^4.3.7"
      },
      "engines": {
        "node": "^18.0.0 || ^20.0.0 || >=22"
      },
      "peerDependencies": {
        "@sveltejs/vite-plugin-svelte": "^5.0.0",
        "svelte": "^5.0.0",
        "vite": "^6.0.0"
      }
    },
    "node_modules/@tailwindcss/node": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/@tailwindcss/node/-/node-4.0.9.tgz",
      "integrity": "sha512-tOJvdI7XfJbARYhxX+0RArAhmuDcczTC46DGCEziqxzzbIaPnfYaIyRT31n4u8lROrsO7Q6u/K9bmQHL2uL1bQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "enhanced-resolve": "^5.18.1",
        "jiti": "^2.4.2",
        "tailwindcss": "4.0.9"
      }
    },
    "node_modules/@tailwindcss/node/node_modules/jiti": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/jiti/-/jiti-2.4.2.tgz",
      "integrity": "sha512-rg9zJN+G4n2nfJl5MW3BMygZX56zKPNVEYYqq7adpmMh4Jn2QNEwhvQlFy6jPVdcod7txZtKHWnyZiA3a0zP7A==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "jiti": "lib/jiti-cli.mjs"
      }
    },
    "node_modules/@tailwindcss/oxide": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide/-/oxide-4.0.9.tgz",
      "integrity": "sha512-eLizHmXFqHswJONwfqi/WZjtmWZpIalpvMlNhTM99/bkHtUs6IqgI1XQ0/W5eO2HiRQcIlXUogI2ycvKhVLNcA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 10"
      },
      "optionalDependencies": {
        "@tailwindcss/oxide-android-arm64": "4.0.9",
        "@tailwindcss/oxide-darwin-arm64": "4.0.9",
        "@tailwindcss/oxide-darwin-x64": "4.0.9",
        "@tailwindcss/oxide-freebsd-x64": "4.0.9",
        "@tailwindcss/oxide-linux-arm-gnueabihf": "4.0.9",
        "@tailwindcss/oxide-linux-arm64-gnu": "4.0.9",
        "@tailwindcss/oxide-linux-arm64-musl": "4.0.9",
        "@tailwindcss/oxide-linux-x64-gnu": "4.0.9",
        "@tailwindcss/oxide-linux-x64-musl": "4.0.9",
        "@tailwindcss/oxide-win32-arm64-msvc": "4.0.9",
        "@tailwindcss/oxide-win32-x64-msvc": "4.0.9"
      }
    },
    "node_modules/@tailwindcss/oxide-android-arm64": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-android-arm64/-/oxide-android-arm64-4.0.9.tgz",
      "integrity": "sha512-YBgy6+2flE/8dbtrdotVInhMVIxnHJPbAwa7U1gX4l2ThUIaPUp18LjB9wEH8wAGMBZUb//SzLtdXXNBHPUl6Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-arm64": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-arm64/-/oxide-darwin-arm64-4.0.9.tgz",
      "integrity": "sha512-pWdl4J2dIHXALgy2jVkwKBmtEb73kqIfMpYmcgESr7oPQ+lbcQ4+tlPeVXaSAmang+vglAfFpXQCOvs/aGSqlw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-darwin-x64": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-darwin-x64/-/oxide-darwin-x64-4.0.9.tgz",
      "integrity": "sha512-4Dq3lKp0/C7vrRSkNPtBGVebEyWt9QPPlQctxJ0H3MDyiQYvzVYf8jKow7h5QkWNe8hbatEqljMj/Y0M+ERYJg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-freebsd-x64": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-freebsd-x64/-/oxide-freebsd-x64-4.0.9.tgz",
      "integrity": "sha512-k7U1RwRODta8x0uealtVt3RoWAWqA+D5FAOsvVGpYoI6ObgmnzqWW6pnVwz70tL8UZ/QXjeMyiICXyjzB6OGtQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm-gnueabihf": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm-gnueabihf/-/oxide-linux-arm-gnueabihf-4.0.9.tgz",
      "integrity": "sha512-NDDjVweHz2zo4j+oS8y3KwKL5wGCZoXGA9ruJM982uVJLdsF8/1AeKvUwKRlMBpxHt1EdWJSAh8a0Mfhl28GlQ==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-gnu": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-gnu/-/oxide-linux-arm64-gnu-4.0.9.tgz",
      "integrity": "sha512-jk90UZ0jzJl3Dy1BhuFfRZ2KP9wVKMXPjmCtY4U6fF2LvrjP5gWFJj5VHzfzHonJexjrGe1lMzgtjriuZkxagg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-arm64-musl": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-arm64-musl/-/oxide-linux-arm64-musl-4.0.9.tgz",
      "integrity": "sha512-3eMjyTC6HBxh9nRgOHzrc96PYh1/jWOwHZ3Kk0JN0Kl25BJ80Lj9HEvvwVDNTgPg154LdICwuFLuhfgH9DULmg==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-gnu": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-gnu/-/oxide-linux-x64-gnu-4.0.9.tgz",
      "integrity": "sha512-v0D8WqI/c3WpWH1kq/HP0J899ATLdGZmENa2/emmNjubT0sWtEke9W9+wXeEoACuGAhF9i3PO5MeyditpDCiWQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-linux-x64-musl": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-linux-x64-musl/-/oxide-linux-x64-musl-4.0.9.tgz",
      "integrity": "sha512-Kvp0TCkfeXyeehqLJr7otsc4hd/BUPfcIGrQiwsTVCfaMfjQZCG7DjI+9/QqPZha8YapLA9UoIcUILRYO7NE1Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-arm64-msvc": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-arm64-msvc/-/oxide-win32-arm64-msvc-4.0.9.tgz",
      "integrity": "sha512-m3+60T/7YvWekajNq/eexjhV8z10rswcz4BC9bioJ7YaN+7K8W2AmLmG0B79H14m6UHE571qB0XsPus4n0QVgQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/oxide-win32-x64-msvc": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/@tailwindcss/oxide-win32-x64-msvc/-/oxide-win32-x64-msvc-4.0.9.tgz",
      "integrity": "sha512-dpc05mSlqkwVNOUjGu/ZXd5U1XNch1kHFJ4/cHkZFvaW1RzbHmRt24gvM8/HC6IirMxNarzVw4IXVtvrOoZtxA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 10"
      }
    },
    "node_modules/@tailwindcss/postcss": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/@tailwindcss/postcss/-/postcss-4.0.9.tgz",
      "integrity": "sha512-BT/E+pdMqulavEAVM5NCpxmGEwHiLDPpkmg/c/X25ZBW+izTe+aZ+v1gf/HXTrihRoCxrUp5U4YyHsBTzspQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@alloc/quick-lru": "^5.2.0",
        "@tailwindcss/node": "4.0.9",
        "@tailwindcss/oxide": "4.0.9",
        "lightningcss": "^1.29.1",
        "postcss": "^8.4.41",
        "tailwindcss": "4.0.9"
      }
    },
    "node_modules/@tailwindcss/typography": {
      "version": "0.5.15",
      "resolved": "https://registry.npmjs.org/@tailwindcss/typography/-/typography-0.5.15.tgz",
      "integrity": "sha512-AqhlCXl+8grUz8uqExv5OTtgpjuVIwFTSXTrh8y9/pw6q2ek7fJ+Y8ZEVw7EB2DCcuCOtEjf9w3+J3rzts01uA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "lodash.castarray": "^4.4.0",
        "lodash.isplainobject": "^4.0.6",
        "lodash.merge": "^4.6.2",
        "postcss-selector-parser": "6.0.10"
      },
      "peerDependencies": {
        "tailwindcss": ">=3.0.0 || insiders || >=4.0.0-alpha.20"
      }
    },
    "node_modules/@types/cookie": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/@types/cookie/-/cookie-0.6.0.tgz",
      "integrity": "sha512-4Kh9a6B2bQciAhf7FSuMRRkUWecJgJu9nPnx3yzpsfXX/c50REIqpHY4C82bXP90qrLtXtkDxTZosYO3UpOwlA==",
      "license": "MIT"
    },
    "node_modules/@types/estree": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/@types/estree/-/estree-1.0.6.tgz",
      "integrity": "sha512-AYnb1nQyY49te+VRAVgmzfcgjYS91mY5P0TKUDCLEM+gNnA+3T6rWITXRLYCpahpqSQbN5cE+gHpnPyXjHWxcw==",
      "license": "MIT"
    },
    "node_modules/@types/glob": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/@types/glob/-/glob-8.1.0.tgz",
      "integrity": "sha512-IO+MJPVhoqz+28h1qLAcBEH2+xHMK6MTyHJc7MTnnYb6wsoLR29POVGJ7LycmVXIqyy/4/2ShP5sUwTXuOwb/w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/minimatch": "^5.1.2",
        "@types/node": "*"
      }
    },
    "node_modules/@types/html-to-text": {
      "version": "9.0.4",
      "resolved": "https://registry.npmjs.org/@types/html-to-text/-/html-to-text-9.0.4.tgz",
      "integrity": "sha512-pUY3cKH/Nm2yYrEmDlPR1mR7yszjGx4DrwPjQ702C4/D5CwHuZTgZdIdwPkRbcuhs7BAh2L5rg3CL5cbRiGTCQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/jsdom": {
      "version": "21.1.7",
      "resolved": "https://registry.npmjs.org/@types/jsdom/-/jsdom-21.1.7.tgz",
      "integrity": "sha512-yOriVnggzrnQ3a9OKOCxaVuSug3w3/SbOj5i7VwXWZEyUNl3bLF9V3MfxGbZKuwqJOQyRfqXyROBB1CoZLFWzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/node": "*",
        "@types/tough-cookie": "*",
        "parse5": "^7.0.0"
      }
    },
    "node_modules/@types/json-schema": {
      "version": "7.0.15",
      "resolved": "https://registry.npmjs.org/@types/json-schema/-/json-schema-7.0.15.tgz",
      "integrity": "sha512-5+fP8P8MFNC+AyZCDxrB2pkZFPGzqQWUzpSeuuVLvm8VMcorNYavBqoFcxK8bQz4Qsbn4oUEEem4wDLfcysGHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/minimatch": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/@types/minimatch/-/minimatch-5.1.2.tgz",
      "integrity": "sha512-K0VQKziLUWkVKiRVrx4a40iPaxTUefQmjtkQofBkYRcoaaL/8rhwDWww9qWbrgicNOgnpIsMxyNIUM4+n6dUIA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/node": {
      "version": "24.0.3",
      "resolved": "https://registry.npmjs.org/@types/node/-/node-24.0.3.tgz",
      "integrity": "sha512-R4I/kzCYAdRLzfiCabn9hxWfbuHS573x+r0dJMkkzThEa7pbrcDWK+9zu3e7aBOouf+rQAciqPFMnxwr0aWgKg==",
      "license": "MIT",
      "dependencies": {
        "undici-types": "~7.8.0"
      }
    },
    "node_modules/@types/phoenix": {
      "version": "1.6.6",
      "resolved": "https://registry.npmjs.org/@types/phoenix/-/phoenix-1.6.6.tgz",
      "integrity": "sha512-PIzZZlEppgrpoT2QgbnDU+MMzuR6BbCjllj0bM70lWoejMeNJAxCchxnv7J3XFkI8MpygtRpzXrIlmWUBclP5A==",
      "license": "MIT"
    },
    "node_modules/@types/semver": {
      "version": "7.5.8",
      "resolved": "https://registry.npmjs.org/@types/semver/-/semver-7.5.8.tgz",
      "integrity": "sha512-I8EUhyrgfLrcTkzV3TSsGyl1tSuPrEDzr0yd5m90UgNxQkyDXULk3b6MlQqTCpZpNtWe1K0hzclnZkTcLBe2UQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/tough-cookie": {
      "version": "4.0.5",
      "resolved": "https://registry.npmjs.org/@types/tough-cookie/-/tough-cookie-4.0.5.tgz",
      "integrity": "sha512-/Ad8+nIOV7Rl++6f1BdKxFSMgmoqEoYbHRpPcx3JEfv8VRsQe9Z4mCXeJBzxs7mbHY/XOZZuXlRNfhpVPbs6ZA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/@types/ws": {
      "version": "8.18.1",
      "resolved": "https://registry.npmjs.org/@types/ws/-/ws-8.18.1.tgz",
      "integrity": "sha512-ThVF6DCVhA8kUGy+aazFQ4kXQ7E1Ty7A3ypFOe0IcJV8O/M511G99AW24irKrW56Wt44yG9+ij8FaqoBGkuBXg==",
      "license": "MIT",
      "dependencies": {
        "@types/node": "*"
      }
    },
    "node_modules/@typescript-eslint/eslint-plugin": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/eslint-plugin/-/eslint-plugin-6.21.0.tgz",
      "integrity": "sha512-oy9+hTPCUFpngkEZUSzbf9MxI65wbKFoQYsgPdILTfbUldp5ovUuphZVe4i30emU9M/kP+T64Di0mxl7dSw3MA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/regexpp": "^4.5.1",
        "@typescript-eslint/scope-manager": "6.21.0",
        "@typescript-eslint/type-utils": "6.21.0",
        "@typescript-eslint/utils": "6.21.0",
        "@typescript-eslint/visitor-keys": "6.21.0",
        "debug": "^4.3.4",
        "graphemer": "^1.4.0",
        "ignore": "^5.2.4",
        "natural-compare": "^1.4.0",
        "semver": "^7.5.4",
        "ts-api-utils": "^1.0.1"
      },
      "engines": {
        "node": "^16.0.0 || >=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "@typescript-eslint/parser": "^6.0.0 || ^6.0.0-alpha",
        "eslint": "^7.0.0 || ^8.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/parser": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/parser/-/parser-6.21.0.tgz",
      "integrity": "sha512-tbsV1jPne5CkFQCgPBcDOt30ItF7aJoZL997JSF7MhGQqOeT3svWRYxiqlfA5RUdlHN6Fi+EI9bxqbdyAUZjYQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "@typescript-eslint/scope-manager": "6.21.0",
        "@typescript-eslint/types": "6.21.0",
        "@typescript-eslint/typescript-estree": "6.21.0",
        "@typescript-eslint/visitor-keys": "6.21.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": "^16.0.0 || >=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^7.0.0 || ^8.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/scope-manager": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/scope-manager/-/scope-manager-6.21.0.tgz",
      "integrity": "sha512-OwLUIWZJry80O99zvqXVEioyniJMa+d2GrqpUTqi5/v5D5rOrppJVBPa0yKCblcigC0/aYAzxxqQ1B+DS2RYsg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "6.21.0",
        "@typescript-eslint/visitor-keys": "6.21.0"
      },
      "engines": {
        "node": "^16.0.0 || >=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/type-utils": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/type-utils/-/type-utils-6.21.0.tgz",
      "integrity": "sha512-rZQI7wHfao8qMX3Rd3xqeYSMCL3SoiSQLBATSiVKARdFGCYSRvmViieZjqc58jKgs8Y8i9YvVVhRbHSTA4VBag==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/typescript-estree": "6.21.0",
        "@typescript-eslint/utils": "6.21.0",
        "debug": "^4.3.4",
        "ts-api-utils": "^1.0.1"
      },
      "engines": {
        "node": "^16.0.0 || >=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^7.0.0 || ^8.0.0"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/types": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/types/-/types-6.21.0.tgz",
      "integrity": "sha512-1kFmZ1rOm5epu9NZEZm1kckCDGj5UJEf7P1kliH4LKu/RkwpsfqqGmY2OOcUs18lSlQBKLDYBOGxRVtrMN5lpg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^16.0.0 || >=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@typescript-eslint/typescript-estree": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/typescript-estree/-/typescript-estree-6.21.0.tgz",
      "integrity": "sha512-6npJTkZcO+y2/kr+z0hc4HwNfrrP4kNYh57ek7yCNlrBjWQ1Y0OS7jiZTkgumrvkX5HkEKXFZkkdFNkaW2wmUQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "@typescript-eslint/types": "6.21.0",
        "@typescript-eslint/visitor-keys": "6.21.0",
        "debug": "^4.3.4",
        "globby": "^11.1.0",
        "is-glob": "^4.0.3",
        "minimatch": "9.0.3",
        "semver": "^7.5.4",
        "ts-api-utils": "^1.0.1"
      },
      "engines": {
        "node": "^16.0.0 || >=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependenciesMeta": {
        "typescript": {
          "optional": true
        }
      }
    },
    "node_modules/@typescript-eslint/utils": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/utils/-/utils-6.21.0.tgz",
      "integrity": "sha512-NfWVaC8HP9T8cbKQxHcsJBY5YE1O33+jpMwN45qzWWaPDZgLIbo12toGMWnmhvCpd3sIxkpDw3Wv1B3dYrbDQQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.4.0",
        "@types/json-schema": "^7.0.12",
        "@types/semver": "^7.5.0",
        "@typescript-eslint/scope-manager": "6.21.0",
        "@typescript-eslint/types": "6.21.0",
        "@typescript-eslint/typescript-estree": "6.21.0",
        "semver": "^7.5.4"
      },
      "engines": {
        "node": "^16.0.0 || >=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      },
      "peerDependencies": {
        "eslint": "^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/@typescript-eslint/visitor-keys": {
      "version": "6.21.0",
      "resolved": "https://registry.npmjs.org/@typescript-eslint/visitor-keys/-/visitor-keys-6.21.0.tgz",
      "integrity": "sha512-JJtkDduxLi9bivAB+cYOVMtbkqdPOhZ+ZI5LC47MIRrDV4Yn2o+ZnW10Nkmr28xRpSpdJ6Sm42Hjf2+REYXm0A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@typescript-eslint/types": "6.21.0",
        "eslint-visitor-keys": "^3.4.1"
      },
      "engines": {
        "node": "^16.0.0 || >=18.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/typescript-eslint"
      }
    },
    "node_modules/@ungap/structured-clone": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/@ungap/structured-clone/-/structured-clone-1.2.1.tgz",
      "integrity": "sha512-fEzPV3hSkSMltkw152tJKNARhOupqbH96MZWyRjNaYZOMIzbrTeQDG+MTc6Mr2pgzFQzFxAfmhGDNP5QK++2ZA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/@vitest/expect": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/@vitest/expect/-/expect-3.0.7.tgz",
      "integrity": "sha512-QP25f+YJhzPfHrHfYHtvRn+uvkCFCqFtW9CktfBxmB+25QqWsx7VB2As6f4GmwllHLDhXNHvqedwhvMmSnNmjw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/spy": "3.0.7",
        "@vitest/utils": "3.0.7",
        "chai": "^5.2.0",
        "tinyrainbow": "^2.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/mocker": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/@vitest/mocker/-/mocker-3.0.7.tgz",
      "integrity": "sha512-qui+3BLz9Eonx4EAuR/i+QlCX6AUZ35taDQgwGkK/Tw6/WgwodSrjN1X2xf69IA/643ZX5zNKIn2svvtZDrs4w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/spy": "3.0.7",
        "estree-walker": "^3.0.3",
        "magic-string": "^0.30.17"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      },
      "peerDependencies": {
        "msw": "^2.4.9",
        "vite": "^5.0.0 || ^6.0.0"
      },
      "peerDependenciesMeta": {
        "msw": {
          "optional": true
        },
        "vite": {
          "optional": true
        }
      }
    },
    "node_modules/@vitest/pretty-format": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/@vitest/pretty-format/-/pretty-format-3.0.7.tgz",
      "integrity": "sha512-CiRY0BViD/V8uwuEzz9Yapyao+M9M008/9oMOSQydwbwb+CMokEq3XVaF3XK/VWaOK0Jm9z7ENhybg70Gtxsmg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tinyrainbow": "^2.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/runner": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/@vitest/runner/-/runner-3.0.7.tgz",
      "integrity": "sha512-WeEl38Z0S2ZcuRTeyYqaZtm4e26tq6ZFqh5y8YD9YxfWuu0OFiGFUbnxNynwLjNRHPsXyee2M9tV7YxOTPZl2g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/utils": "3.0.7",
        "pathe": "^2.0.3"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/snapshot": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/@vitest/snapshot/-/snapshot-3.0.7.tgz",
      "integrity": "sha512-eqTUryJWQN0Rtf5yqCGTQWsCFOQe4eNz5Twsu21xYEcnFJtMU5XvmG0vgebhdLlrHQTSq5p8vWHJIeJQV8ovsA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/pretty-format": "3.0.7",
        "magic-string": "^0.30.17",
        "pathe": "^2.0.3"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/spy": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/@vitest/spy/-/spy-3.0.7.tgz",
      "integrity": "sha512-4T4WcsibB0B6hrKdAZTM37ekuyFZt2cGbEGd2+L0P8ov15J1/HUsUaqkXEQPNAWr4BtPPe1gI+FYfMHhEKfR8w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tinyspy": "^3.0.2"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/@vitest/utils": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/@vitest/utils/-/utils-3.0.7.tgz",
      "integrity": "sha512-xePVpCRfooFX3rANQjwoditoXgWb1MaFbzmGuPP59MK6i13mrnDw/yEIyJudLeW6/38mCNcwCiJIGmpDPibAIg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/pretty-format": "3.0.7",
        "loupe": "^3.1.3",
        "tinyrainbow": "^2.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/abbrev": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/abbrev/-/abbrev-2.0.0.tgz",
      "integrity": "sha512-6/mh1E2u2YgEsCHdY0Yx5oW+61gZU+1vXaoiHHrpKeuRNNgFvS+/jrwHiQhB5apAf5oB7UB7E19ol2R2LKH8hQ==",
      "license": "ISC",
      "engines": {
        "node": "^14.17.0 || ^16.13.0 || >=18.0.0"
      }
    },
    "node_modules/acorn": {
      "version": "8.14.1",
      "resolved": "https://registry.npmjs.org/acorn/-/acorn-8.14.1.tgz",
      "integrity": "sha512-OvQ/2pUDKmgfCg++xsTX1wGxfTaszcHVcTctW4UJB4hibJx2HXxxO5UmVgyjMa+ZDsiaf5wWLXYpRWMmBI0QHg==",
      "license": "MIT",
      "bin": {
        "acorn": "bin/acorn"
      },
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/acorn-jsx": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/acorn-jsx/-/acorn-jsx-5.3.2.tgz",
      "integrity": "sha512-rq9s+JNhf0IChjtDXxllJ7g41oZk5SlXtp0LHwyA5cejwn7vKmKp4pPri6YEePv2PU65sAsegbXtIinmDFDXgQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "acorn": "^6.0.0 || ^7.0.0 || ^8.0.0"
      }
    },
    "node_modules/acorn-typescript": {
      "version": "1.4.13",
      "resolved": "https://registry.npmjs.org/acorn-typescript/-/acorn-typescript-1.4.13.tgz",
      "integrity": "sha512-xsc9Xv0xlVfwp2o7sQ+GCQ1PgbkdcpWdTzrwXxO3xDMTAywVS3oXVOcOHuRjAPkS4P9b+yc/qNF15460v+jp4Q==",
      "license": "MIT",
      "peerDependencies": {
        "acorn": ">=8.9.0"
      }
    },
    "node_modules/agent-base": {
      "version": "7.1.3",
      "resolved": "https://registry.npmjs.org/agent-base/-/agent-base-7.1.3.tgz",
      "integrity": "sha512-jRR5wdylq8CkOe6hei19GGZnxM6rBGwFl3Bg0YItGDimvjGtAvdZk4Pu6Cl4u4Igsws4a1fd1Vq3ezrhn4KmFw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/ajv": {
      "version": "6.12.6",
      "resolved": "https://registry.npmjs.org/ajv/-/ajv-6.12.6.tgz",
      "integrity": "sha512-j3fVLgvTo527anyYyJOGTYJbG+vnnQYvE0m5mmkc1TK+nxAppkCLMIL0aZ4dblVCNoGShhm+kzE4ZUykBoMg4g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^3.1.1",
        "fast-json-stable-stringify": "^2.0.0",
        "json-schema-traverse": "^0.4.1",
        "uri-js": "^4.2.2"
      },
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/epoberezkin"
      }
    },
    "node_modules/ansi-regex": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-5.0.1.tgz",
      "integrity": "sha512-quJQXlTSUGL2LH9SUXo8VwsY4soanhgo6LNSm84E1LBcE8s3O0wpdiRzyR9z/ZZJMlMWv37qOOb9pdJlMUEKFQ==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/ansi-styles": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-4.3.0.tgz",
      "integrity": "sha512-zbB9rCJAT1rbjiVDb2hqKFHNYLxgtk8NURxZ3IZwD3F6NtxbXZQCnnSi1Lkx+IDohdPlFp222wVALIheZJQSEg==",
      "license": "MIT",
      "dependencies": {
        "color-convert": "^2.0.1"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/argparse": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/argparse/-/argparse-2.0.1.tgz",
      "integrity": "sha512-8+9WqebbFzpX9OR+Wa6O29asIogeRMzcGtAINdpMHHyAg10f05aSFVBbcEqGf/PXw1EjAZ+q2/bEBg3DvurK3Q==",
      "dev": true,
      "license": "Python-2.0"
    },
    "node_modules/aria-query": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/aria-query/-/aria-query-5.3.2.tgz",
      "integrity": "sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/array-back": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/array-back/-/array-back-3.1.0.tgz",
      "integrity": "sha512-TkuxA4UCOvxuDK6NZYXCalszEzj+TLszyASooky+i742l9TqsOdYCMJJupxRic61hwquNtppB3hgcuq9SVSH1Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/array-union": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/array-union/-/array-union-2.1.0.tgz",
      "integrity": "sha512-HGyxoOTYUyCM6stUe6EJgnd4EoewAI7zMdfqO+kGjnlZmBDz/cR5pf8r/cR4Wq60sL/p0IkcjUEEPwS3GFrIyw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/assertion-error": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/assertion-error/-/assertion-error-2.0.1.tgz",
      "integrity": "sha512-Izi8RQcffqCeNVgFigKli1ssklIbpHnCYc6AknXGYoB6grJqyeby7jv12JUQgmTAnIDnbck1uxksT4dzN3PWBA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/asynckit": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/asynckit/-/asynckit-0.4.0.tgz",
      "integrity": "sha512-Oei9OH4tRh0YqU3GxhX79dM/mwVgvbZJaSNaRk+bshkj0S5cfHcgYakreBjrHwatXKbz+IoIdYLxrKim2MjW0Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/axobject-query": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/axobject-query/-/axobject-query-4.1.0.tgz",
      "integrity": "sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==",
      "license": "Apache-2.0",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/balanced-match": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/balanced-match/-/balanced-match-1.0.2.tgz",
      "integrity": "sha512-3oSeUO0TMV67hN1AmbXsK4yaqU7tjiHlbxRDZOpH0KW9+CeX4bRAaX0Anxt0tx2MrpRpWwQaPwIlISEJhYU5Pw==",
      "license": "MIT"
    },
    "node_modules/brace-expansion": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-2.0.2.tgz",
      "integrity": "sha512-Jt0vHyM+jmUBqojB7E1NIYadt0vI0Qxjxd2TErW94wDz+E2LAm5vKMXXwg6ZZBTHPuUlDgQHKXvjGBdfcF1ZDQ==",
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0"
      }
    },
    "node_modules/braces": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/braces/-/braces-3.0.3.tgz",
      "integrity": "sha512-yQbXgO/OSZVD2IsiLlro+7Hf6Q18EJrKSEsdoMzKePKXct3gvD8oLcOQdIzGupr5Fj+EDe8gO/lxc1BzfMpxvA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fill-range": "^7.1.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/cac": {
      "version": "6.7.14",
      "resolved": "https://registry.npmjs.org/cac/-/cac-6.7.14.tgz",
      "integrity": "sha512-b6Ilus+c3RrdDk+JhLKUAQfzzgLEPy6wcXqS7f/xe1EETvsDP6GORG7SFuOs6cID5YkqchW/LXZbX5bc8j7ZcQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/call-bind": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/call-bind/-/call-bind-1.0.8.tgz",
      "integrity": "sha512-oKlSFMcMwpUg2ednkhQ454wfWiU/ul3CkJe/PEHcTKuiX6RpbehUiFMXu13HalGZxfUwCQzZG747YXBn1im9ww==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.0",
        "es-define-property": "^1.0.0",
        "get-intrinsic": "^1.2.4",
        "set-function-length": "^1.2.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/call-bind-apply-helpers": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/call-bind-apply-helpers/-/call-bind-apply-helpers-1.0.1.tgz",
      "integrity": "sha512-BhYE+WDaywFg2TBWYNXAE+8B1ATnThNBqXHP5nQu0jWJdVvY2hvkpyB3qOmtmDePiS5/BDQ8wASEWGMWRG148g==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/call-bound": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/call-bound/-/call-bound-1.0.2.tgz",
      "integrity": "sha512-0lk0PHFe/uz0vl527fG9CgdE9WdafjDbCXvBbs+LUv000TVt2Jjhqbs4Jwm8gz070w8xXyEAxrPOMullsxXeGg==",
      "license": "MIT",
      "dependencies": {
        "call-bind": "^1.0.8",
        "get-intrinsic": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/callsites": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/callsites/-/callsites-3.1.0.tgz",
      "integrity": "sha512-P8BjAsXvZS+VIDUI11hHCQEv74YT67YUi5JJFNWIqL235sBmjX4+qx9Muvls5ivyNENctx46xQLQ3aTuE7ssaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/chai": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/chai/-/chai-5.2.0.tgz",
      "integrity": "sha512-mCuXncKXk5iCLhfhwTc0izo0gtEmpz5CtG2y8GiOINBlMVS6v8TMRc5TaLWKS6692m9+dVVfzgeVxR5UxWHTYw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "assertion-error": "^2.0.1",
        "check-error": "^2.1.1",
        "deep-eql": "^5.0.1",
        "loupe": "^3.1.0",
        "pathval": "^2.0.0"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/chalk": {
      "version": "4.1.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-4.1.2.tgz",
      "integrity": "sha512-oKnbhFyRIXpUuez8iBMmyEa4nbj4IOQyuhc/wy9kY7/WVPcwIO9VA668Pu8RkO7+0G76SLROeyw9CpQ061i4mA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.1.0",
        "supports-color": "^7.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/chalk?sponsor=1"
      }
    },
    "node_modules/check-error": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/check-error/-/check-error-2.1.1.tgz",
      "integrity": "sha512-OAlb+T7V4Op9OwdkjmguYRqncdlx5JiofwOAUkmTF+jNdHwzTaTs4sRAGpzLF3oOz5xAyDGrPgeIDFQmDOTiJw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 16"
      }
    },
    "node_modules/chokidar": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/chokidar/-/chokidar-4.0.1.tgz",
      "integrity": "sha512-n8enUVCED/KVRQlab1hr3MVpcVMvxtZjmEa956u+4YijlmQED223XMSYj2tLuKvr4jcCTzNNMpQDUer72MMmzA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "readdirp": "^4.0.1"
      },
      "engines": {
        "node": ">= 14.16.0"
      },
      "funding": {
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/color-convert": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-2.0.1.tgz",
      "integrity": "sha512-RRECPsj7iu/xb5oKYcsFHSppFNnsj/52OVTRKb4zP5onXwVF3zVmmToNcOfGC+CRDpfK/U584fMg38ZHCaElKQ==",
      "license": "MIT",
      "dependencies": {
        "color-name": "~1.1.4"
      },
      "engines": {
        "node": ">=7.0.0"
      }
    },
    "node_modules/color-name": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.4.tgz",
      "integrity": "sha512-dOy+3AuW3a2wNbZHIuMZpTcgjGuLU/uBL/ubcZF9OXbDo8ff4O8yVp5Bf0efS8uEoYo5q4Fx7dY9OgQGXgAsQA==",
      "license": "MIT"
    },
    "node_modules/combined-stream": {
      "version": "1.0.8",
      "resolved": "https://registry.npmjs.org/combined-stream/-/combined-stream-1.0.8.tgz",
      "integrity": "sha512-FQN4MRfuJeHf7cBbBMJFXhKSDq+2kAArBlmRBvcvFE5BB1HZKXtSFASDhdlz9zOYwxh8lDdnvmMOe/+5cdoEdg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "delayed-stream": "~1.0.0"
      },
      "engines": {
        "node": ">= 0.8"
      }
    },
    "node_modules/command-line-args": {
      "version": "5.2.1",
      "resolved": "https://registry.npmjs.org/command-line-args/-/command-line-args-5.2.1.tgz",
      "integrity": "sha512-H4UfQhZyakIjC74I9d34fGYDwk3XpSr17QhEd0Q3I9Xq1CETHo4Hcuo87WyWHpAF1aSLjLRf5lD9ZGX2qStUvg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-back": "^3.1.0",
        "find-replace": "^3.0.0",
        "lodash.camelcase": "^4.3.0",
        "typical": "^4.0.0"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/command-line-usage": {
      "version": "6.1.3",
      "resolved": "https://registry.npmjs.org/command-line-usage/-/command-line-usage-6.1.3.tgz",
      "integrity": "sha512-sH5ZSPr+7UStsloltmDh7Ce5fb8XPlHyoPzTpyyMuYCtervL65+ubVZ6Q61cFtFl62UyJlc8/JwERRbAFPUqgw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-back": "^4.0.2",
        "chalk": "^2.4.2",
        "table-layout": "^1.0.2",
        "typical": "^5.2.0"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/command-line-usage/node_modules/ansi-styles": {
      "version": "3.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-3.2.1.tgz",
      "integrity": "sha512-VT0ZI6kZRdTh8YyJw3SMbYm/u+NqfsAxEpWO0Pf9sq8/e94WxxOpPKx9FR1FlyCtOVDNOQ+8ntlqFxiRc+r5qA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-convert": "^1.9.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/command-line-usage/node_modules/array-back": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/array-back/-/array-back-4.0.2.tgz",
      "integrity": "sha512-NbdMezxqf94cnNfWLL7V/im0Ub+Anbb0IoZhvzie8+4HJ4nMQuzHuy49FkGYCJK2yAloZ3meiB6AVMClbrI1vg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/command-line-usage/node_modules/chalk": {
      "version": "2.4.2",
      "resolved": "https://registry.npmjs.org/chalk/-/chalk-2.4.2.tgz",
      "integrity": "sha512-Mti+f9lpJNcwF4tWV8/OrTTtF1gZi+f8FqlyAdouralcFWFQWF2+NgCHShjkCb+IFBLq9buZwE1xckQU4peSuQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^3.2.1",
        "escape-string-regexp": "^1.0.5",
        "supports-color": "^5.3.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/command-line-usage/node_modules/color-convert": {
      "version": "1.9.3",
      "resolved": "https://registry.npmjs.org/color-convert/-/color-convert-1.9.3.tgz",
      "integrity": "sha512-QfAUtd+vFdAtFQcC8CCyYt1fYWxSqAiK2cSD6zDB8N3cpsEBAvRxp9zOGg6G/SHHJYAT88/az/IuDGALsNVbGg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "color-name": "1.1.3"
      }
    },
    "node_modules/command-line-usage/node_modules/color-name": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/color-name/-/color-name-1.1.3.tgz",
      "integrity": "sha512-72fSenhMw2HZMTVHeCA9KCmpEIbzWiQsjN+BHcBbS9vr1mtt+vJjPdksIBNUmKAW8TFUDPJK5SUU3QhE9NEXDw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/command-line-usage/node_modules/escape-string-regexp": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-1.0.5.tgz",
      "integrity": "sha512-vbRorB5FUQWvla16U8R/qgaFIya2qGzwDrNmCZuYKrbdSUMG6I1ZCGQRefkRVhuOkIGVne7BQ35DSfo1qvJqFg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/command-line-usage/node_modules/has-flag": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-3.0.0.tgz",
      "integrity": "sha512-sKJf1+ceQBr4SMkvQnBDNDtf4TXpVhVGateu0t918bl30FnbE2m4vNLX+VWe/dpjlb+HugGYzW7uQXH98HPEYw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/command-line-usage/node_modules/supports-color": {
      "version": "5.5.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-5.5.0.tgz",
      "integrity": "sha512-QjVjwdXIt408MIiAqCX4oUKsgU2EqAGzs2Ppkm4aQYbjm+ZEWEcW4SfFNTr4uMNZma0ey4f5lgLrkB0aX0QMow==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^3.0.0"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/command-line-usage/node_modules/typical": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/typical/-/typical-5.2.0.tgz",
      "integrity": "sha512-dvdQgNDNJo+8B2uBQoqdb11eUCE1JQXhvjC/CZtgvZseVd5TYMXnq0+vuUemXbd/Se29cTaUuPX3YIc2xgbvIg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/commander": {
      "version": "10.0.1",
      "resolved": "https://registry.npmjs.org/commander/-/commander-10.0.1.tgz",
      "integrity": "sha512-y4Mg2tXshplEbSGzx7amzPwKKOCGuoSRP/CjEdwwk0FOGlUbq6lKuoyDZTNZkmxHdJtp54hdfY/JUrdL7Xfdug==",
      "license": "MIT",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/concat-map": {
      "version": "0.0.1",
      "resolved": "https://registry.npmjs.org/concat-map/-/concat-map-0.0.1.tgz",
      "integrity": "sha512-/Srv4dswyQNBfohGpz9o6Yb3Gz3SrUDqBH5rTuhGR7ahtlbYKnVxw2bCFMRljaA7EXHaXZ8wsHdodFvbkhKmqg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/config-chain": {
      "version": "1.1.13",
      "resolved": "https://registry.npmjs.org/config-chain/-/config-chain-1.1.13.tgz",
      "integrity": "sha512-qj+f8APARXHrM0hraqXYb2/bOVSV4PvJQlNZ/DVj0QrmNM2q2euizkeuVckQ57J+W0mRH6Hvi+k50M4Jul2VRQ==",
      "license": "MIT",
      "dependencies": {
        "ini": "^1.3.4",
        "proto-list": "~1.2.1"
      }
    },
    "node_modules/cookie": {
      "version": "0.7.2",
      "resolved": "https://registry.npmjs.org/cookie/-/cookie-0.7.2.tgz",
      "integrity": "sha512-yki5XnKuf750l50uGTllt6kKILY4nQ1eNIQatoXEByZ5dWgnKqbnqmTrBE5B4N7lrMJKQ2ytWMiTO2o0v6Ew/w==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/cross-spawn": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/cross-spawn/-/cross-spawn-7.0.6.tgz",
      "integrity": "sha512-uV2QOWP2nWzsy2aMp8aRibhi9dlzF5Hgh5SHaB9OiTGEyDTiJJyx0uy51QXdyWbtAHNua4XJzUKca3OzKUd3vA==",
      "license": "MIT",
      "dependencies": {
        "path-key": "^3.1.0",
        "shebang-command": "^2.0.0",
        "which": "^2.0.1"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/cssesc": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/cssesc/-/cssesc-3.0.0.tgz",
      "integrity": "sha512-/Tb/JcjK111nNScGob5MNtsntNM1aCNUDipB/TkwZFhyDrrE47SOx/18wF2bbjgc3ZzCSKW1T5nt5EbFoAz/Vg==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "cssesc": "bin/cssesc"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/cssstyle": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/cssstyle/-/cssstyle-4.1.0.tgz",
      "integrity": "sha512-h66W1URKpBS5YMI/V8PyXvTMFT8SupJ1IzoIV8IeBC/ji8WVmrO8dGlTi+2dh6whmdk6BiKJLD/ZBkhWbcg6nA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "rrweb-cssom": "^0.7.1"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/daisyui": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/daisyui/-/daisyui-5.0.0.tgz",
      "integrity": "sha512-U0K9Bac3Bi3zZGm6ojrw12F0vBHTpEgf46zv/BYxLe07hF0Xnx7emIQliwaRBgJuYhY0BhwQ6wSnq5cJXHA2yA==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "url": "https://github.com/saadeghi/daisyui?sponsor=1"
      }
    },
    "node_modules/data-urls": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/data-urls/-/data-urls-5.0.0.tgz",
      "integrity": "sha512-ZYP5VBHshaDAiVZxjbRVcFJpc+4xGgT0bK3vzy1HLN8jTO975HEbuYzZJcHoQEY5K1a0z8YayJkyVETa08eNTg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "whatwg-mimetype": "^4.0.0",
        "whatwg-url": "^14.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/data-urls/node_modules/tr46": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-5.0.0.tgz",
      "integrity": "sha512-tk2G5R2KRwBd+ZN0zaEXpmzdKyOYksXwywulIX95MBODjSzMIuQnQ3m8JxgbhnL1LeVo7lqQKsYa1O3Htl7K5g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "punycode": "^2.3.1"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/data-urls/node_modules/whatwg-url": {
      "version": "14.1.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-14.1.0.tgz",
      "integrity": "sha512-jlf/foYIKywAt3x/XWKZ/3rz8OSJPiWktjmk891alJUEjiVxKX9LEO92qH3hv4aJ0mN3MWPvGMCy8jQi95xK4w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tr46": "^5.0.0",
        "webidl-conversions": "^7.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/debug": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/debug/-/debug-4.4.0.tgz",
      "integrity": "sha512-6WTZ/IxCY/T6BALoZHaE4ctp9xm+Z5kY/pzYaCHRFeyVhojxlrm+46y68HA6hr0TcwEssoxNiDEUJQjfPZ/RYA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ms": "^2.1.3"
      },
      "engines": {
        "node": ">=6.0"
      },
      "peerDependenciesMeta": {
        "supports-color": {
          "optional": true
        }
      }
    },
    "node_modules/decimal.js": {
      "version": "10.4.3",
      "resolved": "https://registry.npmjs.org/decimal.js/-/decimal.js-10.4.3.tgz",
      "integrity": "sha512-VBBaLc1MgL5XpzgIP7ny5Z6Nx3UrRkIViUkPUdtl9aya5amy3De1gsUUSB1g3+3sExYNjCAsAznmukyxCb1GRA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/deep-eql": {
      "version": "5.0.2",
      "resolved": "https://registry.npmjs.org/deep-eql/-/deep-eql-5.0.2.tgz",
      "integrity": "sha512-h5k/5U50IJJFpzfL6nO9jaaumfjO/f2NjK/oYB2Djzm4p9L+3T9qWpZqZ2hAbLPuuYq9wrU08WQyBTL5GbPk5Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/deep-extend": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/deep-extend/-/deep-extend-0.6.0.tgz",
      "integrity": "sha512-LOHxIOaPYdHlJRtCQfDIVZtfw/ufM8+rVj649RIHzcm/vGwQRXFt6OPqIFWsm2XEMrNIEtWR64sY1LEKD2vAOA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/deep-is": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/deep-is/-/deep-is-0.1.4.tgz",
      "integrity": "sha512-oIPzksmTg4/MriiaYGO+okXDT7ztn/w3Eptv/+gSIdMdKsJo0u4CfYNFJPy+4SKMuCqGw2wxnA+URMg3t8a/bQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/deepmerge": {
      "version": "4.3.1",
      "resolved": "https://registry.npmjs.org/deepmerge/-/deepmerge-4.3.1.tgz",
      "integrity": "sha512-3sUqbMEc77XqpdNO7FRyRog+eW3ph+GYCbj+rK+uYyRMuwsVy0rMiVtPn+QJlKFvWP/1PYpapqYn0Me2knFn+A==",
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/define-data-property": {
      "version": "1.1.4",
      "resolved": "https://registry.npmjs.org/define-data-property/-/define-data-property-1.1.4.tgz",
      "integrity": "sha512-rBMvIzlpA8v6E+SJZoo++HAYqsLrkg7MSfIinMPFhmkorw7X+dOXVJQs+QT69zGkzMyfDnIMN2Wid1+NbL3T+A==",
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0",
        "es-errors": "^1.3.0",
        "gopd": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/delayed-stream": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/delayed-stream/-/delayed-stream-1.0.0.tgz",
      "integrity": "sha512-ZySD7Nf91aLB0RxL4KGrKHBXl7Eds1DAmEdcoVawXnLD7SDhpNgtuII2aAkg7a7QS41jxPSZ17p4VdGnMHk3MQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.4.0"
      }
    },
    "node_modules/detect-libc": {
      "version": "1.0.3",
      "resolved": "https://registry.npmjs.org/detect-libc/-/detect-libc-1.0.3.tgz",
      "integrity": "sha512-pGjwhsmsp4kL2RTz08wcOlGN83otlqHeD/Z5T8GXZB+/YcpQ/dgo+lbU8ZsGxV0HIvqqxo9l7mqYwyYMD9bKDg==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "detect-libc": "bin/detect-libc.js"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/devalue": {
      "version": "5.1.1",
      "resolved": "https://registry.npmjs.org/devalue/-/devalue-5.1.1.tgz",
      "integrity": "sha512-maua5KUiapvEwiEAe+XnlZ3Rh0GD+qI1J/nb9vrJc3muPXvcF/8gXYTWF76+5DAqHyDUtOIImEuo0YKE9mshVw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/dir-glob": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/dir-glob/-/dir-glob-3.0.1.tgz",
      "integrity": "sha512-WkrWp9GR4KXfKGYzOLmTuGVi1UWFfws377n9cc55/tb6DuqyF6pcQ5AbiHEshaDpY9v6oaSr2XCDidGmMwdzIA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "path-type": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/directory-tree": {
      "version": "3.5.2",
      "resolved": "https://registry.npmjs.org/directory-tree/-/directory-tree-3.5.2.tgz",
      "integrity": "sha512-DsOqeZEHkZnZrVOJG3mE/J9M6J8PulImiC6I1ZpoprVlfno8GvLOPDMkxiJihklLK7B9aVudG463L1+S/kzjiw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "command-line-args": "^5.2.0",
        "command-line-usage": "^6.1.1"
      },
      "bin": {
        "directory-tree": "bin/index.js"
      },
      "engines": {
        "node": ">=10.0"
      }
    },
    "node_modules/doctrine": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/doctrine/-/doctrine-3.0.0.tgz",
      "integrity": "sha512-yS+Q5i3hBf7GBkd4KG8a7eBNNWNGLTaEwwYWUijIYM7zrlYDM0BFXHjjPWlWZ1Rg7UaddZeIDmi9jF3HmqiQ2w==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "esutils": "^2.0.2"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/dom-serializer": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/dom-serializer/-/dom-serializer-2.0.0.tgz",
      "integrity": "sha512-wIkAryiqt/nV5EQKqQpo3SToSOV9J0DnbJqwK7Wv/Trc92zIAYZ4FlMu+JPFW1DfGFt81ZTCGgDEabffXeLyJg==",
      "license": "MIT",
      "dependencies": {
        "domelementtype": "^2.3.0",
        "domhandler": "^5.0.2",
        "entities": "^4.2.0"
      },
      "funding": {
        "url": "https://github.com/cheeriojs/dom-serializer?sponsor=1"
      }
    },
    "node_modules/domelementtype": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/domelementtype/-/domelementtype-2.3.0.tgz",
      "integrity": "sha512-OLETBj6w0OsagBwdXnPdN0cnMfF9opN69co+7ZrbfPGrdpPVNBUj02spi6B1N7wChLQiPn4CSH/zJvXw56gmHw==",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/fb55"
        }
      ],
      "license": "BSD-2-Clause"
    },
    "node_modules/domhandler": {
      "version": "5.0.3",
      "resolved": "https://registry.npmjs.org/domhandler/-/domhandler-5.0.3.tgz",
      "integrity": "sha512-cgwlv/1iFQiFnU96XXgROh8xTeetsnJiDsTc7TYCLFd9+/WNkIqPTxiM/8pSd8VIrhXGTf1Ny1q1hquVqDJB5w==",
      "license": "BSD-2-Clause",
      "dependencies": {
        "domelementtype": "^2.3.0"
      },
      "engines": {
        "node": ">= 4"
      },
      "funding": {
        "url": "https://github.com/fb55/domhandler?sponsor=1"
      }
    },
    "node_modules/domutils": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/domutils/-/domutils-3.1.0.tgz",
      "integrity": "sha512-H78uMmQtI2AhgDJjWeQmHwJJ2bLPD3GMmO7Zja/ZZh84wkm+4ut+IUnUdRa8uCGX88DiVx1j6FRe1XfxEgjEZA==",
      "license": "BSD-2-Clause",
      "dependencies": {
        "dom-serializer": "^2.0.0",
        "domelementtype": "^2.3.0",
        "domhandler": "^5.0.3"
      },
      "funding": {
        "url": "https://github.com/fb55/domutils?sponsor=1"
      }
    },
    "node_modules/dunder-proto": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/dunder-proto/-/dunder-proto-1.0.0.tgz",
      "integrity": "sha512-9+Sj30DIu+4KvHqMfLUGLFYL2PkURSYMVXJyXe92nFRvlYq5hBjLEhblKB+vkd/WVlUYMWigiY07T91Fkk0+4A==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.0",
        "es-errors": "^1.3.0",
        "gopd": "^1.2.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/eastasianwidth": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/eastasianwidth/-/eastasianwidth-0.2.0.tgz",
      "integrity": "sha512-I88TYZWc9XiYHRQ4/3c5rjjfgkjhLyW2luGIheGERbNQ6OY7yTybanSpDXZa8y7VUP9YmDcYa+eyq4ca7iLqWA==",
      "license": "MIT"
    },
    "node_modules/editorconfig": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/editorconfig/-/editorconfig-1.0.4.tgz",
      "integrity": "sha512-L9Qe08KWTlqYMVvMcTIvMAdl1cDUubzRNYL+WfA4bLDMHe4nemKkpmYzkznE1FwLKu0EEmy6obgQKzMJrg4x9Q==",
      "license": "MIT",
      "dependencies": {
        "@one-ini/wasm": "0.1.1",
        "commander": "^10.0.0",
        "minimatch": "9.0.1",
        "semver": "^7.5.3"
      },
      "bin": {
        "editorconfig": "bin/editorconfig"
      },
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/editorconfig/node_modules/minimatch": {
      "version": "9.0.1",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.1.tgz",
      "integrity": "sha512-0jWhJpD/MdhPXwPuiRkCbfYfSKp2qnn2eOc279qI7f+osl/l+prKSrvhg157zSYvx/1nmgn2NqdT6k2Z7zSH9w==",
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/emoji-regex": {
      "version": "9.2.2",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-9.2.2.tgz",
      "integrity": "sha512-L18DaJsXSUk2+42pv8mLs5jJT2hqFkFE4j21wOmgbUqsZ2hL72NsUU785g9RXgo3s0ZNgVl42TiHp3ZtOv/Vyg==",
      "license": "MIT"
    },
    "node_modules/enhanced-resolve": {
      "version": "5.18.1",
      "resolved": "https://registry.npmjs.org/enhanced-resolve/-/enhanced-resolve-5.18.1.tgz",
      "integrity": "sha512-ZSW3ma5GkcQBIpwZTSRAI8N71Uuwgs93IezB7mf7R60tC8ZbJideoDNKjHn2O9KIlx6rkGTTEk1xUCK2E1Y2Yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "graceful-fs": "^4.2.4",
        "tapable": "^2.2.0"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/entities": {
      "version": "4.5.0",
      "resolved": "https://registry.npmjs.org/entities/-/entities-4.5.0.tgz",
      "integrity": "sha512-V0hjH4dGPh9Ao5p0MoRY6BVqtwCjhz6vI5LT8AJ55H+4g9/4vbHx1I54fS0XuclLhDHArPQCiMjDxjaL8fPxhw==",
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.12"
      },
      "funding": {
        "url": "https://github.com/fb55/entities?sponsor=1"
      }
    },
    "node_modules/es-define-property": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/es-define-property/-/es-define-property-1.0.1.tgz",
      "integrity": "sha512-e3nRfgfUZ4rNGL232gUgX06QNyyez04KdjFrF+LTRoOXmrOgFKDg4BCdsjW8EnT69eqdYGmRpJwiPVYNrCaW3g==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-errors": {
      "version": "1.3.0",
      "resolved": "https://registry.npmjs.org/es-errors/-/es-errors-1.3.0.tgz",
      "integrity": "sha512-Zf5H2Kxt2xjTvbJvP2ZWLEICxA6j+hAmMzIlypy4xcBg1vKVnx89Wy0GbS+kf5cwCVFFzdCFh2XSCFNULS6csw==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/es-module-lexer": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/es-module-lexer/-/es-module-lexer-1.6.0.tgz",
      "integrity": "sha512-qqnD1yMU6tk/jnaMosogGySTZP8YtUgAffA9nMN+E/rjxcfRQ6IEk7IiozUjgxKoFHBGjTLnrHB/YC45r/59EQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/es-object-atoms": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/es-object-atoms/-/es-object-atoms-1.0.0.tgz",
      "integrity": "sha512-MZ4iQ6JwHOBQjahnjwaC1ZtIBH+2ohjamzAO3oaHcXYup7qxjF2fixyH+Q71voWHeOkI2q/TnJao/KfXYIZWbw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/esbuild": {
      "version": "0.25.0",
      "resolved": "https://registry.npmjs.org/esbuild/-/esbuild-0.25.0.tgz",
      "integrity": "sha512-BXq5mqc8ltbaN34cDqWuYKyNhX8D/Z0J1xdtdQ8UcIIIyJyz+ZMKUt58tF3SrZ85jcfN/PZYhjR5uDQAYNVbuw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "bin": {
        "esbuild": "bin/esbuild"
      },
      "engines": {
        "node": ">=18"
      },
      "optionalDependencies": {
        "@esbuild/aix-ppc64": "0.25.0",
        "@esbuild/android-arm": "0.25.0",
        "@esbuild/android-arm64": "0.25.0",
        "@esbuild/android-x64": "0.25.0",
        "@esbuild/darwin-arm64": "0.25.0",
        "@esbuild/darwin-x64": "0.25.0",
        "@esbuild/freebsd-arm64": "0.25.0",
        "@esbuild/freebsd-x64": "0.25.0",
        "@esbuild/linux-arm": "0.25.0",
        "@esbuild/linux-arm64": "0.25.0",
        "@esbuild/linux-ia32": "0.25.0",
        "@esbuild/linux-loong64": "0.25.0",
        "@esbuild/linux-mips64el": "0.25.0",
        "@esbuild/linux-ppc64": "0.25.0",
        "@esbuild/linux-riscv64": "0.25.0",
        "@esbuild/linux-s390x": "0.25.0",
        "@esbuild/linux-x64": "0.25.0",
        "@esbuild/netbsd-arm64": "0.25.0",
        "@esbuild/netbsd-x64": "0.25.0",
        "@esbuild/openbsd-arm64": "0.25.0",
        "@esbuild/openbsd-x64": "0.25.0",
        "@esbuild/sunos-x64": "0.25.0",
        "@esbuild/win32-arm64": "0.25.0",
        "@esbuild/win32-ia32": "0.25.0",
        "@esbuild/win32-x64": "0.25.0"
      }
    },
    "node_modules/escape-string-regexp": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/escape-string-regexp/-/escape-string-regexp-4.0.0.tgz",
      "integrity": "sha512-TtpcNJ3XAzx3Gq8sWRzJaVajRs0uVxA2YAkdb1jm2YkPz4G6egUFAyA3n5vtEIZefPk5Wa4UXbKuS5fKkJWdgA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/eslint": {
      "version": "8.57.1",
      "resolved": "https://registry.npmjs.org/eslint/-/eslint-8.57.1.tgz",
      "integrity": "sha512-ypowyDxpVSYpkXr9WPv2PAZCtNip1Mv5KTW0SCurXv/9iOpcrH9PaqUElksqEB6pChqHGDRCFTyrZlGhnLNGiA==",
      "deprecated": "This version is no longer supported. Please see https://eslint.org/version-support for other options.",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.2.0",
        "@eslint-community/regexpp": "^4.6.1",
        "@eslint/eslintrc": "^2.1.4",
        "@eslint/js": "8.57.1",
        "@humanwhocodes/config-array": "^0.13.0",
        "@humanwhocodes/module-importer": "^1.0.1",
        "@nodelib/fs.walk": "^1.2.8",
        "@ungap/structured-clone": "^1.2.0",
        "ajv": "^6.12.4",
        "chalk": "^4.0.0",
        "cross-spawn": "^7.0.2",
        "debug": "^4.3.2",
        "doctrine": "^3.0.0",
        "escape-string-regexp": "^4.0.0",
        "eslint-scope": "^7.2.2",
        "eslint-visitor-keys": "^3.4.3",
        "espree": "^9.6.1",
        "esquery": "^1.4.2",
        "esutils": "^2.0.2",
        "fast-deep-equal": "^3.1.3",
        "file-entry-cache": "^6.0.1",
        "find-up": "^5.0.0",
        "glob-parent": "^6.0.2",
        "globals": "^13.19.0",
        "graphemer": "^1.4.0",
        "ignore": "^5.2.0",
        "imurmurhash": "^0.1.4",
        "is-glob": "^4.0.0",
        "is-path-inside": "^3.0.3",
        "js-yaml": "^4.1.0",
        "json-stable-stringify-without-jsonify": "^1.0.1",
        "levn": "^0.4.1",
        "lodash.merge": "^4.6.2",
        "minimatch": "^3.1.2",
        "natural-compare": "^1.4.0",
        "optionator": "^0.9.3",
        "strip-ansi": "^6.0.1",
        "text-table": "^0.2.0"
      },
      "bin": {
        "eslint": "bin/eslint.js"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-compat-utils": {
      "version": "0.5.1",
      "resolved": "https://registry.npmjs.org/eslint-compat-utils/-/eslint-compat-utils-0.5.1.tgz",
      "integrity": "sha512-3z3vFexKIEnjHE3zCMRo6fn/e44U7T1khUjg+Hp0ZQMCigh28rALD0nPFBcGZuiLC5rLZa2ubQHDRln09JfU2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "semver": "^7.5.4"
      },
      "engines": {
        "node": ">=12"
      },
      "peerDependencies": {
        "eslint": ">=6.0.0"
      }
    },
    "node_modules/eslint-config-prettier": {
      "version": "9.1.0",
      "resolved": "https://registry.npmjs.org/eslint-config-prettier/-/eslint-config-prettier-9.1.0.tgz",
      "integrity": "sha512-NSWl5BFQWEPi1j4TjVNItzYV7dZXZ+wP6I6ZhrBGpChQhZRUaElihE9uRRkcbRnNb76UMKDF3r+WTmNcGPKsqw==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "eslint-config-prettier": "bin/cli.js"
      },
      "peerDependencies": {
        "eslint": ">=7.0.0"
      }
    },
    "node_modules/eslint-plugin-svelte": {
      "version": "2.46.1",
      "resolved": "https://registry.npmjs.org/eslint-plugin-svelte/-/eslint-plugin-svelte-2.46.1.tgz",
      "integrity": "sha512-7xYr2o4NID/f9OEYMqxsEQsCsj4KaMy4q5sANaKkAb6/QeCjYFxRmDm2S3YC3A3pl1kyPZ/syOx/i7LcWYSbIw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@eslint-community/eslint-utils": "^4.4.0",
        "@jridgewell/sourcemap-codec": "^1.4.15",
        "eslint-compat-utils": "^0.5.1",
        "esutils": "^2.0.3",
        "known-css-properties": "^0.35.0",
        "postcss": "^8.4.38",
        "postcss-load-config": "^3.1.4",
        "postcss-safe-parser": "^6.0.0",
        "postcss-selector-parser": "^6.1.0",
        "semver": "^7.6.2",
        "svelte-eslint-parser": "^0.43.0"
      },
      "engines": {
        "node": "^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ota-meshi"
      },
      "peerDependencies": {
        "eslint": "^7.0.0 || ^8.0.0-0 || ^9.0.0-0",
        "svelte": "^3.37.0 || ^4.0.0 || ^5.0.0"
      },
      "peerDependenciesMeta": {
        "svelte": {
          "optional": true
        }
      }
    },
    "node_modules/eslint-plugin-svelte/node_modules/postcss-selector-parser": {
      "version": "6.1.2",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.1.2.tgz",
      "integrity": "sha512-Q8qQfPiZ+THO/3ZrOrO0cJJKfpYCagtMUkXbnEfmgUjwXg6z/WBeOyS9APBBPCTSiDV+s4SwQGu8yFsiMRIudg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cssesc": "^3.0.0",
        "util-deprecate": "^1.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/eslint-scope": {
      "version": "7.2.2",
      "resolved": "https://registry.npmjs.org/eslint-scope/-/eslint-scope-7.2.2.tgz",
      "integrity": "sha512-dOt21O7lTMhDM+X9mB4GX+DZrZtCUJPL/wlcTqxyrx5IvO0IYtILdtrQGQp+8n5S0gwSVmOf9NQrjMOgfQZlIg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "esrecurse": "^4.3.0",
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint-visitor-keys": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/eslint-visitor-keys/-/eslint-visitor-keys-3.4.3.tgz",
      "integrity": "sha512-wpc+LXeiyiisxPlEkUzU6svyS1frIO3Mgxj1fdy7Pm8Ygzguax2N3Fa/D/ag1WqbOprdI+uY6wMUl8/a2G+iag==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/eslint/node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/eslint/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/esm-env": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/esm-env/-/esm-env-1.2.2.tgz",
      "integrity": "sha512-Epxrv+Nr/CaL4ZcFGPJIYLWFom+YeV1DqMLHJoEd9SYRxNbaFruBwfEX/kkHUJf55j2+TUbmDcmuilbP1TmXHA==",
      "license": "MIT"
    },
    "node_modules/espree": {
      "version": "9.6.1",
      "resolved": "https://registry.npmjs.org/espree/-/espree-9.6.1.tgz",
      "integrity": "sha512-oruZaFkjorTpF32kDSI5/75ViwGeZginGGy2NoOSg3Q9bnwlnmDm4HLnkl0RE3n+njDXR037aY1+x58Z/zFdwQ==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "acorn": "^8.9.0",
        "acorn-jsx": "^5.3.2",
        "eslint-visitor-keys": "^3.4.1"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/eslint"
      }
    },
    "node_modules/esquery": {
      "version": "1.6.0",
      "resolved": "https://registry.npmjs.org/esquery/-/esquery-1.6.0.tgz",
      "integrity": "sha512-ca9pw9fomFcKPvFLXhBKUK90ZvGibiGOvRJNbjljY7s7uq/5YO4BOzcYtJqExdx99rF6aAcnRxHmcUHcz6sQsg==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "estraverse": "^5.1.0"
      },
      "engines": {
        "node": ">=0.10"
      }
    },
    "node_modules/esrap": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/esrap/-/esrap-1.2.3.tgz",
      "integrity": "sha512-ZlQmCCK+n7SGoqo7DnfKaP1sJZa49P01/dXzmjCASSo04p72w8EksT2NMK8CEX8DhKsfJXANioIw8VyHNsBfvQ==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.4.15",
        "@types/estree": "^1.0.1"
      }
    },
    "node_modules/esrecurse": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/esrecurse/-/esrecurse-4.3.0.tgz",
      "integrity": "sha512-KmfKL3b6G+RXvP8N1vr3Tq1kL/oCFgn2NYXEtqP8/L3pKapUA4G8cFVaoF3SU323CD4XypR/ffioHmkti6/Tag==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "estraverse": "^5.2.0"
      },
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estraverse": {
      "version": "5.3.0",
      "resolved": "https://registry.npmjs.org/estraverse/-/estraverse-5.3.0.tgz",
      "integrity": "sha512-MMdARuVEQziNTeJD8DgMqmhwR11BRQ/cBP+pLtYdSTnf3MIO8fFeiINEbX36ZdNlfU/7A9f3gUw49B3oQsvwBA==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=4.0"
      }
    },
    "node_modules/estree-walker": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/estree-walker/-/estree-walker-3.0.3.tgz",
      "integrity": "sha512-7RUKfXgSMMkzt6ZuXmqapOurLGPPfgj6l9uRZ7lRGolvk0y2yocc35LdcxKC5PQZdn2DMqioAQ2NoWcrTKmm6g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.0"
      }
    },
    "node_modules/esutils": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/esutils/-/esutils-2.0.3.tgz",
      "integrity": "sha512-kVscqXk4OCp68SZ0dkgEKVi6/8ij300KBWTJq32P/dYeWTSwK41WyTxalN1eRmA5Z9UU/LX9D7FWSmV9SAYx6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/expect-type": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/expect-type/-/expect-type-1.2.0.tgz",
      "integrity": "sha512-80F22aiJ3GLyVnS/B3HzgR6RelZVumzj9jkL0Rhz4h0xYbNW9PjlQz5h3J/SShErbXBc295vseR4/MIbVmUbeA==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=12.0.0"
      }
    },
    "node_modules/fast-deep-equal": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-3.1.3.tgz",
      "integrity": "sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-glob": {
      "version": "3.3.2",
      "resolved": "https://registry.npmjs.org/fast-glob/-/fast-glob-3.3.2.tgz",
      "integrity": "sha512-oX2ruAFQwf/Orj8m737Y5adxDQO0LAB7/S5MnxCdTNDd4p6BsyIVsv9JQsATbTSq8KHRpLwIHbVlUNatxd+1Ow==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@nodelib/fs.stat": "^2.0.2",
        "@nodelib/fs.walk": "^1.2.3",
        "glob-parent": "^5.1.2",
        "merge2": "^1.3.0",
        "micromatch": "^4.0.4"
      },
      "engines": {
        "node": ">=8.6.0"
      }
    },
    "node_modules/fast-glob/node_modules/glob-parent": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-5.1.2.tgz",
      "integrity": "sha512-AOIgSQCepiJYwP3ARnGx+5VnTu2HBYdzbGP45eLw1vr3zB3vZLeyed1sC9hnbcOc9/SrMyM5RPQrkGz4aS9Zow==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.1"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fast-json-stable-stringify": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/fast-json-stable-stringify/-/fast-json-stable-stringify-2.1.0.tgz",
      "integrity": "sha512-lhd/wF+Lk98HZoTCtlVraHtfh5XYijIjalXck7saUtuanSDyLMxnHhSXEDJqHxD7msR8D0uCmqlkwjCV8xvwHw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-levenshtein": {
      "version": "2.0.6",
      "resolved": "https://registry.npmjs.org/fast-levenshtein/-/fast-levenshtein-2.0.6.tgz",
      "integrity": "sha512-DCXu6Ifhqcks7TZKY3Hxp3y6qphY5SJZmrWMDrKcERSOXWQdMhU9Ig/PYrzyw/ul9jOIyh0N4M0tbC5hodg8dw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/fast-xml-parser": {
      "version": "4.5.1",
      "resolved": "https://registry.npmjs.org/fast-xml-parser/-/fast-xml-parser-4.5.1.tgz",
      "integrity": "sha512-y655CeyUQ+jj7KBbYMc4FG01V8ZQqjN+gDYGJ50RtfsUB8iG9AmwmwoAgeKLJdmueKKMrH1RJ7yXHTSoczdv5w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/NaturalIntelligence"
        },
        {
          "type": "paypal",
          "url": "https://paypal.me/naturalintelligence"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "strnum": "^1.0.5"
      },
      "bin": {
        "fxparser": "src/cli/cli.js"
      }
    },
    "node_modules/fastq": {
      "version": "1.17.1",
      "resolved": "https://registry.npmjs.org/fastq/-/fastq-1.17.1.tgz",
      "integrity": "sha512-sRVD3lWVIXWg6By68ZN7vho9a1pQcN/WBFaAAsDDFzlJjvoGx0P8z7V1t72grFJfJhu3YPZBuu25f7Kaw2jN1w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "reusify": "^1.0.4"
      }
    },
    "node_modules/file-entry-cache": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/file-entry-cache/-/file-entry-cache-6.0.1.tgz",
      "integrity": "sha512-7Gps/XWymbLk2QLYK4NzpMOrYjMhdIxXuIvy2QBsLE6ljuodKvdkWs/cpyJJ3CVIVpH0Oi1Hvg1ovbMzLdFBBg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flat-cache": "^3.0.4"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/fill-range": {
      "version": "7.1.1",
      "resolved": "https://registry.npmjs.org/fill-range/-/fill-range-7.1.1.tgz",
      "integrity": "sha512-YsGpe3WHLK8ZYi4tWDg2Jy3ebRz2rXowDxnld4bkQB00cc/1Zw9AWnC0i9ztDJitivtQvaI9KaLyKrc+hBW0yg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "to-regex-range": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/find-replace": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/find-replace/-/find-replace-3.0.0.tgz",
      "integrity": "sha512-6Tb2myMioCAgv5kfvP5/PkZZ/ntTpVK39fHY7WkWBgvbeE+VHd/tZuZ4mrC+bxh4cfOZeYKVPaJIZtZXV7GNCQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-back": "^3.0.1"
      },
      "engines": {
        "node": ">=4.0.0"
      }
    },
    "node_modules/find-up": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/find-up/-/find-up-5.0.0.tgz",
      "integrity": "sha512-78/PXT1wlLLDgTzDs7sjq9hzz0vXD+zn+7wypEe4fXQxCmdmqfGsEPQxmiCSQI3ajFV91bVSsvNtrJRiW6nGng==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "locate-path": "^6.0.0",
        "path-exists": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/flat-cache": {
      "version": "3.2.0",
      "resolved": "https://registry.npmjs.org/flat-cache/-/flat-cache-3.2.0.tgz",
      "integrity": "sha512-CYcENa+FtcUKLmhhqyctpclsq7QF38pKjZHsGNiSQF5r4FtoKDWabFDl3hzaEQMvT1LHEysw5twgLvpYYb4vbw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "flatted": "^3.2.9",
        "keyv": "^4.5.3",
        "rimraf": "^3.0.2"
      },
      "engines": {
        "node": "^10.12.0 || >=12.0.0"
      }
    },
    "node_modules/flatted": {
      "version": "3.3.2",
      "resolved": "https://registry.npmjs.org/flatted/-/flatted-3.3.2.tgz",
      "integrity": "sha512-AiwGJM8YcNOaobumgtng+6NHuOqC3A7MixFeDafM3X9cIUM+xUXoS5Vfgf+OihAYe20fxqNM9yPBXJzRtZ/4eA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/foreground-child": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/foreground-child/-/foreground-child-3.3.0.tgz",
      "integrity": "sha512-Ld2g8rrAyMYFXBhEqMz8ZAHBi4J4uS1i/CxGMDnjyFWddMXLVcDp051DZfu+t7+ab7Wv6SMqpWmyFIj5UbfFvg==",
      "license": "ISC",
      "dependencies": {
        "cross-spawn": "^7.0.0",
        "signal-exit": "^4.0.1"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/form-data": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/form-data/-/form-data-4.0.1.tgz",
      "integrity": "sha512-tzN8e4TX8+kkxGPK8D5u0FNmjPUjw3lwC9lSLxxoB/+GtsJG91CO8bSWy73APlgAZzZbXEYZJuxjkHH2w+Ezhw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "asynckit": "^0.4.0",
        "combined-stream": "^1.0.8",
        "mime-types": "^2.1.12"
      },
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/fs.realpath": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/fs.realpath/-/fs.realpath-1.0.0.tgz",
      "integrity": "sha512-OO0pH2lK6a0hZnAdau5ItzHPI6pUlvI7jMVnxUQRtw4owF2wk8lOSabtGDCTP4Ggrg2MbGnWO9X8K1t4+fGMDw==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/fsevents": {
      "version": "2.3.3",
      "resolved": "https://registry.npmjs.org/fsevents/-/fsevents-2.3.3.tgz",
      "integrity": "sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==",
      "dev": true,
      "hasInstallScript": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": "^8.16.0 || ^10.6.0 || >=11.0.0"
      }
    },
    "node_modules/function-bind": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/function-bind/-/function-bind-1.1.2.tgz",
      "integrity": "sha512-7XHNxH7qX9xG5mIwxkhumTox/MIRNcOgDrxWsMt2pAr23WHp6MrRlN7FBSFpCpr+oVO0F744iUgR82nJMfG2SA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/fuse.js": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/fuse.js/-/fuse.js-7.0.0.tgz",
      "integrity": "sha512-14F4hBIxqKvD4Zz/XjDc3y94mNZN6pRv3U13Udo0lNLCWRBUsrMv2xwcF/y/Z5sV6+FQW+/ow68cHpm4sunt8Q==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/get-intrinsic": {
      "version": "1.2.6",
      "resolved": "https://registry.npmjs.org/get-intrinsic/-/get-intrinsic-1.2.6.tgz",
      "integrity": "sha512-qxsEs+9A+u85HhllWJJFicJfPDhRmjzoYdl64aMWW9yRIJmSyxdn8IEkuIM530/7T+lv0TIHd8L6Q/ra0tEoeA==",
      "license": "MIT",
      "dependencies": {
        "call-bind-apply-helpers": "^1.0.1",
        "dunder-proto": "^1.0.0",
        "es-define-property": "^1.0.1",
        "es-errors": "^1.3.0",
        "es-object-atoms": "^1.0.0",
        "function-bind": "^1.1.2",
        "gopd": "^1.2.0",
        "has-symbols": "^1.1.0",
        "hasown": "^2.0.2",
        "math-intrinsics": "^1.0.0"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/glob": {
      "version": "10.4.5",
      "resolved": "https://registry.npmjs.org/glob/-/glob-10.4.5.tgz",
      "integrity": "sha512-7Bv8RF0k6xjo7d4A/PxYLbUCfb6c+Vpd2/mB2yRDlew7Jb5hEXiCD9ibfO7wpk8i4sevK6DFny9h7EYbM3/sHg==",
      "license": "ISC",
      "dependencies": {
        "foreground-child": "^3.1.0",
        "jackspeak": "^3.1.2",
        "minimatch": "^9.0.4",
        "minipass": "^7.1.2",
        "package-json-from-dist": "^1.0.0",
        "path-scurry": "^1.11.1"
      },
      "bin": {
        "glob": "dist/esm/bin.mjs"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/glob-parent": {
      "version": "6.0.2",
      "resolved": "https://registry.npmjs.org/glob-parent/-/glob-parent-6.0.2.tgz",
      "integrity": "sha512-XxwI8EOhVQgWp6iDL+3b0r86f4d6AX6zSU55HfB4ydCEuXLXc5FcYeOu+nnGftS4TEju/11rt4KJPTMgbfmv4A==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "is-glob": "^4.0.3"
      },
      "engines": {
        "node": ">=10.13.0"
      }
    },
    "node_modules/glob/node_modules/minimatch": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.5.tgz",
      "integrity": "sha512-G6T0ZX48xgozx7587koeX9Ys2NYy6Gmv//P89sEte9V9whIapMNF4idKxnW2QtCcLiTWlb/wfCabAtAFWhhBow==",
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/globals": {
      "version": "13.24.0",
      "resolved": "https://registry.npmjs.org/globals/-/globals-13.24.0.tgz",
      "integrity": "sha512-AhO5QUcj8llrbG09iWhPU2B204J1xnPeL8kQmVorSsy+Sjj1sk8gIyh6cUocGmH4L0UuhAJy+hJMRA4mgA4mFQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "type-fest": "^0.20.2"
      },
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/globby": {
      "version": "11.1.0",
      "resolved": "https://registry.npmjs.org/globby/-/globby-11.1.0.tgz",
      "integrity": "sha512-jhIXaOzy1sb8IyocaruWSn1TjmnBVs8Ayhcy83rmxNJ8q2uWKCAj3CnJY+KpGSXCueAPc0i05kVvVKtP1t9S3g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-union": "^2.1.0",
        "dir-glob": "^3.0.1",
        "fast-glob": "^3.2.9",
        "ignore": "^5.2.0",
        "merge2": "^1.4.1",
        "slash": "^3.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/gopd": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/gopd/-/gopd-1.2.0.tgz",
      "integrity": "sha512-ZUKRh6/kUFoAiTAtTYPZJ3hw9wNxx+BIBOijnlG9PnrJsCcSjs1wyyD6vJpaYtgnzDrKYRSqf3OO6Rfa93xsRg==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/graceful-fs": {
      "version": "4.2.11",
      "resolved": "https://registry.npmjs.org/graceful-fs/-/graceful-fs-4.2.11.tgz",
      "integrity": "sha512-RbJ5/jmFcNNCcDV5o9eTnBLJ/HszWV0P73bc+Ff4nS/rJj+YaS6IGyiOL0VoBYX+l1Wrl3k63h/KrH+nhJ0XvQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/graphemer": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/graphemer/-/graphemer-1.4.0.tgz",
      "integrity": "sha512-EtKwoO6kxCL9WO5xipiHTZlSzBm7WLT627TqC/uVRd0HKmq8NXyebnNYxDoBi7wt8eTWrUrKXCOVaFq9x1kgag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/handlebars": {
      "version": "4.7.8",
      "resolved": "https://registry.npmjs.org/handlebars/-/handlebars-4.7.8.tgz",
      "integrity": "sha512-vafaFqs8MZkRrSX7sFVUdo3ap/eNiLnb4IakshzvP56X5Nr1iGKAIqdX6tMlm6HcNRIkr6AxO5jFEoJzzpT8aQ==",
      "license": "MIT",
      "dependencies": {
        "minimist": "^1.2.5",
        "neo-async": "^2.6.2",
        "source-map": "^0.6.1",
        "wordwrap": "^1.0.0"
      },
      "bin": {
        "handlebars": "bin/handlebars"
      },
      "engines": {
        "node": ">=0.4.7"
      },
      "optionalDependencies": {
        "uglify-js": "^3.1.4"
      }
    },
    "node_modules/has-flag": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/has-flag/-/has-flag-4.0.0.tgz",
      "integrity": "sha512-EykJT/Q1KjTWctppgIAgfSO0tKVuZUjhgMr17kqTumMl6Afv3EISleU7qZUzoXDFTAHTDC4NOoG/ZxU3EvlMPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/has-property-descriptors": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/has-property-descriptors/-/has-property-descriptors-1.0.2.tgz",
      "integrity": "sha512-55JNKuIW+vq4Ke1BjOTjM2YctQIvCT7GFzHwmfZPGo5wnrgkid0YQtnAleFSqumZm4az3n2BS+erby5ipJdgrg==",
      "license": "MIT",
      "dependencies": {
        "es-define-property": "^1.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/has-symbols": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/has-symbols/-/has-symbols-1.1.0.tgz",
      "integrity": "sha512-1cDNdwJ2Jaohmb3sg4OmKaMBwuC48sYni5HUw2DvsC8LjGTLK9h+eb1X6RyuOHe4hT0ULCW68iomhjUoKUqlPQ==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/hasown": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/hasown/-/hasown-2.0.2.tgz",
      "integrity": "sha512-0hJU9SCPvmMzIBdZFqNPXWa6dqh7WdH0cII9y+CyS8rG3nL48Bclra9HmKhVVUHyPWNH5Y7xDwAB7bfgSjkUMQ==",
      "license": "MIT",
      "dependencies": {
        "function-bind": "^1.1.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/html-encoding-sniffer": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/html-encoding-sniffer/-/html-encoding-sniffer-4.0.0.tgz",
      "integrity": "sha512-Y22oTqIU4uuPgEemfz7NDJz6OeKf12Lsu+QC+s3BVpda64lTiMYCyGwg5ki4vFxkMwQdeZDl2adZoqUgdFuTgQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "whatwg-encoding": "^3.1.1"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/html-to-text": {
      "version": "9.0.5",
      "resolved": "https://registry.npmjs.org/html-to-text/-/html-to-text-9.0.5.tgz",
      "integrity": "sha512-qY60FjREgVZL03vJU6IfMV4GDjGBIoOyvuFdpBDIX9yTlDw0TjxVBQp+P8NvpdIXNJvfWBTNul7fsAQJq2FNpg==",
      "license": "MIT",
      "dependencies": {
        "@selderee/plugin-htmlparser2": "^0.11.0",
        "deepmerge": "^4.3.1",
        "dom-serializer": "^2.0.0",
        "htmlparser2": "^8.0.2",
        "selderee": "^0.11.0"
      },
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/htmlparser2": {
      "version": "8.0.2",
      "resolved": "https://registry.npmjs.org/htmlparser2/-/htmlparser2-8.0.2.tgz",
      "integrity": "sha512-GYdjWKDkbRLkZ5geuHs5NY1puJ+PXwP7+fHPRz06Eirsb9ugf6d8kkXav6ADhcODhFFPMIXyxkxSuMf3D6NCFA==",
      "funding": [
        "https://github.com/fb55/htmlparser2?sponsor=1",
        {
          "type": "github",
          "url": "https://github.com/sponsors/fb55"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "domelementtype": "^2.3.0",
        "domhandler": "^5.0.3",
        "domutils": "^3.0.1",
        "entities": "^4.4.0"
      }
    },
    "node_modules/http-proxy-agent": {
      "version": "7.0.2",
      "resolved": "https://registry.npmjs.org/http-proxy-agent/-/http-proxy-agent-7.0.2.tgz",
      "integrity": "sha512-T1gkAiYYDWYx3V5Bmyu7HcfcvL7mUrTWiM6yOfa3PIphViJ/gFPbvidQ+veqSOHci/PxBcDabeUNCzpOODJZig==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "agent-base": "^7.1.0",
        "debug": "^4.3.4"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/https-proxy-agent": {
      "version": "7.0.6",
      "resolved": "https://registry.npmjs.org/https-proxy-agent/-/https-proxy-agent-7.0.6.tgz",
      "integrity": "sha512-vK9P5/iUfdl95AI+JVyUuIcVtd4ofvtrOr3HNtM2yxC9bnMbEdp3x01OhQNnjb8IJYi38VlTE3mBXwcfvywuSw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "agent-base": "^7.1.2",
        "debug": "4"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/iconv-lite": {
      "version": "0.6.3",
      "resolved": "https://registry.npmjs.org/iconv-lite/-/iconv-lite-0.6.3.tgz",
      "integrity": "sha512-4fCk79wshMdzMp2rH06qWrJE4iolqLhCUH+OiuIgU++RB0+94NlDL81atO7GX55uUKueo0txHNtvEyI6D7WdMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "safer-buffer": ">= 2.1.2 < 3.0.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/ignore": {
      "version": "5.3.2",
      "resolved": "https://registry.npmjs.org/ignore/-/ignore-5.3.2.tgz",
      "integrity": "sha512-hsBTNUqQTDwkWtcdYI2i06Y/nUBEsNEDJKjWdigLvegy8kDuJAS8uRlpkkcQpyEXL0Z/pjDy5HBmMjRCJ2gq+g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4"
      }
    },
    "node_modules/import-fresh": {
      "version": "3.3.0",
      "resolved": "https://registry.npmjs.org/import-fresh/-/import-fresh-3.3.0.tgz",
      "integrity": "sha512-veYYhQa+D1QBKznvhUHxb8faxlrwUnxseDAbAp457E0wLNio2bOSKnjYDhMj+YiAq61xrMGhQk9iXVk5FzgQMw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "parent-module": "^1.0.0",
        "resolve-from": "^4.0.0"
      },
      "engines": {
        "node": ">=6"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/import-meta-resolve": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/import-meta-resolve/-/import-meta-resolve-4.1.0.tgz",
      "integrity": "sha512-I6fiaX09Xivtk+THaMfAwnA3MVA5Big1WHF1Dfx9hFuvNIWpXnorlkzhcQf6ehrqQiiZECRt1poOAkPmer3ruw==",
      "dev": true,
      "license": "MIT",
      "funding": {
        "type": "github",
        "url": "https://github.com/sponsors/wooorm"
      }
    },
    "node_modules/imurmurhash": {
      "version": "0.1.4",
      "resolved": "https://registry.npmjs.org/imurmurhash/-/imurmurhash-0.1.4.tgz",
      "integrity": "sha512-JmXMZ6wuvDmLiHEml9ykzqO6lwFbof0GG4IkcGaENdCRDDmMVnny7s5HsIgHCbaq0w2MyPhDqkhTUgS2LU2PHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.8.19"
      }
    },
    "node_modules/inflight": {
      "version": "1.0.6",
      "resolved": "https://registry.npmjs.org/inflight/-/inflight-1.0.6.tgz",
      "integrity": "sha512-k92I/b08q4wvFscXCLvqfsHCrjrF7yiXsQuIVvVE7N82W3+aqpzuUdBbfhWcy/FZR3/4IgflMgKLOsvPDrGCJA==",
      "deprecated": "This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "once": "^1.3.0",
        "wrappy": "1"
      }
    },
    "node_modules/inherits": {
      "version": "2.0.4",
      "resolved": "https://registry.npmjs.org/inherits/-/inherits-2.0.4.tgz",
      "integrity": "sha512-k/vGaX4/Yla3WzyMCvTQOXYeIHvqOKtnqBduzTHpzpQZzAskKMhZ2K+EnBiSM9zGSoIFeMpXKxa4dYeZIQqewQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/ini": {
      "version": "1.3.8",
      "resolved": "https://registry.npmjs.org/ini/-/ini-1.3.8.tgz",
      "integrity": "sha512-JV/yugV2uzW5iMRSiZAyDtQd+nxtUnjeLt0acNdw98kKLrvuRVyB80tsREOE7yvGVgalhZ6RNXCmEHkUKBKxew==",
      "license": "ISC"
    },
    "node_modules/is-extglob": {
      "version": "2.1.1",
      "resolved": "https://registry.npmjs.org/is-extglob/-/is-extglob-2.1.1.tgz",
      "integrity": "sha512-SbKbANkN603Vi4jEZv49LeVJMn4yGwsbzZworEoyEiutsN3nJYdbO36zfhGJ6QEDpOZIFkDtnq5JRxmvl3jsoQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-fullwidth-code-point": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/is-fullwidth-code-point/-/is-fullwidth-code-point-3.0.0.tgz",
      "integrity": "sha512-zymm5+u+sCsSWyD9qNaejV3DFvhCKclKdizYaJUuHA83RLjb7nSuGnddCHGv0hk+KY7BMAlsWeK4Ueg6EV6XQg==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-glob": {
      "version": "4.0.3",
      "resolved": "https://registry.npmjs.org/is-glob/-/is-glob-4.0.3.tgz",
      "integrity": "sha512-xelSayHH36ZgE7ZWhli7pW34hNbNl8Ojv5KVmkJD4hBdD3th8Tfk9vYasLM+mXWOZhFkgZfxhLSnrwRr4elSSg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-extglob": "^2.1.1"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/is-number": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/is-number/-/is-number-7.0.0.tgz",
      "integrity": "sha512-41Cifkg6e8TylSpdtTpeLVMqvSBEVzTttHvERD741+pnZ8ANv0004MRL43QKPDlK9cGvNp6NZWZUBlbGXYxxng==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.12.0"
      }
    },
    "node_modules/is-path-inside": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-path-inside/-/is-path-inside-3.0.3.tgz",
      "integrity": "sha512-Fd4gABb+ycGAmKou8eMftCupSir5lRxqf4aD/vd0cD2qc4HL07OjCeuHMr8Ro4CoMaeCKDB0/ECBOVWjTwUvPQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/is-potential-custom-element-name": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/is-potential-custom-element-name/-/is-potential-custom-element-name-1.0.1.tgz",
      "integrity": "sha512-bCYeRA2rVibKZd+s2625gGnGF/t7DSqDs4dP7CrLA1m7jKWz6pps0LpYLJN8Q64HtmPKJ1hrN3nzPNKFEKOUiQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/is-reference": {
      "version": "3.0.3",
      "resolved": "https://registry.npmjs.org/is-reference/-/is-reference-3.0.3.tgz",
      "integrity": "sha512-ixkJoqQvAP88E6wLydLGGqCJsrFUnqoH6HnaczB8XmDH1oaWU+xxdptvikTgaEhtZ53Ky6YXiBuUI2WXLMCwjw==",
      "license": "MIT",
      "dependencies": {
        "@types/estree": "^1.0.6"
      }
    },
    "node_modules/isexe": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/isexe/-/isexe-2.0.0.tgz",
      "integrity": "sha512-RHxMLp9lnKHGHRng9QFhRCMbYAcVpn69smSGcq3f36xjgVVWThj4qqLbTLlq7Ssj8B+fIQ1EuCEGI2lKsyQeIw==",
      "license": "ISC"
    },
    "node_modules/jackspeak": {
      "version": "3.4.3",
      "resolved": "https://registry.npmjs.org/jackspeak/-/jackspeak-3.4.3.tgz",
      "integrity": "sha512-OGlZQpz2yfahA/Rd1Y8Cd9SIEsqvXkLVoSw/cgwhnhFMDbsQFeZYoJJ7bIZBS9BcamUW96asq/npPWugM+RQBw==",
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "@isaacs/cliui": "^8.0.2"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      },
      "optionalDependencies": {
        "@pkgjs/parseargs": "^0.11.0"
      }
    },
    "node_modules/js-beautify": {
      "version": "1.15.1",
      "resolved": "https://registry.npmjs.org/js-beautify/-/js-beautify-1.15.1.tgz",
      "integrity": "sha512-ESjNzSlt/sWE8sciZH8kBF8BPlwXPwhR6pWKAw8bw4Bwj+iZcnKW6ONWUutJ7eObuBZQpiIb8S7OYspWrKt7rA==",
      "license": "MIT",
      "dependencies": {
        "config-chain": "^1.1.13",
        "editorconfig": "^1.0.4",
        "glob": "^10.3.3",
        "js-cookie": "^3.0.5",
        "nopt": "^7.2.0"
      },
      "bin": {
        "css-beautify": "js/bin/css-beautify.js",
        "html-beautify": "js/bin/html-beautify.js",
        "js-beautify": "js/bin/js-beautify.js"
      },
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/js-cookie": {
      "version": "3.0.5",
      "resolved": "https://registry.npmjs.org/js-cookie/-/js-cookie-3.0.5.tgz",
      "integrity": "sha512-cEiJEAEoIbWfCZYKWhVwFuvPX1gETRYPw6LlaTKoxD3s2AkXzkCjnp6h0V77ozyqj0jakteJ4YqDJT830+lVGw==",
      "license": "MIT",
      "engines": {
        "node": ">=14"
      }
    },
    "node_modules/js-tokens": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/js-tokens/-/js-tokens-4.0.0.tgz",
      "integrity": "sha512-RdJUflcE3cUzKiMqQgsCu06FPu9UdIJO0beYbPhHN4k6apgJtifcoCtT9bcxOpYBtpD2kCM6Sbzg4CausW/PKQ==",
      "license": "MIT",
      "peer": true
    },
    "node_modules/js-yaml": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/js-yaml/-/js-yaml-4.1.0.tgz",
      "integrity": "sha512-wpxZs9NoxZaJESJGIZTyDEaYpl0FKSA+FB9aJiyemKhMwkxQg63h4T1KJgUGHpTqPDNRcmmYLugrRjJlBtWvRA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "argparse": "^2.0.1"
      },
      "bin": {
        "js-yaml": "bin/js-yaml.js"
      }
    },
    "node_modules/jsdom": {
      "version": "24.1.3",
      "resolved": "https://registry.npmjs.org/jsdom/-/jsdom-24.1.3.tgz",
      "integrity": "sha512-MyL55p3Ut3cXbeBEG7Hcv0mVM8pp8PBNWxRqchZnSfAiES1v1mRnMeFfaHWIPULpwsYfvO+ZmMZz5tGCnjzDUQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cssstyle": "^4.0.1",
        "data-urls": "^5.0.0",
        "decimal.js": "^10.4.3",
        "form-data": "^4.0.0",
        "html-encoding-sniffer": "^4.0.0",
        "http-proxy-agent": "^7.0.2",
        "https-proxy-agent": "^7.0.5",
        "is-potential-custom-element-name": "^1.0.1",
        "nwsapi": "^2.2.12",
        "parse5": "^7.1.2",
        "rrweb-cssom": "^0.7.1",
        "saxes": "^6.0.0",
        "symbol-tree": "^3.2.4",
        "tough-cookie": "^4.1.4",
        "w3c-xmlserializer": "^5.0.0",
        "webidl-conversions": "^7.0.0",
        "whatwg-encoding": "^3.1.1",
        "whatwg-mimetype": "^4.0.0",
        "whatwg-url": "^14.0.0",
        "ws": "^8.18.0",
        "xml-name-validator": "^5.0.0"
      },
      "engines": {
        "node": ">=18"
      },
      "peerDependencies": {
        "canvas": "^2.11.2"
      },
      "peerDependenciesMeta": {
        "canvas": {
          "optional": true
        }
      }
    },
    "node_modules/jsdom/node_modules/tr46": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-5.0.0.tgz",
      "integrity": "sha512-tk2G5R2KRwBd+ZN0zaEXpmzdKyOYksXwywulIX95MBODjSzMIuQnQ3m8JxgbhnL1LeVo7lqQKsYa1O3Htl7K5g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "punycode": "^2.3.1"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/jsdom/node_modules/whatwg-url": {
      "version": "14.1.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-14.1.0.tgz",
      "integrity": "sha512-jlf/foYIKywAt3x/XWKZ/3rz8OSJPiWktjmk891alJUEjiVxKX9LEO92qH3hv4aJ0mN3MWPvGMCy8jQi95xK4w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "tr46": "^5.0.0",
        "webidl-conversions": "^7.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/json-buffer": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/json-buffer/-/json-buffer-3.0.1.tgz",
      "integrity": "sha512-4bV5BfR2mqfQTJm+V5tPPdf+ZpuhiIvTuAB5g8kcrXOZpTT/QwwVRWBywX1ozr6lEuPdbHxwaJlm9G6mI2sfSQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-schema-traverse": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/json-schema-traverse/-/json-schema-traverse-0.4.1.tgz",
      "integrity": "sha512-xbbCH5dCYU5T8LcEhhuh7HJ88HXuW3qsI3Y0zOZFKfZEHcpWiHU/Jxzk629Brsab/mMiHQti9wMP+845RPe3Vg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/json-stable-stringify-without-jsonify": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/json-stable-stringify-without-jsonify/-/json-stable-stringify-without-jsonify-1.0.1.tgz",
      "integrity": "sha512-Bdboy+l7tA3OGW6FjyFHWkP5LuByj1Tk33Ljyq0axyzdk9//JSi2u3fP1QSmd1KNwq6VOKYGlAu87CisVir6Pw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/keyv": {
      "version": "4.5.4",
      "resolved": "https://registry.npmjs.org/keyv/-/keyv-4.5.4.tgz",
      "integrity": "sha512-oxVHkHR/EJf2CNXnWxRLW6mg7JyCCUcG0DtEGmL2ctUo1PNTin1PUil+r/+4r5MpVgC/fn1kjsx7mjSujKqIpw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "json-buffer": "3.0.1"
      }
    },
    "node_modules/kleur": {
      "version": "4.1.5",
      "resolved": "https://registry.npmjs.org/kleur/-/kleur-4.1.5.tgz",
      "integrity": "sha512-o+NO+8WrRiQEE4/7nwRJhN1HWpVmJm511pBHUxPLtp0BUISzlBplORYSmTclCnJvQq2tKu/sgl3xVpkc7ZWuQQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/known-css-properties": {
      "version": "0.35.0",
      "resolved": "https://registry.npmjs.org/known-css-properties/-/known-css-properties-0.35.0.tgz",
      "integrity": "sha512-a/RAk2BfKk+WFGhhOCAYqSiFLc34k8Mt/6NWRI4joER0EYUzXIcFivjjnoD3+XU1DggLn/tZc3DOAgke7l8a4A==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/leac": {
      "version": "0.6.0",
      "resolved": "https://registry.npmjs.org/leac/-/leac-0.6.0.tgz",
      "integrity": "sha512-y+SqErxb8h7nE/fiEX07jsbuhrpO9lL8eca7/Y1nuWV2moNlXhyd59iDGcRf6moVyDMbmTNzL40SUyrFU/yDpg==",
      "license": "MIT",
      "funding": {
        "url": "https://ko-fi.com/killymxi"
      }
    },
    "node_modules/levn": {
      "version": "0.4.1",
      "resolved": "https://registry.npmjs.org/levn/-/levn-0.4.1.tgz",
      "integrity": "sha512-+bT2uH4E5LGE7h/n3evcS/sQlJXCpIp6ym8OWJ5eV6+67Dsql/LaaT7qJBAt2rzfoa/5QBGBhxDix1dMt2kQKQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1",
        "type-check": "~0.4.0"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/lightningcss": {
      "version": "1.29.1",
      "resolved": "https://registry.npmjs.org/lightningcss/-/lightningcss-1.29.1.tgz",
      "integrity": "sha512-FmGoeD4S05ewj+AkhTY+D+myDvXI6eL27FjHIjoyUkO/uw7WZD1fBVs0QxeYWa7E17CUHJaYX/RUGISCtcrG4Q==",
      "dev": true,
      "license": "MPL-2.0",
      "dependencies": {
        "detect-libc": "^1.0.3"
      },
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      },
      "optionalDependencies": {
        "lightningcss-darwin-arm64": "1.29.1",
        "lightningcss-darwin-x64": "1.29.1",
        "lightningcss-freebsd-x64": "1.29.1",
        "lightningcss-linux-arm-gnueabihf": "1.29.1",
        "lightningcss-linux-arm64-gnu": "1.29.1",
        "lightningcss-linux-arm64-musl": "1.29.1",
        "lightningcss-linux-x64-gnu": "1.29.1",
        "lightningcss-linux-x64-musl": "1.29.1",
        "lightningcss-win32-arm64-msvc": "1.29.1",
        "lightningcss-win32-x64-msvc": "1.29.1"
      }
    },
    "node_modules/lightningcss-darwin-arm64": {
      "version": "1.29.1",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-arm64/-/lightningcss-darwin-arm64-1.29.1.tgz",
      "integrity": "sha512-HtR5XJ5A0lvCqYAoSv2QdZZyoHNttBpa5EP9aNuzBQeKGfbyH5+UipLWvVzpP4Uml5ej4BYs5I9Lco9u1fECqw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-darwin-x64": {
      "version": "1.29.1",
      "resolved": "https://registry.npmjs.org/lightningcss-darwin-x64/-/lightningcss-darwin-x64-1.29.1.tgz",
      "integrity": "sha512-k33G9IzKUpHy/J/3+9MCO4e+PzaFblsgBjSGlpAaFikeBFm8B/CkO3cKU9oI4g+fjS2KlkLM/Bza9K/aw8wsNA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "darwin"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-freebsd-x64": {
      "version": "1.29.1",
      "resolved": "https://registry.npmjs.org/lightningcss-freebsd-x64/-/lightningcss-freebsd-x64-1.29.1.tgz",
      "integrity": "sha512-0SUW22fv/8kln2LnIdOCmSuXnxgxVC276W5KLTwoehiO0hxkacBxjHOL5EtHD8BAXg2BvuhsJPmVMasvby3LiQ==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "freebsd"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm-gnueabihf": {
      "version": "1.29.1",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm-gnueabihf/-/lightningcss-linux-arm-gnueabihf-1.29.1.tgz",
      "integrity": "sha512-sD32pFvlR0kDlqsOZmYqH/68SqUMPNj+0pucGxToXZi4XZgZmqeX/NkxNKCPsswAXU3UeYgDSpGhu05eAufjDg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-gnu": {
      "version": "1.29.1",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-gnu/-/lightningcss-linux-arm64-gnu-1.29.1.tgz",
      "integrity": "sha512-0+vClRIZ6mmJl/dxGuRsE197o1HDEeeRk6nzycSy2GofC2JsY4ifCRnvUWf/CUBQmlrvMzt6SMQNMSEu22csWQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-arm64-musl": {
      "version": "1.29.1",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-arm64-musl/-/lightningcss-linux-arm64-musl-1.29.1.tgz",
      "integrity": "sha512-UKMFrG4rL/uHNgelBsDwJcBqVpzNJbzsKkbI3Ja5fg00sgQnHw/VrzUTEc4jhZ+AN2BvQYz/tkHu4vt1kLuJyw==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-gnu": {
      "version": "1.29.1",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-gnu/-/lightningcss-linux-x64-gnu-1.29.1.tgz",
      "integrity": "sha512-u1S+xdODy/eEtjADqirA774y3jLcm8RPtYztwReEXoZKdzgsHYPl0s5V52Tst+GKzqjebkULT86XMSxejzfISw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-linux-x64-musl": {
      "version": "1.29.1",
      "resolved": "https://registry.npmjs.org/lightningcss-linux-x64-musl/-/lightningcss-linux-x64-musl-1.29.1.tgz",
      "integrity": "sha512-L0Tx0DtaNUTzXv0lbGCLB/c/qEADanHbu4QdcNOXLIe1i8i22rZRpbT3gpWYsCh9aSL9zFujY/WmEXIatWvXbw==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "linux"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-arm64-msvc": {
      "version": "1.29.1",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-arm64-msvc/-/lightningcss-win32-arm64-msvc-1.29.1.tgz",
      "integrity": "sha512-QoOVnkIEFfbW4xPi+dpdft/zAKmgLgsRHfJalEPYuJDOWf7cLQzYg0DEh8/sn737FaeMJxHZRc1oBreiwZCjog==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lightningcss-win32-x64-msvc": {
      "version": "1.29.1",
      "resolved": "https://registry.npmjs.org/lightningcss-win32-x64-msvc/-/lightningcss-win32-x64-msvc-1.29.1.tgz",
      "integrity": "sha512-NygcbThNBe4JElP+olyTI/doBNGJvLs3bFCRPdvuCcxZCcCZ71B858IHpdm7L1btZex0FvCmM17FK98Y9MRy1Q==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MPL-2.0",
      "optional": true,
      "os": [
        "win32"
      ],
      "engines": {
        "node": ">= 12.0.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/parcel"
      }
    },
    "node_modules/lilconfig": {
      "version": "2.1.0",
      "resolved": "https://registry.npmjs.org/lilconfig/-/lilconfig-2.1.0.tgz",
      "integrity": "sha512-utWOt/GHzuUxnLKxB6dk81RoOeoNeHgbrXiuGk4yyF5qlRz+iIVWu56E2fqGHFrXz0QNUhLB/8nKqvRH66JKGQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/locate-character": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/locate-character/-/locate-character-3.0.0.tgz",
      "integrity": "sha512-SW13ws7BjaeJ6p7Q6CO2nchbYEc3X3J6WrmTTDto7yMPqVSZTUyY5Tjbid+Ab8gLnATtygYtiDIJGQRRn2ZOiA==",
      "license": "MIT"
    },
    "node_modules/locate-path": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/locate-path/-/locate-path-6.0.0.tgz",
      "integrity": "sha512-iPZK6eYjbxRu3uB4/WZ3EsEIMJFMqAoopl3R+zuq0UjcAm/MO6KCweDgPfP3elTztoKP3KtnVHxTn2NHBSDVUw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-locate": "^5.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/lodash.camelcase": {
      "version": "4.3.0",
      "resolved": "https://registry.npmjs.org/lodash.camelcase/-/lodash.camelcase-4.3.0.tgz",
      "integrity": "sha512-TwuEnCnxbc3rAvhf/LbG7tJUDzhqXyFnv3dtzLOPgCG/hODL7WFnsbwktkD7yUV0RrreP/l1PALq/YSg6VvjlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lodash.castarray": {
      "version": "4.4.0",
      "resolved": "https://registry.npmjs.org/lodash.castarray/-/lodash.castarray-4.4.0.tgz",
      "integrity": "sha512-aVx8ztPv7/2ULbArGJ2Y42bG1mEQ5mGjpdvrbJcJFU3TbYybe+QlLS4pst9zV52ymy2in1KpFPiZnAOATxD4+Q==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lodash.isplainobject": {
      "version": "4.0.6",
      "resolved": "https://registry.npmjs.org/lodash.isplainobject/-/lodash.isplainobject-4.0.6.tgz",
      "integrity": "sha512-oSXzaWypCMHkPC3NvBEaPHf0KsA5mvPrOPgQWDsbg8n7orZ290M0BmC/jgRZ4vcJ6DTAhjrsSYgdsW/F+MFOBA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lodash.merge": {
      "version": "4.6.2",
      "resolved": "https://registry.npmjs.org/lodash.merge/-/lodash.merge-4.6.2.tgz",
      "integrity": "sha512-0KpjqXRVvrYyCsX1swR/XTK0va6VQkQM6MNo7PqW77ByjAhoARA8EfrP1N4+KlKj8YS0ZUCtRT/YUuhyYDujIQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/loose-envify": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/loose-envify/-/loose-envify-1.4.0.tgz",
      "integrity": "sha512-lyuxPGr/Wfhrlem2CL/UcnUc1zcqKAImBDzukY7Y5F/yQiNdko6+fRLevlw1HgMySw7f611UIY408EtxRSoK3Q==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "js-tokens": "^3.0.0 || ^4.0.0"
      },
      "bin": {
        "loose-envify": "cli.js"
      }
    },
    "node_modules/loupe": {
      "version": "3.1.3",
      "resolved": "https://registry.npmjs.org/loupe/-/loupe-3.1.3.tgz",
      "integrity": "sha512-kkIp7XSkP78ZxJEsSxW3712C6teJVoeHHwgo9zJ380de7IYyJ2ISlxojcH2pC5OFLewESmnRi/+XCDIEEVyoug==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/lru-cache": {
      "version": "10.4.3",
      "resolved": "https://registry.npmjs.org/lru-cache/-/lru-cache-10.4.3.tgz",
      "integrity": "sha512-JNAzZcXrCt42VGLuYz0zfAzDfAvJWW6AfYlDBQyDV5DClI2m5sAmK+OIO7s59XfsRsWHp02jAJrRadPRGTt6SQ==",
      "license": "ISC"
    },
    "node_modules/magic-string": {
      "version": "0.30.17",
      "resolved": "https://registry.npmjs.org/magic-string/-/magic-string-0.30.17.tgz",
      "integrity": "sha512-sNPKHvyjVf7gyjwS4xGTaW/mCnF8wnjtifKBEhxfZ7E/S8tQ0rssrwGNn6q8JH/ohItJfSQp9mBtQYuTlH5QnA==",
      "license": "MIT",
      "dependencies": {
        "@jridgewell/sourcemap-codec": "^1.5.0"
      }
    },
    "node_modules/math-intrinsics": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/math-intrinsics/-/math-intrinsics-1.0.0.tgz",
      "integrity": "sha512-4MqMiKP90ybymYvsut0CH2g4XWbfLtmlCkXmtmdcDCxNB+mQcu1w/1+L/VD7vi/PSv7X2JYV7SCcR+jiPXnQtA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/merge2": {
      "version": "1.4.1",
      "resolved": "https://registry.npmjs.org/merge2/-/merge2-1.4.1.tgz",
      "integrity": "sha512-8q7VEgMJW4J8tcfVPy8g09NcQwZdbwFEqhe/WZkoIzjn/3TGDwtOCYtXGxA3O8tPzpczCCDgv+P2P5y00ZJOOg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/micromatch": {
      "version": "4.0.8",
      "resolved": "https://registry.npmjs.org/micromatch/-/micromatch-4.0.8.tgz",
      "integrity": "sha512-PXwfBhYu0hBCPw8Dn0E+WDYb7af3dSLVWKi3HGv84IdF4TyFoC0ysxFd0Goxw7nSv4T/PzEJQxsYsEiFCKo2BA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "braces": "^3.0.3",
        "picomatch": "^2.3.1"
      },
      "engines": {
        "node": ">=8.6"
      }
    },
    "node_modules/mime-db": {
      "version": "1.52.0",
      "resolved": "https://registry.npmjs.org/mime-db/-/mime-db-1.52.0.tgz",
      "integrity": "sha512-sPU4uV7dYlvtWJxwwxHD0PuihVNiE7TyAbQ5SWxDCB9mUYvOgroQOwYQQOKPJ8CIbE+1ETVlOoK1UC2nU3gYvg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/mime-types": {
      "version": "2.1.35",
      "resolved": "https://registry.npmjs.org/mime-types/-/mime-types-2.1.35.tgz",
      "integrity": "sha512-ZDY+bPm5zTTF+YpCrAU9nK0UgICYPT0QtT1NZWFv4s++TNkcgVaT0g6+4R2uI4MjQjzysHB1zxuWL50hzaeXiw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mime-db": "1.52.0"
      },
      "engines": {
        "node": ">= 0.6"
      }
    },
    "node_modules/minimatch": {
      "version": "9.0.3",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-9.0.3.tgz",
      "integrity": "sha512-RHiac9mvaRw0x3AYRgDC1CxAP7HTcNrrECeA8YYJeWnpo+2Q5CegtZjaotWTWxDG3UeGA1coE05iH1mPjT/2mg==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^2.0.1"
      },
      "engines": {
        "node": ">=16 || 14 >=14.17"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/minimist": {
      "version": "1.2.8",
      "resolved": "https://registry.npmjs.org/minimist/-/minimist-1.2.8.tgz",
      "integrity": "sha512-2yyAR8qBkN3YuheJanUpWC5U3bb5osDywNB8RzDVlDwDHbocAJveqqj1u8+SVD7jkWT4yvsHCpWqqWqAxb0zCA==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/minipass": {
      "version": "7.1.2",
      "resolved": "https://registry.npmjs.org/minipass/-/minipass-7.1.2.tgz",
      "integrity": "sha512-qOOzS1cBTWYF4BH8fVePDBOO9iptMnGUEZwNc/cMWnTV2nVLZ7VoNWEPHkYczZA0pdoA7dl6e7FL659nX9S2aw==",
      "license": "ISC",
      "engines": {
        "node": ">=16 || 14 >=14.17"
      }
    },
    "node_modules/mri": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/mri/-/mri-1.2.0.tgz",
      "integrity": "sha512-tzzskb3bG8LvYGFF/mDTpq3jpI6Q9wc3LEmBaghu+DdCssd1FakN7Bc0hVNmEyGq1bq3RgfkCb3cmQLpNPOroA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/mrmime": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/mrmime/-/mrmime-2.0.0.tgz",
      "integrity": "sha512-eu38+hdgojoyq63s+yTpN4XMBdt5l8HhMhc4VKLO9KM5caLIBvUm4thi7fFaxyTmCKeNnXZ5pAlBwCUnhA09uw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/ms": {
      "version": "2.1.3",
      "resolved": "https://registry.npmjs.org/ms/-/ms-2.1.3.tgz",
      "integrity": "sha512-6FlzubTLZG3J2a/NVCAleEhjzq5oxgHyaCU9yYXvcLsvoVaHJq/s5xXI6/XXP6tz7R9xAOtHnSO/tXtF3WRTlA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/nanoid": {
      "version": "3.3.8",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-3.3.8.tgz",
      "integrity": "sha512-WNLf5Sd8oZxOm+TzppcYk8gVOgP+l58xNy58D0nbUnOxOWRWvlcCV4kUF7ltmI6PsrLl/BgKEyS4mqsGChFN0w==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.cjs"
      },
      "engines": {
        "node": "^10 || ^12 || ^13.7 || ^14 || >=15.0.1"
      }
    },
    "node_modules/natural-compare": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/natural-compare/-/natural-compare-1.4.0.tgz",
      "integrity": "sha512-OWND8ei3VtNC9h7V60qff3SVobHr996CTwgxubgyQYEpg290h9J0buyECNNJexkFm5sOajh5G116RYA1c8ZMSw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/neo-async": {
      "version": "2.6.2",
      "resolved": "https://registry.npmjs.org/neo-async/-/neo-async-2.6.2.tgz",
      "integrity": "sha512-Yd3UES5mWCSqR+qNT93S3UoYUkqAZ9lLg8a7g9rimsWmYGK8cVToA4/sF3RrshdyV3sAGMXVUmpMYOw+dLpOuw==",
      "license": "MIT"
    },
    "node_modules/nopt": {
      "version": "7.2.1",
      "resolved": "https://registry.npmjs.org/nopt/-/nopt-7.2.1.tgz",
      "integrity": "sha512-taM24ViiimT/XntxbPyJQzCG+p4EKOpgD3mxFwW38mGjVUrfERQOeY4EDHjdnptttfHuHQXFx+lTP08Q+mLa/w==",
      "license": "ISC",
      "dependencies": {
        "abbrev": "^2.0.0"
      },
      "bin": {
        "nopt": "bin/nopt.js"
      },
      "engines": {
        "node": "^14.17.0 || ^16.13.0 || >=18.0.0"
      }
    },
    "node_modules/nwsapi": {
      "version": "2.2.16",
      "resolved": "https://registry.npmjs.org/nwsapi/-/nwsapi-2.2.16.tgz",
      "integrity": "sha512-F1I/bimDpj3ncaNDhfyMWuFqmQDBwDB0Fogc2qpL3BWvkQteFD/8BzWuIRl83rq0DXfm8SGt/HFhLXZyljTXcQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/object-inspect": {
      "version": "1.13.3",
      "resolved": "https://registry.npmjs.org/object-inspect/-/object-inspect-1.13.3.tgz",
      "integrity": "sha512-kDCGIbxkDSXE3euJZZXzc6to7fCrKHNI/hSRQnRuQ+BWjFNzZwiFF8fj/6o2t2G9/jTj8PSIYTfCLelLZEeRpA==",
      "license": "MIT",
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/once": {
      "version": "1.4.0",
      "resolved": "https://registry.npmjs.org/once/-/once-1.4.0.tgz",
      "integrity": "sha512-lNaJgI+2Q5URQBkccEKHTQOPaXdUxnZZElQTZY0MFUAuaEqe1E+Nyvgdz/aIyNi6Z9MzO5dv1H8n58/GELp3+w==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "wrappy": "1"
      }
    },
    "node_modules/optionator": {
      "version": "0.9.4",
      "resolved": "https://registry.npmjs.org/optionator/-/optionator-0.9.4.tgz",
      "integrity": "sha512-6IpQ7mKUxRcZNLIObR0hz7lxsapSSIYNZJwXPGeF0mTVqGKFIXj1DQcMoT22S3ROcLyY/rz0PWaWZ9ayWmad9g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "deep-is": "^0.1.3",
        "fast-levenshtein": "^2.0.6",
        "levn": "^0.4.1",
        "prelude-ls": "^1.2.1",
        "type-check": "^0.4.0",
        "word-wrap": "^1.2.5"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/p-limit": {
      "version": "3.1.0",
      "resolved": "https://registry.npmjs.org/p-limit/-/p-limit-3.1.0.tgz",
      "integrity": "sha512-TYOanM3wGwNGsZN2cVTYPArw454xnXj5qmWF1bEoAc4+cU/ol7GVh7odevjp1FNHduHc3KZMcFduxU5Xc6uJRQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "yocto-queue": "^0.1.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/p-locate": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/p-locate/-/p-locate-5.0.0.tgz",
      "integrity": "sha512-LaNjtRWUBY++zB5nE/NwcaoMylSPk+S+ZHNB1TzdbMJMny6dynpAGt7X/tl/QYq3TIeE6nxHppbo2LGymrG5Pw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "p-limit": "^3.0.2"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/package-json-from-dist": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/package-json-from-dist/-/package-json-from-dist-1.0.1.tgz",
      "integrity": "sha512-UEZIS3/by4OC8vL3P2dTXRETpebLI2NiI5vIrjaD/5UtrkFX/tNbwjTSRAGC/+7CAo2pIcBaRgWmcBBHcsaCIw==",
      "license": "BlueOak-1.0.0"
    },
    "node_modules/parent-module": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/parent-module/-/parent-module-1.0.1.tgz",
      "integrity": "sha512-GQ2EWRpQV8/o+Aw8YqtfZZPfNRWZYkbidE9k5rpl/hC3vtHHBfGm2Ifi6qWV+coDGkrUKZAxE3Lot5kcsRlh+g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "callsites": "^3.0.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/parse5": {
      "version": "7.2.1",
      "resolved": "https://registry.npmjs.org/parse5/-/parse5-7.2.1.tgz",
      "integrity": "sha512-BuBYQYlv1ckiPdQi/ohiivi9Sagc9JG+Ozs0r7b/0iK3sKmrb0b9FdWdBbOdx6hBCM/F9Ir82ofnBhtZOjCRPQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "entities": "^4.5.0"
      },
      "funding": {
        "url": "https://github.com/inikulin/parse5?sponsor=1"
      }
    },
    "node_modules/parseley": {
      "version": "0.12.1",
      "resolved": "https://registry.npmjs.org/parseley/-/parseley-0.12.1.tgz",
      "integrity": "sha512-e6qHKe3a9HWr0oMRVDTRhKce+bRO8VGQR3NyVwcjwrbhMmFCX9KszEV35+rn4AdilFAq9VPxP/Fe1wC9Qjd2lw==",
      "license": "MIT",
      "dependencies": {
        "leac": "^0.6.0",
        "peberminta": "^0.9.0"
      },
      "funding": {
        "url": "https://ko-fi.com/killymxi"
      }
    },
    "node_modules/path-exists": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-exists/-/path-exists-4.0.0.tgz",
      "integrity": "sha512-ak9Qy5Q7jYb2Wwcey5Fpvg2KoAc/ZIhLSLOSBmRmygPsGwkVVt0fZa0qrtMz+m6tJTAHfZQ8FnmB4MG4LWy7/w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-is-absolute": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/path-is-absolute/-/path-is-absolute-1.0.1.tgz",
      "integrity": "sha512-AVbw3UJ2e9bq64vSaS9Am0fje1Pa8pbGqTTsmXfaIiMpnr5DlDhfJOuLj9Sf95ZPVDAUerDfEk88MPmPe7UCQg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/path-key": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/path-key/-/path-key-3.1.1.tgz",
      "integrity": "sha512-ojmeN0qd+y0jszEtoY48r0Peq5dwMEkIlCOu6Q5f41lfkswXuKtYrhgoTpLnyIcHm24Uhqx+5Tqm2InSwLhE6Q==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/path-scurry": {
      "version": "1.11.1",
      "resolved": "https://registry.npmjs.org/path-scurry/-/path-scurry-1.11.1.tgz",
      "integrity": "sha512-Xa4Nw17FS9ApQFJ9umLiJS4orGjm7ZzwUrwamcGQuHSzDyth9boKDaycYdDcZDuqYATXw4HFXgaqWTctW/v1HA==",
      "license": "BlueOak-1.0.0",
      "dependencies": {
        "lru-cache": "^10.2.0",
        "minipass": "^5.0.0 || ^6.0.2 || ^7.0.0"
      },
      "engines": {
        "node": ">=16 || 14 >=14.18"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/path-type": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/path-type/-/path-type-4.0.0.tgz",
      "integrity": "sha512-gDKb8aZMDeD/tZWs9P6+q0J9Mwkdl6xMV8TjnGP3qJVJ06bdMgkbBlLU8IdfOsIsFz2BW1rNVT3XuNEl8zPAvw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/pathe": {
      "version": "2.0.3",
      "resolved": "https://registry.npmjs.org/pathe/-/pathe-2.0.3.tgz",
      "integrity": "sha512-WUjGcAqP1gQacoQe+OBJsFA7Ld4DyXuUIjZ5cc75cLHvJ7dtNsTugphxIADwspS+AraAUePCKrSVtPLFj/F88w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/pathval": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/pathval/-/pathval-2.0.0.tgz",
      "integrity": "sha512-vE7JKRyES09KiunauX7nd2Q9/L7lhok4smP9RZTDeD4MVs72Dp2qNFVz39Nz5a0FVEW0BJR6C0DYrq6unoziZA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 14.16"
      }
    },
    "node_modules/peberminta": {
      "version": "0.9.0",
      "resolved": "https://registry.npmjs.org/peberminta/-/peberminta-0.9.0.tgz",
      "integrity": "sha512-XIxfHpEuSJbITd1H3EeQwpcZbTLHc+VVr8ANI9t5sit565tsI4/xK3KWTUFE2e6QiangUkh3B0jihzmGnNrRsQ==",
      "license": "MIT",
      "funding": {
        "url": "https://ko-fi.com/killymxi"
      }
    },
    "node_modules/picocolors": {
      "version": "1.1.1",
      "resolved": "https://registry.npmjs.org/picocolors/-/picocolors-1.1.1.tgz",
      "integrity": "sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/picomatch": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-2.3.1.tgz",
      "integrity": "sha512-JU3teHTNjmE2VCGFzuY8EXzCDVwEqB2a8fsIvwaStHhAWJEeVd1o1QD80CU6+ZdEXXSLbSsuLwJjkCBWqRQUVA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/postcss": {
      "version": "8.5.3",
      "resolved": "https://registry.npmjs.org/postcss/-/postcss-8.5.3.tgz",
      "integrity": "sha512-dle9A3yYxlBSrt8Fu+IpjGT8SY8hN0mlaA6GY8t0P5PjIOZemULz/E2Bnm/2dcUOena75OTNkHI76uZBNUUq3A==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "nanoid": "^3.3.8",
        "picocolors": "^1.1.1",
        "source-map-js": "^1.2.1"
      },
      "engines": {
        "node": "^10 || ^12 || >=14"
      }
    },
    "node_modules/postcss-load-config": {
      "version": "3.1.4",
      "resolved": "https://registry.npmjs.org/postcss-load-config/-/postcss-load-config-3.1.4.tgz",
      "integrity": "sha512-6DiM4E7v4coTE4uzA8U//WhtPwyhiim3eyjEMFCnUpzbrkK9wJHgKDT2mR+HbtSrd/NubVaYTOpSpjUl8NQeRg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "lilconfig": "^2.0.5",
        "yaml": "^1.10.2"
      },
      "engines": {
        "node": ">= 10"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/postcss/"
      },
      "peerDependencies": {
        "postcss": ">=8.0.9",
        "ts-node": ">=9.0.0"
      },
      "peerDependenciesMeta": {
        "postcss": {
          "optional": true
        },
        "ts-node": {
          "optional": true
        }
      }
    },
    "node_modules/postcss-load-config/node_modules/yaml": {
      "version": "1.10.2",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-1.10.2.tgz",
      "integrity": "sha512-r3vXyErRCYJ7wg28yvBY5VSoAF8ZvlcW9/BwUzEtUsjvX/DKs24dIkuwjtuprwJJHsbyUbLApepYTR1BN4uHrg==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">= 6"
      }
    },
    "node_modules/postcss-safe-parser": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/postcss-safe-parser/-/postcss-safe-parser-6.0.0.tgz",
      "integrity": "sha512-FARHN8pwH+WiS2OPCxJI8FuRJpTVnn6ZNFiqAM2aeW2LwTHWWmWgIyKC6cUo0L8aeKiF/14MNvnpls6R2PBeMQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/postcss/"
      },
      "peerDependencies": {
        "postcss": "^8.3.3"
      }
    },
    "node_modules/postcss-scss": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/postcss-scss/-/postcss-scss-4.0.9.tgz",
      "integrity": "sha512-AjKOeiwAitL/MXxQW2DliT28EKukvvbEWx3LBmJIRN8KfBGZbRTxNYW0kSqi1COiTZ57nZ9NW06S6ux//N1c9A==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/postcss/"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/postcss-scss"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "engines": {
        "node": ">=12.0"
      },
      "peerDependencies": {
        "postcss": "^8.4.29"
      }
    },
    "node_modules/postcss-selector-parser": {
      "version": "6.0.10",
      "resolved": "https://registry.npmjs.org/postcss-selector-parser/-/postcss-selector-parser-6.0.10.tgz",
      "integrity": "sha512-IQ7TZdoaqbT+LCpShg46jnZVlhWD2w6iQYAcYXfHARZ7X1t/UGhhceQDs5X0cGqKvYlHNOuv7Oa1xmb0oQuA3w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cssesc": "^3.0.0",
        "util-deprecate": "^1.0.2"
      },
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/prelude-ls": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/prelude-ls/-/prelude-ls-1.2.1.tgz",
      "integrity": "sha512-vkcDPrRZo1QZLbn5RLGPpg/WmIQ65qoWWhcGKf/b5eplkkarX0m9z8ppCat4mlOqUsWpyNuYgO3VRyrYHSzX5g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/prettier": {
      "version": "3.4.2",
      "resolved": "https://registry.npmjs.org/prettier/-/prettier-3.4.2.tgz",
      "integrity": "sha512-e9MewbtFo+Fevyuxn/4rrcDAaq0IYxPGLvObpQjiZBMAzB9IGmzlnG9RZy3FFas+eBMu2vA0CszMeduow5dIuQ==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "prettier": "bin/prettier.cjs"
      },
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/prettier/prettier?sponsor=1"
      }
    },
    "node_modules/prettier-plugin-svelte": {
      "version": "3.3.2",
      "resolved": "https://registry.npmjs.org/prettier-plugin-svelte/-/prettier-plugin-svelte-3.3.2.tgz",
      "integrity": "sha512-kRPjH8wSj2iu+dO+XaUv4vD8qr5mdDmlak3IT/7AOgGIMRG86z/EHOLauFcClKEnOUf4A4nOA7sre5KrJD4Raw==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "prettier": "^3.0.0",
        "svelte": "^3.2.0 || ^4.0.0-next.0 || ^5.0.0-next.0"
      }
    },
    "node_modules/proto-list": {
      "version": "1.2.4",
      "resolved": "https://registry.npmjs.org/proto-list/-/proto-list-1.2.4.tgz",
      "integrity": "sha512-vtK/94akxsTMhe0/cbfpR+syPuszcuwhqVjJq26CuNDgFGj682oRBXOP5MJpv2r7JtE8MsiepGIqvvOTBwn2vA==",
      "license": "ISC"
    },
    "node_modules/psl": {
      "version": "1.15.0",
      "resolved": "https://registry.npmjs.org/psl/-/psl-1.15.0.tgz",
      "integrity": "sha512-JZd3gMVBAVQkSs6HdNZo9Sdo0LNcQeMNP3CozBJb3JYC/QUYZTnKxP+f8oWRX4rHP5EurWxqAHTSwUCjlNKa1w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "punycode": "^2.3.1"
      },
      "funding": {
        "url": "https://github.com/sponsors/lupomontero"
      }
    },
    "node_modules/punycode": {
      "version": "2.3.1",
      "resolved": "https://registry.npmjs.org/punycode/-/punycode-2.3.1.tgz",
      "integrity": "sha512-vYt7UD1U9Wg6138shLtLOvdAu+8DsC/ilFtEVHcH+wydcSpNE20AfSOduf6MkRFahL5FY7X1oU7nKVZFtfq8Fg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/qs": {
      "version": "6.13.1",
      "resolved": "https://registry.npmjs.org/qs/-/qs-6.13.1.tgz",
      "integrity": "sha512-EJPeIn0CYrGu+hli1xilKAPXODtJ12T0sP63Ijx2/khC2JtuaN3JyNIpvmnkmaEtha9ocbG4A4cMcr+TvqvwQg==",
      "license": "BSD-3-Clause",
      "dependencies": {
        "side-channel": "^1.0.6"
      },
      "engines": {
        "node": ">=0.6"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/querystringify": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/querystringify/-/querystringify-2.2.0.tgz",
      "integrity": "sha512-FIqgj2EUvTa7R50u0rGsyTftzjYmv/a3hO345bZNrqabNqjtgiDMgmo4mkUjd+nzU5oF3dClKqFIPUKybUyqoQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/queue-microtask": {
      "version": "1.2.3",
      "resolved": "https://registry.npmjs.org/queue-microtask/-/queue-microtask-1.2.3.tgz",
      "integrity": "sha512-NuaNSa6flKT5JaSYQzJok04JzTL1CA6aGhv5rfLW3PgqA+M2ChpZQnAC8h8i4ZFkBS8X5RqkDBHA7r4hej3K9A==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT"
    },
    "node_modules/react": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react/-/react-18.3.1.tgz",
      "integrity": "sha512-wS+hAgJShR0KhEvPJArfuPVN1+Hz1t0Y6n5jLrGQbkb4urgPE/0Rve+1kMB1v/oWgHgm4WIcV+i7F2pTVj+2iQ==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "loose-envify": "^1.1.0"
      },
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/react-dom": {
      "version": "18.3.1",
      "resolved": "https://registry.npmjs.org/react-dom/-/react-dom-18.3.1.tgz",
      "integrity": "sha512-5m4nQKp+rZRb09LNH59GM4BxTh9251/ylbKIbpe7TpGxfJ+9kv6BLkLBXIjjspbgbnIBNqlI23tRnTWT0snUIw==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "loose-envify": "^1.1.0",
        "scheduler": "^0.23.2"
      },
      "peerDependencies": {
        "react": "^18.3.1"
      }
    },
    "node_modules/react-promise-suspense": {
      "version": "0.3.4",
      "resolved": "https://registry.npmjs.org/react-promise-suspense/-/react-promise-suspense-0.3.4.tgz",
      "integrity": "sha512-I42jl7L3Ze6kZaq+7zXWSunBa3b1on5yfvUW6Eo/3fFOj6dZ5Bqmcd264nJbTK/gn1HjjILAjSwnZbV4RpSaNQ==",
      "license": "MIT",
      "dependencies": {
        "fast-deep-equal": "^2.0.1"
      }
    },
    "node_modules/react-promise-suspense/node_modules/fast-deep-equal": {
      "version": "2.0.1",
      "resolved": "https://registry.npmjs.org/fast-deep-equal/-/fast-deep-equal-2.0.1.tgz",
      "integrity": "sha512-bCK/2Z4zLidyB4ReuIsvALH6w31YfAQDmXMqMx6FyfHqvBxtjC0eRumeSu4Bs3XtXwpyIywtSTrVT99BxY1f9w==",
      "license": "MIT"
    },
    "node_modules/readdirp": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/readdirp/-/readdirp-4.0.2.tgz",
      "integrity": "sha512-yDMz9g+VaZkqBYS/ozoBJwaBhTbZo3UNYQHNRw1D3UFQB8oHB4uS/tAODO+ZLjGWmUbKnIlOWO+aaIiAxrUWHA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 14.16.0"
      },
      "funding": {
        "type": "individual",
        "url": "https://paulmillr.com/funding/"
      }
    },
    "node_modules/reduce-flatten": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/reduce-flatten/-/reduce-flatten-2.0.0.tgz",
      "integrity": "sha512-EJ4UNY/U1t2P/2k6oqotuX2Cc3T6nxJwsM0N0asT7dhrtH1ltUxDn4NalSYmPE2rCkVpcf/X6R0wDwcFpzhd4w==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/requires-port": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/requires-port/-/requires-port-1.0.0.tgz",
      "integrity": "sha512-KigOCHcocU3XODJxsu8i/j8T9tzT4adHiecwORRQ0ZZFcp7ahwXuRU1m+yuO90C5ZUyGeGfocHDI14M3L3yDAQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/resend": {
      "version": "3.5.0",
      "resolved": "https://registry.npmjs.org/resend/-/resend-3.5.0.tgz",
      "integrity": "sha512-bKu4LhXSecP6krvhfDzyDESApYdNfjirD5kykkT1xO0Cj9TKSiGh5Void4pGTs3Am+inSnp4dg0B5XzdwHBJOQ==",
      "license": "MIT",
      "dependencies": {
        "@react-email/render": "0.0.16"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/resolve-from": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/resolve-from/-/resolve-from-4.0.0.tgz",
      "integrity": "sha512-pb/MYmXstAkysRFx8piNI1tGFNQIFA3vkE3Gq4EuA1dF6gHp/+vgZqsCGJapvy8N3Q+4o7FwvquPJcnZ7RYy4g==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=4"
      }
    },
    "node_modules/reusify": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/reusify/-/reusify-1.0.4.tgz",
      "integrity": "sha512-U9nH88a3fc/ekCF1l0/UP1IosiuIjyTh7hBvXVMHYgVcfGvt897Xguj2UOLDeI5BG2m7/uwyaLVT6fbtCwTyzw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "iojs": ">=1.0.0",
        "node": ">=0.10.0"
      }
    },
    "node_modules/rimraf": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/rimraf/-/rimraf-3.0.2.tgz",
      "integrity": "sha512-JZkJMZkAGFFPP2YqXZXPbMlMBgsxzE8ILs4lMIX/2o0L9UBw9O/Y3o6wFw/i9YLapcUJWwqbi3kdxIPdC62TIA==",
      "deprecated": "Rimraf versions prior to v4 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "glob": "^7.1.3"
      },
      "bin": {
        "rimraf": "bin.js"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/rimraf/node_modules/brace-expansion": {
      "version": "1.1.12",
      "resolved": "https://registry.npmjs.org/brace-expansion/-/brace-expansion-1.1.12.tgz",
      "integrity": "sha512-9T9UjW3r0UW5c1Q7GTwllptXwhvYmEzFhzMfZ9H7FQWt+uZePjZPjBP/W1ZEyZ1twGWom5/56TF4lPcqjnDHcg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "balanced-match": "^1.0.0",
        "concat-map": "0.0.1"
      }
    },
    "node_modules/rimraf/node_modules/glob": {
      "version": "7.2.3",
      "resolved": "https://registry.npmjs.org/glob/-/glob-7.2.3.tgz",
      "integrity": "sha512-nFR0zLpU2YCaRxwoCJvL6UvCH2JFyFVIvwTLsIf21AuHlMskA1hhTdk+LlYJtOlYt9v6dvszD2BGRqBL+iQK9Q==",
      "deprecated": "Glob versions prior to v9 are no longer supported",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "fs.realpath": "^1.0.0",
        "inflight": "^1.0.4",
        "inherits": "2",
        "minimatch": "^3.1.1",
        "once": "^1.3.0",
        "path-is-absolute": "^1.0.0"
      },
      "engines": {
        "node": "*"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/rimraf/node_modules/minimatch": {
      "version": "3.1.2",
      "resolved": "https://registry.npmjs.org/minimatch/-/minimatch-3.1.2.tgz",
      "integrity": "sha512-J7p63hRiAjw1NDEww1W7i37+ByIrOWO5XQQAzZ3VOcL0PNybwpfmV/N05zFAzwQ9USyEcX6t3UO+K5aqBQOIHw==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "brace-expansion": "^1.1.7"
      },
      "engines": {
        "node": "*"
      }
    },
    "node_modules/rollup": {
      "version": "4.34.9",
      "resolved": "https://registry.npmjs.org/rollup/-/rollup-4.34.9.tgz",
      "integrity": "sha512-nF5XYqWWp9hx/LrpC8sZvvvmq0TeTjQgaZHYmAgwysT9nh8sWnZhBnM8ZyVbbJFIQBLwHDNoMqsBZBbUo4U8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@types/estree": "1.0.6"
      },
      "bin": {
        "rollup": "dist/bin/rollup"
      },
      "engines": {
        "node": ">=18.0.0",
        "npm": ">=8.0.0"
      },
      "optionalDependencies": {
        "@rollup/rollup-android-arm-eabi": "4.34.9",
        "@rollup/rollup-android-arm64": "4.34.9",
        "@rollup/rollup-darwin-arm64": "4.34.9",
        "@rollup/rollup-darwin-x64": "4.34.9",
        "@rollup/rollup-freebsd-arm64": "4.34.9",
        "@rollup/rollup-freebsd-x64": "4.34.9",
        "@rollup/rollup-linux-arm-gnueabihf": "4.34.9",
        "@rollup/rollup-linux-arm-musleabihf": "4.34.9",
        "@rollup/rollup-linux-arm64-gnu": "4.34.9",
        "@rollup/rollup-linux-arm64-musl": "4.34.9",
        "@rollup/rollup-linux-loongarch64-gnu": "4.34.9",
        "@rollup/rollup-linux-powerpc64le-gnu": "4.34.9",
        "@rollup/rollup-linux-riscv64-gnu": "4.34.9",
        "@rollup/rollup-linux-s390x-gnu": "4.34.9",
        "@rollup/rollup-linux-x64-gnu": "4.34.9",
        "@rollup/rollup-linux-x64-musl": "4.34.9",
        "@rollup/rollup-win32-arm64-msvc": "4.34.9",
        "@rollup/rollup-win32-ia32-msvc": "4.34.9",
        "@rollup/rollup-win32-x64-msvc": "4.34.9",
        "fsevents": "~2.3.2"
      }
    },
    "node_modules/rrweb-cssom": {
      "version": "0.7.1",
      "resolved": "https://registry.npmjs.org/rrweb-cssom/-/rrweb-cssom-0.7.1.tgz",
      "integrity": "sha512-TrEMa7JGdVm0UThDJSx7ddw5nVm3UJS9o9CCIZ72B1vSyEZoziDqBYP3XIoi/12lKrJR8rE3jeFHMok2F/Mnsg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/run-parallel": {
      "version": "1.2.0",
      "resolved": "https://registry.npmjs.org/run-parallel/-/run-parallel-1.2.0.tgz",
      "integrity": "sha512-5l4VyZR86LZ/lDxZTR6jqL8AFE2S0IFLMP26AbjsLVADxHdhB/c0GUsH+y39UfCi3dzz8OlQuPmnaJOMoDHQBA==",
      "dev": true,
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/feross"
        },
        {
          "type": "patreon",
          "url": "https://www.patreon.com/feross"
        },
        {
          "type": "consulting",
          "url": "https://feross.org/support"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "queue-microtask": "^1.2.2"
      }
    },
    "node_modules/sade": {
      "version": "1.8.1",
      "resolved": "https://registry.npmjs.org/sade/-/sade-1.8.1.tgz",
      "integrity": "sha512-xal3CZX1Xlo/k4ApwCFrHVACi9fBqJ7V+mwhBsuf/1IOKbBy098Fex+Wa/5QMubw09pSZ/u8EY8PWgevJsXp1A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "mri": "^1.1.0"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/safer-buffer": {
      "version": "2.1.2",
      "resolved": "https://registry.npmjs.org/safer-buffer/-/safer-buffer-2.1.2.tgz",
      "integrity": "sha512-YZo3K82SD7Riyi0E1EQPojLz7kpepnSQI9IyPbHHg1XXXevb5dJI7tpyN2ADxGcQbHG7vcyRHk0cbwqcQriUtg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/saxes": {
      "version": "6.0.0",
      "resolved": "https://registry.npmjs.org/saxes/-/saxes-6.0.0.tgz",
      "integrity": "sha512-xAg7SOnEhrm5zI3puOOKyy1OMcMlIJZYNJY7xLBwSze0UjhPLnWfj2GF2EpT0jmzaJKIWKHLsaSSajf35bcYnA==",
      "dev": true,
      "license": "ISC",
      "dependencies": {
        "xmlchars": "^2.2.0"
      },
      "engines": {
        "node": ">=v12.22.7"
      }
    },
    "node_modules/scheduler": {
      "version": "0.23.2",
      "resolved": "https://registry.npmjs.org/scheduler/-/scheduler-0.23.2.tgz",
      "integrity": "sha512-UOShsPwz7NrMUqhR6t0hWjFduvOzbtv7toDH1/hIrfRNIDBnnBWd0CwJTGvTpngVlmwGCdP9/Zl/tVrDqcuYzQ==",
      "license": "MIT",
      "peer": true,
      "dependencies": {
        "loose-envify": "^1.1.0"
      }
    },
    "node_modules/selderee": {
      "version": "0.11.0",
      "resolved": "https://registry.npmjs.org/selderee/-/selderee-0.11.0.tgz",
      "integrity": "sha512-5TF+l7p4+OsnP8BCCvSyZiSPc4x4//p5uPwK8TCnVPJYRmU2aYKMpOXvw8zM5a5JvuuCGN1jmsMwuU2W02ukfA==",
      "license": "MIT",
      "dependencies": {
        "parseley": "^0.12.0"
      },
      "funding": {
        "url": "https://ko-fi.com/killymxi"
      }
    },
    "node_modules/semver": {
      "version": "7.6.3",
      "resolved": "https://registry.npmjs.org/semver/-/semver-7.6.3.tgz",
      "integrity": "sha512-oVekP1cKtI+CTDvHWYFUcMtsK/00wmAEfyqKfNdARm8u1wNVhSgaX7A8d4UuIlUI5e84iEwOhs7ZPYRmzU9U6A==",
      "license": "ISC",
      "bin": {
        "semver": "bin/semver.js"
      },
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/set-cookie-parser": {
      "version": "2.7.1",
      "resolved": "https://registry.npmjs.org/set-cookie-parser/-/set-cookie-parser-2.7.1.tgz",
      "integrity": "sha512-IOc8uWeOZgnb3ptbCURJWNjWUPcO3ZnTTdzsurqERrP6nPyv+paC55vJM0LpOlT2ne+Ix+9+CRG1MNLlyZ4GjQ==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/set-function-length": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/set-function-length/-/set-function-length-1.2.2.tgz",
      "integrity": "sha512-pgRc4hJ4/sNjWCSS9AmnS40x3bNMDTknHgL5UaMBTMyJnU90EgWh1Rz+MC9eFu4BuN/UwZjKQuY/1v3rM7HMfg==",
      "license": "MIT",
      "dependencies": {
        "define-data-property": "^1.1.4",
        "es-errors": "^1.3.0",
        "function-bind": "^1.1.2",
        "get-intrinsic": "^1.2.4",
        "gopd": "^1.0.1",
        "has-property-descriptors": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      }
    },
    "node_modules/shebang-command": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/shebang-command/-/shebang-command-2.0.0.tgz",
      "integrity": "sha512-kHxr2zZpYtdmrN1qDjrrX/Z1rR1kG8Dx+gkpK1G4eXmvXswmcE1hTWBWYUzlraYw1/yZp6YuDY77YtvbN0dmDA==",
      "license": "MIT",
      "dependencies": {
        "shebang-regex": "^3.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/shebang-regex": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/shebang-regex/-/shebang-regex-3.0.0.tgz",
      "integrity": "sha512-7++dFhtcx3353uBaq8DDR4NuxBetBzC7ZQOhmTQInHEd6bSrXdiEyzCvG07Z44UYdLShWUyXt5M/yhz8ekcb1A==",
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/side-channel": {
      "version": "1.1.0",
      "resolved": "https://registry.npmjs.org/side-channel/-/side-channel-1.1.0.tgz",
      "integrity": "sha512-ZX99e6tRweoUXqR+VBrslhda51Nh5MTQwou5tnUDgbtyM0dBgmhEDtWGP/xbKn6hqfPRHujUNwz5fy/wbbhnpw==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3",
        "side-channel-list": "^1.0.0",
        "side-channel-map": "^1.0.1",
        "side-channel-weakmap": "^1.0.2"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-list": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/side-channel-list/-/side-channel-list-1.0.0.tgz",
      "integrity": "sha512-FCLHtRD/gnpCiCHEiJLOwdmFP+wzCmDEkc9y7NsYxeF4u7Btsn1ZuwgwJGxImImHicJArLP4R0yX4c2KCrMrTA==",
      "license": "MIT",
      "dependencies": {
        "es-errors": "^1.3.0",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-map": {
      "version": "1.0.1",
      "resolved": "https://registry.npmjs.org/side-channel-map/-/side-channel-map-1.0.1.tgz",
      "integrity": "sha512-VCjCNfgMsby3tTdo02nbjtM/ewra6jPHmpThenkTYh8pG9ucZ/1P8So4u4FGBek/BjpOVsDCMoLA/iuBKIFXRA==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/side-channel-weakmap": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/side-channel-weakmap/-/side-channel-weakmap-1.0.2.tgz",
      "integrity": "sha512-WPS/HvHQTYnHisLo9McqBHOJk2FkHO/tlpvldyrnem4aeQp4hai3gythswg6p01oSoTl58rcpiFAjF2br2Ak2A==",
      "license": "MIT",
      "dependencies": {
        "call-bound": "^1.0.2",
        "es-errors": "^1.3.0",
        "get-intrinsic": "^1.2.5",
        "object-inspect": "^1.13.3",
        "side-channel-map": "^1.0.1"
      },
      "engines": {
        "node": ">= 0.4"
      },
      "funding": {
        "url": "https://github.com/sponsors/ljharb"
      }
    },
    "node_modules/siginfo": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/siginfo/-/siginfo-2.0.0.tgz",
      "integrity": "sha512-ybx0WO1/8bSBLEWXZvEd7gMW3Sn3JFlW3TvX1nREbDLRNQNaeNN8WK0meBwPdAaOI7TtRRRJn/Es1zhrrCHu7g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/signal-exit": {
      "version": "4.1.0",
      "resolved": "https://registry.npmjs.org/signal-exit/-/signal-exit-4.1.0.tgz",
      "integrity": "sha512-bzyZ1e88w9O1iNJbKnOlvYTrWPDl46O1bG0D3XInv+9tkPrxrN8jUUTiFlDkkmKWgn1M6CfIA13SuGqOa9Korw==",
      "license": "ISC",
      "engines": {
        "node": ">=14"
      },
      "funding": {
        "url": "https://github.com/sponsors/isaacs"
      }
    },
    "node_modules/sirv": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/sirv/-/sirv-3.0.0.tgz",
      "integrity": "sha512-BPwJGUeDaDCHihkORDchNyyTvWFhcusy1XMmhEVTQTwGeybFbp8YEmB+njbPnth1FibULBSBVwCQni25XlCUDg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@polka/url": "^1.0.0-next.24",
        "mrmime": "^2.0.0",
        "totalist": "^3.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/slash": {
      "version": "3.0.0",
      "resolved": "https://registry.npmjs.org/slash/-/slash-3.0.0.tgz",
      "integrity": "sha512-g9Q1haeby36OSStwb4ntCGGGaKsaVSjQ68fBxoQcutl5fS1vuY18H3wSt3jFyFtrkx+Kz0V1G85A4MyAdDMi2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/source-map": {
      "version": "0.6.1",
      "resolved": "https://registry.npmjs.org/source-map/-/source-map-0.6.1.tgz",
      "integrity": "sha512-UjgapumWlbMhkBgzT7Ykc5YXUT46F0iKu8SGXq0bcwP5dz/h0Plj6enJqjz1Zbq2l5WaqYnrVbwWOWMyF3F47g==",
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/source-map-js": {
      "version": "1.2.1",
      "resolved": "https://registry.npmjs.org/source-map-js/-/source-map-js-1.2.1.tgz",
      "integrity": "sha512-UXWMKhLOwVKb728IUtQPXxfYU+usdybtUrK/8uGE8CQMvrhOpwvzDBwj0QhSL7MQc7vIsISBG8VQ8+IDQxpfQA==",
      "dev": true,
      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/stackback": {
      "version": "0.0.2",
      "resolved": "https://registry.npmjs.org/stackback/-/stackback-0.0.2.tgz",
      "integrity": "sha512-1XMJE5fQo1jGH6Y/7ebnwPOBEkIEnT4QF32d5R1+VXdXveM0IBMJt8zfaxX1P3QhVwrYe+576+jkANtSS2mBbw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/std-env": {
      "version": "3.8.0",
      "resolved": "https://registry.npmjs.org/std-env/-/std-env-3.8.0.tgz",
      "integrity": "sha512-Bc3YwwCB+OzldMxOXJIIvC6cPRWr/LxOp48CdQTOkPyk/t4JWWJbrilwBd7RJzKV8QW7tJkcgAmeuLLJugl5/w==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/string-width": {
      "version": "5.1.2",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-5.1.2.tgz",
      "integrity": "sha512-HnLOCR3vjcY8beoNLtcjZ5/nxn2afmME6lhrDrebokqMap+XbeW8n9TXpPDOqdGK5qcI3oT0GKTW6wC7EMiVqA==",
      "license": "MIT",
      "dependencies": {
        "eastasianwidth": "^0.2.0",
        "emoji-regex": "^9.2.2",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/string-width-cjs": {
      "name": "string-width",
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/string-width-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT"
    },
    "node_modules/string-width/node_modules/ansi-regex": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz",
      "integrity": "sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/string-width/node_modules/strip-ansi": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
      "integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi-cjs": {
      "name": "strip-ansi",
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-json-comments": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/strip-json-comments/-/strip-json-comments-3.1.1.tgz",
      "integrity": "sha512-6fPc+R4ihwqP6N/aIv2f1gMH8lOVtWQHoqC4yK6oSDVVocumAsfCqjkXnqiYMhmMwS/mEHLp7Vehlt3ql6lEig==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/stripe": {
      "version": "13.11.0",
      "resolved": "https://registry.npmjs.org/stripe/-/stripe-13.11.0.tgz",
      "integrity": "sha512-yPxVJxUzP1QHhHeFnYjJl48QwDS1+5befcL7ju7+t+i88D5r0rbsL+GkCCS6zgcU+TiV5bF9eMGcKyJfLf8BZQ==",
      "license": "MIT",
      "dependencies": {
        "@types/node": ">=8.1.0",
        "qs": "^6.11.0"
      },
      "engines": {
        "node": ">=12.*"
      }
    },
    "node_modules/strnum": {
      "version": "1.0.5",
      "resolved": "https://registry.npmjs.org/strnum/-/strnum-1.0.5.tgz",
      "integrity": "sha512-J8bbNyKKXl5qYcR36TIO8W3mVGVHrmmxsd5PAItGkmyzwJvybiw2IVq5nqd0i4LSNSkB/sx9VHllbfFdr9k1JA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/super-sitemap": {
      "version": "0.15.1",
      "resolved": "https://registry.npmjs.org/super-sitemap/-/super-sitemap-0.15.1.tgz",
      "integrity": "sha512-HqJvO/6qnioGSvoNM6xmSMHkM/YqZsV5sFa7YSgj6VLt5NPJL1z/t8PAgJ1tvoHckxxx9kjobS0LyuuEXH6rCw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "directory-tree": "^3.5.1",
        "fast-xml-parser": "^4.3.2"
      },
      "peerDependencies": {
        "svelte": ">=4.0.0 <6.0.0"
      }
    },
    "node_modules/supports-color": {
      "version": "7.2.0",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-7.2.0.tgz",
      "integrity": "sha512-qpCAvRl9stuOHveKsn7HncJRvv501qIacKzQlO/+Lwxc9+0q2wLyv4Dfvt80/DPn2pqOBsJdDiogXGR9+OvwRw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/svelte": {
      "version": "5.14.0",
      "resolved": "https://registry.npmjs.org/svelte/-/svelte-5.14.0.tgz",
      "integrity": "sha512-xHrS9dd2Ci9GJd2sReNFqJztoe515wB4OzsPw4A8L2M6lddLFkREkWDJnM5DAND30Zyvjwc1icQVzH0F+Sdx5A==",
      "license": "MIT",
      "dependencies": {
        "@ampproject/remapping": "^2.3.0",
        "@jridgewell/sourcemap-codec": "^1.5.0",
        "@types/estree": "^1.0.5",
        "acorn": "^8.12.1",
        "acorn-typescript": "^1.4.13",
        "aria-query": "^5.3.1",
        "axobject-query": "^4.1.0",
        "esm-env": "^1.2.1",
        "esrap": "^1.2.3",
        "is-reference": "^3.0.3",
        "locate-character": "^3.0.0",
        "magic-string": "^0.30.11",
        "zimmerframe": "^1.1.2"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/svelte-check": {
      "version": "4.1.1",
      "resolved": "https://registry.npmjs.org/svelte-check/-/svelte-check-4.1.1.tgz",
      "integrity": "sha512-NfaX+6Qtc8W/CyVGS/F7/XdiSSyXz+WGYA9ZWV3z8tso14V2vzjfXviKaTFEzB7g8TqfgO2FOzP6XT4ApSTUTw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@jridgewell/trace-mapping": "^0.3.25",
        "chokidar": "^4.0.1",
        "fdir": "^6.2.0",
        "picocolors": "^1.0.0",
        "sade": "^1.7.4"
      },
      "bin": {
        "svelte-check": "bin/svelte-check"
      },
      "engines": {
        "node": ">= 18.0.0"
      },
      "peerDependencies": {
        "svelte": "^4.0.0 || ^5.0.0-next.0",
        "typescript": ">=5.0.0"
      }
    },
    "node_modules/svelte-check/node_modules/fdir": {
      "version": "6.4.2",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.4.2.tgz",
      "integrity": "sha512-KnhMXsKSPZlAhp7+IjUkRZKPb4fUyccpDrdFXbi4QL1qkmFh9kVY09Yox+n4MaOb3lHZ1Tv829C3oaaXoMYPDQ==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/svelte-check/node_modules/picomatch": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.2.tgz",
      "integrity": "sha512-M7BAV6Rlcy5u+m6oPhAPFgJTzAioX/6B0DxyvDlo9l8+T3nLKbrczg2WLUyzd45L8RqfUMyGPzekbMvX2Ldkwg==",
      "dev": true,
      "license": "MIT",
      "optional": true,
      "peer": true,
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/svelte-eslint-parser": {
      "version": "0.43.0",
      "resolved": "https://registry.npmjs.org/svelte-eslint-parser/-/svelte-eslint-parser-0.43.0.tgz",
      "integrity": "sha512-GpU52uPKKcVnh8tKN5P4UZpJ/fUDndmq7wfsvoVXsyP+aY0anol7Yqo01fyrlaWGMFfm4av5DyrjlaXdLRJvGA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "eslint-scope": "^7.2.2",
        "eslint-visitor-keys": "^3.4.3",
        "espree": "^9.6.1",
        "postcss": "^8.4.39",
        "postcss-scss": "^4.0.9"
      },
      "engines": {
        "node": "^12.22.0 || ^14.17.0 || >=16.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/ota-meshi"
      },
      "peerDependencies": {
        "svelte": "^3.37.0 || ^4.0.0 || ^5.0.0"
      },
      "peerDependenciesMeta": {
        "svelte": {
          "optional": true
        }
      }
    },
    "node_modules/symbol-tree": {
      "version": "3.2.4",
      "resolved": "https://registry.npmjs.org/symbol-tree/-/symbol-tree-3.2.4.tgz",
      "integrity": "sha512-9QNk5KwDF+Bvz+PyObkmSYjI5ksVUYtjW7AU22r2NKcfLJcXp96hkDWU3+XndOsUb+AQ9QhfzfCT2O+CNWT5Tw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/table-layout": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/table-layout/-/table-layout-1.0.2.tgz",
      "integrity": "sha512-qd/R7n5rQTRFi+Zf2sk5XVVd9UQl6ZkduPFC3S7WEGJAmetDTjY3qPN50eSKzwuzEyQKy5TN2TiZdkIjos2L6A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "array-back": "^4.0.1",
        "deep-extend": "~0.6.0",
        "typical": "^5.2.0",
        "wordwrapjs": "^4.0.0"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/table-layout/node_modules/array-back": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/array-back/-/array-back-4.0.2.tgz",
      "integrity": "sha512-NbdMezxqf94cnNfWLL7V/im0Ub+Anbb0IoZhvzie8+4HJ4nMQuzHuy49FkGYCJK2yAloZ3meiB6AVMClbrI1vg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/table-layout/node_modules/typical": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/typical/-/typical-5.2.0.tgz",
      "integrity": "sha512-dvdQgNDNJo+8B2uBQoqdb11eUCE1JQXhvjC/CZtgvZseVd5TYMXnq0+vuUemXbd/Se29cTaUuPX3YIc2xgbvIg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/tailwindcss": {
      "version": "4.0.9",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-4.0.9.tgz",
      "integrity": "sha512-12laZu+fv1ONDRoNR9ipTOpUD7RN9essRVkX36sjxuRUInpN7hIiHN4lBd/SIFjbISvnXzp8h/hXzmU8SQQYhw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tapable": {
      "version": "2.2.1",
      "resolved": "https://registry.npmjs.org/tapable/-/tapable-2.2.1.tgz",
      "integrity": "sha512-GNzQvQTOIP6RyTfE2Qxb8ZVlNmw0n88vp1szwWRimP02mnTsx3Wtn5qRdqY9w2XduFNUgvOwhNnQsjwCp+kqaQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/text-table": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/text-table/-/text-table-0.2.0.tgz",
      "integrity": "sha512-N+8UisAXDGk8PFXP4HAzVR9nbfmVJ3zYLAWiTIoqC5v5isinhr+r5uaO8+7r3BMfuNIufIsA7RdpVgacC2cSpw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tinybench": {
      "version": "2.9.0",
      "resolved": "https://registry.npmjs.org/tinybench/-/tinybench-2.9.0.tgz",
      "integrity": "sha512-0+DUvqWMValLmha6lr4kD8iAMK1HzV0/aKnCtWb9v9641TnP/MFb7Pc2bxoxQjTXAErryXVgUOfv2YqNllqGeg==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tinyexec": {
      "version": "0.3.2",
      "resolved": "https://registry.npmjs.org/tinyexec/-/tinyexec-0.3.2.tgz",
      "integrity": "sha512-KQQR9yN7R5+OSwaK0XQoj22pwHoTlgYqmUscPYoknOoWCWfj/5/ABTMRi69FrKU5ffPVh5QcFikpWJI/P1ocHA==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/tinyglobby": {
      "version": "0.2.13",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.13.tgz",
      "integrity": "sha512-mEwzpUgrLySlveBwEVDMKk5B57bhLPYovRfPAXD5gA/98Opn0rCDj3GtLwFvCvH5RK9uPCExUROW5NjDwvqkxw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.4.4",
        "picomatch": "^4.0.2"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tinyglobby/node_modules/fdir": {
      "version": "6.4.4",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.4.4.tgz",
      "integrity": "sha512-1NZP+GK4GfuAv3PqKvxQRDMjdSRZjnkq7KfhlNrCNNlZ0ygQFpebfrnfnq/W7fpUnAv9aGWmY1zKx7FYL3gwhg==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/tinyglobby/node_modules/picomatch": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.2.tgz",
      "integrity": "sha512-M7BAV6Rlcy5u+m6oPhAPFgJTzAioX/6B0DxyvDlo9l8+T3nLKbrczg2WLUyzd45L8RqfUMyGPzekbMvX2Ldkwg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/tinypool": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/tinypool/-/tinypool-1.0.2.tgz",
      "integrity": "sha512-al6n+QEANGFOMf/dmUMsuS5/r9B06uwlyNjZZql/zv8J7ybHCgoihBNORZCY2mzUuAnomQa2JdhyHKzZxPCrFA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": "^18.0.0 || >=20.0.0"
      }
    },
    "node_modules/tinyrainbow": {
      "version": "2.0.0",
      "resolved": "https://registry.npmjs.org/tinyrainbow/-/tinyrainbow-2.0.0.tgz",
      "integrity": "sha512-op4nsTR47R6p0vMUUoYl/a+ljLFVtlfaXkLQmqfLR1qHma1h/ysYk4hEXZ880bf2CYgTskvTa/e196Vd5dDQXw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/tinyspy": {
      "version": "3.0.2",
      "resolved": "https://registry.npmjs.org/tinyspy/-/tinyspy-3.0.2.tgz",
      "integrity": "sha512-n1cw8k1k0x4pgA2+9XrOkFydTerNcJ1zWCO5Nn9scWHTD+5tp8dghT2x1uduQePZTZgd3Tupf+x9BxJjeJi77Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=14.0.0"
      }
    },
    "node_modules/to-regex-range": {
      "version": "5.0.1",
      "resolved": "https://registry.npmjs.org/to-regex-range/-/to-regex-range-5.0.1.tgz",
      "integrity": "sha512-65P7iz6X5yEr1cwcgvQxbbIw7Uk3gOy5dIdtZ4rDveLqhrdJP+Li/Hx6tyK0NEb+2GCyneCMJiGqrADCSNk8sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "is-number": "^7.0.0"
      },
      "engines": {
        "node": ">=8.0"
      }
    },
    "node_modules/totalist": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/totalist/-/totalist-3.0.1.tgz",
      "integrity": "sha512-sf4i37nQ2LBx4m3wB74y+ubopq6W/dIzXg0FDGjsYnZHVa1Da8FH853wlL2gtUhg+xJXjfk3kUZS3BRoQeoQBQ==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/tough-cookie": {
      "version": "4.1.4",
      "resolved": "https://registry.npmjs.org/tough-cookie/-/tough-cookie-4.1.4.tgz",
      "integrity": "sha512-Loo5UUvLD9ScZ6jh8beX1T6sO1w2/MpCRpEP7V280GKMVUQ0Jzar2U3UJPsrdbziLEMMhu3Ujnq//rhiFuIeag==",
      "dev": true,
      "license": "BSD-3-Clause",
      "dependencies": {
        "psl": "^1.1.33",
        "punycode": "^2.1.1",
        "universalify": "^0.2.0",
        "url-parse": "^1.5.3"
      },
      "engines": {
        "node": ">=6"
      }
    },
    "node_modules/tr46": {
      "version": "0.0.3",
      "resolved": "https://registry.npmjs.org/tr46/-/tr46-0.0.3.tgz",
      "integrity": "sha512-N3WMsuqV66lT30CrXNbEjx4GEwlow3v6rr4mCcv6prnfwhS01rkgyFdjPNBYd9br7LpXV1+Emh01fHnq2Gdgrw==",
      "license": "MIT"
    },
    "node_modules/ts-api-utils": {
      "version": "1.4.3",
      "resolved": "https://registry.npmjs.org/ts-api-utils/-/ts-api-utils-1.4.3.tgz",
      "integrity": "sha512-i3eMG77UTMD0hZhgRS562pv83RC6ukSAC2GMNWc+9dieh/+jDM5u5YG+NHX6VNDRHQcHwmsTHctP9LhbC3WxVw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=16"
      },
      "peerDependencies": {
        "typescript": ">=4.2.0"
      }
    },
    "node_modules/type-check": {
      "version": "0.4.0",
      "resolved": "https://registry.npmjs.org/type-check/-/type-check-0.4.0.tgz",
      "integrity": "sha512-XleUoc9uwGXqjWwXaUTZAmzMcFZ5858QA2vvx1Ur5xIcixXIP+8LnFDgRplU30us6teqdlskFfu+ae4K79Ooew==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "prelude-ls": "^1.2.1"
      },
      "engines": {
        "node": ">= 0.8.0"
      }
    },
    "node_modules/type-fest": {
      "version": "0.20.2",
      "resolved": "https://registry.npmjs.org/type-fest/-/type-fest-0.20.2.tgz",
      "integrity": "sha512-Ne+eE4r0/iWnpAxD852z3A+N0Bt5RN//NjJwRd2VFHEmrywxf5vsZlh4R6lixl6B+wz/8d+maTSAkN1FIkI3LQ==",
      "dev": true,
      "license": "(MIT OR CC0-1.0)",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/typescript": {
      "version": "5.7.2",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.7.2.tgz",
      "integrity": "sha512-i5t66RHxDvVN40HfDd1PsEThGNnlMCMT3jMUuoh9/0TaqWevNontacunWyN02LA9/fIbEWlcHZcgTKb9QoaLfg==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/typical": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/typical/-/typical-4.0.0.tgz",
      "integrity": "sha512-VAH4IvQ7BDFYglMd7BPRDfLgxZZX4O4TFcRDA6EN5X7erNJJq+McIEp8np9aVtxrCJ6qx4GTYVfOWNjcqwZgRw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/uglify-js": {
      "version": "3.19.3",
      "resolved": "https://registry.npmjs.org/uglify-js/-/uglify-js-3.19.3.tgz",
      "integrity": "sha512-v3Xu+yuwBXisp6QYTcH4UbH+xYJXqnq2m/LtQVWKWzYc1iehYnLixoQDN9FH6/j9/oybfd6W9Ghwkl8+UMKTKQ==",
      "license": "BSD-2-Clause",
      "optional": true,
      "bin": {
        "uglifyjs": "bin/uglifyjs"
      },
      "engines": {
        "node": ">=0.8.0"
      }
    },
    "node_modules/undici-types": {
      "version": "7.8.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-7.8.0.tgz",
      "integrity": "sha512-9UJ2xGDvQ43tYyVMpuHlsgApydB8ZKfVYTsLDhXkFL/6gfkp+U8xTGdh8pMJv1SpZna0zxG1DwsKZsreLbXBxw==",
      "license": "MIT"
    },
    "node_modules/universalify": {
      "version": "0.2.0",
      "resolved": "https://registry.npmjs.org/universalify/-/universalify-0.2.0.tgz",
      "integrity": "sha512-CJ1QgKmNg3CwvAv/kOFmtnEN05f0D/cn9QntgNOQlQF9dgvVTHj3t+8JPdjqawCHk7V/KA+fbUqzZ9XWhcqPUg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">= 4.0.0"
      }
    },
    "node_modules/uri-js": {
      "version": "4.4.1",
      "resolved": "https://registry.npmjs.org/uri-js/-/uri-js-4.4.1.tgz",
      "integrity": "sha512-7rKUyy33Q1yc98pQ1DAmLtwX109F7TIfWlW1Ydo8Wl1ii1SeHieeh0HHfPeL2fMXK6z0s8ecKs9frCuLJvndBg==",
      "dev": true,
      "license": "BSD-2-Clause",
      "dependencies": {
        "punycode": "^2.1.0"
      }
    },
    "node_modules/url-parse": {
      "version": "1.5.10",
      "resolved": "https://registry.npmjs.org/url-parse/-/url-parse-1.5.10.tgz",
      "integrity": "sha512-WypcfiRhfeUP9vvF0j6rw0J3hrWrw6iZv3+22h6iRMJ/8z1Tj6XfLP4DsUix5MhMPnXpiHDoKyoZ/bdCkwBCiQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "querystringify": "^2.1.1",
        "requires-port": "^1.0.0"
      }
    },
    "node_modules/util-deprecate": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/util-deprecate/-/util-deprecate-1.0.2.tgz",
      "integrity": "sha512-EPD5q1uXyFxJpCrLnCc1nHnq3gOa6DZBocAIiI2TaSCA7VCJ1UJDMagCzIkXNsUYfD1daK//LTEQ8xiIbrHtcw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/vite": {
      "version": "6.3.5",
      "resolved": "https://registry.npmjs.org/vite/-/vite-6.3.5.tgz",
      "integrity": "sha512-cZn6NDFE7wdTpINgs++ZJ4N49W2vRp8LCKrn3Ob1kYNtOo21vfDoaV5GzBfLU4MovSAB8uNRm4jgzVQZ+mBzPQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.25.0",
        "fdir": "^6.4.4",
        "picomatch": "^4.0.2",
        "postcss": "^8.5.3",
        "rollup": "^4.34.9",
        "tinyglobby": "^0.2.13"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^18.0.0 || ^20.0.0 || >=22.0.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^18.0.0 || ^20.0.0 || >=22.0.0",
        "jiti": ">=1.21.0",
        "less": "*",
        "lightningcss": "^1.21.0",
        "sass": "*",
        "sass-embedded": "*",
        "stylus": "*",
        "sugarss": "*",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/vite-node": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/vite-node/-/vite-node-3.0.7.tgz",
      "integrity": "sha512-2fX0QwX4GkkkpULXdT1Pf4q0tC1i1lFOyseKoonavXUNlQ77KpW2XqBGGNIm/J4Ows4KxgGJzDguYVPKwG/n5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cac": "^6.7.14",
        "debug": "^4.4.0",
        "es-module-lexer": "^1.6.0",
        "pathe": "^2.0.3",
        "vite": "^5.0.0 || ^6.0.0"
      },
      "bin": {
        "vite-node": "vite-node.mjs"
      },
      "engines": {
        "node": "^18.0.0 || ^20.0.0 || >=22.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      }
    },
    "node_modules/vite/node_modules/fdir": {
      "version": "6.4.4",
      "resolved": "https://registry.npmjs.org/fdir/-/fdir-6.4.4.tgz",
      "integrity": "sha512-1NZP+GK4GfuAv3PqKvxQRDMjdSRZjnkq7KfhlNrCNNlZ0ygQFpebfrnfnq/W7fpUnAv9aGWmY1zKx7FYL3gwhg==",
      "dev": true,
      "license": "MIT",
      "peerDependencies": {
        "picomatch": "^3 || ^4"
      },
      "peerDependenciesMeta": {
        "picomatch": {
          "optional": true
        }
      }
    },
    "node_modules/vite/node_modules/picomatch": {
      "version": "4.0.2",
      "resolved": "https://registry.npmjs.org/picomatch/-/picomatch-4.0.2.tgz",
      "integrity": "sha512-M7BAV6Rlcy5u+m6oPhAPFgJTzAioX/6B0DxyvDlo9l8+T3nLKbrczg2WLUyzd45L8RqfUMyGPzekbMvX2Ldkwg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/sponsors/jonschlinkert"
      }
    },
    "node_modules/vitefu": {
      "version": "1.0.4",
      "resolved": "https://registry.npmjs.org/vitefu/-/vitefu-1.0.4.tgz",
      "integrity": "sha512-y6zEE3PQf6uu/Mt6DTJ9ih+kyJLr4XcSgHR2zUkM8SWDhuixEJxfJ6CZGMHh1Ec3vPLoEA0IHU5oWzVqw8ulow==",
      "dev": true,
      "license": "MIT",
      "workspaces": [
        "tests/deps/*",
        "tests/projects/*"
      ],
      "peerDependencies": {
        "vite": "^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0"
      },
      "peerDependenciesMeta": {
        "vite": {
          "optional": true
        }
      }
    },
    "node_modules/vitest": {
      "version": "3.0.7",
      "resolved": "https://registry.npmjs.org/vitest/-/vitest-3.0.7.tgz",
      "integrity": "sha512-IP7gPK3LS3Fvn44x30X1dM9vtawm0aesAa2yBIZ9vQf+qB69NXC5776+Qmcr7ohUXIQuLhk7xQR0aSUIDPqavg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@vitest/expect": "3.0.7",
        "@vitest/mocker": "3.0.7",
        "@vitest/pretty-format": "^3.0.7",
        "@vitest/runner": "3.0.7",
        "@vitest/snapshot": "3.0.7",
        "@vitest/spy": "3.0.7",
        "@vitest/utils": "3.0.7",
        "chai": "^5.2.0",
        "debug": "^4.4.0",
        "expect-type": "^1.1.0",
        "magic-string": "^0.30.17",
        "pathe": "^2.0.3",
        "std-env": "^3.8.0",
        "tinybench": "^2.9.0",
        "tinyexec": "^0.3.2",
        "tinypool": "^1.0.2",
        "tinyrainbow": "^2.0.0",
        "vite": "^5.0.0 || ^6.0.0",
        "vite-node": "3.0.7",
        "why-is-node-running": "^2.3.0"
      },
      "bin": {
        "vitest": "vitest.mjs"
      },
      "engines": {
        "node": "^18.0.0 || ^20.0.0 || >=22.0.0"
      },
      "funding": {
        "url": "https://opencollective.com/vitest"
      },
      "peerDependencies": {
        "@edge-runtime/vm": "*",
        "@types/debug": "^4.1.12",
        "@types/node": "^18.0.0 || ^20.0.0 || >=22.0.0",
        "@vitest/browser": "3.0.7",
        "@vitest/ui": "3.0.7",
        "happy-dom": "*",
        "jsdom": "*"
      },
      "peerDependenciesMeta": {
        "@edge-runtime/vm": {
          "optional": true
        },
        "@types/debug": {
          "optional": true
        },
        "@types/node": {
          "optional": true
        },
        "@vitest/browser": {
          "optional": true
        },
        "@vitest/ui": {
          "optional": true
        },
        "happy-dom": {
          "optional": true
        },
        "jsdom": {
          "optional": true
        }
      }
    },
    "node_modules/w3c-xmlserializer": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/w3c-xmlserializer/-/w3c-xmlserializer-5.0.0.tgz",
      "integrity": "sha512-o8qghlI8NZHU1lLPrpi2+Uq7abh4GGPpYANlalzWxyWteJOCsr/P+oPBA49TOLu5FTZO4d3F9MnWJfiMo4BkmA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "xml-name-validator": "^5.0.0"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/webidl-conversions": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-7.0.0.tgz",
      "integrity": "sha512-VwddBukDzu71offAQR975unBIGqfKZpM+8ZX6ySk8nYhVoo5CYaZyzt3YBvYtRtO+aoGlqxPg/B87NGVZ/fu6g==",
      "dev": true,
      "license": "BSD-2-Clause",
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/whatwg-encoding": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/whatwg-encoding/-/whatwg-encoding-3.1.1.tgz",
      "integrity": "sha512-6qN4hJdMwfYBtE3YBTTHhoeuUrDBPZmbQaxWAqSALV/MeEnR5z1xd8UKud2RAkFoPkmB+hli1TZSnyi84xz1vQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "iconv-lite": "0.6.3"
      },
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/whatwg-mimetype": {
      "version": "4.0.0",
      "resolved": "https://registry.npmjs.org/whatwg-mimetype/-/whatwg-mimetype-4.0.0.tgz",
      "integrity": "sha512-QaKxh0eNIi2mE9p2vEdzfagOKHCcj1pJ56EEHGQOVxp8r9/iszLUUV7v89x9O1p/T+NlTM5W7jW6+cz4Fq1YVg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/whatwg-url": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/whatwg-url/-/whatwg-url-5.0.0.tgz",
      "integrity": "sha512-saE57nupxk6v3HY35+jzBwYa0rKSy0XR8JSxZPwgLr7ys0IBzhGviA1/TUGJLmSVqs8pb9AnvICXEuOHLprYTw==",
      "license": "MIT",
      "dependencies": {
        "tr46": "~0.0.3",
        "webidl-conversions": "^3.0.0"
      }
    },
    "node_modules/whatwg-url/node_modules/webidl-conversions": {
      "version": "3.0.1",
      "resolved": "https://registry.npmjs.org/webidl-conversions/-/webidl-conversions-3.0.1.tgz",
      "integrity": "sha512-2JAn3z8AR6rjK8Sm8orRC0h/bcl/DqL7tRPdGZ4I1CjdF+EaMLmYxBHyXuKL849eucPFhvBoxMsflfOb8kxaeQ==",
      "license": "BSD-2-Clause"
    },
    "node_modules/which": {
      "version": "2.0.2",
      "resolved": "https://registry.npmjs.org/which/-/which-2.0.2.tgz",
      "integrity": "sha512-BLI3Tl1TW3Pvl70l3yq3Y64i+awpwXqsGBYWkkqMtnbXgrMD+yj7rhW0kuEDxzJaYXGjEW5ogapKNMEKNMjibA==",
      "license": "ISC",
      "dependencies": {
        "isexe": "^2.0.0"
      },
      "bin": {
        "node-which": "bin/node-which"
      },
      "engines": {
        "node": ">= 8"
      }
    },
    "node_modules/why-is-node-running": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/why-is-node-running/-/why-is-node-running-2.3.0.tgz",
      "integrity": "sha512-hUrmaWBdVDcxvYqnyh09zunKzROWjbZTiNy8dBEjkS7ehEDQibXJ7XvlmtbwuTclUiIyN+CyXQD4Vmko8fNm8w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "siginfo": "^2.0.0",
        "stackback": "0.0.2"
      },
      "bin": {
        "why-is-node-running": "cli.js"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/word-wrap": {
      "version": "1.2.5",
      "resolved": "https://registry.npmjs.org/word-wrap/-/word-wrap-1.2.5.tgz",
      "integrity": "sha512-BN22B5eaMMI9UMtjrGd5g5eCYPpCPDUy0FJXbYsaT5zYxjFOckS53SQDE3pWkVoWpHXVb3BrYcEN4Twa55B5cA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/wordwrap": {
      "version": "1.0.0",
      "resolved": "https://registry.npmjs.org/wordwrap/-/wordwrap-1.0.0.tgz",
      "integrity": "sha512-gvVzJFlPycKc5dZN4yPkP8w7Dc37BtP1yczEneOb4uq34pXZcvrtRTmWV8W+Ume+XCxKgbjM+nevkyFPMybd4Q==",
      "license": "MIT"
    },
    "node_modules/wordwrapjs": {
      "version": "4.0.1",
      "resolved": "https://registry.npmjs.org/wordwrapjs/-/wordwrapjs-4.0.1.tgz",
      "integrity": "sha512-kKlNACbvHrkpIw6oPeYDSmdCTu2hdMHoyXLTcUKala++lx5Y+wjJ/e474Jqv5abnVmwxw08DiTuHmw69lJGksA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "reduce-flatten": "^2.0.0",
        "typical": "^5.2.0"
      },
      "engines": {
        "node": ">=8.0.0"
      }
    },
    "node_modules/wordwrapjs/node_modules/typical": {
      "version": "5.2.0",
      "resolved": "https://registry.npmjs.org/typical/-/typical-5.2.0.tgz",
      "integrity": "sha512-dvdQgNDNJo+8B2uBQoqdb11eUCE1JQXhvjC/CZtgvZseVd5TYMXnq0+vuUemXbd/Se29cTaUuPX3YIc2xgbvIg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi": {
      "version": "8.1.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-8.1.0.tgz",
      "integrity": "sha512-si7QWI6zUMq56bESFvagtmzMdGOtoxfR+Sez11Mobfc7tm+VkUckk9bW2UeffTGVUbOksxmSw0AA2gs8g71NCQ==",
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^6.1.0",
        "string-width": "^5.0.1",
        "strip-ansi": "^7.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs": {
      "name": "wrap-ansi",
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/wrap-ansi-cjs/node_modules/emoji-regex": {
      "version": "8.0.0",
      "resolved": "https://registry.npmjs.org/emoji-regex/-/emoji-regex-8.0.0.tgz",
      "integrity": "sha512-MSjYzcWNOA0ewAHpz0MxpYFvwg6yjy1NG3xteoqz644VCo/RPgnr1/GGt+ic3iJTzQ8Eu3TdM14SawnVUmGE6A==",
      "license": "MIT"
    },
    "node_modules/wrap-ansi-cjs/node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-regex": {
      "version": "6.1.0",
      "resolved": "https://registry.npmjs.org/ansi-regex/-/ansi-regex-6.1.0.tgz",
      "integrity": "sha512-7HSX4QQb4CspciLpVFwyRe79O3xsIZDDLER21kERQ71oaPodF8jL725AgJMFAYbooIqolJoRLuM81SpeUkpkvA==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-regex?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/ansi-styles": {
      "version": "6.2.1",
      "resolved": "https://registry.npmjs.org/ansi-styles/-/ansi-styles-6.2.1.tgz",
      "integrity": "sha512-bN798gFfQX+viw3R7yrGWRqnrN2oRkEkUjjl4JNn4E8GxxbjtG3FbrEIIY3l8/hrwUwIeCZvi4QuOTP4MErVug==",
      "license": "MIT",
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/ansi-styles?sponsor=1"
      }
    },
    "node_modules/wrap-ansi/node_modules/strip-ansi": {
      "version": "7.1.0",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-7.1.0.tgz",
      "integrity": "sha512-iq6eVVI64nQQTRYq2KtEg2d2uU7LElhTJwsH4YzIHZshxlgZms/wIc4VoDQTlG/IvVIrBKG06CrZnp0qv7hkcQ==",
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^6.0.1"
      },
      "engines": {
        "node": ">=12"
      },
      "funding": {
        "url": "https://github.com/chalk/strip-ansi?sponsor=1"
      }
    },
    "node_modules/wrappy": {
      "version": "1.0.2",
      "resolved": "https://registry.npmjs.org/wrappy/-/wrappy-1.0.2.tgz",
      "integrity": "sha512-l4Sp/DRseor9wL6EvV2+TuQn63dMkPjZ/sp9XkghTEbV9KlPS1xUsZ3u7/IQO4wxtcFB4bgpQPRcR3QCvezPcQ==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/ws": {
      "version": "8.18.2",
      "resolved": "https://registry.npmjs.org/ws/-/ws-8.18.2.tgz",
      "integrity": "sha512-DMricUmwGZUVr++AEAe2uiVM7UoO9MAVZMDu05UQOaUII0lp+zOzLLU4Xqh/JvTqklB1T4uELaaPBKyjE1r4fQ==",
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": ">=5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/xml-name-validator": {
      "version": "5.0.0",
      "resolved": "https://registry.npmjs.org/xml-name-validator/-/xml-name-validator-5.0.0.tgz",
      "integrity": "sha512-EvGK8EJ3DhaHfbRlETOWAS5pO9MZITeauHKJyb8wyajUfQUenkIg2MvLDTZ4T/TgIcm3HU0TFBgWWboAZ30UHg==",
      "dev": true,
      "license": "Apache-2.0",
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/xmlchars": {
      "version": "2.2.0",
      "resolved": "https://registry.npmjs.org/xmlchars/-/xmlchars-2.2.0.tgz",
      "integrity": "sha512-JZnDKK8B0RCDw84FNdDAIpZK+JuJw+s7Lz8nksI7SIuU3UXJJslUthsi+uWBUYOwPFwW7W7PRLRfUKpxjtjFCw==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/yaml": {
      "version": "2.7.0",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-2.7.0.tgz",
      "integrity": "sha512-+hSoy/QHluxmC9kCIJyL/uyFmLmc+e5CFR5Wa+bpIhIj85LVb9ZH2nVnqrHoSvKogwODv0ClqZkmiSSaIH5LTA==",
      "dev": true,
      "license": "ISC",
      "optional": true,
      "peer": true,
      "bin": {
        "yaml": "bin.mjs"
      },
      "engines": {
        "node": ">= 14"
      }
    },
    "node_modules/yocto-queue": {
      "version": "0.1.0",
      "resolved": "https://registry.npmjs.org/yocto-queue/-/yocto-queue-0.1.0.tgz",
      "integrity": "sha512-rVksvsnNCdJ/ohGc6xgPwyN8eheCxsiLM8mxuE/t/mOVqJewPuO1miLpTHQiRgTKCLexL4MeAFVagts7HmNZ2Q==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/sponsors/sindresorhus"
      }
    },
    "node_modules/zimmerframe": {
      "version": "1.1.2",
      "resolved": "https://registry.npmjs.org/zimmerframe/-/zimmerframe-1.1.2.tgz",
      "integrity": "sha512-rAbqEGa8ovJy4pyBxZM70hg4pE6gDgaQ0Sl9M3enG3I0d6H4XSAM3GeNGLKnsBpuijUow064sf7ww1nutC5/3w==",
      "license": "MIT"
    }
  }
}
```


## package.json

```json
{
  "name": "cmsassstarter",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "dev": "vite dev",
    "build": "vite build",
    "preview": "vite preview",
    "check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
    "check:watch": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json --watch",
    "test": "vitest",
    "test_run": "vitest run",
    "lint": "eslint .",
    "format": "prettier --write --plugin prettier-plugin-svelte ./",
    "format_check": "prettier --check --plugin prettier-plugin-svelte ./"
  },
  "devDependencies": {
    "@sveltejs/adapter-auto": "^6.0.0",
    "@sveltejs/kit": "^2.21.1",
    "@sveltejs/vite-plugin-svelte": "^5.0.3",
    "@tailwindcss/postcss": "^4.0.9",
    "@tailwindcss/typography": "^0.5.13",
    "@types/glob": "^8.1.0",
    "@types/html-to-text": "^9.0.4",
    "@types/jsdom": "^21.1.7",
    "@typescript-eslint/eslint-plugin": "^6.20.0",
    "@typescript-eslint/parser": "^6.19.0",
    "daisyui": "^5.0.0",
    "eslint": "^8.28.0",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-svelte": "^2.45.1",
    "fuse.js": "^7.0.0",
    "glob": "^10.4.5",
    "html-to-text": "^9.0.5",
    "jsdom": "^24.1.1",
    "postcss": "^8.4.31",
    "prettier": "^3.1.0",
    "prettier-plugin-svelte": "^3.2.6",
    "super-sitemap": "^0.15.1",
    "svelte": "^5.0.0",
    "svelte-check": "^4.0.0",
    "tailwindcss": "^4.0.9",
    "typescript": "^5.5.0",
    "vite": "^6.3.5",
    "vitest": "^3.0.7"
  },
  "type": "module",
  "dependencies": {
    "@supabase/auth-ui-shared": "^0.1.8",
    "@supabase/auth-ui-svelte": "^0.2.9",
    "@supabase/ssr": "^0.5.2",
    "@supabase/supabase-js": "^2.45.2",
    "handlebars": "^4.7.8",
    "resend": "^3.5.0",
    "stripe": "^13.3.0"
  },
  "overrides": {
    "@supabase/auth-ui-svelte": {
      "svelte": "$svelte"
    },
    "@supabase/ssr": {
      "cookie": "^0.7.0"
    },
    "@sveltejs/kit": {
      "cookie": "^0.7.0"
    }
  }
}
```


## postcss.config.js

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
}
```


## README.md

```md
<p align="center">
    <picture>
        <img width="420" alt="SaaS Starter Header reading: The open source, fast, and free to host SaaS template" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/12f47617-e5be-4694-affc-23310e54b885">
    </picture>
</p>

<p align="center">
  <a href="https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/build.yml" target="_blank"><img src="https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/build.yml/badge.svg?branch=main" alt="Built Status"></a>
  <a href="https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/format.yml" target="_blank"><img src="https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/format.yml/badge.svg?branch=main" alt="Format Check"></a>
  <a href="https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/linting.yml" target="_blank"><img src="https://github.com/CriticalMoments/CMSaasStarter/actions/workflows/linting.yml/badge.svg?branch=main" alt="Linting"></a>
  <a href="https://github.com/CriticalMoments/CMSaasStarter/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/badge/License-MIT-brightgreen?labelColor=32383f" alt="License"></a>
</p>

<p align="center">
  <a href="https://saasstarter.work"><strong>Demo & Homepage</strong></a> •
  <a href="https://github.com/CriticalMoments/CMSaasStarter#quick-start"><strong>Quick Start Guide</strong></a> • 
  <a href="https://github.com/CriticalMoments/CMSaasStarter/issues"><strong>Issues</strong></a>
</p>

<br/>

# SaaS Starter: A SvelteKit Boilerplate/Template

- [Feature Rich](#features): user auth, user dashboard, marketing site, blog engine, billing/subscriptions, pricing page, search, emails, and more.
- [Lightning Performance](#performance--best-practices): fast pre-rendered pages which score 100/100 on Google PageSpeed.
- [Delighful Developer Experience](#tech-stack): tools you'll love working with, including SvelteKit, Tailwind, DaisyUI, Postgres, and Supabase.
- Extensible: all the tools you need to make additional marketing pages, UI components, user dashboards, admin portals, database backends, API endpoints, and more.
- [Hosting](#suggested-hosting-stack): Our suggested hosting stack is free to host, cheap to scale, easy to manage, and includes automatic deployments.
- [MIT Open Source](https://github.com/CriticalMoments/CMSaasStarter/blob/main/LICENSE)
- [Fully Functional Demo](https://saasstarter.work)
- [Quick Start](#quick-start): Full docs from `git clone` to deployment.

Created by the folks at [Kiln AI](https://getkiln.ai)! It's the easiest tool for fine-tuning LLM models, synthetic data generation, and collaborating on datasets. The Kiln app was built with SaaS Starter!

**[Kiln AI](https://getkiln.ai)** Rapid AI Prototyping and Dataset Collaboration Tool

## Demo

You can explore all the features using our fully functional demo [saasstarter.work](https://saasstarter.work).

[![Try it Now](https://img.shields.io/badge/Try_it_Now-37a779?style=for-the-badge "Try it Now")](https://saasstarter.work)

See [criticalmoments.io](https://criticalmoments.io) and [getkiln.ai](https://getkiln.ai) for examples of what’s possible after this template has design, content, and functionality added.

<a href="https://saasstarter.work">
<kbd>
<img width="500" alt="homepage" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/34944c09-df72-4ac2-9099-01d25d99911b">
</kbd>
<br>
<kbd>
<img width="200" alt="pricing page" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/c3cb2ab7-3739-473e-a1fe-f82a4a31e844">
</kbd><kbd>
<img width="200" alt="settings page" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/2d947c97-3cc7-4ff5-a5b1-7c8478b6f31a">
</kbd><kbd>
<img width="200" alt="payments portal" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/0c4749c3-0d29-4edc-ae87-d8a4eefea3c9">
</kbd>
</a>

## Features

Everything you need to get started for a SaaS company:

- User Authentication: Sign up, sign out, forgot password, email verification, and oAuth. Powered by Supabase Auth. GDPR cookie warning for European users.
- Marketing Page with SEO optimization and Sitemap
- Blog engine with rich formatting, RSS and SEO optimization.
- User Dashboard with user profile, user settings, update email/password, billing, and more
- Subscriptions powered by Stripe Checkout
- Pricing page
- Emails: send emails to users, including template support
- Search: lightning fast site search, without a backend
- Contact-us form
- Billing portal: self serve to change card, upgrade, cancel, or download receipts
- Onboarding flow after signup: collect user data, and select a payment plan
- Style toolkit: theming and UI components
- Responsive: designed for mobile and desktop.
- Extensible: all the tools you need to make additional marketing pages, UI components, admin portals, database backends, API endpoints, and more.

## Introduction Blog Post

Want to learn why we picked the technologies we did, and how to keep your fork lightning fast as you add content? Check out [our blog post](https://criticalmoments.io/blog/how_we_built_our_marketing_page) on the process. Yes, it's hosted on a SaaS Starter fork!

## Tech Stack

- Web Framework: SvelteKit
- CSS / Styling
  - Framework: TailwindCSS
  - Component library: DaisyUI
- Suggested Hosting Stack
  - Host + CDN: Cloudflare Pages
  - Serverless compute: Cloudflare Workers
  - Authentication: Supabase Auth
  - Database: Supabase Postgres
- Payments
  - Stripe Checkout
  - Stripe Portal

## Suggested Hosting Stack

**There’s no cost for using this template**. The costs below reflect our suggested hosting stack.

- **$0/mo** — Supabase free tier, Cloudflare free tier.
  - Pros:
    - Free!
    - Can scale to thousands of users.
    - Unlimited static page requests.
    - 100k serverless functions/day.
  - Cons:
    - Does not include database backups. The frugal among you could hook up pgdump backups on lambda/S3 for a few cents per month.
    - Will auto-pause your database when not in use for 7 days.
  - Who it’s for:
    - This tier is perfectly functional for a hobby project, or pre-revenue company (up to 50,000 monthly active users). It’s easy to scale up once revenue starts, but it’s also fine to keep at this scale indefinitely.
- **$30/mo** - Supabase Pro, Cloudfare [Workers Paid](https://www.cloudflare.com/plans/developer-platform/)
  - Pros:
    - Database backups.
    - Never pauses database.
    - Over 1M serverless functions per day, with linear pricing for additional invocations.
  - Cons:
    - none
  - Who it’s for:
    - I suggest moving to this once you have paid customers or investors.

## Performance / Best Practices

The selected tech stack creates lightning fast websites.

- Pre-rendering (static generation) for marketing pages, pricing and blog
- Instant navigation: the best of CSR + SSR in one. SSR your first page for fastest possible initial load times. For subsequent pages, the content is pre-loaded and rendered with CSR, for instant rendering.
- CDN optimized, for high edge-cache hit ratios
- Edge-functions for dynamic APIs/pages
- Svelte and Tailwind compile out unused HTML, CSS and JS at deploy time for smaller pages
- Linting to find accessibility and syntax issues

The result is a perfect Google PageSpeed Insights score in all categories!

<img width="420" alt="Screenshot 2024-01-18 at 11 31 32 AM" src="https://github.com/CriticalMoments/CMSaasStarter/assets/848343/46b5e960-2aa0-4fb5-acd7-4f84b380e1d0">

# Quick Start

## Create a Copy of the Template

To get started, create your own copy of the project for development. There are two options:

- "Use this template": use this Github button if you want to build your own project using CMSaasStarter as a starter template and you aren't planning on contributing work back to the public open source project. See [Github Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).
- "Fork": use this button if you want contribute some or all of your work back to the public open source project. It will keep the full commit history, and be easier to create PRs back to CMSaasStarter.

## Setup Local Development

On your development machine:

```
git pull [Your Repo Created Above]
cd CMSaasStarter ## or your repo name if different
npm install
## Create an env file. You'll replace the values in this in later steps.
cp .env.example .env.local
## Run the project locally in dev mode, and launch the browser
npm run dev -- --open
```

**Note:** some features won't work until you complete the rest of the setup steps below!

## Developer Tools

The repo includes [CI scripts](https://aws.amazon.com/devops/continuous-integration/) designed for [GitHub Actions](https://github.com/features/actions). These confirm you don’t break your [build](https://github.com/CriticalMoments/CMSaasStarter/blob/main/.github/workflows/build.yml), you use [proper code formatting](https://github.com/CriticalMoments/CMSaasStarter/blob/main/.github/workflows/format.yml), [code linting and typechecking passes](https://github.com/CriticalMoments/CMSaasStarter/blob/main/.github/workflows/linting.yml), and even spell checking.

### Enabling GitHub Actions

Github disables CI on new forks by default, so be sure to go into the Github Actions page for your repo and enable workflows.

### Running Developer Tools Locally

To manually run all these tools run the following script. You can view it's contents for individual commands.

```
# first time only: chmod +x ./checks.sh
./checks.sh
```

### Running Developer Tools in your IDE

Installing extensions in your editor can automatically format-on-save, show linting/type issues inline, and run your test cases:

- Svelte for Svelte and accessibility issues: [VSCode](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) or [other editors](https://sveltesociety.dev/tools#editor-support)
- ESLint for type checking and linting: [VSCode](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [other editors](https://eslint.org/docs/latest/use/integrations)
- Vitest for testing if you add tests: [VSCode](https://marketplace.visualstudio.com/items?itemName=vitest.explorer) or [other editors](https://vitest.dev/guide/ide)

### Running Developer Tools from Git Hooks

To catch build, formatting, linting and test issues before you commit changes, we suggest the following local git hook. It will run before you commit, stop you from breaking the build, and show any issues that are found. Add the lines below to an executable git hook script at the location `.git/hooks/pre-commit`.

```
#!/bin/sh
# Run standard checks before committing
cd "$(dirname "$0")"
sh ../../checks.sh
```

### Disabling Developer Tools

If you find build, formatting or linting rules too tedious, you can disable enforcement by deleting the CI files (`.github/workflows/*`) and removing the git hook (`.git/hooks/pre-commit`).

## Setup Supabase Project

- Create a Supabase account
- Create a new Supabase project in the console
- Wait for the database to launch
- Set up your database schema:
  - For new Supabase projects:
    - Go to the [SQL Editor](https://supabase.com/dashboard/project/_/sql) page in the Dashboard.
    - Run the SQL from `database_migration.sql` to create the initial schema.
  - For existing projects:
    - Apply migrations from the `supabase/migrations` directory:
      1. Go to the Supabase dashboard's SQL Editor.
      2. Identify the last migration you applied, then run the SQL content of each subsequent file in chronological order.
- Enable user signups in the [Supabase console](https://app.supabase.com/project/_/settings/auth): sometimes new signups are disabled by default in Supabase projects
- Go to the [API Settings](https://supabase.com/dashboard/project/_/settings/api) page in the Dashboard. Find your Project-URL (PUBLIC_SUPABASE_URL), anon (PUBLIC_SUPABASE_ANON_KEY) and service_role (PRIVATE_SUPABASE_SERVICE_ROLE).
  - For local development: create a `.env.local` file:
    ```
    PUBLIC_SUPABASE_URL=https://your-project.supabase.co
    PUBLIC_SUPABASE_ANON_KEY=your-anon-key
    PRIVATE_SUPABASE_SERVICE_ROLE=your service_role secret
    ```
  - For production, add these two keys to your deployment environment (see below). We suggest you encrypt your service role.
- Auth Callback
  - Set your default callback URL for auth in the Supabase Auth console. For example, for the demo page we added: `https://saasstarter.work/auth/callback` . Also add that same URL to the the “allowed redirect URL” list in the Supabase auth console further down the page.
  - Add a link to the redirect URL allow list which allows parameters to your auth callback. For example we added the following for the demo page: `https://saasstarter.work/auth/callback?*`
  - Also add any local development URLs you want to use in testing to the list for your dev environment. For example, we added the following for local development: `http://localhost:5173/auth/callback` and `http://localhost:5173/auth/callback?*`.
  - Test that the "sign up" and "forgot password" emails link back to your domain correctly by checking the have a redirect_to parameter to your `yourdomain.com/auth/callback`. If they link to the base URL or another page, double check you have the config above set correctly.
- OAuth Logins
  - Decide which oauth logins you want to support, and set them up in the Supabase Auth console under “Auth Providers”. Be sure to provide them the Supabase callback URL. Also be sure to set any platform specific permissions/settings to retrieve their email as part of the login (for example, for Github it's under `Account Permissions > Email Address > Read Only Access`
  - Edit `oauthProviders` list in `/src/routes/(marketing)/login/login_config.ts` with the list of providers you chose. If you don’t want any OAuth options, make this an empty array.
  - Test each provider to ensure you setup the client ID, client secret and callback correctly for each
- Auth Email SMTP
  - Supabase has a limit of 4 emails per hour on their development server. You should [Configure a Custom SMTP](https://supabase.com/docs/guides/auth/auth-smtp) sending emails from your own domain.
  - Customize the email templates in the Supabase Auth console to include your product name and branding
- Test authentication
  - Open the `/login` page in your browser, and ensure you can sign up, confirm email, log in, and edit your account.

## Setup Stripe

- Create a Stripe account
- Create a product and price Tiers
  - Create your [products](https://stripe.com/docs/api/products) and their [prices](https://stripe.com/docs/api/prices) in the Dashboard or with the Stripe CLI.
  - SaaS Starter works best if you define each tier as a separate product (eg, `SaaS Starter Free`, `Saas Starter Pro`, `Saas Starter Enterprise`). Include a monthly and annual price for each product if you want to support multiple billing periods.
  - You do not need to create a free plan in Stripe. The free plan is managed within the app.
- Setup your environment
  - Get your [Secret API](https://dashboard.stripe.com/test/apikeys) key, and add it as an environment variable PRIVATE_STRIPE_API_KEY (`.env.local` locally, and Cloudflare environment for prod). Be sure to use test keys for development, and keep your production/live keys secret and secure.
- Optional: theme your Stripe integration
  - Change the colors and fonts to match your brand [here](https://dashboard.stripe.com/settings/branding)
- Update your pricing plan data to align to your stripe data
  - See `/src/routes/(marketing)/pricing/pricing_plans.ts` and Fill in all fields for each plan. stripe_price_id and stripe_product_id should only be omitted on a single “free” plan. Multiple free plans are not supported.
    - The product in Stripe can contain several prices for the same product (annual, monthly, etc). The stripe_price_id you choose to put in this json will be the default we use for the checkout experience. However, if you have more prices configured for a product configured, the user can switch between them in the management portal.
  - Set the `defaultPlanId` to the plan the user will see as their “current plan” after signup, but before subscribing to a paid plan (typically “free”). It should align to the plan with no stripe_price_id.
  - if you want an item highlighted on `/pricing`, specify that plan ID in `/src/routes/(marketing)/pricing/+page.svelte`
- Update your portal configuration
  - Open [stripe portal config](https://dashboard.stripe.com/test/settings/billing/portal) and make the following changes
    - Disallow editing email under customer information (since we allow editing in primary portal)
    - Optional: setup a custom domain so Stripe pages use your own domain
- Repeat steps in production environment

## Deploy

We have two documented options for deploying SaaS Starter: Cloudflare Pages and Vercel. However, it can be hosted anywhere you can host a SvelteKit app.

Our [official demo](https://saasstarter.work) is hosted on Cloudflare Pages, and deployed each time the main branch is updated.

### Deploy To Cloudflare

Cloudflare Pages and Workers is one of the most popular options for deploying SvelteKit and we recommend it. [Follow Cloudflare’s instructions](https://developers.cloudflare.com/pages/get-started/git-integration/) to deploy in a few clicks. Be sure to select “SvelteKit” as framework, and the rest of the defaults will work.

When prompted: add environment variables for your production environment (PUBLIC_SUPABASE_URL,
PUBLIC_SUPABASE_ANON_KEY, PRIVATE_SUPABASE_SERVICE_ROLE, and PRIVATE_STRIPE_API_KEY).

Optional: enable [Cloudflare Analytics](https://www.cloudflare.com/en-ca/application-services/products/analytics/) for usage metrics.

### Deploy to Vercel

Deploy using Vercel's deploy button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FCriticalMoments%2FCMSaasStarter&env=PUBLIC_SUPABASE_URL,PUBLIC_SUPABASE_ANON_KEY,PRIVATE_SUPABASE_SERVICE_ROLE,PRIVATE_STRIPE_API_KEY&envDescription=Each%20environment%20variable%20is%20documented%20in%20our%20quick%20start%20guide%3A%20https%3A%2F%2Fgithub.com%2FCriticalMoments%2FCMSaasStarter%3Ftab%3Dreadme-ov-file%23quick-start&envLink=https%3A%2F%2Fgithub.com%2FCriticalMoments%2FCMSaasStarter%3Ftab%3Dreadme-ov-file%23quick-start&demo-title=SaasStarter%20Demo&demo-description=A%20live%20demo%20of%20this%20template%2C%20deployed%20from%20the%20main%20branch.&demo-url=https%3A%2F%2Fsaasstarter.work&demo-image=https%3A%2F%2Fprivate-user-images.githubusercontent.com%2F848343%2F297197975-34944c09-df72-4ac2-9099-01d25d99911b.png%3Fjwt%3DeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjE0NTAwMzMsIm5iZiI6MTcyMTQ0OTczMywicGF0aCI6Ii84NDgzNDMvMjk3MTk3OTc1LTM0OTQ0YzA5LWRmNzItNGFjMi05MDk5LTAxZDI1ZDk5OTExYi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjQwNzIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI0MDcyMFQwNDI4NTNaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0zY2E4ZmY3YjVhMTc3YWE5YmI2MzI3YWE3MWQ2OWIzMjI3MGU2YzhmZDJjNjhlNDJhY2VjMDExMDk5ZjMyM2M4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCZhY3Rvcl9pZD0wJmtleV9pZD0wJnJlcG9faWQ9MCJ9.O8e9x5qFiij0TILjUncTOXjAs5Di2-8221K-N0YttbE)

Here is a demo of of Saas Starter hosted on Vercel: [vercel.saasstarter.work](https://vercel.saasstarter.work)

### Deploy Alternatives

If you prefer another host you can explore alternatives:

- [SvelteKit official adapters](https://kit.svelte.dev/docs/adapters) including Netlify, Vercel, and Node
- [Community adapters](https://sveltesociety.dev/components#adapters) including Github pages, AppEngine, Azure, and more
- [Supabase](https://supabase.com/docs/guides/getting-started/quickstarts/sveltekit) if you want one host for everything. Note: they do charge $10 a month for custom domains, unlike Cloudflare.

## Setup Emailer -- Optional

SaaS Starter includes email capabilities for sending emails to users and admins.

These are optional and disabled by default. See [email docs](email_docs.md) for details on how to enable and customize them.

## Add Your Content

After the steps above, you’ll have a working version like the demo page. However, it’s not branded, and doesn’t have your content. The following checklist helps you customize the template to make a SaaS homepage for your company.

- Describe your site with a name, description and base URL in in `src/config.ts:`. These values are used for SEO.
- Content
  - Add actual content for marketing homepage
  - Add actual content for your blog (or delete the blog)
    - Update all fields in `src/routes/(marketing)/blog/posts.ts`, and replace the post pages under `src/routes/(marketing)/blog/posts` to align to the urls from `posts.ts`.
    - Alternatively remove the blog by removing the src/routes/(marketing)/blog directory, and remove any links to the blog in the header and footer. You can always bring it back later.
  - Add any pages you want on top of our boiler plate (about, terms of service, etc). Be sure to add links to them in the header, mobile menu header, and footer as appropriate (`src/routes/(marketing)/+layout.svelte`).
  - Note: if you add any dynamic content to the main marketing page, pricing page or blog, be sure to set `prerender = false` in the appropriate `+page.ts` file. These are currently pre-rendered and served as static assets for performance reasons, but that will break if you add server side rendering requirements.
- Update SEO content
  - Update title and meta description tags for every public page. We include generic ones using your site name (`src/config.ts`), but the more specific these are the better.
  - This done automatically for blog posts from `posts.ts` metadata
- Style
  - Theme: Update the theme to match your brand, or use one of the built in themes from DaisyUI (see `app.css`). DaisyUI can automatically use a dark mode theme on systems with dark mode enabled (disabled by default) -- to enable if remove `themes: false;` and specify a dark mode theme. Docs: https://daisyui.com/docs/themes/
  - Update the marketing page layout `src/routes/(marketing)/+layout.svelte`: customize design, delete unwanted pages from header and footer
  - Style: make it your own look and feel.
  - Update the favicon in the `/static/` directory
  - The Authentication UI should automatically update based on your DaisyUI style, but check out the login in pages, and further design tweaks can be made in `src/routes/(marketing)/login/login_config.ts` (see [Auth UI](https://supabase.com/docs/guides/auth/auth-helpers/auth-ui#customization) for options).
- Site Search: any [prerendered](https://kit.svelte.dev/docs/page-options#prerender) content will automatically be indexed by the site search. To exclude a page, add it to `excludePaths` in `src/lib/build_index.ts`.
- Functionality
  - Add actual SaaS functionality!
  - Replace the admin dashboard with real content (`/src/routes/(admin)/account/+page.svelte`).
  - Add API endpoints and database tables as needed to deliver your SaaS product.
- Analytics: optionally add analytics to your project. [guide](/analytics_docs.md)

## Community Extensions

The open source community is extending and improving SaasStarter!

These extensions are reference implementations of commonly needed features. We don't integrate them into the main branch to keep our dependencies minimal and simplify maintenance. However, if you need them you can cherry pick into your fork/repo:

- Internationalization: [branch](https://github.com/CriticalMoments/CMSaasStarter/tree/extension/internationalization), and [instructions](https://github.com/CriticalMoments/CMSaasStarter/pull/49)
- Fork using Shadcn/ui instead of DaisyUI: [kizivat/saas-kit](https://github.com/kizivat/saas-kit)

### Icons Credits

Homescreen Icons are from [Solar Broken Line Icons](https://www.svgrepo.com/collection/solar-broken-line-icons/) and [Solar Linear Icons](https://www.svgrepo.com/collection/solar-linear-icons) via CC Attribution License.

# Sponsor: Kiln AI

CMSaasStarter is sponsored by [Kiln AI](https://getkiln.ai): the easiest way to build AI products.

- 🚀 Intuitive Desktop Apps: One-click apps for Windows, MacOS, and Linux. Truly intuitive design.
- 🎛️ Fine Tuning: Zero-code fine-tuning for Llama, GPT-4o, and more. Automatic serverless deployment of models.
- 📊 Evals: Evaluate the quality of your models/tasks using state of the art evaluators.
- 🤖 Synthetic Data Generation: Generate training data with our interactive visual tooling.
- 🧠 Reasoning Models: Train or distill your own custom reasoning models.
- 🤝 Team Collaboration: Git-based version control for your AI datasets. Intuitive UI makes it easy to collaborate with QA, PM, and subject matter experts on structured data (examples, prompts, ratings, feedback, issues, etc.).

**Demo of Kiln AI:**

https://github.com/user-attachments/assets/0fb3cd48-0f2c-40f5-baf2-b38f11ed85ea
```


## SECURITY.md

```md
# Security Policy

## Reporting a Vulnerability

Please report any vulnerabilities via GitHub: https://github.com/CriticalMoments/CMSaasStarter/security

This allows us to privately fix and publish the fix before public disclosure.
```


## svelte.config.js

```js
import adapter from "@sveltejs/adapter-auto"
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter(),
    // allow up to 150kb of style to be inlined with the HTML
    // Faster FCP (First Contentful Paint) by reducing the number of requests
    inlineStyleThreshold: 150000,
  },
  preprocess: vitePreprocess(),
}

export default config
```


## tsconfig.json

```json
{
  "extends": "./.svelte-kit/tsconfig.json",
  "compilerOptions": {
    "allowJs": true,
    "checkJs": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "strict": true,
    "types": ["vitest/globals"] // allows to skip import of test functions like `describe`, `it`, `expect`, etc.
  }
  // Path aliases are handled by https://kit.svelte.dev/docs/configuration#alias and https://kit.svelte.dev/docs/configuration#files
  //
  // If you want to overwrite includes/excludes, make sure to copy over the relevant includes/excludes
  // from the referenced tsconfig.json - TypeScript does not merge them in
}
```


## vite.config.ts

```ts
import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vitest/config"
import { buildAndCacheSearchIndex } from "./src/lib/build_index"

export default defineConfig({
  plugins: [
    sveltekit(),
    {
      name: "vite-build-search-index",
      writeBundle: {
        order: "post",
        sequential: false,
        handler: async () => {
          console.log("Building search index...")
          await buildAndCacheSearchIndex()
        },
      },
    },
  ],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
    globals: true, /// allows to skip import of test functions like `describe`, `it`, `expect`, etc.
  },
})
```

