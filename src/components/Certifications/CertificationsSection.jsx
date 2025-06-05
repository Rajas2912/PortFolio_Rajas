import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCalendar, FaExternalLinkAlt } from 'react-icons/fa';
import './CertificationsSection.css';
import AWS from '../assets/Certificates/AWS.png';
import iitm from '../assets/Certificates/IIT.png';
import nvidia from '../assets/Certificates/Nvidia.png';
import vanguard from '../assets/Certificates/vanguard.jpg';
import energy from '../assets/Certificates/energy.jpg';

import awscertificate from './pdfs/aws.pdf';  
import iitmcertificate from './pdfs/foundation.pdf'; 
import nvidiacertificate from './pdfs/nvidia.pdf';
import patent1 from './pdfs/patent1.pdf';
import patent2 from './pdfs/patent2.pdf';

const CertificationCard = ({ certification, onImageClick }) => {
  return (
    <motion.div 
      className="certification-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      style={{ display: 'flex', flexDirection: 'column', width: '100%' }}
    >
      <div className="card-image" onClick={() => onImageClick(certification)}>
        <img src={certification.image} alt={certification.title} />
        <div className="image-overlay">
          <FaExternalLinkAlt />
          <span>{certification.pdfUrl ? 'View PDF' : 'View Certificate'}</span>
        </div>
      </div>
      <div className="card-content" style={{ width: '100%', padding: '1rem' }}>
        <h3>{certification.title}</h3>
        <p className="issuer">{certification.issuer}</p>
        <p className="description">{certification.description}</p>
        <div className="date">
          <FaCalendar />
          <span>{certification.date}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Modal = ({ certification, onClose }) => {
  if (!certification) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="modal-content"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          <button className="close-button" onClick={onClose}>
            <FaTimes />
          </button>
          <div className="modal-body">
            {certification.pdfUrl ? (
              <iframe
                src={certification.pdfUrl}
                title={certification.title}
                width="100%"
                height="600px"
                style={{ border: 'none' }}
              />
            ) : (
              <img 
                src={certification.image} 
                alt={certification.title} 
                className="modal-image"
              />
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

const CertificationsSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      title: "Vanguard - Patent",
      issuer: "Patent Office",
      description: "Patent for autonomous robot navigation system using ESP32 and ArUco markers.",
      date: "November 2024",
      image: vanguard,
      pdfUrl: patent1,
      isPatent: true
    },
    {
      title: "Real Time Energy Monitoring System - Patent",
      issuer: "Patent Office",
      description: "Patent for innovative energy monitoring and optimization system.",
      date: "April 2024",
      image: energy,
      pdfUrl: patent2,
      isPatent: true
    },
    {
      title: "Amazon Cloud Technology Consultant",
      issuer: "Coursera",
      description: "Comprehensive certification in Amazon Web Services cloud technologies and consulting practices.",
      date: "2024",
      image: AWS,
      pdfUrl: awscertificate
    },
    {
      title: "Fundamentals of Deep Learning",
      issuer: "NVIDIA",
      description: "Advanced certification in deep learning fundamentals and practical applications.",
      date: "2024",
      image: nvidia,
      pdfUrl: nvidiacertificate
    },
    {
      title: "IIT Madras Foundational Program",
      issuer: "IIT Madras",
      description: "Foundational certification in computer science and programming fundamentals.",
      date: "2024",
      image: iitm,
      pdfUrl: iitmcertificate
    }
  ];

  return (
    <div className="certifications-section" id="certifications">
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>✦ CERTIFICATIONS</h1>
        <p>Professional certifications and achievements in technology</p>
      </motion.div>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <CertificationCard
              certification={cert}
              onImageClick={setSelectedCert}
            />
          </motion.div>
        ))}
      </div>
      
      <Modal 
        certification={selectedCert} 
        onClose={() => setSelectedCert(null)} 
      />
    </div>
  );
};

export default CertificationsSection;