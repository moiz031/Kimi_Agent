import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, DollarSign, CheckCircle, Briefcase, Heart, Coffee, BookOpen, Plane, Gift } from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const departments = ['All', 'Marketing', 'Design', 'Development', 'Sales', 'Operations'];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Above-market compensation with regular reviews',
    },
    {
      icon: Heart,
      title: 'Health Insurance',
      description: 'Comprehensive medical, dental, and vision coverage',
    },
    {
      icon: Coffee,
      title: 'Flexible Schedule',
      description: 'Work when you\'re most productive',
    },
    {
      icon: BookOpen,
      title: 'Learning Budget',
      description: '$2,000 annual professional development',
    },
    {
      icon: Plane,
      title: 'Unlimited PTO',
      description: 'Take the time you need to recharge',
    },
    {
      icon: Gift,
      title: 'Team Events',
      description: 'Regular team building and celebrations',
    },
  ];

  const openings = [
    {
      id: 1,
      title: 'Senior Digital Marketing Manager',
      department: 'Marketing',
      location: 'New York, NY (Remote)',
      type: 'Full-time',
      salary: '$80K - $120K',
      description: 'Lead digital marketing campaigns for enterprise clients.',
    },
    {
      id: 2,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'New York, NY (Hybrid)',
      type: 'Full-time',
      salary: '$70K - $100K',
      description: 'Create beautiful, user-centered designs for web and mobile.',
    },
    {
      id: 3,
      title: 'Full-Stack Developer',
      department: 'Development',
      location: 'Remote',
      type: 'Full-time',
      salary: '$90K - $140K',
      description: 'Build scalable web applications using modern technologies.',
    },
    {
      id: 4,
      title: 'SEO Specialist',
      department: 'Marketing',
      location: 'New York, NY (Remote)',
      type: 'Full-time',
      salary: '$60K - $85K',
      description: 'Drive organic growth through strategic SEO initiatives.',
    },
    {
      id: 5,
      title: 'Business Development Representative',
      department: 'Sales',
      location: 'New York, NY (On-site)',
      type: 'Full-time',
      salary: '$50K - $70K + Commission',
      description: 'Generate new business opportunities and build client relationships.',
    },
    {
      id: 6,
      title: 'Content Strategist',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      salary: '$55K - $80K',
      description: 'Develop content strategies that drive engagement and conversions.',
    },
    {
      id: 7,
      title: 'Project Manager',
      department: 'Operations',
      location: 'New York, NY (Hybrid)',
      type: 'Full-time',
      salary: '$75K - $110K',
      description: 'Oversee digital projects from conception to completion.',
    },
    {
      id: 8,
      title: 'Social Media Manager',
      department: 'Marketing',
      location: 'Remote',
      type: 'Full-time',
      salary: '$50K - $75K',
      description: 'Manage social presence for multiple client accounts.',
    },
  ];

  const filteredOpenings = selectedDepartment === 'All' 
    ? openings 
    : openings.filter(job => job.department === selectedDepartment);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#f2f7ff] to-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-[#426dd8]/10 text-[#426dd8] text-sm font-semibold rounded-full mb-6">
              Join Our Team
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1f44] mb-6">
              Build Your <span className="text-[#426dd8]">Career</span> With Us
            </h1>
            <p className="text-lg text-[#3b4555] mb-8">
              We&apos;re always looking for talented individuals who are passionate about 
              digital marketing and want to make a difference.
            </p>
            <Link
              to="#openings"
              className="btn-primary inline-flex"
            >
              View Openings
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#426dd8]/10 text-[#426dd8] text-sm font-semibold rounded-full mb-4">
              Why Join Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1f44] mb-4">
              Benefits & Perks
            </h2>
            <p className="text-lg text-[#3b4555] max-w-2xl mx-auto">
              We take care of our team so they can do their best work
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#f2f7ff] rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#426dd8]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-7 h-7 text-[#426dd8]" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1f44] mb-3">{benefit.title}</h3>
                <p className="text-[#3b4555]">{benefit.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="section-padding bg-[#f1f1f1]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-[#426dd8]/10 text-[#426dd8] text-sm font-semibold rounded-full mb-6">
                Our Culture
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-6">
                Work Hard, Play Hard
              </h2>
              <div className="space-y-4 text-[#3b4555]">
                <p>
                  At NexGen, we believe that the best work comes from people who are 
                  passionate, supported, and empowered. We&apos;ve built a culture that 
                  values creativity, collaboration, and continuous learning.
                </p>
                <p>
                  Our team is made up of diverse individuals from all walks of life, 
                  united by a shared goal: helping our clients succeed in the digital world.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                {[
                  'Collaborative and inclusive environment',
                  'Opportunities for growth and advancement',
                  'Work on exciting projects with top brands',
                  'Make a real impact on client success',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#426dd8] flex-shrink-0" />
                    <span className="text-[#3b4555]">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/hero-bg.jpg"
                alt="Team Culture"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 bg-[#426dd8]/10 text-[#426dd8] text-sm font-semibold rounded-full mb-4">
              Open Positions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-4">
              Current Opportunities
            </h2>
            <p className="text-[#3b4555]">
              Find your perfect role and join our growing team
            </p>
          </motion.div>

          {/* Department Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedDepartment === dept
                    ? 'bg-[#426dd8] text-white'
                    : 'bg-gray-100 text-[#3b4555] hover:bg-[#426dd8]/10'
                }`}
              >
                {dept}
              </button>
            ))}
          </motion.div>

          {/* Job Listings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {filteredOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-[#f2f7ff] rounded-xl p-6 hover:shadow-lg transition-shadow group"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-[#0a1f44] group-hover:text-[#426dd8] transition-colors">
                        {job.title}
                      </h3>
                      <span className="px-3 py-1 bg-[#426dd8]/10 text-[#426dd8] text-xs font-medium rounded-full">
                        {job.department}
                      </span>
                    </div>
                    <p className="text-[#3b4555] text-sm mb-3">{job.description}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-[#3b4555]">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="w-4 h-4" />
                        {job.salary}
                      </span>
                    </div>
                  </div>
                  <Link
                    to={`/careers/apply/${job.id}`}
                    className="btn-primary whitespace-nowrap"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>

          {filteredOpenings.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
              <p className="text-[#3b4555]">No open positions in this department.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don&apos;t See the Right Fit?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              We&apos;re always interested in meeting talented people. Send us your resume 
              and we&apos;ll keep you in mind for future opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffc225] text-[#0a1f44] font-bold rounded-lg hover:bg-white transition-colors"
            >
              Send Your Resume
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
