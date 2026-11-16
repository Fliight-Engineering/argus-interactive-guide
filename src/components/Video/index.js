import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

/**
 * Video for docs pages. On screen it plays inline; in the PDF it becomes the
 * poster still plus a QR code and link to this page on the web guide.
 *
 * `poster` is required so print output always has an image to show.
 *
 *   import Video from '@site/src/components/Video';
 *   <Video src="/video/battery-calibration.mp4" poster="/video/battery-calibration-poster.jpg"
 *          caption="Battery calibration walkthrough" />
 */
export default function Video({ src, poster, caption }) {
  const srcUrl = useBaseUrl(src);
  const posterUrl = useBaseUrl(poster);
  return (
    <figure className="doc-video" data-video-src={src}>
      <video width="100%" controls preload="metadata" poster={posterUrl} style={{ borderRadius: '8px' }}>
        <source src={srcUrl} type="video/mp4" />
      </video>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
