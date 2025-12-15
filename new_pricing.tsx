            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-luxury-serif font-bold text-foreground mb-4">
                Choose Your Experience
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Both tiers give you access to the complete 2-day transformation
                event. VIP members receive exclusive bonuses worth $361.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* General Admission */}
              <div 
                className="rounded-3xl p-8 border-2 border-white/30 backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(107, 114, 128, 0.85)' }}
              >
                {/* Product Mockup Placeholder */}
                <div className="mb-8 flex items-center justify-center min-h-[200px]">
                  <div className="text-center">
                    <div className="w-48 h-64 mx-auto bg-gray-800 rounded-lg shadow-2xl flex items-center justify-center mb-4">
                      <div className="text-white text-center p-6">
                        <p className="text-sm mb-2">The</p>
                        <p className="text-3xl font-luxury-serif font-bold mb-2">Longevity</p>
                        <p className="text-3xl font-luxury-serif font-bold mb-4">Reset</p>
                        <p className="text-xs">Essentials Guide</p>
                        <div className="mt-4 px-3 py-1 rounded text-xs" style={{ backgroundColor: 'var(--champagne-gold)' }}>
                          Victoria O'Sullivan
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="text-3xl font-bold text-white text-center mb-2">
                  General Admission
                </h4>
                
                <p className="text-5xl font-bold text-white text-center mb-6">
                  $97
                </p>

                <p className="text-white/90 text-center mb-6 text-lg">
                  Perfect for getting started on your transformation journey.
                </p>

                <ul className="space-y-3 mb-8 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Full access to both days (10am-5pm)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>All live training sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Live Q&A with Victoria</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Lifetime access to recordings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span>Private community access</span>
                  </li>
                </ul>

                <a
                  href={generalCheckoutUrl}
                  className="inline-flex items-center justify-center w-full bg-white hover:bg-gray-50 text-gray-900 font-bold py-4 px-8 rounded-full transition-colors text-lg"
                >
                  Register Now
                </a>
              </div>

              {/* VIP Experience */}
              <div 
                className="rounded-3xl p-8 border-2 border-white/30 backdrop-blur-sm relative"
                style={{ backgroundColor: 'rgba(107, 114, 128, 0.85)' }}
              >
                {/* Most Popular Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div
                    className="text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--rose-gold) 0%, #A05566 100%)",
                    }}
                  >
                    ⭐ MOST POPULAR
                  </div>
                </div>

                {/* Product Mockup Placeholder */}
                <div className="mb-8 flex items-center justify-center min-h-[200px]">
                  <div className="flex gap-4 items-center">
                    {/* Phone mockup */}
                    <div className="w-24 h-48 bg-gray-800 rounded-xl shadow-2xl flex items-center justify-center">
                      <div className="text-white text-xs text-center p-2">
                        <p className="font-bold">App</p>
                        <p className="text-[8px] mt-1">Access</p>
                      </div>
                    </div>
                    {/* Book mockup */}
                    <div className="w-40 h-56 bg-gray-800 rounded-lg shadow-2xl flex items-center justify-center">
                      <div className="text-white text-center p-4">
                        <p className="text-xs mb-1">The</p>
                        <p className="text-2xl font-luxury-serif font-bold mb-1">Longevity</p>
                        <p className="text-2xl font-luxury-serif font-bold mb-2">Reset</p>
                        <p className="text-[10px] mb-3">Complete Program</p>
                        <div className="px-2 py-1 rounded text-[8px]" style={{ backgroundColor: 'var(--champagne-gold)' }}>
                          Victoria O'Sullivan
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="text-3xl font-bold text-white text-center mb-2">
                  VIP Experience
                </h4>
                
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-2xl font-bold text-white/60 line-through">
                    $197
                  </span>
                  <span className="text-5xl font-bold text-white">
                    $177
                  </span>
                </div>

                <div className="inline-block px-4 py-1 rounded-full mb-4 mx-auto block w-fit" style={{ backgroundColor: 'var(--champagne-gold)' }}>
                  <span className="text-sm font-bold text-gray-900">
                    Early Bird Price - Save $20!
                  </span>
                </div>

                <p className="text-white/90 text-center mb-6 text-lg">
                  Best for those who want expert guidance, live coaching, and a supportive community.
                </p>

                <p className="text-white font-bold mb-4">
                  Includes everything in General Admission, plus:
                </p>

                <ul className="space-y-3 mb-8 text-white/90">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span><strong className="text-white">Complete Hormone Balancing Guide</strong> - Know exactly which hormones need attention</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span><strong className="text-white">14-Day Meal Plan & Recipes</strong> - Delicious meals that balance hormones & burn fat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span><strong className="text-white">Personalized Protocol Template</strong> - Your custom roadmap to implement immediately</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span><strong className="text-white">Workbooks & Progress Trackers</strong> - Stay accountable and see your transformation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-1">•</span>
                    <span><strong className="text-white">Priority Q&A Access</strong> - Get your questions answered first</span>
                  </li>
                </ul>

                <div className="mb-6 p-4 rounded-xl text-center" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
                  <p className="text-sm font-bold text-white">
                    Total Value: $558
                  </p>
                  <p className="text-xs text-white/80">
                    Early Bird: Just $177 (Regular $197)
                  </p>
                </div>

                <a
                  href={vipCheckoutUrl}
                  className="inline-flex items-center justify-center w-full font-bold py-4 px-8 rounded-full transition-colors text-lg text-gray-900"
                  style={{ 
                    background: 'linear-gradient(135deg, var(--champagne-gold) 0%, #D4AF37 100%)',
                  }}
                >
                  Get the VIP Experience
                </a>
              </div>
            </div>

            {/* Security & Guarantee Badges */}
            <div className="mt-12 space-y-4">
              {/* 100% Guarantee Badge */}
              <div className="flex items-center justify-center gap-4 p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 shadow-sm max-w-3xl mx-auto">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-bold text-gray-900 mb-1">100% Money-Back Guarantee</h4>
                  <p className="text-sm text-gray-700">If you're not completely satisfied after Day 1, we'll refund your investment—no questions asked.</p>
                </div>
              </div>
            </div>
