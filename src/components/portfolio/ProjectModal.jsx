import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useState, useEffect } from 'react';
import { X, Save, Trash2, MapPin } from 'lucide-react';
const emptyProject = {
    _id: '',
    title: '',
    description: '',
    category: 'wedding',
    images: [
        'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80',
    ],
    clientName: '',
    location: '',
    shootDate: '',
    featured: false,
};
export const ProjectModal = ({ project, isOpen, onClose, onSave, onDelete, }) => {
    const [formData, setFormData] = useState(emptyProject);
    const [imageUrlInput, setImageUrlInput] = useState('');
    const [error, setError] = useState(null);
    useEffect(() => {
        if (project) {
            setFormData(project);
        }
        else {
            setFormData({
                ...emptyProject,
                _id: `proj_${Date.now()}`,
            });
        }
        setImageUrlInput('');
        setError(null);
    }, [project, isOpen]);
    if (!isOpen)
        return null;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title.trim()) {
            setError('Shoot title is required.');
            return;
        }
        if (!formData.description.trim()) {
            setError('Description is required.');
            return;
        }
        if (formData.images.length === 0) {
            setError('At least one photo URL is required.');
            return;
        }
        onSave(formData);
        onClose();
    };
    const addImageUrl = () => {
        if (!imageUrlInput.trim())
            return;
        setFormData({
            ...formData,
            images: [...formData.images, imageUrlInput.trim()],
        });
        setImageUrlInput('');
    };
    const removeImage = (index) => {
        const updated = formData.images.filter((_, i) => i !== index);
        setFormData({ ...formData, images: updated });
    };
    return (_jsx("div", { className: "fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/80 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-150", children: _jsxs("div", { className: "w-full max-w-lg bg-zinc-900 border border-zinc-700/80 rounded-t-3xl sm:rounded-3xl max-h-[92vh] overflow-y-auto flex flex-col shadow-2xl", children: [_jsxs("div", { className: "sticky top-0 z-10 bg-zinc-900/95 backdrop-blur border-b border-zinc-800 px-5 py-4 flex items-center justify-between", children: [_jsxs("div", { children: [_jsx("span", { className: "text-[10px] uppercase font-mono tracking-widest text-amber-400 font-bold", children: "Studio Showcase" }), _jsx("h3", { className: "text-lg font-serif font-bold text-white mt-0.5", children: project ? 'Edit Portfolio Shoot' : 'Upload New Studio Shoot' })] }), _jsx("button", { onClick: onClose, className: "p-1.5 rounded-full bg-zinc-800 text-zinc-400 hover:text-white", children: _jsx(X, { size: 18 }) })] }), _jsxs("form", { onSubmit: handleSubmit, className: "p-5 space-y-4 text-xs text-zinc-200", children: [error && (_jsx("div", { className: "p-3 rounded-xl bg-red-950/70 border border-red-500/40 text-red-300", children: error })), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-zinc-400 font-bold mb-1", children: "Shoot Title *" }), _jsx("input", { type: "text", value: formData.title, onChange: (e) => setFormData({ ...formData, title: e.target.value }), placeholder: "e.g. Royal Heritage Symphony", className: "w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2.5 outline-none focus:border-amber-400", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-zinc-400 font-bold mb-1", children: "Category" }), _jsxs("select", { value: formData.category, onChange: (e) => setFormData({
                                                ...formData,
                                                category: e.target.value,
                                            }), className: "w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2.5 outline-none focus:border-amber-400 text-zinc-200", children: [_jsx("option", { value: "wedding", children: "Wedding" }), _jsx("option", { value: "pre-wedding", children: "Pre-Wedding" }), _jsx("option", { value: "portrait", children: "Portrait" }), _jsx("option", { value: "cinematography", children: "Cinematography" }), _jsx("option", { value: "commercial", children: "Commercial" })] })] })] }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-zinc-400 font-bold mb-1", children: "Couple / Client Name" }), _jsx("input", { type: "text", value: formData.clientName || '', onChange: (e) => setFormData({ ...formData, clientName: e.target.value }), placeholder: "e.g. Arjun & Sanjana", className: "w-full rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2.5 outline-none focus:border-amber-400" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-zinc-400 font-bold mb-1", children: "Location / Venue" }), _jsxs("div", { className: "relative", children: [_jsx(MapPin, { className: "absolute left-3 top-3 size-4 text-zinc-500" }), _jsx("input", { type: "text", value: formData.location || '', onChange: (e) => setFormData({ ...formData, location: e.target.value }), placeholder: "e.g. Udaipur, Rajasthan", className: "w-full rounded-xl bg-zinc-950 border border-zinc-800 pl-9 pr-3 py-2.5 outline-none focus:border-amber-400" })] })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-zinc-400 font-bold mb-1", children: "Story / Description *" }), _jsx("textarea", { rows: 3, value: formData.description, onChange: (e) => setFormData({ ...formData, description: e.target.value }), placeholder: "Atmosphere, artistic mood, lighting techniques, memorable moments...", className: "w-full rounded-xl bg-zinc-950 border border-zinc-800 p-3 outline-none focus:border-amber-400 resize-none text-xs", required: true })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-zinc-400 font-bold mb-1", children: "Gallery Photos (Image URLs)" }), _jsxs("div", { className: "flex gap-2 mb-2", children: [_jsx("input", { type: "url", value: imageUrlInput, onChange: (e) => setImageUrlInput(e.target.value), placeholder: "https://images.unsplash.com/...", className: "flex-1 rounded-xl bg-zinc-950 border border-zinc-800 px-3 py-2 outline-none focus:border-amber-400" }), _jsx("button", { type: "button", onClick: addImageUrl, className: "px-3.5 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-bold text-xs", children: "Add Photo" })] }), _jsx("div", { className: "grid grid-cols-3 gap-2 mt-2", children: formData.images.map((img, i) => (_jsxs("div", { className: "relative aspect-video rounded-lg overflow-hidden border border-zinc-800 group", children: [_jsx("img", { src: img, alt: "Preview", className: "w-full h-full object-cover" }), _jsx("button", { type: "button", onClick: () => removeImage(i), className: "absolute top-1 right-1 p-1 rounded-full bg-black/80 text-white hover:bg-red-600 transition", children: _jsx(X, { size: 12 }) })] }, i))) })] }), _jsxs("div", { className: "pt-2 flex items-center justify-between border-t border-zinc-800", children: [project && onDelete ? (_jsxs("button", { type: "button", onClick: () => {
                                        if (confirm('Delete this project from portfolio?')) {
                                            onDelete(project._id);
                                            onClose();
                                        }
                                    }, className: "px-3 py-2 rounded-xl text-red-400 hover:bg-red-950/40 text-xs font-semibold flex items-center gap-1.5 transition", children: [_jsx(Trash2, { size: 14 }), _jsx("span", { children: "Delete" })] })) : (_jsx("div", {})), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("button", { type: "button", onClick: onClose, className: "px-4 py-2.5 rounded-xl border border-zinc-700 hover:bg-zinc-800 text-zinc-300 font-semibold text-xs transition", children: "Cancel" }), _jsxs("button", { type: "submit", className: "px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs flex items-center gap-1.5 transition shadow-md", children: [_jsx(Save, { size: 14 }), _jsx("span", { children: "Save Shoot" })] })] })] })] })] }) }));
};
