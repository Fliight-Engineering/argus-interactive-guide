---
sidebar_position: 2
---

# The Argus Software

Argus is a Windows-based software platform that gives remote trainers access to multiple video feeds from remote cameras. Users can toggle between feeds and record all streams simultaneously for later review and trainee coaching.

<div class="image-wrapper-90">
  ![Argus Software Operating Screen](/img/vts-guide/main-screen-overview.png)
  *Argus software main screen with camera grid, toolbar controls, and voice status indicators*
</div>

---

## Key Features

<div class="highlights-grid">

<div class="highlight-card">

### Multiple Video Feeds

<div class="card-content">

Access to multiple video feeds from remote cameras

</div>

</div>

<div class="highlight-card">

### Quick Toggle

<div class="card-content">

Toggle between feeds in real-time with single click

</div>

</div>

<div class="highlight-card">

### Simultaneous Recording

<div class="card-content">

Record all streams simultaneously for later review

</div>

</div>

<div class="highlight-card">

### Post-Training Review

<div class="card-content">

Save recordings for trainee coaching and assessment

</div>

</div>

<div class="highlight-card">

### Network Health Monitoring

<div class="card-content">

Real-time visual status of mesh network connection quality

</div>

</div>

<div class="highlight-card">

### Windows-Based Platform

<div class="card-content">

Runs on Windows tablet PC with intuitive touchscreen interface for easy control

</div>

</div>

<div class="highlight-card">

### Voice Communication

<div class="card-content">

Two-way voice communication between trainer and trainee via Bluetooth headsets

</div>

</div>

<div class="highlight-card">

### Auto Updates

<div class="card-content">

Automatic software updates with version checking and one-click installation

</div>

</div>

</div>

---

## Video System

The Argus video system provides real-time streaming from multiple remote cameras with flexible viewing options.

### Main Toolbar

The toolbar at the top of the screen provides quick access to all main functions:

<div class="image-wrapper-70">
  ![Main Toolbar](/img/vts-guide/toolbar-control.png)
  *Main toolbar with recording, gallery, voice, grid view, and settings controls*
</div>

| Button | Function |
|--------|----------|
| **Recording** | Start/stop video recording for all cameras |
| **Gallery** | Open the recordings folder |
| **Voice** | Open the Voice System Control panel |
| **Grid View** | Toggle between 1+3 and 2+2 camera layouts |
| **Settings** | Open application settings |
| **Minimize** | Minimize the application window |
| **Close** | Exit the application |

### Video View Switching

Toggle between two camera layout options:

- **1+3 Layout**: One large main view + three smaller views on the right
- **2+2 Layout**: Four equal-sized camera views in a grid

Double-click any camera view to make it the main (large) view.

### Video Recording Function

<div class="image-wrapper-30">
  ![Recording Indicator](/img/vts-guide/recording-indicator.png)
  *Recording controls showing active recording with duration timer*
</div>

- **Record Button**: Click to start/stop recording all camera feeds
- **Recording Indicator**: A red dot appears when recording is active
- **Duration Timer**: Shows elapsed recording time (visible when recording)

All connected camera feeds are recorded simultaneously in sync, ensuring comprehensive coverage for post-training review.

### Video Recording Gallery Access

Click the **Gallery** button in the toolbar to open the recordings folder. Recordings are stored in the directory specified in Settings.

Use recordings for:
- Post-training review and analysis
- Trainee coaching and feedback
- Assessment and performance tracking

---

## Voice System

The Argus software includes a built-in voice communication system that enables real-time two-way audio between the trainer (on the tablet) and the trainee (on the machine). This feature uses Bluetooth headsets for hands-free operation during training sessions.

### Overview

The voice system consists of two main components:

| Component | Location | Purpose |
|-----------|----------|---------|
| **Trainer Headset** | Tablet/Ground Control | Allows the trainer to speak with and hear the trainee |
| **Trainee Headset** | Machine/Hyperion Node | Allows the trainee to receive instructions and respond |

### Voice Control Panel

Access the Voice System Control panel by clicking the **Voice** button in the main toolbar. This panel provides complete control over the voice communication system.

<div class="image-wrapper-50">
  ![Voice System Control Panel](/img/vts-guide/voice-system-control.png)
  *Voice System Control panel showing system status and headset sections*
</div>

#### System Status Section

