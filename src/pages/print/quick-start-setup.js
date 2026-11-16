import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import QuickStartPrint from '@site/src/components/QuickStartPrint';
import { getSetup } from '@site/src/data/quickStart/setup';

export default function QuickStartSetupPrint() {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  return <QuickStartPrint part={0} slides={getSetup(currentLocale)} />;
}
