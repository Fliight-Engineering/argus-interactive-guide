import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import QuickStartPrint from '@site/src/components/QuickStartPrint';
import { getOperation } from '@site/src/data/quickStart/operation';

export default function QuickStartOperationPrint() {
  const { i18n: { currentLocale } } = useDocusaurusContext();
  return <QuickStartPrint part={1} slides={getOperation(currentLocale)} />;
}
