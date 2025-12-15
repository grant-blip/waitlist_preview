      {/* Compare the Programs - Comparison Table */}
      <section className="py-20" style={{ backgroundColor: '#FAF8F5' }}>
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-luxury-serif font-bold text-foreground mb-4">
                Compare the Programs
              </h3>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Table Header */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
                <div className="text-left">
                  <h4 className="text-xl font-bold text-gray-900">Features</h4>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">General Admission</h4>
                  <p className="text-sm text-gray-600">($97)</p>
                </div>
                <div className="text-center">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">VIP Experience</h4>
                  <p className="text-sm text-gray-600">($177)</p>
                </div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-gray-200">
                {/* Row 1 */}
                <div className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors">
                  <div className="text-left">
                    <p className="text-gray-800">Full access to both days (10am-5pm) with all live training sessions</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors">
                  <div className="text-left">
                    <p className="text-gray-800">Live Q&A sessions with Victoria to get your specific questions answered</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors">
                  <div className="text-left">
                    <p className="text-gray-800">Lifetime access to all session recordings to watch at your own pace</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors">
                  <div className="text-left">
                    <p className="text-gray-800">Access to private support community with 17,000+ women</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* VIP ONLY FEATURES */}
                {/* Row 5 */}
                <div className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors bg-primary/5">
                  <div className="text-left">
                    <p className="text-gray-800 font-semibold">Complete Hormone Balancing Guide - Know exactly which hormones need attention</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-gray-400">—</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--rose-gold)' }}>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Row 6 */}
                <div className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors bg-primary/5">
                  <div className="text-left">
                    <p className="text-gray-800 font-semibold">14-Day Meal Plan & Recipes - Delicious meals that balance hormones & burn fat</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-gray-400">—</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--rose-gold)' }}>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Row 7 */}
                <div className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors bg-primary/5">
                  <div className="text-left">
                    <p className="text-gray-800 font-semibold">Personalized Protocol Template - Your custom roadmap to implement immediately</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-gray-400">—</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--rose-gold)' }}>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Row 8 */}
                <div className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors bg-primary/5">
                  <div className="text-left">
                    <p className="text-gray-800 font-semibold">Downloadable Workbooks & Progress Trackers - Stay accountable and see your transformation</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-gray-400">—</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--rose-gold)' }}>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Row 9 */}
                <div className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-50 transition-colors bg-primary/5">
                  <div className="text-left">
                    <p className="text-gray-800 font-semibold">Priority Q&A Access - Get your questions answered first</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <span className="text-gray-400">—</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--rose-gold)' }}>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Table Footer with Value */}
              <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-gray-50 to-gray-100 border-t-2 border-gray-200">
                <div className="text-left flex items-center">
                  <p className="text-lg font-bold text-gray-900">Total Value</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">$97</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold" style={{ color: 'var(--rose-gold)' }}>$558</p>
                  <p className="text-sm text-gray-600 mt-1">Early Bird: Just $177</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
              <a
                href={generalCheckoutUrl}
                className="inline-flex items-center justify-center w-full bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-full transition-colors text-lg"
              >
                Register - General Admission
              </a>
              <a
                href={vipCheckoutUrl}
                className="inline-flex items-center justify-center w-full font-bold py-4 px-8 rounded-full transition-colors text-lg text-white"
                style={{ 
                  background: 'linear-gradient(135deg, var(--rose-gold) 0%, #A05566 100%)',
                }}
              >
                Register - VIP Experience ⭐
              </a>
            </div>
          </div>
        </div>
      </section>
