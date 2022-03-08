Algorand Wallet Generator Built with ReactJS & Material UI.

## Functionalities

- Generate an Algorand account
- Import an existing wallet using mnemonic passphrase
- Connect with either algo wallet and algosigner
- After generating a wallet/ importing a wallet connecting with algosigner or algowallet a dashboard with account details showing algo balance and assets added.

## Installation and Running on Machine

- git clone the repository

- Install dependencies

```
$ npm install / yarn install
```

- Start App

```
$ npm start / yarn start
```

- Add the following to the webpack.config.js in node-modules/react-scripts/config/webpack.config.js in the resolve list. You can search for where fallback was mentioned there you will find the resolve list

````fallback: {
	crypto: false
},```

````

## Live Link

[Live Link](https://algowallet.netlify.app/)




