'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { User, GraduationCap, Award, Target } from 'lucide-react';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { Card } from '@/components/Card';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { stats } from '@/data/stats';
import { education } from '@/data/experience';

export const About = () => {
  return (
    <Section id="about">
      <SectionHeading
        title="About Me"
        subtitle="Get to know me better - my background, education, and what drives me"
      />

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="h-full" glass>
            <div className="flex flex-col items-center text-center">
              <motion.div
                className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 mb-6 flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <User className="w-16 h-16 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold mb-2">Your Name</h3>
              <p className="text-primary-500 font-medium mb-4">
                Frontend Developer & UI/UX Designer
              </p>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate frontend developer and UI/UX designer with a keen eye for detail
                and a love for creating beautiful, functional web experiences. With expertise in
                modern web technologies, I bring ideas to life through clean code and intuitive design.
              </p>

              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="text-center p-4 rounded-lg bg-secondary/50">
                  <Award className="w-6 h-6 text-primary-500 mx-auto mb-2" />
                  <p className="text-sm font-medium">3+ Years</p>
                  <p className="text-xs text-muted-foreground">Experience</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-secondary/50">
                  <Target className="w-6 h-6 text-accent-500 mx-auto mb-2" />
                  <p className="text-sm font-medium">50+ Projects</p>
                  <p className="text-xs text-muted-foreground">Completed</p>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Education & Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Card glass>
            <h4 className="text-xl font-bold mb-4 flex items-center">
              <GraduationCap className="w-5 h-5 mr-2 text-primary-500" />
              Education
            </h4>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  className="border-l-2 border-primary-500 pl-4"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h5 className="font-semibold">{edu.degree}</h5>
                  <p className="text-primary-500 text-sm">{edu.institution}</p>
                  <p className="text-muted-foreground text-sm">
                    {edu.startDate} - {edu.endDate}
                  </p>
                  {edu.gpa && (
                    <p className="text-muted-foreground text-sm">GPA: {edu.gpa}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </Card>

          <Card glass>
            <h4 className="text-xl font-bold mb-4">What I Do</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Build responsive and performant web applications
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Design intuitive user interfaces and experiences
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Implement smooth animations and interactions
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Optimize applications for performance and SEO
              </li>
              <li className="flex items-start">
                <span className="text-primary-500 mr-2">•</span>
                Collaborate with teams to deliver quality products
              </li>
            </ul>
          </Card>
        </motion.div>
      </div>

      {/* Stats Section */}
      <motion.div
        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.id}
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <AnimatedCounter
              value={stat.value}
              suffix={stat.suffix}
              className="mb-2"
            />
            <p className="text-muted-foreground">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};
