import { useState } from 'react';
import { useData } from '../../context/DataContext';

export default function AdminPanel() {
  const { data, updateSection } = useData();
  const [activeTab, setActiveTab] = useState('personal');

  // We could create separate components for each tab, 
  // but for simplicity in this initial implementation, we'll keep them here.

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700 p-5 flex flex-col gap-2">
        <h2 className="text-xl font-bold mb-6 text-accent">Admin Panel</h2>
        {['personal', 'projects', 'skills'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-left px-4 py-2 rounded capitalize ${
              activeTab === tab ? 'bg-accent text-black font-semibold' : 'hover:bg-gray-700 text-gray-300'
            }`}
          >
            {tab} Settings
          </button>
        ))}
        <div className="mt-auto">
          <a href="/" className="text-sm text-gray-400 hover:text-white block px-4 py-2">
            ← Back to Portfolio
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        {activeTab === 'personal' && <PersonalTab />}
        {activeTab === 'projects' && <ProjectsTab />}
        {activeTab === 'skills' && <SkillsTab />}
      </div>
    </div>
  );
}

// --------- SUB-COMPONENTS FOR ADMIN TABS ---------

function PersonalTab() {
  const { data, updateSection } = useData();
  const [personal, setPersonal] = useState(data.personal);

  const handleChange = (e) => {
    setPersonal({ ...personal, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    updateSection('personal', personal);
    alert('Personal data saved locally!');
  };

  return (
    <div className="max-w-2xl bg-gray-800 p-6 rounded-xl">
      <h3 className="text-2xl font-bold mb-6">General Information</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Name</label>
          <input type="text" name="name" value={personal.name} onChange={handleChange} className="w-full bg-gray-700 p-2 rounded text-white border border-gray-600 focus:border-accent outline-none" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Tagline</label>
          <input type="text" name="tagline" value={personal.tagline} onChange={handleChange} className="w-full bg-gray-700 p-2 rounded text-white border border-gray-600 focus:border-accent outline-none" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Email</label>
          <input type="email" name="email" value={personal.email} onChange={handleChange} className="w-full bg-gray-700 p-2 rounded text-white border border-gray-600 focus:border-accent outline-none" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">GitHub URL</label>
          <input type="text" name="github" value={personal.github} onChange={handleChange} className="w-full bg-gray-700 p-2 rounded text-white border border-gray-600 focus:border-accent outline-none" />
        </div>
        
        {/* Mock for Profile Photo/Resume Upload mapping to string inputs for now until firebase integration */}
        <div className="pt-4 border-t border-gray-700">
          <p className="text-xs text-amber-500 mb-4">Note: Without a server, these accept URL links. For direct file uploads, we need a backend storage like Firebase or AWS S3.</p>
          <label className="block text-sm text-gray-400 mb-1">Profile Photo URL</label>
          <input type="text" name="profileImgUrl" placeholder="/profile.png" className="w-full bg-gray-700 p-2 rounded text-white border border-gray-600 focus:border-accent outline-none" />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">Resume PDF URL</label>
          <input type="text" name="resumePdf" value={personal.resumePdf} onChange={handleChange} className="w-full bg-gray-700 p-2 rounded text-white border border-gray-600 focus:border-accent outline-none" />
        </div>
        
        <button onClick={handleSave} className="mt-6 bg-accent text-black font-semibold px-6 py-2 rounded hover:opacity-90">
          Save Changes
        </button>
      </div>
    </div>
  );
}

function ProjectsTab() {
  const { data, updateSection } = useData();
  const [projects, setProjects] = useState(data.projects);

  const addNew = () => {
    setProjects([
      ...projects, 
      { id: Date.now(), title: 'New Project', subtitle: '', description: '', tech: [], live: '', github: '', gradient: 'from-blue-500 to-indigo-600', featured: true }
    ]);
  };

  const remove = (id) => {
    setProjects(projects.filter(p => p.id !== id));
  };

  const update = (index, field, value) => {
    const updated = [...projects];
    updated[index][field] = value;
    setProjects(updated);
  };

  const save = () => {
    updateSection('projects', projects);
    alert('Projects saved locally!');
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">Manage Projects</h3>
        <button onClick={addNew} className="bg-accent text-black px-4 py-2 rounded font-semibold">+ Add Project</button>
      </div>

      <div className="space-y-6">
        {projects.map((proj, i) => (
          <div key={proj.id} className="bg-gray-800 p-5 rounded-xl border border-gray-700 relative">
            <button onClick={() => remove(proj.id)} className="absolute top-4 right-4 text-red-400 hover:text-red-300 text-sm">Delete</button>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-400 block mb-1">Title</label>
                <input type="text" value={proj.title} onChange={(e) => update(i, 'title', e.target.value)} className="w-full bg-gray-700 p-2 rounded text-sm text-white border-gray-600" />
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1">Subtitle</label>
                <input type="text" value={proj.subtitle} onChange={(e) => update(i, 'subtitle', e.target.value)} className="w-full bg-gray-700 p-2 rounded text-sm text-white border-gray-600" />
              </div>
              <div className="col-span-2">
                <label className="text-xs text-gray-400 block mb-1">Description</label>
                <textarea value={proj.description} onChange={(e) => update(i, 'description', e.target.value)} className="w-full bg-gray-700 p-2 rounded text-sm text-white border-gray-600 h-20" />
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1">Live URL</label>
                <input type="text" value={proj.live} onChange={(e) => update(i, 'live', e.target.value)} className="w-full bg-gray-700 p-2 rounded text-sm text-white border-gray-600" />
              </div>
              <div>
                <label className="text-xs text-gray-400 block mb-1">Image URL (Optional)</label>
                <input type="text" value={proj.image || ''} onChange={(e) => update(i, 'image', e.target.value)} className="w-full bg-gray-700 p-2 rounded text-sm text-white border-gray-600 placeholder-gray-500" placeholder="/Nocturne.png" />
              </div>
              <div className="col-span-2">
                <label className="text-xs text-gray-400 block mb-1">Tech (comma separated)</label>
                <input type="text" value={proj.tech.join(', ')} onChange={(e) => update(i, 'tech', e.target.value.split(',').map(s=>s.trim()))} className="w-full bg-gray-700 p-2 rounded text-sm text-white border-gray-600" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button onClick={save} className="mt-6 bg-accent text-black font-semibold px-6 py-2 rounded hover:opacity-90">
        Save All Projects
      </button>
    </div>
  );
}

function SkillsTab() {
  const { data, updateSection } = useData();
  const [categories, setCategories] = useState(data.skillCategories);

  // Simplified view for brevity, allows modifying titles, full management needs deeper UI
  const save = () => {
    updateSection('skillCategories', categories);
    alert('Skills saved locally!');
  };

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6">Manage Skills</h3>
      <p className="text-gray-400 mb-6">Edit category titles for now. Add/remove specific skills can be expanded here.</p>
      
      <div className="grid grid-cols-2 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="bg-gray-800 p-5 rounded-xl border border-gray-700">
             <input type="text" value={cat.title} onChange={(e) => {
               const newCats = [...categories];
               newCats[i].title = e.target.value;
               setCategories(newCats);
             }} className="w-full bg-gray-700 p-2 rounded font-bold text-white border-gray-600 mb-4" />
             
             <div className="space-y-2">
               {cat.skills.map((skill, j) => (
                 <div key={j} className="flex items-center gap-2">
                   <input type="text" value={skill.name} readOnly className="bg-gray-900 px-2 py-1 rounded text-sm flex-1 text-gray-300" />
                   <input type="number" readOnly value={skill.level} className="bg-gray-900 w-16 px-2 py-1 rounded text-sm text-accent text-center" />
                 </div>
               ))}
             </div>
          </div>
        ))}
      </div>

      <button onClick={save} className="mt-6 bg-accent text-black font-semibold px-6 py-2 rounded hover:opacity-90">
        Save Skill Categories
      </button>
    </div>
  );
}
