# Sayro — Privacy Policy

**Last updated: 2 October 2026**

Sayro turns a photo you upload into a new image in a chosen style. This policy
explains what we collect, why, who else sees it, and how to get rid of it.

## Who we are

Sayro is operated by the Sayro team. For any privacy question, or to exercise
any right below, contact **support@sayro.app**.

## What we collect

**Account details.** Your phone number, or the email address attached to your
Google or Apple account, depending on how you sign in. Sign-in is handled by
Firebase Authentication; we never see or store your password.

**Your profile.** Username, optional display name, optional bio, optional
profile photo. All of this is visible to other signed-in Sayro users — that is
what a profile is for.

**Photos you upload.** The source photo for each creation. Stored privately and
readable only by you.

**Images we generate.** The result of each creation, together with its
dimensions and a low-resolution blur used as a loading placeholder. Private to
you unless you share it.

**What you share and publish.** If you share a creation, a public copy of that
image is created. If you publish a style, its cover image, name and category
become public.

**Activity needed to run the product.** Which style each creation used, when
creations happened, how many times a published style has been used, and
notifications generated from that activity.

**Reports and blocks.** If you report content we record what you reported, why,
and who you are. If you block someone we record that.

**We do not collect** contacts, location, advertising identifiers, or your
device's photo library beyond the specific images you choose to upload. There
is no advertising or tracking SDK in Sayro.

**Purchases.** If you buy coins we record the purchase — what was bought, when,
and the store's transaction id — so the coins can be credited and so a purchase
cannot be credited twice. **We never see your card, UPI or bank details**; the
payment happens entirely inside Google Play or the App Store.

**Crash reports.** If the app crashes we receive a diagnostic report so we can
fix it.

## Who else sees your data

**OpenAI — this is the important one.** To generate an image, we send **the
photo you uploaded** and the style's prompt to OpenAI's image model. Your
photo leaves our servers for this purpose. We do not send your name, username,
phone number, email, or any account identifier along with it. See OpenAI's
policies at https://openai.com/policies for how they handle data received
through their API.

**Google Firebase.** Authentication, database, file storage and server
functions run on Google Firebase. Data is stored in Google's **asia-south1
(Mumbai)** region. Google processes this data on our behalf.

**RevenueCat.** When you buy coins, the store tells RevenueCat and RevenueCat
tells us, so we know to credit your balance. What travels is the purchase — the
product, the transaction and your Sayro account id — never your payment
details, which the store keeps to itself.

**Google Crashlytics.** When the app crashes we receive a crash report: what
went wrong, the device model and OS version, and your Sayro account id so we
can tell whether a crash is affecting one person or everyone. It contains none
of your photos, prompts or messages.

**Other Sayro users.** Your profile, anything you share, and anything you
publish. Nothing else.

**We never sell your data, and we never share it for advertising.**

## Photos and face data

Sayro does not use face recognition. We never detect faces, measure facial
features, or create a faceprint, face template or any other identifier from
your photos. We treat your photo only as a picture.

The photos you upload usually show a face. We use a photo only to make the
image you asked for: we send it, with the style's instruction, to OpenAI's
image model, which returns the new image. Before an image you made becomes
visible to other people, when you share a creation, publish a style, or set
a profile photo, we also send that generated image to OpenAI's moderation
service to check it is allowed. Your uploaded photo itself is never shown
to anyone else.

OpenAI receives the image without your name, username, phone number, email
or any account identifier, and does not use it to train its models. For
image generation, OpenAI keeps the request for up to 30 days for abuse
monitoring and then deletes it, unless the law requires it to be kept
longer. The moderation check keeps nothing.

We store your uploaded photo and the image generated from it in Google
Firebase Storage, in the asia-south1 (Mumbai) region, private to your
account. We never sell your photos, never use them for advertising, and
never give them to anyone other than OpenAI, as described above.

Your uploaded photo is kept until you delete the creation made from it, or
delete your account. Either one deletes it, together with the generated
image and any copy you shared. If a creation fails, we delete it and its
uploaded photo within 7 days.

## What other people can see

Sayro has two independent privacy gates and both must open before a stranger
sees a creation:

1. **You share that specific creation.** A creation you have not shared is
   private, permanently.
2. **Your account setting allows it.** In Settings → *Who can see your
   creations*, "People who follow you" shows your shared creations only to
   people you have approved to follow you.

Two things are worth knowing because they surprise people:

- Your **prompt is never shown to anyone**, including people who use a style
  you published. Publishing a style shares what it *produces*, not the words
  behind it.
- A style you published **stays available to others even if you set your
  account to "People who follow you"**. To take a style out of circulation, open it and hide
  it.

## How long we keep things

We keep your data while your account exists. When you delete your account
(Settings → Delete account) we immediately delete your profile, your username
reservation, every creation and its source photo, everything you shared, and
every style you published.

**Two things survive, and both belong to other people.** Images other people
generated using your styles remain theirs. And we keep the internal usage
records that other creators' activity counts are calculated from — with your
account identifier removed from them, so they no longer identify you.

Reports you have filed are retained so we can act on them and detect repeat
abuse.

**Purchase records are kept after deletion**, because we are required to keep
them: a record of a sale is a tax and accounting record, not a profile. It is
the transaction, not your photos or your creations.

## Your rights

- **Access and correction.** Your profile is editable in the app at any time.
- **Deletion.** Settings → Delete account, in-app, immediately, without
  contacting us.
- **Getting a copy of your data.** Email **support@sayro.app** and we will
  provide one.
- **Complaints.** If you are in India you may complain to the Data Protection
  Board. If you are in the EU or UK, to your local supervisory authority.

## Children

Sayro is not for children under 13. If you believe a child under 13 has an
account, email **support@sayro.app** and we will remove it.

## Security

Data is encrypted in transit and at rest by Firebase. Access to your private
creations is enforced by server-side security rules, not by the app — the app
cannot grant itself access it should not have. We use Firebase App Check to
reject requests that do not come from a genuine copy of Sayro.

## Changes

If we change this policy materially we will tell you in the app before the
change takes effect.
