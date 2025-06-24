'use client';

import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function EngineRoomSection() {
  const seedChartRef = useRef<HTMLCanvasElement>(null);
  const seriesAChartRef = useRef<HTMLCanvasElement>(null);
  const seriesBChartRef = useRef<HTMLCanvasElement>(null);
  const seedChartInstance = useRef<Chart|null>(null);
  const seriesAChartInstance = useRef<Chart|null>(null);
  const seriesBChartInstance = useRef<Chart|null>(null);

  useEffect(() => {
    // Destroy previous charts if they exist
    if (seedChartInstance.current) {
      seedChartInstance.current.destroy();
      seedChartInstance.current = null;
    }
    if (seriesAChartInstance.current) {
      seriesAChartInstance.current.destroy();
      seriesAChartInstance.current = null;
    }
    if (seriesBChartInstance.current) {
      seriesBChartInstance.current.destroy();
      seriesBChartInstance.current = null;
    }

    // Initialize charts when component mounts
    const seedCtx = seedChartRef.current?.getContext('2d');
    const seriesACtx = seriesAChartRef.current?.getContext('2d');
    const seriesBCtx = seriesBChartRef.current?.getContext('2d');

    if (seedCtx && seriesACtx && seriesBCtx) {
      // Seed Round Chart
      seedChartInstance.current = new Chart(seedCtx, {
        type: 'doughnut',
        data: {
          labels: ['R&D (50%)', 'Team (30%)', 'Clinical Trials (15%)', 'Regulatory (5%)'],
          datasets: [{
            data: [50, 30, 15, 5],
            backgroundColor: ['#0891b2', '#06b6d4', '#67e8f9', '#a5f3fc'],
            borderWidth: 0,
          }]
        },
        options: {
          cutout: '70%',
          plugins: { legend: { display: false } },
        }
      });

      // Series A Chart
      seriesAChartInstance.current = new Chart(seriesACtx, {
        type: 'doughnut',
        data: {
          labels: ['R&D (40%)', 'Team (25%)', 'Clinical Trials (25%)', 'Market Access (10%)'],
          datasets: [{
            data: [40, 25, 25, 10],
            backgroundColor: ['#0891b2', '#06b6d4', '#67e8f9', '#a5f3fc'],
            borderWidth: 0,
          }]
        },
        options: {
          cutout: '70%',
          plugins: { legend: { display: false } },
        }
      });

      // Series B Chart
      seriesBChartInstance.current = new Chart(seriesBCtx, {
        type: 'doughnut',
        data: {
          labels: ['R&D (30%)', 'Team (20%)', 'Market Expansion (35%)', 'PMCF (15%)'],
          datasets: [{
            data: [30, 20, 35, 15],
            backgroundColor: ['#0891b2', '#06b6d4', '#67e8f9', '#a5f3fc'],
            borderWidth: 0,
          }]
        },
        options: {
          cutout: '70%',
          plugins: { legend: { display: false } },
        }
      });
    }
    // Cleanup function to destroy charts on unmount
    return () => {
      if (seedChartInstance.current) {
        seedChartInstance.current.destroy();
        seedChartInstance.current = null;
      }
      if (seriesAChartInstance.current) {
        seriesAChartInstance.current.destroy();
        seriesAChartInstance.current = null;
      }
      if (seriesBChartInstance.current) {
        seriesBChartInstance.current.destroy();
        seriesBChartInstance.current = null;
      }
    };
  }, []);


  return (
    <section id="engine" className="py-8">
      <header className="text-center max-w-4xl mx-auto mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">The Engine Room</h1>
        <p className="text-sm text-gray-600 mt-2">
          Core organizational and financial strategies powering Mely&apos;s growth, from talent acquisition to funding.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Talent & IP Strategy</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-cyan-700 text-lg mb-2">Talent Acquisition & Retention</h4>
              <p className="text-sm">
                Attract top AI/ML talent in France using competitive salaries (€120k-€180k for senior roles) and 
                tax-advantaged BSPCEs to foster an ownership culture.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-cyan-700 text-lg mb-2">Multi-Layered Intellectual Property</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <div>
                    <span className="font-semibold">Patents:</span> For technical AI applications that solve a technical problem.
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <div>
                    <span className="font-semibold">Trade Secrets:</span> For proprietary algorithms, model parameters, and training data know-how.
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="font-semibold mr-2">•</span>
                  <div>
                    <span className="font-semibold">Copyright:</span> Automatically protects the software source code from direct copying.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Funding & Allocation Strategy</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <h4 className="font-semibold text-sm mb-3">Seed</h4>
              <div className="chart-container mx-auto">
                <canvas ref={seedChartRef}></canvas>
                <p className="text-xs mt-2 font-medium">€2.5M Target</p>
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-sm mb-3">Series A</h4>
              <div className="chart-container mx-auto">
                <canvas ref={seriesAChartRef}></canvas>
                <p className="text-xs mt-2 font-medium">€8-12M Target</p>
              </div>
            </div>
            <div className="text-center">
              <h4 className="font-semibold text-sm mb-3">Series B</h4>
              <div className="chart-container mx-auto">
                <canvas ref={seriesBChartRef}></canvas>
                <p className="text-xs mt-2 font-medium">€20-30M Target</p>
              </div>
            </div>
          </div>
          <div className="mt-6 text-xs text-gray-600">
            <p className="font-medium mb-2">Allocation by Round:</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-cyan-100 p-2 rounded">
                <span className="font-medium">R&D:</span> 50% → 40% → 30%
              </div>
              <div className="bg-cyan-50 p-2 rounded">
                <span className="font-medium">Team:</span> 30% → 25% → 20%
              </div>
              <div className="bg-cyan-100 p-2 rounded">
                <span className="font-medium">Clinical:</span> 15% → 25% → 20%
              </div>
              <div className="bg-cyan-50 p-2 rounded">
                <span className="font-medium">Market:</span> 5% → 10% → 30%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
