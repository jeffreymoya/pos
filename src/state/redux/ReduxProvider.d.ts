import React, { ReactNode } from 'react';
import { EnhancedStore } from '@reduxjs/toolkit';
declare const store: Promise<EnhancedStore>;
export type RootState = ReturnType<typeof store.getState>;
declare const ReduxProvider: React.FC<{
    children: ReactNode;
}>;
export default ReduxProvider;
