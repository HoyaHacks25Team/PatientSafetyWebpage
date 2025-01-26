import React from 'react';

const Features = () => (
  <div className="container my-5">
    <h2 className="text-center mb-4">Features</h2>
    <p className="lead text-center">
      MedManager combines cutting-edge technology with user-friendly design to revolutionize medication management. Here’s what makes MedManager indispensable:
    </p>
    
    <div className="row mt-4">
      <div className="col-md-6">
        <h4>1. Medication Tracking</h4>
        <p>
          Keep all your medications organized in one place. MedManager allows users to log their prescriptions, dosages, and schedules for better medication adherence.
        </p>
      </div>
      <div className="col-md-6">
        <h4>2. Conflict Detection</h4>
        <p>
          Automatically detects potential conflicts between medications. Our app cross-references your prescriptions to identify harmful interactions and alerts you immediately.
        </p>
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-md-6">
        <h4>3. AI-Powered Verification</h4>
        <p>
          Verify medications easily with our AI model. By using your phone’s camera, MedManager ensures that the medication you received matches the prescription provided by your doctor.
        </p>
      </div>
      <div className="col-md-6">
        <h4>4. MediBot: Your Virtual Assistant</h4>
        <p>
          Meet <strong>MediBot</strong>, your intelligent chatbot assistant. Whether you have questions about your medications or need help navigating the app, MediBot provides real-time guidance.
        </p>
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-md-6">
        <h4>5. Multilingual Support (Coming Soon)</h4>
        <p>
          Medication safety is universal. We’re working to make MedManager accessible to users from diverse linguistic backgrounds by adding multi-language support.
        </p>
      </div>
      <div className="col-md-6">
        <h4>6. Healthcare Provider Mode (Future Development)</h4>
        <p>
          Our vision includes a dedicated mode for healthcare providers. This feature will enable doctors, nurses, and pharmacists to manage multiple patients’ medications seamlessly.
        </p>
      </div>
    </div>

    <div className="text-center mt-5">
      <h5>Why MedManager?</h5>
      <p>
        With medication-related errors accounting for 44% of all medical harm and an aging population relying on multiple prescriptions, MedManager is your ultimate tool for ensuring safety and peace of mind.
      </p>
    </div>
  </div>
);

export default Features;
