import { Metadata } from 'next';
import AcmeLogo from '../ui/acme-logo';
import LoginForm from '../ui/login-form';

export const metadata: Metadata = { title: 'Login' };

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center md:h-screen">
      <div className="5 relative mx-auto flex w-full max-w-[400px] flex-col space-y-2 p-4 md:-mt-32">
        <div className="flex h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
          <div className="md:2-36 w-32 text-white">
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
