---
sidebar_position: 6
---

# Best Practices

<div class="best-practices-intro">

This section provides a guide for best practice to use Argus VTS. If planned ahead, set up of the system should take around **5 minutes**.

</div>

## Core Practices

<div class="best-practices-grid">

<div class="best-practice-card">

### Minimum AP Distance

<div class="card-content">

The **minimum distance** that two static APs should be set up from one another is **30 meters** to avoid wireless noise affecting streaming reliability.

<div class="card-highlight">

**Key Point**: Closer than 30m can cause interference and reduce video quality.

</div>

</div>

</div>

<div class="best-practice-card">

### AP Positioning

<div class="card-content">

When mounting APs on welded metal mesh, ensure:

- **Not in wall depressions** — impacts line of sight to neighboring nodes
- **On outermost point of wall** — ideal for signal propagation
- **Higher than Machine AP** — minimum requirement for optimal coverage

</div>

</div>

<div class="best-practice-card">

### Connection Monitoring

<div class="card-content">

1. **Check Argus Application** (lower right corner) for network status
2. **Wait 1-2 minutes** — network needs time to stabilize
3. **If performance is poor** — reposition APs and repeat

<div class="card-highlight">

**Tip**: Give the mesh network time to establish connections before making adjustments.

</div>

</div>

</div>

<div class="best-practice-card">

### Trainer AP Distance

<div class="card-content">

Deploy the trainer AP as far from the tablet as possible for best operational coverage while maintaining line of sight to the tablet.

:::note Trainer Monitoring
Trainer can monitor from a safer/more strategic distance while maintaining full system control.
:::

</div>

</div>

<div class="best-practice-card">

### AP/RCS Power On

<div class="card-content">

If the AP or RCS does not seem to be powering on:

- Use a **single firm press-and-release**
- Give the unit time to boot (10-15 seconds)
- Watch for LED status changes

<div class="card-highlight">

**Common Issue**: Multiple rapid presses can prevent proper boot sequence.

</div>

</div>

</div>

</div>

## Network Health Monitoring

<div class="best-practice-card best-practice-card-full">

### Network Health Monitoring Panel

<div class="card-content">

The network health monitoring panel (located in the **lower right corner** of the Argus Application) provides a simple and intuitive means of assessing live network performance.

<div class="image-wrapper-70">
  ![Connection Monitoring - Placeholder](/img/vts-guide/network-health.png)
  *Network Health Monitoring Panel in Argus Application (lower right corner)*
</div>

For both network bands (**wlan0**: 2.4GHz and **wlan1**: 5GHz), cost values are reported with color indicators.

### Understanding the Indicators

| Indicator | State | What It Means |
|-----------|-------|---------------|
| **Green** | Optimal | Excellent connection quality, video streaming reliable |
| **Orange** | Functional | Connection working but not optimal |
| **Red** | Poor | Significant connection issues |

:::tip Quick Check
If you see red indicators, the most common fix is repositioning the APs to improve line of sight. Even small adjustments can make a significant difference.
:::

</div>

</div>

## Advanced Configuration

<div class="best-practice-card best-practice-card-full">

### Extending Coverage Around Corners

<div class="card-content">

To extend the coverage of the VTS around corners:

<div class="image-wrapper-70">
  ![Repeater AP Corner Configuration](/img/vts-guide/antennas-ouod.png)
  *One antenna up and the other down, to provide signal around a corner*
</div>

1. **Position Trainer or Repeater AP at the corner**
2. **Orient the two antennas strategically**:
   - **Antenna 1**: Toward the vehicle travel path (provides coverage)
   - **Antenna 2**: Back to the previous static AP with clear line of sight (maintains network connection)

This configuration allows the system to "bend" around corners and extend coverage into areas without direct line of sight.

</div>

</div>

<div class="best-practice-card best-practice-card-full">

### Argus Tablet Operation

<div class="card-content">

<div class="image-wrapper-70">
  ![Argus Full Screen View](/img/vts-guide/argus-software.png)
  *Argus software full-screen view showing multiple camera feeds and control interface*
</div>

Once the app is open with the system connected, the four camera feeds will start streaming automatically.

**To view a camera feed full-screen**: Double-tap any sidebar video

The interface provides:

1. **Start recording** all connected camera feeds to the specified folder (Settings/Recording/Directory)
2. **Quick camera view adjustment button**
3. **Open the recording directory folder** in Explorer
4. **Application Settings**
5. **Expand and close application buttons**
6. **Network Health Monitoring Panel**

</div>

</div>

