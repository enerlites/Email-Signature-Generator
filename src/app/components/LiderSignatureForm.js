'use client';

import { useState } from 'react';
import { ClipboardIcon } from '@heroicons/react/24/outline';
import toast from 'react-hot-toast';
import '../css/LIDERbutton.css';

export default function LiderSignatureForm({ company }) {
  const [formData, setFormData] = useState({
    name: '',
    position: '',
    email: '',
    phone: '(833) 977-3915', // Keep this as a constant
    company: '',
    website: '',
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    
    if (name === 'email') {
      // Remove any existing domain
      value = value.split('@')[0];
      // Append the domain
      value = `${value}@lider-electric.com`;
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
                <ClipboardIcon className="h-10 w-10 text-blue-500" />
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
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 bg-gray-50 p-4 lg:p-8 rounded-2xl shadow-lg max-w-7xl mx-auto">
      <div className="w-full lg:w-3/5 order-2 lg:order-1">
        <h2 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-gray-800">Signature Preview</h2>
        <div id="signature-preview" className="bg-white p-3 lg:p-6 rounded-xl shadow-md" style={{maxWidth: '950px'}}>
          <table cellPadding="0" cellSpacing="0" style={{fontFamily: 'Arial, sans-serif', fontSize: '12px', lineHeight: '1.4', color: '#333333', borderCollapse: 'collapse', width: '100%', maxWidth: '100%', marginBottom: '0'}}>
            <tbody>
              <tr>
                <td style={{width: '35%', verticalAlign: 'top', padding: '0 20px 0 0', position: 'relative'}}>
                  <table cellPadding="0" cellSpacing="0" style={{width: '100%', position: 'relative', zIndex: '2'}}>
                    <tbody>
                      <tr>
                        <td style={{height: '30px'}}></td>
                      </tr>
                      <tr>
                        <td align="center" style={{paddingTop: '10px'}}>
                          <img src="https://raw.githubusercontent.com/enerlites/Email-Signature-Generator/main/public/Lider-main.png" alt="Lider Electric" width="120" height="40" style={{display: 'block', marginBottom: '5px'}} />
                          <p style={{
                            fontSize: '12px',
                            color: '#666666',
                            margin: '5px 0 0',
                            textAlign: 'center',
                            fontStyle: 'italic'
                          }}>
                            Innovation · Creation · Inspiration
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style={{paddingTop: '5px'}}>
                          <p style={{fontSize: '14px', fontWeight: 'bold', margin: '0'}}>Connect with us!</p>
                        </td>
                      </tr>
                      <tr>
                        <td align="center" style={{paddingTop: '5px', position: 'relative', zIndex: '3'}}>
                          <table cellPadding="0" cellSpacing="0">
                            <tbody>
                              <tr>
                                <td style={{padding: '0 2px'}}>
                                  <a href="https://www.instagram.com/lider_electric" target="_blank" rel="noopener noreferrer">
                                    <img src="https://raw.githubusercontent.com/enerlites/Email-Signature-Generator/main/public/LiderInstagram.png" alt="Instagram" width="32" height="32" style={{display: 'block', border: 'none'}} />
                                  </a>
                                </td>
                                <td style={{padding: '0 2px'}}>
                                  <a href="https://www.facebook.com/LiderElectric1/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://raw.githubusercontent.com/enerlites/Email-Signature-Generator/main/public/LiderFacebook.png" alt="Facebook" width="32" height="32" style={{display: 'block', border: 'none'}} />
                                  </a>
                                </td>
                                <td style={{padding: '0 2px'}}>
                                  <a href="https://www.youtube.com/@Lider_Electric" target="_blank" rel="noopener noreferrer">
                                    <img src="https://raw.githubusercontent.com/enerlites/Email-Signature-Generator/main/public/LiderYoutube.png" alt="YouTube" width="32" height="32" style={{display: 'block', border: 'none'}} />
                                  </a>
                                </td>
                                <td style={{padding: '0 2px'}}>
                                  <a href="https://www.linkedin.com/company/lider-electric-inc/" target="_blank" rel="noopener noreferrer">
                                    <img src="https://raw.githubusercontent.com/enerlites/Email-Signature-Generator/main/public/LiderLinkedIn.png" alt="LinkedIn" width="32" height="32" style={{display: 'block', border: 'none'}} />
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
                <td style={{width: '45%', verticalAlign: 'top', borderLeft: '2px solid #0066CC', padding: '0 0 0 20px', position: 'relative'}}>
                  <table cellPadding="0" cellSpacing="0" style={{width: '100%'}}>
                    <tbody>
                      <tr>
                        <td style={{position: 'relative', paddingBottom: '10px'}}>
                          <table cellPadding="0" cellSpacing="0" style={{width: '100%'}}>
                            <tbody>
                              <tr>
                                <td style={{verticalAlign: 'top'}}>
                                  <strong style={{
                                    fontSize: '24px',
                                    color: '#000000',
                                    display: 'block',
                                    marginBottom: '5px',
                                    maxWidth: '300px',  // Adjust this value as needed
                                    wordWrap: 'break-word',
                                    overflowWrap: 'break-word',
                                    lineHeight: '1.2',  // Adjust this value for appropriate line spacing
                                  }}>
                                    {formData.name || 'Full Name'}
                                  </strong>
                                  <span style={{color: '#666666', display: 'block'}}>{formData.position || 'Job Title'}</span>
                                  <span style={{color: '#666666', display: 'block'}}>{formData.company || 'Lider Electric'}</span>
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
                              <tr style={{paddingBottom: '8px', display: 'block'}}>
                                <td style={{paddingRight: '5px', width: '24px', verticalAlign: 'top'}}>
                                  <img src="https://raw.githubusercontent.com/enerlites/Email-Signature-Generator/main/public/LiderEmail-Icon.png" alt="Email" width="20" height="20" style={{display: 'block'}} />
                                </td>
                                <td style={{color: '#666666'}}>
                                  <a href={`mailto:${formData.email || 'your.name@lider-electric.com'}`} style={{color: '#0066cc', textDecoration: 'none'}}>{formData.email || 'your.name@lider-electric.com'}</a>
                                </td>
                              </tr>
                              <tr style={{paddingBottom: '8px', display: 'block'}}>
                                <td style={{paddingRight: '5px', width: '24px', verticalAlign: 'top'}}>
                                  <img src="https://raw.githubusercontent.com/enerlites/Email-Signature-Generator/main/public/LiderPhone-Icon.png" alt="Phone" width="20" height="20" style={{display: 'block'}} />
                                </td>
                                <td style={{color: '#666666'}}>
                                  <span>{formData.phone}</span>
                                </td>
                              </tr>
                              <tr style={{paddingBottom: '8px', display: 'block'}}>
                                <td style={{paddingRight: '5px', width: '24px', verticalAlign: 'top'}}>
                                  <img src="https://raw.githubusercontent.com/enerlites/Email-Signature-Generator/main/public/LiderLocation-Icon.png" alt="Location" width="20" height="20" style={{display: 'block'}} />
                                </td>
                                <td style={{color: '#666666'}}>
                                  <span>4695 MacArthur Court, 11th Floor Newport Beach, CA 92660</span>
                                </td>
                              </tr>
                              <tr style={{paddingBottom: '8px', display: 'block'}}>
                                <td style={{paddingRight: '5px', width: '24px', verticalAlign: 'top'}}>
                                  <img src="https://raw.githubusercontent.com/enerlites/Email-Signature-Generator/main/public/LiderWeb-Icon.png" alt="Website" width="20" height="20" style={{display: 'block'}} />
                                </td>
                                <td style={{color: '#666666'}}>
                                  <a href={formData.website || 'https://www.lider-electric.com'} style={{color: '#0066cc', textDecoration: 'none'}}>{formData.website || 'www.lider-electric.com'}</a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
                <td style={{width: '20%', verticalAlign: 'top', padding: '0', position: 'relative'}}>
                  <div style={{
                    position: 'absolute',
                    top: '0',
                    right: '-40px',
                    width: '200px',
                    height: '200px',
                    overflow: 'visible'
                  }}>
                    {/* <img
                      src="https://raw.githubusercontent.com/enerlites/Email-Signature-Generator/main/public/sig1.png"
                      alt="Signature"
                      style={{width: '100%', height: '100%', objectFit: 'contain', pointerEvents: 'none'}}
                    /> */}
                  </div>
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
          className="mt-6 relative overflow-hidden py-2 px-6 rounded-full text-white font-semibold shadow-md flex items-center justify-center"
        >
          <span className="absolute inset-0 bg-gradient-animation"></span>
          <span className="relative flex items-center z-10">
            <ClipboardIcon className="w-5 h-5 mr-2" />
            Copy to Clipboard
          </span>
        </button>
      </div>
      <div className="w-full lg:w-2/5 order-1 lg:order-2">
        <h2 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 text-gray-800">Enter Your Details</h2>
        <form className="space-y-3 lg:space-y-4">
          <input
            type="text"
            name="name"
            placeholder="First & Last Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400"
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Job Title"
            value={formData.position}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400"
            required
          />
          <div className="relative">
            <input
              type="text"
              name="email"
              placeholder="your.name"
              value={formData.email.split('@')[0]}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent focus:outline-none transition-all duration-200 ease-in-out text-gray-800 placeholder-gray-400 pr-[145px]"
              required
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              @lider-electric.com
            </span>
          </div>
          {/* Phone input field removed */}
        </form>
      </div>
    </div>
  );
}
