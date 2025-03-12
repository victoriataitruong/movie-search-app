// src/components/Card.tsx
import React from 'react';

// Card component that accepts className and children
const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`${className} border rounded-lg shadow-md overflow-hidden`}>
    {children}
  </div>
);

// CardContent component that accepts className and children
const CardContent = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`${className} p-4`}>
    {children}
  </div>
);

export { Card, CardContent };
