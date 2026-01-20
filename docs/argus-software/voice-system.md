---
sidebar_position: 2
---

# Voice System

The Argus software includes a built-in voice communication system that enables real-time two-way audio between the trainer (on the tablet) and the trainee (on the machine). This feature uses Bluetooth headsets for hands-free operation during training sessions.

## Overview

The voice system consists of two main components:

| Component | Location | Purpose |
|-----------|----------|---------|
| **Trainer Headset** | Tablet/Ground Control | Allows the trainer to speak with and hear the trainee |
| **Trainee Headset** | Machine/Hyperion Node | Allows the trainee to receive instructions and respond |

## Voice Control Panel

Access the Voice System Control panel by clicking the **Voice** button in the main toolbar. This panel provides complete control over the voice communication system.

<div class="image-wrapper-50">
  ![Voice System Control Panel](/img/vts-guide/voice-system-control.png)
  *Voice System Control panel showing system status and headset sections*
</div>

### System Status Section

The collapsible **System Status** section displays:

- **Voice Server Status**: Shows if the voice server is running (Online/Offline)
- **Machine Node Status**: Connection status to the machine's Hyperion node
- **Mesh WiFi Status**: Connection to the ARGUS-VTS mesh network
- **Server IP**: The IP address of the voice server
- **Uptime**: How long the voice server has been running

Click **Run Diagnostic** to test the voice system connectivity.

### Trainer Headset (Tablet)

This section manages the Bluetooth headset connected to the trainer's tablet:

1. **Enable Bluetooth**: Opens Windows Bluetooth Quick Settings to pair a headset
2. **Connected Device Info**: Shows the paired headset name and battery level
3. **Sound Check**: Plays a test sound to verify audio output

:::tip
If no Bluetooth headset is connected, the system will automatically use the laptop's built-in speaker and microphone as a fallback.
:::

### Trainee Headset (Machine)

This section manages the headset connected to the machine's Hyperion node:

1. **Scan**: Scans for available Bluetooth devices on the machine node
2. **Device List**: Shows discovered devices - click a device to select it
3. **Bind**: Connects the selected device to the machine node
4. **Battery Indicator**: Shows the trainee headset battery level
5. **Sound Check**: Plays a test sound on the trainee's headset

## Usage

<div class="image-wrapper-50">
  ![Starting Voice System](/img/vts-guide/start-voice.png)
  *Voice System startup and connection process*
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

<div class="image-wrapper-50">
  ![Voice System Connected](/img/vts-guide/voice-system-connected.png)
  *Voice System with both headsets connected - showing battery levels*
</div>

**Step 3: Verify Connection**
1. Use **Sound Check** on both sides to verify audio
2. Check that the status indicators show green (connected)
3. Monitor battery levels during the session

## Status Indicators

| Color | Meaning |
|-------|---------|
| Green | Connected and working |
| Yellow | Initializing or partially connected |
| Red | Disconnected or error |

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Trainer headset not detected | Open Windows Bluetooth settings and ensure the headset is paired |
| Trainee headset scan shows no devices | Verify Machine Node is online; put headset in pairing mode |
| No audio after connection | Run Sound Check; verify headset battery level |
| Intermittent connection | Check mesh network signal strength; move closer to access point |
