'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ClipboardIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import '../css/TGbutton.css';

export default function SignatureForm() {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    email: '',
    phone: '(844) 390-2568',
    company: '',
    website: '',
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    
    if (name === 'phone') {
      // Remove all non-digit characters
      value = value.replace(/\D/g, '');
      
      // Format the phone number
      if (value.length > 0) {
        if (value.length <= 3) {
          value = `(${value}`;
        } else if (value.length <= 6) {
          value = `(${value.slice(0, 3)}) ${value.slice(3)}`; // Space instead of dash
        } else {
          value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
        }
      }
    }
    
    setFormData({ ...formData, [name]: value });
  };

  const copyToClipboard = () => {
    const signatureElement = document.getElementById('signature-preview');
    const range = document.createRange();
    range.selectNode(signatureElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    
    try {
      document.execCommand('copy');
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex items-center ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <ClipboardIcon className="h-10 w-10 text-green-500" />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Signature copied!
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Your signature has been copied to the clipboard.
                </p>
              </div>
            </div>
          </div>
        </div>
      ), {
        duration: 3000,
        position: 'top-left'
      });
    } catch (err) {
      toast.error('Failed to copy signature. Please try again.', {
        position: 'top-left'
      });
    }
    
    window.getSelection().removeAllRanges();
  };

  return (
    <div className="flex flex-col lg:flex-row gap-12 bg-gray-50 p-8 rounded-2xl shadow-lg max-w-7xl mx-auto">
      <div className="w-full lg:w-3/5 order-2 lg:order-1">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Signature Preview</h2>
        <div id="signature-preview" className="bg-white p-6 rounded-xl shadow-md overflow-x-auto">
          <table cellPadding="0" cellSpacing="0" style={{fontFamily: 'Arial, sans-serif', fontSize: '14px', lineHeight: '1.6', color: '#333333', borderCollapse: 'collapse', width: '100%', maxWidth: '600px'}}>
            <tbody>
              <tr>
                <td style={{width: '65%', verticalAlign: 'top', padding: '0 20px 0 0'}}>
                  <table cellPadding="0" cellSpacing="0" style={{width: '100%'}}>
                    <tbody>
                      <tr>
                        <td style={{position: 'relative', paddingBottom: '10px'}}>
                          <table cellPadding="0" cellSpacing="0" style={{width: '100%'}}>
                            <tbody>
                              <tr>
                                <td style={{verticalAlign: 'top'}}>
                                  <strong style={{fontSize: '24px', color: '#4CAF50', display: 'block', marginBottom: '5px'}}>
                                    {formData.name || 'Full Name'}
                                  </strong>
                                  <span style={{color: '#666666', display: 'block'}}>{formData.position || 'Job Title'}</span>
                                  <span style={{color: '#666666', display: 'block'}}>{formData.company || 'Top Greener Inc.'}</span>
                                </td>
                                <td style={{width: '96px', verticalAlign: 'top'}}>
                                  <Image 
                                    src="/Triangle.png" 
                                    alt="Corner" 
                                    width={96} 
                                    height={96} 
                                    style={{display: 'block'}}
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <table cellPadding="0" cellSpacing="0" style={{width: '100%'}}>
                            <tbody>
                              <tr>
                                <td style={{paddingRight: '5px', width: '24px', verticalAlign: 'top'}}>
                                  <Image src="/Email-Icon.png" alt="Email" width={20} height={20} className="green-filter" />
                                </td>
                                <td style={{color: '#666666'}}>
                                  <a href={`mailto:${formData.email || 'your.name@topgreener.com'}`} style={{color: '#0066cc', textDecoration: 'none'}}>{formData.email || 'your.name@topgreener.com'}</a>
                                </td>
                              </tr>
                              <tr>
                                <td style={{paddingRight: '5px', width: '24px', verticalAlign: 'top'}}>
                                  <Image src="/Phone-Icon.png" alt="Phone" width={20} height={20} className="green-filter" />
                                </td>
                                <td style={{color: '#666666'}}>
                                  <span>{formData.phone}</span>
                                </td>
                              </tr>
                              <tr>
                                <td style={{paddingRight: '5px', width: '24px', verticalAlign: 'top'}}>
                                  <Image src="/Location-Icon.png" alt="Location" width={20} height={20} className="green-filter" />
                                </td>
                                <td style={{color: '#666666'}}>
                                  <span>19800 MacArthur Blvd #300, Irvine, CA 92612</span>
                                </td>
                              </tr>
                              <tr>
                                <td style={{paddingRight: '5px', width: '24px', verticalAlign: 'top'}}>
                                  <Image src="/Web-Icon.png" alt="Website" width={20} height={20} className="green-filter" />
                                </td>
                                <td style={{color: '#666666'}}>
                                  <a href={formData.website || 'https://topgreener.com'} style={{color: '#0066cc', textDecoration: 'none'}}>{formData.website || 'topgreener.com'}</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style={{width: '35%', verticalAlign: 'top', borderLeft: '2px solid #4CAF50', padding: '0 0 0 20px'}}>
                  <table cellPadding="0" cellSpacing="0" style={{width: '100%'}}>
                    <tbody>
                      <tr>
                        <td align="center">
                          <Image
                            src="/TG-logo.png"
                            alt="Top Greener Logo"
                            width={120}
                            height={120}
                            className="rounded-full"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style={{paddingTop: '10px'}}>
                          <p style={{fontSize: '14px', fontWeight: 'bold', margin: '0'}}>Connect with us!</p>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style={{paddingTop: '5px'}}>
                          <table cellPadding="0" cellSpacing="0">
                            <tbody>
                              <tr>
                                <td style={{padding: '0 2px'}}>
                                  <a href="https://www.instagram.com/topgreener" target="_blank" rel="noopener noreferrer">
                                    <Image src="/Instagram.png" alt="Instagram" width={32} height={32} style={{display: 'block', border: 'none'}} />
                                  </a>
                                </td>
                                <td style={{padding: '0 2px'}}>
                                  <a href="https://www.facebook.com/topgreener" target="_blank" rel="noopener noreferrer">
                                    <Image src="/Facebook.png" alt="Facebook" width={32} height={32} style={{display: 'block', border: 'none'}} />
                                  </a>
                                </td>
                                <td style={{padding: '0 2px'}}>
                                  <a href="https://www.youtube.com/@TOPGREENER-Channel" target="_blank" rel="noopener noreferrer">
                                    <Image src="/Youtube.png" alt="YouTube" width={32} height={32} style={{display: 'block', border: 'none'}} />
                                  </a>
                                </td>
                                <td style={{padding: '0 2px'}}>
                                  <a href="https://www.linkedin.com/company/top-greener/" target="_blank" rel="noopener noreferrer">
                                    <Image src="/LinkedIn.png" alt="LinkedIn" width={32} height={32} style={{display: 'block', border: 'none'}} />
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <table cellPadding="0" cellSpacing="0" style={{width: '100%', maxWidth: '600px', marginTop: '20px', borderTop: '1px solid #e0e0e0'}}>
            <tbody>
              <tr>
                <td style={{paddingTop: '10px', fontSize: '10px', color: '#888888'}}>
                  Notice: This message and any attachments are for the sole use of the intended recipient(s) and may contain proprietary, confidential, or
                  privileged information. Any unauthorized review, use, disclosure or distribution is prohibited and may be in violation of law.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          onClick={copyToClipboard}
          className="mt-6 relative overflow-hidden py-2 px-6 rounded-full text-white font-semibold shadow-md flex items-center justify-center group transition-transform duration-200 ease-in-out hover:scale-105"
        >
          <span className="absolute inset-0 bg-gradient-animation"></span>
          <span className="relative flex items-center z-10">
            <ClipboardIcon className="w-5 h-5 mr-2" />
            Copy to Clipboard
          </span>
        </button>
      </div>
      <div className="w-full lg:w-2/5 order-1 lg:order-2">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Enter Your Details</h2>
        <form className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="First & Last Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent focus:outline-none transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400"
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Job Title"
            value={formData.position}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent focus:outline-none transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="your.name@topgreener.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent focus:outline-none transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="(844) 390-2568"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent focus:outline-none transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400"
            required
          />
        </form>
      </div>
    </div>
  );
}