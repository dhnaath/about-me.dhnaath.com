import type { TraitCardData, TraitSectionConfig } from '../types';
import { TraitCard } from './TraitCard';

interface TraitSectionProps {
  section: TraitSectionConfig;
  itemsById: Map<string, TraitCardData>;
}

export function TraitSection({ section, itemsById }: TraitSectionProps) {
  const items = section.itemIds
    .map((id) => itemsById.get(id))
    .filter((item): item is TraitCardData => Boolean(item));

  const containerClass =
    section.layout === 'grid'
      ? 'w-[81%] max-w-[56.7rem] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
      : 'w-[81%] max-w-[56.7rem] mx-auto flex flex-col sm:flex-row flex-wrap justify-center items-stretch gap-6';

  return (
    <section id={section.id} className="pt-[15pt] pb-0 bg-transparent w-full mb-8">
      <div className="w-full px-[10pt]">
        <div className="flex flex-col items-center justify-center gap-1 mt-[7pt] mb-[18pt]">
          <h2 className="text-xl md:text-2xl font-bold text-[#3D3D3D] dark:text-[#F2F0EF]">{section.title}</h2>
          <p className="text-sm font-serif text-[#3D3D3D] dark:text-[#F2F0EF] text-center">{section.subtitle}</p>
        </div>

        <div className={containerClass}>
          {items.map((item) => (
            <TraitCard key={item.id} item={item} layout={section.layout} />
          ))}
        </div>
      </div>
    </section>
  );
}
