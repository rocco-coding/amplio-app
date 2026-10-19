# Arclora app prototype

This is a small installable web app prototype. It runs without an account or server database; questionnaire answers, routine ticks, and check-ins stay in this browser's local storage.

## Questionnaire in this prototype

The onboarding asks users to choose one main goal and up to two other priorities, then gives a short follow-up for each selected goal. It asks how often and for how long a small step can fit into a typical week. When movement is part of a selected goal, it also asks a general safety question without requesting a diagnosis. A cautious answer pauses movement suggestions in the demo. Habit-change goals involving smoking or alcohol point toward specialist support rather than offering a quitting or alcohol-reduction plan.

The prototype does not assess health conditions or give medical, exercise, or nutrition advice. Do not enter real customer or health information. Smoking and alcohol choices show a reminder to seek appropriate specialist support; they do not open a verified service directory or provide a change plan. A future version must have suitable privacy information, secure storage, verified support links, and a reviewed safety approach before collecting such information.

No payment is taken in this demo. A future paid membership should show its full recurring price and terms before the detailed questionnaire begins.

## Preview on your Mac

Open `index.html` in a browser to look at the interface. For the install prompt and offline caching to work, publish it to an HTTPS website (or run a local web server).

## Publish for phone installation

The simplest no-monthly-fee route for this static demo is GitHub Pages. Its free plan supports Pages for public repositories. A public repository means the app's source files are visible, so this is suitable only while it contains demo-only behavior and no customer data.

1. Sign in to GitHub and create a new **public** repository, for example `amplio-app`.
2. Upload the app files from this folder (`index.html`, `manifest.webmanifest`, `sw.js`, and all four `icon-v3` files).
3. In the repository, open **Settings → Pages**. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
4. Wait for GitHub Pages to publish the site. The address will look like `https://YOUR-USERNAME.github.io/amplio-app/`.
5. On iPhone, open that address in Safari, tap **Share → Add to Home Screen**, turn on **Open as Web App** if shown, and tap **Add**. On Android, open the address in Chrome and choose **Install app** or **Add to Home screen** from the browser menu.

GitHub's current setup guide: https://docs.github.com/en/pages/quickstart

## Updates after installation

The app checks for a newer release when it opens online and uses the latest page and app files from the website. People do not need to reinstall it. If an app is already open during a release, it will use the update the next time it opens or reloads online. When offline, it uses the last version saved on that device. The service worker only caches app pages and static files; it does not cache API responses or user data.

The phone's home-screen icon and display name are managed separately by iOS or Android. Arclora uses versioned icon files and declares an iPhone home-screen icon and title, so devices can notice the new branding. An operating system may still keep an existing shortcut's saved name or icon; if that happens, remove and add the shortcut again. App content updates do not require this.

## Before inviting real customers

This prototype has no login, coach inbox, server-side storage, access controls, privacy notice, or health/safety review. Do not use it to collect real customers' personal or health information. Those pieces need to be designed and secured before handling customer data.
