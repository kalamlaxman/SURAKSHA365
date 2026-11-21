import React, { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { EmergencyProvider, useEmergency } from './context/EmergencyContext';
import { DemoBanner } from './components/common/DemoBanner';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { SirenModal } from './components/emergency/SirenModal';
import { FakeCallModal } from './components/emergency/FakeCallModal';

import { LandingPage } from './pages/LandingPage';
import { UserDashboard } from './pages/UserDashboard';
import { SosEmergencyPage } from './pages/SosEmergencyPage';
import { ComplaintPage } from './pages/ComplaintPage';
import { TrustedContactsPage } from './pages/TrustedContactsPage';
import { RequestHistoryPage } from './pages/RequestHistoryPage';
import { PoliceDashboard } from './pages/PoliceDashboard';
import { AdminDashboard } from './pages/AdminDashboard';
import { ProfileSettingsPage } from './pages/ProfileSettingsPage';
import { UserLogin } from './pages/UserLogin';
import { UserRegister } from './pages/UserRegister';
import { PoliceLogin } from './pages/PoliceLogin';

const MainRouter: React.FC = () => {
  const { role } = useAuth();
  const { isSirenPlaying, toggleSiren, isFakeCallOpen, closeFakeCall } = useEmergency();
  const [currentPage, setCurrentPage] = useState<string>('landing');

  // Intelligent navigation router
  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onNavigate={setCurrentPage} />;
      case 'user-dashboard':
        return <UserDashboard onNavigate={setCurrentPage} />;
      case 'sos':
        return <SosEmergencyPage onNavigate={setCurrentPage} />;
      case 'complaints':
        return <ComplaintPage onNavigate={setCurrentPage} />;
      case 'trusted-contacts':
        return <TrustedContactsPage onNavigate={setCurrentPage} />;
      case 'request-history':
        return <RequestHistoryPage onNavigate={setCurrentPage} />;
      case 'police-dashboard':
        return <PoliceDashboard onNavigate={setCurrentPage} />;
      case 'admin-dashboard':
        return <AdminDashboard onNavigate={setCurrentPage} />;
      case 'profile':
        return <ProfileSettingsPage onNavigate={setCurrentPage} />;
      case 'user-login':
        return <UserLogin onNavigate={setCurrentPage} />;
      case 'user-register':
        return <UserRegister onNavigate={setCurrentPage} />;
      case 'police-login':
        return <PoliceLogin onNavigate={setCurrentPage} />;
      default:
        return <LandingPage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#080B18] font-sans text-[#F8FAFC] antialiased selection:bg-[#4169FF] selection:text-white">
      {/* 1. Global Demo Environment Banner */}
      <DemoBanner onNavigate={setCurrentPage} />

      {/* 2. Top Navigation Bar */}
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />

      {/* 3. Main Screen View */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* 4. Global Deterrent & Safety Modals */}
      <SirenModal isOpen={isSirenPlaying} onClose={toggleSiren} />
      <FakeCallModal isOpen={isFakeCallOpen} onClose={closeFakeCall} />

      {/* 5. Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <AuthProvider>
      <EmergencyProvider>
        <MainRouter />
      </EmergencyProvider>
    </AuthProvider>
  );
};

export default App;
