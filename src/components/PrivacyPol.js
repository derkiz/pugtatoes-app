import React from 'react';
import styles from './common-style.module.css';

const PrivacyPol = () => {
  return (
    <>
      <div className={styles.flex_container}>
        <div className={styles.container}>
          <h1 className={styles.title}>Privacy Policy</h1>

          <p className={styles.date}><strong>Effective Date:</strong> August 8, 2024</p>
          <p className={styles.date}><strong>Last Updated:</strong> August 8, 2024</p>

          <p className={styles.paragraph}>
            Your privacy is important to us. This Privacy Policy explains how Pugatoes ("we," "our," or "us") collects, uses, and shares information about you when you visit or use our website <a href="https://www.pugtatoes.com" className={styles.link}>www.pugtatoes.com</a> ("Site"). This policy also covers how we handle data when you interact with our services provided through the Site.
          </p>

          <h2 className={styles.sectionTitle}>1. Information We Collect</h2>

          <h3 className={styles.subTitle}>a. Personal Information</h3>
          <p className={styles.paragraph}>We may collect personal information that you provide directly to us when you:</p>
          <ul className={styles.list}>
            <li>Register for an account.</li>
            <li>Place an order or make a purchase through our Site (via Stripe).</li>
            <li>Subscribe to our newsletter or other communications.</li>
            <li>Contact us via email, forms, or other communication methods.</li>
          </ul>

          <p className={styles.paragraph}>This information may include, but is not limited to:</p>
          <ul className={styles.list}>
            <li>Name</li>
            <li>Email address</li>
            <li>Shipping address</li>
            <li>Billing address</li>
            <li>Payment information (handled securely by Stripe)</li>
            <li>Phone number</li>
          </ul>

          <h3 className={styles.subTitle}>b. Automatically Collected Information</h3>
          <p className={styles.paragraph}>
            When you visit our Site, we may automatically collect information about your device and usage of the Site, including:
          </p>
          <ul className={styles.list}>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Time zone settings</li>
            <li>Operating system and platform</li>
            <li>Referring URLs</li>
            <li>Pages viewed and time spent on each page</li>
          </ul>

          <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>

          <p className={styles.paragraph}>We use the information we collect for various purposes, including:</p>
          <ul className={styles.list}>
            <li>To process and fulfill your orders, including to manage payments and delivery.</li>
            <li>To communicate with you about your orders, accounts, and other customer service needs.</li>
            <li>To send you promotional emails, newsletters, and other marketing communications (you can opt out at any time).</li>
            <li>To improve our Site, products, and services.</li>
            <li>To personalize your experience on our Site.</li>
            <li>To comply with legal obligations and enforce our terms and conditions.</li>
          </ul>

          <h2 className={styles.sectionTitle}>3. How We Share Your Information</h2>

          <p className={styles.paragraph}>We may share your information with:</p>
          <ul className={styles.list}>
            <li><strong>Service Providers:</strong> We use third-party service providers, such as Stripe, for payment processing and Strapi for content management. These providers only have access to your information as necessary to perform their functions and are required to protect your information.</li>
            <li><strong>Legal Compliance:</strong> We may disclose your information if required by law, or in response to a subpoena or court order.</li>
            <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
          </ul>

          <h2 className={styles.sectionTitle}>4. Cookies and Tracking Technologies</h2>

          <p className={styles.paragraph}>
            We use cookies and similar tracking technologies to collect and use personal information about you, including to serve interest-based advertising. For more information about our use of cookies, please refer to our <a href="#" className={styles.link}>Cookie Policy</a>.
          </p>

          <h2 className={styles.sectionTitle}>5. Data Security</h2>

          <p className={styles.paragraph}>
            We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee its absolute security.
          </p>

          <h2 className={styles.sectionTitle}>6. Your Choices</h2>

          <p className={styles.paragraph}>
            You have the following rights regarding your personal information:
          </p>
          <ul className={styles.list}>
            <li><strong>Access:</strong> You may request access to your personal information that we hold.</li>
            <li><strong>Correction:</strong> You may request that we correct any inaccurate or incomplete personal information.</li>
            <li><strong>Deletion:</strong> You may request that we delete your personal information, subject to certain exceptions.</li>
          </ul>

          <p className={styles.paragraph}>
            To exercise any of these rights, please contact us at <a href="mailto:support@pugtatoes.com" className={styles.link}>support@pugtatoes.com</a>.
          </p>

          <h2 className={styles.sectionTitle}>7. Children's Privacy</h2>

          <p className={styles.paragraph}>
            Our Site is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have inadvertently collected such information, we will take steps to delete it.
          </p>

          <h2 className={styles.sectionTitle}>8. Changes to This Privacy Policy</h2>

          <p className={styles.paragraph}>
            We may update this Privacy Policy from time to time. If we make changes, we will notify you by revising the "Last Updated" date at the top of this policy. We encourage you to review this Privacy Policy periodically to stay informed about our practices.
          </p>

          <h2 className={styles.sectionTitle}>9. Contact Us</h2>

          <p className={styles.paragraph}>
            If you have any questions or concerns about this Privacy Policy, please contact us at:
          </p>

          <p className={styles.contactInfo}>
            <strong>Pugtatoes</strong><br />
            <a href="mailto:support@pugtatoes.com" className={styles.link}>support@pugtatoes.com</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPol;
