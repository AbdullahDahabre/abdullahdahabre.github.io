import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        const formUrl = import.meta.env.VITE_FORMSPREE_ID?.startsWith('http')
            ? import.meta.env.VITE_FORMSPREE_ID
            : `https://formspree.io/f/${import.meta.env.VITE_FORMSPREE_ID || 'YOUR_FORM_ID'}`;

        try {
            const response = await fetch(formUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <section className="py-20 px-6 md:px-20 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-12"
            >
                <span className="text-neonCyan font-mono text-xl">06.</span>
                <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
                <div className="h-[1px] bg-gray-700 flex-grow max-w-xs ml-4 hidden md:block"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        I'm always open to discussing new ideas, opportunities, or AI technologies.
                        Whether you have a specific project in mind or just want to network, feel free to reach out.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-gray-300 hover:text-neonCyan transition-colors">
                            <div className="p-3 glass-card rounded-lg">
                                <Mail className="w-6 h-6 text-neonPurple" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-mono mb-1">Email</p>
                                <a href="mailto:abdullah.dahabre@gmail.com" className="font-medium">abdullah.dahabre@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300 hover:text-neonCyan transition-colors">
                            <div className="p-3 glass-card rounded-lg">
                                <Phone className="w-6 h-6 text-neonPurple" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-mono mb-1">Phone</p>
                                <a href="tel:+971509536533" className="font-medium">+971 50 953 6533</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300 hover:text-neonCyan transition-colors">
                            <div className="p-3 glass-card rounded-lg">
                                <MapPin className="w-6 h-6 text-neonPurple" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 font-mono mb-1">Location</p>
                                <span className="font-medium">Dubai, United Arab Emirates</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <form
                        onSubmit={handleSubmit}
                        className="glass-card p-8 rounded-2xl space-y-6"
                    >
                        {status === 'success' ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-10">
                                <div className="w-16 h-16 bg-neonCyan/20 rounded-full flex items-center justify-center mb-4">
                                    <Send className="w-8 h-8 text-neonCyan" />
                                </div>
                                <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                                <p className="text-gray-400">Thanks for reaching out. I'll get back to you soon.</p>
                                <button
                                    onClick={() => setStatus('idle')}
                                    className="mt-6 text-neonCyan hover:underline font-mono text-sm"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <>
                                <div>
                                    <label htmlFor="name" className="block text-sm font-mono text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        disabled={status === 'submitting'}
                                        className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonCyan transition-colors disabled:opacity-50"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-mono text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        disabled={status === 'submitting'}
                                        className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonCyan transition-colors disabled:opacity-50"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-mono text-gray-400 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={4}
                                        disabled={status === 'submitting'}
                                        className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neonCyan transition-colors resize-none disabled:opacity-50"
                                        placeholder="Hello, I'd like to discuss..."
                                    />
                                </div>

                                {status === 'error' && (
                                    <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full py-4 bg-gradient-to-r from-neonCyan/10 to-neonPurple/10 border border-neonCyan/30 text-white font-bold rounded-lg hover:from-neonCyan/20 hover:to-neonPurple/20 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(6,182,212,0.15),0_0_20px_rgba(168,85,247,0.15)] disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                    {status !== 'submitting' && <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                </button>
                            </>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
