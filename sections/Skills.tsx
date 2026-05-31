'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Server, Wrench, Cpu } from 'lucide-react';
import { Section } from '@/components/Section';
import { SectionHeading } from '@/components/SectionHeading';
import { Card } from '@/components/Card';
import { ProgressBar } from '@/components/ProgressBar';
import { Badge } from '@/components/Badge';
import { skills } from '@/data/skills';

const skillCategories = [
  { id: 'frontend', name: 'Frontend', icon: Code },
  { id: 'backend', name: 'Backend', icon: Server },
  { id: 'ui-ux', name: 'UI/UX', icon: Palette },
  { id: 'tools', name: 'Tools', icon: Wrench },
  { id: 'languages', name: 'Languages', icon: Cpu },
];

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

  return (
    <Section id="skills">
      <SectionHeading
        title="My Skills"
        subtitle="Technologies and tools I use to bring ideas to life"
      />

      {/* Category Tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg'
                  : 'bg-secondary text-foreground hover:bg-secondary/80'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
              {category.name}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Skills Grid */}
      <motion.div
        className="grid md:grid-cols-2 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card glass className="h-full">
          <h3 className="text-xl font-bold mb-6">Proficiency Level</h3>
          <div className="space-y-4">
            {filteredSkills.map((skill, index) => (
              <ProgressBar
                key={skill.id}
                label={skill.name}
                level={skill.level}
              />
            ))}
          </div>
        </Card>

        <Card glass className="h-full">
          <h3 className="text-xl font-bold mb-6">Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Badge variant="default">{skill.name}</Badge>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* All Skills Overview */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card glass>
          <h3 className="text-xl font-bold mb-6 text-center">All Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.02 }}
              >
                <Badge
                  variant={skill.level >= 85 ? 'gradient' : 'outline'}
                  className="cursor-pointer hover:scale-110 transition-transform"
                >
                  {skill.name}
                </Badge>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>
    </Section>
  );
};