The collapsible **System Status** section displays:

- **Voice Server Status**: Shows if the voice server is running (Online/Offline)
- **Machine Node Status**: Connection status to the machine's Hyperion node
- **Mesh WiFi Status**: Connection to the ARGUS-VTS mesh network
- **Server IP**: The IP address of the voice server
- **Uptime**: How long the voice server has been running

Click **Run Diagnostic** to test the voice system connectivity.

#### Trainer Headset (Tablet)

This section manages the Bluetooth headset connected to the trainer's tablet:

1. **Enable Bluetooth**: Opens Windows Bluetooth Quick Settings to pair a headset
2. **Connected Device Info**: Shows the paired headset name and battery level
3. **Sound Check**: Plays a test sound to verify audio output

:::tip
If no Bluetooth headset is connected, the system will automatically use the laptop's built-in speaker and microphone as a fallback.
:::

#### Trainee Headset (Machine)

This section manages the headset connected to the machine's Hyperion node:

1. **Scan**: Scans for available Bluetooth devices on the machine node
2. **Device List**: Shows discovered devices - click a device to select it
3. **Bind**: Connects the selected device to the machine node
4. **Battery Indicator**: Shows the trainee headset battery level
5. **Sound Check**: Plays a test sound on the trainee's headset

### Usage

<div class="image-wrapper-50">
  ![Voice System Connected](/img/vts-guide/voice-system-connected.png)
  *Voice System with both headsets connected - showing battery levels and device scan*
</div>

**Step 1: Connect Trainer Headset**
1. Click the **Voice** button in the toolbar
2. In the Trainer Headset section, click **Enable Bluetooth**
3. Pair your Bluetooth headset through Windows settings
4. The headset will appear in the Connected Device Info

**Step 2: Connect Trainee Headset**
1. Ensure the machine node is connected (check Machine Node status)
2. Click **Scan** to find available Bluetooth devices
3. Select the trainee's headset from the list
4. Click **Bind** to connect

**Step 3: Verify Connection**
1. Use **Sound Check** on both sides to verify audio
2. Check that the status indicators show green (connected)
3. Monitor battery levels during the session

### Status Indicators

| Color | Meaning |
|-------|---------|
| Green | Connected and working |
| Yellow | Initializing or partially connected |
| Red | Disconnected or error |

### Troubleshooting

| Issue | Solution |
|-------|----------|
| Trainer headset not detected | Open Windows Bluetooth settings and ensure the headset is paired |
| Trainee headset scan shows no devices | Verify Machine Node is online; put headset in pairing mode |
| No audio after connection | Run Sound Check; verify headset battery level |
| Intermittent connection | Check mesh network signal strength; move closer to access point |

---

## Update System

Argus includes an automatic update system that keeps your software current with the latest features and improvements.

### Versioning

The current software version is displayed in the top-left corner of the application, next to the logo. This version badge shows:

<div class="image-wrapper-30">
  ![Version Badge](/img/vts-guide/version-badge.png)
  *Version badge showing current software version*
</div>

- Current installed version (e.g., **v0.0.28**)
- Click to check for updates

### Update Process

When a new version is available:

<div class="image-wrapper-70">
  ![Update Available Dialog](/img/vts-guide/update-available.png)
  *Update notification showing current and latest version with download options*
</div>

1. **Notification**: A notification appears indicating an update is available
2. **Download**: Click to download the update package
3. **Progress**: A progress bar shows download status with speed and remaining time
4. **Install**: Once downloaded, click **Install** to apply the update
5. **Restart**: The application will restart with the new version

:::note
Updates are downloaded from secure cloud servers. An internet connection is required for update checking and downloading.
:::

### Automatic Dependency Management

On first launch or after an update, Argus may need to install required components (such as video streaming libraries). If a required component is missing:

1. A dialog will appear explaining what is needed
2. Click **Download & Install** to automatically download and install the component
3. Wait for the installation to complete
4. The application will continue to load normally

---

## Theme and Styling

The application uses a modern dark theme optimized for various lighting conditions:

- **Dark Background**: Reduces eye strain during extended use
- **High Contrast Icons**: Easy visibility in bright outdoor conditions
- **Rounded Controls**: Touch-friendly button designs with visual feedback
- **Status Colors**: Green (connected), Yellow (warning), Red (error)

---
