---
sidebar_position: 7
---

# Voice System Setup

Quick setup guide for the voice communication system with Bluetooth headsets.

## Before You Begin

Ensure you have:
- Two Bluetooth headsets (one for trainer, one for trainee)
- Argus software running on trainer tablet
- Machine node powered on and connected to mesh network

## Quick Setup Steps

### 1. Power On Headsets

**CRITICAL**: Turn on both headsets FIRST before launching the Argus application.

<div class="image-wrapper-50">
  ![Headset Power Button](/img/vts-guide/headset.png)
  *Bluetooth headset power button location*
</div>

1. Press and hold the power button on each headset until the LED lights up
2. The headset will announce "Power On" or play a tone when ready
3. Keep headsets in pairing mode for initial setup

### 2. Connect Trainer Headset

1. Open the Argus software
2. Click the **Voice** button in the toolbar
3. In the Trainer Headset section, click **Enable Bluetooth**
4. Pair your headset through Windows Bluetooth settings
5. Verify the headset appears in the Connected Device Info

### 3. Connect Trainee Headset

1. Verify the Machine Node status shows "Online"
2. Click **Scan** to find available Bluetooth devices on the machine
3. Select the trainee's headset from the device list
4. Click **Bind** to connect
5. Check battery level indicator

### 4. Test Connection

1. Use **Sound Check** button on both trainer and trainee sides
2. Verify status indicators show green (connected)
3. Test two-way communication
4. Monitor battery levels during use

## Status Indicators

| Indicator | Status | Action |
|-----------|--------|--------|
| Green | Connected and working | System ready for use |
| Yellow | Initializing or partially connected | Wait for connection to complete |
| Red | Disconnected or error | Check troubleshooting steps |

## Quick Troubleshooting

| Problem | Solution |
|---------|----------|
| Headset not found | Ensure headset is powered on and in pairing mode |
| Connection drops | Check mesh network signal strength |
| No audio | Run Sound Check; verify battery level |
| Machine node offline | Verify machine is powered on and connected to mesh |

:::tip
For detailed voice system information and advanced troubleshooting, see the [Voice System](/docs/argus-software/voice-system) documentation.
:::
