import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const INDICATOR_COLORS = {
  Green: '#00B050',
  Orange: '#ff9800',
  Red: '#f44336',
};

/**
 * The body of one Quick Start slide: image, title, text, note, link, steps, table.
 * Used by the interactive Carousel (one slide at a time) and by the printable
 * Quick Start (every slide, stacked), so both always show the same content.
 */
export default function Slide({ slide, imageUrl, variant = 'screen' }) {
  // Stable `qs-slide__*` class names let print/PDF CSS target the slide;
  // the hashed CSS-module classes (viewport-sized carousel layout) are screen only.
  const screen = variant === 'screen';
  const cx = (stable, moduleClass) => (screen && moduleClass ? `${stable} ${moduleClass}` : stable);
  const stepsClass = slide.noNumbers ? 'qs-slide__steps qs-slide__steps--plain' : 'qs-slide__steps';

  return (
    <div className={cx(`qs-slide qs-slide--${variant}`, styles.slideContent)}>
      {imageUrl && (
        <div className={cx('qs-slide__image', styles.imageContainer)}>
          <img src={imageUrl} alt={slide.title || 'Slide image'} className={cx('qs-slide__img', styles.slideImage)} />
        </div>
      )}

      <div className={cx('qs-slide__text', styles.textContent)}>
        {slide.title && <h2 className={cx('qs-slide__title', styles.slideTitle)}>{slide.title}</h2>}
        {slide.content && (
          <div className={slide.warning ? cx('qs-slide__lead qs-slide__lead--warning', `${styles.slideText} ${styles.warningHighlight}`) : cx('qs-slide__lead', styles.slideText)}>
            {slide.content}
          </div>
        )}
        {slide.note && (
          <div className={cx('qs-slide__note', styles.noteHighlight)}>
            <strong>ℹ️ NOTE:</strong> {slide.note}
          </div>
        )}
        {slide.link && (
          <Link to={slide.link.url} className={cx('qs-slide__link', styles.slideLink)}>
            {slide.link.text}
          </Link>
        )}
        {slide.steps && (
          <ul className={cx(stepsClass, slide.noNumbers ? styles.stepsListNoNumbers : styles.stepsList)}>
            {slide.steps.map((step, idx) => (
              <li key={idx} className={cx('qs-slide__step', styles.stepItem)}>{step}</li>
            ))}
          </ul>
        )}
        {slide.table && (
          <table className={cx('qs-slide__table', styles.infoTable)}>
            <thead>
              <tr>
                {slide.table.headers.map((header, idx) => (
                  <th key={idx}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {slide.table.rows.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  <td style={{ fontWeight: 700, color: INDICATOR_COLORS[row[0]] || 'inherit' }}>{row[0]}</td>
                  {row.slice(1).map((cell, cellIdx) => (
                    <td key={cellIdx + 1}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
