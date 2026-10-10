# Privacy Policy — Frankie


**Last updated: 10 October 2026**

Frankie ("the app", "we", "us") is a collection of everyday utility tools for Android and iOS,
developed by the Sayro team. This policy explains what data the app does and does not handle.

Our approach is simple: **Frankie works on your device without an account and shows no ads. Signing
in is optional and is only used to back up and sync your Frankie data.**

---

## 1. Information you enter into the tools

Everything you type into a tool — numbers, text, dates, bill amounts, and so on — is processed
**on your device** to produce a result. We never see what you type, and it is not sent to any third
party. The only exception is your History: if you choose to sign in, your History entries (which
include results and the values that produced them) are backed up to your account, as described in
Section 3.

## 2. Information stored on your device

To make the app useful, Frankie stores the following **on your device**:

- **History** of results you generate in the tools
- **Favorites** — the tools you pin
- **Saved cities** in World Clock
- **Preferences** — such as your theme choice and default country/currency
- **Usage counts** — how often each tool is opened, used to power your on-device stats

If you don't sign in, this data never leaves your device and is **removed when you uninstall the
app**. You can also clear History from within the app.

## 3. Optional account, backup and sync

You can use every tool without an account. If you choose to **sign in with Google**, Frankie uses
**Google Firebase Authentication** to create your account, and then stores the following in
**Google Firebase** (Cloud Firestore and Cloud Storage for Firebase), linked to your account:

- **Account details**: your name, email address, profile photo link, and a unique account ID, as
  provided by Google when you sign in, plus the date your account was created
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
(Section 7).

## 4. Crash diagnostics (Firebase Crashlytics)

To find and fix bugs, Frankie uses **Google Firebase Crashlytics**. When the app crashes, Crashlytics
collects a diagnostic report that may include:

- The crash stack trace and the state of the app at the time of the crash
- Device model and operating-system version
- App version
- A randomly generated installation identifier

This information is used **solely to diagnose and fix crashes**. It does not include the content you
enter into the tools, and it is not used for advertising. Crashlytics is provided by Google under the
same Google and Firebase terms linked in Section 3.

## 5. No ads, no tracking, no analytics profiles

Frankie contains **no advertising SDKs** and does **not** build an advertising or behavioural profile of
you. We do not sell or share personal information. The only third-party services in the app are
Google's: **Firebase Crashlytics** (Section 4), and **Firebase Authentication, Cloud Firestore, Cloud
Storage for Firebase and Google Sign-In**, which are only used if you choose to sign in (Section 3).

## 6. Children's privacy

Frankie is a general-audience utility app and is not directed at children under 13. We do not knowingly
collect personal information from children.

## 7. Data retention and deletion

- **On-device data** is kept until you clear it in the app or uninstall Frankie.
- **Account data** (Section 3) is kept until you delete your account.
- **Deleting your account**: in the app, open the **Profile** tab, tap your name, then tap
  **Delete account**. This permanently deletes your account, your profile photo, all of your backed-up
  data, and all Frankie data on that device, right away. If you can't access the app, you can request
  deletion at https://rroohit.github.io/frankie/delete-account or by emailing **sayro.team@gmail.com**
  from the email address on your account. We complete emailed requests within 30 days.
- **Crash diagnostics** are retained by Firebase Crashlytics according to Google's retention policies
  (typically up to 90 days). They aren't linked to your account, so deleting your account doesn't
  affect them.

## 8. Changes to this policy

We may update this policy as the app evolves. Material changes will be reflected here with a new
"Last updated" date.

## 9. Contact

Questions about this policy or your data? Contact us at **sayro.team@gmail.com**.
