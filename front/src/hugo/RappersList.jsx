import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

const AddRappers = () => {
  const [existingRappers, setExistingRappers] = useState([]);
  const [filename, setFilename] = useState("");

  useEffect(() => {
    axios
      .get(`${API_URL}/api/rappers`)
      .then((res) => setExistingRappers(res.data));
  });
};
