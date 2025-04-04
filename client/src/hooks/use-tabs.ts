import { useState } from 'react';

export function useTabs<T extends string>(tabIds: T[], defaultTab: T) {
  const [activeTab, setActiveTab] = useState<T>(defaultTab);
  
  return {
    activeTab,
    setActiveTab,
  };
}
