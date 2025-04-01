import HeroSection from '@/components/HeroSection';
import FoundersSection from '@/components/FoundersSection';
import EventsSection from '@/components/EventsSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FoundersSection />
      <EventsSection />
    </div>
  );
}
