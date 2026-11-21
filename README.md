# SURAKSHA 365 – Women's Safety & Emergency Assistance

> **Tagline:** *"Your Safety, Our Priority – 365 Days a Year."*

---

## 1. Project Overview

**SURAKSHA 365** is a modern, responsive, full-stack women’s safety and emergency response web application engineered to protect women traveling alone, commuting late, or facing threatening situations.

The platform provides:
1. **Instant Geolocation Distress Dispatch (SOS)** with explicit consent and real-time response tracking.
2. **Confidential Incident & Complaint Lodging** with evidence attachment and anonymous filing options.
3. **Automated Trusted Contacts Alerts** with live GPS link dispatch.
4. **Emergency Deterrence Tools**: In-browser dual-tone audio siren alarm and realistic fake incoming call simulator.
5. **Authorized Police / Responder Operations Radar** for dispatch units to accept incidents, log updates, and provide ETAs.
6. **Administrator Control Center** with citizen and responder management, complaint triage, and audit analytics.

---

## 2. User Roles & Role-Based Access Control (RBAC)

| Role | Access Level | Key Capabilities |
| :--- | :--- | :--- |
| **Citizen (User)** | Protected Client | Register, login, trigger emergency SOS with location permission, lodge complaints, manage trusted contacts, view audit history, use audio siren and fake call tools. Cannot access police or admin consoles. |
| **Police Responder** | Law Enforcement | Secure login via Badge ID and Station selection. View active distress radar, accept incidents, assign patrol cars, log real-time dispatch notes, investigate complaints, and mark cases resolved. |
| **State Admin** | Master Authority | Manage citizen accounts, verify responder credentials and police stations, triage all complaints, monitor statewide analytics and response times, review audit logs. |

---

## 3. Technology Stack

- **Frontend Core:** React 18, TypeScript, Tailwind CSS, Lucide Icons, Plus Jakarta Sans typography.
- **Backend & Database:** 
  - Firebase Authentication & Cloud Firestore (supported via `src/config/firebase.ts` and `firestore.rules`).
  - Firebase Cloud Functions (`functions/index.js`) for SMS gateway and push notifications.
  - Stateful, persistent LocalStorage engine that allows 100% full CRUD operations and multi-user simulation out of the box when external credentials are not set.
- **Hardware & Web APIs:**
  - **HTML5 Geolocation API:** For GPS coordinates and reverse geocoding with user consent.
  - **Web Audio API Synthesizer:** Pure mathematical waveform dual-tone (650Hz–960Hz) emergency siren requiring zero external MP3/WAV assets.

---

## 4. Key Application Pages & Features

### 1. Welcome / Landing Page (`LandingPage.tsx`)
- Headline and tagline *"Your Safety. Our Priority."*
- Primary pulsating **ACTIVATE SOS EMERGENCY** trigger.
- **One-Click Demo Role Switcher**:
  - Citizen Mode: *Priya Sharma*
  - Police Mode: *Inspector Kavita Deshmukh (Badge: KA-POL-8492)*
  - Admin Mode: *Dr. Meenakshi Sundaram (State HQ)*
- Speed dial directory of official 24/7 National Helplines:
  - **112**: All-India Unified Emergency (Police, Fire, Medical)
  - **1091**: Women Safety Helpline
  - **7827170170**: National Commission for Women (NCW)
  - **181**: Domestic Abuse Crisis Helpline
  - **1930**: National Cyber Crime Reporting Portal
  - **139**: Railway Protection Force (RPF) Women Safety

### 2. User Registration & Login (`UserRegister.tsx`, `UserLogin.tsx`)
- Registration: Full Name, 10-digit mobile number, email, and password.
- Form validation with error alerts.
- Quick preset demo buttons for immediate testing.

### 3. User Home Dashboard (`UserDashboard.tsx`)
- Personalized welcome card with live safety status (`Protected` vs `SOS Active`).
- Giant pulsating red **SOS BUTTON** with haptic feedback.
- Quick Action Tiles: Report Complaint, Trusted Contacts, Request History, and Safety Tools.
- Live Emergency Tracker banner if an alert is currently in progress.

### 4. SOS Emergency Flow (`SosEmergencyPage.tsx`)
- **Step 1 — Emergency Confirmation:** 5-second countdown timer with cancel button to prevent accidental triggers.
- **Step 2 — Location Permission:** Explicit consent screen explaining how coordinates are handled. Includes option for **Simulated Demo Location** (safeguarding user privacy during demonstrations) and **Live Device GPS**.
- **Step 3 — Distress Details:** Optional notes with quick presets (*"Being followed"*, *"Cab detour"*, *"Medical emergency"*).
- **Step 4 — Live Dispatch Radar & Status Timeline:**
  1. *Submitted* (Timestamp)
  2. *Under Review* by control room
  3. *Assigned* to nearest police patrol vehicle (e.g. *PCR Van Delta-04*)
  4. *Assistance in Progress* (en route with real-time ETA)
  5. *Resolved*
