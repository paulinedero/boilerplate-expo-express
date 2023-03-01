# BOILERPLATE Expo / Express

## Installations

### 1) Node & NPM

First you'll need NodeJS. You can download the last stable version [here](https://nodejs.org/en/download/). Then follow the installations instructions.

This will add `node` & `npm` (the node package manager).

&nbsp;

### 2) Expo & Expo Go

You'll also need `expo-cli`, that will allow you to start our mobile side applications :

```
npm install --global expo-cli@4.1.0
```

> We force the 4.1.0 version cause the last one won't let us start our project for now.

&nbsp;

You'll also need to download on your phone the `Expo Go` app. This will allow you to, when you started locally an app to test it on your phone. The app will ask you to scan the QR code that appears after you `npm run start` one of the mobile app.

&nbsp;

## Server:dev

### Install dependencies

```
cd server/
```

```
npm install
```

### Start

```
npm run start
```

### Get your IP address

In order to your mobile app to access the server we need to use the ip address of the computer. Go to the parent directory and start :

```
sh migrate_ip_address.sh
```

> The script will insert your IP address into your mobile app .env !
> The script will insert your IP address into your mobile app .env ! If this command doesn't work type `ipconfig getifaddr en0` (on Mac) in your terminal and change the first line of the Env file with the ip address you got : `EXPO_REACT_NATIVE_SERVER_URL=http:// & the result of your last command`

## Mobile

You should rename this folder and inside `package.json` and `app.json` by your application name

### Install dependencies

```
cd broker/
```

```
npm install
```

### Start

```
npm run start
```
