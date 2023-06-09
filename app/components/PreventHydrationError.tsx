'use client';
import { useEffect, useState } from 'react';

type PreventHydrationErrorProps = { children: React.ReactNode };

const PreventHydrationError = ({ children }: PreventHydrationErrorProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <>{children}</>;
};

export default PreventHydrationError;
