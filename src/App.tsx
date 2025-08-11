import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Users, 
  Award, 
  Star,
  Play,
  ChevronDown,
  Shield,
  Clock,
  Target,
  Zap,
  BarChart3,
  Phone,
  Mail,
  ArrowUp
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState({});
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const testimonials = [
    {
      text: "Revenue jumped 340% in just 90 days. Their system is exactly what every agency needs to scale predictably.",
      author: "Sarah Chen",
      company: "Digital Growth Co.",
      result: "+340% Revenue"
    },
    {
      text: "From $50K to $180K monthly recurring revenue in 6 months. The ROI speaks for itself.",
      author: "Marcus Rodriguez",
      company: "Creative Scale Agency",
      result: "+260% MRR"
    },
    {
      text: "Finally, a partner who delivers what they promise. Our client acquisition costs dropped 60%.",
      author: "Jennifer Walsh",
      company: "Peak Performance Marketing",
      result: "-60% CAC"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">AgencyAmp</span>
          </div>
          <button 
            onClick={() => scrollToSection('cta-form')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Get Your Growth Plan
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm font-medium">
                  <Star className="w-4 h-4" />
                  <span>Trusted by 1,247+ Agencies</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Agency Growth{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-400">
                    Without Guesswork
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
                  Book 3x more qualified prospects in 30 days using our proven client acquisition system. 
                  <strong className="text-white"> Guaranteed results or 100% refund.</strong>
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 py-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">340%</div>
                  <div className="text-sm text-gray-400">Avg Revenue Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">27</div>
                  <div className="text-sm text-gray-400">Days to First Results</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">95%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('cta-form')}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center space-x-2 group"
                >
                  <span>Book Your Free Growth Plan Call</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-white/5 flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Success Stories</span>
                </button>
              </div>

              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No long-term contracts</span>
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Results in 30 days</span>
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>100% money-back guarantee</span>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Monthly Revenue</span>
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-sm text-gray-400">Before</div>
                          <div className="text-2xl font-bold">$45K</div>
                        </div>
                        <div className="flex-1 mx-4">
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-gradient-to-r from-red-500 to-orange-500 w-1/3 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400">After</div>
                          <div className="text-2xl font-bold text-green-400">$153K</div>
                        </div>
                      </div>
                      <div className="text-center text-orange-400 font-semibold">+240% Growth in 90 Days</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-gray-600 mb-8 font-medium">Trusted by industry-leading agencies</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {['TechFlow Agency', 'Growth Labs', 'Digital Boost', 'Scale Co.', 'Peak Marketing', 'Velocity Digital'].map((company, index) => (
              <div key={index} className="text-gray-700 font-semibold text-lg hover:opacity-100 transition-opacity duration-300">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section 
        id="value-prop" 
        data-animate
        className={`py-20 transition-all duration-1000 ${isVisible['value-prop'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Only Growth System Built 
              <span className="text-orange-500"> Specifically for Agencies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Stop wasting money on generic marketing tactics. Get a customized client acquisition system 
              that's generated <strong>$127M+ in new revenue</strong> for agencies just like yours.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Laser-Targeted Prospect Identification",
                description: "We identify your perfect-fit prospects using 47 data points, not guesswork. Average 89% match rate.",
                result: "3.2x more qualified leads"
              },
              {
                icon: Zap,
                title: "Conversion-Optimized Outreach System",
                description: "Multi-channel sequences that book meetings, not spam folders. Based on 50,000+ sent messages.",
                result: "67% higher response rates"
              },
              {
                icon: BarChart3,
                title: "Predictable Revenue Dashboard",
                description: "Real-time tracking of every metric that matters. Know your exact ROI and pipeline velocity.",
                result: "100% revenue predictability"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                <div className="text-orange-500 font-semibold">{feature.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Storytelling Section */}
      <section 
        id="visual-story" 
        data-animate
        className={`py-20 bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden transition-all duration-1000 ${isVisible['visual-story'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              The Journey from 
              <span className="text-orange-500"> Struggling to Scaling</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how agencies transform their business in just 90 days using our proven system
            </p>
          </div>

          <div className="relative">
            {/* Timeline Path */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-red-200 via-yellow-200 to-green-200 transform -translate-y-1/2 rounded-full"></div>
            <div className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 transform -translate-y-1/2 rounded-full animate-pulse" style={{width: '100%', animation: 'grow 3s ease-in-out infinite'}}></div>

            {/* Story Steps */}
            <div className="grid lg:grid-cols-4 gap-8 relative z-10">
              {[
                {
                  step: "Day 1",
                  title: "The Struggle",
                  description: "Inconsistent leads, competing on price, working 80+ hours",
                  icon: "😰",
                  metrics: ["$45K/month", "23% profit", "2-3 leads/week"],
                  color: "red",
                  delay: "0s"
                },
                {
                  step: "Day 30",
                  title: "The System",
                  description: "Implementing proven frameworks, targeting ideal prospects",
                  icon: "🎯",
                  metrics: ["$67K/month", "28% profit", "8-12 leads/week"],
                  color: "yellow",
                  delay: "0.5s"
                },
                {
                  step: "Day 60",
                  title: "The Momentum",
                  description: "Qualified prospects reaching out, premium pricing accepted",
                  icon: "🚀",
                  metrics: ["$98K/month", "35% profit", "15-20 leads/week"],
                  color: "blue",
                  delay: "1s"
                },
                {
                  step: "Day 90",
                  title: "The Success",
                  description: "Predictable revenue, premium positioning, work-life balance",
                  icon: "🏆",
                  metrics: ["$153K/month", "42% profit", "25+ leads/week"],
                  color: "green",
                  delay: "1.5s"
                }
              ].map((story, index) => (
                <div 
                  key={index}
                  className={`relative group transition-all duration-1000 hover:scale-105`}
                  style={{animationDelay: story.delay}}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 w-6 h-6 bg-${story.color}-500 rounded-full border-4 border-white shadow-lg z-20 group-hover:scale-125 transition-transform duration-300`}></div>
                  
                  {/* Story Card */}
                  <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 mt-8 group-hover:border-${story.color}-200`}>
                    <div className="text-center mb-4">
                      <div className="text-3xl mb-2">{story.icon}</div>
                      <div className={`text-sm font-semibold text-${story.color}-600 mb-1`}>{story.step}</div>
                      <h3 className="text-xl font-bold text-gray-900">{story.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 text-center mb-6 leading-relaxed">
                      {story.description}
                    </p>
                    
                    <div className="space-y-2">
                      {story.metrics.map((metric, metricIndex) => (
                        <div 
                          key={metricIndex}
                          className={`text-center p-2 bg-${story.color}-50 rounded-lg border border-${story.color}-100`}
                        >
                          <span className={`font-semibold text-${story.color}-700`}>{metric}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="mt-4">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 bg-gradient-to-r from-${story.color}-400 to-${story.color}-600 rounded-full transition-all duration-2000 ease-out`}
                          style={{width: `${(index + 1) * 25}%`}}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Your Agency's Transformation Starts Today
              </h3>
              <p className="text-gray-600 mb-6">
                Join 1,247+ agencies who've already made the leap from struggling to scaling. 
                The only question is: will you be next?
              </p>
              <button 
                onClick={() => scrollToSection('cta-form')}
                className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center space-x-2 mx-auto group"
              >
                <span>Start Your Transformation</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style jsx>{`
          @keyframes grow {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fadeInUp {
            animation: fadeInUp 0.8s ease-out forwards;
          }
        `}</style>
      </section>

      {/* Social Proof - Testimonials */}
      <section 
        id="testimonials" 
        data-animate
        className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible['testimonials'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Real Results from Real Agencies
            </h2>
            <p className="text-xl text-gray-600">
              Don't take our word for it. Here's what happens when agencies implement our system:
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 transition-all duration-500 hover:shadow-2xl ${
                  activeTestimonial === index ? 'ring-2 ring-orange-500 scale-105' : ''
                }`}
                onMouseEnter={() => setActiveTestimonial(index)}
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.company}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-500">{testimonial.result}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Average Results Across All Clients</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-orange-300">312%</div>
                <div className="text-blue-100">Revenue Increase</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-300">4.7x</div>
                <div className="text-blue-100">More Qualified Leads</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-300">89%</div>
                <div className="text-blue-100">Client Retention Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-300">23</div>
                <div className="text-blue-100">Days to First Results</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Deep Dive */}
      <section 
        id="benefits" 
        data-animate
        className={`py-20 transition-all duration-1000 ${isVisible['benefits'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Stop Competing on Price. 
                <span className="text-orange-500"> Start Commanding Premium Fees.</span>
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Predictable $50K-$200K Monthly Revenue Streams",
                    description: "Our clients typically see 3-5x revenue growth within 90 days. No more feast-or-famine cycles."
                  },
                  {
                    title: "Premium Positioning That Eliminates Price Objections",
                    description: "Charge 40-70% higher fees when prospects see you as the obvious choice, not a commodity."
                  },
                  {
                    title: "Automated Lead Generation That Works While You Sleep",
                    description: "Wake up to qualified prospects in your inbox. Our system generates leads 24/7/365."
                  },
                  {
                    title: "Bulletproof Sales Process with 89% Close Rate",
                    description: "Stop chasing prospects. Use our proven scripts and frameworks to close more deals faster."
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex space-x-4 group">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mt-1 group-hover:scale-125 transition-transform duration-300">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-2xl border border-gray-100">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Typical Agency Transformation</h3>
                    <p className="text-gray-600">90-Day Results Timeline</p>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { period: "Days 1-30", metric: "Lead Quality", before: "23%", after: "78%", color: "blue" },
                      { period: "Days 31-60", metric: "Monthly Revenue", before: "$45K", after: "$89K", color: "green" },
                      { period: "Days 61-90", metric: "Profit Margin", before: "18%", after: "34%", color: "orange" }
                    ].map((item, index) => (
                      <div key={index} className="bg-white rounded-xl p-4 border border-gray-100">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold text-gray-900">{item.period}</span>
                          <span className="text-sm text-gray-600">{item.metric}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-sm">
                            <span className="text-gray-500">Before: </span>
                            <span className="font-semibold">{item.before}</span>
                          </div>
                          <ArrowRight className={`w-4 h-4 text-${item.color}-500`} />
                          <div className="text-sm">
                            <span className="text-gray-500">After: </span>
                            <span className={`font-semibold text-${item.color}-600`}>{item.after}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Reversal / Guarantee */}
      <section 
        id="guarantee" 
        data-animate
        className={`py-20 bg-gradient-to-br from-orange-500 to-pink-500 text-white transition-all duration-1000 ${isVisible['guarantee'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Shield className="w-16 h-16 mx-auto mb-8" />
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Our Iron-Clad, 100% Money-Back Guarantee
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-xl leading-relaxed mb-6">
              We're so confident in our system that we guarantee you'll see measurable results within 60 days, 
              or we'll refund every penny—no questions asked. Plus, you keep everything we've built for you.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Clock className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">60-Day Guarantee</div>
                <div className="text-sm opacity-90">Full money back if not satisfied</div>
              </div>
              <div className="text-center">
                <Target className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Measurable Results</div>
                <div className="text-sm opacity-90">Minimum 2x more qualified leads</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <div className="font-semibold">Keep Everything</div>
                <div className="text-sm opacity-90">All systems, scripts, and training</div>
              </div>
            </div>
            <p className="text-lg font-semibold">
              The only risk is missing out on the revenue growth your agency deserves.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        id="faq" 
        data-animate
        className={`py-20 bg-gray-50 transition-all duration-1000 ${isVisible['faq'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about working with us
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How quickly will I see results?",
                answer: "Most agencies see their first qualified leads within 14 days and measurable revenue increases within 30-45 days. Our average client sees 3x more leads in their first 60 days."
              },
              {
                question: "What size agencies do you work with?",
                answer: "We work with agencies generating $300K-$5M annually. Whether you're a boutique shop or scaling operation, our system adapts to your size and goals."
              },
              {
                question: "Is this just another lead generation service?",
                answer: "No. We build you a complete client acquisition system including positioning, messaging, outreach, follow-up, and closing processes. You own everything."
              },
              {
                question: "What's the investment and how does billing work?",
                answer: "Investment varies based on your current revenue and growth goals. We offer flexible payment options and our 60-day guarantee means zero risk to you."
              },
              {
                question: "Do you work with agencies in my industry?",
                answer: "Yes. Our system works across all agency types: digital marketing, creative, PR, consulting, development, and more. We adapt our approach to your specific niche."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section 
        id="cta-form" 
        data-animate
        className={`py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white transition-all duration-1000 ${isVisible['cta-form'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to 3x Your Agency Revenue?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book your free 20-minute growth plan call. We'll analyze your current situation and 
              show you exactly how to implement our system for maximum results.
            </p>
            <div className="flex justify-center items-center space-x-4 text-sm text-gray-400 mb-8">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>No sales pitch</span>
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Actionable insights</span>
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>100% confidential</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all duration-300"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all duration-300"
                    placeholder="Smith"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Business Email *</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all duration-300"
                  placeholder="john@youragency.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all duration-300"
                  placeholder="(555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Current Monthly Revenue *</label>
                <select 
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/20 text-white focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all duration-300"
                >
                  <option value="">Select range...</option>
                  <option value="25k-50k">$25K - $50K</option>
                  <option value="50k-100k">$50K - $100K</option>
                  <option value="100k-250k">$100K - $250K</option>
                  <option value="250k-500k">$250K - $500K</option>
                  <option value="500k+">$500K+</option>
                </select>
              </div>

              <button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25 flex items-center justify-center space-x-2 group"
              >
                <span>Book My Free Growth Plan Call</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              
              <p className="text-xs text-gray-400 text-center">
                🔒 Your information is 100% secure and will never be shared. 
                By submitting, you agree to receive follow-up communications about our services.
              </p>
            </form>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">Prefer to talk first?</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <a href="tel:+1234567890" className="flex items-center space-x-2 text-white hover:text-orange-400 transition-colors duration-300">
                <Phone className="w-4 h-4" />
                <span>(123) 456-7890</span>
              </a>
              <a href="mailto:hello@agencyamp.com" className="flex items-center space-x-2 text-white hover:text-orange-400 transition-colors duration-300">
                <Mail className="w-4 h-4" />
                <span>hello@agencyamp.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">AgencyAmp</span>
              </div>
              <p className="text-gray-400 text-sm">
                The proven client acquisition system for ambitious agencies.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>About Us</div>
                <div>Case Studies</div>
                <div>Careers</div>
                <div>Contact</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Blog</div>
                <div>Free Tools</div>
                <div>Templates</div>
                <div>Webinars</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
                <div>Cookie Policy</div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © 2025 AgencyAmp. All rights reserved. | Results may vary. Individual success depends on effort and market conditions.
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}

export default App;