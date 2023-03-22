import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';

function MusicList() {
  const [musicList, setMusicList] = useState([
    'Lift Me Up. Rihanna.',
    'Unholy (feat. Kim Petras) Sam Smith.',
    'As It Was. Harry Styles.'
  ]);

 

  return (
<div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <div className="">
        <h2> Lista de Músicas</h2>
      <style>
        {`.custom-list-group-item {
            color: white;
          background-color: transparent;
          border-color: #ccc;
        }`}
      </style>
      <ListGroup>
        {musicList.map((music, index) => (
          <ListGroup.Item key={index} className="custom-list-group-item" >
            {music}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-primary me-3">Play</button>
        <button className="btn btn-primary">Próxima</button>
      </div>
    </div>
</div> 
  );
}

export default MusicList;
