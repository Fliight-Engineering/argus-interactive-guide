---
sidebar_position: 4
---

# Mesh Network Monitor

The Argus software includes a real-time mesh network monitor that shows the connection status between the trainer tablet, relay nodes, and the machine. This helps you quickly identify if the network is healthy before and during a training session.

## How to Open

The mesh network status is always visible in the top toolbar. Click the mesh status indicator to open the full Mesh Network panel.

<div class="image-wrapper-90">
  ![Mesh monitor location in toolbar](/img/vts-guide/mesh-nav.png)
  *The mesh status indicator is located in the top toolbar — click it to open the full panel*
</div>

---

## Status Bar

The mesh status is always visible in the top toolbar. It shows the current route from the machine back to your tablet at a glance.

### Green — Connected

The network is working. The route shown indicates how the signal is travelling from the machine (M) back to the tablet.

<div class="image-wrapper-70">
  ![Mesh status green - direct route](/img/vts-guide/mesh-status-green-direct.png)
  *Direct connection: Machine → Gateway → Tablet*
</div>

If the route passes through relay nodes, they appear in the chain:

<div class="image-wrapper-70">
  ![Mesh status green - relay route](/img/vts-guide/mesh-status-green-relay.png)
  *Relay route: Machine → R2 → R → Gateway → Tablet*
</div>

:::tip
A relay route is completely normal underground. As long as the indicator is green, the connection is healthy.
:::

### Orange — Marginal Quality

The network is connected but the link quality is marginal. The signal is weaker than ideal — the system will still work, but you may notice reduced video quality or brief interruptions.

<div class="image-wrapper-70">
  ![Mesh status orange - marginal quality](/img/vts-guide/mesh-status-orange-marginal.png)
  *Marginal connection quality — the link is working but signal is weak*
</div>

:::note
An orange status is common when the machine is at the edge of range or there are obstructions between nodes. Consider repositioning relay nodes if this persists.
:::

### Red — Bad Quality

The network connection is very poor. Video streaming and voice communication may not work reliably at this level. Action is required before starting or continuing a training session.

:::warning
If the status bar is red, do not begin a training session. Reposition relay nodes or move the machine closer to improve the signal before proceeding.
:::

### Scanning

The software is searching for the mesh network. This appears briefly on startup or when reconnecting.

<div class="image-wrapper-70">
  ![Mesh status scanning](/img/vts-guide/mesh-status-scanning.png)
  *Scanning for mesh network — wait a few seconds*
</div>

### No Mesh

The tablet cannot find the mesh network. Check that the tablet is connected to the ARGUS-VTS WiFi network.

<div class="image-wrapper-70">
  ![Mesh status no mesh](/img/vts-guide/mesh-status-no-mesh.png)
  *Not connected to mesh network*
</div>

---

## Mesh Network Panel

Click the mesh status button in the toolbar to open the full Mesh Network panel.

### Overview Tab

The Overview tab gives a simple summary of the network health — this is the main view you will use day-to-day.

<div class="image-wrapper-70">
  ![Mesh overview tab](/img/vts-guide/mesh-overview.png)
  *Overview tab showing active path and node status*
</div>

| Item | What it means |
|------|---------------|
| **System Status — Online & Operational** | All nodes in the active route are connected and working |
| **Machine** | The vehicle node — green dot means online |
| **Trainer** | The gateway node at the tunnel entrance — green dot means online |
| **Tablet** | This device — shows current data throughput |
| **Good** (green label) | Signal quality on that link is acceptable |
| **Marginal** (orange label) | Signal quality is weak — the link works but may be unreliable |
| **Bad** (red label) | Signal quality is very poor — video and voice may not work |

### Link Quality Colours

The link between nodes shows a coloured label indicating signal quality:

| Colour | Label | Meaning |
|--------|-------|---------|
| Green | Good | Signal is strong and reliable |
| Orange | Marginal | Signal is weak — may cause reduced video quality |
| Red | Bad | Signal is very poor — action required |

### Node Colours

Each node in the list shows a coloured dot indicating its current status:

| Colour | Status |
|--------|--------|
| Green | Online and connected |
| Blue | This device (your tablet) |
| Red | Offline or not reachable |

### Advanced Tab

The Advanced tab shows a detailed breakdown of each hop in the active route, including signal strength and firmware version of each node.

<div class="image-wrapper-70">
  ![Mesh advanced tab](/img/vts-guide/mesh-advanced.png)
  *Advanced tab showing each node in the active path with signal details*
</div>

### Other Nodes

Nodes that are part of the network but not currently in the active route are listed under **Other Nodes**. These are typically spare relay nodes that are powered on but not needed for the current path.

<div class="image-wrapper-70">
  ![Mesh other nodes](/img/vts-guide/mesh-other-nodes.png)
  *Other nodes — green dot means online, red dot means offline*
</div>

---

## What To Do If There Is No Connection

If the status bar shows **No Mesh** or nodes appear **Offline**:

1. **Check the tablet WiFi** — Make sure the tablet is connected to the ARGUS-VTS-XXX network (Settings → WiFi)
2. **Check node power** — Walk to the offline node and confirm its power LED is on
3. **Wait 30 seconds** — The network can take up to 30 seconds to re-establish a route after a node powers on
4. **Contact support** — If the issue persists, contact the Fliight support team

:::warning
Do not begin a training session if the System Status shows anything other than **Online & Operational**.
:::
