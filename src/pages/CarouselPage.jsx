import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import Flicking from '@egjs/react-flicking';
import { Fade, Perspective, AutoPlay } from '@egjs/flicking-plugins';
import '@egjs/flicking/dist/flicking.css';
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
import { listThemes } from 'src/graphql/queries';

function CarouselPage() {

  const [themes, setThemes] = useState([]);
  console.log(themes);
  useEffect(() => {
    fetchThemes()
  }, [])

  const fetchThemes = async () => {
    try {
      const themeData = await API.graphql(graphqlOperation(listThemes));
      const themeList = themeData.data.listThemes.items;
      console.log('theme list', themeList);
      setThemes(themeList);

    } catch (err) {
      console.log('failed to fetch themes', err);
    }
  }

  return (
    <Flicking
      circular
      plugins={[
        new Fade(),
        new Perspective(),
        new AutoPlay({ duration: 5000, direction: "NEXT", stopOnHover: true })
      ]}
      className="card-carousel"
    >
      <div className="card">Card 1</div>
      <div className="card">Card 2</div>
      <div className="card">Card 3</div>
      <div className="card">Card 1</div>
      <div className="card">Card 2</div>
      <div className="card">Card 3</div>
      <div className="card">Card 1</div>
      <div className="card">Card 2</div>
      <div className="card">Card 3</div>
    </Flicking>
  );
};

export default CarouselPage;
