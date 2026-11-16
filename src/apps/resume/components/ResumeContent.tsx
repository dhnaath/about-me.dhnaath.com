import { motion, AnimatePresence } from 'motion/react';
import type { Language } from '../../../types';
import type { ResumeData, ResumeTranslations } from '../types';
import { ListItem } from './ResumeListItem';
import { RecapGroupHeader, Section } from './ResumeSection';
import { WorkExperienceItem } from './WorkExperienceItem';

const pageTransitionVariants = {
  enter: () => ({
    opacity: 0,
    scale: 0.98,
    filter: "blur(4px)",
  }),
  center: {
    zIndex: 1,
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: () => ({
    zIndex: 0,
    opacity: 0,
    scale: 0.98,
    filter: "blur(4px)",
  }),
};

interface ResumeContentProps {
  data: ResumeData;
  t: ResumeTranslations;
  lang: Language;
  page: number;
  direction: number;
  expandedWorkKey: string | null;
  onToggleWorkKey: (key: string) => void;
}

export function ResumeContent({
  data,
  t,
  lang,
  page,
  direction,
  expandedWorkKey,
  onToggleWorkKey,
}: ResumeContentProps) {
  const renderWorkList = (items: ResumeData['internships'], prefix: string, className = "mb-8") => (
    <Section noGap className={className}>
      {items.map((item, idx) => {
        const key = `${prefix}-${idx}`;
        return (
          <WorkExperienceItem
            key={key}
            {...item}
            lang={lang}
            presentText={t.present}
            isExpanded={expandedWorkKey === key}
            onToggle={() => onToggleWorkKey(key)}
          />
        );
      })}
    </Section>
  );

  const renderOrganizations = (prefix: string, gapClassName?: string, className?: string) => (
    <Section gapClassName={gapClassName} className={className}>
      {data.organizations.map((item, idx) => (
        <ListItem
          key={`${prefix}-org-${item.location || idx}-${idx}`}
          year={item.year}
          title={item.role}
          titleEn={item.roleEn}
          subtitle={item.company}
          location={item.location}
          href={item.href}
          lang={lang}
        />
      ))}
    </Section>
  );

  const renderCommunity = (prefix: string, gapClassName?: string, className?: string, emptyMessage?: string) =>
    data.community.length > 0 ? (
      <Section gapClassName={gapClassName} className={className}>
        {data.community.map((item, idx) => (
          <ListItem
            key={`${prefix}-comm-${item.location || idx}-${idx}`}
            year={item.year}
            title={item.role}
            titleEn={item.roleEn}
            subtitle={item.company}
            subtitleEn={item.companyEn}
            location={item.location}
            href={item.href}
            lang={lang}
          />
        ))}
      </Section>
    ) : emptyMessage ? (
      <Section gapClassName={gapClassName} className={className}>
        <div className="py-8 text-center text-[#3D3D3D]/60 dark:text-[#F2F0EF]/60 text-[0.875rem] italic">
          {emptyMessage}
        </div>
      </Section>
    ) : null;

  const renderFormalSchool = (prefix: string, gapClassName?: string, className?: string) => (
    <Section gapClassName={gapClassName} className={className}>
      {data.formalSchool.map((item, idx) => (
        <ListItem
          key={`${prefix}-school-${item.year}-${idx}`}
          year={item.year}
          leftInfo={item.leftInfo}
          leftInfoEn={item.leftInfoEn}
          centerContent={true}
          title={item.title}
          subtitle={item.subtitle}
          subtitleEn={item.subtitleEn}
          location={item.location}
          href={item.href}
          lang={lang}
        />
      ))}
    </Section>
  );

  const renderTertiaryDegree = (prefix: string, gapClassName?: string, className?: string) => (
    <Section gapClassName={gapClassName} className={className}>
      {data.tertiaryDegree.map((item, idx) => (
        <ListItem
          key={`${prefix}-degree-${item.year}-${idx}`}
          year={item.year}
          yearBelowLocation={true}
          title={item.title}
          titleEn={item.titleEn}
          subtitle={item.subtitle}
          subtitleEn={item.subtitleEn}
          location={item.location}
          href={item.href}
          lang={lang}
        />
      ))}
    </Section>
  );

  const renderNonDegree = (prefix: string, gapClassName?: string, className?: string, emptyMessage?: string) =>
    data.nonDegree.length > 0 ? (
      <Section gapClassName={gapClassName} className={className}>
        {data.nonDegree.map((item, idx) => (
          <ListItem
            key={`${prefix}-nondegree-${item.year}-${idx}`}
            year={item.year}
            leftInfo={item.leftInfo}
            leftInfoEn={item.leftInfoEn}
            title={item.title}
            titleEn={item.titleEn}
            subtitle={item.subtitle}
            subtitleEn={item.subtitleEn}
            location={item.location}
            href={item.href}
            lang={lang}
          />
        ))}
      </Section>
    ) : emptyMessage ? (
      <Section gapClassName={gapClassName} className={className}>
        <div className="py-8 text-center text-[#3D3D3D]/60 dark:text-[#F2F0EF]/60 text-[0.875rem] italic">
          {emptyMessage}
        </div>
      </Section>
    ) : null;

  const renderCertificates = (prefix: string, gapClassName = "gap-[10pt]", className?: string) => (
    <Section gapClassName={gapClassName} className={className}>
      {data.certificate.map((item, idx) => (
        <ListItem
          key={`${prefix}-cert-${item.year}-${idx}`}
          year={item.year}
          title={item.title}
          titleEn={item.titleEn}
          subtitle={item.subtitle}
          subtitleEn={item.subtitleEn}
          location={item.location}
          locationId={item.locationId}
          href={item.href}
          lang={lang}
          hideArrow={true}
          paddingY="py-[5pt]"
        />
      ))}
    </Section>
  );

  const renderLicenses = (prefix: string, gapClassName = "gap-[10pt]", className?: string) => (
    <Section gapClassName={gapClassName} className={className}>
      {data.license.map((item, idx) => (
        <ListItem
          key={`${prefix}-lic-${item.year}-${idx}`}
          year={item.year}
          title={item.title}
          titleEn={item.titleEn}
          subtitle={item.subtitle}
          subtitleEn={item.subtitleEn}
          location={item.location}
          href={item.href}
          lang={lang}
          hideArrow={true}
          paddingY="py-[5pt]"
        />
      ))}
    </Section>
  );

  const renderWorkshops = (prefix: string, gapClassName = "gap-[10pt]", className?: string) => (
    <Section gapClassName={gapClassName} className={className}>
      {data.workshop.map((item, idx) => (
        <ListItem
          key={`${prefix}-workshop-${item.year}-${idx}`}
          year={item.year}
          title={item.title}
          titleEn={item.titleEn}
          subtitle={item.subtitle}
          subtitleEn={item.subtitleEn}
          location={item.location}
          href={item.href}
          lang={lang}
          hideArrow={true}
          paddingY="py-[5pt]"
        />
      ))}
    </Section>
  );

  const renderResearch = (prefix: string, gapClassName?: string, className?: string) => (
    <Section gapClassName={gapClassName} className={className}>
      {data.research.map((item, idx) => (
        <ListItem
          key={`${prefix}-research-${item.year}-${idx}`}
          year={item.year}
          title={item.title}
          titleEn={item.titleEn}
          subtitle={item.subtitle}
          subtitleEn={item.subtitleEn}
          location={item.location}
          href={item.href}
          lang={lang}
        />
      ))}
    </Section>
  );

  return (
    <main className="w-[62.34%] md:flex-1 min-w-0 flex flex-col bg-transparent transition-colors duration-300 z-10 overflow-hidden relative h-full">
      <div className="flex-1 relative overflow-hidden h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={pageTransitionVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ opacity: { duration: 0.3 } }}
            className="absolute inset-0 p-4 sm:p-6 lg:p-[2rem] overflow-y-auto [&::-webkit-scrollbar]:hidden"
          >
            {page === 0 && renderWorkList(data.internships, 'intern')}
            {page === 1 && renderWorkList(data.contractWork, 'contract')}
            {page === 2 && renderWorkList(data.remoteWork, 'remote')}
            {page === 3 && renderWorkList(data.freelanceWork, 'freelance')}
            {page === 4 && renderOrganizations('single')}
            {page === 5 && renderFormalSchool('single')}
            {page === 6 && renderTertiaryDegree('single')}
            {page === 7 && renderCertificates('single')}
            {page === 8 && renderLicenses('single')}
            {page === 9 && renderWorkshops('single')}

            {/* Combined Recap: Experience (All 4 Sub-categories) */}
            {page === 10 && (
              <div className="flex flex-col gap-[10pt] pb-6">
                <div>
                  <RecapGroupHeader title={t.internship} />
                  {renderWorkList(data.internships, 'recap-intern', 'mb-0')}
                </div>

                <div>
                  <RecapGroupHeader title={t.contract} />
                  {renderWorkList(data.contractWork, 'recap-contract', 'mb-0')}
                </div>

                <div>
                  <RecapGroupHeader title={t.remote} />
                  {renderWorkList(data.remoteWork, 'recap-remote', 'mb-0')}
                </div>

                <div>
                  <RecapGroupHeader title={t.freelance} />
                  {renderWorkList(data.freelanceWork, 'recap-freelance', 'mb-0')}
                </div>
              </div>
            )}

            {/* Combined Recap: Education (All 3 Sub-categories) */}
            {page === 11 && (
              <div className="flex flex-col gap-[10pt] pb-6">
                <div>
                  <RecapGroupHeader title={t.tertiaryDegree} />
                  {renderTertiaryDegree('recap', 'gap-[7pt]', 'mb-0')}
                </div>

                <div>
                  <RecapGroupHeader title={t.formalSchool} />
                  {renderFormalSchool('recap', 'gap-[7pt]', 'mb-0')}
                </div>

                {data.nonDegree.length > 0 && (
                  <div>
                    <RecapGroupHeader title={t.nonDegree} />
                    {renderNonDegree('recap', 'gap-[7pt]', 'mb-0')}
                  </div>
                )}
              </div>
            )}

            {/* Combined Recap: Competency (All 3 Sub-categories) */}
            {page === 12 && (
              <div className="flex flex-col gap-[10pt] pb-6">
                <div>
                  <RecapGroupHeader title={t.certificate} />
                  {renderCertificates('recap', 'gap-[7pt]', 'mb-0')}
                </div>

                <div>
                  <RecapGroupHeader title={t.license} />
                  {renderLicenses('recap', 'gap-[7pt]', 'mb-0')}
                </div>

                {data.workshop.length > 0 && (
                  <div>
                    <RecapGroupHeader title={t.workshop} />
                    {renderWorkshops('recap', 'gap-[7pt]', 'mb-0')}
                  </div>
                )}
              </div>
            )}

            {/* Combined Recap: Contribution (Sub-categories) */}
            {page === 13 && (
              <div className="flex flex-col gap-[10pt] pb-6">
                <div>
                  <RecapGroupHeader title={t.organizational} />
                  {renderOrganizations('recap', 'gap-[7pt]', 'mb-0')}
                </div>

                {data.community.length > 0 && (
                  <div>
                    <RecapGroupHeader title={t.community} />
                    {renderCommunity('recap', 'gap-[7pt]', 'mb-0')}
                  </div>
                )}

                {data.research.length > 0 && (
                  <div>
                    <RecapGroupHeader title={t.research} />
                    {renderResearch('recap', 'gap-[7pt]', 'mb-0')}
                  </div>
                )}
              </div>
            )}

            {page === 14 && renderResearch('single')}
            {page === 15 &&
              renderNonDegree(
                'single',
                undefined,
                undefined,
                lang === 'id' ? 'Belum ada data non-degree.' : 'No non-degree education records yet.'
              )}
            {page === 16 &&
              renderCommunity(
                'single',
                undefined,
                undefined,
                lang === 'id' ? 'Belum ada data komunitas.' : 'No community involvement records yet.'
              )}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
