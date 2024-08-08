// terms-and-conditions.js //
import React from 'react';
import styles from './common-style.module.css';

const TermsAndConditions = () => {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Terms and Conditions</h1>

        <p className={styles.date}><strong>Effective Date:</strong> August 8, 2024</p>
        <p className={styles.date}><strong>Last Updated:</strong> August 8, 2024</p>

        <p className={styles.paragraph}>
          Welcome to Pugatoes. By accessing or using our website <a href="https://www.pugtatoes.com" className={styles.link}>www.pugtatoes.com</a> ("Site"), you agree to comply with and be bound by the following terms and conditions ("Terms"). Please review these Terms carefully before using the Site.
        </p>

        <h2 className={styles.sectionTitle}>1. Acceptance of Terms</h2>
        <p className={styles.paragraph}>
          By using the Site, you agree to these Terms. If you do not agree to these Terms, you must not use the Site. We may update these Terms from time to time, and your continued use of the Site will constitute your acceptance of the updated Terms.
        </p>

        <h2 className={styles.sectionTitle}>2. Use of the Site</h2>
        <p className={styles.paragraph}>
          You agree to use the Site only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Site. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue on the Site.
        </p>

        <h2 className={styles.sectionTitle}>3. Intellectual Property</h2>
        <p className={styles.paragraph}>
          All content on the Site, including text, graphics, logos, images, and software, is the property of Pugatoes or its content suppliers and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on the Site without our express written permission.
        </p>

        <h2 className={styles.sectionTitle}>4. User Accounts</h2>
        <p className={styles.paragraph}>
          If you create an account on the Site, you are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
        </p>

        <h2 className={styles.sectionTitle}>5. Limitation of Liability</h2>
        <p className={styles.paragraph}>
          To the fullest extent permitted by law, Pugatoes shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use of the Site.
        </p>

        <h2 className={styles.sectionTitle}>6. Governing Law</h2>
        <p className={styles.paragraph}>
          These Terms shall be governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts located within [Your State/Country] to resolve any legal matter arising from these Terms.
        </p>

        <h2 className={styles.sectionTitle}>7. Contact Us</h2>
        <p className={styles.paragraph}>
          If you have any questions about these Terms, please contact us at:
        </p>
        <p className={styles.contactInfo}>
          <strong>Pugatoes</strong><br />
          Email: <a href="mailto:support@pugtatoes.com" className={styles.link}>support@pugtatoes.com</a>
        </p>
      </div>
    </>
  );
};

export default TermsAndConditions;
