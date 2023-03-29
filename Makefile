lint:
	npx eslint .
lintf:
	npx eslint . --fix
wpserv:
	npx webpack serve
build:
	NODE_ENV=production npx webpack