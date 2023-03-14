import React, { useContext, useState } from "react";
import ReactMarkdown from "react-markdown";
import UserContext from "../context/UserContext";
import Navbar from "./Navbar";
import "./MdCreator.css";

function MdCreator() {
  const UserContextData = useContext(UserContext);
  return (
    <main>
      <Navbar />

      <section className="markdown">
        <textarea
          className="input"
          value={UserContextData.markdown}
          onChange={(e) => UserContextData.setMarkdown(e.target.value)}
        ></textarea>


        <article className="result">
          <ReactMarkdown>{UserContextData.markdown}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

export default MdCreator;
