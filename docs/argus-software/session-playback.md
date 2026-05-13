---
sidebar_position: 2
---

# Session Playback

Session Playback lets trainers review recorded ARGUS sessions directly inside the application. Use it after a training run to inspect the camera feeds, review driver actions, and delete recordings that are no longer required.

## Open Playback

Open playback from the ARGUS toolbar. When playback mode is active, the application switches away from live camera view and shows the available recording sessions.

<div class="image-wrapper-90">
  ![Playback session list](/img/vts-guide/playback-session-list.png)
  *Playback session list with session preview, sorting, preview size, and delete selection controls*
</div>

## Select a Session

Each recording session is shown with a preview thumbnail, recording date and time, available video/audio tracks, file size, and duration.

- Tap a session row once to select it.
- Double-tap a session row to start playback.
- Use the date filter to narrow the list.
- Use **Sort** to change the order of sessions.
- Use **View** to switch between larger thumbnails for driver visibility and smaller rows for reviewing more sessions at once.

<div class="image-wrapper-70">
  ![Playback list controls](/img/vts-guide/playback-list-controls.png)
  *Sort and View controls for changing how playback sessions are displayed*
</div>

## Replay a Session

During playback, ARGUS displays the recorded camera feeds in the same multi-camera layout used during live operation. The playback bar at the bottom controls review of the session.

<div class="image-wrapper-90">
  ![Playback replay mode](/img/vts-guide/playback-replay-mode.png)
  *Playback mode with synchronized camera replay, scrub timeline, and return-to-live-view control*
</div>

Use the playback bar to:

- Play or pause the session.
- Skip backward or forward.
- Scrub through the session timeline.
- Check the current playback time and session duration.


## Playback Audio Channels

Playback sessions include separate audio and speech activity indicators for the trainer and the machine operator.

<div class="image-wrapper-50">
  ![Playback audio toolbar](/img/vts-guide/playback-audio-toolbar.png)
  *Playback audio controls for the Trainer (T) and Machine/Trainee (M) channels*
</div>

- **T** controls the trainer audio channel.
- **M** controls the machine/operator audio channel.
- A red crossed speaker means that channel is muted.
- A normal speaker means that channel is unmuted.
- Tap the speaker control beside each channel to mute or unmute that channel during review.

## Return to Live View

Tap the red **X** button on the playback bar to leave playback and return to live camera view.

<div class="image-wrapper-50">
  ![Back to live view button](/img/vts-guide/playback-back-to-live-view.png)
  *Back to live view button on the playback bar*
</div>

## Delete Playback Sessions

Playback sessions can be removed from the tablet when they are no longer required. ARGUS uses a selection step and a confirmation prompt so sessions are not deleted accidentally.

1. Tap **Select** in the playback session list.
2. Mark one or more sessions for deletion.
3. Tap **Delete**.
4. Confirm the deletion in the pop-up.

<div class="image-wrapper-90">
  ![Playback delete confirmation](/img/vts-guide/playback-delete-confirmation.png)
  *Delete confirmation prompt shown before selected playback sessions are permanently removed*
</div>

:::warning
Deleted playback sessions cannot be restored from ARGUS. Confirm that the recording is no longer needed before deleting it.
:::



