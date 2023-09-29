import { TitleWithSubtitle } from '@/components/title'
import { content } from '@/config/content'
import { ExperienceItem } from '@/components/experience-item'
import { timeUtil } from '@/util/timeUtil'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-items-start p-24">
      <TitleWithSubtitle title={'Dejan Petković'} subtitle={'Curriculum Vitae'} />
      <div className={'flex flex-col items-start justify-between p-24'}>
        {content.experiences.map((e) => (
          <ExperienceItem
            key={e.company}
            role={e.role}
            company={e.company}
            from={new Date(e.from)}
            to={new Date(e.to ?? timeUtil.now())}
            highlights={e.highlights}
          />
        ))}
      </div>
    </main>
  )
}
