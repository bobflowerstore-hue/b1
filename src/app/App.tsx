import { RouterProvider } from 'react-router';
import { LanguageProvider } from './contexts/LanguageContext';
import { router } from './routes';
import { MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <LanguageProvider>

      {/* الموقع كامل */}
      <RouterProvider router={router} />

    </LanguageProvider>
  );
}
