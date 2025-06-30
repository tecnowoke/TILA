import { FaFacebookF, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function IconosRedes() {
  return (
    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'left', marginBottom: '1rem' }}>
      <a href="https://facebook.com/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebookF size={28} color="21BD74"/>
      </a>
      <a href="https://linkedin.com/in/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedinIn size={28} color="21BD74"/>
      </a>
      <a href="https://youtube.com/c/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
        <FaYoutube size={28} color="21BD74"/>
      </a>
      <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <FaInstagram size={28} color="21BD74"/>
      </a>
    </div>
  );
}
