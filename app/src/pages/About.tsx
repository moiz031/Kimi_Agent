import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Award, Users, TrendingUp, CheckCircle } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'We focus on delivering measurable outcomes that impact your bottom line.',
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Clear communication and honest reporting on all our activities.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and bring enthusiasm to every project.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in everything we create.',
    },
  ];

  const team = [
    {
      name: 'James Anderson',
      role: 'CEO & Founder',
      image: '/team-ceo.jpg',
      bio: '15+ years of digital marketing experience',
    },
    {
      name: 'Lisa Wang',
      role: 'Creative Director',
      image: '/team-creative.jpg',
      bio: 'Award-winning designer and strategist',
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of Strategy',
      image: '/team-strategy.jpg',
      bio: 'Data-driven marketing expert',
    },
    {
      name: 'Anna Smith',
      role: 'Lead Developer',
      image: '/team-developer.jpg',
      bio: 'Full-stack development specialist',
    },
    {
      name: 'Robert Taylor',
      role: 'SEO Specialist',
      image: '/team-seo.jpg',
      bio: 'Search engine optimization guru',
    },
    {
      name: 'Jennifer Lee',
      role: 'Content Manager',
      image: '/team-content.jpg',
      bio: 'Storyteller and content strategist',
    },
    {
      name: 'Chris Brown',
      role: 'PPC Expert',
      image: '/team-ppc.jpg',
      bio: 'Paid advertising specialist',
    },
    {
      name: 'Maria Garcia',
      role: 'Account Director',
      image: '/team-account.jpg',
      bio: 'Client relationship expert',
    },
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '10+', label: 'Years Experience' },
    { number: '50M+', label: 'Revenue Generated' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-[#f2f7ff] to-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 bg-[#426dd8]/10 text-[#426dd8] text-sm font-semibold rounded-full mb-6">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a1f44] leading-tight mb-6">
                We&apos;re a Team of Digital <span className="text-[#426dd8]">Experts</span>
              </h1>
              <p className="text-lg text-[#3b4555] mb-8 leading-relaxed">
                Founded in 2014, NexGen Digital Agency has grown from a small startup to a 
                full-service digital marketing agency. We&apos;ve helped hundreds of businesses 
                across various industries achieve their digital goals and drive measurable growth.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Work With Us
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/careers" className="btn-secondary">
                  Join Our Team
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="/hero-bg.jpg"
                alt="Our Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#426dd8] rounded-full flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#0a1f44]">10+</p>
                    <p className="text-sm text-[#3b4555]">Years of Excellence</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#0a1f44]">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <p className="text-4xl lg:text-5xl font-bold text-[#ffc225] mb-2">
                  {achievement.number}
                </p>
                <p className="text-gray-400">{achievement.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img
                src="/portfolio-saas.jpg"
                alt="Our Story"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="inline-block px-4 py-2 bg-[#426dd8]/10 text-[#426dd8] text-sm font-semibold rounded-full mb-6">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-6">
                From Startup to Industry Leader
              </h2>
              <div className="space-y-4 text-[#3b4555]">
                <p>
                  What started as a small team of passionate marketers has evolved into a 
                  full-service digital agency with over 50 experts across multiple disciplines. 
                  Our journey has been defined by a relentless pursuit of excellence and a 
                  commitment to our clients&apos; success.
                </p>
                <p>
                  Over the years, we&apos;ve adapted to the ever-changing digital landscape, 
                  embracing new technologies and strategies to stay ahead of the curve. From 
                  the early days of SEO to the current era of AI-driven marketing, we&apos;ve 
                  consistently delivered results that matter.
                </p>
                <p>
                  Today, we&apos;re proud to serve clients across the globe, from startups to 
                  Fortune 500 companies, helping them navigate the complex world of digital 
                  marketing and achieve sustainable growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-[#f1f1f1]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#426dd8]/10 text-[#426dd8] text-sm font-semibold rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1f44] mb-4">
              What We Stand For
            </h2>
            <p className="text-lg text-[#3b4555] max-w-2xl mx-auto">
              Our core values guide everything we do
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-2xl p-8 text-center card-hover"
              >
                <div className="w-16 h-16 bg-[#426dd8]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#426dd8]" />
                </div>
                <h3 className="text-xl font-bold text-[#0a1f44] mb-3">{value.title}</h3>
                <p className="text-[#3b4555]">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[#426dd8]/10 text-[#426dd8] text-sm font-semibold rounded-full mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1f44] mb-4">
              Meet Our Experts
            </h2>
            <p className="text-lg text-[#3b4555] max-w-2xl mx-auto">
              The talented people behind our success
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f44]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm">{member.bio}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-[#0a1f44]">{member.name}</h3>
                <p className="text-[#426dd8] text-sm">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0a1f44] mb-6">
                The NexGen Difference
              </h2>
              <p className="text-[#3b4555] mb-8">
                We combine creativity with data-driven strategies to deliver exceptional results 
                for our clients. Here&apos;s what sets us apart:
              </p>

              <div className="space-y-4">
                {[
                  'Dedicated team of certified experts',
                  'Customized strategies for your business',
                  'Transparent reporting and communication',
                  'Proven track record of success',
                  'Cutting-edge tools and technologies',
                  '24/7 support and maintenance',
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
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <Users className="w-10 h-10 text-[#426dd8] mx-auto mb-4" />
                <p className="text-3xl font-bold text-[#0a1f44]">50+</p>
                <p className="text-sm text-[#3b4555]">Team Members</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg mt-8">
                <TrendingUp className="w-10 h-10 text-[#426dd8] mx-auto mb-4" />
                <p className="text-3xl font-bold text-[#0a1f44]">300%</p>
                <p className="text-sm text-[#3b4555]">Avg. ROI</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
                <Award className="w-10 h-10 text-[#426dd8] mx-auto mb-4" />
                <p className="text-3xl font-bold text-[#0a1f44]">25+</p>
                <p className="text-sm text-[#3b4555]">Industry Awards</p>
              </div>
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg mt-8">
                <CheckCircle className="w-10 h-10 text-[#426dd8] mx-auto mb-4" />
                <p className="text-3xl font-bold text-[#0a1f44]">100%</p>
                <p className="text-sm text-[#3b4555]">Client Retention</p>
              </div>
            </motion.div>
          </div>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to achieve your digital marketing goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#ffc225] text-[#0a1f44] font-bold rounded-lg hover:bg-white transition-colors"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
