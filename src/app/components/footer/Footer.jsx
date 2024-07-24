import React from 'react';
import { Container, Typography, Link } from '@mui/material';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <Container maxWidth="lg">
        <div className="footer-container">
          <Typography variant="body1">
            © {new Date().getFullYear()} Dryden Medical
          </Typography>
          <div className="footer-links">
            <Link href="#" underline="none">
              Home
            </Link>
            <Link href="#" underline="none">
              About
            </Link>
            <Link href="#" underline="none">
              Contact
            </Link>
            <Link href="#" underline="none">
              Privacy Policy
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;