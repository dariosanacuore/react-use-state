import { useState } from "react";
import { languages } from "./assets/languages.js";
import "./App.css";


function App() {

  const [selected, setSelected] = useState(null);

  function showLanguage(id) {

    let lang = null;

    for (let i = 0; i < languages.length; i++) {
      if (languages[i].id === id) {
        lang = languages[i];
      }
    }

    setSelected(lang);
  }

  return (
    <div>
      <ul className="listItem">
        {languages.map(function (lang) {
          return (
            <li key={lang.id}>
              <button className="btn" onClick={function () { showLanguage(lang.id) }}>
                {lang.title}
              </button>
            </li>
          );
        })}
      </ul>

      {selected && (
        <div>
          <h2>{selected.title}</h2>
          <p>{selected.description}</p>
        </div>
      )}
    </div>
  );
}

export default App;

