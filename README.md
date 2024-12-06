# Website Blocker Chrome Extension

A Chrome extension built with React to help users block distracting websites and stay focused.

## Overview

This project is a Chrome extension that allows users to block specified websites to improve productivity. It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and modified to work as a browser extension.

## Features

- Block distracting websites
- Simple interface to manage blocked sites
- Background script to handle website blocking
- Custom blocked page display

## Installation

1. Clone this repository
2. Run `npm install` to install dependencies
3. Run `npm run build` to create a production build
4. Load the extension in Chrome:
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode"
   - Click "Load unpacked"
   - Select the `build` folder from this project

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the extension for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be loaded as a Chrome extension!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Project Structure

- `/public`
  - `background.js` - Chrome extension background script
  - `content.js` - Content script for webpage interaction
  - `blocked.html` - Page shown when a site is blocked
  - `manifest.json` - Chrome extension manifest file
- `/src`
  - `App.js` - Main React component
  - Other React application files

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [Chrome Extension Development](https://developer.chrome.com/docs/extensions/)

## Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## Creator

Visit my GitHub profile: [spriyanshucoder](https://github.com/spriyanshucoder)
