'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, Calendar, MapPin, Building2 } from 'lucide-react';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { Card } from '@/components/Card';
import { Badge } from '@/components/Badge';
import { experiences, education } from '@/data/experience';

export const Experience = () => {
  return (
    <Section id="experience">
      <SectionHeading
        title="Experience & Education"
        subtitle="My professional journey and academic background"
      />

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Work Experience */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Briefcase className="w-6 h-6 mr-2 text-primary-500" />
            Work Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card glass>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold">{exp.title}</h4>
                      <p className="text-primary-500 font-medium">{exp.company}</p>
                    </div>
                    <Badge variant={exp.type === 'internship' ? 'gradient' : 'outline'}>
                      {exp.type}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {exp.startDate} - {exp.endDate}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {exp.location}
                    </span>
                  </div>

                  <p className="text-muted-foreground mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="default" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Building2 className="w-6 h-6 mr-2 text-accent-500" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card glass>
                  <h4 className="text-xl font-bold mb-2">{edu.degree}</h4>
                  <p className="text-accent-500 font-medium mb-3">{edu.institution}</p>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {edu.startDate} - {edu.endDate}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {edu.location}
                    </span>
                    {edu.gpa && (
                      <span className="flex items-center">
                        <span className="font-medium">GPA: {edu.gpa}</span>
                      </span>
                    )}
                  </div>

                  <p className="text-muted-foreground">{edu.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card glass>
              <h4 className="text-xl font-bold mb-4 flex items-center">
                <Award className="w-5 h-5 mr-2 text-primary-500" />
                Certifications
              </h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  AWS Certified Cloud Practitioner
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Google UX Design Professional Certificate
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-2">•</span>
                  Meta Front-End Developer Professional Certificate
                </li>
              </ul>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};
