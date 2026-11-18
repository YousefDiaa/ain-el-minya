/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VisionObjectivesSection from './components/VisionObjectivesSection';
import AiPipelineSection from './components/AiPipelineSection';
import ExecutionHubSection from './components/ExecutionHubSection';
import ImpactGovernanceFooter from './components/ImpactGovernanceFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#031224] text-[#F1F5F9]">
      <Navbar />
      <main>
        <HeroSection />
        <VisionObjectivesSection />
        <AiPipelineSection />
        <ExecutionHubSection />
        <ImpactGovernanceFooter />
      </main>
    </div>
  );
}
