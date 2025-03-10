// prettier-ignore
const translation = {
  "BCID": {
    "GetID": "Get BCID",
    "GetDigitalID": "Get your Person credential",
  },
  "Error": {
    "Title2020": "Unable to parse invitation",
    "Message2020": "There was a problem parsing the connection invitation.",
    "Title2021": "Unable to receive invitation",
    "Message2021": "There was a problem receiving the invitation to connect.",
    "Title2022": "Unable to find legacy DID",
    "Message2022": "There was a problem extracting the did repository.",
    "Title2025": "BCSC Authentication",
    "Message2025": "There was a problem reported by BCSC.",
    "Title2026": "Oops! Something went wrong",
    "Message2026": "The app has encountered a problem. Try restarting the app.",
    "NoMessage": "No Message",
  },
  "CameraDisclosure": {
    "AllowCameraUse": "Allow camera use",
    "CameraDisclosure": "The camera is used to scan QR codes that initiate a credential offer or credential request. No information about the images is stored, used for analytics, or shared.",
    "ToContinueUsing": "To continue using the BC Wallet scan feature, please allow camera permissions.",
    "Allow": "Allow",
    "OpenSettings": "Open settings",
  },
  "Biometry": {
    "Toggle": "Toggle Biometrics",
    "EnabledText1": "Log in with your phone's biometrics instead of your wallet PIN.",
    "EnabledText1Bold": "you will need to use biometrics to open your BC Wallet.",
    "EnabledText2": "This means all fingerprint and facial data added on this phone can be used to access your BC Wallet.",
    "EnabledText3": "Anyone who can access your phone with biometrics can access your BC Wallet.",
    "EnabledText3Bold": "Ensure only you have access to your wallet.",
    "Warning": "Ensure only you have access to your wallet.",
    "UseToUnlock": "Use biometrics to unlock wallet?"
  },
  "Credentials": {
    "AddCredential": "Add Credential",
    "EmptyList": "Your wallet is empty.",
    "AddFirstCredential": "Add your first credential"
  },
  "Onboarding": {
    "Welcome": "Welcome",
    "WelcomeParagraph1": "BC Wallet lets you receive, store and use digital credentials.",
    "WelcomeParagraph2": "It is highly secure, and helps protect your privacy online.",
    "WelcomeParagraph3": "BC Wallet is currently in its early stages and the technology is being explored. Most people will not have a use for BC Wallet yet, because very few digital credentials are available.",
    "StoredSecurelyTitle": "Digital credentials, stored securely",
    "StoredSecurelyBody": "BC Wallet holds digital credentials—the digital versions of things like licenses, identities and permits.\n\nThey are stored securely, only on this device.",
    "UsingCredentialsTitle": "Receiving and using credentials",
    "UsingCredentialsBody": "To receive and use credentials you use the “Scan” feature in the app to scan a special QR code.\n\nInformation is sent and received over a private, encrypted connection.",
    "PrivacyConfidentiality": "Privacy and confidentiality",
    "PrivacyParagraph": "You approve every use of information from your BC Wallet. You also only share what is needed for a situation.\n\nThe Government of British Columbia is not told when you use your digital credentials.",
    "GetStarted": "Get Started",
    "SkipA11y": "Skip introduction to BC Wallet",
  },
  "Screens": {
    "Onboarding": "BC Wallet",
    "Settings": "Menu",
  },
  "PersonCredentialNotification": {
    "Title": "Get your Person credential",
    "Description": "Add your Person credential to your wallet and use it to get access to services online.",
    "ButtonTitle": "Start",
  },
  "PersonCredential": {
    "Issuer": "Service BC",
    "Name": "Person",
    "GivenName": "Sample Given Name",
    "FamilyName": "Sample Family Name",
    "Description": "Add your Person credential to your wallet to prove your personal information online and get access to services online.\n\nYou'll need the BC Service Card app set up on this mobile device.",
    "LinkDescription": "Get the BC Services Card app",
    "GetCredential": "Get your Person credential",
    "Decline": "Get this later",
    "PageTitle": "Person Credential"
  },
  "NetInfo": {
    "NoInternetConnectionTitle": "No internet connection",
    "NoInternetConnectionMessage": "You're unable to access services using BC Wallet or receive credentials until you're back online.\n\nPlease check your internet connection."
  },
  "Tour": {
    "GuideTitle": "Welcome to BC Wallet",
    "WouldYouLike": "Would you like some guidance on how to use BC Wallet?",
    "UseAppGuides": "Use app guides",
    "DoNotUseAppGuides": "Don't use app guides",
    "AddAndShare": "Add and share credentials",
    "AddAndShareDescription": "To add and use credentials you scan a QR code displayed by the service provider.",
    "Notifications": "Notifications",
    "NotificationsDescription": "After you scan a QR code, the credential offer or proof request will appear here, as well as other notable events.",
    "YourCredentials": "Your credentials",
    "YourCredentialsDescription": "Your added digital credentials appear here. You can review credential details and add and delete credentials.",
    "Skip": "Skip",
    "Next": "Next",
    "Back": "Back",
    "Done": "Done",
  },
  "Settings": {
    "Help": "Help",
    "MoreInformation": "More Information",
    "HelpUsingBCWallet": "Help using BC Wallet",
    "GiveFeedback": "Give feedback",
    "ReportAProblem": "Report a problem",
    "TermsOfUse": "Terms of use",
    "PrivacyStatement": "Privacy statement",
    "VulnerabilityDisclosurePolicy": "Vulnerability disclosure policy",
    "Accessibility": "Accessibility",
    "IntroductionToTheApp": "Introduction to the app"
  },
  "Developer": {
    "Environment": "Environment",
    "Production": "Production",
    "Development": "Development",
    "Test": "Test",
    "DeveloperMode": "Developer mode",
    "Toggle": "Toggle Developer Mode"
  },
  "Tips": {
    "Header": "Tips",
    "GettingReady": "Getting your wallet ready...",
    "Tip1": "For extra security, BC Wallet locks the app after 5 minutes of inactivity",
    "Tip2": "Unlike showing physical cards, you share only what is necessary from your credentials",
    "Tip3": "Your credentials are stored only on this phone, nowhere else",
    "Tip4": "Information is sent and received over an untraceable encrypted connection",
    "Tip5": "Remember your PIN. If you forget it, you'll need to reinstall and re-add your credentials",
    "Tip6": "Skip the PIN and unlock your wallet using your biometrics for a faster experience",
    "Tip7": "Your most recently added credentials are placed at the top",
    "Tip8": "Remove credentials in your wallet from the credential details screen",
    "Tip9": "You can dismiss notifications without opening them by tapping “X” in the top right corner",
    "Tip10": "Need help? Find answers in the help section within the “☰” button on the top left corner",
    "Tip11": "You can turn on the camera flash if the QR code is hard to see",
    "Tip12": "If the QR code isn't scanning, try increasing the screen's brightness",
    "Tip13": "Information sent via your wallet is trusted by you and your Contacts you interact with",
    "Tip14": "Even revoked or expired credentials can be usable if the organisation doesn't request for it",
  },
  "Init": {
    "Retry": "Retry",
    "Starting": "Starting...",
    "CheckingAuth": "Checking authentication...",
    "FetchingPreferences": "Fetching preferences...",
    "VerifyingOnboarding": "Verifying onboarding...",
    "GettingCredentials": "Getting wallet credentials...",
    "RegisteringTransports": "Registering transports...",
    "InitializingAgent": "Initializing agent...",
    "ConnectingLedgers": "Connecting to ledgers...",
    "SettingAgent": "Setting agent...",
    "Finishing": "Finishing..."
  },
  "Feedback": {
    "GiveFeedback": "Give Feedback",
  }
}

export default translation
