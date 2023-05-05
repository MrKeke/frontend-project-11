install:
	npm ci
lint:
	npx eslint .
lintf:
	npx eslint . --fix
wpserv:
	npx webpack serve
build:
	NODE_ENV=production npx webpack
pretty:
	npx prettier . --write
