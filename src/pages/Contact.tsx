import React, { useState, type ChangeEvent } from 'react';
import type { FormData } from '../types';
import { FacebookIcon, WhatsappIcon } from '../components/Icons';

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<string>('idle'); // idle, loading, success, error

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      console.log("Form Data to send to API:", formData);
      setStatus('success');
      setFormData({ name: '',phone: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div className="flex-1 w-full px-4 sm:px-6 pt-24 pb-16 bg-[url('./assets/MXMDEV-BG.svg')] bg-cover bg-no-repeat bg-center">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-center text-4xl text-theme-dark font-bold pt-6 mb-4 pb-4">Get in Touch</h2>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='flex flex-col text-center items-center lg:justify-center'>
                <p className='lg:pt-12 text-lg sm:text-xl font-bold text-gray-600' >
                    Have a project in mind or want a specific demo? <br/> Reach out to us directly:
                </p>
                <br/>
                <span>
                <a href="tel:+67572369174" >
                  📞 Phone: (675) 7236 9174 / 8345 5547
                </a>
                </span>
                <br/>
                <span className='flex flex-wrap items-center justify-center gap-1'>
                  <WhatsappIcon/>
                <a href="https://wa.me/67583455547" target="_blank">
                    WhatsApp: (675) 8345 5547
                </a></span>
                <br/>
                <span>
                <a href="mailto:info@mxmdev.cloud" className="gap-4">
                   <p>📧 info@mxmdev.cloud</p>
                </a>
                </span>
                <br/>
                <span>
                    <a href="https://www.facebook.com/mxmdev" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4 ">
                    <FacebookIcon/> Find us on Facebook
                    </a>
                </span>


          </div>

          <div className="flex flex-col text-center items-center w-full bg-transparent backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-10">
            <p className="text-gray-600 text-md text-center font-semibold">Send us a message.</p>
            <form onSubmit={handleSubmit} className="space-y-2 w-full sm:w-4/5 items-center justify-center mx-auto pt-6">
              <div className="flex flex-col pb-2">
                <label className=" text-gray-800 text-sm font-medium text-left pl-1 pr-4 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder='Your Name'
                  onChange={handleChange}
                  className="bg-white h-8 border border-white/10 rounded-lg p-3 text-gray-500"
                  required
                />
              </div>

              <div className="flex flex-col pb-2 ">
                <label className="text-gray-800 text-sm font-medium text-left pl-1 mb-1">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  placeholder="+675 1234 5678"
                  onChange={handleChange}
                  className="bg-white h-8 border border-white/10 rounded-lg p-3 text-gray-500"
                  required
                />
              </div>

              <div className="flex flex-col pb-2">
                <label className="text-gray-800 text-sm font-medium text-left  pl-1 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="username@email.com"
                  onChange={handleChange}
                  className="bg-white h-8 border border-white/10 rounded-lg p-3 text-gray-500"
                  required
                />
              </div>

              <div className="flex flex-col pb-2">
                <label className="text-gray-800 text-sm font-medium text-left  pl-1 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  placeholder="..."
                  onChange={handleChange}
                  className="bg-white text-gray-500 h-30 resize-y border border-white/10 rounded-lg p-3"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 text-theme-dark font-bold rounded-lg bg-sky-400 hover:bg-white transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_15px_rgba(56,189,248,0.5)]"
              >
                {status === 'loading' ? 'Sending...' : 'Send'}
              </button>

              {status === 'success' && <p className="text-theme-accent text-center font-medium">Message sent successfully!</p>}
              {status === 'error' && <p className="text-red-400 text-center font-medium">Something went wrong. Please try again.</p>}
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
