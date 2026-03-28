'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Target, Eye, Award, Users, BookOpen, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  const faculty = [
    {
      name: 'Dr. Ravindra Kumar',
      role: 'Founder & Director',
      experience: '25+ Years',
      specialization: 'Indian Polity & Governance',
      description: 'Former IAS officer with extensive experience in public administration',
    },
    {
      name: 'Prof. Anjali Sharma',
      role: 'Head of Faculty',
      experience: '18+ Years',
      specialization: 'History & Culture',
      description: 'PhD in Indian History, trained over 500+ successful candidates',
    },
    {
      name: 'Dr. Vikram Singh',
      role: 'Senior Faculty',
      experience: '15+ Years',
      specialization: 'Geography & Environment',
      description: 'Expert in Geography with multiple research publications',
    },
    {
      name: 'Ms. Priya Reddy',
      role: 'Faculty Member',
      experience: '12+ Years',
      specialization: 'Economics & Current Affairs',
      description: 'Economics graduate from JNU, specialized in Indian Economy',
    },
  ];

  const timeline = [
    { year: '2010', event: 'Founded with a vision to revolutionize UPSC coaching' },
    { year: '2013', event: 'First batch of 50 students, 35 selections' },
    { year: '2016', event: 'Expanded to multiple centers across India' },
    { year: '2019', event: 'Introduced AI-powered learning platform' },
    { year: '2022', event: 'Achieved 500+ total selections milestone' },
    { year: '2024', event: 'Launch of advanced online learning programs' },
  ];

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from teaching to student support.',
    },
    {
      icon: Users,
      title: 'Student-Centric',
      description: 'Every student is unique. We provide personalized attention to ensure success.',
    },
    {
      icon: BookOpen,
      title: 'Innovation',
      description: 'We constantly innovate our teaching methods to stay ahead in UPSC preparation.',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We maintain highest standards of integrity and transparency in our operations.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-gradient">Ravindra IAS</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              Empowering aspirants to achieve their IAS dreams through innovative teaching methodology,
              expert guidance, and unwavering support since 2010
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 border border-white/10"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-[#6366F1]" />
                <h2 className="text-3xl font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                To democratize UPSC preparation by providing world-class coaching, comprehensive study
                materials, and personalized mentorship to every aspirant, regardless of their background.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe in nurturing not just successful candidates, but responsible future administrators
                who will shape India's destiny.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-3xl p-8 border border-white/10"
            >
              <div className="flex items-center space-x-3 mb-6">
                <Eye className="w-8 h-8 text-[#22D3EE]" />
                <h2 className="text-3xl font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                To be India's most trusted and result-oriented UPSC coaching institute, recognized for
                innovation, excellence, and the success of our students.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We envision a future where every deserving candidate has access to quality education and
                achieves their dream of serving the nation.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Our <span className="text-gradient">Values</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-2xl p-6 border border-white/10 text-center"
                  >
                    <div className="w-14 h-14 mx-auto rounded-xl bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Our <span className="text-gradient">Expert Faculty</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {faculty.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-6 border border-white/10 hover:border-[#6366F1] transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6366F1] to-[#22D3EE] flex items-center justify-center flex-shrink-0">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-[#FACC15] text-sm mb-2">{member.role}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <span>{member.experience}</span>
                        <span>•</span>
                        <span>{member.specialization}</span>
                      </div>
                      <p className="text-gray-300 text-sm">{member.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#6366F1] via-[#22D3EE] to-[#FACC15]" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-8 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className="glass rounded-2xl p-6 border border-white/10 inline-block">
                        <div className="text-2xl font-bold text-[#FACC15] mb-2">{item.year}</div>
                        <p className="text-gray-300">{item.event}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-[#6366F1] to-[#22D3EE] border-4 border-[#0B0F1A] z-10" />
                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6366F1]/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 sm:p-12 text-center border border-white/10"
          >
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-[#FACC15]" />
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Join Our <span className="text-gradient">Legacy</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Be part of the success story and achieve your IAS dreams with us
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#6366F1] to-[#22D3EE] rounded-xl text-white font-semibold hover:scale-105 transition-transform glow"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
