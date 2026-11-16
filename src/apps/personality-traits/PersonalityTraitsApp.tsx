import { FloatingDocuments } from '../../components/shared/FloatingDocuments';
import { TraitCard } from './components/TraitCard';
import { TraitSection } from './components/TraitSection';
import {
  REMAINING_TRAIT_ITEMS,
  TRAIT_ITEMS_BY_ID,
  TRAIT_SECTIONS,
} from './data/traitsData';

export default function PersonalityTraitsApp() {
  return (
    <div className="w-full min-h-screen bg-transparent overflow-x-hidden relative flex flex-col items-center font-sans">
      <div className="mobile-scale-main w-full z-10 flex flex-col items-center">
        {TRAIT_SECTIONS.map((section) => (
          <TraitSection key={section.id} section={section} itemsById={TRAIT_ITEMS_BY_ID} />
        ))}

        <div className="w-[81%] max-w-[56.7rem] mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {REMAINING_TRAIT_ITEMS.map((item) => (
            <TraitCard key={item.id} item={item} layout="grid" />
          ))}
        </div>
      </div>

      <FloatingDocuments />
    </div>
  );
}
