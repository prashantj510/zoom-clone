import React from 'react';

interface MeetingProps {
  params: {
    id: string;
  };
}

const Meeting: React.FC<MeetingProps> = ({ params }) => {
  return (
    <div>
      Meeting Room : {params.id}
    </div>
  );
};

export default Meeting;
