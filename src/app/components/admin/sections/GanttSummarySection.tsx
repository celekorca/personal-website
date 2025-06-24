'use client';

export default function GanttSummarySection() {
  return (
    <>
      <section id="gantt-summary" className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">5-Year Gantt Chart</h2>
            <p className="text-sm text-gray-600 mt-2">
              Visual timeline of strategic initiatives and key activities across the first five years.
            </p>
          </header>
          
          <div className="bg-white p-6 rounded-lg shadow-lg overflow-x-auto">
              <div className="min-w-[1200px] gantt-grid">
              {/* GANTT HEADER */}
              <div className="font-semibold text-sm sticky left-0 bg-gray-50 z-20 flex items-center p-2">Area</div>
              <div className="col-span-4 text-center py-2 border-b-2 font-semibold">Year 1</div>
              <div className="col-span-4 text-center py-2 border-b-2 font-semibold">Year 2</div>
              <div className="col-span-4 text-center py-2 border-b-2 font-semibold">Year 3</div>
              <div className="col-span-4 text-center py-2 border-b-2 font-semibold">Year 4</div>
              <div className="col-span-4 text-center py-2 border-b-2 font-semibold">Year 5</div>

              <div className="font-semibold text-sm sticky left-0 bg-gray-50 z-20 flex items-center p-2"></div>
              {Array(20).fill(0).map((_, i) => (
                <div key={`q-${i}`} className="text-center text-xs text-gray-500 py-2">
                  Q{(i % 4) + 1}
                </div>
              ))}
          
              {/* STACKED GANTT ITEMS: dynamic rendering (phase 1) */}
              {[
                {
                  area: 'Product Development Milestones & KPIs',
                  color: 'bg-cyan-600',
                  phases: [
                    { label: 'MVP & Foundation', start: 0, duration: 4 },
                    { label: 'Iteration & Validation', start: 4, duration: 4 },
                    { label: 'Pivotal Trials Prep', start: 8, duration: 4 },
                    { label: 'Reg. Approval & Launch', start: 12, duration: 4 },
                    { label: 'EU Expansion', start: 16, duration: 4 },
                  ],
                },
                {
                  area: 'Regulatory / Compliance Milestones & KPIs',
                  color: 'bg-orange-500',
                  phases: [
                    { label: 'QMS & MDR Docs', start: 4, duration: 4 },
                    { label: 'PD CE Submission', start: 8, duration: 4 },
                    { label: 'FDA Breakthrough App', start: 10, duration: 1 },
                    { label: 'PD CE Mark Obtained', start: 11, duration: 1 },
                  ],
                },
                {
                  area: 'Clinical Validation Milestones & KPIs',
                  color: 'bg-teal-500',
                  phases: [
                    { label: 'PD Validation', start: 2, duration: 4 },
                    { label: 'AD Validation', start: 6, duration: 4 },
                  ],
                },
                {
                  area: 'Commercialization / Market Access Milestones & KPIs',
                  color: 'bg-indigo-500',
                  phases: [
                    { label: 'PECAN Launch', start: 13, duration: 1 },
                    { label: 'FR Launch', start: 15, duration: 1 },
                    { label: 'EU Expand', start: 17, duration: 2 },
                  ],
                },
                {
                  area: 'Organizational Development Milestones & KPIs',
                  color: 'bg-purple-500',
                  phases: [
                    { label: 'Team Scale Up', start: 0, duration: 20 },
                  ],
                },
                {
                  area: 'Financial Milestones & KPIs',
                  color: 'bg-green-500',
                  phases: [
                    { label: 'Series A', start: 1, duration: 1 },
                    { label: 'Series B', start: 5, duration: 1 },
                    { label: 'Series C', start: 9, duration: 1 },
                  ],
                },
              ].map((row, idx) => (
                <>
                  <div className="font-semibold text-xs sticky left-0 bg-white z-10 flex items-center p-2 border-t">
                    {row.area}
                  </div>
                  <div className="col-span-20 relative h-10">
                    {/* quarter grid */}
                    <div className="absolute inset-0 grid grid-cols-20 z-0">
                      {Array(20)
                        .fill(0)
                        .map((_, i) => (
                          <div
                            key={`grid-${idx}-${i}`}
                            className={`h-full ${i % 4 === 3 ? 'border-r-2 border-gray-300' : 'border-r border-gray-200'}`}
                          ></div>
                        ))}
                    </div>
                    {/* bars */}
                    {row.phases.map((p) => (
                      <div
                        key={p.label}
                        className={`${row.color} absolute h-7 rounded flex items-center justify-center text-white text-[10px] px-1 truncate`}
                        style={{
                          left: `${(p.start / 20) * 100}%`,
                          width: `${(p.duration / 20) * 100}%`,
                          top: '50%',
                          transform: 'translateY(-50%)',
                        }}
                        title={p.label}
                      >
                        {p.label}
                      </div>
                    ))}
                  </div>
                </>
              ))}
              {/* Legend */}
              <div className="mt-8 pt-4 border-t border-gray-200">
                <h4 className="font-semibold text-sm mb-3">Legend</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
                  {[
                    { label: 'Product Development', color: 'bg-cyan-600' },
                    { label: 'Regulatory / Compliance', color: 'bg-orange-500' },
                    { label: 'Clinical Validation', color: 'bg-teal-500' },
                    { label: 'Commercialization', color: 'bg-indigo-500' },
                    { label: 'Organizational', color: 'bg-purple-500' },
                    { label: 'Financial', color: 'bg-green-500' },
                    { label: 'Key Milestone', color: 'w-1 h-6 bg-red-500', isLine: true },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center">
                      <div className={`${item.color} ${item.isLine ? 'w-4 h-1' : 'w-4 h-4 rounded'} mr-2`}></div>
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
