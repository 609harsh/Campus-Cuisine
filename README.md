<div align="center">

  
  # College Cuisine with REACT NATIVE!
  
  <p>
College Cuisine with REACT NATIVE! (Navigation, Redux, Tailwind CSS & Sanity.io)
  </p>
  
  
<!-- Badges -->


</div>

<br />

<!-- Table of Contents -->

## :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Screenshots](#camera-screenshots)
  - [Tech Stack](#space_invader-tech-stack)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Installation](#gear-installation)
  - [Run Locally](#running-run-locally)
  - [Deployment](#triangular_flag_on_post-deployment)
- [Contact](#handshake-contact)

<!-- About the Project -->

## :star2: About the Project

<!-- Screenshots -->

### :camera: Screenshots

<div style="display: inline_block" align="center"><br>
 <img align="center" alt="React"  width="180" src="https://user-images.githubusercontent.com/99184393/184466112-3d639a7d-e292-43f1-96ff-0d7506be7d5a.jpg">
  <img align="center" alt="React"  width="180" src="https://user-images.githubusercontent.com/99184393/184466143-c95e743f-eff5-4acf-ad9d-4f33142ca088.jpg">
  <img align="center" alt="React"  width="180" src="https://user-images.githubusercontent.com/99184393/184466211-d27ca927-7a3f-4a36-8920-3d7d62e7ab29.jpg">
    <img align="center" alt="React"  width="180" src="https://user-images.githubusercontent.com/99184393/184466252-59874cd9-bd09-48c5-8122-715d4f386ce3.jpg">
</div>

<br />


### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://#/">Javascript</a></li>
    <li><a href="https://docs.expo.dev/workflow/expo-cli">Expo</a></li>
    <li><a href="https://reactnative.dev">React Native</a></li>
     <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.sanity.io">Sanity</a></li>
  </ul>
</details>

<br />



## :toolbox: Getting Started

### :bangbang: Prerequisites

- Sign up for a Sanity account <a href='https://www.sanity.io'>HERE</a>
- Install Node JS in your computer <a href='https://nodejs.org/en/'>HERE</a>

### :gear: Installation

![](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

Install my-project with expo

![](https://img.shields.io/badge/Expo-02569B?style=for-the-badge&logo=Expo&logoColor=white)

Installing Expo CLI

```
npm install --global expo-cli
```

Initializing the project

```
npx create-expo-app deliveroo-clone
```

```
cd deliveroo-clone
```

Install dependencies

### Setup Tailwind CSS

![](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

```
npm install tailwindcss-react-native
npm install --save-dev tailwindcss
```

Tailwindcss requires a `tailwind.config.js` file with the content section configured to include the paths to all of your components and any other source files that contain Tailwind class names.

```
// tailwind.config.js
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
};
```

Add `TailwindProvider` at the top level of your application. The `TailwindProvider` creates the context for reactive styles and the atomic style objects.

```
import { TailwindProvider } from "tailwindcss-react-native";

function MyAppsProviders({ children }) {
  return <TailwindProvider>{children}</TailwindProvider>;
}
```

##### Configure your babel.config.js

```
// babel.config.js
module.exports = {
  plugins: ["tailwindcss-react-native/babel"],
};
```

Install dependencies

<a href="https://github.com/SashenJayathilaka/Deliveroo-Clone/blob/master/package.json" target="_blank">🔶 Dependency Info</a>

<!-- Run Locally -->

### :running: Run Locally

![](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

Clone the project

```bash
  git clone https://github.com/SashenJayathilaka/Deliveroo-Clone.git
```

change directory

```bash
  cd Deliveroo-Clone
```

Install dependencies

```bash
  npx expo install
```

Start the server

```bash
  npx expo start
```

<hr />

### Creating a Build

- Optimize the assets for speed - `npx expo-optimize` (formerly expo optimize)
- Bundle the project for production - `npx expo export:web` (`expo build:web` in the legacy Expo CLI).
- Creates a production ready static bundle in the `web-build/` directory. Don't edit this folder directly.
- If you make any changes to your project, you'll need to re-build for production.
- For more help use `npx expo export:web --help`
- <a href="https://docs.expo.dev/eas" target="_blank">More Info</a>

<!-- Deployment -->

### :triangular_flag_on_post: Deployment

To deploy this project run

#### Expo Publish

![](https://img.shields.io/badge/Expo-02569B?style=for-the-badge&logo=Expo&logoColor=white)

publish your project

```
expo publish
```

## :handshake: Contact

Sashen - [@twitter_handle](https://twitter.com/SashenHasinduJ) - sashenjayathilaka95@gmail.com

Project Link: [https://github.com/SashenJayathilaka/Deliveroo-Clone.git](https://github.com/SashenJayathilaka/Deliveroo-Clone.git)
