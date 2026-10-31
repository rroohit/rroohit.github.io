# Privacy Policy — Frankie


**Last updated: 31 October 2026**

Frankie ("the app", "we", "us") is a collection of everyday utility tools for Android and iOS,
developed by the Sayro team. This policy explains what data the app does and does not handle.

Our approach is simple: **Frankie works on your device without an account and shows no ads. Signing
in is optional and is only used to back up and sync your Frankie data and to carry Frankie Pro to
your other devices.**

---

## 1. Information you enter into the tools

Everything you type into a tool — numbers, text, dates, bill amounts, and so on — is processed **on
your device** to produce a result. We never see what you type, and it is not sent to any third
party. The only exception is your History: if you choose to sign in, your History entries (which
include results and the values that produced them) are backed up to your account, as described in
Section 3.

Some tools never save what you enter, not even to History:

- **Password Generator**: generated passwords are kept in memory only and never saved
- **BMR & TDEE**: your age, sex, height, weight and activity level stay on that screen and are never
  saved or sent anywhere

## 2. Information stored on your device

To make the app useful, Frankie stores the following **on your device**:

- **History** of results you generate in the tools
- **Favorites** — the tools you pin
- **Saved cities** in World Clock
- **Preferences** — such as your theme choice and default country/currency
- **Usage counts** — how often each tool is opened, used to power your on-device stats
- **Exchange rates** downloaded by the Currency tool, so it works offline
- **Your Frankie Pro status**, so Pro tools stay unlocked offline

If you don't sign in, this data never leaves your device and is **removed when you uninstall the
app**. You can also clear History from within the app.

## 3. Optional account, backup and sync

You can use every tool without an account. If you choose to **sign in with Google** or **Sign in
with Apple** (on iPhone), Frankie uses **Google Firebase Authentication** to create your account,
and then stores the following in **Google Firebase** (Cloud Firestore and Cloud Storage for
Firebase), linked to your account:

- **Account details**: your name, email address, profile photo link, and a unique account ID, as
  provided by Google or Apple when you sign in, plus the date your account was created. With Sign in
  with Apple you choose whether to share your name, and you can hide your email address: Apple then
  gives us a private relay address that forwards to you.
- **Profile edits**: the display name you set and, if you choose one, a **profile photo** you upload
- **Backup and sync data**: your History, Favorites, Saved cities, usage counts, and Preferences
  (listed in Section 2), so they stay in sync across your devices

