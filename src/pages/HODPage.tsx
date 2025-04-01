import React from 'react';
import ImageWithFallback from '../components/ImageWithFallback';

const HODPage: React.FC = () => {
  return (
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="flex items-center gap-4">
          <ImageWithFallback
            src="/images/hod.jpeg"
            alt="HOD SCSIT"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="text-2xl font-bold text-foreground">Our HOD Quote</h3>
            <p className="text-sm text-muted-foreground">Dr. Ugrasen Suman</p>
          </div>
        </div>
      </div>
      <p className="text-foreground">
        SCSIT, established in 1986, is a hub for cutting-edge tech education, offering M.Tech, M.Sc., MBA, PGDCA, and BCA programs tailored to industry needs. With a strong focus on research, innovation, and entrepreneurship, the school provides state-of-the-art labs, ICT-enabled infrastructure, and collaborations with top organizations like DRDO, ISRO, and C-DAC. Students gain hands-on experience through projects, internships, and real-world problem-solving, fostering technical expertise and leadership. Supported by various student development initiatives and backed by experienced faculty, SCSIT is committed to shaping future-ready IT professionals equipped to drive technological advancements and entrepreneurship.
      </p>
    </div>
  );
};

export default HODPage; 