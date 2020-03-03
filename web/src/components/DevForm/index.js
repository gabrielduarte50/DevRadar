import React, { useState, useEffect } from "react";
import "./styles.css";

function DevForm({ onSubmit }) {
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");

  const [latitude, setLatitude] = useState(""); //criamos um estado para lat
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    //useEffect roda uma vez ou quando ha mudança de componente
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []); //dependencias do useEffect

  async function handleSubmit(e) {
    e.preventDefault(); //previne que o form envia para outra page que é padrao do HTML

    await onSubmit({
      github_username,
      techs,
      latitude,
      longitude
    });
    setGithubUsername(""); //apagar do input automatico
    setTechs("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-block">
        <label htmlFor="github_username">User_Git</label>
        <input
          name="github_username"
          id="github_username"
          value={github_username}
          onChange={e => setGithubUsername(e.target.value)}
          required
        />
      </div>
      <div className="input-block">
        <label htmlFor="techs">Techs</label>
        <input
          name="techs"
          id="techs"
          value={techs}
          onChange={e => setTechs(e.target.value)}
          required
        />
      </div>
      <div className="input-block">
        <label htmlFor="username_github">User_Name_Git</label>
        <input name="username_github" id="username_github" required />
      </div>
      <div className="input-group">
        <div className="input-block">
          <label htmlFor="latitude">Latitude</label>
          <input
            name="latitude"
            id="latitude"
            value={latitude}
            onChange={e => setLatitude(e.target.value)}
            required
          />
        </div>

        <div className="input-block">
          <label htmlFor="longitude">Longitude</label>
          <input
            name="longitude"
            id="longitude"
            value={longitude}
            onChange={e => setLongitude(e.target.value)}
            required
          />
        </div>
      </div>
      <button type="submit">SALVAR</button>
    </form>
  );
}

export default DevForm;
