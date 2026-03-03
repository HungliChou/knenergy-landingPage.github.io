import React from 'react';
import { ONGOING_PROJECTS } from '../constants';
import { ArrowLeft, Zap, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const CLEANING_ROBOT_LINK_PATH = '/services/cleaning-robot';

function renderWithSmartRobotLink(text: string, keyPrefix: string): React.ReactNode {
  const parts = text.split(/(智能機器人)/g);
  return parts.map((part, i) =>
    part === '智能機器人' ? (
      <Link
        key={`${keyPrefix}-${i}`}
        to={CLEANING_ROBOT_LINK_PATH}
        className="text-primary underline hover:no-underline font-medium"
      >
        智能機器人
      </Link>
    ) : (
      part
    )
  );
}

const OngoingProjects: React.FC = () => {
  return (
    <section className="pt-32 pb-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-gray-500 hover:text-primary transition-colors">
            <ArrowLeft size={16} className="mr-2" /> 回首頁
          </Link>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">進行中案場</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary"></div>
            <p className="mt-4 text-gray-600 max-w-2xl">
              如為特殊案場，我們會依照案場現況為您提供建置方案及解決方法，符合廠主需求及獲得合理租金。
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-16">
          {ONGOING_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-14">
                  {/* 圖片區（全部統一寬度，文字起始位置一致） */}
                  <div className="flex-shrink-0 space-y-4 lg:w-80 max-w-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-bold">
                        <Zap size={18} />
                        {project.capacity}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    </div>
                    <div className="space-y-4">
                      {(() => {
                        const labels = project.imageLabels ?? [];
                        const featuredIndex = labels.findIndex((l) => l === '案場' || l === '現況');
                        const hasFeatured = featuredIndex >= 0;
                        const featuredSrc = hasFeatured ? project.images[featuredIndex] : null;
                        const featuredLabel = hasFeatured ? labels[featuredIndex] : null;
                        const restEntries = project.images
                          .map((src, idx) => ({ src, label: labels[idx] }))
                          .filter((_, idx) => !hasFeatured || idx !== featuredIndex);
                        return (
                          <>
                            {featuredSrc && (
                              <div className="w-full">
                                <div className="relative rounded-xl overflow-hidden bg-gray-50 border border-gray-100 aspect-[4/3] max-w-full">
                                  <img
                                    src={featuredSrc}
                                    alt={featuredLabel ?? project.title}
                                    className="w-full h-full object-contain"
                                  />
                                  {featuredLabel && (
                                    <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                                      {featuredLabel}
                                    </span>
                                  )}
                                </div>
                              </div>
                            )}
                            {restEntries.length > 0 && (
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {restEntries.map(({ src, label }, idx) => (
                                  <div
                                    key={`${project.id}-rest-${idx}`}
                                    className="relative rounded-xl overflow-hidden bg-gray-50 border border-gray-100 aspect-[4/3]"
                                  >
                                    <img
                                      src={src}
                                      alt={label ?? `${project.title} ${idx + 1}`}
                                      className="w-full h-full object-contain"
                                    />
                                    {label && (
                                      <span className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                                        {label}
                                      </span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  </div>
                  {/* 說明區 */}
                  <div className="flex-1">
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {project.id === 'special4'
                        ? renderWithSmartRobotLink(project.summary, `${project.id}-summary`)
                        : project.summary}
                    </p>
                    <div className="space-y-3">
                      {project.details.map((item, i) => (
                        <div key={i} className="flex gap-3">
                          <Building2 className="flex-shrink-0 mt-0.5 text-primary" size={18} />
                          <div>
                            <span className="font-semibold text-gray-800">{item.label}：</span>
                            <span className="text-gray-600 text-sm">
                              {project.id === 'special4'
                                ? renderWithSmartRobotLink(item.text, `${project.id}-detail-${i}`)
                                : item.text}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OngoingProjects;
