import React from 'react';

interface MeetingProps {
  params: Promise<{ id: string }>;
}

const Meeting: React.FC<MeetingProps> = async ({ params }) => {
  const resolvedParams = await params;
  
  return (
    <div>
      Meeting Room : {resolvedParams.id}
    </div>
  );
};

export default Meeting;
