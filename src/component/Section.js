import { useState } from "react";

import { useEffect } from "react";

function Section() {
  const [formData, setFormData] = useState({
    Toptext: "",
    BottomText: "",
    randomImage: "./memek.jpg",
  });

  const [MemesData, setMemesData] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMemesData(data.data.memes));
  }, []);

  console.log(MemesData);

  console.log(formData.randomImage);

  function getMemes() {
    const randomNumber = Math.floor(Math.random() * MemesData.length);
    const url = MemesData[randomNumber].url;
    setFormData((prevdata) => ({
      ...prevdata,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((prevdata) => {
      return { ...prevdata, [name]: value };
    });
  }

  return (
    <div className="section">
      <h1>Make some cool memes Using top and bottom Text</h1>
      <div className="edit">
        <input
          type="text"
          className="input "
          placeholder="Top Text"
          name="Toptext"
          value={formData.Toptext}
          onChange={handleChange}
        />
        <input
          type="text"
          className="input"
          placeholder="Bottom Text"
          name="BottomText"
          value={formData.BottomText}
          onChange={handleChange}
        />
        <button className="btn" onClick={getMemes}>
          Get A New Meme
        </button>
      </div>
      <div className="img">
        <img src={formData.randomImage} width={"400px"} alt="" />

        <h2 className="top"> {formData.Toptext}</h2>
        <h2 className="bottom">{formData.BottomText}</h2>
      </div>
    </div>
  );
}
export default Section;
