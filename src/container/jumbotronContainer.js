import React from 'react';
import jumboData from '../fixtures/jumbo.json';
import Jumbotron from '../components/jumbotron';

export default function JumbotronContainer() {
  return (
    <div>
      <Jumbotron.Container>
        {jumboData.map((item) => {
          const { title, subTitle, image, alt } = item;
          return (
            <Jumbotron key={item.id} direction={item.direction}>
              <Jumbotron.Pane>
                <Jumbotron.Title>{title}</Jumbotron.Title>
                <Jumbotron.SubTitle>{subTitle}</Jumbotron.SubTitle>
              </Jumbotron.Pane>

              <Jumbotron.Pane>
                <Jumbotron.Image src={image} alt={alt} />
              </Jumbotron.Pane>
            </Jumbotron>
          );
        })}
      </Jumbotron.Container>
    </div>
  );
}
