import { createContext, useContext, useState, useEffect } from 'react';
import * as defaultData from '../data/resumeData';

const DataContext = createContext();

export function DataProvider({ children }) {
  // Initialize state from localStorage or default static data
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem('portfolio_data');
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      personal: defaultData.personal,
      projects: defaultData.projects,
      skillCategories: defaultData.skillCategories,
      techStack: defaultData.techStack,
      stats: defaultData.stats,
      education: defaultData.education,
      experience: defaultData.experience,
      certifications: defaultData.certifications,
      achievements: defaultData.achievements,
    };
  });

  // Sync back to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('portfolio_data', JSON.stringify(data));
  }, [data]);

  const updateSection = (section, payload) => {
    setData((prev) => ({
      ...prev,
      [section]: payload,
    }));
  };

  return (
    <DataContext.Provider value={{ data, updateSection }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
