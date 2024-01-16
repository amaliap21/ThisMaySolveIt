import React from 'react';
import IconPage from '../icon-page';

const Idea = () => {
  const events = [
    {
      title: "Philosophiae Quidem Philosoph",
      problem: "Graecis legendis operam malle consumere",
      category: "Environment",
      ideaDescription: "Confirmat autem illud vel maxime, quod ipsa natura,  ut ait ille, sciscat et probet, id est voluptatem et dolorem. ad haec et quae sequamur et quae fugiamus refert omnia  illud vel maxime, quod ipsa natura,  ut ait ille, sciscat et probet, id est voluptatem et dolorem. ad haec et quae sequamur et quae fugiamus refert omnia.",
      proposer: "johdoe.2023@xmail.com",
      imageAlt: "Buku",
      imageUrl: "/ideas-6.png",
      width: 400,
      height: 400,
    },
  ];

  return (
    <div>
      {/* Mapping and rendering each event */}
      {events.map((event, index) => (
        <IconPage
          key={index} // Use index as the key
          title={event.title}
          problem={event.problem}
          category={event.category}
          ideaDescription={event.ideaDescription}
          proposer={event.proposer}
          imageAlt={event.imageAlt}
          imageUrl={event.imageUrl}
          width={event.width}
          height={event.height}

        />
      ))}
    </div>
  );
};

export default Idea;