- Prominent disclaimers:
  > *"DEMO MODE – This is a simulated request. No real emergency message has been sent."*  
  > *"Notice: SURAKSHA 365 does not claim police have been contacted unless an officially authorized law enforcement gateway is active. Always dial 112 directly in life-threatening situations."*

### 5. Complaint Registration (`ComplaintPage.tsx`)
- Categories: Eve Teasing, Stalking, Cyber Harassment, Domestic Abuse, Public Transport Misconduct, Suspicious Activity, Workplace Harassment.
- Incident description, date/time (*"Happened Just Now"* shortcut), incident location.
- Supporting document/image attachment simulation.
- Anonymous / Confidential reporting toggle.
- Track status and officer remarks for previously filed complaints.

### 6. Trusted Contacts Network (`TrustedContactsPage.tsx`)
- Privacy policy guide: explains that location is shared **only** when SOS is triggered.
- Add, edit, and delete family/friends.
- **Test Safety Alert:** Interactive SMS preview showing the exact distress text and tracking URL delivered to the contact.

### 7. Emergency & Complaint History (`RequestHistoryPage.tsx`)
- Filter by All Records, Emergency SOS, or Complaints.
- Search by ID or keyword.
- Detailed modal showing audit timeline, coordinates, assigned unit, and official resolution summaries.

### 8. Police / Responder Portal (`PoliceDashboard.tsx`, `PoliceLogin.tsx`)
- Officer authentication (Badge Number, Station Selection).
- Key metrics: Total requests, Pending review, Assigned units, Resolved cases.
- Live emergency queue with urgency tags (`Critical`, `High`, `Medium`).
- Status update modal: update case status, allocate patrol vehicles, append dispatcher logs.

### 9. Admin Control Center (`AdminDashboard.tsx`)
- Master incident stream.
- User management: inspect users, toggle active/suspended status, change role permissions.
- Responder management: station assignments, certified officer records.
- Analytics: complaints by category, peak distress time windows, average response times.
- Security & infrastructure diagnostics.

### 10. Profile & Settings (`ProfileSettingsPage.tsx`)
- Blood group, critical medical notes (allergies, conditions) for first responders.
- Safe addresses (Home and Work) for emergency geofencing.
- 4-digit Emergency False Alarm PIN.
- Silent SOS mode toggle and Auto-Siren toggle.

---

## 5. Security & Privacy Standards

- **Location Protection:** Real GPS coordinates are never accessed without prior user consent. In demo mode, synthetic locations are used to protect user privacy.
- **No False Claims:** Clear disclaimers stating that simulation alerts do not reach municipal police without authorized CAD integration.
- **Role Isolation:** Strict RBAC logic preventing ordinary users from reaching responder or administrative dashboards.
- **Firestore Security Rules:** Configured in `firestore.rules` with granular ownership and role constraints.

---

## 6. How to Run the Application

### Option A: Zero-Config Direct Browser Launch (Recommended)
Because the project was designed for immediate usability:
1. Double-click `index.html` in file explorer to open it in **Chrome**, **Microsoft Edge**, **Firefox**, or **Safari**.
2. Or start the built-in local server:
   ```cmd
   start.cmd
   ```
   *(or run `node server.js`)*
3. Open your browser at:
   ```
   http://localhost:3000
   ```

### Option B: Vite + TypeScript Development Workflow
If developing with npm/pnpm:
```bash
# 1. Install dependencies
npm install

# 2. Start Vite local development server
npm run dev

# 3. Build for production
npm run build
```

---

## 7. Environment Variables Configuration (`.env`)

Copy `.env.example` to `.env.local` to connect external services:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Google Maps API (Optional)
VITE_GOOGLE_MAPS_API_KEY=your_maps_api_key

# Emergency Gateway (Twilio / SMS Gateway)
TWILIO_ACCOUNT_SID=your_twilio_sid
TWILIO_AUTH_TOKEN=your_twilio_token
TWILIO_PHONE_NUMBER=+1234567890
POLICE_CAD_GATEWAY_URL=https://api.police.gov.in/cad/emergency-dispatch
```

*Note: If environment variables are omitted, SURAKSHA 365 automatically activates its self-contained Demo Engine with full interactivity and zero crashes.*

---

## 8. Pre-Configured Demo Accounts

| Role | Name | Email / Badge | Password |
| :--- | :--- | :--- | :--- |
| **Citizen User** | Priya Sharma | `priya.sharma@example.com` | `safety123` |
| **Police Responder** | Insp. Kavita Deshmukh | `KA-POL-8492` | `responder123` |
| **State Admin** | Dr. Meenakshi Sundaram | `admin@suraksha365.gov.in` | `admin123` |

*(You can also use the one-click role buttons on the top Demo Banner to switch between roles instantly!)*
