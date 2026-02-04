'use client';

import { useState } from 'react';

export default function InquiryForm() {
    const [status, setStatus] = useState('idle'); // idle | loading | success | error
    const [errorMessage, setErrorMessage] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const body = {
            name: formData.get('name') || '',
            company: formData.get('company') || '',
            email: formData.get('email') || '',
            phone: formData.get('phone') || '',
            message: formData.get('message') || '',
        };

        setStatus('loading');
        setErrorMessage('');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body),
            });
            const data = await res.json();

            if (!res.ok) {
                setStatus('error');
                setErrorMessage(data.error || 'Something went wrong.');
                return;
            }

            setStatus('success');
            form.reset();
        } catch (err) {
            setStatus('error');
            setErrorMessage('Network error. Please try again.');
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
                <input name="name" type="text" placeholder="Name" required className="w-full bg-white/10 border border-white/20 p-3 text-sm focus:outline-none focus:border-secondary text-white placeholder-white/50" />
                <input name="company" type="text" placeholder="Company" className="w-full bg-white/10 border border-white/20 p-3 text-sm focus:outline-none focus:border-secondary text-white placeholder-white/50" />
            </div>
            <input name="email" type="email" placeholder="Email Address" required className="w-full bg-white/10 border border-white/20 p-3 text-sm focus:outline-none focus:border-secondary text-white placeholder-white/50" />
            <input name="phone" type="tel" placeholder="Phone Number" className="w-full bg-white/10 border border-white/20 p-3 text-sm focus:outline-none focus:border-secondary text-white placeholder-white/50" />
            <textarea name="message" rows="4" placeholder="Message / Product Interests" required className="w-full bg-white/10 border border-white/20 p-3 text-sm focus:outline-none focus:border-secondary text-white placeholder-white/50"></textarea>

            {status === 'success' && <p className="text-green-300 text-sm">Thank you. We will respond within 24 hours.</p>}
            {status === 'error' && <p className="text-red-300 text-sm">{errorMessage}</p>}

            <button type="submit" disabled={status === 'loading'} className="w-full bg-secondary text-primary font-bold uppercase tracking-widest py-3 hover:bg-white transition-colors disabled:opacity-60 disabled:cursor-not-allowed">
                {status === 'loading' ? 'Sending…' : 'Submit Inquiry'}
            </button>
        </form>
    );
}