We use this data **only** to provide your account and to back up and sync your Frankie data. It is
not used for advertising and is not sold or shared. It is sent over encrypted connections (HTTPS),
and access is restricted so that only your signed-in account can read or write it. It is stored on
servers operated by Google, which may be located outside your country. Google's handling of this
data is governed by the Google Privacy Policy (https://policies.google.com/privacy) and the Firebase
terms (https://firebase.google.com/support/privacy).

Signing out stops syncing. Your data stays on your device and in your account until you delete it
(Section 9).

## 4. Frankie Pro purchases

**Frankie Pro** is an optional one-time purchase that unlocks the Pro tools. You don't need an
account to buy it. Payment is handled entirely by **Google Play** or the **Apple App Store** under
their own terms: we never see your card or other payment details.

To confirm and restore purchases, Frankie uses **RevenueCat** (https://www.revenuecat.com), a
purchase-management service. RevenueCat receives:

- **A purchase ID**: a random anonymous ID, or your Frankie account ID if you're signed in, so Pro
  follows your account to your other devices, including between Android and iPhone
- **Your purchase record** from Google Play or the App Store: the product, price, currency, date and
  a store transaction ID
- **Basic technical details**, such as the app version, platform, and your device's language and
  region

This data is used **only** to unlock Pro and to let you restore it. It is not used for advertising
and is not sold. RevenueCat's handling of it is governed by the RevenueCat Privacy Policy
(https://www.revenuecat.com/privacy).

## 5. Exchange rates and QR scanning

Two tools use outside services:

- **Currency** downloads the latest exchange-rate table from **Frankfurter**
  (https://frankfurter.dev) or, if that is unavailable, from **ExchangeRate-API**
  (https://www.exchangerate-api.com). The request only asks for the general rate table: the amounts
  and currencies you convert are never sent. Like any website, these services can see your device's
  IP address when it connects.
- **QR Scanner** reads codes on your device. On Android, camera scanning uses the **Google code
  scanner** in Google Play services, which shows the camera itself and gives Frankie only the
  decoded code, so Frankie never gets camera access. Scanning a photo you pick uses **Google ML
  Kit** on your device. Google may collect limited diagnostics about these features (such as device
  and app information, performance metrics and error codes; see
  https://developers.google.com/ml-kit/android-data-disclosure). On iPhone, scanning uses Apple's
  on-device VisionKit and Vision frameworks, and Frankie asks for camera permission.

Camera images and photos are **never stored or uploaded**. The decoded result is saved to your
History like other tools, except Wi-Fi passwords, which are never saved. Opening a scanned link,
location or contact hands it to your browser, maps or contacts app.

## 6. Crash diagnostics (Firebase Crashlytics)

To find and fix bugs, Frankie uses **Google Firebase Crashlytics**. When the app crashes,
Crashlytics collects a diagnostic report that may include:

- The crash stack trace and the state of the app at the time of the crash
- Device model and operating-system version
- App version
- A randomly generated installation identifier

This information is used **solely to diagnose and fix crashes**. It does not include the content you
enter into the tools, and it is not used for advertising. Crashlytics is provided by Google under
the same Google and Firebase terms linked in Section 3.

## 7. No ads, no tracking, no analytics profiles

Frankie contains **no advertising SDKs** and does **not** build an advertising or behavioural
profile of you. We do not sell or share personal information. The third-party services in the app
are:

- **Google Firebase Crashlytics**, for crash diagnostics (Section 6)
- **Google Firebase Authentication, Cloud Firestore, Cloud Storage for Firebase and Google
  Sign-In**, only if you choose to sign in (Section 3). On iPhone you can also use **Sign in with
  Apple**, provided by Apple and governed by Apple's privacy policy
  (https://www.apple.com/legal/privacy/).
- **RevenueCat**, **Google Play** and the **Apple App Store**, only if you buy Frankie Pro (Section
  4)
- **Frankfurter** and **ExchangeRate-API**, for exchange rates (Section 5)
- **Google ML Kit and the Google code scanner**, for QR scanning on Android (Section 5)

## 8. Children's privacy

Frankie is a general-audience utility app and is not directed at children under 13. We do not
knowingly collect personal information from children.

## 9. Data retention and deletion

- **On-device data** is kept until you clear it in the app or uninstall Frankie.
- **Account data** (Section 3) is kept until you delete your account.
- **Deleting your account**: in the app, open the **Profile** tab, tap your name, then tap **Delete
  account**. This permanently deletes your account, your profile photo, all of your backed-up data,
  and all Frankie data on that device, right away. If you used Sign in with Apple, Frankie also
  revokes its Sign in with Apple access. If you can't access the app, you can request deletion at
  https://rroohit.github.io/frankie/delete-account or by emailing **sayro.team@gmail.com** from the
  email address on your account (if you hid your email with Apple, tell us the Apple ID email you
  signed in with). We complete emailed requests within 30 days.
- **Frankie Pro purchases** (Section 4) belong to your Google Play or App Store account. Deleting
  your Frankie account does not cancel or refund them. Google and Apple keep purchase records under
  their own policies, and RevenueCat keeps the purchase record so you can restore Pro: tap **Restore
  purchases** to unlock it again. If you were signed in, that record is linked to your account ID.
  Email us if you want it deleted too; you can still restore your purchase from the store
  afterwards.
- **Crash diagnostics** are retained by Firebase Crashlytics according to Google's retention
  policies (typically up to 90 days). They aren't linked to your account, so deleting your account
  doesn't affect them.

## 10. Changes to this policy

We may update this policy as the app evolves. Material changes will be reflected here with a new
"Last updated" date.

## 11. Contact

Questions about this policy or your data? Contact us at **sayro.team@gmail.com**.
