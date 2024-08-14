// components/Contact.js
'use client'
import { useState } from 'react';
import styles from './contact.module.css';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const [status, setStatus] = useState('');

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleFocus = (e) => {
		const label = e.target.previousElementSibling;
		if (label) {
			label.classList.add(styles.focused);
		}
	};

	const handleBlur = (e) => {
		const label = e.target.previousElementSibling;
		if (label && e.target.value === '') {
			label.classList.remove(styles.focused);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus('Sending...');

		const payload = {
			to: 'aconejulien@gmail.com', // Pugtatoes Email
			subject: `Pugtatoes - Message from ${formData.name}`, // Subject
			text: `Pugtatoes - Message from: ${formData.email}\n\n${formData.message}` // Message content including the user's email
		};

		try {
			const response = await fetch('/api/sender/', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payload),
			});

			if (response.ok) {
				setStatus('Message sent successfully!');
				setFormData({ name: '', email: '', message: '' });
			} else {
				const errorText = await response.text();
				setStatus(`Failed to send message. ${errorText}`);
			}
		} catch (error) {
			setStatus(`Failed to send message. ${error.message}`);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.flex_container}>
				<div className={styles.form_container}>
          <div className={styles.tcontainer}>
					  <div className={styles.title}>Contact Us</div>
          </div>
					<div className={styles.subText}>
						Got a question or want to get in touch? 
						We’re here to help! Feel free to reach out 
						anytime. Our <strong>support hours</strong> are Monday 
						through Friday, from 7am to 3pm.
					</div>
					<form onSubmit={handleSubmit}>
						<div className={styles.form_group}>
							<div className={styles.input_container}>
								<label className={styles.label} htmlFor="name">Your Name *</label>
								<input
									type="text"
									name="name"
									id="name"
									value={formData.name}
									onChange={handleChange}
									onFocus={handleFocus}
									onBlur={handleBlur}
									required
								/>
							</div>
							<div className={styles.input_container}>
								<label className={styles.label} htmlFor="email">Your Email *</label>
								<input
									type="email"
									name="email"
									id="email"
									value={formData.email}
									onChange={handleChange}
									onFocus={handleFocus}
									onBlur={handleBlur}
									required
								/>
							</div>
						</div>
						<div className={styles.input_container}>
							<label className={styles.label_2} htmlFor="message">Your Message *</label>
							<textarea
								name="message"
								id="message"
								value={formData.message}
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								required
							/>
						</div>
						<button type="submit">Send</button>
            <div className={styles.tcontainer}>
						  <p>{status}</p>
            </div>
					</form>
				</div>
			</div>
		</div>
	);
}
