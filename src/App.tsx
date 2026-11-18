/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import VisionObjectivesSection from './components/VisionObjectivesSection';
import AiPipelineSection from './components/AiPipelineSection';
import WorkflowSection from './components/WorkflowSection';
import RoadmapBudgetSection from './components/RoadmapBudgetSection';
import PartnershipsKpisSection from './components/PartnershipsKpisSection';
import RiskSecurityFooterSection from './components/RiskSecurityFooterSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#031224] text-[#F1F5F9]">
      <Navbar />
      <main>
        <HeroSection />
        <VisionObjectivesSection />
        <AiPipelineSection />
        <WorkflowSection />
        <RoadmapBudgetSection />
        <PartnershipsKpisSection />
        <RiskSecurityFooterSection />
      </main>
    </div>
  );
}
