---
sidebar_position: 1
---

# Battery Calibration

Use this procedure if the tablet battery is showing incorrect charge levels or not holding charge as expected.

import useBaseUrl from '@docusaurus/useBaseUrl';

<video
  width="100%"
  controls
  style={{borderRadius: '8px'}}
>
  <source src={useBaseUrl('/video/battery-calibration.mp4')} type="video/mp4" />
</video>

---

## Symptoms

When placing the battery into the charging dock, the LED shows **both red and green simultaneously** — indicating the dock cannot recognise the battery's charge state. This is a dock/battery calibration error.

## Fix

1. Locate the **small button on the face of the battery**
2. Press and hold the button until the battery LED **flashes several times**, then **turns off completely**
3. Place the battery back into the charging dock
4. The dock LED should now show **solid red** — this confirms the dock is correctly recognising and charging the battery

:::tip Confirmed fix
If the LED shows solid red after reinserting the battery, the calibration was successful.
:::
