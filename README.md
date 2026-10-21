# Arclora

Arclora is an early, installable web app prototype for exploring personal wellbeing routines.

## Public links

- Welcome page: <https://rocco-coding.github.io/amplio-app/>
- Open the demo directly: <https://rocco-coding.github.io/amplio-app/app.html>

The welcome page explains what the demo can do and how to add it to a phone. The demo itself is `app.html`.

## What this prototype does

The demo asks users to choose a main goal and up to two other priorities, then collects preference and availability information. It shows up to three draft plan choices, a monthly calendar for personal dates and sample actions, a completion flow with feedback, and a weekly check-in linked to the selected plan. Full plan actions are not yet written, so calendar actions are entries the tester adds themselves.

There is no account, payment, secure database, coach inbox, notification system, or server-side storage. Questionnaire answers, check-ins, calendar entries, and completion feedback stay in local browser storage on the device being used and are not shared with Arclora. Do not enter real customer or health information. The prototype does not assess health conditions or provide medical, exercise, or nutrition advice, and it does not automatically change a plan based on feedback.

## Install on a phone

- **iPhone/iPad:** Open the welcome page in Safari, tap **Share → Add to Home Screen**, enable **Open as Web App** if shown, then tap **Add**.
- **Android:** Open the welcome page in Chrome, tap the three-dot menu, choose **Install and create shortcut** or **Install app**, then follow the prompt.

On iPhone, Apple requires the user to add the web app through Safari’s Share menu. Android browsers may offer a one-tap install prompt.

## Publishing updates

The site uses GitHub Pages from the repository’s `main` branch and root folder. Publish the updated files to the repository and GitHub Pages will redeploy the welcome page and app. The existing home-screen app continues to work; if it opens the welcome page once after this change, tap **Open the demo**. Future launches go straight to the app.

The current GitHub Pages address is easy to share and does not require a monthly hosting fee. A shorter custom domain can be connected later if one is purchased and configured.
